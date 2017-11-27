// document ready function
$(function() {

    // Init Scroll Magic Controller
    var controller = new ScrollMagic.Controller({});

    // ANIMATION: fade in text when scrolling to the section
    // Loop through each section's div
    $("section div").each(function(){
      // create a scene for each section that is triggered at the start of the h2
      var header = new ScrollMagic.Scene({
        triggerElement: this.children[0],
        triggerHook: 0.8,
        })
      .setClassToggle(this, "fade-in") //add class to the section's div
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
    .addTo(controller);

    // ANIMATION: get rid of brick on hover
    // when a brick element is hovered on, fade it out.
    $(".brick").hover(function(){
      $(this).fadeOut(200)
    });

    // ANIMATION: parrallax for brick wall
    //
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
    .addTo(controller);
    // build tween
    var brickExit = new TimelineMax();
    brickExit.to(brickwall, 15, {y: "-=300px", ease:Power0.easeNone}, 0);

    var brickExitScene = new ScrollMagic.Scene({
      triggerHook: 0,
      triggerElement: '#brickwalls',
      offset: 300,
      duration: 300,
    })
    .setTween(brickExit)
    .addTo(controller);

    // ANIMATION: speech bubble popping in when entering section
    //
    var critique = new TimelineMax();
    var isChromium = window.chrome,
    winNav = window.navigator,
    vendorName = winNav.vendor,
    isOpera = winNav.userAgent.indexOf("OPR") > -1,
    isIEedge = winNav.userAgent.indexOf("Edge") > -1,
    isIOSChrome = winNav.userAgent.match("CriOS");

    if(isIOSChrome){
       console.log('is Google Chrome on IOS');
       alert('is Google Chrome on IOS');
    } else if(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
      critique.to('.pink-bubble', 2, {opacity: '1'}, .5)
              .from('.bubble1', 2, {x:'-=100'}, .75)
              .to('.bubble1', 2, {opacity: '1'}, .75)
              .from('.bubble2', 2, {x:'+=100'}, 1)
              .to('.bubble2', 2, {opacity: '1'}, 1)
              .from('.bubble3', 2, {x:'-=100'}, 1.25)
              .to('.bubble3', 2, {opacity: '1'}, 1.25)
              .from('.bubble4', 2, {x:'+=100'}, 1.5)
              .to('.bubble4', 2, {opacity: '1'}, 1.5)
              .from('.bubble5', 2, {x:'-=100'}, 1.75)
              .to('.bubble5', 2, {opacity: '1'}, 1.75)
              .from('.bubble6', 2, {x:'+=100'}, 2)
              .to('.bubble6', 2, {opacity: '1'}, 2)
              .to('.heart',0.5, {opacity: '1'}, 2.5);
    } else {
      critique.to('.pink-bubble', 2, {opacity: '1'}, .5)
              .from('.bubble1', 2, {x:'-=100'}, .75)
              .to('.bubble1', 2, {opacity: '1'}, .75)
              .to('.bubble2', 2, {transform:'matrix(1,0,0,1,0,0)', opacity: '1'}, 1)
              .from('.bubble3', 2, {x:'-=100'}, 1.25)
              .to('.bubble3', 2, {opacity: '1'}, 1.25)
              .to('.bubble4', 2, {transform:'matrix(1,0,0,1,0,0)', opacity: '1'}, 1.5)
              .from('.bubble5', 2, {x:'-=100'}, 1.75)
              .to('.bubble5', 2, {opacity: '1'}, 1.75)
              .to('.bubble6', 2, {transform:'matrix(1,0,0,1,0,0)', opacity: '1'}, 2)
              .to('.heart',0.5, {opacity: '1'}, 2.5);
    }

    var speechBubbles = new ScrollMagic.Scene({
      triggerElement:"#critic",
      offset: -50,
      duration: 300,
      triggerHook: 0.3
    })
    .setTween(critique)
    .addTo(controller);

    var critiqueExit = new TimelineMax();
    critiqueExit.to('#speechBubbles', 1, {opacity: '0'});

    var critExitScene = new ScrollMagic.Scene({
      triggerElement: "#critic",
      offset: 200,
      triggerHook: 0
    })
    .setTween(critiqueExit)
    .addTo(controller);

    // ANIMATION: hover over speech bubbles should become pink
    $(".bubble").hover(function(){
      $(this).toggleClass("show-heart");
    });


    // ANIMATION: Draw SVG for green wavey lines in experience section
    // grab svg paths and prepare paths by modifying css properties
    var greenLines = $(".line");
    preparePath(greenLines);
    greenLines.css("opacity", 0.3);
    // build tween
    var tween = new TimelineMax()
    .add(TweenMax.to(greenLines, 2.5, {strokeDashoffset: 0, ease:Linear.easeNone}));
    // build scene, add tween to scene, add to controller
    var svgScene = new ScrollMagic.Scene({
      triggerElement: "#patience",
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
    .addTo(controller); // add to controller

    // scroll to top functionality
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.cd-top').fadeIn();
            $('.scroll').fadeOut();
        } else {
            $('.cd-top').fadeOut();
            $('.scroll').fadeIn();
        }
    });
    $('.cd-top').click(function () {
      $("html, body").animate({
        scrollTop: 0
      }, 1500);
      return false;
    });

});


// helper function used to draw SVG paths when scrolling
function preparePath(path) {
  var len = path[0].getTotalLength();
  path.css("stroke-dasharray", len);
  path.css("stroke-dashoffset", len);
}
