function pad(s) {
    return ('00' + s).slice(-2)
}

var pullStatusChart = {};

$(document).ready(function () {
    var FromDate = new Date();
    FromDate.setDate(FromDate.getDate() - 31);
    var ToDate = new Date();

    let fromDate = '' + FromDate.getFullYear() + '-' + pad(FromDate.getMonth() + 1) + '-' + pad(FromDate.getDate());
    let toDate = '' + ToDate.getFullYear() + '-' + pad(ToDate.getMonth() + 1) + '-' + pad(ToDate.getDate());

    document.getElementById("pullStatusUpdateDateFrom").setAttribute("value", fromDate);
    document.getElementById("pullStatusUpdateDateTo").setAttribute("value", toDate);

    var dates = [],
        request = {};

    //Формирование массива дат для запроса от пользоваиаля
    while (FromDate.getTime() <= ToDate.getTime()) {
        dates.push('' + pad(FromDate.getDate()) + '.' + pad(FromDate.getMonth() + 1) + '.' + FromDate.getFullYear());
        FromDate.setDate(FromDate.getDate() + 1);
    }

    //Формирование запроса для отправки JSON
    request = {
        cablePullStatusUpdateDate: dates
    };

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://courseprojectdemo-env.eba-qa5pytn4.eu-central-1.elasticbeanstalk.com/getPullStatusCountForChart",
        data: JSON.stringify(request),
        dataType: 'json',
        timeout: 600000,
        success: function (response) {
            var resultDates = [],
                items = [];
            for (var i = 0; i < response.length; i++) {
                if (response[i]["CountCablePullStatusUpdateDate"] > 0) {
                    resultDates.push(response[i]["CablePullStatusUpdateDate"]);
                    items.push(response[i]["CountCablePullStatusUpdateDate"]);
                }
            }
            var config = {
                labels: resultDates,
                datasets: [
                    {
                        label: "Количество отрезков по дням",
                        fill: false,
                        borderColor: ['rgba(255, 99, 132)'],
                        data: items
                    }]
            };
            var ctx = $("#sliceAndPullInformationChart");
            pullStatusChart = new Chart(ctx, {
                type: 'line',
                data: config
            });
        }
    })
});

function changeDates() {

    var FromDate = new Date(document.getElementById("pullStatusUpdateDateFrom").value);
    var ToDate = new Date(document.getElementById("pullStatusUpdateDateTo").value);

    var dates = [],
        request = {};

    //Формирование массива дат для запроса от пользоваиаля
    while (FromDate.getTime() <= ToDate.getTime()) {
        dates.push('' + pad(FromDate.getDate()) + '.' + pad(FromDate.getMonth() + 1) + '.' + FromDate.getFullYear());
        FromDate.setDate(FromDate.getDate() + 1);
    }
    //Формирование запроса для отправки JSON
    request = {
        cablePullStatusUpdateDate: dates
    };

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://courseprojectdemo-env.eba-qa5pytn4.eu-central-1.elasticbeanstalk.com/getPullStatusCountForChart",
        data: JSON.stringify(request),
        dataType: 'json',
        timeout: 600000,
        success: function (response) {
            var resultDates = [],
                items = [];
            for (var i = 0; i < response.length; i++) {
                if (response[i]["CountCablePullStatusUpdateDate"] > 0) {
                    resultDates.push(response[i]["CablePullStatusUpdateDate"]);
                    items.push(response[i]["CountCablePullStatusUpdateDate"]);
                }
            }
            pullStatusChart.data.labels = resultDates;
            pullStatusChart.data.datasets[0].data = items;
            pullStatusChart.update();
        }
    });
}