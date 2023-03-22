var express = require('express');
var request = require('request');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  console.log(req.query)
  let num = req.query.id;
  request({
    url: `https://xiaoapi.cn/API/zs_kd.php?num=${num}`,
    method: 'GET',
  }, function (error, response, body) {
    if (error) {
      res.send({ code: 400, msg: '错误' })
    }
    body = JSON.parse(body)
    res.send(200, {
      message: '登录成功', data: { code: response && response.statusCode, msg: '请求成功', content: body.msg }
    })
  });
});
module.exports = router;
