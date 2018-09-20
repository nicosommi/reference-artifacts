# Starter kit mobile

This project aims to be a reference for react native mobile apps.

## Preparing snapshot testing with jest and enzyme

Addin this to the package.json we configure the enzyme serializer for snapshot testing, we add a transform to handle a compatibility issue with react native, and we run the setupTests file that loads some mocks for the react-native environment.

```
"jest": {
  "preset": "react-native",
  "snapshotSerializers": [
    "enzyme-to-json/serializer"
  ],
  "setupFiles": [
    "./src/util/setupTests.js"
  ],
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js"
  }
}
```

Check `src/components/version/__test__/version.test.js` for an example.

## Adding eslint

Install dependencies

```
yarn add -D eslint babel-eslint eslint-plugin-flowtype
```

Optionally copy `.eslintrc` and configure it.

## Adding auto generated docs

Install jsdoc

```
yarn add -D jsdoc
```

Copy `jsdoc.config.js`

Add a script that strips flow types and generates doc from javascript. See script `generate-docs` on package.json

Optionally: configure a template for doc generation adding this to the opts object on the jsdoc.config.js file `template: "./node_modules/jsdoc-template"`

Push the docs to somewhere like a github page

- Note: an alternate, better method (completes jsdoc from flow types and code) is available via documentation.js, but right now is throwing an Error when loading metro preset via babel

## Adding root path to avoid "../../.." hell

Install module resolver plugin

```javascript
yarn add -D babel-plugin-module-resolver
```

Add to babelrc

```
  "plugins": [
    [
      "module-resolver",
      {
        "root": ["./src"],
        "alias": {
          "@src": "./src"
        }
      }
    ]
  ]
```

Make flow aware adding to flow config

```
module.system.node.resolve_dirname=./src
```
