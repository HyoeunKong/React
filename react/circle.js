class Circle extends React.Component{
render(){
    const circleStyle = {
        padding: 10,
        margin:20,
        display: "inline-block",
        backgroundColor:this.props.bgColor,
        borderRadius:"50%",
        width:100,
        height:100,
    };
    return (
        <div style={circleStyle}>
        </div>
    );
  } 
}
const renderData=[];
function showCircle(){
    const colors=["#393E41","#E94F37","#1C89BF","#A1D363","#395E41",
                  "#85FFC7","#297373","#FF8552"];                                             
   for(let i = 0; i < colors.length; i++){
       renderData.push(
       <Circle key={i} bgColor={colors[i]} />);
   }
   
}


showCircle();

ReactDOM.render(
    <div>
     {renderData}
   
    </div>
    , document.querySelector("#container")
);
