const fs = require('fs');

var lines = [];

fs.readdir("./files-to-merge", function(err, items) { 
	for (let i=0; i<items.length; i++) {
		console.log("Reading " + items[i]);
		var content = fs.readFileSync("./files-to-merge/"+items[i], 'utf-8').split('\n');

		for(let j = 0; j < content.length; j++) {
			if(!lines.includes(content[j])) {
				lines.push(content[j]);
			}
		}
	}
	console.log(lines.length + " unique lines found");
	console.log("Sorting by name");
	lines.sort((a, b) => a.localeCompare(b))
	console.log("Writing lines to ./output-file.txt");
	fs.writeFileSync('./output-file.txt', lines.join('\n'));
	console.log("Done");
});