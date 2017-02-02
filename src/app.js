import React from 'react';
import { View } from 'react-native';
import { Header } from './component/common';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LibraryList from './component/LibraryList'

var App = React.createClass({
    render:function(){
        return (
            <Provider store={createStore(reducers)}>
                <View>
                    <Header headerText="Tech-Stack" />
                    <LibraryList />
                </View>
            </Provider>
        )
    }
});

export default App;
