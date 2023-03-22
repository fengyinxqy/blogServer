/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2022-12-15 14:16:24
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2022-12-15 14:16:29
 * @FilePath: \Node_肖祺彦_2022.12.15.28\express-sign\core\rsaControl.js
 * @Description: 
 * 
 * Copyright (c) 2022 by Petrichor 572752189@qq.com, All Rights Reserved. 
 */
const { decrypt, encrypt, generateKeys } = require('../util/util')
const fs = require('fs').promises
const fsSync = require('fs')
const { pubKeyPath, priKeyPath } = require('../config')

module.exports = {
  getPublicKeySync() {
    return fsSync.readFileSync(pubKeyPath, 'utf8')
  },
  async getPublicKey() {
    let key
    try {
      key = await fs.readFile(pubKeyPath, 'utf8')
    } catch (err) {
      generateKeys()
      key = await fs.readFile(pubKeyPath, 'utf8')
    }
    return key
  },
  async getPrivateKey() {
    let key
    try {
      key = await fs.readFile(priKeyPath, 'utf8')
    } catch (err) {
      generateKeys()
      key = await fs.readFile(priKeyPath, 'utf8')
    }
    return key
  }
}
