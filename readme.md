## Run docker container on AWS EC2

## Run docker container on AWS ECS as managed remote machine
- Need to put an image docker hub
- Go to AWS Console and search ESC
- Click 'get start' button and fill base settings
    - select custom since you want to run your image 
    - Image: orifjon9/{image_name}
    - Port: the same in and out
    - Usually it creates on Fargate
    - then create

## Manually create with mondodb in a container
MondoDB and a backend app run on ecs the same task and service
[Go to source codes](https://github.com/orifjon9/FeedBoard)


- Go to AWS Console and search ESC
- Create a cluster
- Create a Task Definitions
    - Fargate
        - Add Containers for mongo and feedboard api
        - Add volume EFS to store mongo db data. Not need if you use 3rd party db service
- Run task that was created on Task Definition step
- Create VPC 
    - set sub nets
    - create Internet gateway and set
        - Link Route tabe with vreate igw
- Create a service
    - Create Application Loab Balance and assign it
        - Make sure listener is correct otherwise you get 503

The api should start responding now
- Set up storage 
    - Create a new EFS
        - make sure they are the same VPC with esc
        - and click customize
            - create a new security group
                - select the right vpc
                    - Add inbound rule
                        -  NFS and select ecs security group(s)
            - go to network and select the vpc
                - add mount targets with created efs-security group

- Go to Task definition(ecs)
    - Select prevous created task definition
        - then create revision
            - Add volume that created EFS
            -  Edit mongodb container
                - Go to Storage and logging
                    - Set mount point to created volume in the previous screen
                    - '/data/db' to container path
            -  create

     - Action -> update
        - check Force new deployment
        - select Platfort version last number not LATEST
        - Update after skip review

The new updated task should run.


## UI(React) + Backend(Node) + MongoDB Atlas
The first, we need to have an account on MongoDB Atlas then create a cluster with selecting aws and region where we run our backend services close by. Make sure, MongoDB Atlas allow pass request from aws

We have source codes. [Go to source codes](https://github.com/orifjon9/FeedBoard)
There are ui and api apps codes

Just follow to the steps above.  So, here we will be have one service and two tasks under the service
- Create a task defenition for api
    - should contain one container and It is api
- Create a task defenition for ui app
    - should contain one container and it is react app based on nginx

You can run them under one service.

Make sure MongoDB Atlas allow aws requests and open for all OR go to Network access and create a peearing(MongoDB Atlas tells what to do aws cloud side)
If you want to assign load balancers for both then set own service for both task
