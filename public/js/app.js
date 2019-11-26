google.charts.load('current', { 'packages': ['gantt'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Task ID');
    data.addColumn('string', 'Task Name');
    data.addColumn('string', 'Resource');
    data.addColumn('date', 'Start Date');
    data.addColumn('date', 'End Date');
    data.addColumn('number', 'Duration');
    data.addColumn('number', 'Percent Complete');
    data.addColumn('string', 'Dependencies');

    data.addRows([
        ['ID-1235', 'Project One', 'Project',
            new Date(2014, 2, 22), new Date(2014, 5, 20), null, null, null],
        ['ID-12234535', 'Project Two', 'Bid',
            new Date(2014, 8, 22), new Date(2014, 10, 20), null, null, null],
        ['ID-8560', 'Project Three', 'Bid',
            new Date(2014, 6, 22), new Date(2014, 8, 20), null, null, null],
        ['ID-3494', 'Project Four', 'Project',
            new Date(2014, 1, 22), new Date(2014, 8, 20), null, null, null],
    ]);

    var options = {
        height: 400,

        backgroundColor: {
            fill: "#393e46"
        },
        gantt: {
            trackHeight: 30,
            percentEnabled: false,
            criticalPathEnabled: false
        }
    };

    var chart = new google.visualization.Gantt(document.getElementById('chart-div'));

    chart.draw(data, options);
}