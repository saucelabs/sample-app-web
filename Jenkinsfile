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
            	sh "npx start & npx wait-on --timeout 60000 http://localhost:3000 &"
            }
        }

        stage('Run Functional Tests') {
            steps {
              sh "npx run test.e2e.sauce.eu ${env.CLI_ARGS}"
            }
        }
    }
}
