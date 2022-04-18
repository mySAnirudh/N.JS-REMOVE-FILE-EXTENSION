const { dir } = require('console');
const express=require('express');
const { dirname } = require('path');
const path =require('path');

const app=express();

const publicPath=path.join(dirname,'public')
app.get('',(_,resp)=> {
    resp.sendFile(`${publicPath}/about.html`)
})
app.get('/help',(_,resp)=> {
    resp.sendFile(`${publicPath}/help.html`)
})
app.get('/home',(_,resp)=> {
    resp.sendFile(`${publicPath}/home.html`)
})
app.get('*',(_,resp)=> {
    resp.sendFile(`${publicPath}/invalid.html`)
})