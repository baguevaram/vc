# Shaders

## Shaders Propios

### Textura

> :Tabs
> > :Tab title=Textura
> > >
> > > :P5 sketch=/docs/sketches/hardware/shader1.js, width=500, height=500
>
> > :Tab title=Código
> >
> > ```js
let W;
let H;
let myShader;
function preload() {
    img = loadImage('/vc/docs/sketches/hardware/test.jpeg');
    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/texture1.frag")
}
function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    shader(myShader);
    myShader.setUniform("texture", img)
    noLoop();
}
function draw() {
    beginShape();
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}
> > ```
>
> > :Tab title=Fragment Shader
> >
> > ```glsl
precision mediump float;
uniform sampler2D texture;
// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;
void main() {
    gl_FragColor = texture2D(texture, vTexCoord) * vVertexColor;
}
> > ```

### Color

> :Tabs
> > :Tab title=Color
> > >
> > > :P5 sketch=/docs/sketches/hardware/shader2.js, width=500, height=500
>
> > :Tab title=Código
> >
> > ```js
let W;
let H;
let myShader;
function preload() {
    img = loadImage('/vc/docs/sketches/hardware/test.jpeg');
    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/texture2.frag")
}
function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    shader(myShader);
    myShader.setUniform("texture", img)
    noLoop();
}
function draw() {
    beginShape();
    fill(150);
    vertex(-W / 2, -H / 2, 0, 0, 0);
    fill(255,0,0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    fill(0,255,0);
    vertex(W / 2, H / 2, 0, 1, 1);
    fill(0,0,255);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}
> > ```
>
> > :Tab title=Fragment Shader
> >
> > ```glsl
precision mediump float;
uniform sampler2D texture;
// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;
void main() {
//    gl_FragColor = texture2D(texture, vTexCoord) * vVertexColor;
    gl_FragColor = vVertexColor;
}
> > ```

### Combinación

> :Tabs
> > :Tab title=Combinación
> > >
> > > :P5 sketch=/docs/sketches/hardware/shader3.js, width=500, height=500
>
> > :Tab title=Código
> >
> > ```js
let W;
let H;
let myShader;
function preload() {
    img = loadImage('/vc/docs/sketches/hardware/test.jpeg');
    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/texture3.frag")
}
function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    shader(myShader);
    myShader.setUniform("texture", img)
    noLoop();
}
function draw() {
    beginShape();
    fill(150);
    vertex(-W / 2, -H / 2, 0, 0, 0);
    fill(255,0,0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    fill(0,255,0);
    vertex(W / 2, H / 2, 0, 1, 1);
    fill(0,0,255);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}
> > ```
>
> > :Tab title=Fragment Shader
> >
> > ```glsl
precision mediump float;
uniform sampler2D texture;
// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;
void main() {
    gl_FragColor = texture2D(texture, vTexCoord) * vVertexColor;
//    gl_FragColor = vVertexColor;
}
> > ```

### LUMA

> :Tabs
> > :Tab title=Luma
> > >
> > > :P5 sketch=/docs/sketches/hardware/lumaShader.js, width=500, height=500
>
> > :Tab title=Código
> >
> > ```js
let W;
let H;
let slider;
let weights = [[0.2989, 0.5870, 0.1140], [0.2120, 0.7010, 0.0870], [0.2126, 0.7152, 0.0722], [0.2627, 0.6780, 0.0593]]
let myShader;
function preload() {
    img = loadImage('/vc/docs/sketches/hardware/test.jpeg');
    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/textureLUMA.frag")
}
function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    shader(myShader);
    myShader.setUniform("texture", img)
    slider = createSlider(0, 3, 40);
    slider.position(10, 10);
}
function draw() {
    let posSlider = slider.value();
    myShader.setUniform("weights", weights[posSlider])
    beginShape();
    fill(150);
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}
> > ```
>
> > :Tab title=Fragment Shader
> >
> > ```glsl
precision mediump float;
uniform sampler2D texture;
uniform vec3 weights;
// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;
void main() {
    vec4 pixelColor = texture2D(texture, vTexCoord);
    float mean = pixelColor.r * weights.x + pixelColor.g * weights.y + pixelColor.b*weights.z;
    pixelColor.x = mean;
    pixelColor.y = mean;
    pixelColor.z = mean;
    gl_FragColor = pixelColor * vVertexColor;
}
> > ```
### LUMA (Video)
> :Tabs
> > :Tab title=Implementación
> > >
> > > :P5 sketch=/docs/sketches/hardware/lumaShaderVideo.js, width=500, height=500
>
> > :Tab title=Código
> >
> > ```js
let W;
let H;
let slider;
let weights = [[0.2989, 0.5870, 0.1140], [0.2120, 0.7010, 0.0870], [0.2126, 0.7152, 0.0722], [0.2627, 0.6780, 0.0593]]
let fingers;
let myShader;
function preload() {
    fingers = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);
    fingers.hide(); // by default video shows up in separate dom
    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/textureLUMA.frag")
}
function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    shader(myShader);
    myShader.setUniform("texture", fingers)
    slider = createSlider(0, 3, 40);
    slider.position(10, 10);
    fingers.loop();
}
function draw() {
    let posSlider = slider.value();
    myShader.setUniform("weights", weights[posSlider])
    beginShape();
    fill(150);
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}
> > ```
>
> > :Tab title=Fragment Shader
> >
> > ```glsl
precision mediump float;
uniform sampler2D texture;
uniform vec3 weights;
// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;
void main() {
    vec4 pixelColor = texture2D(texture, vTexCoord);
    float mean = pixelColor.r * weights.x + pixelColor.g * weights.y + pixelColor.b*weights.z;
    pixelColor.x = mean;
    pixelColor.y = mean;
    pixelColor.z = mean;
    gl_FragColor = pixelColor * vVertexColor;
}
> > ```



## Mascaras de convolución

> :Tabs
> > :Tab title=Convolución
> > >
> > > :P5 sketch=/docs/sketches/hardware/maskShader.js, width=500, height=500
>
> > :Tab title=Código
> >
> > ```js
let W;
let H;
let slider;
let masks = [
    // Identity
    [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0],
    // Edges
    [-1.0, -1.0, -1.0, -1.0, 8.0, -1.0, -1.0, -1.0, -1.0],
    // Blur
    [1.0 / 16.0, 2.0 / 16.0, 1 / 16, 2.0 / 16.0, 4.0 / 16.0, 2 / 16, 1.0 / 16.0, 2.0 / 16.0, 1 / 16],
    // sharpen
    [0.0, -1.0, 0.0, -1.0, 5.0, -1.0, 0.0, -1.0, 0.0]
]
let myShader;
function preload() {
    img = loadImage('/vc/docs/sketches/hardware/test.jpeg');
    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/mask1.frag")
}
function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    shader(myShader);
    myShader.setUniform("texture", img)
    myShader.setUniform("offset", [1 / img.width, 1 / img.height])
    slider = createSlider(0, 3, 40);
    slider.position(10, 10);
}
function draw() {
    let posSlider = slider.value();
    myShader.setUniform("mask", masks[posSlider])
    beginShape();
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}
> > ```
>
> > :Tab title=Fragment Shader
> >
> > ```glsl
precision mediump float;
uniform sampler2D texture;
uniform float mask[9];
uniform vec2 offset;
// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;
void main() {
    vec2 tex0 = vTexCoord.st + vec2(-offset.s, -offset.t);
    vec2 tex1 = vTexCoord.st + vec2(0.0, -offset.t);
    vec2 tex2 = vTexCoord.st + vec2(offset.s, -offset.t);
    vec2 tex3 = vTexCoord.st + vec2(-offset.s, 0.0);
    vec2 tex4 = vTexCoord.st + vec2(0.0, 0.0);
    vec2 tex5 = vTexCoord.st + vec2(offset.s, 0.0);
    vec2 tex6 = vTexCoord.st + vec2(-offset.s, offset.t);
    vec2 tex7 = vTexCoord.st + vec2(0.0, offset.t);
    vec2 tex8 = vTexCoord.st + vec2(offset.s, offset.t);
    vec4 rgba[9];
    rgba[0] = texture2D(texture, tex0);
    rgba[1] = texture2D(texture, tex1);
    rgba[2] = texture2D(texture, tex2);
    rgba[3] = texture2D(texture, tex3);
    rgba[4] = texture2D(texture, tex4);
    rgba[5] = texture2D(texture, tex5);
    rgba[6] = texture2D(texture, tex6);
    rgba[7] = texture2D(texture, tex7);
    rgba[8] = texture2D(texture, tex8);
    vec4 convolution;
    for (int i=0; i<9; i++){
        convolution+=rgba[i]*mask[i];
    }
    gl_FragColor = vec4(convolution.rgb, 1.0) * vVertexColor;
}
> > ```

## Mascaras de convolución (Video)

> :Tabs
> > :Tab title=Implementación
> > >
> > > :P5 sketch=/docs/sketches/hardware/maskShaderVideo.js, width=500, height=500
>
> > :Tab title=Código
> >
> > ```js
let W;
let H;
let slider;
let masks = [
    // Identity
    [0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0],
    // Edges
    [-1.0, -1.0, -1.0, -1.0, 8.0, -1.0, -1.0, -1.0, -1.0],
    // Blur
    [1.0 / 16.0, 2.0 / 16.0, 1 / 16, 2.0 / 16.0, 4.0 / 16.0, 2 / 16, 1.0 / 16.0, 2.0 / 16.0, 1 / 16],
    // sharpen
    [0.0, -1.0, 0.0, -1.0, 5.0, -1.0, 0.0, -1.0, 0.0]
]
let fingers;
let myShader;
function preload() {
    fingers = createVideo(['/vc/docs/sketches/fingers.mov', '/vc/docs/sketches/fingers.webm']);
    fingers.hide(); // by default video shows up in separate dom
    myShader = loadShader("/vc/docs/sketches/hardware/shader.vert", "/vc/docs/sketches/hardware/mask1.frag")
}
function setup() {
    W = 500;
    H = 500;
    createCanvas(W, H, WEBGL);
    textureMode(NORMAL);
    shader(myShader);
    myShader.setUniform("texture", fingers)
    myShader.setUniform("offset", [1 / fingers.width, 1 / fingers.height])
    slider = createSlider(0, 3, 40);
    slider.position(10, 10);
    fingers.loop();
}
function draw() {
    let posSlider = slider.value();
    myShader.setUniform("mask", masks[posSlider])
    beginShape();
    fill(150);
    vertex(-W / 2, -H / 2, 0, 0, 0);
    vertex(W / 2, -H / 2, 0, 1, 0);
    vertex(W / 2, H / 2, 0, 1, 1);
    vertex(-W / 2, H / 2, 0, 0, 1);
    endShape();
}
> > ```
>
> > :Tab title=Fragment Shader
> >
> > ```glsl
precision mediump float;
uniform sampler2D texture;
uniform float mask[9];
uniform vec2 offset;
// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;
void main() {
    vec2 tex0 = vTexCoord.st + vec2(-offset.s, -offset.t);
    vec2 tex1 = vTexCoord.st + vec2(0.0, -offset.t);
    vec2 tex2 = vTexCoord.st + vec2(offset.s, -offset.t);
    vec2 tex3 = vTexCoord.st + vec2(-offset.s, 0.0);
    vec2 tex4 = vTexCoord.st + vec2(0.0, 0.0);
    vec2 tex5 = vTexCoord.st + vec2(offset.s, 0.0);
    vec2 tex6 = vTexCoord.st + vec2(-offset.s, offset.t);
    vec2 tex7 = vTexCoord.st + vec2(0.0, offset.t);
    vec2 tex8 = vTexCoord.st + vec2(offset.s, offset.t);
    vec4 rgba[9];
    rgba[0] = texture2D(texture, tex0);
    rgba[1] = texture2D(texture, tex1);
    rgba[2] = texture2D(texture, tex2);
    rgba[3] = texture2D(texture, tex3);
    rgba[4] = texture2D(texture, tex4);
    rgba[5] = texture2D(texture, tex5);
    rgba[6] = texture2D(texture, tex6);
    rgba[7] = texture2D(texture, tex7);
    rgba[8] = texture2D(texture, tex8);
    vec4 convolution;
    for (int i=0; i<9; i++){
        convolution+=rgba[i]*mask[i];
    }
    gl_FragColor = vec4(convolution.rgb, 1.0) * vVertexColor;
}
> > ```

> :ToCPrevNext
