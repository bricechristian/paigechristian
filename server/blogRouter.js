const router = require('express').Router();
const controller = require('./blogController');

router.param('id', controller.params)

router
	.route('/test')
	.get((req, res) => {
		const blogs = [
    		{title: 'Example Blog', content: 'Celiac farm-to-table pitchfork taiyaki chillwave umami. Farm-to-table vexillologist deep v ethical church-key direct trade. Fanny pack yr seitan, hexagon biodiesel stumptown enamel pin paleo disrupt church-key meh locavore street art. Everyday carry pickled taxidermy, lumbersexual DIY health goth twee drinking vinegar vice biodiesel crucifix man bun. Gluten-free gastropub gentrify, green juice organic dreamcatcher disrupt affogato. Man braid shaman tilde sartorial, williamsburg organic iPhone photo booth aesthetic pug. Master cleanse marfa flexitarian cold-pressed la croix green juice. Vexillologist pickled whatever master cleanse fam, meggings normcore readymade woke kinfolk drinking vinegar edison bulb enamel pin brunch. Raclette pour-over brunch subway tile sriracha beard listicle. Vice disrupt dreamcatcher neutra post-ironic vexillologist next level forage coloring book DIY hella enamel pin fanny pack. Paleo affogato drinking vinegar meh food truck mixtape PBR&B, literally gastropub bespoke swag street art. Polaroid seitan vice pabst jean shorts, listicle kinfolk glossier.'}
  		]
  			res.json(blogs)
		})

router
		.route('/blog')
		.get(controller.get)

module.exports = router;