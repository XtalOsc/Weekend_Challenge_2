console.log('students sourced');

//
var students = [];//global array
var index=0;
var timer=0;

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
  }); // end prevButton click
  //next button onClick
  $('#next').on('click',next);
  var next=function(){
    index++;
    // wrap around to first student
    if(index >= students.length){
      index = 0;
    }//end if
    studentData();
  }; // end prevButton click


  var buttonData = function(){
    // console.log("in buttonData");
    for (var i = 0; i < students.length; i++) {

      var btn=$("<button/>");//create button for each student
      btn.data('buttonIndex',i);//key:buttonIndex value:i
      btn.html(students[i].first_name);//add name to button
      btn.on('click',addButtonId);//onClick function
      $('#button').append(btn);//append button to DOM
      // console.log("button data",btn.data('buttonIndex',i));
    }
  }//end ButtonData

  var addButtonId = function(){
    // console.log("in addButtonId");
    var toGlobal = $(this).data('buttonIndex')//data that's associated with this specific button
    index=toGlobal;
    studentData();
  }

  //Timer automatically goes to next student after 10 seconds
  var setTimer = setInterval(function(){
    //after 10 sec reset timer to 0
    if (timer === 10){
      timer = 0;
      //display next student
      next();
    }
    else{
      timer++;
    }
  }, 1000);//1 sec

  var studentData = function(){
    //loop through students
    // console.log("in studentData");
    var num = index+1;//current student #
    timer=0;//moved to next student. Reset timer
    $('#output').fadeOut(function(){
      $("#output").empty();
      $("#output").append("Student "+num+" of "+students.length);
      $("#output").append("<h2>"+students[index].first_name+" "+students[index].last_name+"</h2>");
      $("#output").append("<h4>"+students[index].info+"</h4>");
      $("#output").hide().fadeIn();
    });//end fadeOut
  }//end student data


  $.ajax({
    url: 'http://devjana.net/pi/pi_students.json',
    dataType: 'json',
    success: function(data){
      for (var i = 0; i < data.students.length; i++) {
        students.push(data.students[i]);
      };
      buttonData();
    }//end Ajax success function
  });//end Ajax
});//end doc ready
