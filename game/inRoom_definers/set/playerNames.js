
function setPlayerNames(sceneName , boxObjList , log){
    let playerNamesObjList = []
    for (let i = 0; i < boxObjList.length; i++) {
        let text = sceneName.add.text(boxObjList[i].x , boxObjList[i].y, `pikachuPII PUL`, {
            font: `${boxObjList[i].displayWidth / 14}px Arial`,
            fill: '#ffffff',
            align: 'center'
        });
        text.setOrigin(0.5,0.5)
        playerNamesObjList.push(text)
        if (log){
            console.log("added space for player " , i );
        }
    }
    return playerNamesObjList
}
export {setPlayerNames}