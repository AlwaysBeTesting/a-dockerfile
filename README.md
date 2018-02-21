# Glossary
## Docker container
## Docker image
Every container is an instance of a Docker image.
## Docker compose

# Starting a docker container
## Simple example
`docker run alpine echo "Hello World"`

## Advanced options
-i
-t
-d
-p
-v
-name

## Starting, stopping and listing containers

`docker ps -a`
Lists all (running and stopped) containers

`docker stop <name/id>`
Stops a running container.

`docker start <name/id>`
Starts an existing container.

`docker rm <name/id>`
Removes a stopped container completely.



# Creating a new docker image 
## From a container
Just start a container, make necessary changes and then commit the changes to the image:


`docker images`

`docker pull <author>/<image>:<tag>`

`docker rmi  <author>/<image>:<tag>`

## Using a Dockerfile
`docker build -t ncariss/just-a-test .`
