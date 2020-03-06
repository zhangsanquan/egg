/*
* 获取请求参数中间件
* 可以用ctx.params获取get或post请求参数
* 就是统一了获取请求参数的方法
*/

module.exports = () => {
    return async function params(ctx, next){
        ctx.params = {
            ...ctx.query,
            ...ctx.request.body
        };
        await next()
    }
};