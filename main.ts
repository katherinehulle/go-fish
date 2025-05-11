controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tiles.tileAtLocationEquals(mySprite.tilemapLocation(), assets.tile`myTile3`) || tiles.tileAtLocationEquals(mySprite.tilemapLocation(), assets.tile`myTile10`)) {
        if (randint(0, 10) > 5) {
            scene.cameraShake(4, 500)
            info.startCountdown(5)
            myEnemy = sprites.create(img`
                .............ccfff..............
                ...........ccddbcf..............
                ..........ccddbbf...............
                ..........fccbbcf...............
                .....99991ccccc111.........ccc..
                ...888888999999989999...1ccbbc..
                ..888888888888888888888199911...
                f8888888888888888888888888888...
                ff88888888888888888888888888....
                ffff88888888888888888888888f....
                .ffff8888888888888888888ffff....
                ..fffffff88ffffffff8fffffffff...
                ...ffffffffffffffffffff..ffff...
                ....fffffffffffffffff.....ffff..
                ........fffffffffff........fff..
                .............fffff..............
                `, SpriteKind.Enemy)
            myEnemy.setPosition(75, 59)
            myEnemy.follow(mySprite, 50)
        } else {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . c c . . . . . . . 
                . . . . . . . c 5 c . . . . . . 
                . . . . c c c 5 5 5 c c . . . . 
                . . c c b c 5 5 5 5 c c c c . . 
                . c b b 5 b 5 5 5 5 b 5 b b c . 
                . c b 5 5 b b 5 5 b b 5 5 b c . 
                . . f 5 5 5 b b b b 5 5 5 c . c 
                . . f f 5 5 5 5 5 5 5 5 f . . c 
                . . f f e e b f e e e f . . c c 
                . . f f f b 1 f b b e f . c c . 
                . . . f f b b b b b b f c c . . 
                . . . e e f e e e e f c c . . . 
                . . . e b b e b b 5 c c . . . . 
                . . . e b b e 5 c c c f . . . . 
                . . . . e e c c c 5 b c . . . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . c c . . . . . . . 
                . . . . . . c 5 c c . . . . . . 
                . . . . c c c 5 5 5 c c . . . . 
                . . c c b c 5 5 5 5 c c c c . . 
                . c b b 5 b 5 5 5 5 b 5 b b c . 
                . c b 5 5 b b 5 5 b b 5 5 b c . 
                . . f 5 5 5 b b b b 5 5 5 c . c 
                . . f f 5 5 5 5 5 5 5 5 f . c c 
                . . f f e e b f e e e f . c c f 
                . . f f f b 1 f b b e f c c . f 
                . . . f f e e b b b b c c . . f 
                . . . f e b b e e e c c . . . 2 
                . . . . e b b e c c c f . . . 1 
                . . . . f e e c c 5 5 c . . . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . c c . . . . . . . 
                . . . . . . c 5 c c . . . . . . 
                . . . . c c c 5 5 5 c c . . . . 
                . . c c b c 5 5 5 5 c c c c . . 
                . c b b 5 b 5 5 5 5 b 5 b b c . 
                . c b 5 5 b b 5 5 b b 5 5 b c . 
                . . f 5 5 5 b b b b 5 5 5 c . c 
                . . f f 5 5 5 5 5 5 5 5 f . c c 
                . . f f e e b f e e e f . c c f 
                . . f f f b 1 f b b e f c c . f 
                . . . f f e e b b b b c c . . f 
                . . . f e b b e e e c c . . . f 
                . . . . e b b e c c c f . . . f 
                . . . . f e e c c 5 5 c . . . 1 
                . . . . . f f f f f f . . . . 2 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . c c . . . . . . . 
                . . . . . . c 5 c c . . . . . . 
                . . . . c c c 5 5 5 c c . . . . 
                . . c c b c 5 5 5 5 c c c c . . 
                . c b b 5 b 5 5 5 5 b 5 b b c . 
                . c b 5 5 b b 5 5 b b 5 5 b c . 
                . . f 5 5 5 b b b b 5 5 5 c . c 
                . . f f 5 5 5 5 5 5 5 5 f . c c 
                . . f f e e b f e e e f . c c f 
                . . f f f b 1 f b b e f c c . f 
                . . . f f e e b b b b c c . . f 
                . . . f e b b e e e c c . . . f 
                . . . . e b b e c c c f . . . f 
                . . . . f e e c c 5 5 c . . . 1 
                . . . . . f f f f f f . . . . 2 
                `],
            500,
            false
            )
            pause(4000)
            music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
            info.changeScoreBy(1)
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . c c . . . . . . . 
                . . . . . . c 5 c c . . . . . . 
                . . . . c c c 5 5 5 c c . . . . 
                . . c c b c 5 5 5 5 c c c c . . 
                . c b b 5 b 5 5 5 5 b 5 b b c . 
                . c b 5 5 b b 5 5 b b 5 5 b c . 
                . . f 5 5 5 b b b b 5 5 5 c . c 
                . . f f 5 5 5 5 5 5 5 5 f . c c 
                . . f f e e b f e e e f . c c f 
                . . f f f b 1 f b b e f c c . f 
                . . . f f e e b b b b c c . . f 
                . . . f e b b e e e c c . . . f 
                . . . . e b b e c c c f . . . f 
                . . . . f e e c c 5 5 c . . . 1 
                . . . . . f f f f f f . . . . 2 
                `,img`
                . . . . . . . c c . . . . . . . 
                . . . . . . . c 5 c . . . . . . 
                . . . . c c c 5 5 5 c c . . . . 
                . . c c b c 5 5 5 5 c c c c . . 
                . c b b 5 b 5 5 5 5 b 5 b b c . 
                . c b 5 5 b b 5 5 b b 5 5 b c . 
                . . f 5 5 5 b b b b 5 5 5 c . . 
                . . f f 5 5 5 5 5 5 5 5 f . . c 
                . . f f e e b f e e e f . . c c 
                . . f f f b 1 f b b e f . c c f 
                . . . f f b b b b b b f c c . f 
                . . . e e f e e e e f c c . . f 
                . . . e b b e b b 5 c c . . . f 
                . . . e b b e 5 c c c f . . . 6 
                . . . . e e c c c 5 b c . . 6 6 
                . . . . . f f f f f f . . . 6 6 
                `,img`
                . . . . . . . c c . . . . . . . 
                . . . . . . . c 5 c . . . . . . 
                . . . . c c c 5 5 5 c c . . . . 
                . . c c b c 5 5 5 5 c c c c . . 
                . c b b 5 b 5 5 5 5 b 5 b b c . 
                . c b 5 5 b b 5 5 b b 5 5 b c . 
                . . f 5 5 5 b b b b 5 5 5 c . . 
                . . f f 5 5 5 5 5 5 5 5 f . . . 
                . . f f e e b f e e e f . . . . 
                . . f f f b 1 f b b e f . . . . 
                . . . f f b b b b b b f . . . . 
                . . . f f f e e e e f 6 6 . . . 
                . . . . f f 5 5 5 b b e 6 . . . 
                . . . . . f 5 5 b b b e 6 . . . 
                . . . . . f 5 5 c e e e . . . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c . . . . . . 
                . . . . . . . c 5 c . . . . . . 
                . . . . c c c 5 5 c c c . . . . 
                . . c c b c 5 5 5 5 c c c c . . 
                . c b b 5 b 5 5 5 5 b 5 b b c . 
                . c b 5 5 b b 5 5 b b 5 5 b c . 
                . . f 5 5 5 b b b b 5 5 5 c . . 
                . . f f 5 5 5 5 5 5 5 5 f f . . 
                . . f f f b f e e f b f f f . . 
                . . f f f 1 f b b f 1 f f f . . 
                . . . f e e e 6 6 e e 6 f . . . 
                . . . e b b 6 6 6 6 6 b e . . . 
                . . . e b b 6 6 6 6 b 6 e . . . 
                . . . . c e e 6 6 e e c . . . . 
                . . . . . f f f f f f f . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c . . . . . . 
                . . . . . . . c 5 c . . . . . . 
                . . . . c c c 5 5 c c c . . . . 
                . . c c b c 5 5 5 5 c c c c . . 
                . c b b 5 b 5 5 5 5 b 5 b b c . 
                . c b 5 5 b b 5 5 b b 5 5 b c . 
                . . f 5 5 5 b b b b 5 5 5 c . . 
                . . f f 5 5 5 5 5 5 5 5 f f . . 
                . . f f f b f e e f b f f f . . 
                . . f f d 1 f b b f 1 d f f . . 
                . . . f e d e 6 6 e d 6 f . . . 
                . d d d b b 6 6 6 6 6 b d d d . 
                . . . e b b 6 6 6 6 b 6 e . . . 
                . . . . c d e 6 6 e d c . . . . 
                . . . . d f f f f f f d . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c . . . . . . 
                . . . . . . . c 5 c . . . . . . 
                . . . . c c c 5 5 c c c . . . . 
                . . c c b c 5 5 5 5 c c c c . . 
                . c b b 5 b 5 5 5 5 b 5 b b c . 
                . c b 5 5 b b 5 5 b b 5 5 b c . 
                . . f 5 5 5 b b b b 5 5 5 c . . 
                . . f f 5 5 5 5 5 5 5 5 f f . . 
                . . f f f b f e e f b f f f . . 
                . . f f f 1 f b b f 1 f f f . . 
                . . . f e e e 6 6 e e 6 f . . . 
                . . . e b b 6 6 6 6 6 b e . . . 
                . . . e b b 6 6 6 6 b 6 e . . . 
                . . . . c e e 6 6 e e c . . . . 
                . . . . . f f f f f f f . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c . . . . . . 
                . . . . . . . c 5 c . . . . . . 
                . . . . c c c 5 5 c c c . . . . 
                . . c c b c 5 5 5 5 c c c c . . 
                . c b b 5 b 5 5 5 5 b 5 b b c . 
                . c b 5 5 b b 5 5 b b 5 5 b c . 
                . . f 5 5 5 b b b b 5 5 5 c . . 
                . . f f 5 5 5 5 5 5 5 5 f f . . 
                . . f f f b f e e f b f f f . . 
                . . f f d 1 f b b f 1 d f f . . 
                . . . f e d e 6 6 e d 6 f . . . 
                . d d d b b 6 6 6 6 6 b d d d . 
                . . . e b b 6 6 6 6 b 6 e . . . 
                . . . . c d e 6 6 e d c . . . . 
                . . . . d f f f f f f d . . . . 
                `],
            500,
            false
            )
            pause(4000)
            mySprite.sayText("I caught a fish!", 2000, true)
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . c c c . . . . . . 
                . . . . . . c b 5 c . . . . . . 
                . . . . c c c 5 5 c c c . . . . 
                . . c c b c 5 5 5 5 c c c c . . 
                . c b b 5 b 5 5 5 5 b 5 b b c . 
                . c b 5 5 b b 5 5 b b 5 5 b c . 
                . . f 5 5 5 b b b b 5 5 5 c . . 
                . . f f 5 5 5 5 5 5 5 5 f f . . 
                . . f f f b f e e f b f f f . . 
                . . f f f 1 f b b f 1 f f f . . 
                . . . f f b b b b b b f f . . . 
                . . . e e f e e e e f e e . . . 
                . . e b c b 5 b b 5 b f b e . . 
                . . e e f 5 5 5 5 5 5 f e e . . 
                . . . . c b 5 5 5 5 b c . . . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . c c . . . . . . . . 
                . . . . . . c 5 c . . . . . . . 
                . . . . c c c 5 5 c c c . . . . 
                . . c c c c 5 5 5 5 c b c c . . 
                . c b b 5 b 5 5 5 5 b 5 b b c . 
                . c b 5 5 b b 5 5 b b 5 5 b c . 
                . . c 5 5 5 b b b b 5 5 5 f . . 
                . . f f 5 5 5 5 5 5 5 5 f f . . 
                . . f f f b f e e f b f f f . . 
                . . f f f 1 f b b f 1 f f f . . 
                . . . f f b b b b e e e f . . . 
                . . e b b f e e e e b b e . . . 
                . . e e f 5 5 b b e b b e . . . 
                . . . f 5 5 5 5 5 e e c . . . . 
                . . . . f f f f f f f . . . . . 
                `,img`
                . . . . . . c c c . . . . . . . 
                . . . . . . c 5 b c . . . . . . 
                . . . . c c c 5 5 c c c . . . . 
                . . c c c c 5 5 5 5 c b c c . . 
                . c b b 5 b 5 5 5 5 b 5 b b c . 
                . c b 5 5 b b 5 5 b b 5 5 b c . 
                . . c 5 5 5 b b b b 5 5 5 f . . 
                . . f f 5 5 5 5 5 5 5 5 f f . . 
                . . f f f b f e e f b f f f . . 
                . . f f f 1 f b b f 1 f f f . . 
                . . . f f b b b b b b f f . . . 
                . . . e e f e e e e f e e . . . 
                . . e b f b 5 b b 5 b c b e . . 
                . . e e f 5 5 5 5 5 5 f e e . . 
                . . . . c b 5 5 5 5 b c . . . . 
                . . . . . f f f f f f . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . c c . . . . . . 
                . . . . . . . c 5 c . . . . . . 
                . . . . c c c 5 5 c c c . . . . 
                . . c c b c 5 5 5 5 c c c c . . 
                . c b b 5 b 5 5 5 5 b 5 b b c . 
                . c b 5 5 b b 5 5 b b 5 5 b c . 
                . . f 5 5 5 b b b b 5 5 5 c . . 
                . . f f 5 5 5 5 5 5 5 5 f f . . 
                . . f f f b f e e f b f f f . . 
                . . f f f 1 f b b f 1 f f f . . 
                . . . f e e e b b b b f f . . . 
                . . . e b b e e e e f b b e . . 
                . . . e b b e b b 5 5 f e e . . 
                . . . . c e e 5 5 5 5 5 f . . . 
                . . . . . f f f f f f f . . . . 
                `],
            500,
            true
            )
        }
    } else {
        mySprite.sayText("I cant fish here!", 2000, true)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.sayText("Press B to Go Fish", 2000, true)
})
info.onCountdownEnd(function () {
    sprites.destroy(myEnemy)
})
info.onScore(1, function () {
	
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
    game.gameOver(false)
})
info.onScore(3, function () {
    game.gameOver(true)
})
let myEnemy: Sprite = null
let mySprite: Sprite = null
info.setScore(0)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . c c c . . . . . . 
    . . . . . . c b 5 c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b c b 5 b b 5 b f b e . . 
    . . e e f 5 5 5 5 5 5 f e e . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
mySprite.setBounceOnWall(true)
mySprite.setPosition(13, 60)
animation.runImageAnimation(
mySprite,
[img`
    . . . . . . . c c c . . . . . . 
    . . . . . . c b 5 c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b c b 5 b b 5 b f b e . . 
    . . e e f 5 5 5 5 5 5 f e e . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . c c . . . . . . . . 
    . . . . . . c 5 c . . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c c c 5 5 5 5 c b c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . c 5 5 5 b b b b 5 5 5 f . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b e e e f . . . 
    . . e b b f e e e e b b e . . . 
    . . e e f 5 5 b b e b b e . . . 
    . . . f 5 5 5 5 5 e e c . . . . 
    . . . . f f f f f f f . . . . . 
    `,img`
    . . . . . . c c c . . . . . . . 
    . . . . . . c 5 b c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c c c 5 5 5 5 c b c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . c 5 5 5 b b b b 5 5 5 f . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b f b 5 b b 5 b c b e . . 
    . . e e f 5 5 5 5 5 5 f e e . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . c c . . . . . . 
    . . . . . . . c 5 c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c b c 5 5 5 5 c c c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . f 5 5 5 b b b b 5 5 5 c . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f e e e b b b b f f . . . 
    . . . e b b e e e e f b b e . . 
    . . . e b b e b b 5 5 f e e . . 
    . . . . c e e 5 5 5 5 5 f . . . 
    . . . . . f f f f f f f . . . . 
    `],
500,
true
)
music.play(music.stringPlayable("G E F E G A E C ", 120), music.PlaybackMode.LoopingInBackground)
tiles.setWallAt(tiles.getTileLocation(5, 6), true)
tiles.setWallAt(tiles.getTileLocation(6, 6), true)
tiles.setWallAt(tiles.getTileLocation(6, 5), true)
tiles.setWallAt(tiles.getTileLocation(7, 5), true)
tiles.setWallAt(tiles.getTileLocation(8, 5), true)
tiles.setWallAt(tiles.getTileLocation(9, 5), true)
tiles.setWallAt(tiles.getTileLocation(9, 6), true)
tiles.setWallAt(tiles.getTileLocation(10, 6), true)
tiles.setWallAt(tiles.getTileLocation(10, 7), true)
tiles.setWallAt(tiles.getTileLocation(10, 8), true)
tiles.setWallAt(tiles.getTileLocation(10, 9), true)
tiles.setWallAt(tiles.getTileLocation(9, 10), true)
tiles.setWallAt(tiles.getTileLocation(8, 10), true)
tiles.setWallAt(tiles.getTileLocation(7, 10), true)
tiles.setWallAt(tiles.getTileLocation(6, 10), true)
tiles.setWallAt(tiles.getTileLocation(5, 9), true)
tiles.setWallAt(tiles.getTileLocation(6, 8), true)
tiles.setWallAt(tiles.getTileLocation(6, 7), true)
game.onUpdate(function () {
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
})
