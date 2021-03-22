let img;

var myp5 = new p5((p) => {
    p.setup = function () {
        // p.createCanvas(600, 600);
        img = p.createImg("/vc/docs/sketches/spiderman.jpg")
        p.noLoop();
    }

    p.draw = function () {
        p.image(img,0,0);
    }

}, "image");