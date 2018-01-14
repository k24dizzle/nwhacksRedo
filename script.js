(function(){


    window.onload = function() {
        initEventListeners();
  	}

    function initEventListeners() {
        $("#landing_cta").click(function() {
            $("#landing_container").css("display", "none");
            $("#demo_container").css("display", "block");
        });
    }

})();
