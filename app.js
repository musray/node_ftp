const Client = require("ftp");
const iconv = require("iconv-lite");

var c = new Client();
var path = "Projects/你好世界";


c.on('ready', function() {

  c.cwd(path, function(err, res) {
    if ( err ) throw err;
    console.log(res);
  });

  c.list(function(err, list) {
    if (err) throw err;
    for (i in list) {
      console.log(list[i]);
    }
  });

  c.end();
});
// connect to localhost:21 as anonymous 
c.connect(
  {
    "user": "churui",
    "password": "19840330"
  }
);
