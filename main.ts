namespace SpriteKind {
    export const wall = SpriteKind.create()
    export const upperwall = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.upperwall, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    if (!(controller.anyButton.isPressed())) {
        animation.stopAnimation(animation.AnimationTypes.All, mainSprit)
        mainSprit.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mainSprit,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d e e e e e f . . . 
        . . . f e 4 e d d 4 f . . . . . 
        . . . f 2 2 e d d e f . . . . . 
        . . f f 5 5 f e e f f f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e d d 4 . . . . 
        . . . f 2 2 2 2 e d d e . . . . 
        . . f f 5 5 4 4 f e e f . . . . 
        . . f f f f f f f f f f . . . . 
        . . . f f f . . . f f . . . . . 
        `,img`
        . . . . f f f f f f . . . . . . 
        . . . f 2 f e e e e f f . . . . 
        . . f 2 2 2 f e e e e f f . . . 
        . . f e e e e f f e e e f . . . 
        . f e 2 2 2 2 e e f f f f . . . 
        . f 2 e f f f f 2 2 2 e f . . . 
        . f f f e e e f f f f f f f . . 
        . f e e 4 4 f b e 4 4 e f f . . 
        . . f e d d f 1 4 d 4 e e f . . 
        . . . f d d d d 4 e e e f . . . 
        . . . f e 4 4 4 e e f f . . . . 
        . . . f 2 2 2 e d d 4 . . . . . 
        . . . f 2 2 2 e d d e . . . . . 
        . . . f 5 5 4 f e e f . . . . . 
        . . . . f f f f f f . . . . . . 
        . . . . . . f f f . . . . . . . 
        `],
    50,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (zero) {
        if (sprite.bottom <= otherSprite.bottom) {
            stairBoarder = [otherSprite.left, otherSprite.right]
            mainSprit.bottom = otherSprite.top
            mainSprit.ay = 0
            mainSprit.vy = otherSprite.vy
            second = true
            zero = false
            info.changeScoreBy(1)
        }
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mainSprit,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . 4 d d e 4 4 4 e f . . . 
        . . . . e d d e 2 2 2 2 f . . . 
        . . . . f e e f 4 4 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e e e d d d f . . . 
        . . . . . f 4 d d e 4 e f . . . 
        . . . . . f e d d e 2 2 f . . . 
        . . . . f f f e e f 5 5 f f . . 
        . . . . f f f f f f f f f f . . 
        . . . . . f f . . . f f f . . . 
        `,img`
        . . . . . . f f f f f f . . . . 
        . . . . f f e e e e f 2 f . . . 
        . . . f f e e e e f 2 2 2 f . . 
        . . . f e e e f f e e e e f . . 
        . . . f f f f e e 2 2 2 2 e f . 
        . . . f e 2 2 2 f f f f e 2 f . 
        . . f f f f f f f e e e f f f . 
        . . f f e 4 4 e b f 4 4 e e f . 
        . . f e e 4 d 4 1 f d d e f . . 
        . . . f e e e 4 d d d d f . . . 
        . . . . f f e e 4 4 4 e f . . . 
        . . . . . 4 d d e 2 2 2 f . . . 
        . . . . . e d d e 2 2 2 f . . . 
        . . . . . f e e f 4 5 5 f . . . 
        . . . . . . f f f f f f . . . . 
        . . . . . . . f f f . . . . . . 
        `],
    50,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    if (!(controller.anyButton.isPressed())) {
        animation.stopAnimation(animation.AnimationTypes.All, mainSprit)
        mainSprit.setImage(img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f e e d d d d d d e e f . . 
            . . . f e e 4 4 4 4 e e f . . . 
            . . e 4 f 2 2 2 2 2 2 f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.wall, function (sprite, otherSprite) {
    game.over(false, effects.dissolve)
})
let stairBoarder: number[] = []
let second = false
let zero = false
let mainSprit: Sprite = null
music.setVolume(15)
info.setScore(0)
scene.setBackgroundColor(13)
let _wall_ = img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    .11111111111111.1111111111111.1111111111111.1111111111111..11111111111111.1111111111111.1111111111111..1111111111111..1111111111111.1111111111111.1111111111111.
    ..111111111111...11111111111...11111111111...11111111111....111111111111...11111111111...11111111111....11111111111....11111111111...11111111111...11111111111..
    ...1111111111.....111111111.....111111111.....111111111......1111111111.....111111111.....111111111......111111111......111111111.....111111111.....111111111...
    ....11111111.......1111111.......1111111.......1111111........11111111.......1111111.......1111111........1111111........1111111.......1111111.......1111111....
    .....111111.........11111.........11111.........11111..........111111.........11111.........11111..........11111..........11111.........11111.........111111....
    ......1111...........111...........111...........111............1111...........111...........111............111............111...........111...........1111.....
    .......11.............1.............1.............1..............11.............1.............1..............1..............1.............1.............11......
    `
let upperEndWall = sprites.create(img`
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    .11111111111111.1111111111111.1111111111111.1111111111111..11111111111111.1111111111111.1111111111111..1111111111111..1111111111111.1111111111111.1111111111111.
    ..111111111111...11111111111...11111111111...11111111111....111111111111...11111111111...11111111111....11111111111....11111111111...11111111111...11111111111..
    ...1111111111.....111111111.....111111111.....111111111......1111111111.....111111111.....111111111......111111111......111111111.....111111111.....111111111...
    ....11111111.......1111111.......1111111.......1111111........11111111.......1111111.......1111111........1111111........1111111.......1111111.......1111111....
    .....111111.........11111.........11111.........11111..........111111.........11111.........11111..........11111..........11111.........11111.........111111....
    ......1111...........111...........111...........111............1111...........111...........111............111............111...........111...........1111.....
    .......11.............1.............1.............1..............11.............1.............1..............1..............1.............1.............11......
    `, SpriteKind.upperwall)
upperEndWall.setPosition(80, -2)
_wall_.flipY()
let EndWall = sprites.create(_wall_, SpriteKind.wall)
EndWall.setPosition(80, 122)
mainSprit = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mainSprit, 100, 0)
mainSprit.setPosition(80, 60)
let stair = sprites.create(img`
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
    `, SpriteKind.Projectile)
stair.setPosition(80, 70)
stair.z = -1
stair.vy = -30 - info.score() / 10
mainSprit.ay = 300
zero = true
let first = true
second = true
game.showLongText("功夫小子下樓梯" + "     " + "左右鍵移動", DialogLayout.Bottom)
game.onUpdate(function () {
    if (mainSprit.right < stairBoarder[0] || mainSprit.left > stairBoarder[1]) {
        if (second) {
            mainSprit.vy = 30
            mainSprit.ay = 300
            second = false
            zero = true
        }
    }
})
game.onUpdateInterval(1000, function () {
    if (!(first)) {
        stair = sprites.createProjectileFromSide(img`
            b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
            b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
            `, 0, -30 - info.score() / 10)
        stair.setFlag(SpriteFlag.AutoDestroy, true)
        stair.setPosition(randint(16, 144), 120)
        stair.z = -1
    } else {
        first = false
    }
})
