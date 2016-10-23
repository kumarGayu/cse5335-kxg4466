"use strict";

var React = require('react');

var TableCell = React.createClass({
    propTypes: {
        clickable: React.PropTypes.bool,
        header: React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            clickable: false,
            header: false
        };
    },

    onClick: function(event) {
        event.preventDefault();

        if(this.props.onClick){
            this.props.onClick();
        }
    },

    render: function() {
        if(!this.props.header){
            if(this.props.clickable){
                return(<td>{this.props.data}</td>)
            }else{
                return(<td onclick={this.onclick()}>{this.props.data}</td>)
            }
        }else if(this.props.header){
            return(<th>{this.props.data}</th>)
        }
    }
});

module.exports = TableCell;
