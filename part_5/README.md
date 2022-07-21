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