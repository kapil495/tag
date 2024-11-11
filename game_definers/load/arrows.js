import { arrows } from "/game_definers/statics/arrows.js"
export function loadArrows(sceneName) {
    arrows.forEach(arrow => {
        sceneName.load.image(arrow.name,arrow.path)
    });
}