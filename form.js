var firebaseConfig = {
    apiKey: "AIzaSyBjlkF2YU_RH1Mxm34tNHO64NxvhrAoZRM",
    authDomain: "samrthomesystem.firebaseapp.com",
    databaseURL: "https://samrthomesystem-default-rtdb.firebaseio.com",
    projectId: "samrthomesystem",
    storageBucket: "samrthomesystem.appspot.com",
    messagingSenderId: "601825534198",
    appId: "1:601825534198:web:4f086bbad7128aa66b8cd7",
    measurementId: "G-1T3R84BDR8"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


var messagesRef = firebase.database().ref('contactformmessages');
	
$('#contactForm').submit(function(e) {
    e.preventDefault();
 
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: $('.fullname').val(),
        email: $('.email').val(),
        subject: $('.subject').val(),
        message: $('.message').val()
    });
 
    $('.success-message').show();
 
    $('#contactForm')[0].reset();
});
