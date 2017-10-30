'use strict';
// Get the modal
			
			function loadScript(url, callback)
			{
			// Adding the script tag to the head as suggested before
			var head = document.getElementsByTagName('head')[0];
			var script = document.createElement('script');
			script.type = 'text/javascript';
			script.src = url;

			// Then bind the event to the callback function.
			// There are several events for cross browser compatibility.
			script.onreadystatechange = callback;
			script.onload = callback;

			// Fire the loading
			head.appendChild(script);
			}
			function loadscripts(){
				loadScript('https://cztestapp.herokuapp.com/js/services/todos.js');
				loadScript('https://cztestapp.herokuapp.com/js/controllers/main.js');
				window.setTimeout(slowLoad,5000);
			}
function slowLoad(){
	debugger;
	alert("Ruk Bhai");
	loadScript('https://cztestapp.herokuapp.com/js/core.js');
}
		    
			var modal = null;
			
			// Get the button that opens the modal
			var btn = document.getElementById("myBtn");
			
			// Get the <span> element that closes the modal
			var span = null;
			
			var modalDiv= document.getElementById("myDiv");
			
			// When the user clicks the button, open the modal 
			btn.onclick = function() {
				modalDiv.innerHTML = '<div id="myModal" class="modal"><div class="modal-content"><button id="close" class="close">&times;</button><div id="modalbody">Some text in the Modal..</div></div></div>';
				modal = document.getElementById('myModal');
				modal.style.display = "block";
				loadScript('https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js',loadscripts);
				span = document.getElementById("close");
				addEvent();
				getData();
			}
			
			function addEvent(){
				span.addEventListener("click", function(){
					document.getElementById('myModal').style.display = 'none';
				});
			}

			function getData(){
				var response = '';
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
		
					if (this.readyState == 4 && this.status == 200) {
						var tempdiv = document.getElementById("modalbody");
						//tempdiv.innerHTML=xhttp.responseText;
						var htmlcontent = $('#modalbody ');
						var parser = new DOMParser();
						var doc = parser.parseFromString(xhttp.responseText, "text/xml");
						htmlcontent.load(doc.firstChild);
						//$compile(htmlcontent.contents())($scope);
					}
				};
				xhttp.open("GET", "https://cztestapp.herokuapp.com/api/renderdata", true);
				xhttp.send();
				
				response = xhttp.responseText;
				
				console.log(response);
			}
