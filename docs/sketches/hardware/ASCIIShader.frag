precision mediump float;

uniform sampler2D texture;

//uniform sampler2DArray alpha[15];
uniform sampler2D alpha0;
uniform sampler2D alpha1;
uniform sampler2D alpha2;
uniform sampler2D alpha3;
uniform sampler2D alpha4;
uniform sampler2D alpha5;
uniform sampler2D alpha6;
uniform sampler2D alpha7;
uniform sampler2D alpha8;
uniform sampler2D alpha9;
uniform sampler2D alpha10;
uniform sampler2D alpha11;
uniform sampler2D alpha12;
uniform sampler2D alpha13;
uniform sampler2D alpha14;

uniform float resolution;

// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;

void main() {

    vec2 symbolCoord = vTexCoord * resolution;

    vec2 imageCoord = floor(symbolCoord);

    symbolCoord = symbolCoord - imageCoord;

    imageCoord = imageCoord * vec2(1.0) / vec2(resolution);

    // obtener nivel de gris
    vec4 pixelColor = texture2D(texture, imageCoord);

    float mean = (pixelColor.r + pixelColor.g + pixelColor.b)/3.0;


    int index = int(floor(mean * 15.0));

    if (index == 0){
        gl_FragColor = texture2D(alpha0, symbolCoord);
    } else if (index ==1){
        gl_FragColor = texture2D(alpha1, symbolCoord);
    } else if (index ==2){
        gl_FragColor = texture2D(alpha2, symbolCoord);
    } else if (index ==3){
        gl_FragColor = texture2D(alpha3, symbolCoord);
    } else if (index ==4){
        gl_FragColor = texture2D(alpha4, symbolCoord);
    } else if (index ==5){
        gl_FragColor = texture2D(alpha5, symbolCoord);
    } else if (index ==6){
        gl_FragColor = texture2D(alpha6, symbolCoord);
    } else if (index ==7){
        gl_FragColor = texture2D(alpha7, symbolCoord);
    } else if (index ==8){
        gl_FragColor = texture2D(alpha8, symbolCoord);
    } else if (index ==9){
        gl_FragColor = texture2D(alpha9, symbolCoord);
    } else if (index ==10){
        gl_FragColor = texture2D(alpha10, symbolCoord);
    } else if (index ==11){
        gl_FragColor = texture2D(alpha11, symbolCoord);
    } else if (index ==12){
        gl_FragColor = texture2D(alpha12, symbolCoord);
    } else if (index ==13){
        gl_FragColor = texture2D(alpha13, symbolCoord);
    } else {
        gl_FragColor = texture2D(alpha14, symbolCoord);
    }

}