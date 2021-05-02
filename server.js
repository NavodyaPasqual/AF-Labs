const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const HomeRoutes = require("./routes/home.router");
const PostRoutes = require("./routes/post.routes");

const server = new Koa();

server.use(bodyParser());
server.use(HomeRoutes.routes()).use(HomeRoutes.allowedMethods());
server.use(PostRoutes.routes()).use(PostRoutes.allowedMethods());

server.use((ctx) => {
    ctx.body = "Hello World";
});

server.listen(3000);
console.log("Application is running on port 3000");