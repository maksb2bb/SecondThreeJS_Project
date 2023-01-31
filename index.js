//scene, camera,  renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight);
const renderer = new THREE.WebGLRenderer();

scene.background = new THREE.Color(0x000fff);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
camera.position.z = 3;
camera.position.y = 0;

const material1 = new THREE.MeshBasicMaterial({color: 0x00FFAA});
const cubeGeometry = new THREE.BoxGeometry(1,0.1,1);
const cube = new THREE.Mesh(cubeGeometry, material1);
scene.add(cube);

function animate(){
    requestAnimationFrame(animate);
    renderer.render( scene, camera);
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.01;
    cube.rotation.z += 0.01
}

animate();