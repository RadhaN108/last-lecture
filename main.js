// helper function used to draw SVG paths when scrolling
function preparePath(path) {
  var len = path[0].getTotalLength();
  path.css("stroke-dasharray", len);
  path.css("stroke-dashoffset", len);
}


// document ready function
$(function() {

    // Init Scroll Magic Controller
    var scrollMagicController = new ScrollMagic.Controller({});


    // ANIMATION: fade in text when scrolling to the section
    // Loop through each section's div
    $("section div").each(function(){
      // create a scene for each section that is triggered at the start of the h2
      var header = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.8,
        })
        .setClassToggle(this, "fade-in") //add class to the section's div
        .addIndicators({ // remove before turning in!
          name: 'fade scene',
          colorTrigger: 'black',
          colorStart: '#74C695',
          colorEnd: 'pink'
          })
        .addTo(scrollMagicController); // add to controller
    });


    // ANIMATION: Draw SVG for green wavey lines in experience section
    // grab svg paths and prepare paths by modifying css properties
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
      .addIndicators({ // remove before turning in!
        name: 'drawing green waves',
        colorTrigger: 'black',
        colorStart: '#74C695',
        colorEnd: 'pink'
      })
      .addTo(scrollMagicController);
});
