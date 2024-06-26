

const axios = require('axios');
const FormData = require('form-data');
const fs = require('fs');
const path = require('path');


module.exports = async function remove_bg(file_name) {

    console.log('sdfgsdfgsdfg');
    const inputPath = __dirname + '/upload_img/' + file_name;
    const formData = new FormData();
    formData.append('size', 'auto');
    formData.append('image_file', fs.createReadStream(inputPath), path.basename(inputPath));

    await axios({
    method: 'post',
    url: 'https://api.remove.bg/v1.0/removebg',
    data: formData,
    responseType: 'arraybuffer',
    headers: {
        ...formData.getHeaders(),
        'X-Api-Key': 'iTk3KX5SzD6djvEb6Mgd9DSu',
    },
    encoding: null
    })
    .then((response) => {
    if(response.status != 200) return console.error('Error:', response.status, response.statusText);
    fs.writeFileSync(__dirname + '/no_bg_img/no_bg_'+file_name, response.data);
    })
    .catch((error) => {
        return console.error('Request failed:', error);
    });


}