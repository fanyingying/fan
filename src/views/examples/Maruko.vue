<template>
    <div class="maruko-box">
        <canvas id="maruko" width="778" height="600"></canvas>
    </div>
</template>
<script>
// inner variables
var canvas, context;
var clockRadius = 250;
var clockImage;
// draw functions :
const clear = () => {
  // clear canvas function
  context.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
};

const drawMaruko = ()=>{
 context.moveTo(276, 408);
 context.quadraticCurveTo(367, 308,438, 408);
 
}

export default {
  mounted() {
    this.$nextTick(() => {
      //视图加载完成后执行
      canvas = document.getElementById("maruko");
      //获得画笔(2D环境)
      context = canvas.getContext("2d");
      drawMaruko();
    });
  }
};
</script>
<style lang="scss">
.maruko-box{
  background-image: url('../../assets/img/example/Layer.png');
  background-position: 0px -323px;
  width: 778px;
  height: 600px;
}
</style>
