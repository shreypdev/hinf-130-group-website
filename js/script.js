$(window).on("load", () => {
	$(".loader .inner").fadeOut(2500, () => {
		$(".loader").fadeOut();
	});
});

$(document).ready(() => {
	const nav = $("#navigation");
	const navTop = nav.offset().top;

	const stickyNavigation = () => {
		var body = $("body");
		if($(window).scrollTop() >= navTop) {
			body.css("padding-top", nav.outerHeight() + "px");
			body.addClass("fixedNav");
		} else {
			body.css("padding-top", 0);
			body.removeClass("fixedNav");
		}
	};

	$(window).on("scroll", stickyNavigation);
});

