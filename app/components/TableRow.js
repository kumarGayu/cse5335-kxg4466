"use strict";

var React = require('react');
var Tablecell = require('../components/TableCell');
var GoogleMap = require('../components/GoogleMap');

var TableRow = React.createClass({
    propTypes: {
        header: React.PropTypes.bool
    },

    ononClick: function(event) {
        event.preventDefault();

        if(this.state.showTd){
            this.setState({showTd:false})
        }else{
            this.setState({showTd:true})
        }
    },

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
                    cells.push(<Tablecell clickable={true} onClick={this.onClick()} data={this.props.data[keys[i]]} header={me.props.header} key={'td'+i} />);
                }
            }
            if(this.state.showTd){
                cells.push(<td><GoogleMap data={this.props.data} /></td>)
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
