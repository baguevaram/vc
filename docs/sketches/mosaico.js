let img, smaller;

let W;
let H;
let scl = 8;
let allImages = [],
    bright = [],
    brightImages = new Array(256),
    imgTemp = [];
function preload() {
    img = loadImage("/vc/docs/sketches/obama.jpg");
    for (var i = 0; i < 7; i++) {
        imgTemp[i] = loadImage("/vc/docs/sketches/img" + i + ".jpg");
    }
}
function setup() {
    W = img.width / scl;
    H = img.height / scl;
    createCanvas(img.width, img.height);
    smaller = createImage(W, H);
    smaller.copy(img, 0, 0, img.width, img.height, 0, 0, W, H);
    for (var i = 0; i < 7; i++) {
        allImages[i] = createImage(scl, scl);
        allImages[i].copy(
            imgTemp[i],
            0,
            0,
            imgTemp[i].width,
            imgTemp[i].height,
            0,
            0,
            scl,
            scl
        );
    }
}

function draw() {
    //TODO
    for (var i = 0; i < 7; i++) {
        allImages[i].loadPixels();
        let avg = 0;
        for (var j = 0; j < allImages[i].pixels.length; j += 4) {
            let b = brightness(
                allImages[i].pixels[j],
                allImages[i].pixels[j + 1],
                allImages[i].pixels[j + 2]
            );
            avg += b;
        }
        avg /= allImages[i].pixels.length / 4;
        bright[i] = avg;
    }
    console.log(bright);
    for (var k = 0; k < brightImages.length; k++) {
        var record = 256;
        for (var r = 0; r < bright.length; r++) {
            var diff = abs(k - bright[r]);
            if (diff < record) {
                record = diff;
                brightImages[k] = allImages[r];
            }
        }
    }
    smaller.loadPixels();
    for (let x = 0; x < W; x++) {
        for (let y = 0; y < H; y++) {
            let index = 4 * (x + y * W);
            let c = color(
                smaller.pixels[index],
                smaller.pixels[index + 1],
                smaller.pixels[index + 2]
            );
            // fill(brightness(c));
            // noStroke();
            // rect(x * scl, y * scl, scl, scl);
            let imageIndex = brightness(c);
            // fill(c);
            // noStroke();
            // rect(x * scl, y * scl, scl, scl);
            console.log(imageIndex);
            if (brightImages[imageIndex] !== undefined)
                image(brightImages[imageIndex], x * scl, y * scl, scl, scl);
        }
    }
    smaller.updatePixels();
    //image(img, 0, 0);
    //   image(smaller, 0, 0);
    noLoop();
}
