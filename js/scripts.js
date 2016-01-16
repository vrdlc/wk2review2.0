$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var questions = ["question1", "question2", "question3", "question4", "question5", "question6"];


    var question1 = $("input#question1").val();
    var question2 = $("input#question2").val();
    var question3 = $("input#question3").val();
    var question4 = $("input#question4").val();
    var question5 = $("input#question5").val();
    var question6 = $("input#question6").val();


// TESTING TESTING TESTING -- Testing a new order
// NO MATTER THE ORDER OR WHICH QUESTION I START WITH, PROGRAM ONLY RUNS TO THE SECOND QUESTION THEN RETURNS TO THE FIRST QUESTION. CAN'T RUN THE DEBUGGER ON THE SECOND QUESTION FOR SOME REASON SO I CAN'T SEE WHAT'S ACTUALLY GOING ON.

//I FEEL LIKE THERE'S A LIMIT TO THE ABILITY OF THE if else STATEMENT THAT I AM BREAKING. WOULD THIS HAVE WORKED WITH TWO BUTTONS PER FORM? 

// TESTING TESTING TESTING -- Testing a new order

  if (question1 === "hot") { //Do you like to be hot or cold
    $("#q2").show();
    $("#q1").hide();
  }
  if (question2 === "yes") { //Do you like to be in danger (hot)
      $("#q3").show();
      $("#q2").hide();
  }
  if (question3 === "maimed") { //How much danger (hot)
    $("#answerMaimedHot").show();
    $("#q3").hide();
  }
  if (question2 === "no") {
      $("#answerHotSafe").show();
      $("#q2").hide();
  }


// TESTING TESTING TESTING


//THIS IS THE ORIGINAL ORDER
  //   if (question1 === "hot") { //Do you like to be hot or cold
  //       $("#q2").show();
  //       $("#q1").hide();
  //     }
  //   else if (question1 === "cold"){
  //       $("#q2").show();
  //       $("#q1").hide();
  //     }
  //   else if (question2 === "yes") { //Do you like to be in danger (hot)
  //       $("#q3").show();
  //       $("#q2").hide();
  //     }
  //   else if (question2 === "no") {
  //       $("#answerHotSafe").show();
  //       $("#q2").hide();
  //     }
  //   else if (question3 === "maimed") { //How much danger (hot)
  //     $("#answerMaimedHot").show();
  //     $("#q3").hide();
  //   }
  //   else if (question3 === "dead") {
  //       $("#answerDeadHot").show();
  //       $("#q3").hide();
  //     }
   //
  //   else if (question4 === "yes") { //Do you like to be in danger
  //       $("#q5").show();
  //       $("#q4").hide();
  //     }
   //
  //   else if (question4 === "no") { //Do you like to be in danger
  //       $("#q6").show();
  //       $("#q4").hide();
  //     }
   //
  //   else if (question5 === "dead") { //How much danger (cold)
  //     $("#answerDeadCold").show();
  //     $("#q5").hide();
  //   }
   //
  //   else if (question5 === "maimed") { //How much danger (cold)
  //     $("#answerMaimedCold").show();
  //     $("#q5").hide();
  //   }
  //   else if (question6 === "a little") { //How cold
  //     $("#answerLittleCold").show();
  //     $("#q6").hide();
  //   }
   //
  //  if (question6 === "a lot") {
  //     $("#answerLotCold").show();
  //     $("#q6").hide();
  //   }



        event.preventDefault();
    });

  });
