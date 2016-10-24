"use strict";

var React = require('react');

var TableCell = React.createClass({
    propTypes: {
        header: React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
           header: false
        };
    },

    // onClose: function(event) {
    //     event.preventDefault();

    //     if(this.props.onClose){
    //         this.props.onClose();
    //     }
    // },

    render: function() {
        if(!this.props.header){
            return(<td>{this.props.data}</td>)
        }else if(this.props.header){
            return(<th>{this.props.data}</th>)
        }
    }
});

module.exports = TableCell;
