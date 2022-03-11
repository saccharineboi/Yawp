////////////////////////////////////////
const EPSILON = 1e-6;

////////////////////////////////////////
const floatEquals = (a, b) => {
    return Math.abs(a - b) <= EPSILON * Math.max(1.0, Math.max(Math.abs(a), Math.abs(b)));
};

////////////////////////////////////////
const toRadians = degrees => degrees * Math.PI / 180;

////////////////////////////////////////
const toDegrees = radians => radians * 180 / Math.PI;

////////////////////////////////////////
const vec2 = (x = 0, y = 0) => Object.freeze({
    print: ()           => console.log(`vec2: [${x}, ${y}]`),
    getX: ()            => x,
    getY: ()            => y,
    setX: _x            => x = _x,
    setY: _y            => y = _y,
    set: (_x, _y)       => { x = _x, y = _y },
    copy: ()            => vec2(x, y),
    equals: v           => floatEquals(x, v.getX()) &&
                           floatEquals(y, v.getY()),
    add: v              => vec2(x + v.getX(), y + v.getY()),
    sub: v              => vec2(x - v.getX(), y - v.getY()),
    mul: v              => vec2(x * v.getX(), y * v.getY()),
    div: v              => vec2(x / v.getX(), y / v.getY()),
    addScalar: s        => vec2(x + s, y + s),
    subScalar: s        => vec2(x - s, y - s),
    mulScalar: s        => vec2(x * s, y * s),
    divScalar: s        => vec2(x / s, y / s),
    negate: ()          => vec2(-x, -y),
    invert: ()          => vec2(1.0 / x, 1.0 / y),
    dot: v              => x * v.getX() + y * v.getY(),
    sqrlen: ()          => x * x + y * y,
    len: ()             => Math.sqrt(x * x + y * y),
    normalize: ()       => {
        const sum = x * x + y * y;
        if (!floatEquals(sum, 0.0)) {
            const factor = 1.0 / sum;
            return vec2(x * factor, y * factor);
        }
        return vec2(x, y);
    },
    lerp: (v, t)        => vec2(x + t * (v.getX() - x),
                                y + t * (v.getY() - y)),
    sqrdist: v          => {
        const _x = v.getX() - x;
        const _y = v.getY() - y;
        return _x * _x + _y * _y;
    },
    dist: v             => {
        const _x = v.getX() - x;
        const _y = v.getY() - y;
        return Math.sqrt(_x * _x + _y * _y);
    },
    clamp: (min, max)   => vec3(Math.max(Math.min(max, x), min),
                                Math.max(Math.min(max, y), min))
});

////////////////////////////////////////
const vec3 = (x, y, z) => Object.freeze({
    print: ()           => console.log(`vec3: [${x}, ${y}, ${z}]`),
    getX: ()            => x,
    getY: ()            => y,
    getZ: ()            => z,
    setX: _x            => x = _x,
    setY: _y            => y = _y,
    setZ: _z            => z = _z,
    set: (_x, _y, _z)   => { x = _x, y = _y, z = _z; },
    copy: ()            => vec3(x, y, z),
    equals: v           => floatEquals(x, v.getX()) &&
                           floatEquals(y, v.getY()) &&
                           floatEquals(z, v.getZ()),
    add: v              => vec3(x + v.getX(),
                                y + v.getY(),
                                z + v.getZ()),
    sub: v              => vec3(x - v.getX(),
                                y - v.getY(),
                                z - v.getZ()),
    mul: v              => vec3(x * v.getX(),
                                y * v.getY(),
                                z * v.getZ()),
    div: v              => vec3(x / v.getX(),
                                y / v.getY(),
                                z / v.getZ()),
    addScalar: s        => vec3(x + s, y + s, z + s),
    subScalar: s        => vec3(x - s, y - s, z - s),
    mulScalar: s        => vec3(x * s, y * s, z * s),
    divScalar: s        => vec3(x / s, y / s, z / s),
    negate: ()          => vec3(-x, -y, -z),
    invert: ()          => vec3(1.0 / x, 1.0 / y, 1.0 / z),
    dot: v              => x * v.getX() +
                           y * v.getY() +
                           z * v.getZ(),
    sqrlen: ()          => x * x + y * y + z * z,
    len: ()             => Math.sqrt(x * x + y * y + z * z),
    normalize: ()       => {
        const sum = x * x + y * y + z * z;
        if (!floatEquals(sum, 0.0)) {
            const factor = 1.0 / sum;
            return vec3(x * factor, y * factor, z * factor);
        }
        return vec3(x, y, z);
    },
    lerp: (v, t)        => vec3(x + t * (v.getX() - x),
                                y + t * (v.getY() - y),
                                z + t * (v.getZ() - z)),
    sqrdist: v          => {
        const _x = v.getX() - x;
        const _y = v.getY() - y;
        const _z = v.getZ() - z;
        return _x * _x + _y * _y + _z * _z;
    },
    dist: v             => {
        const _x = v.getX() - x;
        const _y = v.getY() - y;
        const _z = v.getZ() - z;
        return Math.sqrt(_x * _x + _y * _y + _z * _z);
    },
    clamp: (min, max)   => vec3(Math.max(Math.min(max, x), min),
                                Math.max(Math.min(max, y), min),
                                Math.max(Math.min(max, z), min))
});

////////////////////////////////////////
const vec4 = (x, y, z, w) => Object.freeze({
    print: ()           => console.log(`vec4: [${x}, ${y}, ${z}, ${w}]`),
    getX: ()            => x,
    getY: ()            => y,
    getZ: ()            => z,
    getW: ()            => w,
    setX: _x            => x = _x,
    setY: _y            => y = _y,
    setZ: _z            => z = _z,
    setW: _w            => w = _w,
    set: (_x,
          _y,
          _z,
          _w)           => { x = _x, y = _y, z = _z, w = _w; },
    copy: ()            => vec4(x, y, z, w),
    equals: v           => floatEquals(x, v.getX()) &&
                           floatEquals(y, v.getY()) &&
                           floatEquals(z, v.getZ()) &&
                           floatEquals(w, v.getW()),
    add: v              => vec4(x + v.getX(),
                                y + v.getY(),
                                z + v.getZ(),
                                w + v.getW()),
    sub: v              => vec4(x - v.getX(),
                                y - v.getY(),
                                z - v.getZ(),
                                w - v.getW()),
    mul: v              => vec4(x * v.getX(),
                                y * v.getY(),
                                z * v.getZ(),
                                w * v.getW()),
    div: v              => vec4(x / v.getX(),
                                y / v.getY(),
                                z / v.getZ(),
                                w / v.getW()),
    addScalar: s        => vec4(x + s, y + s, z + s, w + s),
    subScalar: s        => vec4(x - s, y - s, z - s, w - s),
    mulScalar: s        => vec4(x * s, y * s, z * s, w * s),
    divScalar: s        => vec4(x / s, y / s, z / s, w / s),
    negate: ()          => vec4(-x, -y, -z, -w),
    invert: ()          => vec4(1.0 / x, 1.0 / y, 1.0 / z, 1.0 / w),
    dot: v              => x * v.getX() +
                           y * v.getY() +
                           z * v.getZ() +
                           w * v.getW(),
    sqrlen: ()          => x * x + y * y + z * z + w * w,
    len: ()             => Math.sqrt(x * x + y * y + z * z + w * w),
    normalize: ()       => {
        const sum = x * x + y * y + z * z + w * w;
        if (!floatEquals(sum, 0.0)) {
            const factor = 1.0 / sum;
            return vec4(x * factor, y * factor, z * factor, w * factor);
        }
        return vec4(x, y, z, w);
    },
    lerp: (v, t)        => vec4(x + t * (v.getX() - x),
                                y + t * (v.getY() - y),
                                z + t * (v.getZ() - z),
                                w + t * (v.getW() - w)),
    sqrdist: v          => {
        const _x = v.getX() - x;
        const _y = v.getY() - y;
        const _z = v.getZ() - z;
        const _w = v.getW() - w;
        return _x * _x + _y * _y + _z * _z + _w * _w;
    },
    dist: v             => {
        const _x = v.getX() - x;
        const _y = v.getY() - y;
        const _z = v.getZ() - z;
        const _w = v.getW() - w;
        return Math.sqrt(_x * _x + _y * _y + _z * _z + _w * _w);
    },
    clamp: (min, max)   => vec4(Math.max(Math.min(max, x), min),
                                Math.max(Math.min(max, y), min),
                                Math.max(Math.min(max, z), min),
                                Math.max(Math.min(max, w), min))
});

////////////////////////////////////////
const mat2 = (m00 = 1, m01 = 0,
              m10 = 0, m11 = 1) => {
    const data = new Float32Array([m00, m01,
                                   m10, m11]);
    return Object.freeze({
        get: i              => data[i],
        set: (i, x)         => data[i] = x,
        getData: ()         => data,
        setData: _data      => data = _data,
        copy: ()            => mat2(data[0], data[1],
                                    data[2], data[3]),
        equals: m           => floatEquals(data[0], m.get(0)) &&
                               floatEquals(data[1], m.get(1)) &&
                               floatEquals(data[2], m.get(2)) &&
                               floatEquals(data[3], m.get(3)),
        add: m              => mat2(data[0] + m.get(0),
                                    data[1] + m.get(1),
                                    data[2] + m.get(2),
                                    data[3] + m.get(3)),
        sub: m              => mat2(data[0] - m.get(0),
                                    data[1] - m.get(1),
                                    data[2] - m.get(2),
                                    data[3] - m.get(3)),
        mul: m              => mat2(data[0] * m.get(0) + data[2] * m.get(1),
                                    data[1] * m.get(0) + data[3] * m.get(1),
                                    data[0] * m.get(2) + data[2] * m.get(3),
                                    data[1] * m.get(2) + data[3] * m.get(3)),
        div: m              => mat2(data[0] / m.get(0),
                                    data[1] / m.get(1),
                                    data[2] / m.get(2),
                                    data[3] / m.get(3)),
        addScalar: s        => mat2(data[0] + s, data[1] + s,
                                    data[2] + s, data[3] + s),
        subScalar: s        => mat2(data[0] - s, data[1] - s,
                                    data[2] - s, data[3] - s),
        mulScalar: s        => mat2(data[0] * s, data[1] * s,
                                    data[2] * s, data[3] * s),
        divScalar: s        => mat2(data[0] / s, data[1] / s,
                                    data[2] / s, data[3] / s),
        negate: ()          => mat2(-data[0], -data[1], -data[2], -data[3]),
        transpose: ()       => mat2(data[0], data[2], data[1], data[3]),
        det: ()             => data[0] * data[3] - data[1] * data[2],
        invert: ()          => {
            const det = data[0] * data[3] - data[1] * data[2];
            const r = mat2();
            if (!floatEquals(det, 0.0)) {
                const factor = 1.0 / det;
                r.set(0, factor *  data[3]);
                r.set(1, factor * -data[1]);
                r.set(2, factor * -data[2]);
                r.set(3, factor *  data[0])
            }
            return r;
        },
        print: ()           => {
            console.log(`mat2: [${data[0]}, ${data[1]}, ${data[2]}, ${data[3]}]`);
        }
    });
};

////////////////////////////////////////
const mat3 = (m00 = 1, m01 = 0, m02 = 0,
              m10 = 0, m11 = 1, m12 = 0,
              m20 = 0, m21 = 0, m22 = 1) => {
    const data = new Float32Array([m00, m01, m02,
                                   m10, m11, m12,
                                   m20, m21, m22]);
    return Object.freeze({
        get: i              => data[i],
        set: (i, x)         => data[i] = x,
        getData: ()         => data,
        setData: _data      => data = _data,
        copy: ()            => mat3(data[0], data[1], data[2],
                                    data[3], data[4], data[5],
                                    data[6], data[7], data[8]),
        equals: m           => {
            for (let i = 0; i < 9; ++i)
                if (!floatEquals(data[i], m.get(i)))
                    return false;
            return true;
        },
        add: m              => mat3(data[0] + m.get(0),
                                    data[1] + m.get(1),
                                    data[2] + m.get(2),
                                    data[3] + m.get(3),
                                    data[4] + m.get(4),
                                    data[5] + m.get(5),
                                    data[6] + m.get(6),
                                    data[7] + m.get(7),
                                    data[8] + m.get(8)),
        sub: m              => mat3(data[0] - m.get(0),
                                    data[1] - m.get(1),
                                    data[2] - m.get(2),
                                    data[3] - m.get(3),
                                    data[4] - m.get(4),
                                    data[5] - m.get(5),
                                    data[6] - m.get(6),
                                    data[7] - m.get(7),
                                    data[8] - m.get(8)),
        mul: m              => {
            const a0 = data[0], a3 = data[3], a6 = data[6];
            const a1 = data[1], a4 = data[4], a7 = data[7];
            const a2 = data[2], a5 = data[5], a8 = data[8];

            const b0 = m.get(0),
                  b1 = m.get(1),
                  b2 = m.get(2);

            const r = mat4();

            r.set(0, b0 * a0 + b1 * a3 + b2 * a6);
            r.set(1, b0 * a1 + b1 * a4 + b2 * a7);
            r.set(2, b0 * a2 + b1 * a5 + b2 * a8);

            b0 = m.get(3);
            b1 = m.get(4);
            b2 = m.get(5);

            r.set(3, b0 * a0 + b1 * a3 + b2 * a6);
            r.set(4, b0 * a1 + b1 * a4 + b2 * a7);
            r.set(5, b0 * a2 + b1 * a5 + b2 * a8);

            b0 = m.get(6);
            b1 = m.get(7);
            b2 = m.get(8);

            r.set(6, b0 * a0 + b1 * a3 + b2 * a6);
            r.set(7, b0 * a1 + b1 * a4 + b2 * a7);
            r.set(8, b0 * a2 + b1 * a5 + b2 * a8);

            return r;
        },
        div: m              => mat3(data[0] / m.get(0),
                                    data[1] / m.get(1),
                                    data[2] / m.get(2),
                                    data[3] / m.get(3),
                                    data[4] / m.get(4),
                                    data[5] / m.get(5),
                                    data[6] / m.get(6),
                                    data[7] / m.get(7),
                                    data[8] / m.get(8)),
        addScalar: s        => mat3(data[0] + s, data[1] + s, data[2] + s,
                                    data[3] + s, data[4] + s, data[5] + s,
                                    data[6] + s, data[7] + s, data[8] + s),
        subScalar: s        => mat3(data[0] - s, data[1] - s, data[2] - s,
                                    data[3] - s, data[4] - s, data[5] - s,
                                    data[6] - s, data[7] - s, data[8] - s),
        mulScalar: s        => mat3(data[0] * s, data[1] * s, data[2] * s,
                                    data[3] * s, data[4] * s, data[5] * s,
                                    data[6] * s, data[7] * s, data[8] * s),
        divScalar: s        => mat3(data[0] / s, data[1] / s, data[2] / s,
                                    data[3] / s, data[4] / s, data[5] / s,
                                    data[6] / s, data[7] / s, data[8] / s),
        negate: ()          => mat3(-data[0], -data[1], -data[2],
                                    -data[3], -data[4], -data[5],
                                    -data[6], -data[7], -data[8]),
        transpose: ()       => mat3(data[0], data[3], data[6],
                                    data[1], data[4], data[7],
                                    data[2], data[5], data[8]),
        det: ()             => {
            const m0 = data[0], m3 = data[3], m6 = data[6];
            const m1 = data[1], m4 = data[4], m7 = data[7];
            const m2 = data[2], m5 = data[5], m8 = data[8];

            return m0 * ( m8 * m4 - m5 * m7) +
                   m1 * (-m8 * m3 + m5 * m6) +
                   m2 * ( m7 * m3 - m4 * m6);
        },
        invert: ()          => {
            const m0 = data[0], m3 = data[3], m6 = data[6];
            const m1 = data[1], m4 = data[4], m7 = data[7];
            const m2 = data[2], m5 = data[5], m8 = data[8];

            const k0 =  m8 * m4 - m5 * m7;
            const k1 = -m8 * m3 + m5 * m6;
            const k2 =  m7 * m3 - m4 * m6;

            const r = mat3();
            const det = m0 * k0 + m1 * k1 + m2 * k2;
            if (!floatEquals(det, 0.0)) {
                const factor = 1.0 / det;

                r.set(0, k0 * factor);
                r.set(1, (-m8 * m1 + m2 * m7) * factor);
                r.set(2, (m5 * m1 - m2 * m4) * factor);

                r.set(3, k1 * factor);
                r.set(4, (m8 * m0 - m2 * m6) * factor);
                r.set(5, (-m5 * m0 + m2 * m3) * factor);

                r.set(6, k2 * factor);
                r.set(7, (-m7 * m0 + m1 * m6) * factor);
                r.set(8, (m4 * m0 - m1 * m3) * factor);
            }
            return r;
        }
    });
};

////////////////////////////////////////
const mat4 = (m00 = 1, m01 = 0, m02 = 0, m03 = 0,
              m10 = 0, m11 = 1, m12 = 0, m13 = 0,
              m20 = 0, m21 = 0, m22 = 1, m23 = 0,
              m30 = 0, m31 = 0, m32 = 0, m33 = 1) => {
    const data = new Float32Array([m00, m01, m02, m03,
                                   m10, m11, m12, m13,
                                   m20, m21, m22, m23,
                                   m30, m31, m32, m33]);
    return Object.freeze({
        get: i              => data[i],
        set: (i, x)         => data[i] = x,
        getData: ()         => data,
        setData: _data      => data = _data,
        copy: ()            => mat4(data[0],  data[1],  data[2],  data[3],
                                    data[4],  data[5],  data[6],  data[7],
                                    data[8],  data[9],  data[10], data[11],
                                    data[12], data[13], data[14], data[15]),
        equals: m           => floatEquals(data[0],  m.get(0))  &&
                               floatEquals(data[1],  m.get(1))  &&
                               floatEquals(data[2],  m.get(2))  &&
                               floatEquals(data[3],  m.get(3))  &&
                               floatEquals(data[4],  m.get(4))  &&
                               floatEquals(data[5],  m.get(5))  &&
                               floatEquals(data[6],  m.get(6))  &&
                               floatEquals(data[7],  m.get(7))  &&
                               floatEquals(data[8],  m.get(8))  &&
                               floatEquals(data[9],  m.get(9))  &&
                               floatEquals(data[10], m.get(10)) &&
                               floatEquals(data[11], m.get(11)) &&
                               floatEquals(data[12], m.get(12)) &&
                               floatEquals(data[13], m.get(13)) &&
                               floatEquals(data[14], m.get(14)) &&
                               floatEquals(data[15], m.get(15)),
        add: m              => mat4(data[0]  + m.get(0),
                                    data[1]  + m.get(1),
                                    data[2]  + m.get(2),
                                    data[3]  + m.get(3),
                                    data[4]  + m.get(4),
                                    data[5]  + m.get(5),
                                    data[6]  + m.get(6),
                                    data[7]  + m.get(7),
                                    data[8]  + m.get(8),
                                    data[9]  + m.get(9),
                                    data[10] + m.get(10),
                                    data[11] + m.get(11),
                                    data[12] + m.get(12),
                                    data[13] + m.get(13),
                                    data[14] + m.get(14),
                                    data[15] + m.get(15)),
        add: m              => mat4(data[0]  - m.get(0),
                                    data[1]  - m.get(1),
                                    data[2]  - m.get(2),
                                    data[3]  - m.get(3),
                                    data[4]  - m.get(4),
                                    data[5]  - m.get(5),
                                    data[6]  - m.get(6),
                                    data[7]  - m.get(7),
                                    data[8]  - m.get(8),
                                    data[9]  - m.get(9),
                                    data[10] - m.get(10),
                                    data[11] - m.get(11),
                                    data[12] - m.get(12),
                                    data[13] - m.get(13),
                                    data[14] - m.get(14),
                                    data[15] - m.get(15)),
        mul: m              => {
            const r = mat4();

            const m0  = data[0],
                  m1  = data[1],
                  m2  = data[2],
                  m3  = data[3];

            const m4  = data[4],
                  m5  = data[5],
                  m6  = data[6],
                  m7  = data[7];

            const m8  = data[8],
                  m9  = data[9],
                  m10 = data[10],
                  m11 = data[11];

            const m12 = data[12],
                  m13 = data[13],
                  m14 = data[14],
                  m15 = data[15];

            let b0 = m.get(0);
            let b1 = m.get(1);
            let b2 = m.get(2);
            let b3 = m.get(3);

            r.set(0, b0 * m0 + b1 * m4 + b2 * m8  + b3 * m12);
            r.set(1, b0 * m1 + b1 * m5 + b2 * m9  + b3 * m13);
            r.set(2, b0 * m2 + b1 * m6 + b2 * m10 + b3 * m14);
            r.set(3, b0 * m3 + b1 * m7 + b2 * m11 + b3 * m15);

            b0 = m.get(4);
            b1 = m.get(5);
            b2 = m.get(6);
            b3 = m.get(7);

            r.set(4, b0 * m0 + b1 * m4 + b2 * m8  + b3 * m12);
            r.set(5, b0 * m1 + b1 * m5 + b2 * m9  + b3 * m13);
            r.set(6, b0 * m2 + b1 * m6 + b2 * m10 + b3 * m14);
            r.set(7, b0 * m3 + b1 * m7 + b2 * m11 + b3 * m15);

            b0 = m.get(8);
            b1 = m.get(9);
            b2 = m.get(10);
            b3 = m.get(11);

            r.set(8,  b0 * m0 + b1 * m4 + b2 * m8  + b3 * m12);
            r.set(9,  b0 * m1 + b1 * m5 + b2 * m9  + b3 * m13);
            r.set(10, b0 * m2 + b1 * m6 + b2 * m10 + b3 * m14);
            r.set(11, b0 * m3 + b1 * m7 + b2 * m11 + b3 * m15);

            b0 = m.get(12);
            b1 = m.get(13);
            b2 = m.get(14);
            b3 = m.get(15);

            r.set(12, b0 * m0 + b1 * m4 + b2 * m8  + b3 * m12);
            r.set(13, b0 * m1 + b1 * m5 + b2 * m9  + b3 * m13);
            r.set(14, b0 * m2 + b1 * m6 + b2 * m10 + b3 * m14);
            r.set(15, b0 * m3 + b1 * m7 + b2 * m11 + b3 * m15);

            return r;
        },
        div: m              => mat4(data[0]  / m.get(0),
                                    data[1]  / m.get(1),
                                    data[2]  / m.get(2),
                                    data[3]  / m.get(3),
                                    data[4]  / m.get(4),
                                    data[5]  / m.get(5),
                                    data[6]  / m.get(6),
                                    data[7]  / m.get(7),
                                    data[8]  / m.get(8),
                                    data[9]  / m.get(9),
                                    data[10] / m.get(10),
                                    data[11] / m.get(11),
                                    data[12] / m.get(12),
                                    data[13] / m.get(13),
                                    data[14] / m.get(14),
                                    data[15] / m.get(15)),
        addScalar: s        => mat4(data[0]  + s,
                                    data[1]  + s,
                                    data[2]  + s,
                                    data[3]  + s,
                                    data[4]  + s,
                                    data[5]  + s,
                                    data[6]  + s,
                                    data[7]  + s,
                                    data[8]  + s,
                                    data[9]  + s,
                                    data[10] + s,
                                    data[11] + s,
                                    data[12] + s,
                                    data[13] + s,
                                    data[14] + s,
                                    data[15] + s),
        subScalar: s        => mat4(data[0]  - s,
                                    data[1]  - s,
                                    data[2]  - s,
                                    data[3]  - s,
                                    data[4]  - s,
                                    data[5]  - s,
                                    data[6]  - s,
                                    data[7]  - s,
                                    data[8]  - s,
                                    data[9]  - s,
                                    data[10] - s,
                                    data[11] - s,
                                    data[12] - s,
                                    data[13] - s,
                                    data[14] - s,
                                    data[15] - s),
        mulScalar: s        => mat4(data[0]  * s,
                                    data[1]  * s,
                                    data[2]  * s,
                                    data[3]  * s,
                                    data[4]  * s,
                                    data[5]  * s,
                                    data[6]  * s,
                                    data[7]  * s,
                                    data[8]  * s,
                                    data[9]  * s,
                                    data[10] * s,
                                    data[11] * s,
                                    data[12] * s,
                                    data[13] * s,
                                    data[14] * s,
                                    data[15] * s),
        mulScalar: s        => mat4(data[0]  / s,
                                    data[1]  / s,
                                    data[2]  / s,
                                    data[3]  / s,
                                    data[4]  / s,
                                    data[5]  / s,
                                    data[6]  / s,
                                    data[7]  / s,
                                    data[8]  / s,
                                    data[9]  / s,
                                    data[10] / s,
                                    data[11] / s,
                                    data[12] / s,
                                    data[13] / s,
                                    data[14] / s,
                                    data[15] / s),
        negate: ()          => mat4(-data[0],  -data[1],  -data[2],  -data[3],
                                    -data[4],  -data[5],  -data[6],  -data[7],
                                    -data[8],  -data[9],  -data[10], -data[11],
                                    -data[12], -data[13], -data[14], -data[15]),
        transpose: ()       => mat4(data[0], data[4], data[8],  data[12],
                                    data[1], data[5], data[9],  data[13],
                                    data[2], data[6], data[10], data[14],
                                    data[3], data[7], data[11], data[15]),
        det: ()             => {
            const b0 = data[0]  * data[5]  - data[1]  * data[4];
            const b1 = data[0]  * data[6]  - data[2]  * data[4];
            const b2 = data[1]  * data[6]  - data[2]  * data[5];
            const b3 = data[8]  * data[13] - data[9]  * data[12];
            const b4 = data[8]  * data[14] - data[10] * data[12];
            const b5 = data[9]  * data[14] - data[10] * data[13];
            const b6 = data[0]  * b5       - data[1]  * b4 + data[2]  * b3;
            const b7 = data[4]  * b5       - data[5]  * b4 + data[6]  * b3;
            const b8 = data[8]  * b2       - data[9]  * b1 + data[10] * b0;
            const b9 = data[12] * b2       - data[13] * b1 + data[14] * b0;

            return m[7] * b6 - m[3] * b7 + m[15] * b8 - m[11] * b9;
        },
        invert: ()          => {
            const m00 = data[0],
                  m01 = data[1],
                  m02 = data[2],
                  m03 = data[3];

            const m10 = data[4],
                  m11 = data[5],
                  m12 = data[6],
                  m13 = data[7];

            const m20 = data[8],
                  m21 = data[9],
                  m22 = data[10],
                  m23 = data[11];

            const m30 = data[12],
                  m31 = data[13],
                  m32 = data[14],
                  m33 = data[15];

            const b00 = m00 * m11 - m01 * m10;
            const b01 = m00 * m12 - m02 * m10;
            const b02 = m00 * m13 - m03 * m10;
            const b03 = m01 * m12 - m02 * m11;
            const b04 = m01 * m13 - m03 * m11;
            const b05 = m02 * m13 - m03 * m12;
            const b06 = m20 * m31 - m21 * m30;
            const b07 = m20 * m32 - m22 * m30;
            const b08 = m20 * m33 - m23 * m30;
            const b09 = m21 * m32 - m22 * m31;
            const b10 = m21 * m33 - m23 * m31;
            const b11 = m22 * m33 - m23 * m32;

            const det = b00 * b11 -
                        b01 * b10 +
                        b02 * b09 +
                        b03 * b08 -
                        b04 * b07 +
                        b05 * b06;

            if (!floatEquals(det, 0.0)) {
                const factor = 1.0 / det;
                return mat4((m11 * b11 - m12 * b10 + m13 * b09) * factor,
                            (m02 * b10 - m01 * b11 - m03 * b09) * factor,
                            (m31 * b05 - m32 * b04 + m33 * b03) * factor,
                            (m22 * b04 - m21 * b05 - m23 * b03) * factor,
                            (m12 * b08 - m10 * b11 - m13 * b07) * factor,
                            (m00 * b11 - m02 * b08 + m03 * b07) * factor,
                            (m32 * b02 - m30 * b05 - m33 * b01) * factor,
                            (m20 * b05 - m22 * b02 + m23 * b01) * factor,
                            (m10 * b10 - m11 * b08 + m13 * b06) * factor,
                            (m01 * b08 - m00 * b10 - m03 * b06) * factor,
                            (m30 * b04 - m31 * b02 + m33 * b00) * factor,
                            (m21 * b02 - m20 * b04 - m23 * b00) * factor,
                            (m11 * b07 - m10 * b09 - m12 * b06) * factor,
                            (m00 * b09 - m01 * b07 + m02 * b06) * factor,
                            (m31 * b01 - m30 * b03 - m32 * b00) * factor,
                            (m20 * b03 - m21 * b01 + m22 * b00) * factor);
            }
            return mat4();
        },
        translate: t => {
            const tx = t.getX(),
                  ty = t.getY(),
                  tz = t.getZ();

            return mat4(data[0], data[1], data[2], data[3],
                        data[4], data[5], data[6], data[7],
                        data[8], data[9], data[10], data[11],
                        data[0] * tx + data[4] * ty + data[8]  * tz + data[12],
                        data[1] * tx + data[5] * ty + data[9]  * tz + data[13],
                        data[2] * tx + data[6] * ty + data[10] * tz + data[14],
                        data[3] * tx + data[7] * ty + data[11] * tz + data[15]);
        },
        scale: s => {
            const sx = s.getX(),
                  sy = s.getY(),
                  sz = s.getZ();

            return mat4(data[0] * sx, data[1] * sx, data[2]  * sx, data[3]  * sx,
                        data[4] * sy, data[5] * sy, data[6]  * sy, data[7]  * sy,
                        data[8] * sz, data[9] * sz, data[10] * sz, data[11] * sz,
                        data[12],     data[13],     data[14],      data[15]);
        },
        rotate: (rads, axis) => {
            let x = axis.getX(),
                y = axis.getY(),
                z = axis.getZ();

            let len = x * x + y * y + z * z;
            if (floatEquals(len, 0.0))
                return mat4();
            len = 1.0 / Math.sqrt(len);

            x *= len;
            y *= len;
            z *= len;

            const s = Math.sin(rads);
            const c = Math.cos(rads);
            const t = 1.0 - c;

            const r00 = x * x * t + c;
            const r01 = y * x * t + z * s;
            const r02 = z * x * t - y * s;

            const r10 = x * y * t - z * s;
            const r11 = y * y * t + c;
            const r12 = z * y * t + x * s;

            const r20 = x * z * t + y * s;
            const r21 = y * z * t - x * s;
            const r22 = z * z * t + c;

            const m00 = data[0],  m01 = data[1],  m02 = data[2],  m03 = data[3],
                  m10 = data[4],  m11 = data[5],  m12 = data[6],  m13 = data[7],
                  m20 = data[8],  m21 = data[9],  m22 = data[10], m23 = data[11];

            return mat4(m00 * r00 + m10 * r01 + m20 * r02,
                        m01 * r00 + m11 * r01 + m21 * r02,
                        m02 * r00 + m12 * r01 + m22 * r02,
                        m03 * r00 + m13 * r01 + m23 * r02,
                        m00 * r10 + m10 * r11 + m20 * r12,
                        m01 * r10 + m11 * r11 + m21 * r12,
                        m02 * r10 + m12 * r11 + m22 * r12,
                        m03 * r10 + m13 * r11 + m23 * r12,
                        m00 * r20 + m10 * r21 + m20 * r22,
                        m01 * r20 + m11 * r21 + m21 * r22,
                        m02 * r20 + m12 * r21 + m22 * r22,
                        m03 * r20 + m13 * r21 + m23 * r22,
                        data[12], data[13], data[14], data[15]);
        },
        print: () => {
            console.log(`mat4: [${data[0]}, ${data[1]}, ${data[2]}, ${data[3]},\n
       ${data[4]}, ${data[5]}, ${data[6]}, ${data[7]},\n
       ${data[8]}, ${data[9]}, ${data[10]}, ${data[11]},\n
       ${data[12]}, ${data[13]}, ${data[14]}, ${data[15]}]`)}
    });
};

////////////////////////////////////////
const quat = (rads, axis, exec = true) => {
    let data;
    if (exec) {
        const s_rads = Math.sin(rads * 0.5);
        const c_rads = Math.cos(rads * 0.5);
        data = new Float32Array([
            c_rads,
            s_rads * axis.getX(),
            s_rads * axis.getY(),
            s_rads * axis.getZ()
        ]);
    }
    else {
        data = new Float32Array([1, 0, 0, 0]);
    }

    return Object.freeze({
        get: i              => data[i],
        getData: ()         => data,
        getX: ()            => data[0],
        getY: ()            => data[1],
        getZ: ()            => data[2],
        getW: ()            => data[3],
        set: (i, val)       => data[i] = val,
        setData: _data      => data = _data,
        getAxis: ()         => axis,
        getRadians: ()      => rads,
        copy: ()            => quat(rads, axis),
        equals: q           => floatEquals(data[0], q.get(0)) &&
                               floatEquals(data[1], q.get(1)) &&
                               floatEquals(data[2], q.get(2)) &&
                               floatEquals(data[3], q.get(3)),
        add: q              => {
            const r = quat(0, 0, false);
            r.set(0, data[0] + q.get(0));
            r.set(1, data[1] + q.get(1));
            r.set(2, data[2] + q.get(2));
            r.set(3, data[3] + q.get(3));
            return r;
        },
        sub: q              => {
            const r = quat(0, 0, false);
            r.set(0, data[0] - q.get(0));
            r.set(1, data[1] - q.get(1));
            r.set(2, data[2] - q.get(2));
            r.set(3, data[3] - q.get(3));
            return r;
        },
        mul: q              => {
            const r = quat(0, 0, false);
            r.set(0, data[0] * q.get(0) -
                     data[1] * q.get(1) -
                     data[2] * q.get(2) -
                     data[3] * q.get(3));
            r.set(1, data[0] * q.get(1) +
                     data[1] * q.get(0) +
                     data[2] * q.get(3) +
                     data[3] * q.get(2));
            r.set(2, data[0] * q.get(2) +
                     data[2] * q.get(0) +
                     data[1] * q.get(3) +
                     data[3] * q.get(1));
            r.set(3, data[0] * q.get(3) +
                     data[3] * q.get(0) +
                     data[1] * q.get(2) +
                     data[2] * q.get(1));
            return r;
        },
        div: q              => {
            const r = quat(0, 0, false);
            r.set(0, data[0] / q.get(0));
            r.set(1, data[1] / q.get(1));
            r.set(2, data[2] / q.get(2));
            r.set(3, data[3] / q.get(3));
            return r;
        },
        addScalar: s        => {
            const r = quat(0, 0, false);
            r.set(0, data[0] + s);
            r.set(1, data[1] + s);
            r.set(2, data[2] + s);
            r.set(3, data[3] + s);
            return r;
        },
        subScalar: s        => {
            const r = quat(0, 0, false);
            r.set(0, data[0] - s);
            r.set(1, data[1] - s);
            r.set(2, data[2] - s);
            r.set(3, data[3] - s);
            return r;
        },
        mulScalar: s        => {
            const r = quat(0, 0, false);
            r.set(0, data[0] * s);
            r.set(1, data[1] * s);
            r.set(2, data[2] * s);
            r.set(3, data[3] * s);
            return r;
        },
        divScalar: s        => {
            const r = quat(0, 0, false);
            r.set(0, data[0] / s);
            r.set(1, data[1] / s);
            r.set(2, data[2] / s);
            r.set(3, data[3] / s);
            return r;
        },
        conjugate: ()       => {
            const r = quat(0, 0, false);
            r.set(0,  data[0]);
            r.set(1, -data[1]);
            r.set(2, -data[2]);
            r.set(3, -data[3]);
            return r;
        },
        sqrlen: ()          => data[0] * data[0] +
                               data[1] * data[1] +
                               data[2] * data[2] +
                               data[3] * data[3],
        len: ()             => Math.sqrt(data[0] * data[0] +
                                         data[1] * data[1] +
                                         data[2] * data[2] +
                                         data[3] * data[3]),
        normalize: ()       => {
            const r = quat(0, 0, false);
            const sum = data[0] * data[0] +
                        data[1] * data[1] +
                        data[2] * data[2] +
                        data[3] * data[3];
            if (!floatEquals(sum, 0.0)) {
                const factor = 1.0 / Math.sqrt(sum);
                r.set(0, factor * data[0]);
                r.set(1, factor * data[1]);
                r.set(2, factor * data[2]);
                r.set(3, factor * data[3]);
            }
            return r;
        },
        inverse: ()         => {
            const sum = data[0] * data[0] +
                        data[1] * data[1] +
                        data[2] * data[2] +
                        data[3] * data[3];
            const r = quat(0, 0, false);
            if (!floatEquals(sum, 0.0)) {
                const factor = 1.0 / Math.sqrt(sum);
                r.set(0,  factor * data[0]);
                r.set(1, -factor * data[1]);
                r.set(2, -factor * data[2]);
                r.set(3, -factor * data[3]);
            }
            return r;
        },
        printHuman: ()      => console.log(`${rads} radians around axis ${axis.print()}`),
        printMachine: ()    => console.log(`quat: [${data[0]}, ${data[1]}, ${data[2]}, ${data[3]}]`)
    });
};

////////////////////////////////////////
const transform = Object.freeze({
    genTranslation: t   => mat4(1.0,      0.0,      0.0,      0.0,
                                0.0,      1.0,      0.0,      0.0,
                                0.0,      0.0,      1.0,      0.0,
                                t.getX(), t.getY(), t.getZ(), 1.0),
    genScale: s         => mat4(s.getX(), 0.0,      0.0,      0.0,
                                0.0,      s.getY(), 0.0,      0.0,
                                0.0,      0.0,      s.getZ(), 0.0),
    genRotation: q      => {
        const s = q.getX(),
              x = q.getY(),
              y = q.getZ(),
              z = q.getW();


        const xx = 2.0 * x * x;
        const yy = 2.0 * y * y;
        const zz = 2.0 * z * z;

        const xy = 2.0 * x * y;
        const xz = 2.0 * x * z;
        const yz = 2.0 * y * z;

        const sz = 2.0 * s * z;
        const sy = 2.0 * s * y;
        const sx = 2.0 * s * x;

        const r = mat4();

        r.set(0,  1.0 - yy - zz);
        r.set(1,  xy + sz);
        r.set(2,  xz - sy);
        r.set(3,  0.0);

        r.set(4,  xy - sz);
        r.set(5,  1.0 - xx - zz);
        r.set(6,  yz + sx);
        r.set(7,  0.0);

        r.set(8,  xz + sy);
        r.set(9,  yz - sx);
        r.set(10, 1.0 - xx - yy);
        r.set(11, 0.0);

        r.set(12, 0.0);
        r.set(13, 0.0);
        r.set(14, 0.0);
        r.set(15, 1.0);

        return r;
    },
    genModel: (t, q, s)     => {
        const x = q.getY(),
              y = q.getZ(),
              z = q.getW(),
              w = q.getX();

        const x2 = x + x;
        const y2 = y + y;
        const z2 = z + z;

        const xx = x * x2;
        const xy = x * y2;
        const xz = x * z2;

        const yy = y * y2;
        const yz = y * z2;
        const zz = z * z2;

        const wx = w * x2;
        const wy = w * y2;
        const wz = w * z2;

        const sx = s.getX();
        const sy = s.getY();
        const sz = s.getZ();

        const r = mat4();

        r.set(0,  (1 - (yy + zz)) * sx);
        r.set(1,  (xy + wz) * sx);
        r.set(2,  (xz - wy) * sx);
        r.set(3,  0);
        r.set(4,  (xy - wz) * sy);
        r.set(5,  (1 - (xx + zz)) * sy);
        r.set(6,  (yz + wx) * sy);
        r.set(7,  0);
        r.set(8,  (xz + wy) * sz);
        r.set(9,  (yz - wx) * sz);
        r.set(10, (1 - (xx + yy)) * sz);
        r.set(11, 0);
        r.set(12, t.getX());
        r.set(13, t.getY());
        r.set(14, t.getZ());
        r.set(15, 1);

        return r;
    },
    genPerspective: (fovy, aspectRatio, near, far) => {
        const tangent = Math.tan(fovy * 0.5);
        const height = near * tangent;
        const width = height * aspectRatio;

        return mat4(near / width, 0.0,           0.0,                               0.0,
                    0.0,          near / height, 0.0,                               0.0,
                    0.0,          0.0,          -(far + near) / (far - near),      -1.0,
                    0.0,          0.0,          (-2.0 * far * near) / (far - near), 0.0);
    },
    genOrtho: (width, height, near, far) => {
        return mat4(1.0 / width, 0.0,          0.0,                         0.0,
                    0.0,         1.0 / height, 0.0,                         0.0,
                    0.0,         0.0,         -2.0 / (far - near),          0.0,
                    0.0,         0.0,         -(far + near) / (far - near), 1.0);
    },
    genLookAt: (eye, target, up) => {
        const zAxis = eye.sub(target).normalize();
        const xAxis = up.cross(zAxis).normalize();
        const yAxis = zAxis.cross(xAxis).normalize();

        return mat4(xAxis.getX(),     yAxis.getX(),    zAxis.getX(),   0.0,
                    xAxis.getY(),     yAxis.getY(),    zAxis.getY(),   0.0,
                    xAxis.getZ(),     yAxis.getZ(),    zAxis.getZ(),   0.0,
                   -xAxis.dot(eye),  -yAxis.dot(eye), -zAxis.dot(eye), 1.0);
    },
    genView: (xAxis, yAxis, zAxis, eye) => {
        return mat4(xAxis.getX(),    yAxis.getX(),    zAxis.getX(),   0.0,
                    xAxis.getY(),    yAxis.getY(),    zAxis.getY(),   0.0,
                    xAxis.getZ(),    yAxis.getZ(),    zAxis.getZ(),   0.0,
                   -xAxis.dot(eye), -yAxis.dot(eye), -zAxis.dot(eye), 1.0);
    },
    genNormalMatrix: modelViewMatrix => modelViewMatrix.invert().transpose()
});

////////////////////////////////////////
const createCube = device => {
    const vertices = new Float32Array([
        -0.5, -0.5,  0.5,  1.0,     1.0, 0.0, 0.0, 1.0,
         0.5, -0.5,  0.5,  1.0,     1.0, 0.0, 0.0, 1.0,
         0.5,  0.5,  0.5,  1.0,     1.0, 0.0, 0.0, 1.0,
         0.5,  0.5,  0.5,  1.0,     1.0, 0.0, 0.0, 1.0,
        -0.5,  0.5,  0.5,  1.0,     1.0, 0.0, 0.0, 1.0,
        -0.5, -0.5,  0.5,  1.0,     1.0, 0.0, 0.0, 1.0,

         0.5, -0.5,  0.5,  1.0,     0.0, 1.0, 0.0, 1.0,
         0.5, -0.5, -0.5,  1.0,     0.0, 1.0, 0.0, 1.0,
         0.5,  0.5, -0.5,  1.0,     0.0, 1.0, 0.0, 1.0,
         0.5,  0.5, -0.5,  1.0,     0.0, 1.0, 0.0, 1.0,
         0.5,  0.5,  0.5,  1.0,     0.0, 1.0, 0.0, 1.0,
         0.5, -0.5,  0.5,  1.0,     0.0, 1.0, 0.0, 1.0,

        -0.5, -0.5, -0.5,  1.0,     0.0, 0.0, 1.0, 1.0,
        -0.5,  0.5, -0.5,  1.0,     0.0, 0.0, 1.0, 1.0,
         0.5,  0.5, -0.5,  1.0,     0.0, 0.0, 1.0, 1.0,
         0.5,  0.5, -0.5,  1.0,     0.0, 0.0, 1.0, 1.0,
         0.5, -0.5, -0.5,  1.0,     0.0, 0.0, 1.0, 1.0,
        -0.5, -0.5, -0.5,  1.0,     0.0, 0.0, 1.0, 1.0,

        -0.5, -0.5,  0.5,  1.0,     1.0, 1.0, 0.0, 1.0,
        -0.5,  0.5,  0.5,  1.0,     1.0, 1.0, 0.0, 1.0,
        -0.5,  0.5, -0.5,  1.0,     1.0, 1.0, 0.0, 1.0,
        -0.5,  0.5, -0.5,  1.0,     1.0, 1.0, 0.0, 1.0,
        -0.5, -0.5, -0.5,  1.0,     1.0, 1.0, 0.0, 1.0,
        -0.5, -0.5,  0.5,  1.0,     1.0, 1.0, 0.0, 1.0,

        -0.5,  0.5,  0.5,  1.0,     1.0, 0.0, 1.0, 1.0,
         0.5,  0.5,  0.5,  1.0,     1.0, 0.0, 1.0, 1.0,
         0.5,  0.5, -0.5,  1.0,     1.0, 0.0, 1.0, 1.0,
         0.5,  0.5, -0.5,  1.0,     1.0, 0.0, 1.0, 1.0,
        -0.5,  0.5, -0.5,  1.0,     1.0, 0.0, 1.0, 1.0,
        -0.5,  0.5,  0.5,  1.0,     1.0, 0.0, 1.0, 1.0,

        -0.5, -0.5,  0.5,  1.0,     0.0, 1.0, 1.0, 1.0,
        -0.5, -0.5, -0.5,  1.0,     0.0, 1.0, 1.0, 1.0,
         0.5, -0.5, -0.5,  1.0,     0.0, 1.0, 1.0, 1.0,
         0.5, -0.5, -0.5,  1.0,     0.0, 1.0, 1.0, 1.0,
         0.5, -0.5,  0.5,  1.0,     0.0, 1.0, 1.0, 1.0,
        -0.5, -0.5,  0.5,  1.0,     0.0, 1.0, 1.0, 1.0
    ]);
    const vbuffer = createVertexBuffer(device, vertices);

    return Object.freeze({
        vertices,
        draw: renderPass => {
            renderPass.setVertexBuffer(0, vbuffer.getBuffer());
            renderPass.draw(vertices.length / 8);
        }
    });
};

////////////////////////////////////////
const checkWebGPUSupport = () => {
    if (!navigator.gpu) {
        throw new Error("[GronckleJS] WebGPU is not supported");
    }
};

////////////////////////////////////////
const resizeCanvas = canvas => {
    if (canvas.width !== canvas.clientWidth ||
        canvas.height !== canvas.clientHeight) {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
    }
};

////////////////////////////////////////
const initCanvas = canvasId => {
    const canvas = document.getElementById(canvasId);
    if (!canvas) {
        throw new Error(`[GronckleJS] canvas ${canvasId} not found`);
    }
    resizeCanvas(canvas);
    return canvas;
};

////////////////////////////////////////
const initAdapter = async () => {
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) {
        throw new Error("[GronckleJS] gpu.requestAdaptor() returned null");
    }
    return adapter;
};

////////////////////////////////////////
const initDevice = async adapter => {
    const device = await adapter.requestDevice();
    if (!device) {
        throw new Error("[GronckleJS] adapter.requestDevice() returned null");
    }
    return device;
};

////////////////////////////////////////
const initContext = canvas => {
    const ctx = canvas.getContext("webgpu");
    if (!ctx) {
        throw new Error("[GronckleJS] getContext() returned null");
    }
    return ctx;
};

////////////////////////////////////////
const createVertexBuffer = (device, data) => {
    const vbuffer = device.createBuffer({
        size: data.byteLength,
        usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
        mappedAtCreation: true
    });
    new Float32Array(vbuffer.getMappedRange()).set(data);
    vbuffer.unmap();

    return Object.freeze({
        getBuffer: ()   => vbuffer,
        size: ()        => data.length,
        sizeInBytes: () => data.byteLength,
        getData: ()     => data,
        getDevice: ()   => device
    });
};

////////////////////////////////////////
const createIndexBuffer = (device, data) => {
    const vbuffer = device.createBuffer({
        size: data.byteLength,
        usage: GPUBufferUsage.INDEX | GPUBufferUsage.COPY_DST,
        mappedAtCreation: true
    });
    new Uint32Array(vbuffer.getMappedRange()).set(data);
    vbuffer.unmap();

    return Object.freeze({
        getBuffer: ()   => vbuffer,
        size: ()        => data.length,
        sizeInBytes: () => data.byteLength,
        getData: ()     => data,
        getDevice: ()   => device
    });
};

////////////////////////////////////////
const createShader = async (device, renderPipelineDesc, shaderUrl, type, format) => {
    const shader_src_req = await fetch(shaderUrl);
    const shader_src     = await shader_src_req.text();

    switch (type) {
        case "vertex":
            renderPipelineDesc.vertex = {
                module: device.createShaderModule({
                    code: shader_src
                }),
                entryPoint: "vertex_main"
            };
            break;
        case "fragment":
            renderPipelineDesc.fragment = {
                module: device.createShaderModule({
                    code: shader_src
                }),
                entryPoint: "fragment_main",
                targets: [{ format }]
            };
            break;
        default:
            throw new Error("[GronckleJS] invalid shader type");
    }
};

////////////////////////////////////////
const createDepthTexture = (device, canvas) => device.createTexture({
    size: [canvas.width, canvas.height, 1],
    format: "depth24plus",
    usage: GPUTextureUsage.RENDER_ATTACHMENT
});

////////////////////////////////////////
const createRenderPass = (cmdEncoder,
                          clearColor,
                          textureView,
                          depthTexture) => cmdEncoder.beginRenderPass({
    colorAttachments: [{
        view: textureView,
        clearValue: [ clearColor.getX(),
                      clearColor.getY(),
                      clearColor.getZ(),
                      clearColor.getW() ],
        loadOp: "clear",
        storeOp: "store"
    }],
    depthStencilAttachment: {
        view: depthTexture.createView(),
        depthClearValue: 1.0,
        depthLoadOp: "clear",
        depthStoreOp: "store",
        stencilClearValue: 0,
        stencilLoadOp: "clear",
        stencilStoreOp: "store"
    }
});

////////////////////////////////////////
const createBasicShaderAttributeConfig = renderPipelineDesc => {
    renderPipelineDesc.vertex.buffers = [{
        arrayStride: 32,
        attributes: [{
            shaderLocation: 0,
            format: "float32x4",
            offset: 0
        }, {
            shaderLocation: 1,
            format: "float32x4",
            offset: 16
        }]
    }];
};

////////////////////////////////////////
const getTime = () => {
    if (performance.now)
        return performance.now();
    else if (performance.webkitNow)
        return performance.webkitNow();
    else
        return new Date().getTime();
};

////////////////////////////////////////
const GronckleJS = async canvasId => {

    checkWebGPUSupport();
    const canvas = initCanvas(canvasId);
    const ctx = initContext(canvas);
    const adapter = await initAdapter();
    const device = await initDevice(adapter);

    const format = "bgra8unorm";
    ctx.configure({ device, format });

    const cube = createCube(device);
    // const ibuffer = createIndexBuffer(device, indexData);

    const renderPipelineDesc = {};
    await createShader(device,
                       renderPipelineDesc,
                       "../shaders/basic.wgsl",
                       "vertex",
                       format);
    await createShader(device,
                       renderPipelineDesc,
                       "../shaders/basic.wgsl",
                       "fragment",
                       format);

    createBasicShaderAttributeConfig(renderPipelineDesc);

    const pipeline = device.createRenderPipeline({
        vertex: renderPipelineDesc.vertex,
        fragment: renderPipelineDesc.fragment,
        primitive: {
            topology: "triangle-list",
            cullMode: "back"
        },
        depthStencil: {
            format: "depth24plus",
            depthWriteEnabled: true,
            depthCompare: "less"
        }
    });

    const ubuffer = device.createBuffer({
        size: 64,
        usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST
    });

    const uBindGroup = device.createBindGroup({
        layout: pipeline.getBindGroupLayout(0),
        entries: [{
                binding: 0,
                resource: {
                    buffer: ubuffer,
                    offset: 0,
                    size: 64
                }
            }
        ]
    });

    const depthTexture = createDepthTexture(device, canvas);

    let angle = 0.0, lastTime = 0;
    const draw = () => {
        const currentTime = getTime();
        const deltaTime = lastTime ? currentTime - lastTime : 0;
        lastTime = currentTime;

        const commandEncoder = device.createCommandEncoder();
        const textureView = ctx.getCurrentTexture().createView();
        const renderPass = createRenderPass(commandEncoder,
                                            vec4(0.2, 0.3, 0.3, 1.0),
                                            textureView,
                                            depthTexture);

        resizeCanvas(canvas);
        const projectionMatrix = transform.genPerspective(Math.PI / 2.0,
                                                          canvas.width / canvas.height,
                                                          0.1,
                                                          1000.0);

        const modelMatrix = mat4().translate(vec3(0, 0, -2))
                                  .rotate(angle, vec3(1, 1, 1));
        angle += deltaTime * 1e-3;

        const mvpMatrix = projectionMatrix.mul(modelMatrix);

        device.queue.writeBuffer(ubuffer, 0, mvpMatrix.getData());

        renderPass.setBindGroup(0, uBindGroup);
        renderPass.setPipeline(pipeline);
        cube.draw(renderPass);
        renderPass.end();

        device.queue.submit([commandEncoder.finish()]);
        requestAnimationFrame(draw);
    };
    requestAnimationFrame(draw);

    return Object.freeze({
        vec2, vec3, vec4,
        mat2, mat3, mat4,
        quat,
        transform,
        createCube,
        getTime
    });
};

export {GronckleJS};
