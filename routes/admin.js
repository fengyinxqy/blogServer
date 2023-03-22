/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2022-12-20 19:10:59
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-02-25 19:25:49
 * @FilePath: \myBlog-server\routes\admin.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Petrichor 572752189@qq.com, All Rights Reserved. 
 */
const express = require('express');
const router = express.Router();
const { decrypt, encrypt } = require('../util/util')
const { sendToken } = require('../core/sendToken')
const User = require('../models/User');
const assert = require('http-assert');
const createError = require('http-errors')
const QUE_MAP = require('../plugins/QUE_MAP')

const CLASSIFY = {
  'login': "login",
  'register': "register"
}

router.post('/:classify', async (req, res, next) => {

  let { username, password } = req.body
  let { classify } = req.params

  let isClassPass = classify in CLASSIFY
  assert(isClassPass, 400, '无效的请求')
  let user
  // +password 设置追加返回password内容 password Schema设置select为false时使用
  try {
    if (!username || username?.trim()?.length === 0 || !password || password?.trim()?.length === 0) {
      assert(false, 422, "账号密码必填")
    }
    if (classify === 'login') {
      user = await User.findOne({ username }).select('+password')
      assert(user, 422, "用户不存在")
      //校验密码
      assert.equal(decrypt(password), decrypt(decrypt(user.password)), 422, '账号密码错误')
    }
    if (classify === 'register') {
      user = await User.create(req.body)
    }
    //生成token
    let token = await sendToken(user)
    res.send(200, {
      message: '登录成功',
      data: {
        userId: user._id,
        token: token
      }
    })
  } catch (err) {
    next(err)
  }
});



module.exports = router;
