function Hello() {
    console.log("Hello world");
}
function jisuan() {
  let x=1;
  let y=0;
  if(x>1){
      y = 3*x-5;
  }else {
      if (x>=-1 && x<=1){
          y=x+2;
      }else {
          if (x<-1){
              y = 5*x-3;
          }
      }
  }
  console.log("f(x) = "+y);
}