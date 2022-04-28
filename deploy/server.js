/*
* name：自定义名称
* domain：域名
* host：ip
* port：端口
* username：服务器账号
* password：服务器密码
* path：发布到服务器的指定路径
*/
const servers = {
  test: {
      value: 0,
      name: 'xxx',
      domain: 'xxx',
      host: 'xxx',
      port: 'xxx',
      username: 'xxx',
      password: 'xxx',
      path: 'xxxx'
    },
  production:{
      value: 1,
      name: 'xxx',
      domain: 'xxx',
      host: 'xxx',
      port: 'xxx',
      username: 'xxx',
      password: 'xxx',
      path: 'xxxx'
    }
}

module.exports = {
  servers:servers
}
