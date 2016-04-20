# node_ftp
## 环境
1. Mac OS X
2. Nodejs V4.2.2

## 目标
1. 用nodejs的ftp模块，访问ftp服务器。
2. 切换到指定的ftp文件夹
3. 列出目标文件夹下的文件清单

## 代码
### 开启FTP服务
我用的是shell命令：
```bash
// ftp的根目录是系统用户的根目录~
sudo -s launchctl load -w /System/Library/LaunchDaemons/ftp.plist
```
### 访问ftp的js代码
见仓库

## 问题
在获得了指定文件夹下的文件清单之后，简单的使用console.log进行输出。
在terminal中获得的是乱码。

## 我目前的分析
1. app.js文件的编码是utf-8
2. OS X terminal 中所使用的编码也应该是utf-8
所以不存在两端编码不一致的问题。
是否是ftp模块内部存在问题？我尝试google了nodejs 中文乱码，并没有获得非常对症的办法。
也可能是新手能力不足吧。

## 敬请指教
