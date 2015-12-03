(function(){
    'use strict';    
    var RH = {
        get: function (url, callback) {
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                // TODO: somehow, it's not working when browser is opera 12.16 
                xmlhttp = new XMLHttpRequest();
            } else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                    var content = xmlhttp.responseText;
                    var jsonString = JSON.parse(content);
                    var arrayOfPosts = jsonString.data.children;
                    var topics = [];
                    for (var i = 0; i < arrayOfPosts.length; i++) {
                        topics.push(arrayOfPosts[i].data.title);
                    }
                    callback(topics);
                }
            };
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        },
        post: function (url, json_data, callback) {
            var xmlhttp;
            if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
                xmlhttp = new XMLHttpRequest();
            } else {// code for IE6, IE5
                xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xmlhttp.onreadystatechange = function () {
                if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
                    callback(xmlhttp.responseText);
                }
            };
            xmlhttp.open("POST", url, true);
            xmlhttp.send(this.serialize_json(json_data));
        },
        serialize_json: function (json_str) {
            var s = "";
            var b = JSON.parse(JSON.stringify(json_str));
            for (var x in b){
                s += x + "=" +b[x]+"&"
            }
            return s.substr(0,s.length - 1);
        }   
    };   
    self.RH = RH; 
})();
