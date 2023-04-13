// height and width variables
// Girard Richter color grid
var w = window.innerWidth
var h = window.innerHeight
w = view.bounds.width
h = view.bounds.height



// random int tool
function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}


// variables for grid
var gridGroup = new Group()
var gridW = getRandomInt(1, 5)
var gridH = getRandomInt(1, 30)
console.log("gridW= " + gridW)
console.log("gridH= " + gridH)

var gridSize = (w / gridW)
var gridSizeH = (h / gridH)

var palltteA = [Color.random(), Color.random()]
var palltteB = [Color.random(), Color.random()]

// background background background background background background background background background background background background
var bgColor = ['black']
var backgorund = new Rectangle(new Point(0, 0), new Point(w, h));
var backgroundColor = new Path.Rectangle(backgorund);
backgroundColor.fillColor = bgColor[Math.floor(Math.random() * bgColor.length)]
backgroundColor.opacity = 1;

for (k = 0; k < gridH; k++) {
    for (l = 0; l < gridW; l++) {
        var x = k
        var y = l
        var rectTwo = new Path.Rectangle(x - window.innerWidth, y, window.innerWidth * 2.5, getRandomInt(1, 1000))
        rectTwo.fillColor = Color.random();
        rectTwo.strokeColor = {
            gradient: {
                stops: [
                    // [Color.random(), 0.3],
                    [palltteA[Math.floor(Math.random() * palltteA.length)], 0.3],
                    ["black", 1]
                ],
                radial: false
            },
            origin: rectTwo.bounds.topCenter,
            destination: rectTwo.bounds.center
        };
        rectTwo.fillColor = {
            gradient: {
                stops: [
                    // [Color.random(), 0.3],
                    [palltteB[Math.floor(Math.random() * palltteA.length)], 0.3],
                    ["black", 1]
                ],
                radial: false
            },
            origin: rectTwo.bounds.topCenter,
            destination: rectTwo.bounds.center
        };

        rectTwo.opacity = 0.5;
    }
}

for (k = 0; k < gridH; k++) {
    for (l = 0; l < gridW; l++) {
        var x = k
        var y = l
        var hue = Math.random() * 360;
        var rectTwo = new Path.Rectangle(x - window.innerWidth, y, window.innerWidth * 2.5, getRandomInt(1, 1000))
        rectTwo.strokeColor = {
            gradient: {
                stops: [
                    // [Color.random(), 0.8],
                    [palltteA[Math.floor(Math.random() * palltteA.length)], 0.3],
                    [Color.random(), 1]
                ],
                radial: false
            },
            origin: rectTwo.bounds.topCenter,
            destination: rectTwo.bounds.center
        };
        rectTwo.fillColor = {
            gradient: {
                stops: [
                    // [Color.random(), 0.8],
                    [palltteB[Math.floor(Math.random() * palltteA.length)], 0.3],
                    [Color.random(), 1]
                ],
                radial: false
            },
            origin: rectTwo.bounds.topCenter,
            destination: rectTwo.bounds.center
        };

        rectTwo.opacity = 0.3;
    }
    rectTwo.strokeWidth = getRandomInt(0.001, 10);
    rectTwo.opacity = 0.1;
}



// ColorBlocks ColorBlocks ColorBlocks ColorBlocks ColorBlocks ColorBlocks ColorBlocks ColorBlocks ColorBlocks ColorBlocks ColorBlocks ColorBlocks ColorBlocks ColorBlocks ColorBlocks ColorBlocks
for (k = 0; k < gridH; k++) {
    for (l = 0; l < gridW; l++) {
        var x = k
        var y = l
        var landscape = new Path.Rectangle(getRandomInt(innerWidth / 2 - x * 60, innerWidth / 2 + x * 60), getRandomInt(innerHeight / 2 - y * 200, innerHeight / 2 + y * 200), getRandomInt(0.1, innerWidth / 20), getRandomInt(0.1, innerHeight / 20))
        landscape.strokeColor = {
            gradient: {
                stops: [
                    [palltteA[Math.floor(Math.random() * palltteA.length)], 0.5],
                    [palltteB[Math.floor(Math.random() * palltteA.length)], 1]
                ],
                radial: false
            },
            origin: landscape.bounds.topCenter,
            destination: landscape.bounds.center
        };
        landscape.fillColor = {
            gradient: {
                stops: [
                    [palltteA[Math.floor(Math.random() * palltteA.length)], 0.5],
                    [palltteB[Math.floor(Math.random() * palltteA.length)], 1]
                ],
                radial: false
            },
            origin: landscape.bounds.topCenter,
            destination: landscape.bounds.center
        };

        landscape.opacity = 1;
    }
    landscape.strokeWidth = getRandomInt(0.1, 30);
}

for (k = 0; k < gridH; k++) {
    for (l = 0; l < gridW; l++) {
        var x = k
        var y = l
        var landscape = new Path.Rectangle(getRandomInt(innerWidth / 2 - x * 300, innerWidth / 2 + x * 300), getRandomInt(innerHeight / 2 - y * 200, innerHeight / 2 + y * 200), getRandomInt(0.1, innerWidth / 10), getRandomInt(0.1, innerHeight / 10))
        landscape.strokeColor = {
            gradient: {
                stops: [
                    [palltteA[Math.floor(Math.random() * palltteA.length)], 0.5],
                    [palltteB[Math.floor(Math.random() * palltteA.length)], 1]
                ],
                radial: false
            },
            origin: landscape.bounds.topCenter,
            destination: landscape.bounds.center
        };
        landscape.fillColor = {
            gradient: {
                stops: [
                    [palltteA[Math.floor(Math.random() * palltteA.length)], 0.5],
                    [palltteB[Math.floor(Math.random() * palltteA.length)], 1]
                ],
                radial: false
            },
            origin: landscape.bounds.topCenter,
            destination: landscape.bounds.center
        };
        landscape.opacity = 1;
    }
    landscape.strokeWidth = getRandomInt(0.1, 30);
}



// Black Dust

for (k = 0; k < gridH; k++) {
    for (l = 0; l < gridW; l += 0.1) {
        var x = k
        var y = l
        var dust1 = new Path.Rectangle(getRandomInt(innerWidth / 2 - x * 100, innerWidth / 2 + x * 100), getRandomInt(innerHeight / 2 - y * 100, innerHeight / 2 + y * 100), getRandomInt(0.001, innerWidth / 120), getRandomInt(0.001, innerHeight / 120))
        dust1.fillColor = ["black"];
        dust1.opacity = 1;
    }
    dust1.strokeWidth = getRandomInt(0.001, 10);
}

for (k = 0; k < gridH; k++) {
    for (l = 0; l < gridW; l += 0.1) {
        var x = k
        var y = l
        var dust2 = new Path.Rectangle(getRandomInt(innerWidth / 2 - x * 200, innerWidth / 2 + x * 200), getRandomInt(innerHeight / 2 - y * 200, innerHeight / 2 + y * 200), getRandomInt(0.001, innerWidth / 140), getRandomInt(0.001, innerHeight / 140))
        dust2.fillColor = ["black"];
        dust2.opacity = 1;
    }
    dust2.strokeWidth = getRandomInt(0.001, 10);
}

for (k = 0; k < gridH; k++) {
    for (l = 0; l < gridW; l += 0.1) {
        var x = k
        var y = l
        var dust3 = new Path.Rectangle(getRandomInt(innerWidth / 2 - x * 300, innerWidth / 2 + x * 300), getRandomInt(innerHeight / 2 - y * 300, innerHeight / 2 + y * 300), getRandomInt(0.001, innerWidth / 200), getRandomInt(0.001, innerHeight / 200))
        dust3.fillColor = ["black"];
        dust3.opacity = 1;
    }
    dust3.strokeWidth = getRandomInt(0.001, 10);
}

for (k = 0; k < gridH; k++) {
    for (l = 0; l < gridW; l += 0.1) {
        var x = k
        var y = l
        var dust4 = new Path.Rectangle(getRandomInt(innerWidth / 2 - x * 80, innerWidth / 2 + x * 80), getRandomInt(innerHeight / 2 - y * 100, innerHeight / 2 + y * 100), getRandomInt(0.001, innerWidth / 300), getRandomInt(0.001, innerHeight / 300))
        dust4.fillColor = ["black"];
    };
    dust4.opacity = 1;
}
dust4.strokeWidth = getRandomInt(0.001, 10);