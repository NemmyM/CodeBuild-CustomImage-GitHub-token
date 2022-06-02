# CodeBuild-CustomImage-GitHub-token
  Deploys a compact CodeBuild project that fetches a custom Ubuntu image from ECR. The image has more recent NodeJS than what CodeBuild curated images offer(at least at the time of this writting). 
  Afterwards it runs unit testing using Jest and publishes output to AWS CodeReport.
  
  Instead of using AWS built-in connection that handles the integration of GitHub with CodeBuild for you, this project will use a git client installed locally 
  on the build image to fetch GitHub repository data, by means of a GitHub personal token. The token is stored in the SSM store as a secure string and only fetched during build time.

## Requirements

  - An AWS account.
  - Docker installed, since we'll need to build the builder image. The Dockerfile is provided in the repo.
  

## Installation Instructions

  - Docker:
    The project contains a Dockerfile which will build you a NodeJS 16, running on Ubuntu Focal. 
    File is located at CustomBuildImage/Dockerfile
    ```
      cd CustomBuildImage
      Docker build . -t myBuildImage
    ```
  
  - Cloudformation:
    
    Head over to CloudFormation page or use AWS CLI to depoy the cf_template.yaml.  
    During deployment, there's a couple of paramaters that you'll want to adjust:
    
    CBBucket:
      S3 bucket. Place for your artifacts. The project itself doesn't use any input artifacts, and the output is just unit test reports. They don't actually get uploaded anywere!
      The bucket is there just as placeholder, in case you need to extend the project and have permissions to upload onto S3.
    GitHubRepo:
      Private/Public GitHub repository that the build image will fetch contents from, using GitHub access token.
    SSMGithubKey:
      A path that'll contain your GitHub personal access token. Stored in AWS Systems Manager>Parameter Store>SecureString
    DockerImage:
      The name of the builder Docker image, stored in your AWS ECR private repository. Reference [this](https://docs.aws.amazon.com/AmazonECR/latest/userguide/docker-push-ecr-image.html) guide if this is your first time building and publishing to ECR.
     
   
   ## Summary:
   
     - Build docker image
     - Publish image to ECR
     - Generate GitHub token
     - Insert Token into the SSM parameter store
     - Deploy Cloudformation
     - Start CodeBuild project
     - Profit!
   
  
    
    
  

