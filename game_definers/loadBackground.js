import backgrounds from "/game_definers/statics/backgrounds.js";

// This file contains a default function to load background, 
// It is independent of the context, and act as an utility function.

// Last updated: 07 Nov 2024 by Pratyaksh

export function loadBackground(scene, BackgroundId){
    console.log(`%cLoading background with Id ${BackgroundId}` , 'color: black; font-size: 12px; background-color: green; padding: 2px;');
    let background = backgrounds[BackgroundId-1]
    background.forEach((bg)=>{
        scene.load.image(bg.name, bg.path)
    })
    console.log(`Loaded Background with Id: ${background}`)
    console.log(`Total Components: ${background.length}`)
}