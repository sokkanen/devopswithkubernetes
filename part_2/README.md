## 2.01 - Logger, PingPong & Timestamper

### Steps

- Modified both Timestamper and Pingpong to not save on volume, but to response to HTTP-request
- Created services for both Timestamper and Pingpong
- Commented out all the volumes
- Modified Logger application & Logger's deployment, service & ingress.

### Output

![program output](output_201.png "Deployment")

## 2.02 - Project

### Steps

- Total rebuild for project (apps/project & apps/project_front)
  - UI With React and proxying Express BFF
  - Backend with Express
- Re-applying deployments, services and ingress for the backend.

### Output

![program output](output_202.png "Deployment")

## 2.03 - Logger, PingPong & Timestamper

### Steps

- Created namespace `logger-namespace`
- Deployed everything to the new namespace

### Output

![program output](output_203.png "Deployment")

## 2.04 - Project (todoapp)

### Steps

- Created namespace `todo-namespace`
- Deployed everything to the new namespace

### Output

![program output](output_204.png "Deployment")