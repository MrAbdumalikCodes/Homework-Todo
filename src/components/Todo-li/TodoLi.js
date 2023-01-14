import React, { Component } from 'react'
import '../Todo-li/TodoLi.scss'

export default class TodoLi extends Component {
  constructor(props){
    super(props)
    this.state = {
        like: false,
        completed:false
    }
}
  changeLikeState = () => {
    this.setState({like: !this.state.like})
  }

  render() {
    const {work,id,onDelete} = this.props
    let clazz = 'item'
    if(this.state.like){
      clazz += ' like'
    }
    return (
      <>
        <div className='box'>
          <div className='does'>
              <div className={clazz} onClick={this.changeLikeState}>
                <div className='check'></div>{work}
              </div>
                <div className='close' onClick={() => onDelete(id)}>✕</div>
          </div>
        </div>
      </>
    )
  }
}
