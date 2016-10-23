"use strict";

var React = require('react');
var Tablerow = require('../components/TableRow');
var Tablerows = require('../components/TableRows');

var Table = React.createClass({
    propTypes: {
        data: React.PropTypes.array
    },

    render: function() {
        return (
            <table className="table table-striped">
                <thead>
                    <Tablerow header={true} data={this.props.data[0]} />
                </thead>
                <Tablerows data={this.props.data} />
            </table>
        );
    }
});

module.exports = Table;
