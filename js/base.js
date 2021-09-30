
$(document).ready(function(){
 
  $('.sidenav').sidenav({alignment:'right'});
  $('.dropdown-trigger').dropdown({
    coverTrigger:false,
    hover:true
  });
  //$('.materialboxed').materialbox();
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems, {
    onOpenStart: function(){
      $("#slide-out").css({zIndex:0});
    },
    onCloseStart: function(){
      $("#slide-out").css({zIndex:999});

    }
  });




  if($(window).width()>769){

            // Init controller
  var controller = new ScrollMagic.Controller({
    globalSceneOptions: {
      duration: $('section').height(),
      triggerHook: .025,
      reverse: true
    },
    vertical: false
  });



  // Change behaviour of controller
  // to animate scroll instead of jump
  controller.scrollTo(function(target) {

    TweenMax.to(window, 0.5, {
      scrollTo : {
        x : target,
        autoKill : true // Allow scroll position to change outside itself
      },
      ease : Cubic.easeInOut
    });

  });


  //  Bind scroll to anchor links using Vanilla JavaScript
  var anchor_nav = document.querySelector('.navigation-link');

  $('.navigation-link').each(function(i,e){

      $(e).on('click', function(evt) {
          id = $(this).attr('href');
      if(id !== null && id.length > 0) {
          evt.preventDefault();
          var pos= $(id).offset().left;

          controller.scrollTo(pos - 200);

          if(window.history && window.history.pushState) {
          history.pushState("", document.title, id);
          }
      }
      });
  });
  window.addEventListener("wheel", onWheel);

  function onWheel(event) {
    //event.preventDefault();

    var normalized;  
    var delta = event.wheelDelta;
    var scroll = (window.pageXOffset || document.scrollLeft) - (document.clientLeft || 0) || 0;
    
    if (delta) {
      normalized = (delta % 120) == 0 ? delta / 120 : delta / 12;
    } else {
      delta = event.deltaY || event.detail || 0;
      normalized = -(delta % 3 ? delta * 10 : delta / 3);
    }

    TweenLite.to(window, 0.4, {scrollTo: {x: scroll + 200 * normalized } });
  }


      }

});