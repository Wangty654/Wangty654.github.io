# 【HUGO】Hugo的LoveIt主题美化（三）


## 添加`_custom.scss`以自定义 css

Hugo 会优先读取博客根目录下的同名目录和文件，所以我们在博客根目录下添加文件`your_site\assets\css\_custom.scss`

{{< admonition type=abstract title="This is a tip" open=true >}}

我们要使用`hugo_extended`版本的 Hugo 才可使`_custom.scss`文件生效

{{< /admonition >}}

## 添加`custom.js`以自定义 JavaScript

我们要创建一个`.js`文件来自定义 JavaScript，但是由于 LoveIt 主题本身并没有提供这样的一个文件，所以除了创建文件，我们还要修改一下 LoveIt 主题的模版。

### 创建`custom.js`文件

在博客根目录添加文件`your_site\static\js\custom.js`，之后我们自定义 JavaScript 的修改就都是在这个文件中进行的。

### 修改 LoveIt 模版

把`your_site\themes\LoveIt\layouts\partials\assets.html`文件复制到`your_site\layouts\partials\`路径下。

在`your_site\layouts\partials\assets.html`文件内容的最尾部找到`{{- partial "plugin/analytics.html" . -}}`，并在其**上一行**中添加如下内容：

```html
{{- /* 自定义 js 文件 */ -}}
<script type="text/javascript" src="/js/custom.js"></script>
```

由于本系列文章的部分功能会用到 jQuery（如网站运行时间和背景图片），因此强烈建议与自定义的 js 文件一起引入，即在刚才添加的内容的**上一行**再添加如下的内容：

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/jquery@2.1.3/dist/jquery.min.js"></script>
```

## 添加网站运行时间

把`your_site\themes\LoveIt\layouts\partials\footer.html`复制到`your_site\layouts\partials\`路径下。 打开文件`your_site\layouts\partials\footer.html`，在其中找到`<div class="footer-container">`，并在其下方添加如下内容：

```html
<div class="footer-line">
	<span id="run-time"></span>
</div>
```

之后，在我们刚刚新建的`your_site\static\js\custom.js`文件中添加如下内容：

```js
/* 站点运行时间 */
function runtime() {
	window.setTimeout("runtime()", 1000);
	/* 请修把这里的建站时间换为你自己的 */
    let startTime = new Date('05/23/2023 08:00:00');
    let endTime = new Date();
    let usedTime = endTime - startTime;
    let days = Math.floor(usedTime / (24 * 3600 * 1000));
    let leavel = usedTime % (24 * 3600 * 1000);
    let hours = Math.floor(leavel / (3600 * 1000));
    let leavel2 = leavel % (3600 * 1000);
    let minutes = Math.floor(leavel2 / (60 * 1000));
    let leavel3 = leavel2 % (60 * 1000);
    let seconds = Math.floor(leavel3 / (1000));
    let runbox = document.getElementById('run-time');
    runbox.innerHTML = '本站已运行<i class="far fa-clock fa-fw"></i> '
        + ((days < 10) ? '0' : '') + days + ' 天 '
        + ((hours < 10) ? '0' : '') + hours + ' 时 '
        + ((minutes < 10) ? '0' : '') + minutes + ' 分 '
        + ((seconds < 10) ? '0' : '') + seconds + ' 秒 ';
}
runtime();
```

## lightgallery 图片相册功能的改进

lightgallery 是 LoveIt 支持的图片相册功能（就是点击图片能放大观察的功能）。如果要开启，则先要在`your_site/config.toml`配置文件中，令参数`lightgallery`为 true。

但是若要真正的启用这个功能，那么我们要对每个图片起一个标题（引入图片的形式为`![图片说明](https://picture.com"图片标题")`），但是懒惰的我一般不会给图片起标题（因为要打两个双引号），所以要是图片说明能当图片标题就好了。

为了达到上面的效果，我们只需要创建`your_site/layouts/_default/_markup/render-image.html`文件，并在该文件中添加如下内容：

```html
{{ $figcap := or .Title .Text }}
{{ $caption := or .Text " " }}
{{- if eq $figcap $caption -}}
    {{ $caption = " " }}
{{- end -}}

{{- if $figcap -}}
    <figure>
        {{- dict "Src" .Destination "Title" $figcap "Caption" $caption "Linked" true "Resources" .Page.Resources | partial "plugin/image.html" -}}
        <figcaption class="image-caption">
            {{- $figcap | safeHTML -}}
        </figcaption>
    </figure>
{{- else -}}
    {{- dict "Src" .Destination "Title" (path.Base .Destination) "Resources" .Page.Resources | partial "plugin/image.html" -}}
{{- end -}}
```

但是如果你真的不需要标题，而且嫌标题很丑的话，那么可以在`your_site\assets\css\_custom.scss`文件中添加如下内容：

```css
/* 图片 */
figcaption {
  display: none !important;
}
```

然后标题就可以消失了。

## 文章过期提醒

像这种科技博文，一般都有时效性，所以添加一个文章过期提醒就显得很有必要了。

### 修改配置及模版文件

在`your_site/config.toml`配置文件中，添加如下内容：

```toml
  # Display a message at the beginning of an article to warn the readers that it's content may be outdated.
  # 在文章末尾显示提示信息，提醒读者文章内容可能过时。
  [params.outdatedInfoWarning]
    enable = true
    hint = 90     # Display hint if the last modified time is more than these days ago.    # 如果文章最后更新于这天数之前，显示提醒
    warn = 180    # Display warning if the last modified time is more than these days ago.    # 如果文章最后更新于这天数之前，显示警告
```

但是我们总不可能每一篇都是这种有时效性的科技博客，所以我们要添加一个参数来控制其是否开启。为了方便起见，这里我选择直接在模版文件`your_site\archetypes\default.md`里添加变量：

```markdown
outdatedInfoWarning: true
```

{{< admonition type=abstract title="This is a tip" open=true >}}

这里默认文章过期提醒开启，若想修改默认，直接将 true 改为 false 即可。之前创建的文章直接在文章头添加该参数即可。

{{< /admonition >}}

### 修改国际化文件

把`your_site\themes\LoveIt\i18n\zh-CN.toml`复制到`your_site\i18n\`路径下，打开`your_site\i18n\zh-CN.toml`文件，添加如下内容：

```toml
[outdatedInfoWarningBefore]
  other = "本文最后更新于 "

[outdatedInfoWarningAfter]
  other = "，文中内容可能已过时，请谨慎使用。"
```

### 添加`outdated-info-warning.html`文件

在`your_site/layouts/partials/single/`路径下添加`outdated-info-warning.html`文件，内容如下：

```html
{{- if or .Params.outdatedInfoWarning (and .Site.Params.outdatedInfoWarning.enable (ne .Params.outdatedInfoWarning false)) }}
  {{- $daysAgo := div (sub now.Unix .Lastmod.Unix) 86400 }}
  {{- $hintThreshold := .Site.Params.outdatedInfoWarning.hint | default 30 }}
  {{- $warnThreshold := .Site.Params.outdatedInfoWarning.warn | default 180 }}

  {{- $updateTime := .Lastmod }}
  {{- if .GitInfo }}
    {{- if lt .GitInfo.AuthorDate.Unix .Lastmod.Unix }}
      {{- $updateTime := .GitInfo.AuthorDate }}
    {{- end }}
  {{- end -}}

  {{- if gt $daysAgo $hintThreshold }}
	{{- $iconDetails := "fas fa-angle-right fa-fw" -}}
    {{- if gt $daysAgo $warnThreshold }}
		{{- $type := "warning" -}}
		{{- $icon := "fas fa-exclamation-triangle fa-fw" -}}
		<div class="details admonition {{ $type }} open">
			<div class="details-summary admonition-title">
				<i class="icon {{ $icon }}{{ $type }}"></i>{{ T $type }}<i class="details-icon {{ $iconDetails }}"></i>
	{{- else }}
		{{- $type := "question" -}}
		{{- $icon := "fas fa-exclamation-triangle fa-fw" -}}
		<div class="details admonition {{ $type }} open">
			<div class="details-summary admonition-title">
				<i class="icon {{ $icon }}{{ $type }}"></i>{{ T $type }}<i class="details-icon {{ $iconDetails }}"></i>
    {{- end }}
		    </div>
			<div class="details-content">
				<div class="admonition-content">
					{{ T "outdatedInfoWarningBefore" -}}
					<span class="timeago" datetime="{{ dateFormat "2006-01-02T15:04:05" $updateTime }}" title="{{ dateFormat "January 2, 2006" $updateTime }}">
					{{- dateFormat "January 2, 2006" $updateTime -}}
					</span>{{ T "outdatedInfoWarningAfter" -}}
				</div>
			</div>
		 </div>
  {{- end -}}
{{- end -}}
```

### 修改`single.html`文件

把`your_site/themes/LoveIt/layouts/posts/single.html`复制到`your_site/layouts/posts/`路径下，然后打开`your_site/layouts/posts/single.html`找到下面内容：

```html
{{- /* Content */ -}}
<div class="content" id="content">
    {{- dict "Content" .Content "Ruby" $params.ruby "Fraction" $params.fraction "Fontawesome" $params.fontawesome | partial "function/content.html" | safeHTML -}}
</div>
```

修改为：

```html
<div class="content" id="content">
    {{- dict "Content" .Content "Ruby" $params.ruby "Fraction" $params.fraction "Fontawesome" $params.fontawesome | partial "function/content.html" | safeHTML -}}
	
	{{- /* Outdated Info Warning */ -}}
	{{- partial "single/outdated-info-warning.html" . -}}
</div>
```

## 双击生成颜表情

在`your_site\static\js\custom.js`文件中，添加如下内容：

```js
/* 返回随机颜色 */
function randomColor() {
	return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 点击生成字符特效 */
var a_idx = 0;
var a_click = 1;
  /* 生成的字符内容 */
var a = new Array("乀(ˉεˉ乀)","𓂃𓂃𓂃𓊝𓄹𓄺𓂃𓂃𓂃","˘ᗜ˘","(╥╯^╰╥)","╰(*´︶`*)╯","✧(◍˃̶ᗜ˂̶◍)✩","｡◕‿◕｡",
"(๑ت๑)","(๑❛ᴗ❛๑)","w(ﾟДﾟ)w","Σ( ° △ °|||)︴","(⊙ˍ⊙)","(๑ˉ∀ˉ๑)","<(￣︶￣)>","╰(*°▽°*)╯","✿",
"(,,•́ . •̀,,)","վ'ᴗ' ի","(◔◡◔)","⚝","₍ᐢ. ֑ .ᐢ₎");
jQuery(document).ready(function($) {
    $("body").click(function(e) {
		/* 点击频率，点击几次就换文字 */
		var frequency = 2;
		if (a_click % frequency === 0) {
			
			var $i = $("<span/>").text(a[a_idx]);
			a_idx = (a_idx + 1) % a.length;
			var x = e.pageX,
			y = e.pageY;
			$i.css({
				"z-index": 9999,
				"top": y - 20,
				"left": x,
				"position": "absolute",
				"font-weight": "bold",
				"color": randomColor(),
				"-webkit-user-select": "none",
				"-moz-user-select": "none",
				"-ms-user-select": "none",
				"user-select": "none"
			});
			$("body").append($i);
			$i.animate({
				"top": y - 180,
				"opacity": 0
			},
			1500,
			function() {
				$i.remove();
			});
			
		}
	a_click ++;
		
    });
});
```

## 离开进入网站的标题变化

可以发现，若离开我的网站去其他页面，那么我的网站的标题和图标会发生变化。若再次回到我的网站，则标题和图标会再次发生变化。想要达到这个效果，只需在`your_site\static\js\custom.js`文件中添加如下内容：

```js
/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
	var OriginTitile = document.title;
	var titleTime;
	document.addEventListener('visibilitychange', function() {
	  if(document.hidden) {
		$('[rel="icon"]').attr('href', "/failure.ico");
		$('[rel="shortcut icon"]').attr('href', "/failure.ico");
		document.title = '哦~该回码头了';
		clearTimeout(titleTime);
	  } else {
		$('[rel="icon"]').attr('href', "/favicon.ico");
		$('[rel="shortcut icon"]').attr('href', "/favicon.ico");
		document.title = '哈~又整到薯条了';
		titleTime = setTimeout(function() {
		  document.title = OriginTitile;
		}, 2000);
	  }
	});
  }
```

其中文字部分改为自己喜欢的就可以了，而至于网站图标文件`favicon.ico`和`failure.ico`如果不清楚，具体可见我之前的文章 [Hugo的Lovelt主题美化（一）](https://Wangty654.github.io/posts/text23/)。

这里只简单的说一下：一般而言，我们会把网站图标放到`your_site\static\`路径下，而在当前的目的下，我们可以只调用48*48的`.ico`文件作为显示图标。此外，`favicon.ico`一般是我们原来的网站图标，所以我们只需要在创建一个`failure.ico`作为离开页面时显示的图标即可。

