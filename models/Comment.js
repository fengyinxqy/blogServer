/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-01-01 15:19:43
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-01-21 23:38:56
 * @FilePath: \myBlog-server\models\Comment.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Petrichor 572752189@qq.com, All Rights Reserved. 
 */
const mongoose = require('mongoose')
const { formatDate } = require('../util/util')
const schema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  //更新日期
  date: {
    type: mongoose.SchemaTypes.Date,
    default: Date.now,
    get(val) {
      return formatDate(new Date(val), 'yyyy年MM月dd日 hh:mm:ss')
    }
  },
  //评论者 id
  uid: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User"
  },
  //文章 id
  aid: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Article"
  }
})
schema.set('toJSON', { getters: true })
module.exports = mongoose.model('Comment', schema)