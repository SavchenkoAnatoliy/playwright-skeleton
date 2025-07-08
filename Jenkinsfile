pipeline {
  agent { 
    docker { 
      image 'mcr.microsoft.com/playwright:v1.53.0-noble'
    } 
  }
  stages {
    stage('install playwright') {
      steps {
        sh '''
          npm i -D @playwright/test
          npx playwright install
        '''
      }
    }
    stage('help') {
      steps {
        sh 'npx playwright test --help'
      }
    }
    stage('test') {
      steps {
        sh '''
          npx playwright test --list
          npx playwright test UploadFiles.spec.js --project=chromium --headed
        '''
      }
    }
  }
}