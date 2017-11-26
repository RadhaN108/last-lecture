// document ready function
$(function() {

    // Init Scroll Magic Controller
    var controller = new ScrollMagic.Controller({});

    // // ANIMATION: Pin the header section
    // // create a scene that triggers with the header
    // var pinHeader = new ScrollMagic.Scene({
    //   triggerElement: "header",
    //   triggerHook: 0,
    //   duration: "40%"
    // })
    // .setPin("header", {pushFollowers: false})
    // .addIndicators()
    // .addTo(controller);


    // ANIMATION: fade in text when scrolling to the section
    // Loop through each section's div
    $("section div").each(function(){
      // create a scene for each section that is triggered at the start of the h2
      var header = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.8,
        })
        .setClassToggle(this, "fade-in") //add class to the section's div
        // .addIndicators({ // remove before turning in!
        //   name: 'fade scene',
        //   colorTrigger: 'black',
        //   colorStart: '#74C695',
        //   colorEnd: 'pink'
        //   })
        .addTo(controller); // add to controller
    });

    // ANIMATION: falling pyramid fundamentals when scrolling into section
    var funAnim = new TimelineMax();
    funAnim.from('#fundamentals-1', 3, {y: "-=1500px"}, .25)
           .to('#fundamentals-1', 1, {opacity: '.2'}, .25)
           .from('#fundamentals-2', 3, {y: "-=1400px"}, 0.5)
           .to('#fundamentals-2', 1, {opacity: '.2'}, .5)
           .from('#fundamentals-3', 3, {y: "-=1300px"}, 1)
           .to('#fundamentals-3', 1, {opacity: '.2'}, 1)
           .from('#fancy', 3, {y: "-=1000px"}, 1.5)
           .to('#fancy', 1, {opacity: '.6'}, 1.5);

    var fundamentals = new ScrollMagic.Scene({
      triggerElement: '.fun-1',
      offset: -700,
      duration: 700,
      triggerHook: 0.3
    })
    .setTween(funAnim)
    // .addIndicators({
    //   name: 'stack',
    //   colorTrigger: 'black',
    //   colorStart: '#74C695',
    //   colorEnd: 'pink'
    //  })
  .addTo(controller);

    // ANIMATION: get rid of brick on hover
    // when a brick element is hovered on, fade it out.
    $(".brick").hover(function(){
      $(this).fadeOut(200)
    });

    // ANIMATION: parrallax for brick wall
    // asdf
    var brickwall = $(".brick-wall");
    // build tween
    var brickEnter = new TimelineMax();
    brickEnter.from(brickwall, 15, {y: "+=400px", ease:Power0.easeNone}, 0);
    // build scene, add tween to scene, add to controller
    var BrickEnterScene = new ScrollMagic.Scene({
      triggerElement: "#brickwalls",
      triggerHook: 0.8,
      duration: 550,
      })
      .setTween(brickEnter)
      // .addIndicators({ // remove before turning in!
      //   name: 'building brick wall',
      //   colorTrigger: 'black',
      //   colorStart: '#74C695',
      //   colorEnd: 'pink'
      // })
      .addTo(controller);
    // build tween
    var brickExit = new TimelineMax();
    brickExit.to(brickwall, 15, {y: "-=400px", ease:Power0.easeNone}, 0);

    var brickExitScene = new ScrollMagic.Scene({
      triggerHook: 0,
      triggerElement: '#brickwalls',
      offset: 400,
      duration: 300,
    })
    .setTween(brickExit)
    .addIndicators()
    .addTo(controller);

    // ANIMATION: Draw SVG for green wavey lines in experience section
    // grab svg paths and prepare paths by modifying css properties
    var greenLines = $(".line");
    preparePath(greenLines);
    greenLines.css("opacity", 0.3)
    // build tween
    var tween = new TimelineMax()
      .add(TweenMax.to(greenLines, 2.5, {strokeDashoffset: 0, ease:Linear.easeNone}));
    // build scene, add tween to scene, add to controller
    var svgScene = new ScrollMagic.Scene({
      triggerElement: "#experience",
      triggerHook: 0.7,
      duration: 300,
      tweenChanges: true
      })
      .setTween(tween)
      .addTo(controller);

      // ANIMATION: change background color for hardwork section
      // when user scrolls to the don't complain section, background turns black
      // create animation TimelineMax
      var backgroundChange = new TimelineMax()
        .add(TweenMax.to('body', 1, {backgroundColor: 'black', ease:Power0.easeNone}))
        .add(TweenMax.to('div', 1, {color: 'white', ease:Power0.easeNone}));

      var complainBackground = new ScrollMagic.Scene({
        triggerElement: "#work-hard",
        triggerHook: .9,
        duration: 500
      })
      .setTween(backgroundChange)
      // .addIndicators({ // remove before turning in!
      //   name: 'change background color',
      //   colorTrigger: 'black',
      //   colorStart: '#74C695',
      //   colorEnd: 'pink'
      // })
      .addTo(controller); // add to controller

      // ANIMATION: toggle backgorund when out of section (TODO)

});


// helper function used to draw SVG paths when scrolling
function preparePath(path) {
  var len = path[0].getTotalLength();
  path.css("stroke-dasharray", len);
  path.css("stroke-dashoffset", len);
}
