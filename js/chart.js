Highcharts.chart('container', {
    data: {
        table: 'datatable',
        width: '20px',
        
    },
    backgroundColor: '#000000',
    chart: {
        type: 'column'
    },
    title: {
        text: '',
    },
    yAxis: {
        allowDecimals: false,
        title: {
            text: ''
        }
    },
    tooltip: {
        formatter: function () {
            return '<b>' + this.series.name + '</b><br/>' +
                this.point.y + ' ' + this.point.name.toLowerCase();
        }
    }
});