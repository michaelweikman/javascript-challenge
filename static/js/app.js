// from data.js
var tableData = data;

// YOUR CODE HERE!
btn = d3.select('#filter-btn');
var table = d3.select('table');
table.attr('class','table table-striped')
var tbody = d3.select('tbody');

function checkDate(date){
    var dateRegexp = /^\d{1}\/\d{2}\/\d{4}$/;
    return date.match(dateRegexp);
}

function createRows(filtered){
    tbody.html('');
    filtered.forEach(value => {
        var row = tbody.append('tr');
        row.attr( 'class', 'text-center')
        row.append('td').text(value.datetime);
        row.append('td').text(value.city);
        row.append('td').text(value.state);
        row.append('td').text(value.country);
        row.append('td').text(value.shape);
        row.append('td').text(value.durationMinutes);
        row.append('td').text(value.comments).attr('class', 'text-justify');
    });
}

btn.on('click', () => {
    var queryDate = d3.select('#datetime').property('value');
    var filtered = [];

    // If date blank returns unfiltered table -- exits event
    if(queryDate == ''){
        createRows(tableData);
        return true;
    }

    if(checkDate(queryDate)){
        filtered = data.filter(data => {
            return data.datetime == queryDate;
        });
    }

    createRows(filtered);
});