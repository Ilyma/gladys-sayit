/**
 * Gladys Emotions
 * List of emotions:
 * EN: 0 => Joyful; 1 => Irritated; 2 => Bored; 3 => Indifferent; 4 => Sarcastic
 * FR: 0 => Joyeuse; 1 => Irritée; 2 => Ennuyée; 3 => Indifférente; 4 => Sarcastique
 */

module.exports = function(sails) {

	var init = require('./lib/init.js');

    gladys.on('ready', function(){
        init().catch(sails.log.warn);
    });

	return {
		install : require('./lib/install.js'),
		sayHello : require('./lib/sayit.hello.js')
	};
};
