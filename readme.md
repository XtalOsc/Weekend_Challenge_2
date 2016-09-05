
    #Weekend Challenge 02

    ##Welcome to your second weekend challenge!

    I created a new JSON data file, inside it, you will find an array of objects. Each object, is each one of you!

    [JSON file](http://devjana.net/pi/pi_students.json)

    You first task is to make an AJAX call from the client side app.js, using an .ajax method and access the json data through the url above. When successful, it should bring the data back down for use. You will then need to combine that with what you have learned about parsing objects and arrays to complete the challenge.

    [Ajax reference](https://github.com/devjanaprime/2.4-jQueryAjaxJSON/blob/master/scripts/getJsonExample.js)

    What I would like to see on the DOM, is one person at a time represented - the info for the first person in the json data. One the screen should also be "Prev" and "Next" buttons, that when pressed, show the information for the appropriate person. These should wrap - "prev" when on the first person should wrap around to show the last person and vice versa.

    Also on the DOM should be a display showing the number of people and which is being currently viewed (eg. "2/20")

    When a person is displayed, show their name (first & last) and their "info". Only one person should be shown at any given time.

    ##KINDA HARD MODE

    Add a button for each person - appended to DOM when the json is read in. Clicking any button will display that person. Place these between the "prev" and "next" buttons.

    ####Ex: [Prev] [Larry] [Moe] [Curly] [Next]

    ##HARD MODE

    Include a fade out and fade in animation in-between transitioning people.

    ##PRO MODE

    Include a timer that moves to the next person if the user is not clicking on next or prev. If the user clicks on next or prev, the timer should be reset. The timer should transition between people every 10 seconds.
