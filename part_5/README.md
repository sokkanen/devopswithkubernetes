## 5.01 - DIY CRD & Controller

### Steps

- Created App with a Bash script
- Created Controller with JavaScript
- Created needed manifests for Controller
  - clusterrole.yaml
  - clusterrolebinding.yaml
  - deployments.yaml
  - serviceaccount.yaml
- Created needed manifests for Dummysite
  - dummysite.yaml
  - namespace.yaml
  - resourcedefinition.yaml

The implementation works fine with web_urls that respond with 200.
The implementation works with a single DummySite deployment. No logic for pruning old resources or networking for additional sites is in place.

Files in [/5_01](./5_01/) -folder.

### Output

![program output](output_501a.png "Deployment")
![program output](output_501b.png "Deployment")

## 5.02 - Project With Linkerd

### Steps

- Created a new cluster
- Created Linkerd -injected versions of the yamls to [/5_02](./5_02/) folder
- Installed Nats with Helm
- Injected NATS with `kubectl get -n todo-namespace deploy -o yaml | linkerd inject - | kubectl apply -f -`

### Output

![program output](output_502.png "Deployment")

## 5.03 - Canaries with Linkerd

### Steps

- Went through the Canary release task / demo

### Output

![program output](output_503a.png "Deployment")
![program output](output_503b.png "Deployment")
![program output](output_503c.png "Deployment")

## 5.04 - Openshift vs. Rancher

### Openshift

- An actual Kubernetes Distribution, which adds on top of vanilla K8S.
- Platform as a service (PAAS)
- Created by Red Hat. An opensource container app platform.
- Clusters must be created with Openshift.
- Offers services for single-, multi- and hybrid-cloud solutions as well as on-prem clusters.
- Opinionated approach with a lot of pre-installed tools
- Tightly coupled with Hed Hat infrastructure.

### Rancher

- A toolset for managing clusters either in the cloud or on-prem.
- Can create or import any cluster
- Open source PAAS
- Not as opinionated as Openshift

Even though I should favor one against another, the betterness of a distribution or a toolset
depends totally on current need. For my personal needs, Rancher sounds better, because of the easy installation
and it's ability to import any of my clusters to a single management UI.

## 5.05 - PingPong / Logger / Timestamper in Knative

### Steps

- Updated the envs used by applications. Built & pushed new images with `kna1` tags.
- Created Knative versions of the yamls to [/5_05](./5_05/) folder
- Applied everything but logger. Waited for all the resources to become available before applying logger.yaml.

### Output

![program output](output_505.png "Deployment")