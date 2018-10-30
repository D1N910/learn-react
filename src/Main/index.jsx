export default class Main extends React.Component{
  constructor(props){
    console.log('constructor');
    super(props);
    this.state = {
      clock: new Date()
    }
  }

  static getDerivedStateFromProps(props, state){
    console.log('getDerivedStateFromProps');
    const hour = props.hour;
    const nextClock = new Date(state.clock); //用new是为了不污染原来的state
    nextClock.setHours(hour);
    return {
      clock: nextClock
    };
  }

  componentDidMount(){
    console.log('componentDidMount');
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