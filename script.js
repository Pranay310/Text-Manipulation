		


		let text = document.getElementById("text");
		let bg = document.getElementsByTagName("body")[0];
		let themeLight = document.getElementById("themeLight");
		let themeDark = document.getElementById("themeDark");
		let section = document.getElementsByClassName("aniTheme")[0];
		let textArea = document.getElementsByTagName("textarea")[0];
		let preview = (document.getElementById("preview"));

		function transformUpperCase()
		{
			
			let newText = text.value.toUpperCase();
			text.value = newText; 
		}
		function transformLowerCase()
		{
			let newLowerTxt = text.value.toLowerCase();
			text.value = newLowerTxt ;
		}
		function transformFont(){

			// let font = prompt();
			var options = ["Algerian", "Arial Black", "Bodoni MT Black", "Bahnschrift"];

// Prompt the user to select an option
var selectedIndex = prompt("Select an option and type option serial no:\n" + options.join("\n"));

// Check if an option was selected
if (selectedIndex !== null && selectedIndex !== "") {
  // Convert the input to a number (assuming it's a valid index)
  selectedIndex = selectedIndex - 1;
  
  // Check if the selected index is valid
  if (!isNaN(selectedIndex) && selectedIndex >= 0 && selectedIndex < options.length){
  	text.style.fontFamily = options[selectedIndex] ; 
  } else {
    // Display an error message if the index is invalid
    alert("Invalid selection!")  }
} else {
  // Display a message if the prompt was canceled or closed
  alert("No option selected!");
}
			text.style.fontFamily = options[selectedIndex] ; 
		}
		function themeChangeToDark() {
			bg.style.backgroundColor = "black" ;
			bg.style.color = "white";
			section.style.backgroundColor = "orangered";
			themeDark.style.transition = "transform 2s ease, opacity 1.5s ease";
			themeDark.style.transform = 'translateX(200px)';
			themeLight.style.transform = 'translateX(0px)';
			themeDark.disable = true;
			themeLight.disable = false;
			themeDark.style.opacity = "0";
			themeLight.style.opacity = "1";
			textArea.style.backgroundColor = "white";
			textArea.style.color = "black";
			textArea.style.borderTop = "4px solid orangered";
			textArea.style.borderRight = "4px solid orangered";
		}
		function themeChangeToLight()
		{ 
			bg.style.backgroundColor = "white" ;
			bg.style.color = "black";
			section.style.backgroundColor = "cyan";
			themeLight.style.transition = "transform 2s ease, opacity 1.5s ease";
			themeLight.style.transform = 'translateX(-100px)';
			themeDark.style.transform = 'translateX(0px)';
			themeLight.disable = true;
			themeDark.disable = false;
			themeLight.style.opacity = "0";
			themeDark.style.opacity = "1";
			themeDark.style.backgroundColor = "black";
			themeDark.style.color = "white";
		}
		function startPreview()
		{
			let wordCount = text.value.trim().toString().split(" ").length;
			let char = text.value.trim().toString().split("").length
			preview.innerHTML = `I have ${wordCount} word and ${char} characters`; 
		
		}