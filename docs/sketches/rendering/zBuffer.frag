precision mediump float;

// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;

varying float vZPos;

void main() {

//    [-20, 60] rangos de Z

    float color = ((vZPos*255.0+20.0)/80.0)*255.0;

    vec4 pixelColor = vVertexColor;

    pixelColor.r = color;
    pixelColor.g = color;
    pixelColor.b = color;

    gl_FragColor = pixelColor;
}