/////////////////
const RADIUS_EARTH = 6.371088e+6;
let phaseShift = 0;
let a = 0;
let b = 0;
let inclination = 0;
let motion = 0;
let orbitalPeriod = 0;

onmessage = function (e) {
    a = e.data.a;
    b = e.data.b;
    phaseShift = e.data.phaseShift;
    inclination = e.data.inclination;
    motion = e.data.motion;
    orbitalPeriod = e.data.orbitalPeriod

}

function position() {
    //Current time in seconds:
    const t = Date.now() / 1; 

    const theta = 2*Math.PI*t/orbitalPeriod + phaseShift;
    const pos = { 
        "x": -motion*a * Math.cos(theta),
        //TODO: y axis
        "y": 0,//b*Math.cos(theta)
        "z": b * Math.sin(theta)
    };

    
    postMessage(pos);
    setTimeout("position()", 100);
}

position();