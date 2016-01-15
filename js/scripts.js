$(document).ready(function() {
  $("form#questions").submit(function() {
    var questions = ["question1", "question2", "question3", "question4", "question5", "question6"];

debugger;
    var question1 = $("input#question1").val();
    var question2 = $("input#question2").val();
    var question3 = $("input#question3").val();
    var question4 = $("input#question4").val();
    var question5 = $("input#question5").val();
    var question6 = $("input#question6").val();



    if (question1 === "hot") { //Do you like to be hot or cold
        $("#q2").show();
        $("#q1").hide();
      }
    else if (question1 === "cold"){
        $("#q2").show();
        $("#q1").hide();
      }
    else if (question2 === "yes") { //Do you like to be in danger (hot)
        $("#q3").show();
        $("#q2").hide();
      }
    else if (question2 === "no") {
        $("#answerHotSafe").show();
        $("#q2").hide();
      }
    else if (question3 === "maimed") { //How much danger (hot)
      $("#answerMaimedHot").show();
      $("#q3").hide();
    }
    else if (question3 === "dead") {
        $("#answerDeadHot").show();
        $("#q3").hide();
      }

    else if (question4 === "yes") { //Do you like to be in danger
        $("#q5").show();
        $("#q4").hide();
      }

    else if (question4 === "no") { //Do you like to be in danger
        $("#q6").show();
        $("#q4").hide();
      }

    else if (question5 === "dead") { //How much danger (cold)
      $("#answerDeadCold").show();
      $("#q5").hide();
    }

    else if (question5 === "maimed") { //How much danger (cold)
      $("#answerMaimedCold").show();
      $("#q5").hide();
    }
    else if (question6 === "a little") { //How cold
      $("#answerLittleCold").show();
      $("#q6").hide();
    }

   if (question6 === "a lot") {
      $("#answerLotCold").show();
      $("#q6").hide();
    }



        // event.preventDefault();
    });

  });









// $(document).ready(function() {
//   $("form#questions").submit(function(event) {
//     var questions =["defaultq", "hotmain", "hotdanger", "coldmain", "colddanger", "coldsafe"];
//   debugger;
// console.log()
//
//     questions.forEach(function(question) {
//       var userInput = $("input#" + question).val();
//       $("." + question).text(userInput);
//     });
//
//     var defaultq = $("input#defaultq").val();
//     var hotmain = $("input#hotmain").val();
//     var hotdanger = $("input#hotdanger").val();
//     var coldmain = $("input#coldmain").val();
//     var colddanger = $("input#colddanger").val();
//     var coldsafe = $("input#coldsafe").val();
//
//
//
//
//     if (defaultq === "hot") {
//         $("#hotmain").show();
//         $("#defaultq").hide();
//       }
//     if (defaultq === "cold"){
//         $("#coldmain").show();
//         $("#defaultq").hide();
//       }
//
//       // if (question2 === "yes") {
//       //   $("#q1").show();
//       // }
//       // if (question2 === "no") {
//       //   $("#q4").show();
//       // }
//       // if (question3 === "yes") {
//       //   $("#q1").show();
//       // }
//       // if (question3 === "no") {
//       //   $("#q2").show();
//       // }
//
//         event.preventDefault();
//     });
//
//   });
