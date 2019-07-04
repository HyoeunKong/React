
            class Hello extends React.Component{
                render(){
                    const helloStyle={
                        fontSize:40,
                        color:"blue"
                    };
                    return(
                        <div style={helloStyle}>
                        hello 효은
                        </div> 

                    );
                }
            }
            class HelloBox extends React.Component{
                render(){
                    //style지정
                    const helloBoxStyle={
                        width:200,
                        height:200,
                        backgroundColor:"yellow"
                    
                    };
            
       
                    return (
                   <div style={helloBoxStyle}>
                        <Hello />
                        {this.props.children}
                        <Hello />
                        <Hello />
                  </div>              
                    
                );
            }
         }

        
         function b(){
            return  <HelloBox>aaaaaa</HelloBox>;
         }


         ReactDOM.render(
            b()
             ,document.querySelector("#container")
         );