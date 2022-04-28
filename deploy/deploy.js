/* npm install shelljs --save-dev 
npm install scp2 --save-dev 
npm install chalk --save-dev 
npm install ssh2 --save-dev 
npm install cross-env --save-dev 
 */

require('shelljs/global');

const ora = require('ora'); // loading工具
const chalk = require('chalk'); // 终端输出字体颜色的工具
const scpClient = require('scp2'); // scp是一个复制粘贴的工具

//发布的服务器列表
const ser = require('./servers');
const serverInfo = ser.servers['test'];

var Client = require('ssh2').Client; // 用来连接服务器的
var conn = new Client();
conn.on('ready', function() {
  console.log('Client :: ready');
  conn.exec('rm -rf '+ serverInfo.path, function(err,stream){
    if (err) throw err;
    stream
      .on('close', function(code, signal) {
        // 在执行shell命令后，把开始上传部署项目代码放到这里面
        const spinner = ora('准备发布服务器...');
        spinner.start();
        console.log(chalk.green('开始发布\n'));
        scpClient.scp(
            'dist/',
            {
              host: serverInfo.host,
              port: serverInfo.port,
              username: serverInfo.username,
              password: serverInfo.password,
              path: serverInfo.path
            },
            function (err) {
                spinner.stop();
                if (err) {
                console.log(chalk.red('发布失败.\n'));
                throw err;
                } else {
                console.log(chalk.green('Success! 成功发布到' + (process.env.NODE_ENV === 'prod' ? '生产' : '测试') + '服务器! \n'));
                }
            }
        );
        conn.end();
    })
    .on('data', function(data) {
        console.log('STDOUT: ' + data);
    })
    .stderr.on('data', function(data) {
        console.log('STDERR: ' + data);
    });
  })
})
.on('error', (err) => {
 console.log(err)
})
.on('end', () => {
 console.log('end')
})
.on('close', () => {
 console.log('close')
})
.connect({
  host: serverInfo.host,
  port: serverInfo.port,
  username: serverInfo.username,
  password: serverInfo.password,
  readyTimeout:5000
});
