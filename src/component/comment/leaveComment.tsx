import React from 'react';
import './leaveComment.css'

interface IntShowCommentWindow{
  state:{
    divcontainer:boolean
  }

}
class showCommentWindow extends React.Component{
  state = {
    divcontainer: false,
  }
  render() {
    let Handlechange = ():void => {
      this.setState({ divcontainer: !this.state.divcontainer });
    }

    return (
      <div className='main'> <h2>here you are</h2></div>)

  }
}

export default showCommentWindow;




