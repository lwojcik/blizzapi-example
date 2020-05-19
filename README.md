<img src="https://raw.githubusercontent.com/lukemnet/blizzapi-docs/master/docs/.vuepress/public/logo.png" alt="BlizzAPI logo" width="200" height="200">

# blizzapi-example

[![Travis CI Build Status](https://travis-ci.org/lukemnet/blizzapi-example.svg?branch=master)](https://travis-ci.org/lukemnet/blizzapi-example)
[![Maintainability](https://api.codeclimate.com/v1/badges/088ec8ed788ec238a671/maintainability)](https://codeclimate.com/github/lukemnet/blizzapi-example/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/088ec8ed788ec238a671/test_coverage)](https://codeclimate.com/github/lukemnet/blizzapi-example/test_coverage)


Sample REST API based on Express.js demonstrating [BlizzAPI](https://github.com/lukemnet/blizzapi) features.

Note that this project is for illustrative purposes only. It is not designed to run as a production server.

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/lukemnet/blizzapi-example&env=API_BATTLENET_KEY&env=API_BATTLENET_SECRET)

## Install

```bash
git clone https://github.com/lukemnet/blizzapi-example.git
cd blizzapi-example
npm install
```

## Setup

Register a client app with [Blizzard Battle.net Developer Portal](https://develop.battle.net/access/clients). Note down client id and client secret.

Copy and rename the file ``.env.sample`` to ``.env``. Edit it accordingly:

```
PORT='8080'
API_BATTLENET_KEY='your client app id'
API_BATTLENET_SECRET='your client app secret'
```

## Run

With Node:

```bash
npm start
```

With Nodemon:

```bash
nodemon start.js
```

## Available endpoints

### API endpoints

#### ``GET /api/query/:region?endpoint=:endpoint``

Fetches data from a Battle.net API endpoint using a specified regional server using [BlizzAPI.query](https://blizzapi.lukem.net/docs/usage/query.html) method.

Example: ``http://localhost:8085/api/query/1?endpoint=/sc2/profile/1/2/242838``

#### ``GET /api/validateAccessToken/:region/:accessToken``

Checks if access token is valid using [BlizzAPI.validateAccessToken](https://blizzapi.lukem.net/docs/usage/validating-access-token.html) method.

Example: ``http://localhost:8085/api/validateAccessToken/eu/sampleAccessToken``

#### ``GET /api/getAccessToken/:region``

Obtains and returns OAuth access token using [BlizzAPI.getAccessToken](https://blizzapi.lukem.net/docs/usage/getting-access-token.html) method.

Example: ``http://localhost:8085/api/getAccessToken/eu``

### Utility endpoints

Utility endpoints match the following pattern:

```
GET /utils/BlizzAPI_funtion_name_here/:parameter1/:parameter2ifNeeded
```

Examples:

```
http://localhost:8085/utils/getAllRegions
http://localhost:8085/utils/validateRegionName/eu
http://localhost:8085/utils/isLocaleValidForRegionId/en_US/1
```

For a complete list of method names see [BlizzAPI utility methods](https://blizzapi.lukem.net/docs/utils/). 

## License

Licensed under MIT License. See [LICENSE](https://github.com/lukemnet/blizzapi-example/blob/master/LICENSE) for more information.

## Legal

Battle.net and Blizzard Entertainment are trademarks or registered trademarks of Blizzard Entertainment, Inc. in the U.S. and/or other countries.
