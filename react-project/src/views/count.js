import {connect,useSelector} from "react-redux"
import {increment,Asyncincrement} from "../redux/action/count_action"
import React, { Component } from 'react'
console.log(increment)
class Count extends Component {

    // 加法
    increment = () => {
     
      // 调用 props 里面的方法，进行加减
      this.props.Asyncincrement(Number(3))
    }
  
    render() {
        console.log(this.props)
        const { count,person } = this.props
   
      return (
        <div>
          <h1>我是Count组件</h1>
          <h3>当前求和为：{count.count}</h3>
          <h2>【拿到Person组件数据：总人数为: {person.length}】</h2>
          <button onClick={this.increment}>+</button>
        </div>
      )
    }
}
export default connect(
    (state)=>({
     count:state.count,
     person:state.person
    }),{
      increment,
      Asyncincrement
    }
)(Count)