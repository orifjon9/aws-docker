## Build an image
Run this command to have access example01 project source code
`cd example01`

### Build an image
`docker build -t ec2-docker-simple-node .`

### tag the image
`docker tag ec2-docker-simple-node orifjon9/ec2-docker-simple-web-app:1`

### Push to docker hub
`docker push orifjon9/ec2-docker-simple-web-app:1`


##  Run the app on AWS ec2


- Create an instance with Amazon Linux 2 AMI (HVM) AMI

- Connect to ssh or ec2 instance connect and run these command

`sudo amazon-linux-extras install docker`

`sudo service docker start`

`docker run -d -p 80:80 orifjon9/ec2-docker-simple-web-app:1`

Make sure, a security group of an ec2 allows incomming requets through 80 port