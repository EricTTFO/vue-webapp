import $axios from '@/utils/axios';
export function queryCategoryRecommend() {
  return $axios.get('/category/recommend');
}
export function queryCategoryList(id) {
  return $axios.get(`/category/list?categoryId=${id}`);
}
//# sourceMappingURL=category.js.map
