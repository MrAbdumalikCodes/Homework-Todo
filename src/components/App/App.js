import React, { Component } from 'react'
import './App.scss'
import TodoList from '../Todo-list/Todo-list'
import ToDoListItem from '../Todo-list-item/Todo-list-item'
import TodoLi from '../Todo-li/TodoLi'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      data: [
        {
          id:1,
          work:"Jog around the park 3x",
          active:false
        },
        {
          id:2,
          work:"10 minutes meditation",
          active:false
        },
        {
          id:3,
          work:"Read for 1 hour",
          active:false
        },
        {
          id:4,
          work:"Pick up groceries",
          active:false
        },
        {
          id:5,
          work:"Complete Todo App on Frontend Mentor",
          active:false
        },
        {
          id:6,
          work:"Learn React every day",
          active:false
        }
      ]
    }
  }
  onDelete = (id) => {
    this.setState(({ data }) => {
      let newData = data.filter(item => item.id !== id)
      return {
        data: [...newData]
      }
    })
  }
  clearCompleted = (props) =>{
    this.setState(({data}) => {
      let clear = data.filter(item => item === !true )
      // console.log(props.like);
      return{
        data:[...clear]
      }
    })
  }
  render() {
    const { data } = this.state
    return (
      <>
        <ToDoListItem/>
        <TodoList
          data={data}
          onDelete={this.onDelete}
        />
        <TodoLi onDelete={this.onDelete}/>
        <div className='ends'>
          <div className="itemsLength">{data.length} items left</div>
          <div className="active">Active</div>
          <div className='completed'>Completed</div>
          <div className='completed' onClick={this.clearCompleted}>Clear completed</div>
        </div>
      </>
    )
  }
}
export default App
