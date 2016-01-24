if (question1 === "hot") { //Do you like to be hot or cold
    $("#q2").show();
    $("#q1").hide();
  }
  else if (question2 === "yes") { //Do you like to be in danger (hot)
      $("#q3").show();
      $("#q2").hide();
  }
  else if (question3 === "maimed") { //How much danger (hot)
    $("#answerMaimedHot").show();
    $("#q3").hide();
  }
  else if (question2 === "no") {
      $("#answerHotSafe").show();
      $("#q2").hide();
    }
