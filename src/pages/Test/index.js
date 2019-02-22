import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Test extends Component{

  componentDidMount(){
    console.warn(this.props.homeData);
  }

  render(){
    return (
      <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
        <Text>
          this is Test page
        </Text>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  homeData: state.home.homeData,
});

export default connect(mapStateToProps)(Test);