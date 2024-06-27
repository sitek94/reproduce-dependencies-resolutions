# Reproduce Dependencies Resolutions

I'm using `@sitek94/example-legacy-package` a dummy package with locked `lodash@3.10.1` as a dependency. Then I'm
`resolutions` in package.json to enforce `lodash@4.17.21` to be used.

```shell
# Install dependencies
yarn install

# Build project
yarn build
```
