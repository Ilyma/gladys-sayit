const Promise = require('bluebird');
var sentences = require('./sentences.js');


module.exports = function install(){
    // Create parameters
    var param1 = {
        name: 'GLADYS_EMOTIONS',
        value: '0,1,2,3,4'
    };

    //then we check if the parameters exists
    gladys.param.getValues([param1.name]).catch(() => {
        //is they doesn't, we create them
        return Promise.all([
            gladys.param.setValue(param1)
        ]);
    });
    //on prends la langue du 1er admin
    return gladys.utils.sql('select language from user where role=\'admin\' order by id').then(function(lang){
        if(lang[0].language!='fr-FR')
        return gladys.sentence.insertBatch([sentences.sentenceShutdownEn, sentences.sentenceRebootEn]);
        else return gladys.sentence.insertBatch([sentences.sentenceShutdownFr, sentences.sentenceRebootFr]);
    });
};
