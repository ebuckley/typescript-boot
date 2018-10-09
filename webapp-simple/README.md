# Requirements

1. Node 8.12
2. Typescript Version 3.1.1


# Setting up this project

```
npm install
npm run watch-ts

# In another terminal
npm run watch-js
npm run watch-node
npm run copy-assets
```

# From Scratch

The tsconfig.json and tslint.json are the main config files needed.

### Nodemon
Used for watching the built node assets, and reloading on change

### Concurrently
We use this package for running the watch-js, watch0node and copy-assets script at the same time

# Prior art

Inspired by https://github.com/Microsoft/TypeScript-Node-Starter