$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(
  300,200,15,100, "#804861");
createPlatform(
  800,200,15,100, "#804861");
createPlatform(
  0,300, 1100,15, "#804861");
createPlatform(
  500,0,100,200, "#804861");
createPlatform(
  1000,0,94,200, "#804861");
  createPlatform(
  1275,300, 150,15, "#804861");
createPlatform(
  900,300,200,100, "#804861");
  createPlatform(
  200,500, 1200,15, "#804861");
  createPlatform(
  500,400,200,100, "#804861");
  createPlatform(
  0,300,300,100, "#804861");
createPlatform(
  0,700, 200,15, "#804861");
  createPlatform(
  400,700, 200,15, "#804861");
  createPlatform(
  565,625,35,75, "#804861");
    createPlatform(
  0,625,100,75, "#804861");
  createPlatform(
  750,725, 235,15, "#804861");
   createPlatform(
  1085,725, 315,15, "#804861");
    createPlatform(
  800,500,500,100, "#804861");
    // TODO 3 - Create Collectables
createCollectable("wisp", 1350,200, 0.5, 0.7);
createCollectable("wisp", 460,400, 0.5, 0.7);
createCollectable("wisp", 1325,550);
    
    // TODO 4 - Create Cannons
createCannon("right", 250, 1475);
createCannon("left", 325, 1850);
createCannon("left", 688, 1);    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
