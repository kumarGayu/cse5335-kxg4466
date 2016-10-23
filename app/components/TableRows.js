"use strict";

var React = require('react');
var Tablerow = require('../components/TableRow');

var TableRows = React.createClass({
    propTypes: {
        data: React.PropTypes.array
    },
    // onClose: function(event) {
    //     event.preventDefault();

    //     if(this.props.onClose){
    //         this.props.onClose();
    //     }
    // },

    render: function() {
        var rows;
        if(this.props.data.length>0){
            rows = this.props.data.map(function(item,index){
                return(
                    <Tablerow data={item} header={false} key={index}/>
                )
            });
        }
        
        return (        
            <tbody>
                {rows}
            </tbody>
        );
    }
});

module.exports = TableRows;
