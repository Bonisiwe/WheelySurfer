import *as THREE from './Libra/three.module.js';

class Wheel{

    constructor() {
        this._wheel = new THREE.Group();

        const wheel_o = this._generateObj();
        wheel_o.scale.set(0.01,0.01,0.01);
        wheel_o.rotation.y = Math.PI/2;
        wheel_o.position.y -=0.05;

        this._wheel.add(wheel_o);

    }
    _generateObj(){
        const geometry = new THREE.TorusGeometry( 10, 5, 16, 100 );
        const material = new THREE.MeshNormalMaterial();
        return new THREE.Mesh( geometry, material );

    }

    get getWheel(){
        return this._wheel;
    }
}
export {Wheel};