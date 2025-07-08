pipeline {
  agent any

  stages {
    stage('Run Playwright in Docker') {
      steps {
        sh '''
          docker run --rm -v %cd%:/tests -w /tests mcr.microsoft.com/playwright:v1.53.0-noble /bin/bash -c "
            npm i -D @playwright/test &&
            npx playwright install &&
            npx playwright test UploadFiles.spec.js --project=chromium --headed
          "
        '''
      }
    }
  }
}
