# 转义StringEscapeUtils的使用


**StringEscapeUtils类可以对html js xml  sql 等代码进行[转义](https://so.csdn.net/so/search?q=转义&spm=1001.2101.3001.7020)来防止SQL注入及XSS注入**

添加依赖

```java
<dependency>
    <groupId>commons-lang</groupId>
    <artifactId>commons-lang</artifactId>
    <version>2.6</version>
</dependency>
```

##### 1.html脚本

- escapeHtml转义html脚本
- unescapeHtml反转义html脚本

```java
System.out.println(StringEscapeUtils.escapeHtml("<a>abc</a>"));
System.out.println(StringEscapeUtils.unescapeHtml("&lt;a&gt;abc&lt;/a&gt;"));
```

输出

```
&lt;a&gt;abc&lt;/a&gt;
<a>abc</a>
```

##### 2.js脚本

- escapeJavaScript转义js脚本
- unescapeJavaScript反转义js脚本

```java
System.out.println(StringEscapeUtils.escapeJavaScript("<script>alert('123')<script>"));
System.out.println(StringEscapeUtils.unescapeJavaScript("<script>alert(\'123\')<script>"));
```

输出

```html
<script>alert(\'123\')<script>
<script>alert('123')<script>
```

##### 3.字符串Unicode　

- escapeJava转义成Unicode编码
- unescapeJava反转义成Unicode编码

```java
System.out.println(StringEscapeUtils.escapeJava("你好"));
System.out.println(StringEscapeUtils.unescapeJava("\u4F60\u597D"));
```

输出

```
\u4F60\u597D
你好
```

##### 4.[xml](https://so.csdn.net/so/search?q=xml&spm=1001.2101.3001.7020)

- escapeXML转义XML
- unescapeXML反转义XML

```java
System.out.println(StringEscapeUtils.escapeXml("<name>贝贝</name>"));
System.out.println(StringEscapeUtils.unescapeXml("&lt;name&gt;&#36125;&#36125;&lt;/name&gt;"));
```

输出

```html
&lt;name&gt;&#36125;&#36125;&lt;/name&gt;
<name>贝贝</name>
```

##### 5.sql

- escapeSql sql转义，防止sql注入攻击

转义后

```java
StringBuffer sql = new StringBuffer("select * from users where 1=1 ");
String keyWord="aaa' or '1=1";
if(!keyWord.isEmpty()){
      sql.append(" and username like '%" + StringEscapeUtils.escapeSql(keyWord) + "%'");
}
System.out.println(sql);
```

输出

```sql
select * from users where 1=1  and username like '%aaa'' or ''1=1%'
```

不进行转义的

```sql
select * from users where 1=1  and username like '%aaa' or '1=1%' 
```


