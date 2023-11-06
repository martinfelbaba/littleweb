var Koa = require('koa');
var app = new Koa();

app.use(async ctx => {
  ctx.body = 'Koa says hi!';
});

var port = process.env.PORT || (process.argv[2] || 3000)
app.listen(port);
console.log("Application started. Listening on port:" + port);

module.exports = { app }
