// simple example of using google text to speech using javascript, loading in parameters from a config file.
// Brian Dewhirst 2024-05-17

const Gtts = require('gtts');
const http = require('http');
const CONFIG = require('./config.json');
const speech= CONFIG.dftPhrase;
const save_file_name = "".concat(CONFIG.audFileName, CONFIG.audFileExtension);
let gtts = new Gtts(speech, 'en');


gtts.save(save_file_name, function (err, result){
    if(err) { throw new Error(err); }
    console.log("Text to speech converted! Look for a local file whose name matches the fields in config.json.\ " +
                "Please note that this program runs until closed, as some output(s) may be available at \`" +
                "http://localhost:[port]`");
});

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    let message = "".concat('You should see a file called ', save_file_name);
    res.end(message);
}).listen(CONFIG.localPortNo);