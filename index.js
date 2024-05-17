// simple example of using google text to speech using javascript

const gTTS = require('gtts');
     
let speech = 'Laurum Ipsum Dolor Est';
const  gtts = new gTTS(speech, 'en');
 
gtts.save('Voice.mp3', function (err, result){
    if(err) { throw new Error(err); }
    console.log("Text to speech converted!");
});
