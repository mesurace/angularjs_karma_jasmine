# angularjs_karma_jasmine

# Steps:

# 1. Set up(on mac)

1. Create a folder in a desired directory in your PC
2. Open terminal and set your folder to current directory.
3. Make sure you have npm installed.

          Run : npm init
     
4. Install karma
    
          Run : npm install karma --save -dev

5. Install jasmine

          Run : npm install karma-jasmine --save-dev
          Run : npm install  jasmine-core
      
6. Install angular, angular-mocks, angular-resource

          Run : npm install angular
          Run : npm install angular-mocks
          Run : npm install angular-resource

7. Install phantomJS

          Run : npm install phantomjs
      
8. start karma 

          Run : npm init
     You will see questions and select the following answers
     
        -> jasmine -> no ->PhantomJS -> - -> - -> yes
        
# 2. Run 

1. Create app and tests folder
    
              inside app create app.js
              inside tests create test.js
   (find those folders in above code)
  
2. Open karma.confg.js and add following lines in  Files as

               files: [
              'node_modules/angular/angular.js',
              'node_modules/angular-mocks/angular-mocks.js',
              'node_modules/angular-resource/angular-resource.js',
              'app/*.js',
              'tests/*.js'
              ]

    
3. Finally,  
    
          run karma start karma.conf.js
    
    If you see "Executed 2 of 2 SUCCESS". Then you are done :)
    
