import k8s from '@kubernetes/client-node'
import { 
    createIngress, 
    createService,
    createDeployment
} from './k8s-resources.js'

const kc = new k8s.KubeConfig();
kc.loadFromCluster()
const kubeWatch = new k8s.Watch(kc);

const createResources = async (apiObj) => {
    const meta = apiObj.metadata
    console.log(`new Dummysite object ${meta.name} (${meta.uid})`);
    const image = apiObj.spec.image
    const website_url = apiObj.spec.website_url
    const ns = meta.namespace
    const name = meta.name
    await createService(ns, name)
    await createIngress(ns, name)
    await createDeployment(ns, name, image, website_url)
}

kubeWatch.watch('/apis/experimental.jso/v1/dummysites',{ allowWatchBookmarks: true },
async (type, apiObj, _watchObj) => {
        if (type === 'ADDED') {
            await createResources(apiObj)
        }

    },(err) => { console.log('Error in main loop: ', err.message); }
)