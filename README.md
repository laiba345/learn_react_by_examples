# learn_react_by_examples
## 创建项目
- 先使用 create-react-app 脚手架创建一个 React 项目，并启动项目。
```
npx create-react-app react-todo-list
cd react-todo-list
npm start
```

## 组件
- 无论Vue还是React，页面都是由一个一个组件嵌套组成的，让我们先从组件开始。

- 组件定义
    - Vue组件
        - Vue项目中，组件是一个 .vue 文件，包含**模板、样式和脚本代码**，这和 HTML 文件格式一样，所以很好理解。
        ```
        <template>
            <p>hello vue</p>
        </template>

        <script>
        export default {
            // ...
        }
        </script>

        <style></style>
        ```
    - react组件
        - React 组件一般是一个 JS 文件，用一个 JS 函数定义组件。组件函数会返回一段 JSX 代码，JSX 语法和 HTML 语法很相似，也很好理解。
        - React src/App.js
        ```
        // src/App.js
        function App() {
            return (
                // JSX 语法，类似于 HTML
                <div>
                    <p>hello React</p>
                </div>
            )
        }
        export default App
        ```
        - 当年对react的吐槽: 在JS中写HTML会导致混乱
            - 思考？ 组件是否应该是一个函数才合理呢？ 输入数据，返回 UI 。Vue 也很早就支持了函数组件。
            - 所以；react本质就是js函数; 
        
## 组件结构
- 无论 Vue React 都是支持组件嵌套的，嵌套规则和格式也都是参考 HTML 语法。
- 对于自定义组件的 tag 名称，Vue 和 React 现在都推荐使用 PascalCase 写法，如 <PostBlogPage />，即**首字母大写**
- 注意：Vue2 当年推荐 <post-blog-page /> 写法，Vue3 改过来了

## 组件属性
- Vue组件接受属性时
    - Vue2；需要用 props: ['a', 'b'] 来定义各个属性的名称。
    - Vue3；即便是 Vue3 setup script 也需要一个 defineProps(['a', 'b']) 一个宏来定义。
    ```
    <script setup>
    // 通过 defineProps 定义组件的 props
    const props = defineProps({
        title: String,
        count: {
        type: Number,
        required: true
        }
    })

    // 现在可以直接使用 props.title 和 props.count
    </script>

    <template>
        <div>
            <h1>{{ props.title }}</h1>
            <p>Count: {{ props.count }}</p>
        </div>
    </template>
    ```
- React组件
    - react组件是一个函数，**它的属性就是函数的参数**
    - PS：对比上面 Vue 代码和下面 React 代码，你可能会疑问：同样是获取 props.foo ，为何 Vue 需要定义 props: ['foo'] 呢？
    - 通过实战可以发现，**React组件属性，就是函数参数**

## 组件事件
- Vue组件
    - Vue2组件的事件，可以不定义，直接通过this.$emit('xxx') 触发即可。
    - Vue3组件，setup script 中使用 defineEmits 这个宏来定义。
    ```
    // Vue2
    methods: {
        deleteItem(id) { this.$emit('delete', id) }
    }
    // Vue3
    <script setup>
        const emit = defineEmits(['inFocus', 'submit'])
        function buttonClick() { emit('submit') }
    </script>
    ```
    - 观点：在Vue中，事件通常用于通知父组件一些事情发生了，例如按钮点击、表单提交，事件的实际逻辑往往是在父组件中完成，而不是在子组件中。
        - 通常情况下，子组件负责触发事件，而不负责事件的处理。
        - 这种设计可以让子组件保持通用性和简单性，而具体的业务逻辑由父组件来定义和控制。
    - 这两种方式
        - 不定义，你就不知道这个事件的来源，就需要去全局查找。如果名称不小心写错了，也无法提前报错提示。
        - 使用 defineEmits 定义，就和上面 props 一样，又是 Vue 独有的语法。包括使用 $emit 去执行，也是 Vue 独有的。都需要你挨个学习，用的时候挨个去看文档。
- React组件
    - 组件事件和属性一样，还是函数的参数，执行事件就是执行一个函数，就简单的JS代码
    

