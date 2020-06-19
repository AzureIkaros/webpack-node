import * as Koa from 'koa';

const app = new Koa();

app.use((ctx:any) => {
    ctx.body = 'Hello World!';
});

export default app;
