$(document).ready(function(){
  var logged = "";
  var LOREM = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

  var makeDiagram = function(items) {
    var result = $('<div>').attr('class', 'container');
    for (var i = 0; i < items.length; i++) {
      result.append(items[i]);
    }

    return result;
  };

  var makeSource = function(text, count){
    var result = $('<div>').attr('class', 'subcontainer');
    result.append($('<div>').attr('class', 'source').text(count));
    result.append($('<p>').text(text));

    return result;
  };

  var makeArrow = function(){
    return $('<div>').attr('class', 'arrow');
  };

  var makeDestination = function (text, wellInfo, startColor) {
    var result = $('<div>').attr('class', 'subcontainer');
    var dest = $('<div>').attr('class', 'plate2');

    //the wells
    var wells = [];

    //fill it out to 96
    for (var i = 0; i < 96; i++) {
      wells.push($('<div>').attr('class', 'well'));
    }

    var wc = 0;
    for (var i = 0; i < wellInfo.length; i++) {
      for (var j = 0; j < wellInfo[i]; j++) {
        wells[wc].addClass('c' + (i*5%36));
        wc++;
      }
    }

    //break out the columns
    for (var i = 0; i < 12; i++) {
      var col = $('<div>').attr('class', 'column');
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

  main.append(
    makeDiagram([makeSource("Hello world", 96),
      makeArrow(),
      makeDestination("wibble wobble", [13, 12,11,10,9,8,7,6,5,4,3,2,1], 0)]));



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
