import express from 'express';
import React from 'react';
import {renderToString} from 'react-dom/server';
import App from './src/app/app.js';

var port = normalizePort(process.env.PORT || '8000');

global.React = React;

const html = renderToString(<App />);

const logger = (req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
}

const sendHTMLpage = (req,res) =>
    res.status(200).send(
       `<!DOCTYPE html>
        <html>
          <head>
             <title>Flattr web service</title>
          </head>
          <body>
             <div id="react-container">${html}</div>
          </body>
        </html>`
    )

const sayHello = (req, res) =>
   res.status(200).send("<h1>Hello World</h1>")

const app = express().use(logger);

app.set('port',port);

app.get('/',(req,res)=>{
  res.status(200).send(
    `<!DOCTYPE html>
     <html>
       <head>
          <title>Flattr web service</title>
       </head>
       <body>
          <div id="react-container">${html}</div>
       </body>
     </html>`)
});

app.get('/json',(req,res) => {
  res.json({success:true});
});

app.get('/home',(req,res)=> {
  res.status(200).send(
    `<!DOCTYPE html>
     <html>
       <head>
          <title>Flattr web service</title>
       </head>
       <body>
          <div id="react-container">hi home page</div>
       </body>
     </html>`
  )
});

app.listen(port,()=>{
  console.log(`express server is running in port ${port}...`);
});

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}
