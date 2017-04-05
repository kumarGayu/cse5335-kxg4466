'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Table = require('./components/Table');
var GoogleMap = require('./components/GoogleMap');
var Charts = require('./components/Charts');

var axios = require('axios');

var App = React.createClass({
    propTypes: {
        data: React.PropTypes.array
    },

    getInitialState: function() {
        return {
            data: [],
        };
    },

    componentDidMount: function (){
        var me = this
        axios.get('/data').then(function(res){
            me.setState({data:res.data})
        });
    },

    render: function(){
        return (
            <div className="container">
                <div className="panel panel-default">
                    <div className="panel-heading"><strong className="center-block">Student Details</strong></div>
                    <div className="panel-body"><Table data={this.state.data} /></div>
                </div>
                <div className="panel panel-default">
                    <div className="panel-heading center-block"><strong className="center-block">Students on Map</strong></div>
                    <div className="panel-body"><GoogleMap data={this.state.data}/></div>
                </div>
                <div className="panel panel-default">
                    <Charts data={this.state.data}/>
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
