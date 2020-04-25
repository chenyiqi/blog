var express = require('express');
var router = express.Router();

let responseData = {};
router.use(function(req, res, next) {
    responseData.code = '';
    responseData.message = '';
    next();
})

router.post('/user/register', function(req, res, next) {
    let username = req.body.username;
    let password = req.body.password;
    let repassword = req.body.repassword;

    if(username == '') {
        responseData.code = 1;
        responseData.message = '账号不能为空';
        res.json(responseData);
        return;
    }
    if(password == '') {
        responseData.code = 2;
        responseData.message = '密码不能为空';
        res.json(responseData);
        return;
    }
    if(password !== repassword) {
        responseData.code = 3;
        responseData.message = '两次输入的密码不一致';
        res.json(responseData);
        return;
    }

    responseData.code = 10000;
    responseData.message = '注册成功';
    res.json(responseData);
});

module.exports = router;