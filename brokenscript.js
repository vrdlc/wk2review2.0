$(document).ready(function() {
  $("#vacationquestions button").submit(function(event){
    var questions = ["defaultq", "hotmain", "hotdanger", "hotsafe", "coldmain", "colddanger", "coldsafe"];
debugger;
    // questions.forEach(function(question) {
    //   var userInput = $(input# + question).val();
    //   $("." + question).text(userInput);

    // });


    $("button#hotButton").click(handler() {
      $("question#hotmain").show();

    });

    $("button#coldButton").click(function(){
      $("question#coldmain").show();
    })



    // var defaultq = $("input#defaultq").val();
    // var hotmain = $("input#hotmain").val();
    // var hotdanger = $("input#hotdanger").val();
    // var hotsafe = $("input#hotsafe").val();
    // var coldmain = $("input#coldmain").val();
    // var colddanger = $("input#colddanger").val();
    // var coldsafe = $("input#coldsafe").val();


// PUT IN AUTO LOWERCASE THING

  // if("#hotbutton")click(function() {
  //   $("#hotmain").show();
    // $("#defaultq").hide();




event.preventDefault();

  });
});
// });
