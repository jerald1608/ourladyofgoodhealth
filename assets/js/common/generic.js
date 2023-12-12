
jQuery(document).ready(function ($) {
	
	var pageName = location.href.split("/").slice(-2);
	var days;
	var months;	
	
	if (pageName[0] == "tamil")
	{
		days = ["à®žà®¾à®¯à®¿à®±à¯à®±à¯à®•à¯à®•à®¿à®´à®®à¯ˆ","à®¤à®¿à®™à¯à®•à®³à¯à®•à®¿à®´à®®à¯ˆ","à®šà¯†à®µà¯à®µà®¾à®¯à¯à®•à¯à®•à®¿à®´à®®à¯ˆ","à®ªà¯à®¤à®©à¯à®•à®¿à®´à®®à¯ˆ","à®µà®¿à®¯à®¾à®´à®•à¯à®•à®¿à®´à®®à¯ˆ","à®µà¯†à®³à¯à®³à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ","à®šà®©à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ"];
		months = ['à®œà®©à®µà®°à®¿','à®ªà¯†à®ªà¯à®°à®µà®°à®¿','à®®à®¾à®°à¯à®šà¯','à®à®ªà¯à®°à®²à¯','à®®à¯‡','à®œà¯‚à®©à¯','à®œà¯‚à®²à¯ˆ','à®†à®•à®¸à¯à®Ÿà¯','à®šà¯†à®ªà¯à®Ÿà®®à¯à®ªà®°à¯','à®…à®•à¯à®Ÿà¯‹à®ªà®°à¯','à®¨à®µà®®à¯à®ªà®°à¯','à®Ÿà®¿à®šà®®à¯à®ªà®°à¯'];
	}
	else{
		days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
		months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
	}
	
	var today = new Date();
	today.setTime(today.getTime());
	var element = document.getElementById("currentDate");
	element.innerHTML = "[ " + days[today.getDay()] + ", " + months[today.getMonth()] + " " + today.getDate()+ ", " + today.getFullYear()+" ]";
	
	
	// to display the upcoming live streaming date in the first slide
	var upcomingThursday = document.getElementById("thursdayDate");
	var upcomingSunday = document.getElementById("sundayDate");
	
	function updateThursday(numberOfWeeks, date = new Date()){
		if(today.getDay != "Sunday"){
			date.setDate(date.getDate() + numberOfWeeks * 4);
		}
		return date;
	}
	function updateSunday(numberOfWeeks, date = new Date()){
		if(today.getDay != "Thursday"){
			date.setDate(date.getDate() + numberOfWeeks * 7);
		}
		return date;
	}
	//upcomingThursday.innerHTML = updateThursday(1).toLocaleDateString('en-UK');
	//upcomingSunday.innerHTML = updateSunday(1).toLocaleDateString('en-UK');
	
	
	/*===============================================================================================================================*/
	
	
	// Newly written code for displaying the Date of next Live streaming on the landing page sliding image.
	
	function getNextDay(dayName) {

		// The current day
		let date = new Date();
		let now = date.getDay();

		// Days of the week
		let days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

		// The index for the day you want
		let day = days.indexOf(dayName.toLowerCase());

		// Find the difference between the current day and the one you want
		// If it's the same day as today (or a negative number), jump to the next week
		let diff = day - now;
		diff = diff < 1 ? 7 + diff : diff;

		// Get the timestamp for the desired day (Thursday)
		let nextDayTimestamp = date.getTime() + (3000 * 60 * 60 * 9 * diff);

		// Get the next day
		return new Date(nextDayTimestamp);
	}
		let next = getNextDay('Thursday');
		console.log(next.getTime());
		//document.querySelector('#thursdayDate').textContent = next.toLocaleDateString('en-UK');
	/*===============================================================================================================================*/
	
	
	// FUNCTION TO SHOW/HIDE THE LIVE BUTTON
	// const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" });
	// if (days[0] != days[today.getDay()] || currentTime >= "09:00 AM")
	// {
		// $("#liveButton").hide();
	// }
	// else
	// {
		// $("#liveButton").show();
	// }
	
	
	// FUNCTION TO REMOVE/UPDATE THE LIVE SCHEDULE TABLE ONCE THE EVENT IS ENDED
	//var paragraphs = ["p1","p2","p3","p4","p5","p6","p7","p8","p9","p10"];  to remove the previous date of event paragraph in the schedule
	//var festivalDates = ["firstDay","secondDay","thirdDay","fourthDay","fifthDay","sixthDay","seventhDay","eighthDay","ninthDay","tenthDay"];

	//for(var i in festivalDates){
		//var festivalDateFormat = "[ " + document.getElementById(festivalDates[i]).innerHTML+" ]"
		 //if (festivalDateFormat != element.innerHTML)
		 //{
			 //document.getElementById(paragraphs[i]).remove();
		 //}
		//else{
			//return false;
		//}
	//}
});


// Use this code to show / hide and the live telecast icon
 $(document).ready(function() {
         $("#liveIcon").hide();
  });