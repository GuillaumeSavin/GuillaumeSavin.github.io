//import * as THREE from 'three';

console.log("o");

var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);

camera.position.set(2,0,5);

var renderer = new THREE.WebGLRenderer();

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1 ,1 ,1);
var material = new THREE.MeshNormalMaterial();
var texture = new THREE.TextureLoader().load("textures/Kanade.png");
const materialTex = new THREE.MeshBasicMaterial({ map: texture });
var cube = new THREE.Mesh(geometry, materialTex);

scene.add(cube);

const controls = new THREE.OrbitControls( camera, renderer.domElement );

const loader = new THREE.GLTFLoader();
var model
loader.load(
    'models/scene.gltf',
    function (gltf) {
        model = gltf.scene;
        scene.add(gltf.scene);
    },
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    function (error) {
        console.log('An error happened in loading 3D object');
    }
)

const light = new THREE.PointLight( 0xffffff, 15, 100 );
light.position.set( 50, 50, 50 );
scene.add(light);

var orientation = {
    x: 0,
    y: 0
};

var motion = {
    x: 0,
    y: 0
};

window.addEventListener("deviceorientation", function (event) {
    orientation.x = event.gamma;
    orientation.y = event.beta;
});

window.addEventListener("devicemotion", function (event) {
    motion.x = event.accelerationIncludingGravity.x;
    motion.y = event.accelerationIncludingGravity.y;
    if (motion.x > 0) {
        motion.x = 0.01;
    } else if(motion.x === 0) {
        motion.x = 0;
    } else {
        motion.x = -0.01;
    }

    if (motion.y > 0) {
        motion.y = 0.01;
    } else if(motion.y === 0) {
        motion.y = 0;
    } else {
        motion.y = -0.01;
    }
})


//var myObject = scene.children[2];
console.log(loader);
var render = function () {
    requestAnimationFrame(render);
    cube.rotation.x = orientation.x;
    cube.rotation.y = orientation.y;
    model.rotation.x = motion.x;
    model.rotation.y = motion.y;
    renderer.render(scene, camera);
}

render();


