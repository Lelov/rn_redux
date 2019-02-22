import { HOME_PAGE_DATA, HOME_USER_DATA } from '../../actionTypes';

// 设定初始状态值
const initialState = {
  homeData: 'asdasd00 init',
  homeUserData: null,
};
/**
 *
 * @export：暴露的方法名在组件 connect 的时候可以进行设定获取或者关联
 * @param {*} [state=initialState]：设定状态state初始值
 * @param {*} action：对应action.type的action属性，并通过返回参数的形式进行状态值的改变
 * @returns：进行新state值的赋值运算
 */
export default function home(state = initialState, action) {
  switch (action.type) {
    case HOME_PAGE_DATA://获取数据
      return {
        ...state,
        homeData: action.homeData,
      };
    case HOME_USER_DATA://获取数据
      return {
        ...state,
        homeUserData: action.homeUserData,
      };
    default:
      return state;
  }
}
