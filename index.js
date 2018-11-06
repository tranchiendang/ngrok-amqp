const ngrok = require('ngrok');

(async function() {
    console.log("----------------------");
    try{
        const url = await ngrok.connect({proto: 'tcp', addr: 5672, authtoken: '2kSyktNZ4G3yQrYe9kVCC_haaCEXa73UBB9gqiqpB2'});
        console.log(url);
    } catch (e) {
        console.log(e);
    }
    console.log("----------------------");

})();
