function preload() {

}

function setup() {
    canvas = createCanvas(1000, 700)
    canvas.position(183, 65);
    video = createCapture(VIDEO);
    video.hide()

}

function draw() {
    image(video, 150, 100, 700, 500);
    // 
    fill("orange");
    stroke("transparent");
    square(5, 75, 990, 50);
    // 
    fill("yellow");
    stroke("transparent");
    square(50, 75, 50, 600);
    // 
    fill("green");
    stroke("transparent");
    square(900, 75, 50, 600);
    // 
    fill("purple");
    stroke("transparent");
    square(5, 585, 990, 50);
    // 
    // 
    //
    fill(255, 0, 0);
    stroke("transparent")
    circle(76, 100, 150, 150);
    // 
    fill(255, 255, 0);
    stroke("transparent")
    circle(924, 100, 150, 150);
    // 
    fill(0, 255, 0);
    stroke("transparent")
    circle(76, 605, 150, 150);
    // 
    fill(0, 0, 255);
    stroke("transparent")
    circle(924, 605, 150, 150);
    // 
}

function take_and_download_snap() {
    save("Webcam.png");
}