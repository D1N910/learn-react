import React from 'react';

const Hello = (BasicComponent) => {
  return class extends React.Component{
    render () {
      return <div>
        <p>您好！</p>
        <BasicComponent {...this.props} />
      </div>
    }
  }
}

export default Hello;