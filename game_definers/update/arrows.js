let dx ;
let dy ;
let slope ;
export function updateArrows(sceneName , arrowObj , obj){
    dx = obj.x - arrowObj.x
    dy = obj.y - arrowObj.y
    slope = dx/dy 
    arrowObj.rotation= Math.atan2(dy, dx);
}