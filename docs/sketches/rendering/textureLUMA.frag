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