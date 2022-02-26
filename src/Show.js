import React from "react";

var listOfImages=[]
  const myStyle_horizontal={
    width:"310px",
    height:"270px",
    padding:"5px",
    borderRadius:"15px",
    border:"2px solid #555"
  }
class Show extends React.Component{

  importAll(r){
    return r.keys().map(r);
  }
  componentWillMount(){
    listOfImages=this.importAll(require.context('./data/', false, /\.(png|jpe?g|svg)$/));    
  }
  render(){
    return(
      <div>
      {
        listOfImages.map((image,index)=> <img key={index} src={image} style={myStyle_horizontal} alt="info"></img> )
      }
      </div>
      )
  }
}
export default Show;