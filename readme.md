
# 安装`react-navigation`和`redux`
```
yarn add react-navigation react-native-gesture-handler react-navigtion-redux-helpers
react-native link react-native-gesture-handler
```

集成redux必需安装`react-navigtion-redux-helpers`
`react-native-gesture-handler`使用`Expo`可不安装

```
yarn add redux react-redux 
yarn add -D redux-devtools
```

# react-redux
## <Provider>
视图组件，使用该组件作为根节点，可以让整个组件树使用`connect`关联到指定`store`。
```JS
// AppNavigator：根组件
class App extends Component{
  render(){
    return (
      <Provider>
        <AppNavigator />
      </Provider>
    )
  }
}

```
## connect
connect`可以将将`react`组件和`redux store`关联起来，并通过`selector`关联具体数据

## selector
指定`stroe`中哪些属性可以作为自己的属性

## dispatch
通过`dispatch`指定一个`action`进行状态的改变