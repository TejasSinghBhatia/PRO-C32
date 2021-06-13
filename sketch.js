const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg="sunrise1.png"

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg)

    Engine.update(engine);

    // write code to display time in correct format here

}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata/")
    //change the data in JSON format
    var responseJSON = await response.json();
    //console.log(responseJSON)
    // write code slice the datetime
    var datetime = responseJSON.datetime
   // console.log(datetime)
    var time = datetime.slice(11,13)
    console.log(time)
    // add conditions to change the background images from sunrise to sunset
    if(time>=04 && time<06){
    bg = "sunrise1.png"
    }
    else if(time>06 && time<08){
        bg = "sunrise2.png"
        }
        else if(time>=08 && time<11){
            bg = "sunrise3.png"
            }
            else if(time>=11 && time<13){
                bg = "sunris4.png"
                }
                else if(time>=13 && time<15){
                    bg = "sunrise5.png"
                    }
                    else if(time>=15 && time<17){
                        bg = "sunrise6.png"
                        }
                        else if(time>=17 && time<18){
                            bg = "sunset7.png"
                            }
                            else if(time>=18 && time<20){
                                bg = "sunset8.png"
                                }
                                else if(time>=20 && time<23){
                                    bg = "sunset9.png"
                                    }
                                    else if(time>=23 && time==0){
                                        bg = "sunset10.png"
                                        }
                                        else if(time>=0 && time<04){
                                            bg = "sunset11.png"
                                            }
                                            else{
                                            bg="sunset12.png"
                                            }
                                            


    //load the image in backgroundImg variable here   
    backgroundImg=loadImage(bg)
}
