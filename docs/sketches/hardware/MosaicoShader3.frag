precision mediump float;

uniform sampler2D texture;

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
uniform sampler2D alpha15;
uniform sampler2D alpha16;
uniform sampler2D alpha17;
uniform sampler2D alpha18;
uniform sampler2D alpha19;
uniform sampler2D alpha20;
uniform sampler2D alpha21;
uniform sampler2D alpha22;
uniform sampler2D alpha23;
uniform sampler2D alpha24;
//uniform sampler2D alpha25;
uniform sampler2D alpha26;
uniform sampler2D alpha27;
uniform sampler2D alpha28;
uniform sampler2D alpha29;
uniform sampler2D alpha30;
uniform sampler2D alpha31;

uniform float resolution;

// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;

float distancia(in vec4 pixel, in vec3 rgb){
    return sqrt(pow(pixel.r-rgb.r, 2.0)+pow(pixel.g-rgb.g, 2.0)+pow(pixel.b-rgb.b, 2.0));
}

void main() {

    vec2 symbolCoord = vTexCoord * resolution;

    vec2 imageCoord = floor(symbolCoord);

    symbolCoord = symbolCoord - imageCoord;

    imageCoord = imageCoord * vec2(1.0) / vec2(resolution);

    // obtener nivel de gris
    vec4 pixelColor = texture2D(texture, imageCoord)*255.0;


    float minDis = 1000.0;

    float dis = distancia(pixelColor, vec3 (35, 31, 32));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha0, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (85, 59, 40));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha1, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (148, 143, 144));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha2, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (194, 159, 156));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha3, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (160, 134, 116));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha4, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (137, 129, 122));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha5, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (199, 199, 193));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha6, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (169, 165, 159));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha7, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (88, 77, 70));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha8, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (137, 105, 85));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha9, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (56, 56, 54));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha10, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (176, 176, 182));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha11, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (112, 111, 112));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha12, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (119, 90, 71));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha13, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (97, 94, 94));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha14, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (246, 245, 242));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha15, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (188, 188, 172));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha16, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (73, 59, 56));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha17, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (118, 108, 96));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha18, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (62, 140, 185));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha19, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (194, 100, 111));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha20, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (224, 228, 230));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha21, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (44, 101, 143));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha22, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (109, 140, 181));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha23, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (221, 218, 214));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha24, symbolCoord);
    }

//    dis = distancia(pixelColor, vec3 (48, 76, 96));
//
//    if (dis < minDis){
//        minDis = dis;
//        gl_FragColor = texture2D(alpha25, symbolCoord);
//    }

    dis = distancia(pixelColor, vec3 (84, 44, 36));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha26, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (227, 228, 219));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha27, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (156, 188, 196));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha28, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (48, 44, 60));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha29, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (132, 156, 164));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha30, symbolCoord);
    }

    dis = distancia(pixelColor, vec3 (168, 191, 196));

    if (dis < minDis){
        minDis = dis;
        gl_FragColor = texture2D(alpha31, symbolCoord);
    }


}