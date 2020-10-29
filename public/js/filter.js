function getFilterToolbar() {
    $.ajax({
        method: "GET",
        url: "#"
    })
        .done(function (response) {
            filterToolbar($('#filterToolbar'), response);
        });
}

function filterToolbar(filter, data) {
    let html =
        "<nav class=\"navbar navbar-expand navbar-light\">\n" +
        "    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent1\">\n" +
        "        <ul class=\"navbar-nav mr-auto\">\n" +
        "            <li class=\"nav-item dropdown\">\n" +
        "                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown1\" role=\"button\" data-toggle=\"dropdown\"\n" +
        "                   aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        "                    Номер документа\n" +
        "                </a>\n" +
        "                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" style=\"width: 300px\">\n" +
        "                    <a id=\"modal-71417\" href=\"#modal-container-714170\" role=\"button\" class=\"dropdown-item\" data-toggle=\"modal\">Загрузка из файл</a>\n" +
        "                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n" +
        "                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n" +
        "                    <div class=\"col-xs-2 v-divider\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></div>\n" +
        "                </div>\n" +
        "            </li>\n" +
        "        </ul>\n" +
        "        <ul class=\"navbar-nav mr-auto\">\n" +
        "            <li class=\"nav-item dropdown\">\n" +
        "                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown1\" role=\"button\" data-toggle=\"dropdown\"\n" +
        "                   aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        "                    Номер документа\n" +
        "                </a>\n" +
        "                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" style=\"width: 300px\">\n" +
        "                    <a id=\"modal-71417\" href=\"#modal-container-714170\" role=\"button\" class=\"dropdown-item\" data-toggle=\"modal\">Загрузка из файл</a>\n" +
        "                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n" +
        "                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n" +
        "                    <div class=\"col-xs-2 v-divider\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></div>\n" +
        "                </div>\n" +
        "            </li>\n" +
        "        </ul>\n" +
        "        <ul class=\"navbar-nav mr-auto\">\n" +
        "            <li class=\"nav-item dropdown\">\n" +
        "                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown1\" role=\"button\" data-toggle=\"dropdown\"\n" +
        "                   aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        "                    Номер документа\n" +
        "                </a>\n" +
        "                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" style=\"width: 300px\">\n" +
        "                    <a id=\"modal-71417\" href=\"#modal-container-714170\" role=\"button\" class=\"dropdown-item\" data-toggle=\"modal\">Загрузка из файл</a>\n" +
        "                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n" +
        "                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n" +
        "                    <div class=\"col-xs-2 v-divider\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></div>\n" +
        "                </div>\n" +
        "            </li>\n" +
        "        </ul>\n" +
        "        <ul class=\"navbar-nav mr-auto\">\n" +
        "            <li class=\"nav-item dropdown\">\n" +
        "                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown1\" role=\"button\" data-toggle=\"dropdown\"\n" +
        "                   aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        "                    Номер документа\n" +
        "                </a>\n" +
        "                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" style=\"width: 300px\">\n" +
        "                    <a id=\"modal-71417\" href=\"#modal-container-714170\" role=\"button\" class=\"dropdown-item\" data-toggle=\"modal\">Загрузка из файл</a>\n" +
        "                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n" +
        "                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n" +
        "                    <div class=\"col-xs-2 v-divider\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></div>\n" +
        "                </div>\n" +
        "            </li>\n" +
        "        </ul>\n" +
        "        <ul class=\"navbar-nav mr-auto\">\n" +
        "            <li class=\"nav-item dropdown\">\n" +
        "                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown1\" role=\"button\" data-toggle=\"dropdown\"\n" +
        "                   aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        "                    Номер документа\n" +
        "                </a>\n" +
        "                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" style=\"width: 300px\">\n" +
        "                    <a id=\"modal-71417\" href=\"#modal-container-714170\" role=\"button\" class=\"dropdown-item\" data-toggle=\"modal\">Загрузка из файл</a>\n" +
        "                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n" +
        "                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n" +
        "                    <div class=\"col-xs-2 v-divider\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></div>\n" +
        "                </div>\n" +
        "            </li>\n" +
        "        </ul>\n" +
        "        <ul class=\"navbar-nav mr-auto\">\n" +
        "            <li class=\"nav-item dropdown\">\n" +
        "                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown1\" role=\"button\" data-toggle=\"dropdown\"\n" +
        "                   aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        "                    Номер документа\n" +
        "                </a>\n" +
        "                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" style=\"width: 300px\">\n" +
        "                    <a id=\"modal-71417\" href=\"#modal-container-714170\" role=\"button\" class=\"dropdown-item\" data-toggle=\"modal\">Загрузка из файл</a>\n" +
        "                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n" +
        "                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n" +
        "                    <div class=\"col-xs-2 v-divider\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></div>\n" +
        "                </div>\n" +
        "            </li>\n" +
        "        </ul>\n" +
        "        <ul class=\"navbar-nav mr-auto\">\n" +
        "            <li class=\"nav-item dropdown\">\n" +
        "                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown1\" role=\"button\" data-toggle=\"dropdown\"\n" +
        "                   aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        "                    Номер документа\n" +
        "                </a>\n" +
        "                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" style=\"width: 300px\">\n" +
        "                    <a id=\"modal-71417\" href=\"#modal-container-714170\" role=\"button\" class=\"dropdown-item\" data-toggle=\"modal\">Загрузка из файл</a>\n" +
        "                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n" +
        "                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n" +
        "                    <div class=\"col-xs-2 v-divider\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></div>\n" +
        "                </div>\n" +
        "            </li>\n" +
        "        </ul>\n" +
        "        <ul class=\"navbar-nav mr-auto\">\n" +
        "            <li class=\"nav-item dropdown\">\n" +
        "                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown1\" role=\"button\" data-toggle=\"dropdown\"\n" +
        "                   aria-haspopup=\"true\" aria-expanded=\"false\">\n" +
        "                    Номер документа\n" +
        "                </a>\n" +
        "                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\" style=\"width: 300px\">\n" +
        "                    <a id=\"modal-71417\" href=\"#modal-container-714170\" role=\"button\" class=\"dropdown-item\" data-toggle=\"modal\">Загрузка из файл</a>\n" +
        "                    <a class=\"dropdown-item\" href=\"#\">Action</a>\n" +
        "                    <a class=\"dropdown-item\" href=\"#\">Another action</a>\n" +
        "                    <div class=\"col-xs-2 v-divider\"><a class=\"dropdown-item\" href=\"#\">Something else here</a></div>\n" +
        "                </div>\n" +
        "            </li>\n" +
        "        </ul>\n" +
        "    </div>\n" +
        "</nav>";
    filter.empty();
    filter.append(html);
}

function distinctForFilter() {
    $.get("http://courseprojectdemo-env.eba-qa5pytn4.eu-central-1.elasticbeanstalk.com/getDistinctByCableDoc", function (data) {
        let resultList = "";
        data.forEach(function (value) {
            resultList += '<li><input type="checkbox" class="checked-value" value="' + value + '"> ' + value + '</li>';
        });
        resultList += '';
        document.getElementById("distinctByCableDoc").innerHTML = resultList;
    });

    $.get("http://courseprojectdemo-env.eba-qa5pytn4.eu-central-1.elasticbeanstalk.com/getDistinctByCableMark", function (data) {
        let resultList = "";
        data.forEach(function (value) {
            resultList += '<li><input type="checkbox" class="checked-cable-mark" value="' + value + '"> ' + value + '</li>';
        });
        resultList += '';
        document.getElementById("distinctByCableMark").innerHTML = resultList;
    });

    $.get("http://courseprojectdemo-env.eba-qa5pytn4.eu-central-1.elasticbeanstalk.com/getDistinctByCableCut", function (data) {
        let resultList = "";
        data.forEach(function (value) {
            resultList += '<li><input type="checkbox" class="checked-cable-cut" value="' + value + '"> ' + value + '</li>';
        });
        resultList += '';
        document.getElementById("distinctByCableCut").innerHTML = resultList;
    });

    $.get("http://courseprojectdemo-env.eba-qa5pytn4.eu-central-1.elasticbeanstalk.com/getDistinctByCableReel", function (data) {
        let resultList = "";
        data.forEach(function (value) {
            resultList += '<li><input type="checkbox" class="checked-cable-reel" value="' + value + '"> ' + value + '</li>';
        });
        resultList += '';
        document.getElementById("distinctByCableReel").innerHTML = resultList;
    });
}

function filterSendJSON() {
    var cableReel = [], cableDoc = [], cableMark = [], cableCut = [];

    $('.checked-cable-reel:checked').each(function () {
        cableReel.push($(this).val());
    });

    $('.checked-value:checked').each(function () {
        cableDoc.push($(this).val());
    });

    $('.checked-cable-mark:checked').each(function () {
        cableMark.push($(this).val());
    });

    $('.checked-cable-cut:checked').each(function () {
        cableCut.push($(this).val());
    });


    var cable = {
        cableReel: cableReel,
        cableDoc: cableDoc,
        cableMark: cableMark,
        cableCut: cableCut
    };
    var JSONdata = JSON.stringify(cable);
    console.log(JSONdata);
    cable = JSON.parse(JSONdata);

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://courseprojectdemo-env.eba-qa5pytn4.eu-central-1.elasticbeanstalk.com/filter",
        data: JSON.stringify(cable),
        dataType: 'json',
        timeout: 600000,
        success: function (cable) {
            console.log("JSON send!")
            fillTable($('#cables_table'), cable)
        }

    });
}






