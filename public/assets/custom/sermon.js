
(function($){

$("[tag-type = sermon]").click(()=>{
	let id = $(this).data("id");
	// alert(200);
	$("#pop-blur").removeClass("hidden").hide().fadeIn(600, ()=>{
		
	});
})

$("#closeBtn").click(()=>{
	$("#pop-blur").fadeOut(600, "linear", ()=>{
		$(this).addClass("hidden");
	});
})

})(jQuery);