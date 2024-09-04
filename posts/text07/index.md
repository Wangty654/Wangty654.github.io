# HUGO博客网站搭建


**Hugo** 是 Go 编写的静态网站生成器，速度快，易用，可配置。

Hugo 依赖于 **Markdown** 文件，元数据字体 。用户可以从任意的目录中运行 Hugo，支持共享主机和其他系统。只需要几分之一秒就可以渲染一个经典的中型网站，非常适合博客，文档等等网站的生成。

<img src="./images/image-20240810202919284.png" alt="image-20240810202919284" style="zoom:50%;" />

### 安装环境

安装好Windows版本的 git：

git官网：[https://git-scm.com/downloads](https://git-scm.com/downloads，如下图：)

git安装教程请参考：【 [Windows系统Git安装教程（详解Git安装过程） - 学为所用 - 博客园 (cnblogs.com)](https://www.cnblogs.com/xueweisuoyong/p/11914045.html)】

![image-20240810202936356](./images/image-20240810202936356.png)

下载并安装Windows版本的 GO：

go的中文官网：[https://go.p2hp.com/](https://go.p2hp.com/，如下图：)

![image-20240810203335315](./images/image-20240810203335315.png)

下载并安装Windows版本的 hugo：

hugo·GitHub 地址 [https://github.com/gohugoio/hugo/releases](https://github.com/gohugoio/hugo/releases，如下图：)

本教程中下载的项目压缩包名为：**hugo_extended_0.128.2_windows-amd64**

压缩包下载路径：[https://github.com/gohugoio/hugo/releases/download/v0.128.2/hugo_extended_0.128.2_windows-amd64.zip](https://github.com/gohugoio/hugo/releases/download/v0.128.2/hugo_extended_0.128.2_windows-amd64.zip，如下图：)

<img src="./images/image-20240810203409152.png" alt="image-20240810203409152" style="zoom:50%;" />

### 配置环境变量

#### 创建程序目录

在C盘新建一个名为hugo的文件夹，进入文件夹后再创建一个名为bin的文件夹

将下载好的Windows版本hugo应用程序压缩包解压到这个bin文件夹

<img src="./images/image-20240810212706040.png" alt="image-20240810212706040" style="zoom:50%;" />

#### 配置环境变量

然后在Windows搜索栏中搜索环境变量，点击环境变量

<img src="./images/image-20240810212719681.png" alt="image-20240810212719681" style="zoom: 50%;" />

选择系统变量中的Path，点击新建

<img src="./images/image-20240810212757603.png" alt="image-20240810212757603" style="zoom: 50%;" />

将 C:\hugo\bin 这个路径添加到环境变量

<img src="./images/image-20240810212812958.png" alt="image-20240810212812958" style="zoom:50%;" />

#### 查看程序版本

然后打开powershell终端，输入下方命令查看

```
hugo version
```

显示版本号，即为成功安装了hugo程序。

![image-20240810212845738](./images/image-20240810212845738.png)

### 创建博客网站

现在我们就可以使用hugo搭建一个属于自己的博客网站了。

####  创建站点

首先，我们进入到C盘下的hugo文件夹，点击鼠标右键选择在终端中打开

<img src="./images/image-20240810212901191.png" alt="image-20240810212901191" style="zoom:50%;" />

执行下方命令创建一个静态站点：（本例创建的站点名为myblog，大家可以自定义）

```
hugo new site myblog
```

<img src="./images/image-20240810212927099.png" alt="image-20240810212927099" style="zoom:50%;" />

创建后，我们回到hugo目录，可以看到新增了一个名为myblog的文件夹：

<img src="./images/image-20240810212941017.png" alt="image-20240810212941017" style="zoom: 50%;" />



进入该文件夹后，就能看到刚刚创建的博客网站程序：

<img src="./images/image-20240810212953946.png" alt="image-20240810212953946" style="zoom:50%;" />

#### 在站点中创建一篇文章

创建好了站点后，现在网站中还什么内容都没有，我们可以创建一篇文章来进行一下测试：

现在我们在终端中执行下方命令，进入站点目录：

<img src="./images/image-20240810213008612.png" alt="image-20240810213008612" style="zoom:50%;" />

进入网站目录后，执行下方命令创建一篇markdown格式的文章：

```
hugo new posts/Articles01.md
```

<img src="./images/image-20240810213030184.png" alt="image-20240810213030184" style="zoom:50%;" />

执行后可以看到提示已经创建了一篇名为Articles01的文章与其所属路径。

进入这个路径，就能看到文章了。

<img src="./images/image-20240810213046159.png" alt="image-20240810213046159" style="zoom:50%;" />

打开这篇文章后能看到这篇文章的标题，日期等相关信息

<img src="./images/image-20240810213101516.png" alt="image-20240810213101516" style="zoom:50%;" />

在这里我们需要把draft（草稿） = true 修改为 draft = false 来表示这并不是一篇草稿。

然后随便在文档中写一些内容，比如：

<img src="./images/image-20240810213117876.png" alt="image-20240810213117876" style="zoom:50%;" />

<img src="./images/image-20240810213132762.png" alt="image-20240810213132762" style="zoom:50%;" />

然后保存关闭即可。

#### 为网站添加主题

现在我们已经创建好了一个博客网站，并在网站中发布了一篇文章，不过现在我们还不能在浏览器中运行这个本地网站进行查看，因为在这之前，我们需要先给网站添加一个主题。

我们可以登录下方的hugo官网页面来挑选一个你喜欢的网站主题：

https://themes.gohugo.io/themes

<img src="./images/image-20240810213248545.png" alt="image-20240810213248545" style="zoom:33%;" />

这里我们随便选择一个主题，点击进入页面后，可以看到安装方式：

![image-20240810213305652](./images/image-20240810213305652.png)

可以看到，想要安装这个网站主题，需要先在终端中进入站点目录：

```
cd myblog
```

也可以想上边一样，在myblog目录中右键在终端中打开。

然后执行下方命令：

```
git clone https://github.com/vaga/hugo-theme-m10c.git themes/m10c
```

![image-20240810213345052](./images/image-20240810213345052.png)

然后在打开名为 hugo 的 toml源文件，添加主题配置即可。

<img src="./images/image-20240810213434934.png" alt="image-20240810213434934" style="zoom:50%;" />

网站标题修改为myblog，然后再把theme = “m10c”这行代码加进去保存即可。

<img src="./images/image-20240810213448481.png" alt="image-20240810213448481" style="zoom:50%;" />

现在，我们在myblog目录下的主题文件夹中就能看到刚才添加的主题文件目录了：

<img src="./images/image-20240810213501829.png" alt="image-20240810213501829" style="zoom:50%;" />

#### 本地访问测试

现在，我们在终端中执行下方代码启动本地网站进行测试：

```
hugo server
```

本地清除缓存运行

```
hugo server --disableFastRender --gc --noHTTPCache --noBuildLock --logLevel debug
```

![image-20240810213527096](./images/image-20240810213527096.png)

可以看到成功启动，在浏览器中输入 localhost:1313/ 即可访问这个本地站点：

<img src="./images/image-20240810213538584.png" alt="image-20240810213538584" style="zoom:33%;" />

可以看到网站标题为myblog，里边有刚才我们发布的第一篇文章Article01：

<img src="./images/image-20240810213551572.png" alt="image-20240810213551572" style="zoom:33%;" />

点击文章标题Article01，即可进入文章页面。

这样我们就成功使用HUGO在Windows本地快速部署了一个静态博客网站。



> 【下面是三种部署网站到公网的办法】

### 安装内网穿透工具

目前我们在本机成功部署了一个博客网站，但如果没有公网IP的话，只能在本地局域网环境使用，有一定局限性。如果出差在外想要远程使用的话，可以结合Cpolar内网穿透生成公网地址，免去了本地重新部署过程，只需要使用公网地址直接就可以访问本地部署的网站，进行演示。

点击进入cpolar官网注册一个账号，并下载最新版本的Cpolar

https://www.cpolar.com/

<img src="./images/image-20240810213650120.png" alt="image-20240810213650120" style="zoom:50%;" />

登录成功后，点击下载Cpolar到本地并安装（一路默认安装即可）本教程选择下载Windows版本。

<img src="./images/image-20240810213729647.png" alt="image-20240810213729647" style="zoom:50%;" />

Cpolar安装成功后，在浏览器上访问 localhost:9200，使用cpolar账号登录,登录后即可看到Cpolar web 配置界面,结下来在web 管理界面配置即可。

[http://localhost:9200/#/login?redirect=%2Fdashboard](http://localhost:9200/#/login?redirect=%2Fdashboard，如下图：)

【hugo-账户：1437059026@qq.com 密码：Wty201408.】

![image-20240810213845659](./images/image-20240810213845659.png)

#### 配置公网地址

接下来配置一下本地 博客网站 的公网地址，

登录后，点击左侧仪表盘的隧道管理——创建隧道，

创建一个 博客网站 的公网地址隧道：

- 隧道名称：可自定义命名，注意不要与已有的隧道名称重复
- 协议：选择
- 本地地址：1313
- 域名类型：选择随机域名
- 地区：选择China VIP

点击创建

<img src="./images/image-20240810213949633.png" alt="image-20240810213949633" style="zoom:50%;" />

隧道创建成功后，点击左侧的状态——在线隧道列表,查看所生成的公网访问地址，有两种访问方式。

<img src="./images/image-20240810214037707.png" alt="image-20240810214037707" style="zoom:50%;" />

使用任意一个上面生成的公网地址,在电脑或任意设备在浏览器进行登录访问,即可成功看到 本地博客网站 界面,这样一个可以远程访问的公网地址就创建好了,使用了Cpolar的公网域名,无需自己购买云服务器,即可在公网访问本地部署的服务了！

### 搭建本地服务器

内网穿透地址会随着ip的更新而变化，为了保证不一直修改baseUrl，配置服务器来搭载网站。

配置本地服务器，将编译后的网站文件运行与服务器后，本地可以不启动hugo server

在控制面板打开命令提示符窗格，键入npm install -g anywhere 9999

```
npm install -g anywhere 9999
```

9999这里是设置端口号，端口号自行设置，也可以不输入xxx会默认8000端口号

<img src="./images/image-20240810214930068.png" alt="image-20240810214930068" style="zoom:50%;" />

安装成功anywhere后，可以直接使用anywhere指令启动服务，但是默认是查看全部文件列表

#### 编译网站文件并运行于本地服务器

进入myblog根目录下，输入hugo命令进行编译

```
hugo
```

编译后，生成public文件夹，进入该文件夹根目录，并输入anywhere使编译文件运行在上面

```
cd public
```

```
anywhere
```

【特别注意：运行在服务器上的一定是："**编译后的文件！！！！**"】

### BaseUrl配置

使用hugo server本地运行的程序，每次跳转都将走localhost或者127.0.0.1，此处理解和其他程序启动一样，访问及跳转都将走本地。

若要使baseURL配置每次跳转时，自动请求的域名地址为服务器地址，则需要设置.toml文件中的baseURL。

```
baseURL = 'http://136c5bcc.r16.vip.cpolar.cn/'   //内网穿透地址
```

```
baseURL = 'http://192.168.9.125/'   //本地服务器地址
```

内网穿透地址需先将本地服务器内网地址先生成，再配置。配置方法同小结6相同，配置好后如图

![image-20240810220034303](./images/image-20240810220034303.png)

逻辑为：

1、配置本地baseURL为内网穿透地址，使每次访问均可访问内网穿透地址

2、编译文件后，跳转路径指向内网穿透地址

3、内网穿透地址配置localhost:8000指向本地服务器

4、启动本地服务器，使内网穿透访问正常

5、使跳转路径正常

当此处修改为内网穿透地址后，**需先进行编译**，再通过本地服务器启动后的地址后，记得编译之后再运行本地服务器

![f9b98e47fda48cbc42b3386a0b9babf](./images/f9b98e47fda48cbc42b3386a0b9babf.png)

### 创建 GitHub Pages 站点

GitHub提供了[Github pages](https://gohugo.io/hosting-and-deployment/hosting-on-github/)用于挂在类似于hugo，hexo这样的博客静态网页，

官方教程：[https://docs.github.com/zh/enterprise-server@3.12/pages/getting-started-with-github-pages/creating-a-github-pages-site](https://docs.github.com/zh/enterprise-server@3.12/pages/getting-started-with-github-pages/creating-a-github-pages-site，如下图：)

GitHub登陆后，新建仓库Wangty654.github.io  注意仓库名需要和账户名一致

<img src="./images/1724037435194.png" alt="1724037435194" style="zoom:50%;" />

<img src="./images/50287696e68c76e16783901342ea9e2.png" alt="50287696e68c76e16783901342ea9e2" style="zoom:50%;" />

修改博客配置文件.toml中的默认跳转地址为仓库名

```
baseURL = 'https://Wangty654.github.io'   //仓库服务器地址
```

仓库建好后，进入博客根目录，编译网站

```
cd myblog
C:/hugo/myblog > hugo
```

生成的编译后文件夹public为所有html、css、js组成的静态网站文件

#### 上传GitHub

```
cd public
C:/hugo/myblog/public > 
```

```
git init
git add . 
git commit -m '1'
git push
```

请求成功后直接访问https://Wangty654.github.io即可

### 腾讯云服务器部署

<img src="./images/85900a0f3b241dfb9845c2842b1aa2c.png" alt="85900a0f3b241dfb9845c2842b1aa2c" style="zoom:50%;" />

<img src="./images/4cc09c76553cdb9c11249f2a263d1c7.png" alt="4cc09c76553cdb9c11249f2a263d1c7" style="zoom:50%;" />

配置的后台的代理

静态资源服务器

如果是放我的静态网页

只需要将dist配置在root上，并对其刷新页面的位置进行配置就行

dist内存在index页面等同于，hugo的public页面

<img src="./images/ea8543d5eff09b5e125f556fa98e1cf.png" alt="ea8543d5eff09b5e125f556fa98e1cf" style="zoom: 80%;" />

ftp传文件 、shell 输入命令

<img src="./images/fe423f94796e37fe9bf0064f26f04b6.png" alt="fe423f94796e37fe9bf0064f26f04b6" style="zoom:50%;" />

### 网站样式自定义设置

#### 关于themes主题

themes主题为git拉取下来用于整个静态网站的样式代码，均可按照需求进行修改

<img src="./images/image-20240811094705788.png" alt="image-20240811094705788" style="zoom: 50%;" />

##### 10.1.1头像设置

1、在layouts包下，有一个baseof.html文件，将其中的首页文件指向调整为你想要的图片

<img src="./images/image-20240811095255206.png" alt="image-20240811095255206" style="zoom:50%;" />

2、并同时更改static文件夹中的图片，使指向和文件名一致。

![image-20240811095325698](./images/image-20240811095325698.png)

##### 10.1.2 主题颜色设置

1、拷取themes中配置文件config.toml里默认设置主题颜色的部分代码

<img src="./images/image-20240811095726485.png" alt="image-20240811095726485" style="zoom:50%;" />

默认主题有三种样式

<img src="./images/image-20240811095822984.png" alt="image-20240811095822984" style="zoom:50%;" />

选择其中一种样式，放入我们的配置文件hugo.toml，可以对其中的文字颜色也进行修改，本主题改为粉色

<img src="./images/image-20240811095946846.png" alt="image-20240811095946846" style="zoom:50%;" />

##### 10.1.3 主页文字设置

更改layouts包下，baseof.html文件中书写首页介绍文字的位置

<img src="./images/image-20240811100259821.png" alt="image-20240811100259821" style="zoom:50%;" />

##### 10.1.4 主页分类菜单设置

1、配置文件hugo.html中配置菜单栏

<img src="./images/image-20240811100402415.png" alt="image-20240811100402415" style="zoom:50%;" />

2、并在每条笔记中，使用yaml格式书写抬头

<img src="./images/image-20240811100528323.png" alt="image-20240811100528323" style="zoom:50%;" />

<img src="./images/image-20240811100542974.png" alt="image-20240811100542974" style="zoom:50%;" />

##### 10.1.5 主页关于菜单设置

取主题中content包下的about文件放入myblog的content包根目录下。about内的内容可以自行定义

<img src="./images/image-20240811100726234.png" alt="image-20240811100726234" style="zoom:50%;" />

##### 10.1.6 关于代码块样式设置

配置文件中写入设置样式的命令模块，根据需要更改其中style的值。

hugo中文文档中 ：[https://hugo.opendocs.io/getting-started/](https://hugo.opendocs.io/getting-started/，如下图：)  选择“内容管理” - “语法高亮”

在style中选择想要更改的样式，放入配置文件中：[https://xyproto.github.io/splash/docs/](https://xyproto.github.io/splash/docs/，如下图：)

<img src="./images/image-20240811101001028.png" alt="image-20240811101001028" style="zoom:50%;" />

