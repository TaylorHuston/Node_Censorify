var censor = require("taylorcensorify");
console.log(censor.getCensoredWords());
console.log(censor.censor("Some very sad, bad, mad text"));
censor.addCensoredWord("gloomy");
console.log(censor.getCensoredWords());
console.log(censor.censor("A very gloomy day"));