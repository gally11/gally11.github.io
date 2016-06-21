$(function() {
  if (window.matchMedia("(min-width: 601px)").matches) {
    /* La largeur minimum de l'affichage est 601 px inclus */
    // palets déplaçable
    $( "#draggable" ).draggable({ containment: "#page1", scroll: false });
    $( "#draggable2" ).draggable({ containment: "#page1", scroll: false });
    $( "#draggable3" ).draggable({ containment: "#page1", scroll: false });
    // action si déplacement dans but
    $("#zone_but").droppable({
      over: function( event, ui ) {
          var $palet = $(ui.draggable);
          var $image = $palet.find("img");
        $image.animate({height: "2%",width:"2%"}, 1000)
      },
         drop : function(event,ui) {
            var $palet = $(ui.draggable);
            var href = $palet.attr("href");
            window.location=href;
      },
    });
    // action si déplacement hors but
    $("#page1").droppable({
        drop: function( event, ui ) {
          var $palet = $(ui.draggable);
          var $image = $palet.find("img");
        $image.animate({width:"18%"}, 1000)
      }
    });
    // affichage des fenetres textes en fonction des logos
    $("#hockey_text,#boxhockey").click(function() {
      if ($("#boxhockey").hasClass('close')) {
      $("#boxhockey").removeClass('close');
      } else {
      $("#boxhockey").addClass('close');
    }});
    $("#ch,#boxch").click(function() {
      if ($("#boxch").hasClass('close')) {
      $("#boxch").removeClass('close');
      } else {
      $("#boxch").addClass('close');
    }});
    $("#guitar,#boxguitar").click(function() {
      if ($("#boxguitar").hasClass('close')) {
      $("#boxguitar").removeClass('close');
      } else {
      $("#boxguitar").addClass('close');
    }});

  } else { /* L'affichage est inférieur à 601px de large */

    // palets déplaçable
    $( "#draggable" ).draggable({ containment: "#page1", scroll: false });
    $( "#draggable2" ).draggable({ containment: "#page1", scroll: false });
    $( "#draggable3" ).draggable({ containment: "#page1", scroll: false });
    // action si déplacement dans but
    $("#zone_but").droppable({
        over: function( event, ui ) {
          var $palet = $(ui.draggable);
          var $image = $palet.find("img");
        $image.animate({height: "5%",width:"5%"}, 1000)
      },
         drop : function(event,ui) {
            var $palet = $(ui.draggable);
            var href = $palet.attr("href");
            window.location=href;
      }
    });
    // action si déplacement hors but
    $("#page1").droppable({
        drop: function( event, ui ) {
          var $palet = $(ui.draggable);
          var $image = $palet.find("img");
        $image.animate({width:"28%"}, 1000)
      }
    });
    // affichage des fenetres textes en fonction des logos
    $("#hockey_text,#boxhockey").click(function() {
      if ($("#boxhockey").hasClass('close')) {
        $("#boxhockey").removeClass('close');
        $("#ch,#guitar").addClass('close');
      } else {
        $("#boxhockey").addClass('close');
        $("#ch,#guitar").removeClass('close');
    }});
    $("#ch,#boxch").click(function() {
      if ($("#boxch").hasClass('close')) {
        $("#boxch").removeClass('close');
        $("#hockey_text,#guitar").addClass('close');
      } else {
        $("#boxch").addClass('close');
        $("#hockey_text,#guitar").removeClass('close');
    }});
    $("#guitar,#boxguitar").click(function() {
      if ($("#boxguitar").hasClass('close')) {
        $("#boxguitar").removeClass('close');
        $("#hockey_text,#ch").addClass('close');
      } else {
        $("#boxguitar").addClass('close');
        $("#hockey_text,#ch").removeClass('close');
    }});
}

// // déplacement du gardien en fonction de la souris
function findPos(obj) {
  var curleft = curtop = 0; //Contiendra les coordonnées de obj.
  if (obj.offsetParent) { //Si le navigateur supporte offsetParent.
      do {
          curleft += obj.offsetLeft; //On met à jour les marges.
          curtop += obj.offsetTop;
      } while (obj = obj.offsetParent); //Si obj a un parent on le lui assigne et on continue, sinon on arrête la boucle.
  }
  return [curleft,curtop]; //On retourne la position sous forme de tableau.
}

document.onmousemove = function(e) {
    if (!e) {
        var e = window.event;
    }
    var mX = parseInt(e.pageX ? e.pageX : e.clientX, 10);
    var mY = parseInt(e.pageY ? e.pageY : e.clientY, 10);

    if (document.all) {
        mX += document.documentElement.scrollLeft;
        mY += document.documentElement.scrollTop;
    }

    var cadre = document.getElementById("zone_but");
    var pos = findPos(cadre);
    var goal = document.getElementById("goaly");

    mX = Math.min(Math.max(pos[0], mX - (goal.offsetWidth/2)), pos[0] + cadre.offsetWidth - goal.offsetWidth);

    goal.style.right = mX + 'px';
    };
});
