/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2022-12-15 13:06:21
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2022-12-15 14:31:11
 * @FilePath: \Node_肖祺彦_2022.12.15.28\express-sign\routes\getPubKey.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Petrichor 572752189@qq.com, All Rights Reserved. 
 */
const express = require('express');
const router = express.Router();
const { getPublicKey } = require('../core/rsaControl')

/* GET RSAPublicKey. */
router.get('/', async function (req, res, next) {
  let pubKey = await getPublicKey()
  res.json('200', {
    statusCode: 200,
    Msg: 'ok',
    data: {
      pubKey
    }
  })
});

module.exports = router;
