import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

import { connect } from 'react-redux';
import actions from '../../store/actions';
import { TextInput } from 'react-native-gesture-handler';

class Home extends Component{

  state={
    stateVal: ''
  }

  componentWillReceiveProps(){
    console.warn('get new props');
  }

  componentDidMount(){
    this.loadData();
  }

  async loadData(){
    const { getUserList,  } = this.props;
    // 传入新的state值
    getUserList('https://api.github.com/users');
  }

  changeText(){
    const { onGetHomeData, } = this.props;
    onGetHomeData('asdasda');
  }

  render(){

    const { homeUserData } = this.props;
    // const { stateVal } = this.state;
    return (
      <View style={{flex: 1,alignItems: 'center',justifyContent: 'center'}}>
        <Text>
          Home
        </Text>
          {/* <TextInput 
            value={stateVal}
            placeholder="测试动态修改redux state中的值"
            onChangeText={text => this.setState({stateVal: text})}
          />
          <Button 
            title="修改"
            onPress={ () => this.changeText() }
          /> */}
          <Text>
          homeData value：{ JSON.stringify(homeUserData) }
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
    homeUserData: state.home.homeUserData,
});

const mapDispatchToProps = dispatch => ({
  onGetHomeData: (homeData) => dispatch(actions.onGetHomeData(homeData)),
  getUserList: (url) => dispatch(actions.getUserList(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
