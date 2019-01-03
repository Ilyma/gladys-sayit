module.exports = function() {

    var rdmNumber = Math.floor(Math.random() * 100);
    if (rdmNumber > 60) {
        var param = {
            name: 'GLADYS_EMOTIONS',
            value: 'joyful'
        };
    } else if (rdmNumber <= 60 && rdmNumber > 30) {
        var param = {
            name: 'GLADYS_EMOTIONS',
            value: 'sarcastic'
        };
    } else if (rdmNumber <= 30 && rdmNumber > 20) {
        var param = {
            name: 'GLADYS_EMOTIONS',
            value: 'indifferent'
        };
    } else if (rdmNumber <= 20 && rdmNumber > 10) {
        var param = {
            name: 'GLADYS_EMOTIONS',
            value: 'bored'
        };
    } else if (rdmNumber <= 10) {
        var param = {
            name: 'GLADYS_EMOTIONS',
            value: 'irritated'
        };
    }
    gladys.param.setValue(param);

    var init = '';
    gladys.utils.sql('select language from user where role=\'admin\' order by id').then((lang) => {

        init = require('../locales/'+lang[0].language+'.default.json');
        gladys.param.getValues(['GLADYS_EMOTIONS']).then((gladysEmotion) => {
            var sentences = init['get-emotion'];
            var rdmNb    = Math.floor(Math.random() * Object.keys(sentences).length) + 0;
            var sentence = init['change-emotion'][rdmNb];

            var option = {
                title: 'Say It',
                text: sentence,
                link: '/dashboard',
                icon: 'fa fa-fingerprint',
                iconColor: 'bg-light-blue',
                user: 1
            };
            return gladys.notification.create(option);
        })

    });
}
