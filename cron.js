 var myDate = $(".birthDate"),
     myTime = $(".birthTimeDate"),
     fullDate, fullHour, fullTime;
 
 $(".confirmButton").on("click", function(event) {
     fullDate = myDate.val(),
     fullHour = myTime.val();
 
 
 
   alert("Date =" + fullDate);
   alert("Time =" + fullHour);
 
   fullTime = fullDate + fullHour;
 
   event.preventDefault();
 });
