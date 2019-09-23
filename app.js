var config = {
    apiKey: "AIzaSyD5qPraWHfa5oZ5PGD2KqvWqq98S_ryRTg",
    authDomain: "traintimetable-28488.firebaseapp.com",
    databaseURL: "https://databaseName.firebaseio.com",
    storageBucket: "bucket.appspot.com"
  };
  firebase.initializeApp(config);

  // Get a reference to the database service
  var database = firebase.database();

  $("#add-train-btn").on("click", function(event) {
    event.preventDefault();
  
    // Grabs user input
    var trainName = $("#train-name-input").val().trim();
    var trainDest = $("#train-destination").val().trim();
    var startInput = moment($("#start-input").val().trim(), "HH:mm").format("X");
    var freqRate = $("#frequency-input").val().trim();
  
    // Creates local "temporary" object for holding employee data
    var newTrain = {
      name: trainName,
      role: trainDest,
      start: startInput,
      rate: freqInput
    };
  
    // Uploads employee data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.role);
    console.log(newTrain.start);
    console.log(newTrain.rate);
  
    alert("Train successfully added");
  
    // Clears all of the text-boxes
    $("#train-name-input").val("");
    $("#train-destination").val("");
    $("#start-input").val("");
    $("#frequency-input").val("");
  });
  
  // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDest = childSnapshot.val().role;
    var startInput = childSnapshot.val().start;
    var freqRate = childSnapshot.val().rate;
  
    // Train Info
    console.log(trainName);
    console.log(trainDest);
    console.log(startInput);
    console.log(freqRate);
  
    // // Prettify the employee start
    // var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");
  
    // // Calculate the months worked using hardcore math
    // // To calculate the months worked
    // var empMonths = moment().diff(moment(empStart, "X"), "months");
    // console.log(empMonths);
  
    // // Calculate the total billed rate
    // var empBilled = empMonths * empRate;
    // console.log(empBilled);
  
    // // Create the new row
    // var newRow = $("<tr>").append(
    //   $("<td>").text(empName),
    //   $("<td>").text(empRole),
    //   $("<td>").text(empStartPretty),
    //   $("<td>").text(empMonths),
    //   $("<td>").text(empRate),
    //   $("<td>").text(empBilled)
    // );
  })