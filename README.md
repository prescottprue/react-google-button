# react-google-button

[![NPM version][npm-image]][npm-url]
[![Build Status][build-status-image]][build-status-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][climate-image]][climate-url]
[![License][license-image]][license-url]
[![Code Style][code-style-image]][code-style-url]

> Simple Google sign in button for React that follows Google's style guidelines (https://developers.google.com/identity/sign-in/web/build-button)

## [Codepen Demo](https://codepen.io/prescottprue/pen/NjmeKM)

## Rendered Preview

![Preview Image](https://storage.googleapis.com/pruvit-968.appspot.com/react-google-button/preview.png)

## Getting Started

`react-google-button` is universal, so it can be used client-side or server-side.

1. Install through: `npm install --save react-google-button`

2. Import `GoogleButton` from `react-google-button`:

    ```javascript
    import GoogleButton from 'react-google-button'
    ```

3. Use `GoogleButton` component:

    ```javascript
    <GoogleButton
      onClick={() => { console.log('Google button clicked') }}
    />
    ```

## Props

### type
##### PropType
```js
oneOf([ 'light', 'dark' ])
```

##### Default
```js
'dark'
```

##### Example

```js
<GoogleButton
  type="light" // can also be written as disabled={true} for clarity
  onClick={() => { console.log('Google button clicked') }}
/>
```

##### Description
`'light'` or `'dark'` for the different google styles (defaults to `dark`)


### disabled
`disabled` - whether or not button is disabled

##### PropType
```js
Boolean
```

##### Default
```js
false
```

##### Example

```javascript
<GoogleButton
  disabled // can also be written as disabled={true} for clarity
  onClick={() => { console.log('this will not run on click since it is disabled') }}
/>
```

### label
##### PropType
```js
String
```
##### Default
```js
'Sign in with Google'
```

##### Example

```javascript
<GoogleButton
  label='Be Cool'
  onClick={() => { console.log('Google button clicked') }}
/>
```

##### Description
Override the 'Sign in with Google' words with another string.

**Note**: [Google's branding guidelines](https://developers.google.com/identity/branding-guidelines) states you should not to do this


## Builds

Most commonly people consume `react-google-button` as a [CommonJS module](http://webpack.github.io/docs/commonjs.html). This module is what you get when you import redux in a Webpack, Browserify, or a Node environment.

If you don't use a module bundler, it's also fine. The `react-google-button` npm package includes precompiled production and development [UMD builds](https://github.com/umdjs/umd) in the [dist folder](https://unpkg.com/react-google-button@latest/dist/). They can be used directly without a bundler and are thus compatible with many popular JavaScript module loaders and environments. For example, you can drop a UMD build as a `<script>` tag on the page. The UMD builds make Redux Firestore available as a `window.ReduxFirestore` global variable.

It can be imported like so:

```html
<script src="../node_modules/react-google-button/dist/react-google-button.min.js"></script>
<!-- or through cdn: <script src="https://unpkg.com/react-google-button@latest/dist/react-google-button.min.js"></script> -->
<script>console.log('redux firestore:', window.ReactGoogleButton)</script>
```

Note: In an effort to keep things simple, the wording from this explanation was modeled after [the installation section of the Redux Docs](https://redux.js.org/#installation).

[npm-image]: https://img.shields.io/npm/v/react-google-button.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-google-button
[build-status-image]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fprescottprue%2Freact-google-button%2Fbadge&label=build&style=flat-square
[build-status-image-next]: https://img.shields.io/endpoint.svg?url=https%3A%2F%2Factions-badge.atrox.dev%2Fprescottprue%2Freact-google-button%2Fbadge%3Fref%3Dnext&label=build&style=flat-square
[build-status-image-og]: https://github.com/prescottprue/react-google-button/workflows/publish.yml/badge.svg
[build-status-url]: https://github.com/prescottprue/react-google-button/workflows
[travis-image]: https://img.shields.io/travis/prescottprue/react-google-button/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/prescottprue/react-google-button
[daviddm-image]: https://img.shields.io/david/prescottprue/react-google-button.svg?style=flat-square
[daviddm-url]: https://david-dm.org/prescottprue/react-google-button
[climate-image]: https://img.shields.io/codeclimate/github/prescottprue/react-google-button.svg?style=flat-square
[climate-url]: https://codeclimate.com/github/prescottprue/react-google-button
[coverage-image]: https://img.shields.io/codeclimate/coverage/github/prescottprue/react-google-button.svg?style=flat-square
[coverage-url]: https://codeclimate.com/github/prescottprue/react-google-button
[license-image]: https://img.shields.io/npm/l/react-google-button.svg?style=flat-square
[license-url]: https://github.com/prescottprue/react-google-button/blob/master/LICENSE
[code-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[code-style-url]: http://standardjs.com/
