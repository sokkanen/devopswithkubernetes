import k8s from '@kubernetes/client-node'
import { 
    createIngress, 
    createService,
    createDeployment
} from './k8s-resources.js'

const kc = new k8s.KubeConfig();
kc.loadFromCluster()

const k8sIngressApi = kc.makeApiClient(k8s.NetworkingV1Api)
const k8sCoreApi = kc.makeApiClient(k8s.CoreV1Api)
const k8sAppsApi = kc.makeApiClient(k8s.AppsV1Api);
const kubeWatch = new k8s.Watch(kc);

const createResources = async (apiObj) => {
    const meta = apiObj.metadata
    console.log(`new Dummysite object ${meta.name} (${meta.uid})`);
    const image = apiObj.spec.image
    const website_url = apiObj.spec.website_url
    const ns = meta.namespace
    const name = meta.name
    await createService(k8sCoreApi, ns, name)
    await createIngress(k8sIngressApi, ns, name)
    await createDeployment(k8sAppsApi, ns, name, image, website_url)
}

kubeWatch.watch('/apis/experimental.jso/v1/dummysites',{ allowWatchBookmarks: true },
async (type, apiObj, watchObj) => {
        if (type === 'ADDED') {
            await createResources(apiObj)
        } else if (type === 'MODIFIED') {
            console.log('changed object:');
        } else if (type === 'DELETED') {
            console.log('deleted object:');
        } else if (type === 'BOOKMARK') {
            console.log('bookmark...');
        } else {
            console.log('unknown type: ' + type);
        }

    },(err) => { console.log('Error in main loop: ', err.message); }
)