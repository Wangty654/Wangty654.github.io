# 




# 【Spring-boot】启动报错注入bean失败Mapper找不到

**报错信息：**

A component required a bean of type ‘com.*.*.Mapper‘ that could not be found.

Consider defining a bean of type 'com.yinhai.msg.localResource.msgtpl.mapper

**检查配置：**

pom文件（项目总）

```xml
<modules>
    .....
        <module>msg-center</module>
    .....
</modules>
```

pom文件（项目启动类）

```xml
 <dependencies>
     ....
        <dependency>
            <groupId>com.yinhai</groupId>
            <artifactId>msg-center</artifactId>
            <version>0.0.1-SNAPSHOT</version>
        </dependency>
     ....
</dependencies>
```

pom文件（所在包）

```xml
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>com.yinhai</groupId>
        <artifactId>yhch-base-backend</artifactId>
        <version>0.0.1-SNAPSHOT</version>
    </parent>

    <artifactId>msg-center</artifactId>

    <properties>
        <maven.compiler.source>8</maven.compiler.source>
        <maven.compiler.target>8</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>
    <dependencies>
        <dependency>
            <groupId>com.yinhai</groupId>
            <artifactId>common</artifactId>
            <version>0.0.1-SNAPSHOT</version>
        </dependency>
    </dependencies>

</project>
```

application-datasource.yml （启动类配置文件）

```yml
ta404:
  datasource:
    datasource-list: *
    type: *
    druid:
      ta404ds:
        datasource:
          url: jdbc:oracle:*
          username: *
          password: *
          # 初始化连接数
          initial-size: 5
          # 连接池最大连接数量
          max-active: 20
          # 获取链接超时时间 （毫秒）
          max-wait: 60000
        mybatis:
          mapper-locations:
           # mapper映射文件路径
            - classpath*:mapper/msg-center/**.xml
          base-packages:
          # 包路径
            - com.yinhai.msg.**.mapper
          mybatis-plus:
            db-type: oracle
```


