# Java中int与String互相转换方法


String转为int，使用parseInt，或者valueOf.intValue

```java
int i = Integer.parseInt（string）;
int i = Integer.valueOf(s).intValue();
```

int转为String，使用valueOf，或者toString，或者""空字符串相加

```java
String s = String.valueOf(i);
String s = Integer.toString(i);
String s = "" + i;
```


