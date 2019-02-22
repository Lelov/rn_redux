import { HOME_PAGE_DATA } from '../../actionTypes';

export function onGetHomeData(isShowLoading) {
  return {type: HOME_PAGE_DATA, isShowLoading};
}