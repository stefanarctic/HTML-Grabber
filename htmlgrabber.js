
import PromptSync from "prompt-sync";
import fs from 'fs';
import fetch from "node-fetch";

const prompt = PromptSync();

function handleData(data) {
	fs.appendFile("index.html", data, res => {
		console.log("Written to file index.html");
	})
}

const url = prompt("Url: ");

fetch(url).then(response => response.text()).then(data => handleData(data));