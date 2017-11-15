jQuery(document).ready(function ($) {

   var apiUrl = 138.197.16.143;
    //var apiUrl = "http://localhost:5555/register";
    $("#registerForm").submit(function (event) {

        
        event.preventDefault();
        $('#statusMsg').html(' ');
        statusMsg = "";
        statusMsg += "<p>Saving details...</p>";
        $('#statusMsg').html(statusMsg);
        var publicKey = $('#publicKey').val();
        var email = $('#email').val();
        var twitterHandle = $('#twitterHandle').val();
        var callbackUrl = $('#callbackUrl').val();

        var registerData = {
            'publick_key': publicKey,
            'email': email,
            'twitter_handle': twitterHandle,
            'callbackurl': callbackUrl
        };

        console.log(registerData);
        // Send the data using post
        var posting = $.post(apiUrl, registerData);

        // Put the results in a div
        posting.done(function (data) {
            console.log(data);
            statusMsg = "<p>You are subscribed</p>";
            $('#statusMsg').html(statusMsg);
        });

        posting.fail(function () {
            statusMsg = "<p>Subscription Error</p>";
            $('#statusMsg').html(statusMsg);
        })


    });


});
