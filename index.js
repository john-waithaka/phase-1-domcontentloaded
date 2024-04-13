// Your code goes here
//add an event listener and a call back fxn
  document.addEventListener("DOMContentLoaded", function() {
    //calls up the identified "text" in the HTML
    innerHtml = document.getElementById("text");
    //calls up what's written in the text element and changes it to what you want
    innerHtml.innerHTML = "This is really cool!";
    //not very necessary but for purposes of control
    console.log("This is really cool!" );
  });


//or this coz of scope and it can be used

//add an event listener
  document.addEventListener( "DOMContentLoaded", function () {
    updateDOM()
  } );
  
  //update the message after the DOM fully loads
  function updateDOM() {
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }