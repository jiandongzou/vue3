import React, { Component } from 'react'
import { connect } from 'react-redux'
import addPerson from '../redux/action/person_action'

class Person extends Component {
  // 添加
  addPerson = () => {

    const name = this.nameRef.value.trim()
    console.log(this.nameRef);
    const age = Number(this.ageRef.value.trim())
    if(!name || !age) return alert('请输入！')
    const personObj = {name, age }
    this.props.addPerson(personObj)
    this.nameRef.value = ''
    this.ageRef.value = ''
  }

  render() {
    const {count,person}=this.props
    return (
      <div>
        <h1>我是Person组件</h1>
        <h2>【拿到Count组件的数据：求和为: {count.count}】</h2>
        <input ref={c=>this.nameRef=c} type="text" placeholder='请输入姓名'/>
        <input ref={c=>this.ageRef=c} type="text" placeholder='请输入年龄' />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
             person.map(item => {
              return <li >{ item.name} -- { item.age }</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  // 当前组件需要什么数据（状态），就从这里映射什么数据（状态）
  state => ({
    person: state.person,
    count: state.count
  }),
  { addPerson }
)(Person)