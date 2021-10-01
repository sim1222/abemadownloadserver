//inport
const http = require(`http`);
const expless = require(`express`);

//init
const app = expless();

//get処理
app.get("/", function(req, res){
    return res.send("Hello World");
});

const server = http.createServer(app);
server.listen(9999);