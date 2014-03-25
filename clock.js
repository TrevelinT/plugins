var Clock = {
  init:function(){
    setInterval(Clock.build, 1000);
  },
  build: function(){
    var clockDate = new Date(),
        day = Clock.convert(clockDate.getDate()),
        month = Clock.convert(clockDate.getMonth()),
        year = clockDate.getFullYear(),
        hour =Clock.convert(clockDate.getHours()),
        minute =Clock.convert(clockDate.getMinutes()),
        second =Clock.convert(clockDate.getSeconds()),
        currentDate = day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second;

    Clock.show(currentDate);
  },
  convert: function(number){
    if(number < 10) {
       return "0" + number;
    }
    else {
      return number;
    }
  },
  show: function(date){
    var element = document.getElementsByClassName("data")[0];
    element.innerHTML = date;
  }
};
Clock.init();