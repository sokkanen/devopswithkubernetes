const errorHandler = (error, type, ns, name) => {
    if (error.statusCode === 409) {
        console.log(`${type} for ${name} in ${ns} namespace already exists.`)
    } else {
        console.log(`Error in creating ${type}:`, error.message, ' status: ', error.statusCode)
    }
}

export const createDeployment = async (api, ns, name, image, website_url) => {
    console.log(`Creating a Deployment for ${name} in ${ns} namespace.`)
    try {
        await api.createNamespacedDeployment(ns, {
            metadata: {
                name: `${name}-app-dep`
            },
            spec: {
                replicas: 1,
                selector: {
                    matchLabels: {
                        app: `${name}-app`
                    }
                },
                containers: [
                    {
                        name: `${name}-app`,
                        image: image,
                        args: [website_url],
                        ports: [
                            {
                                containerPort: 8080
                            }
                        ]
                    }
                ]
            }
        })
        console.log(`Creating Deployment for ${name} completed successfully.`)
    } catch (error) {
        console.log(error)
        errorHandler(error, 'Deployment', ns, name)
    }
}

export const createService = async (api, ns, name) => {
    console.log(`Creating a new Service for ${name}...`)
    try {
        const response = await api.createNamespacedService(ns, {
            apiVersions: 'v1',
            kind: 'Service',
            metadata: { 
                name: `${name}-svc`,
                namespace: ns
            },
            spec: {
              type: 'ClusterIP',
              selector: {
                app: `${name}-app`
              },
              ports: [{
                name: 'http',
                port: 80,
                protocol: 'TCP',
                targetPort: 8080
              }]
            }
        })
        console.log(`Creating service for ${name} completed successfully.`)
    } catch (error) {
        errorHandler(error, 'Service', ns, name)
    }
}

export const createIngress = async (api, ns, name) => {
    console.log(`Creating a new Ingress for ${name}...`)
    const ingressResponse = await api.listNamespacedIngress(ns)
    if (ingressResponse.body.items.length > 0) {
        console.log(`An Ingress for DummySite in the ${ns} namespace already exists. Aborting request.`)
    } else {
        try {
            const response = await api.createNamespacedIngress(ns, {
                apiVersions: 'networking.k8s.io/v1',
                kind: 'Ingress',
                metadata: { name: `${name}-ingress` },
                spec: {
                  rules: [{
                    http: {
                        paths: [{
                            path: '/',
                            pathType: 'Prefix',
                            backend: {
                                service: {
                                    name: `${name}-svc`,
                                    port: {
                                        number: 80
                                    }
                                }
                            },
                          }]
                    }
                  }]
                }
            })
            console.log(`Creating Ingress for ${name} completed successfully.`)
        } catch (error) {
            errorHandler(error, 'Ingress', ns, name)
        }
    }
}