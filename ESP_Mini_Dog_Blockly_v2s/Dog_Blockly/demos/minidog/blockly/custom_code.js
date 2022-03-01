
/*
  Some functions for control robog. 
*/
  
 var send_wait_time = [100, 600, 700, 800, 900, 1000] ;

  function send_cmd(sendcmd, callback) { 
  
  	//  let encoder = new TextEncoder('utf-8');
   //   let sendMsg = encoder.encode(sendcmd);
	  serialLEDController.write(sendcmd)
   //   myCharacteristic.writeValue(sendMsg)
      .then(_ => {
        log('Send data ' + JSON.stringify(value));
      })
      .catch(error => { 
        log(error); 
      });      
       window.setTimeout( function() {
       callback() ;
       }, send_wait_time[0] ) ; // longer time for its execute
   //   break ;
  }


/*
	Need to register new function for acorn_interpreter) ;
*/
var registerBlocklyWithSendAsyncFunction = function(interpreter, scope) {

	var wrapper = interpreter.createAsyncFunction(
    function( key, callback) {
		send_cmd(key, callback);
/*
		if ( key == "forward") {
		    send_cmd("F#", callback);
		}
		else if ( key == "backward") {
		    send_cmd("B#", callback);
		}
		else if ( key == "turnleft") {
		    send_cmd("L#", callback);
		}
		else if ( key == "turnright") {
		    send_cmd("R#", callback);
		}
		else {
            console.log("Error Code !! ") ;
		}
*/		
    });
	interpreter.setProperty(scope, 'SEND_COMMAND', wrapper);
}


  function log(v)
  {
    var line = Array.prototype.slice.call(arguments).map(function(argument) {
      return typeof argument === 'string' ? argument : JSON.stringify(argument);
    }).join(' ');

  //  document.querySelector('#log').textContent += line + '\n';
  //  console.log(line);
  }

