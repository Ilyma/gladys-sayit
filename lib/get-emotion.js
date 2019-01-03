module.exports = function() {
    var init = '';
    gladys.utils.sql('select language from user where role=\'admin\' order by id').then((lang) => {

        init = require('../locales/'+lang[0].language+'.default.json');
        gladys.param.getValues(['GLADYS_EMOTIONS']).then((gladysEmotion) => {
            var sentences = init['get-emotion'];

            var rdmNb    = Math.floor(Math.random() * Object.keys(sentences).length) + 0;
            var sentence = init['get-emotion'][rdmNb];
            sentence     = sentence.replace('%EMOTION%', gladysEmotion);

            var option = {
                title: 'Say It',
                text: sentence,
                link: '/dashboard',
                icon: 'fa fa-home',
                iconColor: 'bg-light-blue',
                user: 1
            };
            return gladys.notification.create(option);
        })

    });
}
