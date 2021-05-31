precision mediump float;

uniform sampler2D texture;
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

    vec4 suma;

    for (int i=0; i<9; i++){
        suma+=rgba[i];
    }

    suma.r/=9.0;
    suma.g/=9.0;
    suma.b/=9.0;

    float prom = (suma.r+suma.g+suma.b)/3.0;


    int index = int(prom*16.0/255.0);

    suma.r=prom;
    suma.g=prom;
    suma.b=prom;

    gl_FragColor = vec4(suma.rgb, 1.0) * vVertexColor;
}