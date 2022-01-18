function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,250);

    video = createCapture(VIDEO);
    video.hide();

    

}

function draw(){

    rect(30,20,560,10);
    
    rect(25,20,10,430);

    rect(580,20,10,430);

    rect(30,440,560,10);

    circle(30,26,20);

    circle(585,26,20);

    circle(30,445,20);

    circle(585,445,20);

    image(video,40,40,535,390);
    

}

function take_snapshot(){
    save("download.png");
}
