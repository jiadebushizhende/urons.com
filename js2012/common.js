$(function(){
	$("#fenleilist,#fenleilist2,#sea_area,#sea_type").hover(
		function(){
			$(this).show();
			},function(){
				$(this).hide();});
	
	$("ul.tabmenu li:first-child").addClass("current");
	$("div.tabcontent").find("div.tablayout:not(:first-child)").hide();
	$("div.tabcontent div.tablayout").attr("id", function(){return idNumber("No")+ $("div.tabcontent div.tablayout").index(this)});
	$("ul.tabmenu li").hover(function(){
	var c = $("ul.tabmenu li");
	var index = c.index(this);
	var p = idNumber("No");
	show(c,index,p);
	});  
	function show(controlMenu,num,prefix){
	var content= prefix + num;
	$('#'+content).siblings().hide();
	$('#'+content).show();
	controlMenu.eq(num).addClass("current").siblings().removeClass("current");
	};
	function idNumber(prefix){
	var idNum = prefix;
	return idNum;
	};
})
function showDiv(obj,vtop,vleft,id){
	if(id!=0){
		$("#"+obj).css({
			"display":"block",
			"position":"absolute",
			"top":vtop,
			"left":vleft
		});
		var out="";
		for(var i=0;i<fenleiarr[id-1].length;i++){
			out += "<a href='"+fenleiarr[id-1][i][0]+" ' target='_blank'>"+fenleiarr[id-1][i][1]+"<\/a>";
			}
			$("#"+obj).html(out);
		//$.get("getfenlei.php?id="+id, function(data){
  		//	$("#"+obj).html(data);
		//});
	}
	}
function hideDiv(obj){
	$("#"+obj).css({
		"display":"none"
		})
	}
	