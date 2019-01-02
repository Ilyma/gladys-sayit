module.exports = function() {
    var init = '';
    gladys.utils.sql('select language from user where role=\'admin\' order by id').then((lang) => {

        init = require('../locales/'+lang[0].language+'.json');
        gladys.param.getValues(['GLADYS_EMOTIONS']).then((gladysEmotion) => {

            var sentences = init[gladysEmotion].say_hello;
            var sentence = Math.floor(Math.random() * Object.keys(sentences).length) + 0;

            var option = {
                title: 'Say Hello',
                text: init[gladysEmotion].say_hello[sentence],
                link: '/dashboard',
                icon: 'fa fa-home',
                iconColor: 'bg-light-blue',
                user: 1
            };
            return gladys.notification.create(option);
        })

    });
};
