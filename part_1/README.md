## 1.01 - Logger

### Building and pushing image

1. docker build -t logger .
2. docker tag logger sokkanen/logger
3. docker push sokkanen/logger

### Kube deployment

1. k3d cluster create -a 2
2. kubectl create deployment logger-dep --image=sokkanen/logger
3. kubectl logs -f logger-dep-d74cfdc49-q9q6b

![program output](output_101.png "Deployment")

## 1.02 - Project

### Building and pushing image

1. docker build -t todoapp .
2. docker tag logger sokkanen/todoapp
3. docker push sokkanen/todoapp

### Kube deployment

1. kubectl create deployment todo-dep --image=sokkanen/todoapp
2. kubectl logs -f todo-dep-< hash >

![program output](output_102.png "Deployment")

## 1.03 - Logger

### Kube deployment

1. kubectl apply -f manifests/deployment.yaml
2. kubectl logs -f logger-dep-< hash >

![program output](output_103.png "Deployment")

## 1.04 - Project

### Kube deployment

1. kubectl apply -f manifests/deployment.yaml
2. kubectl logs -f todo-dep-< hash >

![program output](output_104.png "Deployment")

## 1.05 - Project

Exposed port in Dockerfile.

### Kube deployment

1. kubectl apply -f manifests/deployment.yaml
2. kubectl port-forward todo-dep-< hash > 8080:8080

![program output](output_105.png "Deployment")

## 1.06 - Project

Created service.yaml

### Kube deployment

- kubectl apply -f manifests/service.yaml

## 1.07 - Logger

- Update to application.
- Creating ingress.yaml & service.yaml

### Kube deployment

1. kubectl apply -f manifests/deployment.yaml
2. kubectl apply -f manifests/service.yaml
3. kubectl apply -f manifests/ingress.yaml

![program output](output_107.png "Deployment")

## 1.08 - Project

- Created ingress.yaml
- Modified service.yaml from NodePort to ClusterIP

### Kube deployment

1. kubectl apply -f manifests/service.yaml
2. kubectl apply -f manifests/ingress.yaml

![program output](output_108.png "Deployment")

## 1.09 - Logger & PingPong

- Created PingPong application with deployment.yaml & service.yaml
- Modified logger's ingress.yaml to pass /pingpong to pingpong application
- Deployed everything.

![program output](output_109.png "Deployment")

## 1.10 - Logger & Timestamper

- Created Timestamper application to create file entries.
- Modified Logger to read last line of the shared file (../files/entries.txt)
- Modified logger's deployment.yaml to share volume with timestamper
- Re-Deployed logger-dep.

![program output](output_110.png "Deployment")

## 1.11 - Logger & PingPong ( & Timestamper )

- Modified PingPong to persist pongs to a file.
- Modified Logger to read pongs from a shared file (../files/pongs.txt)
- Deployed Persistent volume & Persistent volume claim
- Modified logger's deployment.yaml to share a persistent volume with PingPong
- Modified PingPong's deployment.yaml to share a persistent volume with Logger

![program output](output_111.png "Deployment")

## 1.12 - Project

- Modified Project to fetch and display a daily image
- Added a volume to the project deployment.yaml
- Deployed everything

![program output](output_112.png "Deployment")

## 1.13 - Project

- Added the required functionalities to Project (TODO-App)

![program output](output_113.png "Deployment")
