var mongoose = require('mongoose');
var DB_URL = 'mongodb://localhost:27017/2017414';
//连接数据库
mongoose.connect(DB_URL);

//连接数据库成功
mongoose.connection.on('connected', function(){
	console.log('Mongoose connection open to ' + DB_URL);
});

//数据库连接异常
mongoose.connection.on('error', function(err){
	console.log('Mongoose connection error: ' + err);
})

//断开数据库的链接
mongoose.connection.on('disconnected', function(){
	console.log('Mongoose connection disconnected');
});

//将mongoose推出
module.exports = mongoose;