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