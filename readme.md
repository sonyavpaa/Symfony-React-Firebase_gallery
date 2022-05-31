# Photo Gallery using Symfony + React + Firebase

A photo gallery using Symfony that renders React that fetches data from Firebase database.

<br>

# Install dependencies

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

<br>

# Firebase

Add your Firebase configuration to assets/components/firebaseConfig.js, see docs to do that here:
https://firebase.google.com/docs/database/web/start

Without the config the gallery wont work.

<br>

Images are being fetched from Firebase Realtime Database using this model:

```cli
gallery: {data: {
    1: {image: "add your Firestorage image Access token here", text:"some text"},

    2: {image: "add your Firestorage image Access token here", text:"some text"},
}
}
```

Change the get request (line 24) and rendering (line 40) in Home.js if your model is different.

About image access tokens:
https://stackoverflow.com/questions/61303497/how-can-i-retrieve-this-image-stored-in-firebase-storage

---

<br>

### If still not working, things to check in webpack.config.js

<br>

Entry file is opening the correct file

```js
.addEntry("app", "./assets/app.js")
```

React Preset is uncommented

```js
.enableReactPreset();
```

# Copyrights

Free to use. If youre nice send me hi.
