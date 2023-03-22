/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-01-12 12:43:56
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-01-12 12:44:04
 * @FilePath: \myBlog-server\models\Key.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Petrichor 572752189@qq.com, All Rights Reserved. 
 */
const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  //更新日期
  date: {
    type: mongoose.SchemaTypes.Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Key', schema)