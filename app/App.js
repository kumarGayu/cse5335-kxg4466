'use strict';
var React = require('react');
var ReactDOM = require('react-dom');
var Table = require('./components/Table');
var GoogleMap = require('./components/GoogleMap');
var Charts = require('./components/Charts');

var axios = require('axios');
var _ = require('lodash');

var App = React.createClass({
    propTypes: {
        data: React.PropTypes.array,
        animatedata: React.PropTypes.array
    },

    getInitialState: function() {
        return {
            data: [],
            animatedata: [],
            length:0,
        };
    },

    onClick: function (){
        var me = this
        axios.get('/data').then(function(res){
            me.setState({data:res.data})
        }); 
    },

    getData: function(period){
        var me = this;
        axios.get('/animationdata',{params:{ 'period': period}}).then(function(res){
            if(me.state.animatedata.length<20){
                me.state.animatedata.push(res.data);
                me.state.length++;   
            }else{
                me.state.animatedata[(me.state.length++)%20] = res.data;
            }
            me.forceUpdate();
        });
    },

    onAnimate: function (){
        var month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
        var cnt = 0;
        var data = [];
        var me = this;
        for(var year = 1992; year< 2016;year++){
             month.forEach(function(mon){
				 if(cnt==100){
					 return true;
				 }
                 var period = mon+year;
                 var delay = cnt*500;
                 cnt+=1;
                 setTimeout(me.getData,delay,period);
             }); 
        }
    },

    getAnimation: function(){
        if(this.state.animatedata.length>0){
            var animate_item = [];
            var me = this;
            this.state.animatedata.forEach(function(dat,index){
                animate_item.push(<div className={"animate"+" "+"animate"+(me.state.length+index)%5} key={index}><span><em><strong>Time :{dat.time.period}</strong></em></span><span><em><strong> Retail Trades :{dat.data.inventories['retail trade']}</strong></em></span></div>);
            });
            return <div>{animate_item}</div>
        }
        return null;
    },

    // componentDidMount:function(){
    //     runDiv();
    // },
    
    render: function(){
        if(this.state.animatedata.length>0){
            return (
                <div className="container">
                    {this.getAnimation()}
                </div>
            );
        }else{
            return (
                <div className="container">
                    <button className="center-block btn btn-primary" onClick= {this.onAnimate}> !!! Animate !!! </button>
                </div>
            );
        }
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('app')
);