/**
 * [desc]
 * @author wangzhipei
 * @date 2016/7/8/0008.
 */
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.render('tooltip',{title:'Tooltip'});
});

module.exports = router;
