import React from "react";
import image1 from './pic_one.png';
import image2 from './pic_two.png';
import image3 from './pic_three.png';
import image4 from './pic_four.png';
import image5 from './pic_five.png';
import image6 from './pic_six.png';
import image7 from './pic_seven.png';
import image8 from './pic_eight.png';
import image9 from './pic_nine.png';
import image10 from './pic_ten.png';
import image11 from './pic_eleven.png';
import image12 from './pic_twelve.png';
import image13 from './pic_thirteen.png';
import image14 from './pic_fourteen.png';
import image15 from './pic_fifteen.png';
import image16 from './pic_sixteen.png';
import image17 from './pic_seventeen.png';
import image18 from './pic_eighteen.png';
import image19 from './pic_nineteen.png';
import image20 from './pic_twenty.png';
import image21 from './pic_twenty_one.png';
import image22 from './pic_twenty_two.png';
import image23 from './pic_twenty_three.png';
import image24 from './pic_twenty_four.png';
import image25 from './pic_twenty_five.jpg';
import image26 from './pic_twenty_six.png';
import image27 from './pic_twenty_seven.jpg';
import image28 from './pic_twenty_eight.jpg';
import image29 from './pic_twenty_nine.jpg';
import image30 from './pic_thirty.jpg';
import image31 from './pic_thirty_one.jpg';
import image32 from './pic_thirty_two.jpg';
import image33 from './pic_thirty_three.jpg';
import image34 from './pic_thirty_four.jpg';
import image35 from './pic_thirty_five.jpg';
import image36 from './pic_thirty_six.jpg';
import image37 from './pic_thirty_seven.jpg';
import image38 from './pic_thirty_eight.jpg';
import image39 from './pic_thirty_nine.jpg';
import image40 from './pic_forty.jpg';
import image41 from './pic_forty_one.jpg';
import image42 from './pic_forty_two.jpg';
import image43 from './pic_forty_three.jpg';
import image44 from './pic_forty_four.jpg';
import image45 from './pic_forty_five.jpeg';
import image46 from './pic_forty_six.jpg';
import image47 from './pic_forty_seven.jpeg';
import image48 from './pic_forty_eight.png';
import image49 from './pic_forty_nine.png';
import image50 from './pic_fifty.png';
import image51 from './pic_fifty_one.jpg';

function MemesTwo(){

const style_pic_horizontal={
	width: "250px",
	height: "300px",
	padding: "20px",
	borderRadius: "15px",
	display: 'inline'
};
const style_pic_vertical={
	width:"250px",
	height:"400px",
	padding:"20px",
	borderRadius:"15px"
};

const pictures=[
{src:image1,title:"pic 1",style:style_pic_vertical},
{src:image2,title:"pic 2",style:style_pic_horizontal},
{src:image3, title:"pic 3",style:style_pic_horizontal},
{src:image4 , title:"pic 4",style:style_pic_horizontal},
{src:image5 , title:"pic 5",style:style_pic_horizontal},
{src:image6 , title:"pic 6",style:style_pic_horizontal},
{src:image7 , title:"pic 7",style:style_pic_horizontal},
{src:image8 , title:"pic 8",style:style_pic_vertical},
{src:image9 , title:"pic 9",style:style_pic_horizontal},
{src:image10 , title:"pic 10",style:style_pic_vertical},
{src:image11 , title:"pic 11",style:style_pic_vertical},
{src:image12 , title:"pic 12",style:style_pic_vertical},
{src:image13 , title:"pic 13",style:style_pic_vertical},
{src:image14 , title:"pic 14",style:style_pic_vertical},
{src:image15 , title:"pic 15",style:style_pic_vertical},
{src:image16 , title:"pic 16",style:style_pic_horizontal},
{src:image17 , title:"pic 17",style:style_pic_horizontal},
{src:image18 , title:"pic 18",style:style_pic_horizontal},
{src:image19 , title:"pic 19",style:style_pic_vertical},
{src:image20 , title:"pic 20",style:style_pic_vertical},
{src:image21 , title:"pic 21",style:style_pic_vertical},
{src:image22 , title:"pic 22",style:style_pic_vertical},
{src:image23 , title:"pic 23",style:style_pic_vertical},
{src:image24 , title:"pic 24",style:style_pic_horizontal},
{src:image25 , title:"pic 25",style:style_pic_vertical},
{src:image26 , title:"pic 26",style:style_pic_vertical},
{src:image27 , title:"pic 27",style:style_pic_horizontal},
{src:image28 , title:"pic 28",style:style_pic_vertical},
{src:image29 , title:"pic 29",style:style_pic_vertical},
{src:image30 , title:"pic 30",style:style_pic_vertical},
{src:image31 , title:"pic 31",style:style_pic_horizontal},
{src:image32 , title:"pic 32",style:style_pic_vertical},
{src:image33 , title:"pic 33",style:style_pic_vertical},
{src:image34 , title:"pic 34",style:style_pic_horizontal},
{src:image35 , title:"pic 35",style:style_pic_vertical},
{src:image36 , title:"pic 36",style:style_pic_horizontal},
{src:image37 , title:"pic 37",style:style_pic_horizontal},
{src:image38 , title:"pic 38",style:style_pic_horizontal},
{src:image39 , title:"pic 39",style:style_pic_vertical},
{src:image40 , title:"pic 40",style:style_pic_vertical},
{src:image41 , title:"pic 41",style:style_pic_vertical},
{src:image42 , title:"pic 42",style:style_pic_horizontal},
{src:image43 , title:"pic 43",style:style_pic_horizontal},
{src:image44 , title:"pic 44",style:style_pic_horizontal},
{src:image45 , title:"pic 45",style:style_pic_horizontal},
{src:image46 , title:"pic 46",style:style_pic_vertical},
{src:image47 , title:"pic 47",style:style_pic_horizontal},
{src:image48 , title:"pic 48",style:style_pic_horizontal},
{src:image49 , title:"pic 49",style:style_pic_vertical},
{src:image50 , title:"pic 50",style:style_pic_vertical},
{src:image51 , title:"pic 51",style:style_pic_horizontal},
];

	return(
<div> 


{
pictures.map((index)=> <img src={index.src} style={index.style} title={index.title} alt="memes" /> )
}
</div>
		)
}
export default MemesTwo;