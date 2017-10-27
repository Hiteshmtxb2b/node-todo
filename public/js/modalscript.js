// Get the modal
			var jQueryScript = document.createElement('script');  
			jQueryScript.setAttribute('src','https://ajax.googleapis.com/ajax/libs/angularjs/1.2.16/angular.min.js');
			document.head.appendChild(jQueryScript);
			jQueryScript.setAttribute('src','controllers/main.js');
			document.head.appendChild(jQueryScript);
			jQueryScript.setAttribute('src','services/todos.js');
			document.head.appendChild(jQueryScript);
			jQueryScript.setAttribute('src','core.js');
			document.head.appendChild(jQueryScript);
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
						tempdiv.innerHTML=xhttp.responseText;
					}
				};
				xhttp.open("GET", "https://cztestapp.herokuapp.com/api/renderdata", true);
				xhttp.send();
				
				response = xhttp.responseText;
				
				console.log(response);
			}
