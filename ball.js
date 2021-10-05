/////////////////
const RADIUS_EARTH = 6.371088e+6;
let phaseShift = 0;
let a = 0;
let b = 0;
let inclination = 0;
let motion = 0;

onmessage = function (e) {
    a = e.data.a;
    b = e.data.b;
    phaseShift = e.data.phaseShift;
    inclination = e.data.inclination;
    motion = e.data.motion;
    originalA = a;
}

function position() {
    //Current time in seconds:
    const t = Date.now() / 1; 

    // Satellites orbital period:
    const T = orbitalPeriod(a);

    const theta = 2*Math.PI*t/T + phaseShift;
    const pos = { 
        "x": -motion*a * Math.cos(theta),
        //TODO: y axis
        "y": 0,
        "z": b * Math.sin(theta)
    };

    
    postMessage(pos);
    setTimeout("position()", 100);
}

function orbitalPeriod(heightAboveSurface){
    const MU = 3.986004418e+14;
    let period = 2*Math.PI*Math.sqrt(((RADIUS_EARTH + heightAboveSurface))**3/(MU));
    return period;
}

position();