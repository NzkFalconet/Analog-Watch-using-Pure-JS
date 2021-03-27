setInterval(() => {
    var date= new Date();
    var htime = date.getHours();
    var mtime= date.getMinutes();
    var stime = date.getSeconds();
    var hrotation = ((30*htime)+(mtime/2));
    var mrotation = (6*mtime);
    var srotation = (6*stime);
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
    console.log(stime);
}, 1000);


var i = 0;
var txt = 'Digital Clock Using Pure JS';
var speed = 100;
function typeWriter() {
    if (i < txt.length) {
      document.getElementById("demo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }

  