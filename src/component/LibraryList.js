import React from 'react';
import { View, ListView } from 'react-native';
import { connect } from 'react-redux';

var LibraryList = React.createClass({
    getInitialState: function(){
        return({
            dataSorce:[]
        })
    },
    componentWillMount:function(){
        var { libraries } = this.props
    },
    render:function(){
        return (
            <View />
        )
    }
});

export default connect((state) =>{
    return {
        libraries : state.libraries
    }
})(LibraryList);
