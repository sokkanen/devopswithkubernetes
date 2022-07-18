import k8s from '@kubernetes/client-node'

const kc = new k8s.KubeConfig();
kc.loadFromCluster()

const k8sIngressApi = kc.makeApiClient(k8s.NetworkingV1Api)
const k8sApi = kc.makeApiClient(k8s.CoreV1Api)
const kubeWatch = new k8s.Watch(kc);

const createService = async (namespace, name) => {
    console.log('Creating a new Service...')
    try {
        const response = await k8sApi.createNamespacedService(namespace, {
            apiVersions: 'networking.k8s.io/v1',
            kind: 'Service',
            metadata: { name: `${name}-svc` },
            spec: {
              type: 'ClusterIP',
              selector: {
                app: `${name}-app`
              },
              ports: [{
                port: 80,
                protocol: 'TCP',
                targetPort: 8080
              }]
            }
        })
        console.log(response)
    } catch (error) {
        console.log(`OH NO!`, error)
    }
}

const createIngress = async (namespace, name) => {
    console.log('Creating a new Ingress...')
    try {
        const response = await k8sIngressApi.createNamespacedIngress(namespace, {
            apiVersions: 'networking.k8s.io/v1',
            kind: 'Ingress',
            metadata: { name: `${name}-ingress` },
            spec: {
              rules: [{
                http: {
                    paths: [{
                        pathType: 'Prefix',
                        backend: {
                          serviceName: `${name}-svc`,
                          servicePort: 80
                        },
                        path: '/'
                      }]
                }
              }]
            }
        })
        console.log(response)
    } catch (error) {
        console.log(`OH NO!`, error)
    }
}


kubeWatch.watch('/apis/experimental.jso/v1/dummysites',{ allowWatchBookmarks: true },
async (type, apiObj, watchObj) => {
        if (type === 'ADDED') {
            const meta = apiObj.metadata
            console.log(`new Dummysite object ${meta.name} (${meta.uid})`);
            console.log(apiObj)
            const image = apiObj.spec.image
            const url = apiObj.spec.url
            const ns = meta.namespace
            const name = meta.name
            await createService(ns, name)
            await createIngress(ns, name)
        } else if (type === 'MODIFIED') {
            console.log('changed object:');
        } else if (type === 'DELETED') {
            console.log('deleted object:');
        } else if (type === 'BOOKMARK') {
            console.log(`bookmark: ${watchObj.metadata.resourceVersion}`);
        } else {
            console.log('unknown type: ' + type);
        }
        
    },(err) => { console.log(err); }
)