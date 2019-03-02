const { NlpManager } = require('node-nlp');

const manager = new NlpManager({ languages: ['en'] });
//const manager = new NlpManager();

// var fs = require('fs');
// var obj = JSON.parse(fs.readFileSync('data-clean1.json', 'utf8'));

// n_objs = obj.length;
//console.log(n_objs);

//Adds the utterances and intents for the NLP
// obj.forEach(data => {
//     manager.addDocument('en', data["req"], data["dep"]);
// });

// // obj.forEach(data => {
// // 	//if(data["dep"] == )
// // 	console.log(data);
// // })

// //Train also the NLG
// obj.forEach(data => {
//     manager.addAnswer('en', data["dep"], data["req"]);
// });

// //Train and save the model.
// // console.log(obj[100]);

(async() => {
    	 await manager.train();
     	//manager.save();
    manager.load("model.nlp");
    const response = await manager.process('en', "Anil Sahasrabudhe");
    console.log(response);
})();