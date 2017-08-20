var loadLevel = function(game, n) {
    n = n - 1
    var level = levels[n]
    var bs = []
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        bs.push(b)
    }
    return bs
}

var enableDebugMode = function(game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown',function(event){
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能
            // blocks = loadLevel(game, Number(k))
        }
    })
    // 控制速度
    document.querySelector('#id-input-speed').addEventListener('input', function(event){
        var input = event.target
        // log(event, input.value)
        window.fps = Number(input.value)
    })
}

var __main = function () {
    var images = {
        bullet: './images/bullet.png',
        cloud: './images/cloud.png',
        player: './images/player.png',
        sky: './images/sky.png',
        enemy0: './images/enemy0.png',
        enemy1: './images/enemy1.png',
        enemy2: './images/enemy2.png',
        fire: './images/fire.png',
    }
    var game = GuaGame.instance(60, images, function(g){
        var s = Scene.new(g)
        // var s = SceneTitle.new(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

__main()
