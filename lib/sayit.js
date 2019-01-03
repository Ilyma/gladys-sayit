module.exports = function sayIt(WhatYouSayIt) {
    var init = '';
    gladys.utils.sql('select language from user where role=\'admin\' order by id').then((lang) => {

        init = require('../locales/'+lang[0].language+'.default.json');
        gladys.param.getValues(['GLADYS_EMOTIONS']).then((gladysEmotion) => {

            if(typeof init[gladysEmotion] === "undefined") {
                var sentences = init['default'];
                var rdmNb     = Math.floor(Math.random() * Object.keys(sentences).length);
                var sentence  = init['default'][rdmNb];
            } else {
                var sentences = init[gladysEmotion][WhatYouSayIt];
                var rdmNb     = Math.floor(Math.random() * Object.keys(sentences).length);
                var sentence  = init[gladysEmotion][WhatYouSayIt][rdmNb];
            }
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
};
