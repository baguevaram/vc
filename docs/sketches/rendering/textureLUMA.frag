precision mediump float;

uniform sampler2D texture;

// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;

void main() {
    vec4 pixelColor = texture2D(texture, vTexCoord);

    float mean = pixelColor.x * 0.2989 + pixelColor.y * 0.5870 + pixelColor.z*0.1140;
//        float mean = (pixelColor.r*0.2120+pixelColor.g*0.7010+pixelColor.b*0.0870);
    //    float mean = (pixelColor.r*0.2126+pixelColor.g*0.7152+pixelColor.b*0.0722);
    //    float mean = (pixelColor.r*0.2627+pixelColor.g*0.6780+pixelColor.b*0.0593);

    pixelColor.x = mean;
    pixelColor.y = mean;
    pixelColor.z = mean;

    gl_FragColor = pixelColor * vVertexColor;
}