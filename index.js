let r = 10
let a = 0
let c = 20
let angle = 0
let art
let loopEnabled = true;

// SLIDER
let sliderZ;
let sliderSizeW;
let sliderSizeH;
let sliderPattern;
let StopLineOneText;
let StopLineTwoText;

//COLOR PICKER
let colorPicker;


function setup() {
    let cnv = createCanvas(windowWidth * 0.85, windowHeight * 0.9, WEBGL);
    cnv.position(windowWidth - windowWidth * 0.91, 0);
    art = createGraphics(400, 400);
    noCursor();

    //FONT
    textFont('Space Mono');

    //text FREEZE
    let StopLineOneText = createP('( SPACE BAR');
    StopLineOneText.position(30, windowHeight * 0.04);
    StopLineOneText.style('font-size', '12px');
    StopLineOneText.style('font-style', 'italic');
    StopLineOneText.style('color', 'white');
    StopLineOneText.style('font-weight', 'medium');
    StopLineOneText.style('font-family', 'Cutive Mono');
    //text FREEZE
    let StopLineTwoText = createP('TO FREEZE )');
    StopLineTwoText.position(30, windowHeight * 0.06);
    StopLineTwoText.style('font-size', '12px')
    StopLineTwoText.style('font-style', 'italic');
    StopLineTwoText.style('color', 'white');
    StopLineTwoText.style('font-weight', 'medium');
    StopLineTwoText.style('font-family', 'Cutive Mono');

    //color picker
    colorPicker = createColorPicker('white');
    colorPicker.position(20, 180);
    colorPicker.size(90, 90)
    let colorPickerText = createP('COLOR');
    colorPickerText.position(30, colorPicker.y - 35);
    colorPickerText.style('font-size', '12px');
    colorPickerText.style('color', 'white');
    colorPickerText.style('font-weight', 'medium');
    colorPickerText.style('font-family', 'Cutive Mono');

    // SLIDER SPINNING
    sliderRotate = createSlider(0, 10, 0);
    sliderRotate.position(30, 380);
    sliderRotate.style('width', '95px');
    //text SPINNING
    let RotateText = createP('SPINNING');
    RotateText.position(sliderRotate.x, sliderRotate.y - 45);
    RotateText.style('font-size', '12px');
    RotateText.style('color', 'white');
    RotateText.style('font-weight', 'medium');
    RotateText.style('font-family', 'Cutive Mono');

    //SLIDER VELOCITY 
    sliderPattern = createSlider(0, 3, 0);
    sliderPattern.position(30, 450);
    sliderPattern.style('width', '95px');
    //ADD TEXT VELOCITY
    let sliderPatternText = createP('VELOCITY');
    sliderPatternText.position(sliderPattern.x, sliderPattern.y - 45);
    sliderPatternText.style('font-size', '12px');
    sliderPatternText.style('color', 'white');
    sliderPatternText.style('font-weight', 'medium');
    sliderPatternText.style('font-family', 'Cutive Mono');

    //SLIDER X COMPRESS 
    sliderCompress = createSlider(1, 3, 1);
    sliderCompress.position(30, 520);
    sliderCompress.style('width', '95px');
    // ADD TEXT X COMPRESS
    let sliderCompressText = createP('X - COMPRESS');
    sliderCompressText.position(sliderCompress.x, sliderCompress.y - 45);
    sliderCompressText.style('font-size', '12px');
    sliderCompressText.style('color', 'white');
    sliderCompressText.style('font-weight', 'medium');
    sliderCompressText.style('font-family', 'Cutive Mono');

    //SLIDER Y COMPRESS 
    sliderInflate = createSlider(1, 3, 1);
    sliderInflate.position(30, 590);
    sliderInflate.style('width', '95px');
    // ADD TEXT Y COMPRESS
    let sliderInflateText = createP('Y - COMPRESS');
    sliderInflateText.position(sliderInflate.x, sliderInflate.y - 45);
    sliderInflateText.style('font-size', '12px');
    sliderInflateText.style('color', 'white');
    sliderInflateText.style('font-weight', 'medium');
    sliderInflateText.style('font-family', 'Cutive Mono');

    // SLIDER ZOOM
    sliderZ = createSlider(10, windowHeight * 0.92, windowHeight * 0.92 / 2.5);
    sliderZ.position(30, windowHeight * 0.92);
    sliderZ.style('width', '95px');
    // ADD TEXT ZOOM
    let sliderZText = createP('CAMERA');
    sliderZText.position(sliderZ.x, sliderZ.y - 45);
    sliderZText.style('font-size', '12px');
    sliderZText.style('color', 'white');
    sliderZText.style('font-weight', 'medium');
    sliderZText.style('font-family', 'Cutive Mono');

}

function draw() {

    // SPINNING
    translate(0, 0);
    rotate(radians(frameCount * 0.1 * sliderRotate.value()));

    // BG
    background(0);

    // MATH 3D
    push();
    let x = r + c * cos(a);
    let y = r + c * sin(a);

    art.fill(colorPicker.color());
    art.rect(
        (5 * x + 50) * sliderCompress.value(),
        (5 * y + 50) * sliderInflate.value(),
        // (5 * y + 50),
        200 / (sliderCompress.value() * sliderCompress.value() * sliderCompress.value()),
        200 / (sliderInflate.value() * sliderInflate.value() * sliderInflate.value())
        // 200
    );
    c += 0.01;
    a += 0.9 - 0.1 * sliderPattern.value();
    pop();

    //TEXTURE
    push();
    texture(art);
    let loopSize = sliderZ.value() * 15;
    let loopPos = (frameCount % (loopSize * 2)) - loopSize;
    rotateX(angle * 10);
    rotateY(angle * 10);
    rotateZ(angle * 10);
    box(windowWidth, windowHeight, loopSize);
    translate(loopPos, 0, 0);
    box(loopSize, windowHeight, loopSize);
    angle += 0;
    pop();

}

function keyPressed() {
    if (key === ' ') {
        loopEnabled = !loopEnabled;
        if (loopEnabled) {
            loop();
        } else {
            noLoop();
        }
    }
}