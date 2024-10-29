# learn_react_by_examples
## 创建项目
- 先使用 create-react-app 脚手架创建一个 React 项目,并启动项目。
```
npx create-react-app react-todo-list
cd react-todo-list
npm start
```

## 组件
- 无论Vue还是React,页面都是由一个一个组件嵌套组成的,让我们先从组件开始。

- 组件定义
    - Vue组件
        - Vue项目中,组件是一个 .vue 文件,包含**模板、样式和脚本代码**,这和 HTML 文件格式一样,所以很好理解。
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
        - React 组件一般是一个 JS 文件,用一个 JS 函数定义组件。组件函数会返回一段 JSX 代码,JSX 语法和 HTML 语法很相似,也很好理解。
        - React src/App.js
        ```
        // src/App.js
        function App() {
            return (
                // JSX 语法,类似于 HTML
                <div>
                    <p>hello React</p>
                </div>
            )
        }
        export default App
        ```
        - 当年对react的吐槽: 在JS中写HTML会导致混乱
            - 思考？ 组件是否应该是一个函数才合理呢？ 输入数据,返回 UI 。Vue 也很早就支持了函数组件。
            - 所以；react本质就是js函数; 
        
## 组件结构
- 无论 Vue React 都是支持组件嵌套的,嵌套规则和格式也都是参考 HTML 语法。
- 对于自定义组件的 tag 名称,Vue 和 React 现在都推荐使用 PascalCase 写法,如 <PostBlogPage />,即**首字母大写**
- 注意:Vue2 当年推荐 <post-blog-page /> 写法,Vue3 改过来了

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
    - react组件是一个函数,**它的属性就是函数的参数**
    - PS:对比上面 Vue 代码和下面 React 代码,你可能会疑问:同样是获取 props.foo ,为何 Vue 需要定义 props: ['foo'] 呢？
    - 通过实战可以发现,**React组件属性,就是函数参数**

## 组件事件
- Vue组件
    - Vue2组件的事件,可以不定义,直接通过this.$emit('xxx') 触发即可。
    - Vue3组件,setup script 中使用 defineEmits 这个宏来定义。
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
    - 观点:在Vue中,事件通常用于通知父组件一些事情发生了,例如按钮点击、表单提交,事件的实际逻辑往往是在父组件中完成,而不是在子组件中。
        - 通常情况下,子组件负责触发事件,而不负责事件的处理。
        - 这种设计可以让子组件保持通用性和简单性,而具体的业务逻辑由父组件来定义和控制。
    - 这两种方式
        - 不定义,你就不知道这个事件的来源,就需要去全局查找。如果名称不小心写错了,也无法提前报错提示。
        - 使用 defineEmits 定义,就和上面 props 一样,又是 Vue 独有的语法。包括使用 $emit 去执行,也是 Vue 独有的。都需要你挨个学习,用的时候挨个去看文档。
- React组件
    - 组件事件和属性一样,还是函数的参数,执行事件就是执行一个函数,就简单的JS代码
    - React组件的事件,也是函数参数,执行就是执行JS函数

## 子组件
- Vue的使用
    - Vue中的slot插槽,用于定义和显示子组件的内容；
    - Vue文档中关于slot的功能非常多,
        - 具名插槽、作用域插槽
- React的使用
    - react中关于子组件,只有一个props.children, children就是一个普通的属性,只不过你不用显示的传递过来。

## 模板
- Vue模板
    - 即组件的UI解构,Vue使用自己的template模板语法
- React模板
    - 使用jsx语法；
    - 目前很多框架都支持用jsx,包括Vue3,babel默认支持JSX编译,TS也支持jsx语法

## 属性
- Vue
    - Vue template使用 :xxx 来区分属性值的类型
    - 如<p id="p1" :title="title1">hello vue</p>
        - 上述的p1就只是字符串,title1是一个js变量,所以:xxx 又是Vue新定义的语法准则；
        
- React
    -  React JSX 中,属性值如果是 JS 变量,依然用插值的语法 {name} ,没增加新规则。如下:<p id="p1" title={title}>hello vue</p>
    - React动态属性,依然使用插值语法,很简单；
    - Vue中有props和attrs(面试常用,但工作不常用),react中没有attrs

## 自定义事件
- Vue
    - 往子组件中传入自定义事件,Vue template 需要使用 @xxx 写法。
        - <MyComponent @some-event="callback" />
- React 
    - React依然使用 插值语法 { xxx }, **一个规则**到处使用；
        - <TodoInput addTodo={addTodo} />


## 样式
- Vue
    - Vue template 使用 class="a b" ,React JSX 使用 className="a b"
        - 因为React完全是JS代码,class是JS关键字,没法直接使用,所以必须用
        className代替；
    - 如果是动态class,Vue有多种写法(对象、数组),
    ```
    <div :class="{ active: isActive }"></div>
    <div :class="[isActive ? activeClass : '', errorClass]"></div>
    ```
- React
    - React继续以不变应万变,还是使用插值语法 { xxx }
    <div className={someClass}></div>
- 发现,一个 { xxx } 写法,可以解决大部分问题,

## DOM事件
- Vue template绑定DOM事件,使用@xxx格式,和上文的自定义事件一样
    - <button @click="greet">Greet</button>
- React JSX绑定 DOM事件参考了HTML事件的语法,但是加了一个规定
    - **使用驼峰式写法**； <p onClick={addTodoHandler}>todo input</p>
    - 所以JSX中,所有onXxx就是DOM事件的写法,这是JSX除了插值语法的第二个规则；
- 注意:对于上文的自定义事件,Vue理解为事件,所以用 @xxx 语法。 而React理解为是属性,

## 条件渲染
- Vue template 使用v-if和v-else等指令实现判断逻辑条件渲染,又是Vue独家发明。
    - 注意:awesome是一个js变量,别误看做是静态的。
    ```
    <h1 v-if="awesome">Vue is awesome!</h1>
    <h1 v-else>Oh no 😢</h1>
    ```
- React JSX依然使用 { xxx }, 只不过不是使用js变量,而是js表达式
    - 在js中,&&操作符是逻辑与运算符,当第一个操作符为真的时候,会返回第二个操作数
```
const flag1 = true; 
console.log(flag1 && 'hello'); // hello 
```
- 根据上面的结论,我们就可以利用上述的结果进行反制
```
{ flag && <SomeComponent /> }
{ flag ? <SomeCompnent/> : <OtherComponent/> }
- 上述当flag为true的时候,表达式都是返回 <SomeComponent /> 组件,这一点很关键
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
- 注意:Vue和React一样,循环时都需要一个唯一的key,否则会有警告；
    - 所以,如果熟悉了map函数,那jsx列表渲染也很简单,其实就是js代码

## 整体对比
- JSX语法(非常简洁,关注两条)
    -  { xxx } 大括号里面是JS的变量或者表达式,可实现一切动态的功能,包括判断和循环
    - onXxx 是DOM事件的写法
- Vue template定义了更多的规则
    - :xxx 表示动态属性
    - @xxx 表示事件
    - :class 和 :style 的多种写法
    - v-if、v-for等多种指令
    - 还有v-model、slot等等

## 状态和响应式
- 组件的状态数据管理,以及如何触发数据变化,从而触发组件更新
- Vue2
    - 使用data函数(比较简洁)
- Vue3
    - 使用ref 和 reactive,Vue都是响应式监听,直接修改数据即可监听到变化；
- React
    - 就一个useState API 

## 值类型
- 定义:就是简单的 number、string、boolean等类型
- Vue2 使用 data() 函数返回数据,直接通过this.xxx修改数据
- Vue3 处理值类型,要使用ref,在JS中修改或使用时,要使用.value属性,否则无效；
- React 使用的 useState还是很好理解的,语义非常明确,

- 注意
    - 1. React ref也有类似的问题,但React ref 主要用于获取DOM节点或其他组件节点,一般不常用
    - 2.  React ref 不具备 setXxx 能力,无法触发组件更新,这和 state 有本质区别,不会混淆。

## 对象和数组
- Vue2中data()很清晰,但因为内部使用defineProperty 可能导致下列问题（vue3使用Proxy实现响应式）
    - 1. 对象层次较深时,可能会有性能问题,因为要一次性递归绑定响应式
    - 2. 修改数组只能用API,不能直接赋值某个index
- Vue3 刚发布的时候,推荐使用 reactive 来做对象的响应式监听,后来大家发现 ref 也可以监听对象,
    - 现在Vue3文档推荐统一使用ref,无论是值类型、对象还是数组,当然需要使用.value
- React 
    - 很统一,无论是处理值类型、还是数组、对象,都是通过useState来定义的,都是通过setXxx设置新数据,没有第二个选择
    ```
    const [list, setList] = useState([
        { id: 1, text: 'todo 1' },
        { id: 2, text: 'todo 2' },
    ])
    ```
    - 在修改数据的时候,就不能直接修改list,而是要调用setList函数,并传入新数据
    使用ES结构语法,...xxx能非常轻松的生成新数据
        - 修改数组,一般会用: setList([...list, newItem] )
        - 修改对象,一般会用：setObj({ ...obj, newItem } )
    - 注意：React中的useState能定义并修改任何数据类型

## 数据的复杂性
- vue   
    - 无论 Vue2 Vue3 为了实现数据响应式,它都需要把数据包裹一层,即你定义的数据并不是真正的数据。
    这个问题在Vue3中非常明显
    - 而对于React而言,它的state就是你传入的数据,所见即所得；


## 副作用和组件生命周期
- 副作用
    - 作为一个UI组件,不能光考虑一次性的输出JSX,还需要考虑组件完整的生命周期,如更新、销毁
    这些都可以通过副作用来实现；
- Vue的生命周期
    - Vue2 对应的生命周期 beforeCreate created beforeMount Mounted 大家应该都很熟悉了。
    - Vue3 的话,主要是对composition API做了一些API改动,如onMounted写法
- React使用useEffect来处理副作用,当然也包括组件初次渲染相关的,
    - useEffect语义就是要执行一个副作用,**即组件函数执行完以后,还要做点啥？**
        - 在fn函数中定义即可
    - 不用把useEffect和Vue组件生命周期做对比，就按照副作用的概念来理解

### 初次渲染
- 在组件内部使用useEffect，并传入一个空数组作为依赖；
```
useEffect(() => {
    // 这里是组件首次渲染时执行的逻辑
    console.log('组件已初次渲染');

    // 如果需要清理逻辑，可以返回一个函数
    return () => {
        console.log('组件卸载时的清理逻辑');
    };
}, []); // 空数组确保只在初次渲染时执行
```

### 组件更新
- Vue组件更新的生命周期是beforeUpdate和updated，Vue3中的Composition API写法上有些许改变，
但是语义是相同的；
- React依然使用useEffect副作用处理组件更新的情况，
    - useEffect函数讲解；其实它有两个参数
        - 1. 函数，即副作用要执行的具体内容
        - 2. 依赖项数据，选填
```
const [page, setPage] = useState(0)
const [keyword, setKeyword] = useState('')

useEffect(() => {
    fn(page, keyword)
}, [page, keyword]) 
```
- 上述代码中，useEffect第二个参数（依赖项）是[page, keyword],那它的副作用
执行时机就是两个
    - 组件初次渲染完成，执行副作用
    - page 或者 keyword有变化，也会执行副作用
- 注意点：
    - 要把 useEffect 对比组件生命周期，用“副作用”概念去理解它。
    - 它可以在组件渲染完成后执行副作用，也可以监听某些 state 变化后执行副作用 —— 就这两条，即可为满足所有开发需求。

### 组件销毁
- Vue使用 beforeDestroy 和 Desctroyed 两个生命周期，很好理解。
- React 依然使用 useEffect ，只不过需要你记住一件事儿：useEffect 函数里面，可以再 return 一个函数，用于监听组件销毁。
```
useEffect(() => {
    // xxx
    
    return () => { console.log('组件销毁之前，如解绑自定义事件') }
})
```
- 切记： useEffect函数里面，可以再return一个函数，用于监听组件销毁

## watch computed
- Vue watch监听某个数据，React useEffect 即可实现
- Vue computed 计算数据，如何在 React 中实现呢？分两种情况。
    - 不同缓存计算结果（大部分情况都不用缓存），直接写就行
    ```
    const [count, setCount] = useState(0)
    const doubleCount = count * 2 // 直接计算，满足绝大部分情况

    return <div>
        <button onClick={() => setCount(count + 1)}>increase</button>
        <span>{count}  {doubleCount}</span>
    </div>
    ```
    - 需要缓存计算结果，可以使用 useMemo做缓存，只要count不变，doubleCount就不会重新计算
        - 类似与Vue computed
    ```
    const [count, setCount] = useState(0)
    const doubleCount = useMemo(() = > count * 2, [count])
    ```

## 表单
- Vue
    - Vue 使用 v-model 双向绑定表单项的值，这在用户体验方面感觉非常棒，非常方便。单从 v-model 的开发体验上，Vue 是胜过 React 的。
- React
    - React 推荐使用受控组件（需要记住这个词）来处理表单项的值，其实也并不难理解。
    ```
    const [text, setText] = useState('')
    function handleChangeText(event) {
        setText(event.target.value)
    }
    return <div>
        <input value={text} onChange={handleChangeText}/>
    </div>
    ```
- 解释
```
看以上代码，一共也没几行代码，也很好理解：定义 text 然后在 input change 时 setText
其实就是自己实现了一套 Vue v-model ，功能是很相似的。
那么 React 为何要让开发者自己写呢，它内置一个 v-model 不好吗？ —— 不好。
因为 React 在设计上不是“双向绑定”，而是“单项数据流”。所以 React 要让你自己写。
这就像上文 React 修改 state 要让你显示调用 setXxx 是一个道理。
如果替用户做的过多了，看似是功能全面了，但很有可能会导致设计混乱，理解起来更费劲。
代码多写几行少写几行这都没关系，代码的可读性，设计上的统一性，这些更重要。
```
