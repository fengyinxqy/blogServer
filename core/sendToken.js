/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2022-12-21 17:32:36
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-01-11 20:39:33
 * @FilePath: \myBlog-server\core\sendToken.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Petrichor 572752189@qq.com, All Rights Reserved. 
 */
const { decrypt, encrypt, generateKeys } = require('../util/util')
const fs = require('fs').promises
const fsSync = require('fs')
const { pubKeyPath, priKeyPath } = require('../config')
const { getUserStatusMsg } = require('../core/statusControl')
const { getPrivateKey } = require('../core/rsaControl')
const jwt = require('jsonwebtoken') //token生成包  JWT

module.exports = {
  async sendToken(result) {
    let { username, _id } = result
    let privateKey = await getPrivateKey()
    let token = jwt.sign({ username, _id, exp: ~~((Date.now() / 1000) + 24 * 3600 * 3) }, privateKey, { algorithm: 'RS256' });
    return token
  }
}