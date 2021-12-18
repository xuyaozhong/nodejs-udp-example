var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var message = Buffer.from('Client 1 UDP Payload');

function mysleep(milliseconds) {  
      return new Promise(resolve => setTimeout(resolve, milliseconds));  
}  
async function myfun() {  
	var client = dgram.createSocket('udp4');
	while(true)
	{
	client.send(message, 0, message.length, PORT, HOST, function(err, bytes) 
		{
			if (err) throw err;
			console.log('UDP message sent to ' + HOST +':'+ PORT);
		});
	await mysleep(1000);
	}
	client.close();
}
myfun();
