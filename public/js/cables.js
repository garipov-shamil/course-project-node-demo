function getCableList(page, size) {
    $.ajax({
        method: "GET",
        url: "http://courseprojectdemo-env.eba-qa5pytn4.eu-central-1.elasticbeanstalk.com/cableListFromRest?page=" + page + "&size=" + size
    })
        .done(function (response) {
            fillTable($('#cables_table'), response);
        });
}

function searchCable(cableIndex) {
    $.ajax({
        method: "GET",
        url: "http://courseprojectdemo-env.eba-qa5pytn4.eu-central-1.elasticbeanstalk.com/cableList/searchCableFromRest?cableIndex=" + cableIndex
    })
        .done(function (response) {
            fillTable($('#cables_table'), response);
        });
}

function fillTable(table, data) {
    let html = "<table class=\"table table-hover text-center\">";
    html += "<tr>\n" +
        "<th class='align-middle'>Номер барабана</th>\n" +
        "<th class='align-middle'>Номер документа</th>\n" +
        "<th class='align-middle'>Индекс</th>\n" +
        "<th class='align-middle'>Марка</th>\n" +
        "<th class='align-middle'>Сечение</th>\n" +
        "<th class='align-middle'>Длина</th>\n" +
        "<th class='align-middle'>Признак</th>\n" +
        "<th class='align-middle'>Статус нарезки</th>\n" +
        "<th class='align-middle'>Статус затяжки</th>\n" +
        "</tr>";
    for (let i = 0; i < data.length; i++) {
        html += "<tr>";
        html += "<td class=\"align-middle\">" + data[i]["cableReel"] + "</td>";
        html += "<td class=\"align-middle\">" + data[i]["cableDoc"] + "</td>";
        html += "<td class=\"align-middle\">" + data[i]["cableIndex"] + "</td>";
        html += "<td class=\"align-middle\">" + data[i]["cableMark"] + "</td>";
        html += "<td class=\"align-middle\">" + data[i]["cableCut"] + "</td>";
        html += "<td class=\"align-middle\">" + data[i]["cableLength"] + "</td>";
        html += "<td class=\"align-middle\">" + data[i]["cableAttribute"] + "</td>";
        if (data[i]["cableSliceStatus"] === "Не нарезан") {
            html +=
                "<td>" +
                "<input " +
                "id=\"sliceButton" + data[i]["id"] + "\" " +
                "type=\"button\" " +
                "style='width: 120px'" +
                "class=\"btn btn-light text-muted\" " +
                "onclick=\"changeCableSliceStatus(" + data[i]["id"] + ")\"" +
                "value=\"" + data[i]["cableSliceStatus"] + "\"> " +
                "</td>";
        } else if ((data[i]["cableSliceStatus"] === "Нарезан")) {
            html +=
                "<td>" +
                "<input " +
                "id=\"sliceButton" + data[i]["id"] + "\" " +
                "type=\"button\" " +
                "style='width: 120px'" +
                "class=\"btn btn-light\" " +
                "onclick=\"changeCableSliceStatus(" + data[i]["id"] + ")\"" +
                "value=\"" + data[i]["cableSliceStatus"] + "\"> " +
                "</td>";
        }
        if (data[i]["cablePullStatus"] === "Не затянут") {
            html +=
                "<td>" +
                "<input " +
                "id=\"pullButton" + data[i]["id"] + "\" " +
                "type=\"button\" " +
                "style='width: 120px'" +
                "class=\"btn btn-light text-muted\" " +
                "onclick=\"changeCablePullStatus(" + data[i]["id"] + ")\"" +
                "value=\"" + data[i]["cablePullStatus"] + "\"> " +
                "</td>";
        } else if ((data[i]["cablePullStatus"] === "Затянут")) {
            html +=
                "<td>" +
                "<input " +
                "id=\"pullButton" + data[i]["id"] + "\" " +
                "type=\"button\" " +
                "style='width: 120px'" +
                "class=\"btn btn-light\" " +
                "onclick=\"changeCablePullStatus(" + data[i]["id"] + ")\"" +
                "value=\"" + data[i]["cablePullStatus"] + "\"> " +
                "</td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    table.empty();
    table.append(html);

}

function getFileList() {
    $.get("http://courseprojectdemo-env.eba-qa5pytn4.eu-central-1.elasticbeanstalk.com/getFileList", function (data) {
        let resultList = '<select class="file" size="10" id="fileListSelect" style="width: 100%">';
        data.forEach(function (value) {
            resultList += '<option value="http://courseprojectdemo-env.eba-qa5pytn4.eu-central-1.elasticbeanstalk.com/addCableFromCSV?fileName=' + value + '">' + value + '</option>';
        });
        resultList += '</select>';
        document.getElementById("getFileList").innerHTML = resultList;
    })
}

function getFileName() {

    $("select.file").change(function () {

        var selectedFileName = $(this).children("option:selected").val();

        alert(selectedFileName);

    });

}

function changeCableSliceStatus(id) {
    $.ajax({
        method: "GET",
        url: "http://courseprojectdemo-env.eba-qa5pytn4.eu-central-1.elasticbeanstalk.com//updateCableSliceStatus?id=" + id,
        success: function updateButtonValue() {
            var sliceButton = document.getElementById("sliceButton" + id);
            if (sliceButton.value === "Не нарезан") {
                sliceButton.value = "Нарезан";
                sliceButton.className = "btn btn-light"
            } else if (sliceButton.value === "Нарезан") {
                sliceButton.value = "Не нарезан";
                sliceButton.className = "btn btn-light text-muted"
            }
        }
    });
}

function changeCablePullStatus(id) {
    $.ajax({
        method: "GET",
        url: "http://courseprojectdemo-env.eba-qa5pytn4.eu-central-1.elasticbeanstalk.com//updateCablePullStatus?id=" + id,
        success: function updateButtonValue() {
            var pullButton = document.getElementById("pullButton" + id);
            if (pullButton.value === "Не затянут") {
                pullButton.value = "Затянут";
                pullButton.className = "btn btn-light"
            } else if (pullButton.value === "Затянут") {
                pullButton.value = "Не затянут";
                pullButton.className = "btn btn-light text-muted"
            }
        }
    });
}





