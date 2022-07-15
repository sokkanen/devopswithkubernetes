## 4.01 - PingPong & Logger

### Steps

- Created /health -endpoints for both applications
- Tested first by deploying without PingPong's DB. 
- Pods switched to "READY" status after deploying the database.

### Output

![program output](output_401.png "Deployment")

## 4.02 - Project

### Steps

- Created /healthz -endpoint for both todoapp
- Tested first by deploying without DB. 
- Pods switched to "READY" status after deploying the database.

### Output

![program output](output_402.png "Deployment")

## 4.03 - Prometheus

### Steps

- Started port-forwarding
- Followed the documentation to create the requested query

### Output

![program output](output_403.png "Deployment")

## 4.04 - Project

### Steps

- Started Rollout & Analysistemplate for the project backend
- Tested with `result[0] == 0.00` to ensure a failing analysis will prevent deployment.
- Returned to sane values and got a successful rollout.

### Output (Failed)

![program output](output_404a.png "Deployment")

### Output (Success)

![program output](output_404b.png "Deployment")

## 4.05 - Project

### Steps

- Done both UI & Backend

### Output

![program output](output_405.png "Deployment")

## 4.06 - Project

### Steps

- Deployend NATS to the local Cluster
- Created Broadcaster microservice to subscribe to NATS and forward messages to Telegram. 
  - Deployed the service with 6 replicas. 
  - A named queue solved all the issues with multiple messages being sent to Telegram.
- Refactored project backend to publish new todos to NATS subject.

### Output

![program output](output_406.gif "Deployment")

## 4.07 - Flux

### Steps

- Flux repository: https://github.com/sokkanen/kube-cluster-dwk/
  - Included resources:
    - Namespaces
    - Argo-rollouts
    - Prometheus
    - NATS
  - Tested with deleting and re-creating cluster