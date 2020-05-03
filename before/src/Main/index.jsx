import React from 'React'
import Hello from '../Hello'

class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      clock: new Date()
    }
  }

  componentDidMount(){
    this.interval = setInterval(()=>{
      this.setState({
        clock: new Date()
      })
    },1000);
  }
  componentWillUnmount(){
    clearInterval(this.interval);
  }
  render(){
    return <div>当前时间 {this.state.clock.toLocaleTimeString()}</div>;
  }
}

export default Hello(Main);
