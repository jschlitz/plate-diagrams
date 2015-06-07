$(document).ready(function(){
  var logged = "";
  var LOREM = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  var makeDiv = function (c) {
    return $('<div>').addClass(c);
  }

  var makeDiagram = function(items) {
    var result = makeDiv('container');
    for (var i = 0; i < items.length; i++) {
      result.append(items[i]);
    }

    return result;
  };

  var makeSource = function(text, count){
    var result = makeDiv('subcontainer');
    result.append(makeDiv('source').text(count));
    result.append($('<p>').text(text));

    return result;
  };

  var makeArrow = function(){
    return makeDiv('arrow');
  };

  var makeNote = function(txt){
    return $('<p>').text(txt).addClass('big-text');
  };

  var makeDestination = function (text, wellInfo, startColor) {
    var result = makeDiv('subcontainer');
    var dest = makeDiv('plate2');

    //the wells
    var wells = [];

    //fill it out to 96
    for (var i = 0; i < 96; i++) {
      wells.push(makeDiv('well'));
    }

    var wc = 0;
    for (var i = 0; i < wellInfo.length; i++) {
      for (var j = 0; j < wellInfo[i]; j++) {
        wells[wc].addClass('c' + ((i*5+startColor)%36));
        wc++;
      }
    }

    //break out the columns
    for (var i = 0; i < 12; i++) {
      var col = makeDiv('column');
      col.append(wells.slice(i*8, (i+1)*8));
      dest.append(col);
    }

    result.append(dest);

    //finally, the text
    result.append($('<p>').text(text));

    return result;
  }

  var main = $("#main");
  main.empty();

  main.append($("<h2>").text("Many to one"));
  main.append($("<p>").html("These workflows take a known maximum number of wells <b>N</b>\
    from a known number of source plates, and consolidate them into destination plates as best as it can.\
    The choice of <b>N</b> and the number of colonies that are actually on the source plates will have\
    effects on the final layout that may not be immediatly obvious."));

  main.append($("<p>").html("Say <b>N</b> = 8, and we always have enough colonies to pick.\
    If we have 24 source plates, we'll completely fill up 2 destinations and leave the remaining colonies on our sources."));
  main.append(
    makeDiagram([makeSource("24 sources plates", ">8"),
      makeArrow(),
      makeDestination("1st", [8,8,8,8,8,8,8,8,8,8,8,8], 0),
      makeDestination("2nd", [8,8,8,8,8,8,8,8,8,8,8,8], 12)]));



  //$("#content").text("Hello World!")

/*


 $("#about").on("click", function (e){
    $("#content").empty();
    $("#content").append($("<p>").text("foo"));
    $("#content").append($("<br>"));
    $("#content").append($("<p>").text(LOREM));
  });

  $("#home").on("click", function (e){
    $("#content").empty();
    $("#content").append($("<p>").text("Welcome home."));
  });

  $("#menu").on("click", function (e){
    $("#content").empty();
    var stuff = $("<div>");
    var img = $("<img>");
    img.attr("src", "foxhead.png");
    stuff.append(img);
    stuff.append($("<p>").text("buy this!"));

    $("#content").append(stuff);
    $("#content").append($("<br>"));
    $("#content").append(stuff.clone());
    $("#content").append($("<br>"));
    $("#content").append(stuff.clone());
  });
*/
});
