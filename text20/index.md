# 【Vue前端框架】尚硅谷Vue2.0+Vue3.0全套教程




### 模版语法

<img src="./images/1d7989ded2ceeba688a6d14734d40e8.png" alt="1d7989ded2ceeba688a6d14734d40e8" style="zoom:50%;" />

vue示例和容器root，11对应

el：加#指定容器id，不加#指定容器class

双括号中支持的内容为：{{ js表达式}}

### 数据绑定

v-bind：

**单向数据绑定** ：data数据里的值发生变化，组件的值就发生变化。

v-bind:value="id" 

// data:{ name:"123"} 

但是组件上的值发生变化，data里的值不会发生变化

**双向数据绑定** ：data数据里的值-同-组件的值，同步发生变化。

v-model:value="id" 

// data:{ name:"123"} 

注意：v-model**只能用在输入值表单元素上**

### **$mount.挂载**

<img src="./images/bf3b997bbe8df22d841d507d600f186.png" alt="bf3b997bbe8df22d841d507d600f186" style="zoom:50%;" />

<img src="./images/801c33f2fc8fd9b47a021e2c19dd901.png" alt="801c33f2fc8fd9b47a021e2c19dd901" style="zoom:50%;" />

箭头函数，没有this，data()=>{ }中调用的是实例不是vue是windows

### MVVM模型

### 数据代理

<img src="./images/0d3001909f1217d2285a6f6c2b24bae.png" alt="0d3001909f1217d2285a6f6c2b24bae" style="zoom:50%;" />

<img src="./images/0d7df09f217a940188a8434eba2f14d.png" alt="0d7df09f217a940188a8434eba2f14d" style="zoom:50%;" />

<img src="./images/239a185fbd8aebeb398dbff1ff3db8e.png" alt="239a185fbd8aebeb398dbff1ff3db8e" style="zoom:50%;" />

v-on:click = ""  等价于 @click=""

click默认方法里面的传参，为点击事件event

event.target.innerText指获取当前点击元素的文本内容

:直接写是 v-bind 的简写

@直接写是 v-on 的简写

<img src="./images/b5d99c482b0444963662d049347506f.png" alt="b5d99c482b0444963662d049347506f" style="zoom:50%;" />

事件修饰符prevent，用于操作点击默认的操作

@keyup 键盘事件

<img src="./images/088fc780a7a119744f94ec4891da27c.png" alt="088fc780a7a119744f94ec4891da27c" style="zoom:50%;" />

<img src="./images/26b28bf0bce922454d065142519072a.png" alt="26b28bf0bce922454d065142519072a" style="zoom:50%;" />

### computed计算属性

<img src="./images/c8364d51ed7c2fe31ae0aec4529c472.png" alt="c8364d51ed7c2fe31ae0aec4529c472" style="zoom:50%;" />

<img src="./images/7f7c7b17f60e21bb030dc00fee9688b.png" alt="7f7c7b17f60e21bb030dc00fee9688b" style="zoom:50%;" />

<img src="./images/06858126db45ef681202201f2cfaea3.png" alt="06858126db45ef681202201f2cfaea3" style="zoom:50%;" />

<img src="./images/9afe647ae6b1124f8f6db7d8ec6eb46.png" alt="9afe647ae6b1124f8f6db7d8ec6eb46" style="zoom:50%;" />

只有读取的时候，简写get为计算属性名加（）{ get方法 }

<img src="./images/146c68a7a5e4ef769f5c09122ae4f76.png" alt="146c68a7a5e4ef769f5c09122ae4f76" style="zoom:50%;" />

<img src="./images/309b0791e739f9426910799d28cff61.png" alt="309b0791e739f9426910799d28cff61" style="zoom:50%;" />

<img src="./images/0c4e4cae618b63b78233e40943fe0d2.png" alt="0c4e4cae618b63b78233e40943fe0d2" style="zoom:50%;" />

### 深度监视

<img src="./images/de5ea77aa17810a42049f57da0f900c.png" alt="de5ea77aa17810a42049f57da0f900c" style="zoom:50%;" />

加deep

<img src="./images/ead0c703735822144e8715a65273485.png" alt="ead0c703735822144e8715a65273485" style="zoom:50%;" />

<img src="./images/3a2ca70b4678953d31f14dfef4dfc24.png" alt="3a2ca70b4678953d31f14dfef4dfc24" style="zoom:50%;" />

<img src="./images/bcf3d628e49774b9ec6612482d1cfe4.png" alt="bcf3d628e49774b9ec6612482d1cfe4" style="zoom:50%;" />

computed计算属性不能实现异步返回，watch监听属性可以

<img src="./images/82a263c5524b93c3d73cade6c1ccdc3.png" alt="82a263c5524b93c3d73cade6c1ccdc3" style="zoom:50%;" />

条件渲染 v-show

<img src="./images/10d321f95c7212d9b468f2d9709cbaa.png" alt="10d321f95c7212d9b468f2d9709cbaa" style="zoom:50%;" />

<img src="./images/6326430e4ae405cf58d0d77014538a0.png" alt="6326430e4ae405cf58d0d77014538a0" style="zoom:50%;" />

<img src="./images/e4d9ac5a0ac670bee3c5d61a629709c.png" alt="e4d9ac5a0ac670bee3c5d61a629709c" style="zoom:50%;" />

<img src="./images/22da4cbe1c6654ad36bc48aaee52781.png" alt="22da4cbe1c6654ad36bc48aaee52781" style="zoom:50%;" />

<img src="./images/eaf202d29ed55bb2b101638fc90063e.png" alt="eaf202d29ed55bb2b101638fc90063e" style="zoom:50%;" />

v-text 对所在节点传入文本内容

v-html  对所在节点传入的 带标签的内容 解析成HTML展示

<img src="./images/8217ea6fd508dbbbd91dd075e4788e7.png" alt="8217ea6fd508dbbbd91dd075e4788e7" style="zoom:50%;" />

<img src="./images/059a1e8a512c506342de415ed90cb7d.png" alt="059a1e8a512c506342de415ed90cb7d" style="zoom:50%;" />

### 生命周期

<img src="./images/4775842a36018f2a9aeb77f9072fee3.png" alt="4775842a36018f2a9aeb77f9072fee3" style="zoom:50%;" />

mounted只调一次

mounted在页面挂载完成之后调用

<img src="./images/efc63c18d74f3e4f1fe1e1bae0d61ee.png" alt="efc63c18d74f3e4f1fe1e1bae0d61ee" style="zoom:50%;" />

关键的时间点，调一些函数

这些函数，统称为生命周期函数

beforeCreate() 有vm，可用this，无法访问data和method

生命周期流程：初始化生命周期+事件[数据代理未开始] => beforeCreate() =>初始化数据监测+数据代理 => created()

created() =>解析模板，生成虚拟dom内存，页面还不能显示解析的好的内容

beforeMount() = >虚拟dom转真是dom，存在vm.$el里

mounted()=>经过编译的等初始化操作

### 浏览器本地存储

：window.localStorage.getItem('userInfo')
window.localStorage.setItem(Json.stringify(userInfo))
let userInfo = {}

window.localStorage.removeItem('userInfo')

会话存储sessionStorage：

会话会随浏览器窗口关闭而消失

nextTick()等待下一次 DOM 更新刷新的工具方法

setup() 渲染在beforeCreate之前，所有的渲染之前，不能用this，返回return为一个函数

<img src="./images/34aaa8d65da8c91045696a34dbca646.png" alt="34aaa8d65da8c91045696a34dbca646" style="zoom:50%;" />

简写形式，语法糖

decode用法

DECODE(value, if1, then1, if2, then2, ..., else)

