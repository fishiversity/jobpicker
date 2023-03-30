controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    for (let index = 0; index < 5; index++) {
        pick1 = text_list._pickRandom()
        if (pick1 == "a") {
            earphones_and_mice.setImage(assets.image`red`)
        } else if (pick1 == "b") {
            earphones_and_mice.setImage(assets.image`blue`)
        } else if (pick1 == "c") {
            earphones_and_mice.setImage(assets.image`yellow`)
        } else {
            earphones_and_mice.setImage(assets.image`start7`)
        }
        pause(200)
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    }
    random1 = randint(0, 3)
    pick1 = text_list.removeAt(random1)
    if (pick1 == "a") {
        earphones_and_mice.setImage(assets.image`red`)
    } else if (pick1 == "b") {
        earphones_and_mice.setImage(assets.image`blue`)
    } else if (pick1 == "c") {
        earphones_and_mice.setImage(assets.image`yellow`)
    } else {
        earphones_and_mice.setImage(assets.image`start7`)
    }
    music.play(music.melodyPlayable(music.thump), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 3; index++) {
        pick2 = text_list._pickRandom()
        if (pick2 == "a") {
            floor.setImage(assets.image`red`)
        } else if (pick2 == "b") {
            floor.setImage(assets.image`blue`)
        } else if (pick2 == "c") {
            floor.setImage(assets.image`yellow`)
        } else {
            floor.setImage(assets.image`start7`)
        }
        pause(200)
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    }
    random2 = randint(0, 2)
    pick2 = text_list.removeAt(random2)
    if (pick2 == "a") {
        floor.setImage(assets.image`red`)
    } else if (pick2 == "b") {
        floor.setImage(assets.image`blue`)
    } else if (pick2 == "c") {
        floor.setImage(assets.image`yellow`)
    } else {
        floor.setImage(assets.image`start7`)
    }
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    for (let index = 0; index < 2; index++) {
        pick3 = text_list._pickRandom()
        if (pick3 == "a") {
            table.setImage(assets.image`red`)
        } else if (pick3 == "b") {
            table.setImage(assets.image`blue`)
        } else if (pick3 == "c") {
            table.setImage(assets.image`yellow`)
        } else {
            table.setImage(assets.image`start7`)
        }
        pause(200)
        music.play(music.melodyPlayable(music.knock), music.PlaybackMode.UntilDone)
    }
    random3 = randint(0, 1)
    pick3 = text_list.removeAt(random3)
    if (pick3 == "a") {
        table.setImage(assets.image`red`)
    } else if (pick3 == "b") {
        table.setImage(assets.image`blue`)
    } else if (pick3 == "c") {
        table.setImage(assets.image`yellow`)
    } else {
        table.setImage(assets.image`start7`)
    }
    pick4 = text_list.removeAt(0)
    if (pick4 == "a") {
        computers.setImage(assets.image`red`)
    } else if (pick4 == "b") {
        computers.setImage(assets.image`blue`)
    } else if (pick4 == "c") {
        computers.setImage(assets.image`yellow`)
    } else {
        computers.setImage(assets.image`start7`)
    }
    pause(500)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
let pick4 = ""
let random3 = 0
let pick3 = ""
let random2 = 0
let pick2 = ""
let random1 = 0
let pick1 = ""
let text_list: string[] = []
let computers: Sprite = null
let table: Sprite = null
let floor: Sprite = null
let earphones_and_mice: Sprite = null
earphones_and_mice = sprites.create(assets.image`start1`, SpriteKind.Player)
let em = textsprite.create("Earphones and Mice")
floor = sprites.create(assets.image`start2`, SpriteKind.Player)
let fl = textsprite.create("Floor")
table = sprites.create(assets.image`start3`, SpriteKind.Player)
let tbl = textsprite.create("Table")
computers = sprites.create(assets.image`start4`, SpriteKind.Player)
let cmpt = textsprite.create("Computers")
earphones_and_mice.setPosition(20, 20)
em.setPosition(90, 20)
floor.setPosition(20, 45)
fl.setPosition(52, 45)
table.setPosition(20, 70)
tbl.setPosition(52, 70)
computers.setPosition(20, 95)
cmpt.setPosition(63, 95)
text_list = [
"a",
"b",
"c",
"d"
]
