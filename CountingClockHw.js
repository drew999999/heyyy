function timeout(){
  var d = new Date()
  var h = d.getHours()
  var m = d.getMinutes()
  var s = d.getSeconds()
  var bgc = "#"+h+m+s


  if(h<=9){
    h = '0' +h;
  }

  if (m<=9) {
    m = '0' +m;
  }

  if(s<= 9){
    s = '0' +s
  }

  if(h>12){
    h = h -12
  }

  document.getElementById('hours').innerHTML = h + ':'
   document.getElementById('min').innerHTML = m + ':'
   document.getElementById('sec').innerHTML = s
   document.body.style.background = bgc

   setTimeout(timeout, 1000)



}

timeout();
