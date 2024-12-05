
// console.log("Hello I am Harsh Arya");
// console.log(THREE);

// Targeting the html element
const target = document.querySelector(".sceen");
const scene = new THREE.Scene();


//Making Object with (geometry+material) & adding it into to make an object via mesh and then add it into scene

const geometry = new THREE.BoxGeometry(2,2,2);
const material = new THREE.MeshBasicMaterial({color: "lightsalmon"});
const boxObj = new THREE.Mesh(geometry,material);
scene.add(boxObj);



//Now we are defining camera and its position & adding it into scene

const size = {
    width: 700,
    height: 500,
}
const camera = new THREE.PerspectiveCamera( 45, size.width / size.height, 1, 1000 );
scene.add( camera );
camera.position.z = 4;


//Now we are defining renderer & give scene camera to it also give the details about size to renderer(director)

const renderer = new THREE.WebGLRenderer();
renderer.setSize(size.width, size.height)

renderer.render(scene, camera);


