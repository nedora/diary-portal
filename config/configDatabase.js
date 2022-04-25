module.exports = {
    host:       'localhost',
    user:       'root',
    password:   '----',
    port:       '3306',
    database:   'diary',
    invitation: '----',
    multipleStatements: true, // 允许同时请求多条 sql 语句
    timezone: 'UTC' // 解决时区时间统一的问题
}
