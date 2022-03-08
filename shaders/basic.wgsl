////////////////////////////////////////
struct Uniforms
{
    mvpMatrix: mat4x4<f32>;
};
@binding(0) @group(0) var<uniform> uniforms: Uniforms;

////////////////////////////////////////
struct VSinputs
{
    @location(0) aPosition: vec4<f32>;
    @location(1) aColor: vec4<f32>;
};

////////////////////////////////////////
struct VSoutputs
{
    @builtin(position) vPosition: vec4<f32>;
    @location(0) vColor: vec4<f32>;
};

////////////////////////////////////////
@stage(vertex)
fn vertex_main(in: VSinputs) -> VSoutputs
{
    var out: VSoutputs;
    out.vPosition = uniforms.mvpMatrix * in.aPosition;
    out.vColor = in.aColor;
    return out;
}

////////////////////////////////////////
struct FSoutputs
{
    @location(0) color: vec4<f32>;
};

////////////////////////////////////////
@stage(fragment)
fn fragment_main(in: VSoutputs) -> FSoutputs
{
    var out: FSoutputs;
    out.color = in.vColor;
    return out;
}
