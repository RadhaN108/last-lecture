function preparePath(path) {
  var len = path[0].getTotalLength();
  path.css("stroke-dasharray", len);
  path.css("stroke-dashoffset", len);
}


// document ready function
$(function() {
    // Init Controller
    var scrollMagicController = new ScrollMagic.Controller({});

    // Animation for section 1 header
    // loop through each section
    $("section div").each(function(){
      var header = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.8,
        })
        .setClassToggle(this, "fade-in") //add class to project01
        .addIndicators({
          name: 'fade scene',
          colorTrigger: 'black',
          colorStart: '#74C695',
          colorEnd: 'pink'
          })
        .addTo(scrollMagicController);
    });


    // Animation to draw SVG for green wavey lines
    // grab svg and prepare svg paths
    var greenLines = $(".line");
    preparePath(greenLines);
    // build tween
    var tween = new TimelineMax()
      .add(TweenMax.to(greenLines, 3, {strokeDashoffset: 0, ease:Linear.easeNone}));
    // build scene, add tween to scene, add to controller
    var svgScene = new ScrollMagic.Scene({
      triggerElement: "#experience",
      triggerHook: 0.8,
      duration: 300,
      tweenChanges: true
      })
      .setTween(tween)
      .addIndicators() // remove after
      .addTo(scrollMagicController);
});
