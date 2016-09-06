console.log('student.js sourced');

//global variables
var students = [];//store student objects
var index = 0;//store current student index number
var timer = 0;//store timer count

$(document).ready(function(){
  console.log('document ready');

  //prev button onClick
  $('#prev').click( function(){
    index--;
    // wrap around to last student
    if(index < 0){
      index = students.length - 1;
    }//end if
    studentData();
  }); // end prev button


  //next function needed for timer
  var next = function(){
    index++;
    // wrap around to first student
    if(index >= students.length){
      index = 0;
    }//end if
    studentData();
  }; // end next button
  //next button onClick
  $('#next').on('click',next);


  var buttonData = function(){
    // console.log("in buttonData");
    for (var i = 0; i < students.length; i++){
      var btn = $('<button/>');
      //create button for each student
      btn.data('buttonIndex', i);//key:buttonIndex value:i
      //add first name to button
      btn.html(students[i].first_name);
      //button onClick - call addButtonId function
      btn.on('click', addButtonId);
      //append button to DOM
      $('#button').append(btn);
      // console.log("button data",btn.data('buttonIndex',i));
    }// end for
  }//end ButtonData

  var addButtonId = function(){
    // console.log("in addButtonId");
    var toGlobal = $(this).data('buttonIndex')//data that's associated with this specific button
    index = toGlobal;
    studentData();
  }//end addButtonId

  //Timer automatically goes to next student after 10 seconds
  var setTimer = setInterval(function(){
    // console.log("in setTimer");
    //after 10 sec reset timer to 0
    if (timer === 10){
      timer = 0;
      // display next student
      next();
    }//end if
    else {
      timer++;
    }//end else
  }, 1000);//1 sec

  var studentData = function(){
    //console.log("in studentData");
    //moved to next student. Reset timer
    timer = 0;
    //number of the current student (out of a total of student.length)
    var num = index + 1;
    //fadeOut previous student info
    $('#output').fadeOut(function(){
      //empty output div
      $('#output').empty();
      //append current student info
      $('#output').append("Student " + num + " of " + students.length);
      $('#output').append("<h2>" + students[index].first_name + " " + students[index].last_name + "</h2>");
      $('#output').append("<h4>" + students[index].info + "</h4>");
      //fadeIn the current student info
      $('#output').hide().fadeIn();
    });//end fadeOut function
  }//end studentData


  $.ajax({
    url: 'http://devjana.net/pi/pi_students.json',
    dataType: 'json',
    success: function(data){
      for (var i = 0; i < data.students.length; i++) {
        //push data.students to array
        students.push(data.students[i]);
      };//end for
      buttonData();
    }//end Ajax success function
  });//end Ajax
});//end doc ready
