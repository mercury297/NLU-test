// console.log('hi');

const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['en'] });

const fs = require('fs');

let rawdata = fs.readFileSync('data-clean.json');  
let temp = JSON.parse(rawdata);  
// console.log(student);  

// for(var i = 1;i<5;i++){
// 	console.log(temp[i])
// }

console.log(temp[2].req);

console.log(temp[2].dep);

// for(var i = 1;i<10;i++){
// 	// Adds the utterances and intents for the NLP
// manager.addDocument('en',temp[i].req,temp[i].dep);
// }


// for(var i = 1;i<5;i++){
// 	// Adds the utterances and intents for the NLP
// manager.addAnswer('en',temp[i].req,temp[i].dep);
// }

// // Train and save the model.
// (async() => {
//     await manager.train();
//     manager.save();
//     const response = await manager.process('en', 'potholes');
//     console.log(response);
// })();

// manager.load(model.nlp);



