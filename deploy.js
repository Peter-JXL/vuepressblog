const fs = require('fs')
const scpClient = require('scp2')
const ora = require('ora')

const serverInfo = JSON.parse(fs.readFileSync('serverInfo.json'))
const loading = ora('正在部署至 ' + serverInfo.host )
loading.start()
scpClient.scp('./docs/.vuepress/dist/', serverInfo ,(err)=>{ 
loading.stop()
    if(err) { 
        console.log('部署失败')
        throw err
    }else { 
        console.log('部署成功')
    }
})
