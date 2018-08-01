function verifyForm(form){
	var a=form.name.value;
	var success=1;
	if(!a){
		form.name.style.border="3px red solid";
		success=0;
		}
	else{
		form.name.style.border="";
		}
	document.getElementById("z").value=a;
	}
function checkPass(){
	var a=document.getElementById("pss").value;
	var m;
	if(a.length==0){
		m="";
		}
	else if(a.length<10){
		m="not good";
		}
	else if(a.length>=10){
		m="good";
		}
	document.getElementById("o").innerHTML=m;	
	}
	function showPass(){
		document.getElementById("pss").type="text";}
		function hidePass(){
			document.getElementById("pss").type="password";
			}
			function q(){
		var a=document.getElementById("txt").value;
		var patt=RegExp("^(?=.*[a-z])(?=*[0-1])(?=.*[@])(?=.*[a-z])(?'.'co?m)(?=.[18,])");
		var m;
		if(a.match(patt)){
			m="strong";
		}
			else{
				m="try again"
;				}
document.getElementById("w").innerHTML=m;
				}