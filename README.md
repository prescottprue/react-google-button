# react-google-button

[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][climate-image]][climate-url]
[![License][license-image]][license-url]
[![Code Style][code-style-image]][code-style-url]

## Getting Started

react-google-button is universal, so it can be used client-side or server-side.

1. Install through: `npm install --save react-google-button`

2. Include and use `react-google-button`:

    ```javascript
  import Reactgooglebutton from 'react-google-button';
  let react-google-button = new Reactgooglebutton();
    ```
## Testing/Coverage

`npm run test` - Run unit tests
`npm run test:cov` - Run unit tests and report coverage

## Building Bundle

Build code before deployment by running `npm run build`. There are multiple options below for types of deployment, if you are unsure, checkout the Firebase section.



### Tests

`npm run test` - run tests
`npm run test:cov` - run tests and generate coverage


### Travis
Visit [travis](travis-ci.org) to enable your gihub repo. Builds settings can be changed in `.travis.yml`

### Deployment

#### AWS S3

Selecting AWS S3 from the deploy options when running the generator adds deploy configs in `.travis.yml`.

1. Get your AWS Key and Secret from the AWS Console Credentials page
2. Set the following environment vars within the Travis-CI repo settings page:
  * `AWS_KEY` - Your AWS key
  * `AWS_SECRET` - Your AWS secret
  * `S3_BUCKET` - Your S3 Bucket

### Code Climate

Visit [code climate dashboard](https://codeclimate.com/dashboard) to enable codeclimate for your repo on Github. Coverage will be sent automatically by Travis.

Get the key from the settings->coverage page and place it in Travis environment variable as `CODE_CLIMATE`


## [Documentation](https://prescottprue.github.com/react-google-button)

[npm-image]: https://img.shields.io/npm/v/react-google-button.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-google-button
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
