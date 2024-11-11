# 【VMware】VMware虚拟机安装Windows11系统教程


### 新建一个虚拟机

**1、打开虚拟机主页面，点击“创建新的虚拟机”**

![image-20241106154418235](./images/image-20241106154418235.png)

**2、该页面建议选择”自定义“，并点击”下一步“**

<img src="./images/image-20241106154622351.png" alt="image-20241106154622351" style="zoom:50%;" />

**3、这里选最大`16.2.x`，并点击“下一步”**

<img src="./images/image-20241106154858449.png" alt="image-20241106154858449" style="zoom:50%;" />

**4、选择“稍后安装操作系统”，并点击“下一步”**

<img src="./images/image-20241106154951829.png" alt="image-20241106154951829" style="zoom:50%;" />

**5、没有win11的名称，就选择`win10 x64`版本，并点击“下一步”**

<img src="./images/image-20241106155102240.png" alt="image-20241106155102240" style="zoom:50%;" />

**6、根据自己具体的情况，选择虚拟机存放的位置**

<img src="./images/image-20241106155448988.png" alt="image-20241106155448988" style="zoom:50%;" />

**7、修改虚拟机的名称，用于区别自己创建的其他虚拟机。并点击“下一步”**

<img src="./images/image-20241106155622443.png" alt="image-20241106155622443" style="zoom:50%;" />

**8、该页面，点击“下一步”**

<img src="./images/image-20241106155718887.png" alt="image-20241106155718887" style="zoom:50%;" />

**9、根据情况和需求，配置处理器数量。并点击“下一步”**

<img src="./images/image-20241106155845290.png" alt="image-20241106155845290" style="zoom:50%;" />

**10、根据情况和需求，配置内存大小。并点击“下一步”**

<img src="./images/image-20241106160051335.png" alt="image-20241106160051335" style="zoom:50%;" />

**11、选择“使用桥接网络”，并点击“下一步”**

<img src="./images/image-20241106160159224.png" alt="image-20241106160159224" style="zoom:50%;" />

**12、点击“下一步”**

<img src="./images/image-20241106160231937.png" alt="image-20241106160231937" style="zoom:50%;" />

**13、点击“下一步”**

<img src="./images/image-20241106160314173.png" alt="image-20241106160314173" style="zoom:50%;" />

**14、点击“下一步”**

<img src="./images/image-20241106160343219.png" alt="image-20241106160343219" style="zoom:50%;" />

**15、根据情况和需求，配置磁盘大小。并点击“下一步”**

<img src="./images/image-20241106160446472.png" alt="image-20241106160446472" style="zoom:50%;" />

**16、根据自己具体的情况，选择虚拟机存放的位置，并点击“下一步”**

<img src="./images/image-20241106160600610.png" alt="image-20241106160600610" style="zoom:50%;" />

<img src="./images/image-20241106162623875.png" alt="image-20241106162623875" style="zoom:50%;" />

**17、在浏览器使用搜索引擎**（这里使用的是：百度搜索引擎），搜索`Windows11`。选择[微软官网](https://www.microsoft.com/zh-cn/software-download/windows11?774b232c-a48d-452a-a8fb-3906dc168d5c=True&9d47a9e1-e53b-49a1-92ca-a647d62dc410=True)。

![image-20241106161608837](./images/image-20241106161608837.png)

**18、在官网找到“win11磁盘映像”**

![image-20241106161946653](./images/image-20241106161946653.png)

**19、选择ISO版本，语言“简体中文”，点击`64-bit Download`**

![image-20241106162210834](./images/image-20241106162210834.png)

![image-20241106162344478](./images/image-20241106162344478.png)

![image-20241106162410776](./images/image-20241106162410776.png)

**20、找到下载完成后保存的位置**

<img src="./images/image-20241106162523263.png" alt="image-20241106162523263" style="zoom:50%;" />

**21、继续回到虚拟机安装导向，点击自定义硬件**

<img src="./images/image-20241106162657483.png" alt="image-20241106162657483" style="zoom:50%;" />

**22、选择`新CD/DVD`，选择使用ISO映像文件，配置刚刚下载的文件的位置，点击“关闭”。**

<img src="./images/image-20241106162729828.png" alt="image-20241106162729828" style="zoom:50%;" />

**23、点击“完成”**

![image-20241106165803089](./images/image-20241106165803089.png)

**24、点击“编辑虚拟机设置”，选择“选项”卡，选择“访问控制”，点击“加密”**

![image-20241108094317500](./images/image-20241108094317500.png)

**25、根据自己的情况，设置加密密码，两次密码保持一致。并点击“加密”**

```
--随机生成密码
spoHLT2b
```

<img src="./images/image-20241108094339872.png" alt="image-20241108094339872" style="zoom:50%;" />

**26、选择“硬件选项卡”，点击“添加，”选择“可信平台模块”，并点击完成**

![image-20241108094529374](./images/image-20241108094529374.png)

**27、点击“开启此虚拟机”。**

![image-20241108094756320](./images/image-20241108094756320.png)

**28、进入时，如卡住，按`enter`回车键，继续。`ctrl+alt`可以实现鼠标光标在虚拟机内外来回切换**

<img src="./images/image-20241108094937122.png" alt="image-20241108094937122" style="zoom:50%;" />

**29、出现“安装系统界面”，点击"下一步"**

<img src="./images/image-20241108094958473.png" alt="image-20241108094958473"  />

<img src="./images/image-20241108095119543.png" alt="image-20241108095119543"  />

**30、点击"下一步"**

<img src="./images/image-20241108095222229.png" alt="image-20241108095222229"  />

**31、选择"我没有产品密钥"**

![image-20241108095311165](./images/image-20241108095311165.png)

**32、选择"win11专业版"，并点击"下一步"**

![image-20241108095451651](./images/image-20241108095451651.png)

**33、勾选"我接受"，并点击"下一步"**

![image-20241108095604612](./images/image-20241108095604612.png)

**34、新建磁盘空间，点击"新建"，大小为1024的倍数。例如50G就是50*1024即可。点击"应用"**

![image-20241108095805007](./images/image-20241108095805007.png)

**35、其余自动的硬盘分区，也应用，并点击"下一步"**

![image-20241108100102671](./images/image-20241108100102671.png)

**39、点击"安装"**

![image-20241108100248846](./images/image-20241108100248846.png)

**40、等待安装进度条**

<img src="./images/image-20241108100747655.png" alt="image-20241108100747655" style="zoom: 67%;" />

**41、可以等待他自动重启，也可以点击"立即重启"**

<img src="./images/image-20241108101149418.png" alt="image-20241108101149418" style="zoom: 67%;" />

**42、等待重启**

<img src="./images/image-20241108101517149.png" alt="image-20241108101517149" style="zoom: 67%;" />

**43、安装准备界面，根据提示和导向，一路点"是"**

<img src="./images/image-20241108101622278.png" alt="image-20241108101622278" style="zoom: 67%;" />

<img src="./images/image-20241108101659726.png" alt="image-20241108101659726" style="zoom: 67%;" />

<img src="./images/image-20241108101909977.png" alt="image-20241108101909977" style="zoom: 67%;" />

<img src="./images/image-20241108101931598.png" alt="image-20241108101931598" style="zoom: 67%;" />

<img src="./images/image-20241108102212182.png" alt="image-20241108102212182" style="zoom: 67%;" />

```
--pin
1437059026@qq.com
```

**48、等待桌面加载**

<img src="./images/image-20241108104951788.png" alt="image-20241108104951788" style="zoom:67%;" />

**49、进入到win11系统桌面界面**

<img src="./images/image-20241108105047010.png" alt="image-20241108105047010" style="zoom:67%;" />



### 设置虚拟机屏幕全屏

**1、选择"虚拟机"，选择"安装VMware Tools"**

![image-20241108105314913](./images/image-20241108105314913.png)

**2、右下角弹出窗，表示安装完成**

<img src="./images/image-20241108105400118.png" alt="image-20241108105400118" style="zoom:67%;" />

**3、进入资源管理器，选择"此电脑"，双击打开"DVD驱动器"**

<img src="./images/image-20241108105437642.png" alt="image-20241108105437642" style="zoom:67%;" />

**4、选择"是"，等待安装**

<img src="./images/image-20241108105503993.png" alt="image-20241108105503993" style="zoom:67%;" />

<img src="./images/image-20241108105526913.png" alt="image-20241108105526913" style="zoom:67%;" />

**5、弹出"安装向导"，点击"下一步"**

<img src="./images/image-20241108105543348.png" alt="image-20241108105543348" style="zoom:67%;" />

**6、继续点击"下一步"**

<img src="./images/image-20241108105555281.png" alt="image-20241108105555281" style="zoom:67%;" />

**7、点击"安装"**

<img src="./images/image-20241108105606399.png" alt="image-20241108105606399" style="zoom:67%;" />

**8、等待安装进度**

<img src="./images/image-20241108105626737.png" alt="image-20241108105626737" style="zoom:67%;" />

**9、安装完成后就自动适配了全屏，点击"完成"**

![image-20241108105723545](./images/image-20241108105723545.png)

**10、弹出窗，选择"是"**

![image-20241108105750642](./images/image-20241108105750642.png)

### 虚拟机内win11系统激活

**打开个性化有下面这个标识，标识win11系统未激活**

![image-20241108110140756](./images/image-20241108110140756.png)

![image-20241108110237671](./images/image-20241108110237671.png)

**1、激活脚本拷贝进虚拟机**

```
https://www.123pan.com/s/g520Vv-rgRid
```

<img src="./images/image-20241108110958306.png" alt="image-20241108110958306" style="zoom:67%;" />

**2、连接上网络，双击激活脚本，选择"是"**

<img src="./images/image-20241108111049621.png" alt="image-20241108111049621" style="zoom:67%;" />

**3、根据该网址激活教程操作**

```
https://massgrave.dev/
```

![image-20241108112151013](./images/image-20241108112151013.png)

```shell
irm https://get.activated.win | iex
```

<img src="./images/image-20241108112256769.png" alt="image-20241108112256769" style="zoom: 67%;" />

<img src="./images/image-20241108112329149.png" alt="image-20241108112329149" style="zoom:67%;" />

​	**到此，关闭所有黑窗口**

**6、桌面空白处，右键，选择"个性化"。若激活提示消失，说明激活成功。**

<img src="./images/image-20241108112435948.png" alt="image-20241108112435948" style="zoom:67%;" />

### 操作习惯设置

**1、个性化 - 主题 - 桌面图标设置**

<img src="./images/image-20241108112543165.png" alt="image-20241108112543165" style="zoom:67%;" />

<img src="./images/image-20241108112610821.png" alt="image-20241108112610821" style="zoom:67%;" />

**2、勾选"计算机"、"回收站"、"控制面板"，点击"应用"**

<img src="./images/image-20241108112646161.png" alt="image-20241108112646161" style="zoom:67%;" />

**3、系统 - 显示 - 缩放 ， 大小改为"125%"**

<img src="./images/image-20241108112752720.png" alt="image-20241108112752720" style="zoom:67%;" />

<img src="./images/image-20241108112819502.png" alt="image-20241108112819502" style="zoom:67%;" />

**4、虚拟机这个图标可以全屏，全屏后顶部同样点这个图标可以退出全屏**

![image-20241108112925816](./images/image-20241108112925816.png)

```
开机密码--
1437059026
```


