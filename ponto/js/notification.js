var Notify = function() {
	var notification;

	var arrival = function(data){
		var corpo = "Você começou a trabalhar as " + data.toString();
		var titulo = "DING DONG!";
		var icone = "img/ic_alarm_on_black_48dp_2x.png";
		create( corpo, icone, titulo );
		send();
	}


	var send = function() {
		if( Notification.permission === "granted" ) {
			if( typeof notification === 'undefined' ){
				return;
			}
			return new Notification( notification.title, notification.options );
		}else{
			Notification.requestPermission().then(function(result){
				if( result === "granted" ){
					return new Notification( notification.title, notification.options );
				} 
			});
		}
	}
	var create = function(body,icon,title) {
	  var options = {body, icon};
	  notification = {title , options}
	}
	return{
		enviar: send,
		criar: create,
		chegada: arrival
	}
};