module.exports = function() {

    var lng = gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
		return lang[0].language;
	}
	var init = require('./lib/'+lng+'.json');

    var notification = {
        user: 1,
        title: 'Say Hello',
        text: 'Bonjour toi !!!',
        link: 'Say it like human',
        icon: 'fa fa-home',
        iconColor: 'bg-light-blue',
        priority: 0
    };

    return gladys.notification.create(notification);
};
