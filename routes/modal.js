/**
 * [desc]
 * @author wangzhipei
 * @date 2016/7/7/0007.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('modal',{title:'Modal'});
});

module.exports = router;
