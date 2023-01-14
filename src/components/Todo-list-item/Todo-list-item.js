import React, { Component } from 'react'

import './Todo-list-item.scss'

import dark from '../Todo-list-item/dark.svg'

import TodoLi from '../Todo-li/TodoLi'

class ToDoListItem extends Component {
  render() {
    return (
      <>
        <div className='container'>
          <div className='header'>
            <div className='title'>TODO</div>
            <div className='dark-mode'><img src={dark} alt={"logo"}/></div>
          </div>
          <div className='section'>
            <div className='inp'><div className='check'></div><input type="text"/></div>
            <TodoLi/>
          </div>
        </div>
      </>
    )
  }
}
export default ToDoListItem
