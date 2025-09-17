pipeline {
    agent any

    stages {
        stage('Clonar repositorio') {
            steps {
                git branch: 'Gabriel', url: 'https://github.com/darisjerez/devops-class-qa.git'
            }
        }
        stage('Instalar dependencias') {
            steps {
                sh 'npm install'
            }
        }
        stage('Ejecutar pruebas') {
            steps {
                sh 'npm test'
            }
        }
        stage('Construir app') {
            steps {
                sh 'npm run build'
            }
        }
    }
    post {
        always {
            junit 'reports/**/*.xml'
        }
    }
}
