$(document).ready(function () {
      var interval = 12000;   //number of mili seconds between each call
      var refresh = function() {
      $.getJSON("http://mcapi.ca/query/Server IP here/players",function(json){
            if (json.status !== true) {
              // error
              $("#players").text('Server Offline');
          } else {
              // success
              $("#online").html(json.players.online);
          }
      });
      setTimeout(function() {
          refresh();
              },
          interval);
              }
          refresh();
  });
