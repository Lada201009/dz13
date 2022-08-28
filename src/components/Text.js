import React from 'react';

class Text extends React.Component {
  render (){
    return (
      <text className='text'>{this.props.title}</text>
    )
  }
}

export default Text