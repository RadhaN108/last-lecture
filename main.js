$(function() {

    // Init Controller
    var scrollMagicController = new ScrollMagic.Controller({});
    console.log ("created controller");

    // create a scene
    var scene = new ScrollMagic.Scene({
      triggerHook: "onEnter",
      triggerElement: "#section1",
      duration: 400
    })
    .setTween("h2", {autoAlpha: 1, }, )
    .addIndicators()
    .addTo(scrollMagicController);


    // get svg path
    var svgPath = $("#line-svg"),
        pathLen = svgPath.get(0).getTotalLength();
        console.log(pathLen);


    // prepare paths
    svgPath.css("stroke-dasharray", pathLen);
    svgPath.css("stroke-dashoffset", pathLen);


    // build svgTween
    var svgTween = new TimelineMax()
    .add(TweenMax.to(svgPath, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone}));

    // build Scene
    var svgScene = new ScrollMagic.Scene({
      triggerElement: "#svg-animation",
      duration: 300,
      tweenChanges: true
    })
  .setTween(svgTween)
  .addIndicators()
  .addTo(scrollMagicController);


    // get svg path
    var greenLines = $(".Line");
        LineLen = greenLines.get(0).getTotalLength();
        console.log(LineLen);

    // prepare paths
    greenLines.css("stroke-dasharray", LineLen);
    greenLines.css("stroke-dashoffset", LineLen);

    // build greenLinesTween
    var greenTween = new TimelineMax()
    .add(TweenMax.to(greenLines, 2, {strokeDashoffset: 0, ease:Linear.easeNone}));

    // build Scene
    var svgScene = new ScrollMagic.Scene({
      triggerElement: "#greenLines",
      duration: 500,
      tweenChanges: true
    })
  .setTween(greenTween)
  .addIndicators()
  .addTo(scrollMagicController);





});
