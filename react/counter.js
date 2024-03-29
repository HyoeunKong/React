class Counter extends React.Component{
    render(){
        return(
            <div>
            {this.props.display}
            </div>
        );
    }
}
class CounterParent extends React.Component{
    
       state={
            count:0
        };
      
  
    increase=(e)=>{
        let currentCount = this.state.count;
        if(e.shiftKey){
            currentCount += 10;
        }else{
            currentCount += 1;
        }    
        this.setState({
            count: currentCount
        
        
        });

    }
    render(){
        console.log(this.state.count);
        return(
            <div>
                <Counter display={this.state.count} />
                <button onClick={this.increase}> + </button>
            </div>
        );
    }
}

ReactDOM.render(
    <div>
        <CounterParent/>
    </div>,
    document.querySelector("#container")
);