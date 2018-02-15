"start": "node ./server.js",
"build": "webpack -d && webpack-dev-server --content-base src/ --inline --hot",
"build:prod": "webpack -p",


"build": "webpack --progress",
"prestart": "npm run build",
