window.onload = function(){
    
    var titles = document.querySelectorAll(".section__title");
    TweenLite.defaultEase = Linear.easeNone;
    $(function () { // wait for document ready
      
      var controller = new ScrollMagic.Controller();
    
      var horizontalSlide = new TimelineMax()
      // animate panels
      .to("#js-slideContainer", 1,   {x: "-20%"}, "label1")
      .from(titles[1], 0.5, {opacity:0}, "label1+=0.5")
      .to("#js-slideContainer", 1,   {x: "-40%"}, "label2")
      .from(titles[2], 0.5, {opacity:0}, "label2+=0.5")
      .to("#js-slideContainer", 1,   {x: "-60%"}, "label3")
      .from(titles[3], 0.5, {opacity:0}, "label3+=0.5")
      .to("#js-slideContainer", 1,   {x: "-80%"}, "label4")
      .from(titles[4], 0.5, {opacity:0}, "label4+=0.5");
    
    
      // create scene to pin and link animation
      new ScrollMagic.Scene({
        triggerElement: "#js-wrapper",
        triggerHook: "onLeave",
        duration: "400%"
      })
        .setPin("#js-wrapper")
        .setTween(horizontalSlide)
        //.addIndicators() // add indicators (requires plugin)
        .addTo(controller);
      
      
      
    });
    //methods
};