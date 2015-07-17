"use strict";

var scene;
var camera;
var renderer;
window.onload = function init() {
	var width = 720.0;
	var height = 480.0;
	scene = new THREE.Scene();
	camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 200);

	renderer = new THREE.WebGLRenderer();
	renderer.setSize(width, height);
	document.body.appendChild(renderer.domElement);

	var fs = getFile("shaders/square.fs");
	var vs = getFile("shaders/square.vs");
	
	var shaderMaterial = new THREE.MeshShaderMaterial({
		vertexShader : vs,
		fragmentShader : fs
	});
	
	var geometry = new THREE.BoxGeometry(1, 1, 1);
	var material = new THREE.MeshBasicMaterial({
		color : 0x00ff00
	});

	var cube = new THREE.Mesh(geometry, material);
	scene.add(cube);

	camera.position.z = 5;

	render();
};

function render() {
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}