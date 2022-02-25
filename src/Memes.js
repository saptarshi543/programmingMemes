import React from "react";

function Memes(){
// const style_pic_horizontal={
// 	width: "250px",
// 	height: "300px",
// 	padding: "20px",
// 	borderRadius: "15px"
// };
const style_pic_vertical={
	width:"250px",
	height:"400px",
	padding:"20px",
	borderRadius:"15px"
};
return(
<div>
<img alt="just some memes" style={style_pic_vertical} src="https://64.media.tumblr.com/8fc1c76c29dd2741efa267b4915840e1/58ff3b63955cb269-ff/s1280x1920/cb8ad4045fa3892dcc91730c93c352b97299b96b.jpg" />
</div>
	);
}
export default Memes;