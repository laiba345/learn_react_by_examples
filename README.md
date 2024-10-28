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
    - React组件的事件，也是函数参数，执行就是执行JS函数

## 子组件
- Vue的使用
    - Vue中的slot插槽，用于定义和显示子组件的内容；
    - Vue文档中关于slot的功能非常多，
        - 具名插槽、作用域插槽
- React的使用
    - react中关于子组件，只有一个props.children， children就是一个普通的属性，只不过你不用显示的传递过来。

## 模板
- Vue模板
    - 即组件的UI解构，Vue使用自己的template模板语法
- React模板
    - 使用jsx语法；
    - 目前很多框架都支持用jsx，包括Vue3，babel默认支持JSX编译，TS也支持jsx语法

## 属性
- Vue
    - Vue template使用 :xxx 来区分属性值的类型
    - 如<p id="p1" :title="title1">hello vue</p>
        - 上述的p1就只是字符串，title1是一个js变量，所以:xxx 又是Vue新定义的语法准则；
        
- React
    -  React JSX 中，属性值如果是 JS 变量，依然用插值的语法 {name} ，没增加新规则。如下：<p id="p1" title={title}>hello vue</p>
    - React动态属性，依然使用插值语法，很简单；
    - Vue中有props和attrs（面试常用，但工作不常用），react中没有attrs

## 自定义事件
- Vue
    - 往子组件中传入自定义事件，Vue template 需要使用 @xxx 写法。
        - <MyComponent @some-event="callback" />
- React 
    - React依然使用 插值语法 { xxx }, **一个规则**到处使用；
        - <TodoInput addTodo={addTodo} />


## 样式
- Vue
    - Vue template 使用 class="a b" ，React JSX 使用 className="a b"
        - 因为React完全是JS代码，class是JS关键字，没法直接使用，所以必须用
        className代替；
    - 如果是动态class，Vue有多种写法（对象、数组），
    ```
    <div :class="{ active: isActive }"></div>
    <div :class="[isActive ? activeClass : '', errorClass]"></div>
    ```
- React
    - React继续以不变应万变，还是使用插值语法 { xxx }
    <div className={someClass}></div>
- 发现，一个 { xxx } 写法，可以解决大部分问题，

## DOM事件
- Vue template绑定DOM事件，使用@xxx格式，和上文的自定义事件一样
    - <button @click="greet">Greet</button>
- React JSX绑定 DOM事件参考了HTML事件的语法，但是加了一个规定
    - **使用驼峰式写法**； <p onClick={addTodoHandler}>todo input</p>
    - 所以JSX中，所有onXxx就是DOM事件的写法，这是JSX除了插值语法的第二个规则；
- 注意：对于上文的自定义事件，Vue理解为事件，所以用 @xxx 语法。 而React理解为是属性，

## 条件渲染
- Vue template 使用v-if和v-else等指令实现判断逻辑条件渲染，又是Vue独家发明。
    - 注意：awesome是一个js变量，别误看做是静态的。
    ```
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    ```
- React JSX依然使用 { xxx }， 只不过不是使用js变量，而是js表达式
    - 在js中，&&操作符是逻辑与运算符，当第一个操作符为真的时候，会返回第二个操作数
```
const flag1 = true; 
console.log(flag1 && 'hello'); // hello 
```
- 根据上面的结论，我们就可以利用上述的结果进行反制
```
{ flag && <SomeComponent /> }
{ flag ? <SomeCompnent/> : <OtherComponent/> }
- 上述当flag为true的时候，表达式都是返回 <SomeComponent /> 组件，这一点很关键
- 即相当于  <SomeComponent />

## 列表渲染
- Vue； 使用的是 v-for命令
- React; 还是使用{ xxx } 表达式
```
// 已定义 arr1 = ['a', 'b', 'c']
<ul>
{
    arr1.map(item => {
        return <li>{item}</li>
    })
}
</ul>
```
- 注意：Vue和React一样，循环时都需要一个唯一的key，否则会有警告；
    - 所以，如果熟悉了map函数，那jsx列表渲染也很简单，其实就是js代码

## 整体对比
- JSX语法（非常简洁，关注两条）
    -  { xxx } 大括号里面是JS的变量或者表达式，可实现一切动态的功能，包括判断和循环
    - onXxx 是DOM事件的写法
- Vue template定义了更多的规则
    - :xxx 表示动态属性
    - @xxx 表示事件
    - :class 和 :style 的多种写法
    - v-if、v-for等多种指令
    - 还有v-model、slot等等

## 状态和响应式
- 组件的状态数据管理，以及如何触发数据变化，从而触发组件更新
- Vue2
    - 使用data函数（比较简洁）
- Vue3
    - 使用ref 和 reactive，Vue都是响应式监听，直接修改数据即可监听到变化；
- React
    - 就一个useState API 

## 值类型
- 定义：就是简单的 number、string、boolean等类型
- Vue2 使用 data() 函数返回数据，直接通过this.xxx修改数据
- Vue3 处理值类型，要使用ref，在JS中修改或使用时，要使用.value属性，否则无效；





