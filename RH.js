var RH = {
	get: RH_get,
	post: RH_post
};

function RH_get(url, callback){
	var xmlhttp;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
	  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

    xmlhttp.onreadystatechange=function() {
    	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			console.log(xmlhttp.responseText)
 		    callback(xmlhttp.responseText);	
    	}
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
}

function RH_post(url, callback){
	var xmlhttp;
	if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp = new XMLHttpRequest();
	} else {// code for IE6, IE5
	  xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}

    xmlhttp.onreadystatechange=function() {
    	if (xmlhttp.readyState==4 && xmlhttp.status==200) {
			console.log(xmlhttp.responseText)
 		    callback(xmlhttp.responseText);	
    	}
    }

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
}