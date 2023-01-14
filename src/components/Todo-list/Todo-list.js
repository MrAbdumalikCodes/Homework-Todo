import React, { Component } from 'react'
// import './Todo-list.scss'
import '../Todo-list-item/Todo-list-item.scss'
import TodoLi from '../Todo-li/TodoLi'
class TodoList extends Component {

  render() {
    const { data,onDelete } = this.props
    let arra = data.map((em) => {
        let {work,id} = em

        return <TodoLi
            id={id}
            key={id}
            work={work}
            onDelete={(id) => onDelete(id)}
            />
    })
    return (
        <div className='data'>
          {arra} 
        </div>
    )
  }
}
export default  TodoList
