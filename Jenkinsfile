pipeline {
  agent any

  stages {
    stage('Install Dependencies') {
      steps {
        bat 'npm install -D @playwright/test'
        bat 'npx playwright install'
      }
    }
    stage('Run Tests') {
      steps {
        bat 'npx playwright test UploadFiles.spec.js --project=chromium --headed'
      }
    }
  }
}
