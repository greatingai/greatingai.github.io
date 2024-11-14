$(document).ready(function() {
	$('#submit_button').click(function() {
		event.preventDefault()
		console.log("aaaa")
	   var formData = $('#myForm').serialize();
		// 构造带有查询字符串的URL
		var url = 'compute.html?' + formData;
		// 跳转到B页面，并带上表单数据
		window.location.href = url;
	});
});