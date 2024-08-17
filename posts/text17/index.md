# 子组件向父组件相互传参的方式


### 子=>父

子组件向父组件传参的方式通常通过事件来实现。具体步骤如下：

1. **在子组件中定义事件**：子组件可以通过 `$emit` 方法触发一个自定义事件，并传递参数

```html
// 子组件 ChildComponent.vue
<template>
  <button @click="sendDataToParent">向父组件传参</button>
</template>
 
<script>
export default {
  methods: {
    sendDataToParent() {
      let data = '这是子组件传递给父组件的数据';
      this.$emit('child-event', data);
    }
  }
}
</script>
```

在上面的代码中，`sendDataToParent` 方法通过 `$emit` 发送了一个名为 `child-event` 的事件，并将 `data` 作为参数传递给父组件

2.**在父组件中监听事件**：父组件需要在使用子组件的地方监听这个事件，并处理子组件传递过来的数据

```html
// 父组件 ParentComponent.vue
<template>
  <div>
    <p>从子组件接收到的数据：{{ receivedData }}</p>
    <child-component @child-event="handleChildEvent"></child-component>
  </div>
</template>
 
<script>
import ChildComponent from './ChildComponent.vue';
 
export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      receivedData: ''
    };
  },
  methods: {
    handleChildEvent(data) {
      this.receivedData = data;
    }
  }
}
</script>
```

在父组件中，使用 <child-component> 标签引入子组件，并通过 @child-event 监听子组件触发的 child-event 事件。当事件被触发时，handleChildEvent 方法会被调用，并将子组件传递的 data 参数赋值给 receivedData。

通过以上方式，子组件就能够向父组件传递数据了。

### 父=>子

Vue项目中在父组件中直接调用子组件的方法

**方案一：通过ref直接调用子组件的方法**

```html
//父组件中
<template>
    <div>
        <Button @click="handleClick">点击调用子组件方法</Button>
        <Child ref="child"/>
    </div>
</template>   

<script>
import Child from './child';
export default {
    methods: {
        handleClick() {
             this.$refs.child.sing();
        },
    },
}
</script>

//子组件中
<template>
  <div>我是子组件</div>
</template>
<script>
export default {
  methods: {
    sing() {
      console.log('我是子组件的方法');
    },
  },
};
</script>
```

**方案二：通过组件的$emit、$on方法**

```html
//父组件中
<template>
    <div>
        <Button @click="handleClick">点击调用子组件方法</Button>
        <Child ref="child"/>
    </div>
</template>   

<script>
import Child from './child';
export default {
    methods: {
        handleClick() {
               this.$refs.child.$emit("childmethod")    //子组件$on中的名字
        },
    },
}
</script>

//子组件中
<template>
    <div>我是子组件</div>
</template>

<script>
export default {
    mounted() {
        this.$nextTick(function() {
            this.$on('childmethods', function() {
                console.log('我是子组件方法');
            });
        });
     },
};

</script>
```


