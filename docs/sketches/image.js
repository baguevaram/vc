let img;

var myp5 = new p5((p) => {
    p.setup = function () {
        // p.createCanvas(600, 600);
        img = p.createImg("/vc/docs/sketches/mewtwo.png")
        p.noLoop();
    }

    p.draw = function () {
        p.image(img,0,0);
    }

}, "image");