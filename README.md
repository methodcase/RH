#RH
### Really simple Http library
Author
    Gerard Banasig
Install
    Download the RH.js file, then add in script src, then we are good to go
    <script>RH.js</script>
Usage
    RH.get("https://restcountries.eu/rest/v1/name/philippines", function(res){
    	console.log(res)
    })