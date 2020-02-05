function sta(){
		var r = confirm("确定提交吗？如果提交内容需改变，请联系QQ368573607哦~");
		if (r == true) {
				var email = document.getElementById("email").value;
				var zhuti = document.getElementById("zhuti").value;
				var neirong = document.getElementById("neirong").value;
				var HS="请核实你的邮箱："+email; 
				var s = confirm(HS);
				if (r == true) {
					alert("调试中，发送失败，近期如果要发送，直接发送到xuhuading@foxmail.com即可");
				} else {
					alert("没关系，多检查一下是好事");
				}
		} else {
				alert("没关系，多检查一下是好事");
		}
}