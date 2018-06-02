function checkForm()
//This function is used to check whether anything has been added to a field*/
{
	//A Variable for when the result is true*/
	var result = true;

	//A simple if as above to check the first name box*/
	if (exampleForm.firstName.value == "") {
		alert("Enter First Name");
		result = false;
	}
	
  
	//A simple if as above to check the surname box  */
	if (exampleForm.surName.value == "") {
		alert("Enter Surname");
		result = false;
	}

	//A simple if as above to check the phone number box*/	
	if (exampleForm.phone.value == "") {
		alert("Enter Phone Number");
		result = false;
	}	
	
	
	//A simple if as above to check the DoB box*/
	if (exampleForm.DoB.value == "") {
		alert("Enter Date of Birth");
		result = false;  
	}	
	
	//A simple if as above to check the email box*/
	if (exampleForm.email.value == "") {
		alert("Enter Email");
		result = false;
	}  
	
	//return the result*/
	return result;
}

function fail()
{
	//alert for the 'Don't Know' Option*/
	alert("That's OK, we will test your vocals when you come!");
}

//This function can be used to show and hide an element determined by an event*/
function visible(id) 

{
		 var vis = document.getElementById(id);
	if (vis.style.display == 'block') { 
		vis.style.display = "none";
	}
	else {
		vis.style.display = "block";
	}
}

function reset()
//This function will take the tick out of a box and rehide an element*/
{
  
    // vis.style.display to 'none';*/
	document.exampleForm.other.checked = false;
    var vis = document.getElementById("state");	
	vis.style.display = 'none';
}

