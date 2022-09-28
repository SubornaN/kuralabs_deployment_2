
//pipeline
pipeline {
  agent any
   stages {
    stage ('Build') {
      steps {
        sh '''#!/bin/bash
        python3 -m venv test3
        source test3/bin/activate
        pip install pip --upgrade
        pip install -r requirements.txt
        export FLASK_APP=application
        flask run &
        '''
     }
   }
    stage ('test') {
      steps {
        sh '''#!/bin/bash
        source test3/bin/activate
        py.test --verbose --junit-xml test-reports/results.xml
        ''' 
      }
    
      post{
        always {
          junit 'test-reports/results.xml'
        }
       
      }
    }
     stage ('Deploy') {
       steps {
         sh '/var/lib/jenkins/.local/bin/eb deploy url-shortner-dev'
       }
     }
     stage ('Email') {
       steps {          
             //mail(body: 'This is the body of the email', subject: 'This is a test email using Mailer', to: 'subornadnath@gmail.com')
      mail(
            subject: "Jenkins Job Status Report '${env.JOB_NAME}' | Build #'${env.BUILD_NUMBER}'",
            body: "Check console output at http://3.95.15.56:8080/job/Deployment_2/job/main/${env.BUILD_NUMBER}/console",
            to: 'subornadnath@gmail.com'
    )
       }
     }
  }
 }
