var sido = "";
var sigungu = "";
$(function(){
	
	$.ajax({
		type:"post",
		url:g5_url+'/ajax/ajax_addresses.php',				
		success:function(data) {
			if (data != "") {
				$("#wr_2").html(data);						
			}
		}
	});				
	
	$("#wr_2").on("change", function(){
		sido = $(this).val();
		$("#wr_3").html("<option value=''>시/구/군 선택</option>");	
		$("#wr_4").html("<option value=''>동/읍/면 선택</option>");	
		$.ajax({
			type:"post",
			url:g5_url+'/ajax/ajax_addresses.php?sido=' + encodeURI(sido),	
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			success:function(data) {
				if (data != "") {
					$("#wr_3").html(data);						
				}
			}
		});
	});
	
	$("#wr_3").on("change", function(){
		sigungu = $(this).val();
		$("#wr_4").html("<option value=''>동/읍/면 선택</option>");	
		$.ajax({
			type:"post",
			url:g5_url+'/ajax/ajax_addresses.php?sido=' + encodeURI(sido) + '&sigungu=' + encodeURI(sigungu),	
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			success:function(data) {
				if (data != "") {
					$("#wr_4").html(data);						
				}
			}
		});
	});	
});

