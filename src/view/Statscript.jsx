import Highchart from Highchart

document.addEventListener('DOMContentLoaded', function () {
    const chart = Highcharts.chart('container', {
            chart : {
                type: "column"
            },
            title : {
                text: 'STATS'
            },
            subtitle : {
                text: 'Source: <a href="https://pokeapi.co/">Pokémon API</a>'
            },
            xAxis : {
                type: 'category',
                labels: {
                    rotation: -45,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Montserrat, sans-serif'
                    }
                }
            },
            yAxis : {
                min: 0,
                title: {
                    text: 'Stats'
                }
            },
            legend : {
                enabled: false
            },
            tooltip : {
                pointFormat: 'Stat Value: <b>{point.y:.1f}</b>'
            },
            series : [{
                data: [
                    ['HP', { data.stats[0].base_value }],
                    ['Attack', (data.stats[1].base_value)],
                    ['Defense', (data.stats[2].base_value)],
                    ['Sp. Attack', (data.stats[3].base_value)],
                    ['Sp. Defense', (data.stats[4].base_value)],
                    ['Speed', (data.stats[5].base_value )],
                    ],
                dataLabels: {
                    enabled: true,
                    rotation: -90,
                    color: '#FFFFFF',
                    align: 'right',
                    format: '{point.y:.1f}',
                    y: 10,
                    style: {
                        fontSize: '13px',
                        fontFamily: 'Montserrat, sans-serif'
                    }
                },
            }],
    })
})