/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-01-01 15:19:32
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-01-20 15:19:13
 * @FilePath: \myBlog-server\models\Column.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Petrichor 572752189@qq.com, All Rights Reserved. 
 */
const mongoose = require('mongoose')
const { formatDate } = require('../util/util')
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  //更新日期
  date: {
    type: mongoose.SchemaTypes.Date,
    default: Date.now,
    get(val) {
      return formatDate(new Date(val), 'yyyy年MM月dd日 hh:mm:ss')
    }
  },
  //文章 ids
  aids: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Article"
  }],
  uid: {
    type: mongoose.SchemaTypes.ObjectId,
  }
})
schema.set('toJSON', { getters: true })
module.exports = mongoose.model('Column', schema)