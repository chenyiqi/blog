var express = require('express');
var swig = require('swig');
var mongoose = require('mongoose');
var apiRouter = require('./routers/api.js');
var bodyParser = require('body-parser');
mongoose.connect('mongodb://localhost:27017/blog', {useNewUrlParser: true});
//Http.createServer();
var app = express();

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('数据库连接成功');
    app.listen(8081);
});


//静态资源目录
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
//设置模板引擎
app.engine('html', swig.renderFile);
//设置模板目录
app.set('views', './views');
app.set('view engine', 'html');
//设置no-cache
swig.setDefaults({
    cache: false
});

app.use('/api', apiRouter);

//路由
app.get('/', function(req, res, next) {
    res.render('main');
});
app.get('/register.html', function(req, res, next) {
    res.render('register');
})