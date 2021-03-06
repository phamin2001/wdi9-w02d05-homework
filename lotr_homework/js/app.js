console.log("LOTR homework js file is connected");
console.log("HINT: Click on the 'Elements' tab to see the elements that you are creating");
console.log("---------------")
// ==============================
//       Dramatis Personae
// ==============================

const hobbits = [
  "Frodo Baggins",
  "Samwise 'Sam' Gamgee",
  "Meriadoc 'Merry' Brandybuck",
  "Peregrin 'Pippin' Took"
];

const buddies = [
  "Gandalf the Grey",
  "Legolas",
  "Gimli",
  "Strider",
  "Boromir"
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

const lands = [
  "The-Shire",
  "Rivendell",
  "Mordor"
];

// ====================================
//           Chapters
// ====================================

// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!

  console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  const $section = $('<section id="middle-earth"/>');

  // 2. append the section to the body of the DOM.
  $('body').append($section);

  // 3. use a for loop to iterate over the lands array that does the following:

  //   3a. creates an article tag (there should be one for each land when the loop is done)

  //   3b. gives each land article an `id` tag of the corresponding land name

  //   3c. includes an h1 with the name of the land inside each land article

  //   3d. appends each land to the middle-earth section
  for (let i = 0; i < lands.length; i++) {
    const $a = $(`<a id=${lands[i]}/>`);
    const $h1 = $(`<h1>${lands[i]}</h1>`);
    $a.append($h1);
    $section.append($a);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  console.log('Make hobbits');

  // 1. display an unordered list of the hobbits in the shire.
  const $ul = $('<ul/>');
  for(let i = 0; i < hobbits.length;i++) {
    const $li = $(`<li class="hobbit">${hobbits[i]}</li>`);
    $ul.append($li);
    $('#The-Shire').append($ul);
  }
  // 2. give each hobbit a class of "hobbit"

  // hint: create a 'ul' outside the loop upon which to append the 'li's

  // hint: get 'The-Shire' by using its id

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  // 1. create an empty div with an id of 'the-ring'
  const $div = $('<div id="the-ring"/>');

  // 2. add the ring as a child of Frodo
  $(".hobbit").map(function (elementOrValue, index) {
    if (elementOrValue === 0) {
      $(index).append($div);
    }
  });
  // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .

  // when you think you have given Frodo the ring, check in your Elements tab

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  // 1. display an unordered list of baddies in Mordor

  // 2. give each of the baddies a class of "baddy"

  // 3. remember to append them to Mordor
  const $ul = $('<ul/>');
  for (let i = 0; i < baddies.length; i++) {
    const $li = $(`<li class="baddy">${baddies[i]}</li>`);
    $ul.append($li);
    $('#Mordor').append($ul);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies".

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // 1. create an aside tag and append it to middle-earth below mordor
  const $aside = $('<aside/>');
  $('#middle-earth').append($aside);
  // 2. display an unordered list of buddies in the aside
  const $ul = $('<ul/>');
  for (let i = 0; i < buddies.length; i++) {
    const $li = $(`<li class="buddy">${buddies[i]}</li>`);
    $ul.append($li);
    $aside.append($ul);
  }
  // 3. give each of the buddies a class of "buddy"

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
const leaveTheShire = () => {

  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell

  // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
  const $hobbits = $('#The-Shire').children('ul');
  $('#Rivendell').append($hobbits);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"

  // hint: You can get a list of elements by tag name, such as 'aside'
  const $lis = $('aside').find('ul').find('li');
  $lis.each(function (index) {
    if($(this).text() === "Strider") {
      $(this).text("Aragon");
    }
  })
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  // 1. create a new div with an id 'the-fellowship'
  const $div = $('<div id="the-fellowship"/>');

  // 2. add an h1 with the text 'The Fellowship' to this new div
  $div.append('<h1>The Fellowship</h1>');
  // 3. append the fellowship to middle-earth
  $('#middle-earth').append($div);
  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'
  const $ul = $('<ul>');
  for (let i = 0; i < hobbits.length; i++) {
    const $li = $(`<li>${hobbits[i]}</li>`);
    $ul.append($li);
    $div.append($ul);
  }
  for (let i = 0; i < buddies.length; i++) {
    const $li = $(`<li>${buddies[i]}</li>`);
    $ul.append($li);
    $div.append($ul);
  }
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {
  // 1. change the 'Gandalf' textNode to 'Gandalf the White'
 
  // 2. add a class "the-white" to this element
 
  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border
  $('li').filter(function(index) {
    if ($(this).text() === "Gandalf the Grey") {
      $(this).text("Gandalf the White");
      $(this).attr("class", "the-white");
    }
  })
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown
  alert("horn of gondor has been blown");
  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  $('li').filter(function(index) {
    if($(this).text() === "Boromir") {
      $(this).css("text-decoration", "line-through");
    }
  })                                                                                                                        
  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  $('#Mordor').find("li").filter(function(index) {
    if($(this).text() === "The Uruk-hai") {
      $(this).remove();
    }
  })
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)
  $('#the-fellowship').find('li').filter(function(index) {
    if($(this).text() === "Frodo Baggins") {
      $(this).appendTo('#Mordor');
    }
    if($(this).text() === "Samwise 'Sam' Gamgee") {
      $(this).appendTo('#Mordor');
    }
  })
  // 2. add a div with an id of 'mount-doom' to Mordor
  const $div = $('<div id="mount-doom"/>');
  $('#Mordor').append($div);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const $div = $('<div id="gollum"/>');
  $('#Mordor').append($div);
  // 2. Move the ring from Frodo and give it to Gollum
  $('#Rivendell').find('li').filter(function(index) {
    if($(this).text() === "Frodo Baggins") {
      const $theRing = $(this).find('div');
      $theRing.appendTo($div);
    }
  })
  // 3. Move Gollum into Mount Doom
  $div.appendTo($('#Mordor').find('div').filter('#mount-doom'));
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM
  $('#Mordor').find('div').filter('#gollum').remove();
  // 2. remove all the baddies from the DOM
  $('#Mordor').find('li').filter('.baddy').remove();
  // 3. Move all the hobbits back to the shire
  $('#Rivendell').find('ul').appendTo('#The-Shire');
  // or:
  // $('#Rivendell').find('li').filter('.hobbit').appendTo('#The-Shire');
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

$(() => {

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

});
