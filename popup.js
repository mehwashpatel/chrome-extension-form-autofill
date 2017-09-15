document.addEventListener('DOMContentLoaded', function() {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "http://localhost/phpchrome.php", true);  //Mention your database query file here
	xhr.onreadystatechange = function() {
	
		if (xhr.readyState == 4) {
			varxhrjson = JSON.parse(xhr.responseText);
			/* Replace the below mentioned field id's with that of your form */
			chrome.tabs.executeScript(null,{code:"document.getElementById('ap_customer_name').value = '"+varxhrjson['cname']+"'"});
			chrome.tabs.executeScript(null,{code:"document.getElementById('ap_email').value = '"+varxhrjson['cmail']+"'"});
			chrome.tabs.executeScript(null,{code:"document.getElementById('ap_password').value = '"+varxhrjson['cpassword']+"'"});
			chrome.tabs.executeScript(null,{code:"document.getElementById('ap_password_check').value = '"+varxhrjson['cpassword']+"'"});
		}
	}
	xhr.send();
});