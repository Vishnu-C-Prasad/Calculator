$(document).ready(function() {
  var displayBox = document.getElementById("display");
  var hasEvaluated = false;

  //CHECK IF 0 IS PRESENT. IF IT IS, OVERRIDE IT, ELSE APPEND VALUE TO DISPLAY
  function clickNumbers(val) {
    if (displayBox.innerHTML === "0" || (hasEvaluated == true && !isNaN(displayBox.innerHTML))) {
      displayBox.innerHTML = val;
    } else {
      displayBox.innerHTML += val;
    }
    hasEvaluated = false;
  }

  //ON CLICK ON NUMBERS
  $("#one").click(function() {
    checkLength(displayBox.innerHTML);
    clickNumbers(1);
  });
  $("#two").click(function() {
    checkLength(displayBox.innerHTML);
    clickNumbers(2);
  });
  $("#three").click(function() {
    checkLength(displayBox.innerHTML);
    clickNumbers(3);
  });
  $("#four").click(function() {
    checkLength(displayBox.innerHTML);
    clickNumbers(4);
  });
  $("#five").click(function() {
    checkLength(displayBox.innerHTML);
    clickNumbers(5);
  });
  $("#six").click(function() {
    checkLength(displayBox.innerHTML);
    clickNumbers(6);
  });
  $("#seven").click(function() {
    checkLength(displayBox.innerHTML);
    clickNumbers(7);
  });
  $("#eight").click(function() {
    checkLength(displayBox.innerHTML);
    clickNumbers(8);
  });
  $("#nine").click(function() {
    checkLength(displayBox.innerHTML);
    clickNumbers(9);
  });
  $("#zero").click(function() {
    checkLength(displayBox.innerHTML);
    clickNumbers(0);
  });
  
  //CHECK FOR LENGTH & DISABLING BUTTONS
  function checkLength(num) {
    if (num.toString().length > 7 && num.toString().length < 14) {
      $("#display").css("font-size", "60px");
      // $("#display").css("margin-top", "174px");
    } else if (num.toString().length > 16) {
      num = "Infinity";
      $("button").prop("disabled", true);
      $(".btn-clear").attr("disabled", false);
    }
  }
});
