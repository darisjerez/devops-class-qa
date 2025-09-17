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
                bat 'npm install'
            }
        }
        stage('Ejecutar pruebas') {
            steps {
                bat 'npm test'
            }
        }
        stage('Construir app') {
            steps {
                bat 'npm run build'
            }
        }
    }
    post {
        always {
            junit 'reports/**/*.xml'
        }
    }
}
