
var saludos = ["Hola", "Holis", "Hello","Hi","Good","hola","holis", "hello","hi","good","como te va","como estuvo tu día"];
var mantenerConversa=["aja","si?","que mas","ya... eso es todo?", "si, de verdad?","ok","vale..","no entiendo","lo sé","te gusta el fulbol",
                      "ya desayunaste","creo que esta bien","que hora es ","estas libre","puedes confiar en mi"];

function escogerAleatorio (){
	var max=mantenerConversa.length;	
	var min=0;
	return mantenerConversa[Math.floor((Math.random()*max)+min)];
}

function reconocerSaludo(mensaje) {
	if (saludos.indexOf(mensaje)!=-1)
		return true;
	return false;
}

function SeguirSaludo(mensaje) {
	var max=saludos.length;	
	var min=0;
	return saludos[(Math.floor((Math.random()*max)+min))%(saludos.indexOf(mensaje))];
}



function resolverMensaje(mensaje)
{
	if (reconocerSaludo(mensaje)) {
		return SeguirSaludo(mensaje);
	}
	else
	{
	return escogerAleatorio();
	}
}


function enviar() {
	tmp=$("#mensajes").val();
	mensajes=$("#mensaje").val();
	Respuesta=resolverMensaje(tmp);	
	$("#mensaje").val(mensajes+tmp+'\n'+ '-'+Respuesta+'\n');
}

