# git克隆失败解决办法


```
//报错信息
Failed to connect to github.com port 443: Connection refused.

//报错翻译
连接github.com 443端口失败:连接拒绝
```

解决办法：

#### 排查代理问题

尝试重置代理或者取消代理的方式：

```apl
git config --global --unset http.proxy
git config --global --unset https.proxy
```

如果没效果，接着添加全局代理试试：

```apl
git config --global http.proxy
git config --global https.proxy
```

如果以上问题还未得到解决

#### 排查DNS解析问题

在DNS解析前先会尝试走hosts，然后在找不到的的情况下再DNS解析,修改hosts文件域名解析就会先走hosts中的ip和域名的映射关系。

我们可以修改hosts文件，修改ip地址和域名的映射关系：

**Windows**：位于`C:\Windows\System32\drivers\etc`

```apl
ping gitHub.com
```

```apl
20.205.243.166 github.com
140.82.112.4 github.com
151.101.1.6 github.global.ssl.fastly.net
185.199.108.153 assets-cdn.github.com
185.199.109.153 assets-cdn.github.com
185.199.110.153 assets-cdn.github.com
185.199.111.153 assets-cdn.github.com
```

【注意：用“管理员身份运行记事本”进行hosts文件的修改】

#### 刷新DNS

```apl
ipconfig /flushdns
```


