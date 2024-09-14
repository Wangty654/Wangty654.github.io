# 【HUGO】Hugo的LoveIt主题美化（四）




## 二级标题样式

为了使文章的可读性更强，在这里最好修改一下 LoveIt 主题的文章样式。

### 二级标题的修改

原主题的二级标题我不好评价，它跟下一级的标题几乎区分不开，这导致文章看起来没有条理。因此在这里我们将修改二级标题的样式以做区分。

找到`your_site\assets\css\_custom.scss`文件，在里面添加如下内容：

```css
/* 标题 */
.page.single h2 {
  box-shadow: rgb(95, 90, 75) 0px 0px 0px 1px, rgba(10, 10, 0, 0.5) 1px 1px 6px 1px;
  color: rgb(255, 255, 255);
  font-family: 微软雅黑, 宋体, 黑体, Arial;
  font-weight: bold;
  line-height: 1.3;
  text-shadow: rgb(34, 34, 34) 2px 2px 3px;
  background: rgb(43, 102, 149);
  border-radius: 6px;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  padding: 7px;
  margin: 18px 0px 18px -5px !important;
}
```

### 行内代码

原主题的行内代码能用，但只能用一点点，实在是与正文区分不开，所以在这修改一下它的样式。

找到`your_site\assets\css\_custom.scss`文件，在里面添加如下内容：

```css
/* 行内代码块 */
code {
  margin: 0 .2rem;
  font-size: .9em;
  border: 1px solid #d6d6d6;
  border-radius: .2rem;
}

/* 预格式代码块(用tab键插入的代码块) */
pre code {
  margin: 0;
  border: none;
  font-size: .875rem;
}

/* 标题里的代码块样式 */
.page.single .content>h2 code {
  color: #f7ab01;
  background: transparent !important;
  border: none;
}
```

### 分割线

在原主题中分割线几乎看不到，这里修改一下。

找到`your_site\assets\css\_custom.scss`文件，在里面添加如下内容：

```css
/* 分隔线 */
hr {
  border: none;
  border-bottom: 2px dashed #7a7a7a !important;
}
```

### 页脚分割线

页脚内容与其他内容连在一起有点杂乱，因此添加一个页脚的分割线还是很有必要的。

找到`your_site\assets\css\_custom.scss`文件，在里面添加如下内容：

```css
/* 页脚分割线 */
.footer {
  display: block;
border-top-width: 3px;
  border-top-style: solid;
  border-top-color: #96c1db;
  position: relative;
  z-index: -1;
  max-width: 800px;
  width: 60%;
  margin: .5rem auto 0 auto;
padding-left: 0rem;
padding-right: 0rem;
}
@media only screen and (max-width: 1440px) {
  .footer {
      width:54.5%
  }
}
@media only screen and (max-width: 1200px) {
  .footer {
      width:50.5%
  }
}
@media only screen and (max-width: 960px) {
  .footer {
      width: 77%
  }
}
@media only screen and (max-width: 680px) {
  .footer {
      width: 95%
  }
}
```

### 首页头像旋转

这是一个没什么用的功能，但是好玩。

找到`your_site\assets\css\_custom.scss`文件，在里面添加如下内容：

```css
/* 头像旋转 */
.home .home-profile .home-avatar img {
    width: 5rem;

  /* 设置循环动画
  [animation: 
	(play)动画名称
	(2s)动画播放时长单位秒或微秒
	(ease-out)动画播放的速度曲线为以低速结束 
	(1s)等待1秒然后开始动画
	(1)动画播放次数(infinite为循环播放) ]*/
 
  /* 鼠标经过头像旋转360度 */
  -webkit-transition: -webkit-transform 1.0s ease-out;
  -moz-transition: -moz-transform 1.0s ease-out;
  transition: transform 1.0s ease-out;
    &:hover {
      /* 鼠标经过停止头像旋转 
      -webkit-animation-play-state:paused;
      animation-play-state:paused;*/

      /* 鼠标经过头像旋转360度 */
      -webkit-transform: rotateZ(360deg);
      -moz-transform: rotateZ(360deg);
      transform: rotateZ(360deg);
    }
}
```

## 更新时间设置

原主题是有`最近更新时间`参数的，只不过藏的比较深，一般不显示。但实际上，更新时间是要比发布时间更好用的（毕竟老文章改改也就成新文章了）。

### 首页显示最近更新时间

虽然我们有`最近更新时间`，但首页并不显示，这好吗？这不好！所以我劝年轻人们都把它加上。

把`your_site/themes/LoveIt/layouts/_default/summary.html`复制到`your_site/layouts/_default/`路径下，然后打开`your_site/layouts/_default/summary.html`文件，找到如下内容：

```html
        {{- with .Site.Params.dateFormat | default "2006-01-02" | .PublishDate.Format -}}
            &nbsp;<span class="post-publish">
                {{- printf `<time datetime="%v">%v</time>` . . | dict "Date" | T "publishedOnDate" | safeHTML -}}
            </span>
        {{- end -}}
```

把它修改为下面的内容：

```html
        {{- with .Site.Params.dateFormat | default "2006-01-02" | .PublishDate.Format -}}
            &nbsp;<span class="post-publish">
                {{- printf `<time datetime="%v">%v</time>` . . | dict "Date" | T "publishedOnDate" | safeHTML -}}, 
            </span>
        {{- end -}}

        {{- with .Site.Params.dateFormat | default "2006-01-02" | .Lastmod.Format -}}
            &nbsp;<span class="post-publish">
                {{- printf `<time datetime="%v">%v</time>` . . | dict "Date" | T "updatedOnDate" | safeHTML -}}, 
            </span>
        {{- end -}}
```

### 显示最近更新的十篇文章

一般来说，归档页面只有按发布时间排序的列表，但是我们最新的动态往往会涉及到修改以前的文章，所以我们最好加一栏用来显示最近更新的文章。

首先，在`your_site/config.toml`配置文件中添加新参数：

```toml
[params.section]
  # 显示最近更新文章的数量
  lastUpdatedSize = 10
```

然后，把`your_site/themes/LoveIt/layouts/_default/section.html`复制到`your_site/layouts/_default/`路径下，然后打开`your_site/layouts/_default/section.html`文件，找到如下内容：

```html
{{- /* Paginate */ -}}
```

在它的**上面**添加如下内容：

```html
{{- /* Last Modified */ -}}
{{- $lastUpdatedSize := .Site.Params.section.lastUpdatedSize -}}
{{- if $lastUpdatedSize -}}
	{{- if .Pages -}}
		{{- $pages := .Pages.ByLastmod.Reverse -}}
		<h3 class="group-title">{{ T "RecentUpdate" -}} <sup>{{- $lastUpdatedSize -}}</sup></h3>
		{{- range first $lastUpdatedSize $pages -}}
			<article class="archive-item">
				<a href="{{ .RelPermalink }}" class="archive-item-link">
					{{- .Title -}}
				</a>
				<span class="archive-item-date2">
					{{- "2006-01-02" | .Lastmod.Format -}}
				</span>
			</article>
		{{- end -}}
	{{- end -}}
{{- end -}}
```

接着来修改国际化文件，把`your_site\themes\LoveIt\i18n\zh-CN.toml`复制到`your_site\i18n\`路径下，打开`your_site\i18n\zh-CN.toml`文件，添加如下内容：

```toml
[RecentUpdate]
  other = "最近更新"
```

如果还设置了其他语言，那么我们只需将这个参量添加到对应的文件，再把 other 的内容改掉即可。

然后在`your_site/assets/css/_custom.scss`中添加如下内容：

```css
.archive-item-date2 {
  color: #7c7c88;
}
```

最后，为了区分开发布时间和最近更新时间，我们要在每篇文章中添加最近更新时间的 meta。把`your_site/themes/LoveIt/layouts/posts/single.html`复制到`your_site/layouts/posts/`路径下，然后打开`your_site/layouts/posts/single.html`文件，找到如下内容：

```html
{{- with .Site.Params.dateformat | default "2006-01-02" | .PublishDate.Format -}}
    <i class="far fa-calendar-alt fa-fw"></i>&nbsp;<time datetime="{{ . }}">{{ . }}</time>&nbsp;
{{- end -}}
```

将其改为：

```html
{{- with .Site.Params.dateformat | default "2006-01-02" | .PublishDate.Format -}}
    <i class="far fa-calendar fa-fw"></i>&nbsp;<time datetime="{{ . }}">{{ . }}</time>&nbsp;
{{- end -}}
{{- with .Site.Params.dateformat | default "2006-01-02" | .Lastmod.Format -}}
    <i class="far fa-calendar-plus fa-fw"></i>&nbsp;<time datetime="{{ . }}">{{ . }}</time>&nbsp;
{{- end -}}
```

## 添加友链卡片

为了我们的友链显得更加的好看，这里我们引入友链卡片。

### 添加`friend.html`文件

在`your_site\layouts\shortcodes\`路径下，新创建文件`friend.html`，并且在里面添加如下内容：

```html
{{ if .IsNamedParams }}
{{- $src := .Get "logo" -}}
{{- $small := .Get "logo_small" | default $src -}}
{{- $large := .Get "logo_large" | default $src -}}
<div class="friend-div">
  <a target="_blank" href={{ .Get "url" | safeURL }} title={{ .Get "name" }} >
  <img class="lazyload"
       src="/svg/loading.min.svg"
       data-src={{ $src | safeURL }}
       alt={{ .Get "name" }}
  data-sizes="auto"
  data-srcset="{{ $small | safeURL }}, {{ $src | safeURL }} 1.5x, {{ $large | safeURL }} 2x" />
  <span class="friend-name">{{ .Get "name" }}</span>
  <span class="friend-info">{{ .Get "word" }}</span>
  </a>
</div>
{{ end }}
```

### 添加`_friend.scss`文件

在`your_site\assets\css\_partial\_single\`路径下（如果没有就自己创建），新建文件`_friend.scss`，并在里面添加如下内容：

```css
#article-container {
 word-wrap: break-word;
 overflow-wrap: break-word
}

#article-container a {
 color: #49b1f5
}

#article-container a:hover {
 text-decoration: underline
}

#article-container img {
 margin: 0 auto .8rem
}

.flink#article-container .friend-list-div > .friend-div a .friend-info,
.flink#article-container .friend-list-div > .friend-div a .friend-name {
 overflow: hidden;
 -o-text-overflow: ellipsis;
 text-overflow: ellipsis;
 white-space: nowrap
}

.flink#article-container .friend-list-div {
 overflow: auto;
 padding: 10px 10px 0;
 text-align: center;
}
.flink#article-container .friend-list-div > .friend-div {
 position: relative;
 float: left;
 overflow: hidden;
 margin: 15px 7px;
 width: calc(100% / 3 - 15px);
 height: 90px;
 border-radius: 8px;
 line-height: 17px;
 -webkit-transform: translateZ(0)
}

@media screen and (max-width: 1100px) {
 .flink#article-container .friend-list-div > .friend-div {
  width: calc(50% - 15px) !important
 }

@media screen and (max-width: 600px) {
 .flink#article-container .friend-list-div > .friend-div {
  width: calc(100% - 15px) !important
 }
}
}

.flink#article-container .friend-list-div > .friend-div:hover {
 background: rgba(87, 142, 224, 0.15);
}

.flink#article-container .friend-list-div > .friend-div:hover img {
 -webkit-transform: rotate(360deg);
 -moz-transform: rotate(360deg);
 -o-transform: rotate(360deg);
 -ms-transform: rotate(360deg);
 transform: rotate(360deg)
}

.flink#article-container .friend-list-div > .friend-div:before {
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 z-index: -1;
 background: var(--text-bg-hover);
 content: '';
 -webkit-transition: -webkit-transform .3s ease-out;
 -moz-transition: -moz-transform .3s ease-out;
 -o-transition: -o-transform .3s ease-out;
 -ms-transition: -ms-transform .3s ease-out;
 transition: transform .3s ease-out;
 -webkit-transform: scale(0);
 -moz-transform: scale(0);
 -o-transform: scale(0);
 -ms-transform: scale(0);
 transform: scale(0)
}
.flink#article-container .friend-list-div > .friend-div:hover:before,
.flink#article-container .friend-list-div > .friend-div:focus:before,
.flink#article-container .friend-list-div > .friend-div:active:before {
 -webkit-transform: scale(1);
 -moz-transform: scale(1);
 -o-transform: scale(1);
 -ms-transform: scale(1);
 transform: scale(1)
}
.flink#article-container .friend-list-div > .friend-div a {
 color: var(--font-color);
 text-decoration: none
}

.flink#article-container .friend-list-div > .friend-div a img{
 float: left;
 margin: 15px 10px;
 width: 60px;
 height: 60px;
 border-radius: 35px;
 -webkit-transition: all .3s;
 -moz-transition: all .3s;
 -o-transition: all .3s;
 -ms-transition: all .3s;
 transition: all .3s
}

.flink#article-container .friend-list-div > .friend-div a .friend-name {
 display: block;
 padding: 16px 10px 0 0;
 height: 40px;
 font-weight: 700;
 font-size: 20px
}

.flink#article-container .friend-list-div > .friend-div a .friend-info {
 display: block;
 padding: 1px 10px 1px 0;
 height: 50px;
 font-size: 13px
}
```

### 在`_single.scss`中引入代码

把`your_site\themes\LoveIt\assets\css\_page\_single.scss`复制粘贴到路径`your_site\assets\css\_page\`下。 再在文件`your_site\assets\css\_page\_single.scss`里添加如下内容：

```css
@import "../_partial/_single/friend";
```

### 调用友链卡片

至此，我们便可以使用如下的`shortcodes`在我们文章`.md`的任意地方调用友链卡片了：

```html
<div class="flink" id="article-container">
<div class="friend-list-div" >

{{
    < friend name="友链名称1" url="友链地址1" logo="友链图片链接1" word="友链描述1" >
        }}
{{
   < friend name="友链名称2" url="友链地址2" logo="友链图片链接2" word="友链描述2" >
   }}

</div>
</div>
```

{{< admonition type=abstract title="This is a tip" open=true >}}

不能省略这两个`div`

{{< /admonition >}}

## 创建友链页面

有了友链卡片，我们最好还要有一个页面来专门放置友链。之前我讲过如何添加`关于`页面，而其实这次与添加`关于`页面差不多。

### 创建`friend/index.md`文件

于终端中来到博客的根目录，我们来创建一个`.md`文件作为友链页面，

本站友链

```
friend name="Ty Note" url="https://Wangty654.github.io" logo="https://Wangty654.github.io/apple-touch-icon.png" word="一个简单的私人博客网站 (˘◡˘)"
```


