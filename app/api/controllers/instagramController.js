var request = require('request');
var cfg = require('../../config');


exports.getFeed = function(req, res){
    
    var client_id = 'c19b1f0eeb4b4e948d64cf2521668184';
    var user_id = '1356887461';
    var access_token = '1356887461.c19b1f0.f73e6b726c944e81bb6549bff6676b48';

    var endpoint = 'https://api.instagram.com/v1/users/';
        endpoint += user_id;
        endpoint += '/media/recent/';
        endpoint += '?count=9';
        //endpoint += '&callback=JSON_CALLBACK';
        endpoint += '&access_token=' + access_token;

        request(endpoint, function (error, response, body) {
            if (error) {
                console.error(error);
            }else{
                res.contentType('application/json');
                res.send(body);
            }
        });

};