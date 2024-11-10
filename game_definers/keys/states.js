export function keyState(sceneName){
    return {
        wKey : sceneName.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
        aKey : sceneName.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        sKey : sceneName.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        dKey : sceneName.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
    }
}