"use strict";

var React = require('react');
var Tablecell = require('../components/TableCell');

var TableRow = React.createClass({
    propTypes: {
        header: React.PropTypes.bool
    },

    // onClose: function(event) {
    //     event.preventDefault();

    //     if(this.props.onClose){
    //         this.props.onClose();
    //     }
    // },

    render: function() {
        var me = this;
        var cells =[];
        if(this.props.header && this.props.data){
            var keys = Object.keys(this.props.data);
            for (var i = 0;i<keys.length;i++){
                cells.push(<Tablecell data={keys[i]} header={me.props.header} key={'td'+i} />)
            }
        }else{
            if(this.props.data){
                var keys = Object.keys(this.props.data);
                for (var i = 0;i<keys.length;i++){
                cells.push(<Tablecell data={this.props.data[keys[i]]} header={me.props.header} key={'td'+i} />);
            }
            }
        }
        return (        
            <tr>
                {cells}
            </tr>
        );
    }
});

module.exports = TableRow;
