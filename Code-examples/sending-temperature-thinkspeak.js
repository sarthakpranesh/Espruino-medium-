var wifi = require("Wifi");
var http = require("http");
wifi.setHostname("nodeMCU-espruino");
wifi.connect("Sarthak", {password:"Vibhuti9"}, function(err){
  setTimeout(function(){
    if(err !== null){
      console.log("Unable to connect");
      return;
    }
    console.log("Info: ", wifi.getIP());
    digitalWrite(NodeMCU.D4, 0);
  }, 2000);
});
wifi.stopAP();
wifi.save();

var num = 0;
setInterval(function(){
    num = num + 1;
    http.get("https://api.thingspeak.com/update?api_key=GWFJ7E5JK3G0LX4F&field1="+ num, function(res){
    res.on('data', function(data){
      //data = JSON.parse(data);
      console.log("Temp data sent");
    });
    res.on('close', function(data){
      console.log("Connection closed");
    });

    if(num>=100){
      num = 100;
    }
  });
}, 20000);