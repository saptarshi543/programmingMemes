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
var count=0;
	  return(
      <div>
      {
        listOfImages.map((image,index)=> <img key={index} src={image} title={++count}  loading="lazy" style={myStyle_horizontal} alt="info"></img> )
      }

		  <p>Total number of memes: {count}</p>
      </div>
      )
  }
}
export default Show;
