pipeline{
  agent any

  stages{
    stage('Install'){
      steps{
        bat 'call npm install'
      }
    }
    stage('Build'){
      steps{
        bat 'call npm run build'
      }
    }
    stage('Deploy'){
      steps{
      bat 'xcopy /E /I /Y dist deployed'
      echo 'success'
      }
    }
  }
}
