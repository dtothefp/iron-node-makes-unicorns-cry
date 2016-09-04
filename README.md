#### Install Iron-Node
- `npm i -g iron-node@2.2.15`
  - everything works great
  - uses `electron-prebuilt@0.36.12`
- `npm i -g iron-node@2.2.16`
  - :-(( warns about devtools detached
  - might catch on first breakpoint in `gulp` task but won't catch subsequent
  - won't catch any breakpoints in `./test.js`
  - uses `electron-prebuilt@0.37.8`
```
`which iron-node` #/Users/xxx/.nvm/versions/node/v6.3.1/bin/iron-node
cd /Users/xxx/.nvm/versions/node/v6.3.1/lib/node_modules/iron-node/node_modules
npm i electron-prebuilt@0.36.12 #this is the version in iron-node@2.2.15
# this works again :-))
```
- `npm i -g iron-node@latest`
  -  :-(( doesn't catch on any breakpoints in the `gulp` task or `./test.js`
  - uses `electron-prebuilt@1.3.5`

#### Get Started
- `npm i`
- `npm start` runs `gulp` default task
- `iron-node ./test.js` runs `./tests.js` file
