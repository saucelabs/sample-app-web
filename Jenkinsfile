pipeline {
    agent any

    stages {

        stage('Install dependencies') {
            steps {
                sh "npm install"
            }
        }

        stage('Run Unit Tests with coverage') {
            steps {
                sh "npm test"
            }
            post {
              always {
                publishHTML target: [
                  allowMissing         : false,
                  alwaysLinkToLastBuild: false,
                  keepAll             : true,
                  reportDir            : '.coverage/lcov-report',
                  reportFiles          : 'index.html',
                  reportName           : 'Code Coverage Report'
                ]
              }
            }
        }

        stage('Build application') {
            steps {
            	sh "npm run serve &"
            }
        }

        stage('Run Functional Tests') {
            steps {
              sauce('SAUCE_ACCESS_KEY') {
                sauceconnect(options: '', sauceConnectPath: '', useGeneratedTunnelIdentifier: true, useLatestSauceConnect: true) {
                  wrap([$class: 'AnsiColorBuildWrapper', 'colorMapName': 'xterm']) {
                    sh "npm run test.e2e.sauce.all ${env.CLI_ARGS}"
                  }
                  step([$class: 'SauceOnDemandTestPublisher'])
                }
              }
            }
        }
    }
}
