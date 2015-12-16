// Create function to store individuals hours into a variable
function hours() {
  var hours = $("input#hours").val();
}

// Setup a handler for the function hours
$("input#hours").keyup(function() {
  hours();
  calculate();
});

// Function for wage per hour
function perHour() {
  var wage = $("input#wage").val();
}

// Setup a handler for our wage per hour function
$("input#wage").keyup(function() {
  perHour();
  calculate();
});

// Calulation function
function calculate() {
  var packet = $("h2#packet"); // Our output
  var total = parseFloat($("input#hours").val()) * parseFloat($("input#wage").val()) || 0;
  packet.html(total).text(total.toFixed(2)); // Grab our total and apply 'toFixed' to allow decimal points and append this to our var packet which is our output text
}
