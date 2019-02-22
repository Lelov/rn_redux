import { HOME_PAGE_DATA } from '../../actionTypes';

const initialState = {homeData: []};

export default function home(state = initialState, action) {
  switch (action.type) {
    case HOME_PAGE_DATA://获取数据
      return {
        ...state,
        homeData: state.homeData,
      };
    default:
      return state;
  }
}