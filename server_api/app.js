
var MapData = require('../model/data');
var url = require('url');

module.exports = function(app) {

	// server routes ===========================================================
	app.get('*', function(req, res){
		res.sendfile('./examples/game/phaser.html');
	});
	
	// make local http GET available!
	app.get('/map/*', function(req, res) {
		res.sendfile('./map/index.html');
	});


	// handle things like api calls
	app.get('/api/maps/gallery', function(req, res, next){
		var parts = url.parse(req.url, true);
		var query = parts.query;

		//console.log('page number:', query.page)

		MapData.paginate({}, { page: query.page, limit: 4, sort: {date:-1} }, function(err, result) {
			if (err) { return next(err) }
			
			// result.docs
			// result.total
			// result.limit - 10
			// result.page - 3
			// result.pages
			
			//console.log('result;', result);

			var data = {};
			data.count = result.total;
			data.pages = result.docs;
			data.perpage = result.page;

			//console.log(data);

		  	res.json(data);
		});
	});

	app.get('/api/maps/counts', function(req, res, next){
		MapData.count({}, function(err, count){
			if (err) { return next(err) }

			//console.log('current drawing count', count);
			res.json(count);

		})
	});

	app.post('/api/maps/posts', function(req, res, next) {

		var mapData = new MapData({
			author : req.body.author,
			name   : req.body.name,
			data   : req.body.data,
			width  : req.body.width,
			height : req.body.height
		});

        //console.log('received mapData:', mapData);

		mapData.save(function(err, data){
			if (err) { 
				//console.log('db save failed..');
				return next(err);
			}

			//console.log('map upload complete..');
			res.json(201, data);
		});
	});

	app.post('/api/maps/inc_rate', function(req, res, next) {

		var query = { _id : req.body.id }

        //console.log('received id:', query);

    	var update = { $inc: { rate : 1 }};

		MapData.update(query, update, function(err, data){
			if (err) {
				//console.log('db update failed...');
				return next(err);
			}

			//console.log('map update complete!..');
			res.json(200, data);
		});
	});

	app.post('/api/maps/inc_playcount', function(req, res, next) {

		var query = { _id : req.body.id }

        //console.log('received id:', query);

    	var update = { $inc: { playcount : 1 }};

		MapData.update(query, update, function(err, data){
			if (err) {
				//console.log('db update failed...');
				return next(err);
			}

			//console.log('map update complete!..');
			res.json(200, data);
		});
	});

};