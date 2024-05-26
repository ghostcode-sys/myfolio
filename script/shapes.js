const calculatePoint = (distance, percentage) => {
  return (distance * percentage) / 100;
};

const makeTwoDigit = (num) => {
  if (num < 10) {
    return "0" + num;
  }
  return num;
};

let color1 = "rgb(19, 175, 240)";
let color2 = "rgb(11, 62, 86)";
let color3 = "#55ACEE";
let color4 = "#A6FF96";

const BigOutlines = (canvas, ctx) => {
  let width = canvas.width;
  let height = canvas.height;

  ctx.beginPath();
  ctx.moveTo(calculatePoint(width, 7), calculatePoint(height, 12));
  ctx.lineTo(calculatePoint(width, 40), calculatePoint(height, 12));
  ctx.lineTo(calculatePoint(width, 45), calculatePoint(height, 5));
  ctx.lineTo(calculatePoint(width, 93), calculatePoint(height, 5));
  ctx.lineTo(calculatePoint(width, 97), calculatePoint(height, 10));
  ctx.lineTo(calculatePoint(width, 97), calculatePoint(height, 90));
  ctx.lineTo(calculatePoint(width, 93), calculatePoint(height, 97));
  ctx.lineTo(calculatePoint(width, 7), calculatePoint(height, 97));
  ctx.lineTo(calculatePoint(width, 3), calculatePoint(height, 90));
  ctx.lineTo(calculatePoint(width, 3), calculatePoint(height, 17));
  ctx.closePath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = color2;
  ctx.stroke();

  const diff = 2;
  ctx.beginPath();
  ctx.moveTo(
    calculatePoint(width, 7) - diff,
    calculatePoint(height, 12) - diff
  );
  ctx.lineTo(
    calculatePoint(width, 40) - diff,
    calculatePoint(height, 12) - diff
  );
  ctx.lineTo(
    calculatePoint(width, 45) - diff,
    calculatePoint(height, 5) - diff
  );
  ctx.lineTo(
    calculatePoint(width, 93) - diff,
    calculatePoint(height, 5) - diff
  );
  ctx.lineTo(
    calculatePoint(width, 97) + diff,
    calculatePoint(height, 10) - diff
  );
  ctx.lineTo(
    calculatePoint(width, 97) + diff,
    calculatePoint(height, 90) + diff
  );
  ctx.lineTo(
    calculatePoint(width, 93) + diff,
    calculatePoint(height, 97) + diff
  );
  ctx.lineTo(
    calculatePoint(width, 7) - diff,
    calculatePoint(height, 97) + diff
  );
  ctx.lineTo(
    calculatePoint(width, 3) - diff,
    calculatePoint(height, 90) + diff
  );
  ctx.lineTo(
    calculatePoint(width, 3) - diff,
    calculatePoint(height, 17) - diff
  );
  ctx.closePath();
  ctx.strokeStyle = color1;
  ctx.lineWidth = 1;
  ctx.stroke();
};

const UpperBox = (canvas, ctx) => {
  let width = canvas.width;
  let height = canvas.height;

  // upper line
  ctx.beginPath();
  ctx.moveTo(calculatePoint(width, 7), calculatePoint(height, 2));
  ctx.lineTo(calculatePoint(width, 7), calculatePoint(height, 3));
  ctx.lineTo(calculatePoint(width, 40), calculatePoint(height, 3));
  ctx.lineTo(calculatePoint(width, 40), calculatePoint(height, 2));
  ctx.lineWidth = 5;
  ctx.strokeStyle = color2;
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.strokeStyle = color1;
  ctx.stroke();

  // middle box for text
  ctx.beginPath();
  ctx.moveTo(calculatePoint(width, 7), calculatePoint(height, 4));
  ctx.lineTo(calculatePoint(width, 25), calculatePoint(height, 4));
  ctx.lineTo(calculatePoint(width, 25), calculatePoint(height, 5));
  ctx.lineTo(calculatePoint(width, 22), calculatePoint(height, 9));
  ctx.lineTo(calculatePoint(width, 7), calculatePoint(height, 9));
  ctx.closePath();
  ctx.fillStyle = color2;
  ctx.fill();

  // Putting text in place
  ctx.font = `bold ${calculatePoint(width, 2)}px Times New Roman`;
  ctx.fillStyle = "orange";
  ctx.fillText(
    "PORTFOLIO",
    calculatePoint(width, 8),
    calculatePoint(height, 7.5)
  );

  // timing function
  const d = new Date();
  const min = makeTwoDigit(d.getMinutes());
  const hrs = makeTwoDigit(d.getHours());
  const sec = makeTwoDigit(d.getSeconds());
  let timeString = `${hrs}:${min}:${sec}`;
  ctx.font = `bold ${calculatePoint(width, 2)}px Times New Roman`;
  ctx.fillStyle = "white";
  ctx.fillText(
    timeString,
    calculatePoint(width, 26),
    calculatePoint(height, 8)
  );

  ctx.font = "bold 10px Times New Roman";
  ctx.fillStyle = "white";
  ctx.fillText(
    "TIME ELAPSED",
    calculatePoint(width, 34),
    calculatePoint(height, 8)
  );

  // lower line
  ctx.beginPath();
  ctx.moveTo(calculatePoint(width, 7), calculatePoint(height, 11));
  ctx.lineTo(calculatePoint(width, 7), calculatePoint(height, 10));
  ctx.lineTo(calculatePoint(width, 40), calculatePoint(height, 10));
  ctx.lineTo(calculatePoint(width, 40), calculatePoint(height, 11));
  ctx.lineWidth = 5;
  ctx.strokeStyle = color2;
  ctx.stroke();
  ctx.lineWidth = 1;
  ctx.strokeStyle = color1;
  ctx.stroke();
};

// upper navigations
class UpperNavigations1 {
  constructor() {
    this.active = true;
  }

  draw = (canvas, ctx) => {
    let width = canvas.width;
    let height = canvas.height;

    // first nav button
    ctx.beginPath();
    ctx.moveTo(calculatePoint(width, 45.3), calculatePoint(height, 7));
    ctx.lineTo(calculatePoint(width, 60), calculatePoint(height, 7));
    ctx.lineTo(calculatePoint(width, 60), calculatePoint(height, 11));
    ctx.lineTo(calculatePoint(width, 56), calculatePoint(height, 11));
    ctx.lineTo(calculatePoint(width, 55.5), calculatePoint(height, 10.5));
    ctx.lineTo(calculatePoint(width, 49.5), calculatePoint(height, 10.5));
    ctx.lineTo(calculatePoint(width, 49), calculatePoint(height, 11));
    ctx.lineTo(calculatePoint(width, 43), calculatePoint(height, 11));
    ctx.lineTo(calculatePoint(width, 43), calculatePoint(height, 10));
    ctx.closePath();
    ctx.fillStyle = color2;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(calculatePoint(width, 44), calculatePoint(height, 9.5));
    ctx.lineTo(calculatePoint(width, 49), calculatePoint(height, 9.5));
    ctx.lineWidth = 5;
    ctx.strokeStyle = color2;
    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.strokeStyle = color1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(calculatePoint(width, 60), calculatePoint(height, 9.5));
    ctx.lineTo(calculatePoint(width, 56), calculatePoint(height, 9.5));
    ctx.lineWidth = 5;
    ctx.strokeStyle = color2;
    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.strokeStyle = color1;
    ctx.stroke();
    ctx.font = `bold ${calculatePoint(width, 1)}px Times New Roman`;
    ctx.fillStyle = activePage == 1 ? color4 : "white";
    ctx.fillText(
      "<< HOME PAGE >>",
      calculatePoint(width, 48),
      calculatePoint(height, 8.6)
    );
    ctx.fillText(
      "OO1",
      calculatePoint(width, 51.7),
      calculatePoint(height, 10)
    );
  };

  update = (canvas, ctx) => {
    this.findCollision();
    this.draw(canvas, ctx);
  };

  findCollision = () => {
    let width = canvas.width;
    let height = canvas.height;
    if (
      mouseX > calculatePoint(width, 45) &&
      mouseX < calculatePoint(width, 60) &&
      mouseY > calculatePoint(height, 7) &&
      mouseY < calculatePoint(height, 11)
    ) {
      if (mouseDown) {
        activePage = 1;
      }
    }
  };
}

// upper navigation2 ==> Project page
class UpperNavigations2 {
  draw = (canvas, ctx) => {
    let width = canvas.width;
    let height = canvas.height;

    // first nav button
    ctx.beginPath();
    ctx.moveTo(calculatePoint(width, 62), calculatePoint(height, 7));
    ctx.lineTo(calculatePoint(width, 77), calculatePoint(height, 7));
    ctx.lineTo(calculatePoint(width, 77), calculatePoint(height, 11));
    ctx.lineTo(calculatePoint(width, 73), calculatePoint(height, 11));
    ctx.lineTo(calculatePoint(width, 72.5), calculatePoint(height, 10.5));
    ctx.lineTo(calculatePoint(width, 66.5), calculatePoint(height, 10.5));
    ctx.lineTo(calculatePoint(width, 66), calculatePoint(height, 11));
    ctx.lineTo(calculatePoint(width, 62), calculatePoint(height, 11));
    ctx.closePath();
    ctx.fillStyle = color2;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(calculatePoint(width, 62), calculatePoint(height, 9.5));
    ctx.lineTo(calculatePoint(width, 66), calculatePoint(height, 9.5));
    ctx.lineWidth = 5;
    ctx.strokeStyle = color2;
    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.strokeStyle = color1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(calculatePoint(width, 73), calculatePoint(height, 9.5));
    ctx.lineTo(calculatePoint(width, 77), calculatePoint(height, 9.5));
    ctx.lineWidth = 5;
    ctx.strokeStyle = color2;
    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.strokeStyle = color1;
    ctx.stroke();

    ctx.font = `bold ${calculatePoint(width, 1)}px Times New Roman`;
    ctx.fillStyle = activePage == 2 ? color4 : "white";
    ctx.fillText(
      "<< PROJECTS >>",
      calculatePoint(width, 65.5),
      calculatePoint(height, 8.6)
    );
    ctx.fillText(
      "OO2",
      calculatePoint(width, 68.7),
      calculatePoint(height, 10)
    );
  };

  update = (canvas, ctx) => {
    this.findCollision();
    this.draw(canvas, ctx);
  };

  findCollision = () => {
    let width = canvas.width;
    let height = canvas.height;
    if (
      mouseX > calculatePoint(width, 62) &&
      mouseX < calculatePoint(width, 77) &&
      mouseY > calculatePoint(height, 7) &&
      mouseY < calculatePoint(height, 11)
    ) {
      if (mouseDown) {
        activePage = 2;
      }
    }
  };
}

class UpperNavigations3 {
  draw = (canvas, ctx) => {
    let width = canvas.width;
    let height = canvas.height;

    // first nav button
    ctx.beginPath();
    ctx.moveTo(calculatePoint(width, 79), calculatePoint(height, 7));
    ctx.lineTo(calculatePoint(width, 92), calculatePoint(height, 7));
    ctx.lineTo(calculatePoint(width, 92), calculatePoint(height, 7));
    ctx.lineTo(calculatePoint(width, 94), calculatePoint(height, 10));
    ctx.lineTo(calculatePoint(width, 94), calculatePoint(height, 11));
    ctx.lineTo(calculatePoint(width, 90), calculatePoint(height, 11));
    ctx.lineTo(calculatePoint(width, 89.5), calculatePoint(height, 10.5));
    ctx.lineTo(calculatePoint(width, 83.5), calculatePoint(height, 10.5));
    ctx.lineTo(calculatePoint(width, 83), calculatePoint(height, 11));
    ctx.lineTo(calculatePoint(width, 79), calculatePoint(height, 11));
    ctx.closePath();
    ctx.fillStyle = color2;
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(calculatePoint(width, 79), calculatePoint(height, 9.5));
    ctx.lineTo(calculatePoint(width, 83), calculatePoint(height, 9.5));
    ctx.lineWidth = 5;
    ctx.strokeStyle = color2;
    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.strokeStyle = color1;
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(calculatePoint(width, 90), calculatePoint(height, 9.5));
    ctx.lineTo(calculatePoint(width, 93.7), calculatePoint(height, 9.5));
    ctx.lineWidth = 5;
    ctx.strokeStyle = color2;
    ctx.stroke();
    ctx.lineWidth = 1;
    ctx.strokeStyle = color1;
    ctx.stroke();

    ctx.font = `bold ${calculatePoint(width, 1)}px Times New Roman`;
    ctx.fillStyle = activePage == 3 ? color4 : "white";
    ctx.fillText(
      "<< CONTACT US >>",
      calculatePoint(width, 81.3),
      calculatePoint(height, 8.6)
    );
    ctx.fillText("OO3", calculatePoint(width, 85), calculatePoint(height, 10));
  };

  update = (canvas, ctx) => {
    this.findCollision();
    this.draw(canvas, ctx);
  };

  findCollision = () => {
    let width = canvas.width;
    let height = canvas.height;
    if (
      mouseX > calculatePoint(width, 79) &&
      mouseX < calculatePoint(width, 92) &&
      mouseY > calculatePoint(height, 7) &&
      mouseY < calculatePoint(height, 11)
    ) {
      if (mouseDown) {
        activePage = 3;
      }
    }
  };
}

class ProfileButtons {
  constructor(offset, imgSrc, url) {
    this.dx = 10;
    this.offset = offset;
    this.expand = -1;
    this.imgSrc = imgSrc;
    this.originalUrl = url;
    let text = url.split("/");
    let sz = text.length;
    this.url = text[sz - 1];
    this.startText = 0;
    this.textSize = this.url.length;
    this.imgDiffX = 0;
    this.imgDiffY = 0;
  }

  draw = (canvas, ctx) => {
    let width = canvas.width;
    let height = canvas.height;
    ctx.beginPath();
    ctx.moveTo(
      calculatePoint(width, 25.5 + this.offset),
      calculatePoint(height, 87)
    );
    ctx.lineTo(
      calculatePoint(width, 25 + this.offset),
      calculatePoint(height, 88)
    );
    ctx.lineTo(
      calculatePoint(width, 25 + this.offset),
      calculatePoint(height, 94)
    );
    ctx.lineTo(
      calculatePoint(width, 40 + this.offset - this.dx),
      calculatePoint(height, 94)
    );
    ctx.lineTo(
      calculatePoint(width, 40 + this.offset - this.dx),
      calculatePoint(height, 88)
    );
    ctx.lineTo(
      calculatePoint(width, 39.5 + this.offset - this.dx),
      calculatePoint(height, 87)
    );
    ctx.lineTo(
      calculatePoint(width, 35.5 + this.offset - this.dx),
      calculatePoint(height, 87)
    );
    ctx.lineTo(
      calculatePoint(width, 35 + this.offset - this.dx),
      calculatePoint(height, 88)
    );
    ctx.lineTo(
      calculatePoint(width, 30 + this.offset),
      calculatePoint(height, 88)
    );
    ctx.lineTo(
      calculatePoint(width, 29.5 + this.offset),
      calculatePoint(height, 87)
    );
    ctx.closePath();
    ctx.lineWidth = 1;
    ctx.fillStyle = color2;
    ctx.fill();
  };

  drawImage = (canvas, ctx) => {
    let width = canvas.width;
    let height = canvas.height;
    if (this.dx < 8) {
      if (this.startText < this.textSize && this.expand === 1) {
        this.startText++;
      }

      if (this.startText > 0 && this.expand === -1) {
        this.startText--;
      }

      ctx.fillStyle = "white";
      ctx.font = `bold ${calculatePoint(width, 1)}px Times New Roman`;
      let textToPrint = this.url.substring(0, this.startText);
      ctx.fillText(
        textToPrint,
        calculatePoint(width, this.offset + 25.5),
        calculatePoint(height, 92)
      );
      ctx.drawImage(
        copyIcon,
        calculatePoint(width, 38 + this.offset - this.dx),
        calculatePoint(height, 87),
        15,
        15
      );
    }
    ctx.drawImage(
      this.imgSrc,
      calculatePoint(width, 25.7 + this.offset),
      calculatePoint(height, 87.5),
      calculatePoint(width, 3.5 - this.imgDiffX),
      calculatePoint(height, 6 - this.imgDiffY)
    );
  };

  update = (canvas, ctx) => {
    this.findCollision(canvas);

    if (this.dx > 0 && this.expand === 1) {
      this.dx -= 0.3;
      canvas.style.cursor = "pointer";
    }
    if (this.dx < 10 && this.expand === -1) {
      this.dx += 0.3;
      canvas.style.cursor = "default";
    }
    this.draw(canvas, ctx);
    this.drawImage(canvas, ctx);
  };

  findCollision = () => {
    let width = canvas.width;
    let height = canvas.height;
    if (
      mouseX > calculatePoint(width, 25 + this.offset) &&
      mouseX < calculatePoint(width, 40 + this.offset - this.dx) &&
      mouseY > calculatePoint(height, 87) &&
      mouseY < calculatePoint(height, 94)
    ) {
      this.expand = 1;
      if (this.imgDiffX <= 2.5) {
        this.imgDiffX += 0.1;
      }
      if (this.imgDiffY <= 4.5) {
        this.imgDiffY += 0.2;
      }
    } else {
      this.expand = -1;
      if (this.imgDiffX >= 0) {
        this.imgDiffX -= 0.1;
      }
      if (this.imgDiffY >= 0) {
        this.imgDiffY -= 0.2;
      }
    }

    if (this.expand == 1 && mouseDown) {
      navigator.clipboard.writeText(this.originalUrl);
    }
  };
}
