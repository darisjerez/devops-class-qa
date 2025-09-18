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
        stage('Crear carpeta reports si no existe') {
            steps {
                bat 'if not exist reports mkdir reports'
            }
        }
        stage('Verificar reportes') {
            steps {
                bat 'dir reports'
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
