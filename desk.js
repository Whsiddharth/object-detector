desk_img="";
status="";
objects=[];



function preload(){
    desk_img=loadImage("maindesk.jpeg");
}

function modelLoaded(){
    console.log("Model Loaded!");
    Status = true;
    object_Detector.detect(desk_img,gotResults);
}




function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}

function setup(){
    canvas=createCanvas(600,350);
    canvas.center();

}

function draw(){
    image(desk_img, 0, 0, 600,350);
    if(status != ""){
        for(i=0; i<objects.length; i++){
            percent =  floor(objects[i].confidence * 100);
            fill("white");
            text(objects[i].label + " " + percent + "%", objects[i].x+10, objects[i].y+20);
            noFill();
            stroke("white");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function start(){
    // objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Detecting objects..";
}




