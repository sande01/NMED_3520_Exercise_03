var isOpen = [false, false, false, false];

$("#curtian_00").on("click", function() {
    if (isOpen[0]) {
        restart();
    }
    else {
        restart();
        isOpen[0] = true;
        $(this).attr("src", "images/Asset_curtian_00_open.png");

        $("#curtian_01").attr("src", "images/Asset_curtian_01_closed.png");
        $("#curtian_02").attr("src", "images/Asset_curtian_02_closed.png");
        $("#curtian_03").attr("src", "images/Asset_curtian_03_closed.png");

        $("#knight_00").hide();
        $("#knight_01").show();
        $("#knight_02").hide();
        $("#knight_03").hide();
        $("#knight_04").hide();
    }
});

$("#curtian_01").on("click", function() {
    if (isOpen[1]) {
        restart();
    }
    else {
        restart();
        isOpen[1] = true;
        $(this).attr("src", "images/Asset_curtian_01_open.png");

        $("#curtian_00").attr("src", "images/Asset_curtian_00_closed.png");
        $("#curtian_02").attr("src", "images/Asset_curtian_02_closed.png");
        $("#curtian_03").attr("src", "images/Asset_curtian_03_closed.png");

        $("#knight_00").hide();
        $("#knight_01").hide();
        $("#knight_02").show();
        $("#knight_03").hide();
        $("#knight_04").hide();
    }
});

$("#curtian_02").on("click", function() {
    if (isOpen[2]) {
        restart();
    }
    else {
        restart();
        isOpen[2] = true;
        $(this).attr("src", "images/Asset_curtian_02_open.png");

        $("#curtian_00").attr("src", "images/Asset_curtian_00_closed.png");
        $("#curtian_01").attr("src", "images/Asset_curtian_01_closed.png");
        $("#curtian_03").attr("src", "images/Asset_curtian_03_closed.png");

        $("#knight_00").hide();
        $("#knight_01").hide();
        $("#knight_02").hide();
        $("#knight_03").show();
        $("#knight_04").hide();
    }
});

$("#curtian_03").on("click", function() {
    if (isOpen[3]) {
        restart();
    }
    else {
        restart();
        isOpen[3] = true;
        $(this).attr("src", "images/Asset_curtian_03_open.png");
    
        $("#curtian_00").attr("src", "images/Asset_curtian_00_closed.png");
        $("#curtian_01").attr("src", "images/Asset_curtian_01_closed.png");
        $("#curtian_02").attr("src", "images/Asset_curtian_02_closed.png");
        
        $("#knight_00").hide();
        $("#knight_01").hide();
        $("#knight_02").hide();
        $("#knight_03").hide();
        $("#knight_04").show();
    }
});

function restart() {
    for (var i = 0; i < 4; i++) {
        isOpen[i] = false;
    }

    $("#curtian_00").attr("src", "images/Asset_curtian_00_closed.png");
    $("#curtian_01").attr("src", "images/Asset_curtian_01_closed.png");
    $("#curtian_02").attr("src", "images/Asset_curtian_02_closed.png");
    $("#curtian_03").attr("src", "images/Asset_curtian_03_closed.png");

    $("#knight_00").show();
    $("#knight_01").hide();
    $("#knight_02").hide();
    $("#knight_03").hide();
    $("#knight_04").hide();
}

