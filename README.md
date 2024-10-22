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
        