#RH
### Really simple Http library
      _____  _    _ 
     |  __ \| |  | |
     | |__) | |__| |
     |  _  /|  __  |
     | | \ \| |  | |
     |_|  \_\_|  |_|

####Install

   Download the [RH.js](https://raw.githubusercontent.com/daixtr/RH/master/RH.js "RH.js") file, then add in script src, then we are good to go

     <script type="text/javascript" src="RH.js"></script>

####Usage

   To get a remote request 

     RH.get("https://restcountries.eu/rest/v1/name/philippines", function(res){
    	console.log(res)
     })

####Complete Example Code

     <!doctype html>
	 <html>
	  <head>
	 	<title></title>
			<script type="text/javascript" src="RH.js"></script>
		</head>
		<body>
			<script type="text/javascript">
				RH.get("http://api.reddit.com/hot",
					function(res){
                        var result = "<ul>";
                        res.forEach(function (e) {
                            result = result + "<li>" + e + "</li>";
                        });
                        result = result + "</ul>";
                        document.getElementById("rhcontent").innerHTML = result;
					}
				)
			</script>
            <span id="rhcontent"></span>
		</body>
	 </html>

####Author

     daixtr
