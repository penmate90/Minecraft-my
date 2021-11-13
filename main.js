var image_height=30;
var image_width=30;

player_height=100;
player_width=50;

player_x=10;
player_y=10;

var canvas= new fabric.Canvas("myCanvas");

player_object=0;

function player_update() {
    fabric.Image.fromURL("player.png", function (Img) {
    player_object=Img;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(70);
    player_object.set({top:player_y, left:player_x
    }
        
    );
    canvas.add(player_object);

    });
}

function new_image(block_image) {
    fabric.Image.fromURL(block_image, function (Img) {
       image_block=Img;
       image_block.scaleToWidth(image_width);
       image_block.scaleToHeight(image_height);
       image_block.set({top:player_y, left:player_x}
        );

       canvas.add(image_block); 
    });
    
}
window.addEventListener("keydown", my_Keydown)

function my_Keydown(e) {
    keyPressed=e.keyCode
console.log(keyPressed);
    if (e.shiftKey ==true && keyPressed==107) {
        image_height=image_height +10;
        image_width=image_width +10;
        document.getElementById("width_now").innerHTML=image_width;
        document.getElementById("now_height").innerHTML=image_height;
        console.log("image size increased by 10 pixels")
    }

    if (e.shiftKey ==true && keyPressed== 109){
console.log(keyPressed)

       image_height=image_height -10;
       image_width=image_width -10;
       document.getElementById("width_now").innerHTML=image_width;
       document.getElementById("now_height").innerHTML=image_height;
       console.log("image size decreased by 10 pixels")
    }

    if (keyPressed==38) {
         up();
         console.log("up");
    }
    if (keyPressed==37) {
        left();
        console.log("left");

        
    }
if (keyPressed==40) {

    down();
    console.log("down");
    
}




if (keyPressed==39) {
    right();
    console.log("right");

}

if (keyPressed==84) {
    console.log("tree log should be appeared");
    new_image('trunk.jpg');
}

if (keyPressed==68) {
    new_image('dark_green.png');
    console.log("dark green block should appear now");
}
if (keyPressed==76) {
    new_image('light_green.png');
    console.log("light green object appeared");
}
if (keyPressed==71) {
    new_image("ground.png");
    console.log("ground appeared");
}
if (keyPressed==87) {
    new_image('wall.jpg');
    console.log("wall appeared");
}
if (keyPressed==89) {
    console.log("yes y pressed")
    new_image('yellow_wall.png');
    console.log("yellow wall appeared");
    
}
if (keyPressed==82) {
    new_image('roof.jpg');
    console.log("roof appeared");
}
if (keyPressed==67) {
    new_image('cloud.jpg');
    console.log("cloud appeared");
}
if (keyPressed==85) {
    new_image('unique.png');
    console.log("unique block appeared");
    
}




}

function left() {
    
    if (player_x>0) {
        

        player_x=player_x-20;
        console.log("player width ="+player_width);
        console.log("player x="+ player_x + "player y="+ player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function right() {
    if (player_x<1150) {
        player_x=player_x+20;
        console.log("palyer_width="+player_width);
        console.log("palyer x="+player_x+"player y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}
function up() {
    if (player_y>0) {
        player_y=player_y-20;
        console.log("player height="+player_height);
        console.log("player x="+player_x+"player y = "+player_y);
        canvas.remove(player_object);
        player_update();
    }
}



function down() {
    if (player_y<700) {
        player_y=player_y+20;
        console.log("player height="+player_height);
        console.log("player x="+player_x+"player y="+player_y);
        canvas.remove(player_object);
        player_update();
    }
}


