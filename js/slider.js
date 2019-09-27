var $links = $(".itemLinks");

$links.click(slider);

function slider (e) {

    $links.removeClass("active");

    var x = e.target;
        x = $(x);

    var position = x.attr("data-pos");
    var translateValue = "translate3d(-"+ position * 25 +"%, 0px, 0px)";

    var $wrapper = $("#wrapper");
        $wrapper.css({transform: translateValue});

    x.addClass("active");

}

var $ii = $($links[0]);
    $ii.addClass("active");

/*
┌──────────────────────────────────────────┐
│         Coding by M. Shikh Taleb         │
│            www.shikhtaleb.com            │
└──────────────────────────────────────────┘
*/