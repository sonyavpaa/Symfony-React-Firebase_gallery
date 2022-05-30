php bin/console make:controller
composer require maker
composer require twig

composer require symfony/webpack-encore-bundle
yarn add --dev react react-dom prop-types babel-preset-react
yarn install
yarn add @babel/preset-react@^7.0.0 --dev

yarn add @babel/preset-react --dev
yarn add react-router-dom
yarn add --dev react react-dom prop-types axios
yarn add @babel/plugin-proposal-class-properties @babel/plugin-transform-runtime

npm install react react-dom prop-types --save

yarn run encore dev --watch

appi polulla: js/app.js

- in ./webpack.config.js:

```php
    // webpack.config.js
    // ...
     Encore
         // ...
         .enableReactPreset()
         // uncomment to define the assets of the project
         .addEntry('js/app', './assets/js/app.js');
```

- create a subdirectory named js inside assets folder and add app.js file into it

- create subfolder named Components inside assets/js and create file called Items.js in it

  24.5. ->
  npm i firebase
  npm i @react-firebase/auth
  npm i @react-firebase/database
  npm install -g firebase-tools
  npm install cloudinary-react --save --force
  npm i firebase-admin
  npm i firebase@9.8.1
