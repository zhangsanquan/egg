/*
* 配置数据库连接信息
*/

exports.mysql = {
    client: {
        host: '',
        port: '8090',
        user: 'zsq',
        password: '123456',
        database: 'test'  //数据库名称
    },
    app: true   //默认挂载到app上
}


//在service业务里直接调用： await this.app.mysql.query(query, values)
