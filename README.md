# this is a project to renfei

> 这是一个帮仁飞做的移动端小项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# 在h5.shuiguo.com:8080开启热加载，并转发某指定机器（api.shuiguo.com）的接口
npm run proxy:someone

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 修改host文件

把h5.shuiguo.com指向 127.0.0.1  把api.shuiguo.com指向需要和后端对接的某台机器的ip。以下是修改的示例

```
127.0.0.1  h5.shuiguo.com
192.168.4.91  api.shuiguo.com

```


## 目录结构

asset -> 素材文件<br/>
components -> 组件 <br/>
views -> 页面文件，直接可以被vue-router调用的 <br/>
router -> 路由文件 <br/>

## 开发流程

1. 写 component
2. 把 component 攒到 view里面
3. 通过router-link 调用


## 编辑器插件 (`无论使用什么IDE，下面列表中 * 开头的插件必装, 以下插件皆为 VS Code 中插件`)
- *ESLint
- *EditorConfig
- Vetur
- vue
- Babel
- Path Intellisense

## 让 VS Code 的 ESLint 插件支持 .vue 文件

> 打开 VS Code

> 打开用户设置 windows: 文件 > 首选项 > 设置

> 打开用户设置 mac: Code > 首选项 > 设置

> 在 user setting.json 添加下面的代码

```
"eslint.validate": [
    "javascript",
    "javascriptreact",
    "html",
    "vue"
]
```

## 部署测试环境

### 1.配置ssh免密登录

* 查看本机是否有一对秘钥？mac 到~/.ssh目录下查看，windows到 C:\Users\zhangsan（自己的用户名）\.ssh

```
ls

id_rsa      id_rsa_vc      known_hosts  rhc.pub
id_rsa.pub  id_rsa_vc.pub  rhc

```


发现存在密钥对。若不存在，则生成一对

```
ssh-keygen -t rsa --P

```

* 登录远程测试机，到用户目录下的.ssh文件夹下，查看是否有authorized_keys，没有的话创建一个

```
ssh root@172.16.32.159
cd ~/.ssh/
vim authorizd_keys

```
vim 打开authorized_keys之后，把你本机的公钥里的内容拷贝到远程机器的authorized_keys文件中，不要删除authorized_keys已有的公钥，在已有的内容的下面粘贴即可。然后保存文件。验证是否能免密登录了。

```
ssh root@172.16.32.159

```
经验证发现登录成功，没要求输入密码。此时免密登录的设置完成

### 2.远程发布

* 确保本机已安装全局的pm2,下面是我本机的结果，已安装pm2，没安装的话，安装一下

```
npm list -g --depth=0   | grep pm2
-- pm2@2.8.0

```
没安装的话，全局安装一下pm2

```
npm install pm2 -g

```

* 在本项目的根目录下，运行创建环境的命令(首次跑的时候需要用，此后就不再需要了，我已经跑过这个命令了，所以不需要再跑这个命令了)

```
pm2 deploy ecosystem.config.js dev setup

```


* 发布命令

```
pm2 deploy ecosystem.config.js dev                // 发布dev分支到dev环境
pm2 deploy ecosystem.config.js test                // 发布test分支到test环境

```


学习pm2的deploy，[详情请进入](http://pm2.keymetrics.io/docs/usage/deployment/#windows-consideration)
