
# tag
this is a online multiplayer game which is of 30 players .
there would be 3 randomly choosen persons that will be chasers and cath all the rest 27 player.
these 3 persons are given color as red , blue , yellow (expected to be different ash ketchum from pokemon cap but sprite not found)
whenever a runner got cought , he/she becomes the part of team red / yellow / blue and now he/she has to cath rest of the runners but heres a twist . they have to defeat themm by attacking then team leader will come and throw pokeball to cath.
as the runners decreses , the speed of runners increases



# file folder structure
1>   "/assets"  :=  all images (spritesheets , backgrounds) , audio files to be stored. for its internal structure go to [/assets](#/assets)<br>

2>   "/config/portals.js"  :=  it has all the routes used for serving the assets , js files and any additional file . 
instruction only when you want to import some file or image or anything<br> 
♨️always add the folder directory. by this all of your files inside that folder are accesible by anywhere in your code.<br><br>

3>   "/game_definers"  :=  contains all of the js files and configs for sprites, background , animations and scenes required for the game.js (present in /public) . for its internal structure go to [/game_definers](#game_definers)<br><br>
4>   "/public"  :=  contains index.js and game.js file . ♨️don't add anything inside it .<br><br>

5>   "/index.js"  :=  you know , i know , we all know . <br><br>

 
## /assets

1.1 >  "/assets/background"  :=  no need to write<br><br>
1.2 >  "/assets/players/runners"  :=  containes sprites sheets for runners (rest 27 players)<br><br>
1.3 >  "assets/players/chasers"  :=  contains sprites sheets for the chasers (those 3 players)<br><br>

## /game_definers

3.1 >  "/game_definers/scenes"  :=  contains all the scenes file for the game<br><br>
3.2 >  "/game_definers/statics"  :=  constains all the positions, paths , sprite sheet configs , etc which are to be used for animations and scenes. for more go to [/game_definers/statics](#/game_definers/statics)<br><br>
3.3 >  "/game_definers/load"  :=  contains all the functions for loading all the asssets.<br><br>
3.4 >  "/game_definers/animate"  :=  all the functions related to || loading || of animation of wither chaser or runner are there.<br><br>
3.5 >  "/game_definers/set"  :=  all the functions related to setting up the initial positions of background , chasers , runners , etc.<br><br>
3.6 >  "/game_definers/keys"  :=  all the states of keyboard key if pressend or not are present inside it. for aadding the new key for checking its state if pressed or not , add that key in "/game_definers/statics/keys.js". then it can be accesible by anywhere in code by<br>
//gameScene.js 
stateOf.__key
<br>
3.6 >  "/game_definers/animate"  :=  responsible for animation of chaser and runners . can be used by<br>
//gameScene.js
//currently chaserAnims has been made . runner in development
chaserObjList[chaserNumber].play(chaserObjAnimsList[chaserNumber][AnimationNumber])
<br>
3.7 >  "game_definers/update"  :=  constains all the files responsible for logic. all the functions of to be used inside the update() of scenes will be out from this directory . for internal structure refer to [/game_definers/update](#/game_definers/update)<br><br>  
## /game_definers/statics
3.2.1 >  "/game_definers/statics/background.js"  :=  contains the list of possible backgroundsin form of array backggrounds . 

         name : by which that image will be refferd
         path : path of the image
         position : [x,y] position of the origin of the image (origin will be used as referance) . it will be placed initially
         origin : [x,y] origin of the image given in percent [0,0] top-left [1,1] bottom right

3.2.2 >  "/game_definers/statics/chasers.js"  :=  constain the list of all the chasers with their sprite sheet's frame width and height

         path : path of the sprite sheet
         frameWidth : Width of each frame
         frameHeight : Height of each frame
         name : by which that image will be refferd
         position : [x,y] position of the origin of the image (origin will be used as referance) . it will be placed initially
         origin : [x,y] origin of the image given in percent [0,0] top-left [1,1] bottom right

3.2.3 >  "/game_definers/statics/chaserAnims.js"  :=  contains the parameter for the animation of chaser.🤞currently not developed this fully flexible.
         
         key : animation name like "left" by which it will be called .'♨️note that in game.js for using animation you have to do like this .  chaserName.play(chaserName + animationKey)
         start : frame number from which the animation will start 
         end : frame number till which animation 
         repeat : -1 . means infinity duration

3.2.4 >  "/game_definers/statics/runners.js"  :=  constain the list of all the runners with their sprite sheet's frame width and height 🤞currently not developed

         path : path of the sprite sheet
         frameWidth : Width of each frame
         frameHeight : Height of each frame
         name : by which that image will be refferd
         position : [x,y] position of the origin of the image (origin will be used as referance) . it will be placed initially
         origin : [x,y] origin of the image given in percent [0,0] top-left [1,1] bottom right
## /game_definers/update

3.7.1 >  "/game_definers/update/background.js"  :=  contains a f