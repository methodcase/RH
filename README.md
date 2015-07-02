#RH
### Really simple Http library

####Author

     Gerard Banasig

####Install

   Download the RH.js file, then add in script src, then we are good to go

     <script type="text/javascript" src="RH.js"></script>

####Usage

   To get a remote request 

     RH.get("https://restcountries.eu/rest/v1/name/philippines", function(res){
    	console.log(res)
     })

####Example Code

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
						document.write(res)
					}
				)
			</script>
		</body>
	 </html>