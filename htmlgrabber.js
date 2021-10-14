
const prompt = require('prompt-sync')();
const fs = require('fs');
const fetch = require('node-fetch');

function handleData(data) {
	fs.appendFile("index.html", data, res => {
		console.log("Written to file index.html");
	})
}

const url = prompt("Url: ");

fetch(url).then(response => response.text()).then(data => handleData(data));