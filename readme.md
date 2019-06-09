# Kancha

Kancha is a React Native UI library for building decentralised identity wallet apps for iOS & Android.

## Getting started

Install dependencies
```bash
yarn install
```

Build the library locally and run the demo app from xcode
```bash
yarn build && yarn xcode
```

In a separate terminal run metro bundler
```bash
yarn start
```

Start a development watcher. This will compile typescript when you make changes and the app will reload.

```bash
yarn develop
```

## Contributing
Commitlint makes sure that all commit messages follow a pattern. Check it out here :point_right: [Commitlint](https://commitlint.js.org)

## Releases
Releases are automatically handled by [Semantic Release](https://github.com/semantic-release/semantic-release) All version numbers and release notes are decided on based on the commit messages provided.

There are currently 2 channels. Master is for the main library release and `beta` is for beta releases.

## Testing
Unit tests will run on every commit. Full e2e test will run on merging to `beta` or `master`

## Documentation
TypeDoc auto generates the documentation from the typescript interfaces and comments. To generate the docs run:

```bash
yarn docs
```
This will get published to github pages as part of the CI build