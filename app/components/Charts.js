"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Highcharts = require('highcharts');

var Charts = React.createClass({
    getDefaultProps: function () {
        return {
            data: []
        };
    },
    
    data: [],

    componentWillReceiveProps: function(nextProps) {
        this.data=nextProps.data;
        this.state.chartInstance.destroy();
        this.initializeChart();
    },

    formatData:function(){
        this.data= this.data.length>0?this.data:this.props.data;
        var formattedData = {
            names:[],
            data:[]
        }
        if(this.data.length>0){
            for(var i in this.data){
                formattedData.names.push(this.data[i].Name);
                formattedData.data.push(this.data[i].Grade);
            }

        }
        return formattedData;
    },

    initializeChart: function() {
        var chartInstance = Highcharts.chart(ReactDOM.findDOMNode(this), {
            title: {
                text: 'Grade Distribution'
            },
            xAxis: {
                title: {
                    text: 'Students'
                },
                categories: this.formatData().names
            },
            yAxis: {
                title: {
                    text: 'Grades'
                }
            },
            tooltip: {
                valueSuffix: '/4.0'
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'middle',
                borderWidth: 0
            },
            series: [{data: this.formatData().data}]
        
        });

        this.setState({
            chartInstance: chartInstance
        });
    },
    
    render: function() {
      return (
        <div></div>
      );
    },

    componentDidMount: function() {
      this.initializeChart();
    }
});
module.exports = Charts;
