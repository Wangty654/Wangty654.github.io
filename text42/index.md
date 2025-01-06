# 【Java】Java语言进阶（一）


## API概述

在Java中，API（应用程序编程接口）指的是一些预定义的类和接口，这些类和接口可以被开发人员用来构建应用程序。Java的API为程序员提供了丰富的库和工具，使得开发变得更加高效和简单。以下是Java API的一些关键点：

### 1. **Java标准库**

Java的标准API涵盖了多个包，最重要的几个包括：

- **`java.lang`**：自动导入的核心类库，例如基本数据类型、字符串处理和线程等。
- **`java.util`**：包含集合框架、日期和时间处理、随机数生成等。
- **`java.io`**：用于输入和输出的类，包括文件读取和写入。
- **`java.nio`**：提供更高效的I/O操作，尤其是面向字节和字符的处理。

### 2. **Java API文档**

Java API通常通过官方文档进行描述，开发者可以通过在线文档了解类、接口及其方法的使用说明。例如，Java SE的文档可以通过Oracle的官方网站访问。

### 3. **第三方API**

除了Java标准API外，开发者还可以使用各种开源和商业的第三方库和API，例如：

- **Apache Commons**：提供了复用的功能库。
- **Spring Framework**：一个流行的企业级应用开发框架。
- **Hibernate**：用于对象关系映射（ORM）的框架。

### 4. **使用API的好处**

- **提高生产力**：通过复用现有的代码和库，减少重复开发。
- **可靠性**：经过测试的API通常更为稳定，并能降低错误发生的概率。
- **文档和支持**：大多数API都有良好的文档和社区支持，帮助开发者快速上手。

<br/>

## Object类

在Java中，`Object`类是**所有类的根类**，意味着**所有Java类都是直接或间接继承**自`Object`类。它提供了一组基本的方法，这些方法可以被所有Java对象使用。了解`Object`类是理解Java面向对象编程的关键，因为它定义了一些通用行为。

### `Object`类的重要特性

1. **所有类的基类**：
   - 任何类都可以被视为是`Object`类的子类，除非显式地继承自其他类（在这种情况下，`Object`类仍然是隐式的父类）。
2. **常用方法**：
   - `equals(Object obj)`：比较两个对象的值是否相等。默认实现比较的是对象的引用，但可以被重写以基于内容比较。
   - `hashCode()`：返回对象的哈希码，通常与`equals`方法一起使用。这个方法也可以重写。
   - `toString()`：返回对象的字符串表示形式，默认返回类名加对象的哈希码。可以重写以提供更有意义的信息。
   - `getClass()`：返回对象的运行时类。
   - `clone()`：创建并返回当前对象的一个副本。需要实现`Cloneable`接口才能使用。
   - `finalize()`：在垃圾回收前被调用，可以用于清理资源，但不应该依赖于它。

### 示例代码

以下是一个简单的示例，演示如何重写`toString()`和`equals()`方法：

```java
class Person {  
    private String name;  
    private int age;  

    public Person(String name, int age) {  
        this.name = name;  
        this.age = age;  
    }  

    //返回该对象的字符串表示，结果为一个"简单的文字信息表达式"
    @Override  
    public String toString() {  
        return "Person{name='" + name + "', age=" + age + "}";  
    }  

    //指示其他某个对象是否与此对象"相等"，和==比较相同。当数据类型不同时，用equals
    @Override  
    public boolean equals(Object obj) {  
        if (this == obj) return true; // 引用相等  
        if (obj == null || getClass() != obj.getClass()) return false; // 类型检查  
        Person person = (Person) obj; // 强制类型转换  
        return age == person.age && name.equals(person.name); // 字段比较  
    }  
   
    //根据不同对象的内部地址值[实际地址值]转化成一个整数[哈希码值]
    @Override  
    public int hashCode() {  
        return Objects.hash(name, age); // 哈希码生成  
    }  
}  

public class Main {  
    public static void main(String[] args) {  
        Person person1 = new Person("Alice", 30);  
        Person person2 = new Person("Alice", 30);  
        
        System.out.println(person1.toString()); // 输出：Person{name='Alice', age=30}  
        System.out.println(person1.equals(person2)); // 输出：true  
    }  
}  
```

<br/>

## 垃圾回收器

在Java中，垃圾回收器（Garbage Collector，GC）是自动管理内存的机制，主要用于自动识别和回收不再使用的对象，以防止内存泄漏并优化应用程序的性能。Java的垃圾回收机制帮助开发者无需手动释放内存，从而降低了错误的风险，提高了开发效率。

### 垃圾回收器的工作原理

1. **对象的创建与分配**：
   当Java程序创建一个对象时，内存从堆中分配给这个对象。开发人员不需要明确释放这个内存，GC会在适当的时候自动进行。
2. **对象的可达性分析**：
   垃圾回收器通过可达性分析来判断对象是否仍被引用。根对象（如栈中的局部变量、静态变量等）是起始点，GC会追踪这些根对象，判断哪些对象是可达的（即仍在使用中的）和不可达的（即可以被回收的）。
3. **回收策略**：
   通过标记-清除、复制算法或其他策略，GC会清理那些不可达的对象，回收它们占用的内存空间。

### 垃圾回收的主要算法

1. **标记-清除（Mark-and-Sweep）**：
   - 首先标记所有可达对象。
   - 然后清理未标记的对象，释放它们的内存。
2. **复制（Copying）**：
   - 将存活的对象复制到一个新空间，清除旧空间。
   - 避免了内存碎片。
3. **分代收集（Generational GC）**：
   - 大多数Java垃圾回收器采用分代策略，将对象分为年轻代（Young Generation）和老年代（Old Generation）。
   - 年轻代中的对象通常短命，而老年代中的对象更长寿，GC可频繁回收年轻代，减少老年代的回收频率。

### Java中的垃圾回收器

Java提供了多种垃圾回收器，以下是几种常见的：

1. **串行垃圾回收器（Serial GC）**：
   - 简单易用，适合单线程环境，在老年代的处理上较慢。
2. **并行垃圾回收器（Parallel GC）**：
   - 针对多核处理器，使用多线程并行处理，适用于需要最高吞吐量的应用。
3. **并发标记清除（Concurrent Mark-Sweep, CMS）**：
   - 旨在减少垃圾回收的停顿时间，通过并发执行标记和清除过程来保持应用的响应性。
4. **G1垃圾回收器（Garbage-First, G1 GC）**：
   - 综合了多个算法，目前是默认的高性能垃圾回收器，适合大堆内存和多CPU系统。G1 GC使用分区（Region）处理内存，使得大对象可以有效地被收集。

### 如何调整垃圾回收

Java允许开发者通过JVM参数来调整垃圾回收的行为。例如：

- `-XX:+UseG1GC`：启用G1垃圾回收器。
- `-Xmx512m`：设置最大堆内存为512MB。
- `-Xms256m`：设置初始堆内存为256MB。

<br/>

## Scanner类

在Java中，`Scanner`类是一个非常有用的工具，主要用于获取用户输入和读取数据。它属于`java.util`包，可以从多种输入源读取文本，包括控制台输入、文件、字符串等。通过`Scanner`类，开发者可以以简单的方式处理用户输入。

### Scanner类的特点

1. **多种输入来源**：
   - `Scanner`可以从控制台、文件、字符串、输入流等读取数据。
2. **简易的数据解析**：
   - 提供了一系列方法，可以方便地解析基本数据类型（如`int`、`double`、`String`等）。
3. **支持正则表达式**：
   - 可以使用正则表达式来定义分隔符，对输入进行更加灵活的处理。

### 常用构造方法

```java
Scanner scanner = new Scanner(System.in); // 从控制台读取输入  
```

### 常用方法

- `next()`: 读取下一个完整的单词（以空格为分隔符）。
- `nextLine()`: 读取当前行的所有输入，包括空格。
- `nextInt()`: 读取下一个整数。
- `nextDouble()`: 读取下一个双精度浮点数。
- `hasNext()`: 返回一个布尔值，指示是否还有输入。
- `close()`: 关闭Scanner，释放相关资源。

### 示例代码

以下是一个简单的示例，演示如何使用`Scanner`类从控制台读取用户输入：

```java
import java.util.Scanner;  

public class ScannerExample {  
    public static void main(String[] args) {  
        Scanner scanner = new Scanner(System.in);  

        System.out.print("请输入您的名字：");  
        String name = scanner.nextLine(); // 读取整行输入  
        System.out.print("请输入您的年龄：");  
        int age = scanner.nextInt(); // 读取整数  

        System.out.println("你好，" + name + "！您今年 " + age + " 岁。");  
        
        scanner.close(); // 关闭scanner避免资源浪费  
    }  
}  
```

### 注意事项

1. **资源管理**：
   - 使用完`Scanner`后应调用`close()`方法关闭，以释放相关资源。特别是在读取文件时，更应注意这一点。
2. **输入异常处理**：
   - 读取整数或浮点数时，如果输入不符合预期，`Scanner`会抛出`InputMismatchException`。建议在读取输入时进行异常处理，以避免程序崩溃。
3. **获取字符串包含空格的输入**：
   - 使用`nextLine()`而不是`next()`，因为`next()`读取到第一个空格就会停止。

<br/>

## String类

在Java中，`String`类是用于表示**字符串的主要类**，属于`java.lang`包。`String`在Java中是一个不可变（immutable）对象，这意味着一旦创建，字符串的内容就不能被改变。由于其广泛应用和重要性，理解`String`类的特性和方法对于Java开发者至关重要。

String的`s`，大写为类，小写为数据类型。

### 1. 字符串的创建

Java中可以通过以下几种方式创建`String`对象：

- **字面量方式**：

  ```java
  String str1 = "Hello, World!";  
  ```

- **使用构造函数**：

  ```java
  String str2 = new String("Hello, World!");  
  ```

尽管可以用构造函数创建字符串，推荐使用字面量方式，因为Java会在字符串池中重用相同内容的字符串，以节省内存。

### 2. 不可变性

`String`对象一旦创建，就无法更改其内容。如果对字符串进行修改，例如连接或替换，会生成一个新的字符串对象。例如：

```java
String str = "Hello";  
str = str + " World"; // 创建一个新字符串对象  HelloWorld
//字符串直接赋值的方式是先到字符串常量池里去找，如果有就直接返回，如果没有就创建并返回
```

字符串变量相加，例：`s1+s2` ，先开空间，再相加

字符串常量相加，例：`"Hello" + "World"` ，先相加，再常量池找，有就返回，无就创建返回

### 3. 常用方法

`String`类提供了丰富的方法，以下是一些常用的方法：

- `length()`：返回字符串的长度。
- `charAt(int index)`：返回指定位置的字符。
- `substring(int beginIndex, int endIndex)`：返回字符串的子串（不包含`endIndex`的字符）。
- `indexOf(String str)`：返回指定子字符串第一次出现的位置。
- `toUpperCase()`：将字符串转换为大写。
- `toLowerCase()`：将字符串转换为小写。
- `trim()`：去除字符串两端的空格。
- `equals(Object obj)`：比较两个字符串的内容是否相等。
- `equalsIgnoreCase(String anotherString)`：忽略大小写比较字符串。
- `replace(char oldChar, char newChar)`：替换字符串中的字符。
- `split(String regex)`：根据给定的正则表达式分割字符串。
- `contains(String str)`：判断大写字符串中是否包含小字符串。
- `srartsWith(String str)`：判断字符串是否以某个指定的字符串开头。
- `endsWith(String str)`：判断字符串是否以某个指定的字符串结尾。
- `isEmpty()`：判断字符串是否为空。
  - 字符串内容为空（对象存在，内容为空）`String s = " "`
  - 字符串对象为空（对象不存在，空引用）`String s = null`

### 4. 示例代码

以下是一个简单的示例，演示了`String`类的常用方法：

```java
public class StringExample {  
    public static void main(String[] args) {  
        String str = "  Hello, World!  ";  

        // 字符串长度  
        System.out.println("长度: " + str.length());  

        // 提取子串  
        String subStr = str.substring(2, 7);  
        System.out.println("子串: " + subStr);  

        // 字符替换  
        String replacedStr = str.replace("World", "Java");  
        System.out.println("替换后的字符串: " + replacedStr);  

        // 字符串分割  
        String[] parts = str.trim().split(", ");  
        System.out.println("分割后的部分:");  
        for (String part : parts) {  
            System.out.println(part);  
        }  
        
        // Comparing strings  
        String str2 = "  hello, world!  ";  
        boolean isEqual = str.trim().equalsIgnoreCase(str2.trim());  
        System.out.println("忽略大小写比较: " + isEqual);  
    }  
}  
```

### 5. 字符串连接

频繁的字符串连接可能会导致性能问题，因为每次连接都会创建新的字符串对象。为了解决这个问题，可以使用`StringBuilder`或`StringBuffer`，如：

```java
StringBuilder sb = new StringBuilder();  
sb.append("Hello");  
sb.append(" World");  
String result = sb.toString(); // 转换为String  
```

#### 1.java中的StringBuffer类

在Java中，`StringBuffer`是一个**可变的字符序列类**，属于`java.lang`包。与`String`类不同，`StringBuffer`对象的内容可以在创建后进行修改，而不需要创建新的对象。这使得`StringBuffer`非常适合用于需要频繁修改字符串内容的情况，例如在拼接、插入或删除字符时。

#### 2. StringBuffer的特点

- **可变性**：`StringBuffer`对象的内容可以更改，因此通过修改一个`StringBuffer`对象不会创建新的对象。
- **线程安全**：`StringBuffer`的方法是同步的，意味着它是线程安全的，适合在多线程环境中使用。
- **性能较好**：在进行大量的字符串操作（如拼接）时，`StringBuffer`通常比`String`更高效，因为它避免了字符串的重复创建。

#### 3. 常用构造方法

- **默认构造方法**：创建一个长度为16的空`StringBuffer`。

  ```java
  StringBuffer sb = new StringBuffer();  
  ```

- **指定初始容量**：创建一个空的`StringBuffer`，并指定初始容量。

  ```java
  StringBuffer sb = new StringBuffer(50); // 初始容量为50  
  ```

- **使用字符串初始化**：用指定字符串的内容初始化`StringBuffer`。

  ```java
  StringBuffer sb = new StringBuffer("Hello");  
  ```

#### 4. 常用方法

`StringBuffer`类提供了很多方法来操作字符序列，以下是一些常用的方法：

- `append(String str)`：在此`StringBuffer`的末尾添加字符串。
- `insert(int offset, String str)`：在指定位置插入字符串。
- `delete(int start, int end)`：删除从`start`到`end`的字符。
- `replace(int start, int end, String str)`：替换从`start`到`end`的字符为给定字符串。
- `reverse()`：反转字符序列。
- `toString()`：将`StringBuffer`转换为`String`。
- `capacity()`：返回当前容量。
- `length()`：返回字符序列的长度。

#### 5. 示例代码

以下是一个使用`StringBuffer`的简单示例，展示其基本操作：

```java
public class StringBufferExample {  
    public static void main(String[] args) {  
        StringBuffer sb = new StringBuffer("Hello");  

        // 追加字符串  
        sb.append(" World");  
        System.out.println("追加后的字符串: " + sb); // 输出: Hello World  

        // 插入字符串  
        sb.insert(5, ",");  
        System.out.println("插入后的字符串: " + sb); // 输出: Hello, World  

        // 删除字符  
        sb.delete(5, 6);  
        System.out.println("删除后的字符串: " + sb); // 输出: Hello World  

        // 替换字符  
        sb.replace(6, 11, "Java");  
        System.out.println("替换后的字符串: " + sb); // 输出: Hello Java  

        // 反转字符串  
        sb.reverse();  
        System.out.println("反转后的字符串: " + sb); // 输出: avaJ olleH  

        // 转换为String  
        String result = sb.toString();  
        System.out.println("转为String: " + result); // 输出: avaJ olleH  
    }  
}  
```

#### 5. 线程安全

尽管`StringBuffer`是线程安全的，但在某些情况下，使用`StringBuilder`（不安全但性能更高）会更合适，尤其是在单线程环境中。`StringBuilder`的使用方法和`StringBuffer`类似，但其方法没有同步，因此在多线程情况下使用时需要小心。

### 6.字符串获取

- `int length()`：获取字符串的长度
- `char charAt(int index)`：获取指定索引的位置上的字符
- `int indexOf(int ch)`：返回指定字符在此字符串中第一次出现出的索引【可以给char类型的实参】
- `int indexOf(String str)`：字符串（返回索引）
- `int indexOf(int ch,int fromIndex)`：从指定位置（字符，返回索引）
- `int indexOf(String str,int fromIndex)`：从指定位置（字符，返回索引）
- `String subString(int start)`：从指定位置截取字符串（包括start位置的字符）
- `String subString(int start,int end)`：从指定位置到指定位置（包左不包右）

### 7.字符串转换

- `byte[] getBytes()`：把字符串转换为字节数组
- `char[] toCharArray()`：把字符串转换为字符数组
- `static String valueOf(char[] chs)`：把字符数组[或任意类型数据]换为字符串
- `static String valueOf(int i)`：把int类型的数据转成字符串
- `String toLowerCase()`：把字符串转成小写（原字符串不发生改变，转换时生成新的）
- `String toUpperCase()`：把字符串转成大写
- `String concat(String str)`：把字符串拼接

### 8.字符串替换

- `String replace(char old,char new)`
- `String replace(String old,String new)`
- `String trim()`：去除字符串两端的空格

### 9.字符串判断

```java
String s1 = new String("Hello"); 
String s2 = "Hello"; 

s1 == s2      //false
s1.equals(s2) //true    
```

`==` 比较的是引用类型的地址值是否相同。`equals`  默认比较的也是引用类型的地址值。

`String类`重写了`equals()`方法，以便比较字符串的内容而非其引用。

#### 1. `String`类的`equals()`方法实现

在Java中，`String`类重写了`equals()`方法，以便比较字符串的内容而非其引用。这意味着两个字符串对象，如果它们的字符序列相同，使用`equals()`方法比较时会返回`true`。下面是`String`类中`equals()`方法的实现逻辑以及一些常见的使用示例。

`String`类的`equals()`方法源码的核心逻辑如下：

- 首先，检查两个引用是否指向同一个对象（如果是，则返回`true`）。
- 然后，检查传递的对象是否为`null`，或者它是否与当前对象的类型不同。
- 如果上述检查都通过，最后会逐个比较字符串中的字符，确保内容相同。

以下是`String`类重写`equals()`方法的简化示例：

```java
@Override  
public boolean equals(Object obj) {  
    if (this == obj) return true; // 引用相等  
    if (obj == null || getClass() != obj.getClass()) return false; // 类型检查  
    String other = (String) obj; // 强制类型转换  
    return this.value.equals(other.value); // 比较内容  
}  
```

#### 2. 使用`String`类的`equals()`方法示例

```java
public class StringEqualsExample {  
    public static void main(String[] args) {  
        String str1 = new String("Hello");  
        String str2 = new String("Hello");  
        String str3 = "Hello"; // 字符串常量池  
        String str4 = "Hello";  

        // 使用equals()比较内容  
        System.out.println(str1.equals(str2)); // 输出：true (内容相同)  
        System.out.println(str1.equals(str3)); // 输出：true (内容相同)  
        System.out.println(str3.equals(str4)); // 输出：true (内容相同)  

        // 使用==比较引用  
        System.out.println(str1 == str2); // 输出：false (不同对象)  
        System.out.println(str3 == str4); // 输出：true (相同对象，需要注意字符串池)  
    }  
}  
```

#### 3. 注意事项

1. **反身性**：任何非空引用调用`equals`应该返回`true`。
2. **对称性**：如果`x.equals(y)`返回`true`，那么`y.equals(x)`也应该返回`true`。
3. **传递性**：如果`x.equals(y)`和`y.equals(z)`都返回`true`，则`x.equals(z)`也应返回`true`。
4. **一致性**：如果没有改变对象的内容，连续多次调用`equals`应该始终返回相同的结果。
5. **对于任何非空引用`x`，`x.equals(null)`应该返回`false`**。

<br/>

## equals与==

在Java中，`equals`方法用于**比较两个对象的内容**是否相同，而不是它们的地址值（引用）。这意味着，如果你使用`equals`方法比较两个不同的对象，但它们的内容相同，则返回值为`true`。这与`==`运算符不同，后者**比较的是对象的引用**，即它们在内存中的地址。

### 1. `equals`方法的作用

- **默认实现**：`Object`类提供了`equals`方法的**默认**实现，该实现**使用`==`运算符**来比较对象的地址。因此，除非重写，否则`equals`方法将比较引用。
- **重写`equals`方法**：通常，开发者会在其自定义类中重写`equals`方法，以便根据类的字段比较对象的实际内容。

### 2. 示例

下面是一个简单的例子，展示了`equals`和`==`的区别：

```java
class Person {  
    String name;  
    int age;  

    public Person(String name, int age) {  
        this.name = name;  
        this.age = age;  
    }  

    @Override  
    public boolean equals(Object obj) {  
        if (this == obj) return true; // 引用相等  
        if (obj == null || getClass() != obj.getClass()) return false; // 类型检查  
        Person person = (Person) obj; // 强制类型转换  
        return age == person.age && name.equals(person.name); // 内容比较  
    }  
    
    @Override  
    public int hashCode() {  
        return Objects.hash(name, age); // 生成哈希码  
    }  
}  

public class EqualsExample {  
    public static void main(String[] args) {  
        Person person1 = new Person("Alice", 30);  
        Person person2 = new Person("Alice", 30);  
        
        // 使用==比较引用  
        System.out.println(person1 == person2); // 输出：false  
        // 使用equals比较内容  
        System.out.println(person1.equals(person2)); // 输出：true  
    }  
}  
```

### 3. 关键点总结

- **`==`运算符**：用于检查两个对象引用是否指向同一块内存（即地址值）。
- **`equals`方法**：用于检查两个对象的值是否相等，具体比较的内容取决于类中如何重写`equals`方法。
- 重写`equals`时的注意事项：
  - 确保反身性：对于任意非空引用`x`，`x.equals(x)`应该返回`true`。
  - 对称性：如果`x.equals(y)`返回`true`，那么`y.equals(x)`也应该返回`true`。
  - 传递性：如果`x.equals(y)`和`y.equals(z)`都返回`true`，则`x.equals(z)`也应该返回`true`。
  - 一致性：多次调用`x.equals(y)`应该始终返回相同的结果，前提是对象未修改。
  - 对任何非空引用`x`，`x.equals(null)`应该返回`false`。

<br/>


