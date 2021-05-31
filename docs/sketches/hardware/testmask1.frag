precision mediump float;

uniform sampler2D texture;
uniform mat3 mask;
uniform vec2 offset;

// interpolated color (same name as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name as in vertex shader)
varying vec2 vTexCoord;

void main() {

    vec4 convolution;

    for (int i=-1; i<2; i++){
        for (int j=-1; j<2; j++){
            convolution+=texture2D(texture, vTexCoord.st + vec2(offset.s*float(i), offset.t*float(j)))*mask[i+1][j+1];
        }
    }

    gl_FragColor = vec4(convolution.rgb, 1.0) * vVertexColor;
}