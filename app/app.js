const local_app = function () {}

// * ———————————————————————————————————————————————————————— * //
// * 	init
// *
// *	gets called upon starting enduro.js production server
// *	@param {express app} app - express app
// *	@return {nothing}
// * ———————————————————————————————————————————————————————— * //
local_app.prototype.init = function (app) {
	// express app available here
	// don't forget these routes will be available on production server server (defaults to localhost:5000)

	let brand = require ('../cms/global/peugeot.js');

	app.get('/brand', function (req, res) {
		enduro.api.temper.render('brand', brand
				
		)
			.then((output) => {

				res.send(output)
			})
	})

	app.get('/model', function (req, res) {
	
		enduro.api.temper.render('datas',  { title: 'Hey', message: 'Hello there!' }
				
	)
		.then((output) => {

			res.send(output)
		})
	  })


}


module.exports = new local_app()


