const RenderText = (canvas, ctx, text, x1, y1, x2, y2) => {};

class AboutSection {
  image = (canvas, ctx) => {
    let width = canvas.width;
    let height = canvas.height;
    // image section

    ctx.drawImage(
        profile,
        calculatePoint(width, 60),
        calculatePoint(height, 30),
        calculatePoint(width, 25),
        calculatePoint(height, 40)
      );

    const grad = ctx.createLinearGradient(
      calculatePoint(width, 60),
      calculatePoint(height, 30),
      calculatePoint(width, 85),
      calculatePoint(height, 30)
    );
    grad.addColorStop(0, color2);
    grad.addColorStop(0.3, "rgba(11, 62, 86, 0.3")
    grad.addColorStop(0.7, "rgba(11, 62, 86, 0.3")
    grad.addColorStop(1, color2);

    ctx.fillStyle = grad;
    ctx.fillRect(
      calculatePoint(width, 60),
      calculatePoint(height, 30),
      calculatePoint(width, 25),
      calculatePoint(height, 40)
    );
  };

  CenterPart = (canvas, ctx) => {
    let width = canvas.width;
    let height = canvas.height;

    // upper Part
    ctx.beginPath();
    ctx.moveTo(calculatePoint(width, 36.5), calculatePoint(height, 22));
    ctx.lineTo(calculatePoint(width, 36.5), calculatePoint(height, 24));
    ctx.lineTo(calculatePoint(width, 38.5), calculatePoint(height, 28));
    ctx.lineTo(calculatePoint(width, 75.5), calculatePoint(height, 28));
    ctx.lineTo(calculatePoint(width, 77.5), calculatePoint(height, 24));
    ctx.lineTo(calculatePoint(width, 77.5), calculatePoint(height, 22));
    ctx.closePath();
    ctx.fillStyle = color2;
    ctx.fill();

    // Rectangle information Screen
    ctx.beginPath();
    ctx.moveTo(calculatePoint(width, 13), calculatePoint(height, 29));
    ctx.lineTo(calculatePoint(width, 15), calculatePoint(height, 25));
    ctx.lineTo(calculatePoint(width, 36), calculatePoint(height, 25));
    ctx.lineTo(calculatePoint(width, 38), calculatePoint(height, 29));
    ctx.lineTo(calculatePoint(width, 76), calculatePoint(height, 29));
    ctx.lineTo(calculatePoint(width, 78), calculatePoint(height, 25));
    ctx.lineTo(calculatePoint(width, 85), calculatePoint(height, 25));
    ctx.lineTo(calculatePoint(width, 87), calculatePoint(height, 29));
    ctx.lineTo(calculatePoint(width, 87), calculatePoint(height, 75));
    ctx.lineTo(calculatePoint(width, 85), calculatePoint(height, 79));
    ctx.lineTo(calculatePoint(width, 78), calculatePoint(height, 79));
    ctx.lineTo(calculatePoint(width, 76), calculatePoint(height, 75));
    ctx.lineTo(calculatePoint(width, 38), calculatePoint(height, 75));
    ctx.lineTo(calculatePoint(width, 36), calculatePoint(height, 79));
    ctx.lineTo(calculatePoint(width, 15), calculatePoint(height, 79));
    ctx.lineTo(calculatePoint(width, 13), calculatePoint(height, 75));
    ctx.closePath();
    ctx.fillStyle = color2;
    ctx.fill();

    // lower Part
    ctx.beginPath();
    ctx.moveTo(calculatePoint(width, 39), calculatePoint(height, 76));
    ctx.lineTo(calculatePoint(width, 75), calculatePoint(height, 76));
    ctx.lineTo(calculatePoint(width, 77.5), calculatePoint(height, 80));
    ctx.lineTo(calculatePoint(width, 77.5), calculatePoint(height, 82));
    ctx.lineTo(calculatePoint(width, 36.5), calculatePoint(height, 82));
    ctx.lineTo(calculatePoint(width, 36.5), calculatePoint(height, 80));
    ctx.closePath();
    ctx.fillStyle = color2;
    ctx.fill();

    // OUTER LAYER

    // LEFT
    ctx.beginPath();
    ctx.moveTo(calculatePoint(width, 20), calculatePoint(height, 23));
    ctx.lineTo(calculatePoint(width, 14), calculatePoint(height, 23));
    ctx.lineTo(calculatePoint(width, 11), calculatePoint(height, 29));
    ctx.lineTo(calculatePoint(width, 11), calculatePoint(height, 51));
    ctx.moveTo(calculatePoint(width, 11), calculatePoint(height, 53));
    ctx.lineTo(calculatePoint(width, 11), calculatePoint(height, 75));
    ctx.lineTo(calculatePoint(width, 14), calculatePoint(height, 81));
    ctx.lineTo(calculatePoint(width, 20), calculatePoint(height, 81));
    ctx.lineWidth = 1;
    ctx.strokeStyle = color1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(calculatePoint(width, 18), calculatePoint(height, 23));
    ctx.lineTo(calculatePoint(width, 14), calculatePoint(height, 23));
    ctx.lineTo(calculatePoint(width, 11), calculatePoint(height, 29));
    ctx.lineTo(calculatePoint(width, 11), calculatePoint(height, 49));
    ctx.moveTo(calculatePoint(width, 11), calculatePoint(height, 55));
    ctx.lineTo(calculatePoint(width, 11), calculatePoint(height, 75));
    ctx.lineTo(calculatePoint(width, 14), calculatePoint(height, 81));
    ctx.lineTo(calculatePoint(width, 18), calculatePoint(height, 81));
    ctx.lineWidth = 5;
    ctx.strokeStyle = color2;
    ctx.stroke();

    // RIGHT
    ctx.beginPath();
    ctx.moveTo(calculatePoint(width, 82), calculatePoint(height, 23));
    ctx.lineTo(calculatePoint(width, 86), calculatePoint(height, 23));
    ctx.lineTo(calculatePoint(width, 89), calculatePoint(height, 29));
    ctx.lineTo(calculatePoint(width, 89), calculatePoint(height, 51));
    ctx.moveTo(calculatePoint(width, 89), calculatePoint(height, 53));
    ctx.lineTo(calculatePoint(width, 89), calculatePoint(height, 75));
    ctx.lineTo(calculatePoint(width, 86), calculatePoint(height, 81));
    ctx.lineTo(calculatePoint(width, 82), calculatePoint(height, 81));
    ctx.lineWidth = 1;
    ctx.strokeStyle = color1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(calculatePoint(width, 84), calculatePoint(height, 23));
    ctx.lineTo(calculatePoint(width, 86), calculatePoint(height, 23));
    ctx.lineTo(calculatePoint(width, 89), calculatePoint(height, 29));
    ctx.lineTo(calculatePoint(width, 89), calculatePoint(height, 49));
    ctx.moveTo(calculatePoint(width, 89), calculatePoint(height, 55));
    ctx.lineTo(calculatePoint(width, 89), calculatePoint(height, 75));
    ctx.lineTo(calculatePoint(width, 86), calculatePoint(height, 81));
    ctx.lineTo(calculatePoint(width, 84), calculatePoint(height, 81));
    ctx.lineWidth = 5;
    ctx.strokeStyle = color2;
    ctx.stroke();
  };

  TextRender = (canvas, ctx) => {
    let width = canvas.width;
    let height = canvas.height;
    
    let name = home.name;
    ctx.fillStyle = color4;
    ctx.font = `bold ${calculatePoint(width, 4)}px Times New Roman`;
    ctx.fillText(name, calculatePoint(width, 18), calculatePoint(height, 45));

    let title = home.title;
    ctx.fillStyle = "white";
    ctx.font = `bold ${calculatePoint(width, 2)}px Times New Roman`;
    ctx.fillText(title, calculatePoint(width, 18), calculatePoint(height, 50));
    let greeting = "Hello there, I'm"
    ctx.fillText(greeting, calculatePoint(width, 18), calculatePoint(height, 37));
};

  update = (canvas, ctx) => {
    this.CenterPart(canvas, ctx);
    this.image(canvas, ctx);

    this.TextRender(canvas, ctx);
  };
}
