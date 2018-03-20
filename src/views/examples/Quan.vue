<template>
  <div class="quan">
    <canvas id="canvas"></canvas>
  </div>
</template>
<script>
var canvas, context;
var mouse,
  colors,
  dotsHolder = [];

export default {
  methods: {
    init() {
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;
      mouse = { x: 0, y: 0 };
      colors = [
        "#af0",
        "#7CD14E",
        "#1CDCFF",
        "#FFFF00",
        "#FF0000",
        "#aee137",
        "#bef202",
        "#00b2ff",
        "#7fff24",
        "#13cd4b",
        "#c0fa38",
        "#f0a",
        "#a0f",
        "#0af",
        "#000000"
      ];
      canvas.addEventListener("mousemove", this.MouseMove, !1);
      canvas.addEventListener("mousedown", this.MouseDown, !1);
      canvas.addEventListener("mouseup", this.MouseUp, !1);
      window.addEventListener("resize", this.canvasResize, !1);
      for (var i = 0; 1e3 > i; i++) {
        dotsHolder.push(new this.dots());
      }
    },
    canvasResize() {
      (canvas.height = window.innerHeight),
        (canvas.width = window.innerWidth),
        cancelAnimationFrame(this.animate);
    },
    MouseUp() {
      this.mouseMove && (mouseMove = !1), mouseDown && (mouseDown = !1);
    },
    MouseDown() {
      this.mouseDown = !0;
    },
    MouseMove(a) {
      mouse.x = a.pageX - canvas.offsetLeft;
      mouse.y = a.pageY - canvas.offsetTop;
      context.lineTo(mouse.x, mouse.y);
      context.stroke();
    },
    dots() {
      var obj = {};
      obj.xPos = Math.random() * canvas.width;
      obj.yPos = Math.random() * canvas.height;
      obj.color = colors[Math.floor(Math.random() * colors.length)];
      obj.radius = 10 * Math.random();
      obj.vx = Math.cos(obj.radius);
      obj.vy = Math.sin(obj.radius);
      obj.stepSize = Math.random() / 10;
      obj.step = 0;
      obj.friction = 7;
      obj.speedX = obj.vx;
      obj.speedY = obj.vy;
      return obj;
    },
    draw() {
      var a, b, c, d, e, f, g, h, i, j, k;
      context.clearRect(0, 0, canvas.width, canvas.height);
      for (a = 0; a < dotsHolder.length; a++) {
        var dot = dotsHolder[a];
        context.beginPath();
        f = dot.xPos - mouse.x;
        g = dot.yPos - mouse.y;
        b = Math.sqrt(f * f + g * g);
        c = Math.max(Math.min(75 / (b / dot.radius), 7), 1);
        context.fillStyle = dot.color;
        dot.xPos += dot.vx;
        dot.yPos += dot.vy;
        dot.xPos < -50 && (dot.xPos = canvas.width + 50);
        dot.yPos < -50 && (dot.yPos = canvas.height + 50);
        dot.xPos > canvas.width + 50 && (dot.xPos = -50);
        dot.yPos > canvas.height + 50 && (dot.yPos = -50);
        context.arc(
          dot.xPos,
          dot.yPos,
          dot.radius / 2.5 * c,
          0,
          2 * Math.PI,
          !1
        );
        context.fill();
        
        if (this.mouseDown) {
          // d = 164;
          // e = Math.sqrt(
          //   (dot.xPos - mouse.x) * (dot.xPos - mouse.x) +
          //     (dot.yPos - mouse.y) * (dot.yPos - mouse.y)
          // );
          // f = dot.xPos - mouse.x;
          // g = dot.yPos - mouse.y;
          // d > e &&
          //   ((h = d / (e * e)),
          //   (i = ((mouse.x - dot.xPos) % e) / 7),
          //   (j = ((mouse.y - dot.yPos) % e) / dot.friction),
          //   (k = 2 * h / dot.friction),
          //   (dot.vx -= k * i),
          //   (dot.vy -= k * j)),
          //   dot.vx > dot.speed
          //     ? ((dot.vx = dot.speed / dot.friction),
          //       (dot.vy = dot.speed / dot.friction))
          //     : dot.vy > dot.speed && (dot.vy = dot.speed / dot.friction);
        }
      }
    },
    animate() {
      requestAnimationFrame(this.animate);
      this.draw();
    },
    requestAF() {
      var c,
        a = 0,
        b = ["ms", "moz", "webkit", "o"];
      for (c = 0; c < b.length && !window.requestAnimationFrame; ++c)
        window.requestAnimationFrame = window[b[c] + "RequestAnimationFrame"];
      window.cancelAnimationFrame =
        window[b[c] + "CancelAnimationFrame"] ||
        window[b[c] + "CancelRequestAnimationFrame"];
      window.requestAnimationFrame ||
        (window.requestAnimationFrame = function(b) {
          var d = new Date().getTime(),
            e = Math.max(0, 16 - (d - a)),
            f = window.setTimeout(function() {
              b(d + e);
            }, e);
          return (a = d + e), f;
        });
      window.cancelAnimationFrame ||
        (window.cancelAnimationFrame = function(a) {
          clearTimeout(a);
        });
    }
  },
  mounted() {
    this.$nextTick(() => {
      //视图加载完成后执行
      //this.requestAF();
      canvas = document.getElementById("canvas");
      context = canvas.getContext("2d");
      this.init();
      this.animate();
    });
  }
};
</script>
<style>
body{
  background-color: ##ffe;
}
</style>
