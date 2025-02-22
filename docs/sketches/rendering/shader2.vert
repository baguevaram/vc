// Precision seems mandatory in webgl
precision highp float;

// 1. Attributes and uniforms sent by p5.js

// Vertex attibutes and some uniforms are sent by
// p5.js following these naming conventions:
// https://github.com/processing/p5.js/blob/main/contributor_docs/webgl_mode_architecture.md

// 1.1. Attributes
// Geometry position attribute
attribute vec3 aPosition;

// Geometry texture coordinate
attribute vec2 aTexCoord;

// Geometry color attribute
attribute vec4 aVertexColor;

// 1.2. Matrix uniforms

// The vertex shader should project the vertex position into clip space:
// vertex_clipspace = vertex * projection * view * model (see the gl_Position below)
// Details here: http://visualcomputing.github.io/Transformations

// Either a perspective or an orthographic projection
uniform mat4 uProjectionMatrix;

// modelview = view * model
uniform mat4 uModelViewMatrix;


uniform mat4 uModelViewMatrixInverseTranspose;

// B. varying variables are defined by the shader programmer:
// vertex color
varying vec4 vVertexColor;

// vertex texcoord
varying vec2 vTexCoord;

varying float vZPos;



void main() {

    // copy / interpolate color
    vVertexColor = aVertexColor;
    // copy / interpolate texcoords
    vTexCoord = aTexCoord;
    // vertex projection into clipspace
    gl_Position = uProjectionMatrix * uModelViewMatrix * vec4(aPosition, 1.0);

    vZPos = (aPosition.z+0.5)*0.8;
}
