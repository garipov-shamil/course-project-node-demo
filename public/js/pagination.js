function getPageList() {
    $.ajax({
        method: "GET",
        url: "http://courseprojectdemo-env.eba-qa5pytn4.eu-central-1.elasticbeanstalk.com/cableListSizeFromRest"
    })
        .done(function (response) {
            pagination($('#pageable'), response);
        });
}

function goToPage(pageNumber) {
    $.ajax({
        method: "GET",
        url: "http://courseprojectdemo-env.eba-qa5pytn4.eu-central-1.elasticbeanstalk.com/cableListFromRest?page=" + pageNumber + "&size=" + 10
    })
        .done(function (response) {
            fillTable($('#cables_table'), response);
        });
}

function showAll() {
        $.ajax({
        method: "GET",
        url: "http://courseprojectdemo-env.eba-qa5pytn4.eu-central-1.elasticbeanstalk.com/cableListFromRest?page=" + 0 + "&size=" + 1000000
    })
        .done(function (response) {
            fillTable($('#cables_table'), response);
        });
}

// function pagination(pageable, data) {
//     let page = 0;
//     let pageCounter = 1;
//     let size = 10;
//     let html =
//         "<nav aria-label=\"Page navigation\">\n" +
//         "<ul class=\"pagination justify-content-center\">";
//     for (let i = 0; i < data.length; i++) {
//         if (i % 10 == 0) {
//             html +=
//                 "<li class=\"page-item \">" +
//                 "<a " +
//                 "onclick=\"getCableList(" + page + "," + size + ")\"" +
//                 "class=\"page-link bg-light text-dark\" " +
//                 "href=\"#\">" + pageCounter + "</a></li>"
//             page++;
//             pageCounter++;
//         }
//     }
//     html +=
//         "</ul>\n" +
//         "</nav>"
//     pageable.empty();
//     pageable.append(html);
// }

function pagination(pageagble, data) {
    var pages = Math.ceil(data/10);
     let html =
        "<div class=\"input-group input-group-sm mb-3\">\n" +
        "  <div class=\"input-group-prepend\">\n" +
        "    <span class=\"input-group-text\">Страница</span>\n" +
        "  </div>\n" +
        "  <input id='pageNumber' type=\"text\" class=\"form-control\" aria-label=\"Page\">\n" +
        "  <div class=\"input-group-append\">\n" +
        "    <span class=\"input-group-text\">" + pages  + "</span>\n" +
        "  </div>\n" +
        "  <div class=\"input-group-append\" id=\"button-addon4\">\n" +
        "  <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"goToPage(document.getElementById('pageNumber').value - 1)\">Перейти</button>\n" +
        "  <button class=\"btn btn-outline-secondary\" type=\"button\" onclick=\"showAll()\">Все страницы</button>\n" +
        "  </div>\n" +
        "</div>\n";

    pageagble.empty();
    pageagble.append(html);
}