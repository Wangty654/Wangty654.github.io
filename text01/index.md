# 【Js】JS 中Object和String互转方法




利用原生[JSON对象](https://so.csdn.net/so/search?q=JSON对象&spm=1001.2101.3001.7020)，将对象转为字符串，使用 JSON.stringify（对象名）

```js
var jsObj = {};
jsObj.testArray = [1,2,3,4,5];
jsObj.name = 'CSS3';
jsObj.date = '8 May, 2011';
var str = JSON.stringify(jsObj);
alert(str);
```

从[JSON字符串](https://so.csdn.net/so/search?q=JSON字符串&spm=1001.2101.3001.7020)转为对象 ，使用JSON.parse（字符串名）

```js
var jsObj = {};
jsObj.testArray = [1,2,3,4,5];
jsObj.name = 'CSS3';
jsObj.date = '8 May, 2011';
var str = JSON.stringify(jsObj);
var str1 = JSON.parse(str);
alert(str1);
```

