function drag(id) {
	var obj = document.getElementById(id);
	var disx=0;
	var disy=0;
	obj.onmousedown=function (ev) {
		disx=ev.clientX-this.offsetLeft;
		disy=ev.clientY-this.offsetTop;
		document.onmousemove=function (ev) {
			obj.style.left=ev.clientX-disx+'px';
			obj.style.top=ev.clientY-disy+'px';
			return false;
		};
		document.onmouseup=function () {
			document.onmousemove=null;
			document.onmouseup=null;
		}
		return false;
	}
	
}