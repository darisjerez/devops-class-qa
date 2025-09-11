Pipeline {
   agent any
    stages{
       stage('Checkout') {
          steps {
             git branch: 'Gabriel', credentialsId: 'git-gabriel-token', url: 'https://github.com/darisjerez/devops-class-qa.git'
          }
          stage('Build') {
             steps {
                echo "El pipeline se ha clonado satisfactoriamente."
             }
          }
       }
    }
}
