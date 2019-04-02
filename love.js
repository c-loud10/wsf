module.exports = (req, res) => { 
var param = req.url;

res.end(`this function created just to tell you how much i love you ${param}`); };

var ver = 1;