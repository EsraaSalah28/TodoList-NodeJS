pipeline {
    agent any 
    parameters{
    string(name:'VERSION' ,defaultValue:'',description:'version to deploy on prod')
    choice(name:'VERSION' ,choices:['1.1.0','1.2.0','1.3.0'],description:'version to deploy on prod')
    booleanParam(name:executeTests,defaultValue:true,description:'')
    
    
    }
    stages {
        stage('Build') { 
            steps {
                echo 'Building the App ..'
            }
        }
        stage('Test') { 
            when{
                expression{
                params.executeTests
                
                }
            
            }
            steps {
              echo 'Testing the App ..'
            }
        }
        stage('Deploy') { 
            steps {
               echo 'Deploying the App ..'
                echo 'Deploying the version ${params.VERSION}'
            }
        }
    }
}
