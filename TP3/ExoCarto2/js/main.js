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

window.addEventListener("deviceorientation", function (event) {
    cube.rotation.x = event.gamma;
    cube.rotation.y = event.beta;
})

//var myObject = scene.children[2];
console.log(loader);
var render = function () {
    requestAnimationFrame(render);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    model.rotation.y += 0.01;
    renderer.render(scene, camera);
}

render();


