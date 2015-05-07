Ionic Cordova Camera Example
=====================

An example of how to use the Cordova Camera API with Ionic

## Installation

To use this project as is, first clone the repo from GitHub, then run:

```bash
$ cd ionic-example-cordova-camera
$ npm install
```

To test on iOS you will need to [be part of the iOS developer program](https://developer.apple.com/programs/ios/). If you are, first run:

```bash
$ ionic platform add ios
$ ionic build ios
```

You can then open XCode and select ````ionic-example-cordova-camera/platforms/ios```` as the project. In the upper left corner, select your iOS device and click the build button (play button) to build the app and deploy to your device for testing.

**NB:** The camera functionality will only work on a real device, and not in an emulator or browser!

## Using Sass (optional)

This project makes it easy to use Sass (the SCSS syntax) in your projects. This enables you to override styles from Ionic, and benefit from
Sass's great features.

Just update the `./scss/ionic.app.scss` file, and run `gulp` or `gulp watch` to rebuild the CSS files for Ionic.

Note: if you choose to use the Sass method, make sure to remove the included `ionic.css` file in `index.html`, and then uncomment
the include to your `ionic.app.css` file which now contains all your Sass code and Ionic itself:

```html
<!-- IF using Sass (run gulp sass first), then remove the CSS include above
<link href="css/ionic.app.css" rel="stylesheet">
-->
```
## Issues
Issues have been disabled on this repo, if you do find an issue or have a question consider posting it on the [Ionic Forum](http://forum.ionicframework.com/).  Or else if there is truly an error, follow our guidelines for [submitting an issue](http://ionicframework.com/contribute/#issues) to the main Ionic repository. On the other hand, pull requests are welcome here!

