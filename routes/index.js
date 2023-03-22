/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2022-12-20 19:10:59
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-01-11 20:22:22
 * @FilePath: \myBlog-server\routes\index.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Petrichor 572752189@qq.com, All Rights Reserved. 
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
