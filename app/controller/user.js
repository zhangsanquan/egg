const Controller = require('egg').Controller;

class HomeController extends Controller {
    async info() {
        const { ctx } = this;
        // http://127.0.0.1:7002/user?id=1&id=2&id=3
        // 接收get请求 ctx.query ,当有重复的请求数据字段名时，只取第一次出现的如上的只会取到{ id: '1'}
        // ctx.queries = { id: ['1', '2', '3'] }
        // const data = await User.findAll()
        const result = await this.app.mysql.select('users', {
            columns: ['age', 'name'], //查询字段
            where: {
                name: 'zsq'
            },
            orders: [ ['age', 'desc'] ],
            limit: 10,
            offset: ctx.params.page*10
        })

        ctx.body = {
            data: result
        }
    }

    async remove(){
        const { ctx } = this;
        //接收post请求用ctx.request.body
        //封装了ctx.params可以获取get和post请求
        const data = await ctx.service.user.removeUser(ctx.params.id);
        ctx.body = {
            data
        }
    }

    async add(){
        const { ctx } = this;
        const result = await this.app.mysql.insert('users', {
            name: 'zsq',
            age: 18
        })
        ctx.body = {
            code: 1
        }
    }

    async update(){
        const { ctx } = this;
        const result = await this.app.mysql.update('users',
            { age: ctx.params.age},  //需要更新的数据
            {
                 where: {
                    id: ctx.params.id
                }
            })
    }
}

module.exports = HomeController;
