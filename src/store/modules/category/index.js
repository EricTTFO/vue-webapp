import * as TYPES from '../../mutation-types';
import { queryCategoryRecommend, queryCategoryList } from '@/api/category';
const namespaced = true;
const state = {
  industryList: [],
  moduleList: [],
};
const mutations = {
  [TYPES.SET_MENULIST](state, menus) {
    state.industryList = menus;
  },
  [TYPES.SET_CATEGORYLIST](state, categorys) {
    state.moduleList = categorys;
  },
};
const actions = {
  // 获取分类菜单列表和默认推荐列表
  async getCategoryRecommend({ commit }) {
    const res = await queryCategoryRecommend();
    if (res && res.code === 200) {
      commit(TYPES.SET_MENULIST, res.data.result.industryList);
      commit(TYPES.SET_CATEGORYLIST, res.data.result.moduleList);
    }
  },
  // 根据菜单id获取分类列表
  async getCategoryList({ commit }, id) {
    const res = await queryCategoryList(id);
    if (res && res.code === 200)
      commit(TYPES.SET_CATEGORYLIST, res.data.result.moduleList);
  },
};
export default {
  namespaced,
  state,
  mutations,
  actions,
};
//# sourceMappingURL=index.js.map
