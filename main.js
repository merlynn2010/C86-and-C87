var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object= "";
var block_image_object="";
function player_update()
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;

        block_image_object.scaleToHeight(block_image_height);
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);

    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;

    if(e.shiftKey == true && keyPressed == '80');
    {
        block_image_width = block_image_width + 10;
        block_image_height= block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
   }

   if(e.shiftKey == true && keyPressed == '77');
    {
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
   }

   if(keyPressed == '38')
   {
       up();
   }
   if(keyPressed == '40')
   {
       down();
   }
   if(keyPressed == '37')
   {
       left();
   }
   if(keyPressed == '39')
   {
       right();
   }
   
   if(keyPressed == '87')
   {
   new_image('spiderman_body.png');
   }
   if(keyPressed == '71')
   {
   new_image('spiderman_face.png');
   }
   if(keyPressed == '76')
   {
   new_image('spiderman_left_hand.png');
   }
   if(keyPressed == '84')
   {
   new_image('spiderman_right_hand.png');
   }
   if(keyPressed == '82')
   {
   new_image('spiderman_legs.png');
   }
   if(keyPressed == '89')
   {
   new_image('thor_face.png');
   }
   if(keyPressed == '68')
   {
   new_image('thor_left_hand.png');
   }
   if(keyPressed == '85')
   {
   new_image('thor_right_hand.png');
   }
}

function up()
{
    if(player_y >=0)
    {
        player_y = player_y - block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function down()
{
    if(player_y <=500)
    {
        player_y = player_y + block_image_height;
        canvas.remove(player_object);
        player_update();
    }
}

function left()
{
    if(player_x >=0)
    {
        player_x = player_x - block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}

function right()
{
    if(player_x <=850)
    {
        player_x = player_x + block_image_width;
        canvas.remove(player_object);
        player_update();
    }
}