## Aplicación para automatización móvil con POM (Screen Objects on mobile testing) 
### Stack tecnológico:
    - WebdriverIO v8
    - Nodejs v18
    - Android Studio
    - Appium 
    - Appium Inspector
    - BrowserStacks
    - Github
    - Github Actions
    - Mocha JS
    - Babel JS


#### Descripción general:
     Aplicación para la automatización mobile basada en webdriverio, appium con drivers para ios y android, con integración continua CI mediante Github Actions y manejo de casos de prueba, ejecución y evidencias desde local como clod (BrowserStacks), tambien con reportes de tipo allure.



#### Establecer ambiente del aplicativo
     Para ejecutar el proyecto se debe tener en cuenta lo siguiente:

     * Obtener source code:
        git clone https://github.com/JeanColonia/webdriverio-mocha-mobile-testing.git

     * obtener dependencias:
        npm init

    
#### Archivos ignorados en source code en cloud:
    * ./app : En esta carpeta se encuentran los apks utilizados para las pruebas

    * ./logs : En esta carpeta se encuentran los archivos con data generada por browserstacks u otros (informativo).

    * ./node_modules: dependencias del proyecto, las cuales pueden ser obtenidas mediante el comando npm init.

    * ./env: información de usuarios, proyecto u otros que no pueden ser subidos al repositorio  por temas de seguridad.


#### Estructura del proyecto:

    - github
        - workflow
            - ci.yaml
    + allure-reports
    + allure-results
    - app
        +android
        +ios
    -config
        -wdio.android.bs.conf.js
        -wdio.android.conf.js
        -wdio.ios.bs.conf.js
        -wdio.ios.conf.js
        -wdio.shared.conf.js
    -helpers
        -android
            +inspector
        +android
    +logs
    +node_modules
    +reports
    -test
        +data
        -screen-objects
            +android
            +ios
        -specs
            +android
            +ios
    .env
    .eslintrc
    .gitignore
    .babel.config.js
    jsconfig.json
    package-lock.json
    package.json
    README.md