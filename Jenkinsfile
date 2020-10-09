pipeline {
    agent any

    tools {nodejs "12.6"}

    stages {

        stage('Install dependencies') {
            steps {
                sh "npm install"
            }
        }

        stage('Build application') {
            steps {
            	sh "npm run serve &"
            }
        }

        stage('Run Functional Tests') {
            steps {
              sh "npm run test.e2e.sauce.eu ${env.CLI_ARGS}"
            }
        }
    }
}
