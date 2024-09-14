# 【Js】JS控制元素的显示和隐藏


利用来JS控制页面控件显示和隐藏有两种方法，两种方法分别利用HTML的style中的两个属性，两种方法的不同之处在于控件隐藏后是否还在页面上占空位。

### 方法一

```js
document.getElementById("EleId").style.visibility="hidden";
document.getElementById("EleId").style.visibility="visible";
```

利用上述方法实现隐藏后，页面的位置还被控件占用，显示空白。

### 方法二

```js
document.getElementById("EleId").style.display="none";
document.getElementById("EleId").style.display="inline";
```

利用上述方法实现隐藏后，页面的位置不被占用。

### 方法三

显示元素进行隐藏

```js
document.getElementById("ID名").hidden=ture;
```

根据页面元素ID名获得页面元素值，进而将其属性设置成隐藏。

将隐藏元素进行显示对于已经隐藏的页面元素如果要将其再次显示，不是将

```js
document.getElementById("ID名").hidden=false;
```

而是将其隐藏属性删除

```js
document.getElementById("ID名").removeAttribute("hidden");
```


