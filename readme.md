# Photo Gallery using Symfony + React + Firebase

A photo gallery using Symfony that renders React that fetches data from Firebase database.

## Install dependencies

```cli
npm install
npm install react react-dom prop-types --save
npm install firebase
composer require symfony/webpack-encore-bundle
```

to run webpack

```cli
npm run watch
```

to start the server

```cli
symfony server:start
```

## Firebase

Add your Firebase configuration to assets/components/firebaseConfig.js, see docs to do that here:
https://firebase.google.com/docs/database/web/start

Without the config the gallery wont work.

<br>

---

<br>

### If still not working, things to check in webpack.config.js

<br>
entry file is opening the correct file

```js
.addEntry("app", "./assets/app.js")
```

React Preset is uncommented

```js
.enableReactPreset();
```
