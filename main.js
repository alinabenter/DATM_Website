// Main.js

// Create scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('background').appendChild(renderer.domElement);
jndkd
// Load the 360° texture
const textureLoader = new THREE.TextureLoader();
textureLoader.load('/assets/images/background5.png', function(texture) {
    const geometry = new THREE.SphereGeometry(500, 60, 40);
    texture.wrapS = THREE.RepeatWrapping;
    texture.repeat.x = -1;
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);
        sphere.rotation.y += 0.001;  // Adjust rotation speed as needed
        renderer.render(scene, camera);
    }
    animate();
});

// Position the camera
camera.position.set(0, 0, 0.1);

// Handle window resize
window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});