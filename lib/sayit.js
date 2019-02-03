module.exports = function sayIt(WhatYouSayIt, userId = 1) {
    var init = '';
    var user = {
        id: userId
    }
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
            var message = {
                text: sentence,
                receiver: user
            };
            return gladys.message.send({id:null}, message);
        })

    });
};
