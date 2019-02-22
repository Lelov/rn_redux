import { HOME_PAGE_DATA, HOME_USER_DATA } from '../../actionTypes';

/**
 * @param {any} homeData : 传值到 reducer 中进行赋值运算
 */
export function onGetHomeData(homeData) {

  return {type: HOME_PAGE_DATA, homeData};
}

export function changeUserList(homeUserData) {
  return {type: HOME_USER_DATA, homeUserData};
}

export function getUserList(url){
  return dispatch => (
    fetch(url)
    .then(res => res.json())
    .then(res => dispatch(changeUserList(res)))
  )
}