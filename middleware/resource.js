/*
 * @Author: Petrichor 572752189@qq.com
 * @Date: 2023-01-01 20:28:48
 * @LastEditors: Petrichor 572752189@qq.com
 * @LastEditTime: 2023-01-02 17:43:06
 * @FilePath: \myBlog-server\middleware\resource.js
 * @Description: 
 * 
 * Copyright (c) 2023 by Petrichor 572752189@qq.com, All Rights Reserved. 
 */
const createError = require('http-errors')
const { classify } = require('inflection')

module.exports = options => {
  return async (req, res, next) => {
    const modelName = classify(req.params.resource)
    try {
      req.Model = require(`../models/${modelName}`)
      next()
    } catch (err) {
      next(createError(404))
    }
  }
}