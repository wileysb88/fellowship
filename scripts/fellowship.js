console.log("Linked.");

//DECLARING THE RING AS A GLOBAL ELEMENT
var theRing = $('<div id="the ring" class="magic-imbued-jewelry"></div>')

//-------------INITIAL INFORMATION----------------------------
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];


var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];


var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;

//----------TASK 1---------------------------------
// create a section tag with an id of `middle-earth`
// add each land as an `article` tag
// inside each `article` tag include an `h1` with the name of the land
// append `middle-earth` to your document `body`


var makeMiddleEarth = function(){
  var middleEarth = $('<section id="middleEarth"></section>');
  for(var i = 0; i<lands.length; i++){
    $(middleEarth).append('<article><h1>'+ lands[i] + '</h1></article>');
  };
  $('body').append(middleEarth);
};

makeMiddleEarth();






//DECLARING GLOBAL ELEMENTS FOR THE LANDS WE ARE SHIFTING CHARACTERS BETWEEN
var shire = $('article:nth-of-type(1)');
var rivendell = $('article:nth-of-type(2)');
var mordor = $('article:nth-of-type(3)');




//----------TASK 2--------------------------------
// display an `unordered list` of hobbits in the shire
// (which is the second article tag on the page)
// give each hobbit a class of `hobbit`



var makeHobbits = function () {
   var hobbitsList = $('<ul id="hobbitsList"></ul>')
   for (var i = 0; i<hobbits.length; i++){
     $(hobbitsList).append('<li class="hobbit">'+hobbits[i]+'</li>');
   };
   $(shire).append(hobbitsList);
};

makeHobbits();

//
//
// //----------TASK 3--------------------------------
// create a div with an id of `'the-ring'`
// give the div a class of `'magic-imbued-jewelry'`
// add the ring as a child of `Frodo`
//

var keepItSecretKeepItSafe = function () {
   var theRing = $('<div id="the ring" class="magic-imbued-jewelry"></div>');
   $('li:nth-child(1)').append(theRing);
};

keepItSecretKeepItSafe();

//----------TASK 4--------------------------------
// create an `aside` tag
// attach an `unordered list` of the `'buddies'` in the aside
// insert your aside as a child element of `rivendell`


var makeBuddies = function () {
   var aside = $('<aside></aside>');
   var buddiesList = $('<ul id="listOfBuddies"></ul>');
   for (var i = 0; i<buddies.length; i++){
     $(buddiesList).append('<li class="buddies">'+buddies[i]+'</li>');
   };
   $(aside).append(buddiesList);
   $(rivendell).append(aside);
};

makeBuddies();


//----------TASK 5--------------------------------
// change the `'Strider'` text to `'Aragorn'`


var beautifulStranger = function () {
   $('#listOfBuddies li:nth-child(4)').html('Aragorn');
   buddies[3] = 'Aragorn';
 }

beautifulStranger();


//----------TASK 6--------------------------------

// assemble the `hobbits` and move them to `rivendell`

//I AM TRYING TO ACCESS HOBBITSLIST AS THE ID BUT IT ISN'T WORKING WITH A HASHTAG
var leaveTheShire = function () {
    $(rivendell).append(hobbitsList);
};

leaveTheShire();

//----------TASK 7--------------------------------
// create a new div called `'the-fellowship'` within `rivendell`
// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
// after each character is added make an alert that they // have joined your party

var forgeTheFellowShip = function () {
   $('article ul').detach();
   var theFellowShip = $("<div id='the-fellowship'></div>");
   $('article:nth-child(2)').append(theFellowShip)
   for (var i = 0; i<hobbits.length; i++){
     $(theFellowShip).append("<li class='hobbits'>"+hobbits[i]+"</li>");
     alert(hobbits[i]+' has joined the party!')
   }
   for (var i = 0; i<buddies.length; i++){
     $(theFellowShip).append("<li class='buddies'>"+buddies[i]+"</li>");
     alert(buddies[i]+' has joined the party!')
   }
   $('article li:nth-of-type(1)').append(theRing);

 };


forgeTheFellowShip();


//----------TASK 8--------------------------------
// change the `'Gandalf'` text to `'Gandalf the White'`
// apply the following style to the element, make the // background 'white', add a grey border



 var theBalrog = function () {
    $('#the-fellowship li:nth-child(5)').html('Gandalf the White');
    $('#the-fellowship li:nth-child(5)').css('background-color','white');
    $('#the-fellowship li:nth-child(5)').css('border', '1px solid grey');
 };

 theBalrog();

//----------TASK 9--------------------------------
// pop up an alert that the horn of gondor has been blown
// Boromir's been killed by the Uruk-hai!
// Remove `Boromir` from the Fellowship

 var hornOfGondor = function () {
   alert('HORN OF GONDOR HAS BEEN BLOWN!')
   $('#the-fellowship li:nth-child(9)').remove();
};

hornOfGondor();

//----------TASK 10--------------------------------
// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
// add a div with an id of `'mount-doom'` to `Mordor`



var itsDangerousToGoAlone = function (){
   var Frodo = $('#the-fellowship li:nth-child(1)');
   var Sam = $('#the-fellowship li:nth-child(2)');
   $(Frodo).detach();
   $(Sam).detach();
   var mountDoom = $("<div id='mount-doom'></div>");
   $(mordor).append(Frodo);
   $(mordor).append(Sam);
   Frodo.append(theRing);
   $(mordor).append(mountDoom);
};

itsDangerousToGoAlone();


//----------TASK 11--------------------------------
// Create a div with an id of `'gollum'` and add it to Mordor
// Remove `the ring` from `Frodo` and give it to `Gollum`
// Move Gollum into Mount Doom

 var weWantsIt = function () {
   var gollum = $("<div id='gollum'></div>");
   gollum.append("<li id'gollum'>Gollum</li>");
   $(mordor).append(gollum);
   $('#gollum').append(theRing);
   $('#mount-doom').append(gollum);
};

weWantsIt();

// ----------TASK 12--------------------------------
// remove `Gollum` and `the Ring` from the document
// Move all the `hobbits` back to `the shire`


var thereAndBackAgain = function () {
    $('#gollum').remove();
    var hobbits = $('.hobbits');
    $(hobbits).remove();
    // $('element ul:nth-child(1)').empty();
    // I TRIED $(shire).append(hobbits); AND IT DOESNT SHOW TEXT SO JUST
    // USING THIS FUNCTION AGAIN
    makeHobbits();
};

thereAndBackAgain();
