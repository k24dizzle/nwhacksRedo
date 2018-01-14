(function(){


    window.onload = function() {
        initEventListeners();
        var canvas = $("canvas");
        $("#live_container").append(canvas);
  	}

    function initEventListeners() {
        $("#landing_cta").click(function() {
            $("#landing_container").css("display", "none");
            $("#demo_container").css("display", "block");
            $("canvas").css("display", "block");
            $("#connect-leap").css("display", "block");
        });
    }

})();
