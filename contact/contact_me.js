/*
  Jquery Validation using jqBootstrapValidation
   example is taken from jqBootstrapValidation docs 
  */
$(function() {

 $("input,textarea").jqBootstrapValidation(
    {
     preventSubmit: true,
     submitError: function($form, event, errors) {
      // something to have when submit produces an error ?
      // Not decided if I need it yet
     },
     submitSuccess: function($form, event) {
      event.preventDefault(); // prevent default submit behaviour
       // get values from FORM
       var name = $("input#name").val();  
       var email = $("input#email").val(); 
       var message = $("textarea#message").val();
       var firstName = name; // For Success/Failure Message
	   var pageName = location.href.split("/").slice(-2); // to get whether it is Tamil version
	   
           // Check for white space in name for Success/Fail message
        if (firstName.indexOf(' ') >= 0) {
	   firstName = name.split(' ').slice(0, -1).join(' ');
         }        
	 $.ajax({
                url: "contact/contact_me.php",
            	type: "POST",
            	data: {name: name, email: email, message: message},
            	cache: false,
            	success: function() {  
            	// Success message
					$('#success').html("<div class='alert alert-success'>");
					$('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append( "</button>");
					if (pageName[0] == "tamil")
					{
						$('#success > .alert-success').append("<strong>à®‰à®™à¯à®•à®³à¯ à®¤à®•à®µà®²à¯ à®µà¯†à®±à¯à®±à®¿à®•à¯à®•à®°à®®à®¾à®• à®…à®©à¯à®ªà¯à®ªà®ªà¯ à®ªà®Ÿà¯à®Ÿà¯ à®µà®¿à®Ÿà¯à®Ÿà®¤à¯!</strong>");
					}
					else
					{
						$('#success > .alert-success').append("<strong>Your message has been sent. </strong>");
					}
 		  $('#success > .alert-success')
 			.append('</div>');
 						    
 		  //clear all fields
 		  $('#contactForm').trigger("reset");
 	      },
 	   error: function() {		
 		// Fail message
 		 $('#success').html("<div class='alert alert-danger'>");
            	$('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;").append( "</button>");
				
				if (pageName[0] == "tamil")
				{
					$('#success > .alert-danger').append("<strong>à®®à®©à¯à®©à®¿à®•à¯à®•à®µà¯à®®à¯ "+firstName+"!</br> à®Žà®™à¯à®•à®³à¯ à®…à®žà¯à®šà®²à¯ à®šà¯‡à®µà¯ˆà®¯à®•à®®à¯ à®ªà®¤à®¿à®²à®³à®¿à®•à¯à®•à®µà®¿à®²à¯à®²à¯ˆ à®Žà®©à¯à®±à¯ à®¤à¯†à®°à®¿à®•à®¿à®±à®¤à¯.</strong> à®†à®•à¯ˆà®¯à®¾à®²à¯, à®¤à®¯à®µà¯à®šà¯†à®¯à¯à®¤à¯ à®‰à®™à¯à®•à®³à¯à®Ÿà¯ˆà®¯à®•à¯ à®•à®°à¯à®¤à¯à®¤à¯à®•à¯à®•à®³à¯ à®…à®²à¯à®²à®¤à¯ à®ªà®¤à®¿à®µà¯à®•à®³à¯ˆ à®Žà®™à¯à®•à®³à®¿à®©à¯ <a href='mailto:stthereseofkandanvilai@gmail.com?Subject=Message from "+firstName+"'>stthereseofkandanvilai@gmail.com</a> à®Žà®©à¯à®±  à®®à®¿à®©à¯à®©à®žà¯à®šà®²à¯ à®®à¯à®•à®µà®°à®¿à®•à¯à®•à¯, à®¨à¯‡à®°à®Ÿà®¿à®¯à®¾à®• à®…à®©à¯à®ªà¯à®ªà®¿ à®µà¯ˆà®•à¯à®• à®µà¯ˆà®•à¯à®•à¯à®®à®¾à®±à¯ à®…à®©à¯à®ªà¯à®Ÿà®©à¯ à®•à¯‡à®Ÿà¯à®Ÿà¯à®•à¯à®•à¯Šà®³à¯à®•à®¿à®±à¯‹à®®à¯. à®‰à®™à¯à®•à®³à¯ à®šà®¿à®°à®®à®¤à¯à®¤à®¿à®±à¯à®•à¯ à®®à®©à¯à®©à®¿à®•à¯à®•à®µà¯à®®à¯!");
				}
				else
				{
					$('#success > .alert-danger').append("<strong>Sorry "+firstName+"! It seems, that our mail server is not responding...</strong> Could you please email us directly to <a href='mailto:stthereseofkandanvilai@gmail.com?Subject=Message from "+firstName+"'>stthereseofkandanvilai@gmail.com</a> ? Sorry for your inconvenient caused!");
				}
 	        $('#success > .alert-danger').append('</div>');
 		//clear all fields
 		$('#contactForm').trigger("reset");
 	    },
           })
         },
         filter: function() {
                   return $(this).is(":visible");
         },
       });

      $("a[data-toggle=\"tab\"]").click(function(e) {
                    e.preventDefault();
                    $(this).tab("show");
        });
  });
 

/*When clicking on Full hide fail/success boxes */ 
$('#name').focus(function() {
     $('#success').html('');
  });
