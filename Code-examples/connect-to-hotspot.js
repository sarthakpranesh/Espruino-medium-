var wifi = require("Wifi");
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