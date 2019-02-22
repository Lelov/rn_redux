import { HOME_PAGE_DATA } from '../../actionTypes';
import { Alert } from 'react-native';
const initialState = {};

export default function home(state = initialState, action) {
  switch (action.type) {
    case HOME_PAGE_DATA://获取数据
    Alert.alert('当前触发TYPE', HOME_PAGE_DATA);
      return {
        ...state,
      };
    default:
      return state;
  }
}