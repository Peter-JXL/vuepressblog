const fs = require('fs')
const scpClient = require('scp2')
const ora = require('ora')

// 读取服务器信息
const serverInfo = JSON.parse(fs.readFileSync('serverInfo.json'))

// 配置部署中的展示信息
const loading = ora('正在部署至 ' + serverInfo.host )

// 开始展示
loading.start()

// 开始部署
scpClient.scp('./docs/.vuepress/dist/', serverInfo ,(err)=>{ 

    // 部署完成后停止展示，并根据部署结果输出提示信息
    loading.stop()
    if(err) { 
        console.log('部署失败')
        throw err
    }else { 
        console.log('部署成功')
    }
})
