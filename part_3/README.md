## 3.01 - PingPong

### Steps

- Deployed PingPong app & db to GKE
- Created loadbalancer.yaml to route requests to PingPong

### Output

![program output](output_301.png "Deployment")

## 3.02 - Logger

### Steps

- Deployed Rest of the logger stack to GKE
- Configured NodePorts for Logger & PingPong
- Configured Ingress with 2 backends

### Output

![program output](output_302.png "Deployment")

## 3.03 - Project (TodoApp)

### Steps

- Minor adjustments to application .yaml's.
- kustomization.yaml for both backend and frontend
- GitHub workflow for building & Deploying the Application

### Output

![program output](output_303.png "Deployment")

## 3.04 - Project (TodoApp)

### Steps

- Refactored GitHub action to create new deployment in a namespace `todo-<BranchName>`

### Output

![program output](output_304.png "Deployment")