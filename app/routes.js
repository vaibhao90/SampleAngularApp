
module.exports = function(app) {

   app.get('/admin', function(req, res) {
  		res.sendfile('./public/index.html');
 	});


  app.get('/', function(req, res) {
    console.log(" In Index");
      //res.locals.title = '1';
      res.render('index', {title: "Sample App", mode: app.get('MODE')});
  });

};
