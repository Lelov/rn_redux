import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { connect } from 'react-redux';
import actions from '../../store/actions';

class Home extends Component{

  componentDidMount(){
    this.loadData();
  }

  async loadData(){
    const { onGetHomeData, homeData } = this.props;
    await onGetHomeData();
    console.warn(homeData);
  }

  render(){
    return (
      <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
        <Text>
          Home
        </Text>
          <Button 
            onPress={() => this.props.navigation.navigate('Test')}
            title="to Test"
          />
      </View>
    )
  }
}

const mapStateToProps = state => ({
    homeData: state.home.homeData,
});

const mapDispatchToProps = dispatch => ({
  //将 dispatch(onGetHomeData())绑定到props
  onGetHomeData: () => dispatch(actions.onGetHomeData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
