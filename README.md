#RH
### Really simple Http library
      _____  _    _ 
     |  __ \| |  | |
     | |__) | |__| |
     |  _  /|  __  |
     | | \ \| |  | |
     |_|  \_\_|  |_|

####Install

   Download the [RH.js](https://raw.githubusercontent.com/methodcase/RH/master/RH.js "RH.js") file, then add in script src, then we are good to go

     <script type="text/javascript" src="RH.js"></script>

####Usage

   To get a remote request 

     RH.get("https://restcountries.eu/rest/v1/name/philippines", function(res){
    	console.log(res)
     })

   If you have python, you can 'python -m SimpleHTTPServer' to sever the example index.html. 

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
                        var result = "";
                        res.forEach(function (e) {
                            result = result + "<li>" + e + "</li>";
                        });
                        document.getElementById("rhcontent").innerHTML = result;
					}
				)
			</script>
            <span><ul id="rhcontent"></ul></span>
		</body>
	 </html>

####Author

     Gerard Banasig
