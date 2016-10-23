"use strict";
var React = require('react');
var ReactDOM = require('react-dom');

var GoogleMap = React.createClass({
    getDefaultProps: function () {
        return {
            zoom: 6,
            title: '',
            Lat: 43.6425569,
            Long: -79.4073126,
            data: []
        };
    },

    componentWillReceiveProps:function(nextProps){
        var mapOptions = {
            center: this.getMapCenter(nextProps.data[0]?nextProps.data[0].Latitude:this.props.Lat,nextProps.data[0]?nextProps.data[0].Longitude:this.props.Long),
            zoom: this.props.zoom
        },
        map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOptions);
        var me = this
        if(nextProps.data.length>0){
            var marker = nextProps.data.map(function(item,index){
                return new google.maps.Marker({position: me.getMapCenter(item.Latitude,item.Longitude), title: item.Name, map: map});
            });
        }
        this.setState({map: map});
    },

    componentDidMount: function () {
        var mapOptions = {
            center: this.getMapCenter(this.props.data[0]?this.props.data[0].Latitude:this.props.Lat,this.props.data[0]?this.props.data[0].Longitude:this.props.Long),
            zoom: this.props.zoom
        },
        map = new google.maps.Map(ReactDOM.findDOMNode(this), mapOptions);
        var me = this
        if(this.props.data.length>0){
            var marker = this.props.data.map(function(item,index){
                return new google.maps.Marker({position: me.getMapCenter(item.Latitude,item.Longitude), title: item.Name, map: map});
            });
        }
        this.setState({map: map});
    },
    getMapCenter: function (Lat,Long) {
        return new google.maps.LatLng(Lat,Long);
    },
    render: function () {
        return (
            <div style={{height:400}}></div>
        );
    }
});

module.exports = GoogleMap