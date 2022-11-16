(function ($) {
    $(function () {
        var lastId, topMenu = $("#nav_132"), topMenuHeight = topMenu.outerHeight() + 15, menuItems = topMenu.find("a"),
            // Anchors corresponding to menu items
            scrollItems = menuItems.map(function () {
                var item = $($(this).attr("href"));
                if (item.length) { return item; }
            });
        if ($("#nav_132").length){
            var nav_original_posX = $("#nav_132").position().top;
        }else {
            var nav_original_posX = 0;
        }
        
        // Bind click handler to menu items
        // so we can get a fancy scroll animation
        menuItems.click(function (e) {
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 300);
            e.preventDefault();
        });
        $(window).scroll(function () {
            //if you hard code, then use console
            //.log to determine when you want the 
            //nav bar to stick.  
            if ($("#nav_132")){
            if ($(window).scrollTop() > nav_original_posX - $("#nav_132").outerHeight()) {
                $('#nav_132').addClass('nav_132-fixed');
            }
            if ($(window).scrollTop() < nav_original_posX - $("#nav_132").outerHeight() + 1) {
                $('#nav_132').removeClass('nav_132-fixed');
            }
            var fromTop = $(this).scrollTop() + topMenuHeight;

            // Get id of current scroll item
            var cur = scrollItems.map(function () {
                if ($(this).offset().top < fromTop)
                    return this;
            });
            // Get the id of the current element
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id : "";

            if (lastId !== id) {
                lastId = id;
                // Set/remove active class
                menuItems
                    .parent().removeClass("active_132")
                    .end().filter("[href='#" + id + "']").parent().addClass("active_132");
            }}
        });
        
        // var header = document.getElementById("nav_132");
        // var btns = header.getElementsByClassName("turnBlue");
        // for (var i = 0; i < btns.length; i++) {

        //     btns[i].addEventListener("click", function () {
        //         var current = document.getElementsByClassName("active");
        //         if (current.length > 0) {
        //             current[0].className = current[0].className.replace(" active", "");
        //         }
        //         this.className += " active";
        //     });
        // }

    });
})(jQuery);