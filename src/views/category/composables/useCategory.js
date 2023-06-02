import {onMounted} from "vue";
import {getCategoryApi} from "@/apis/category";

export function useCategory(){
  onBeforeRouteUpdate((to) => {
    getCategoryList(to.params.id);
  })

  const categoryData = ref([]);
  const route = useRoute();
  const getCategoryList = async (id = route.params.id) => {
    const res = await getCategoryApi(id);
    categoryData.value = res.result;
  }

  onMounted(() => getCategoryList());

  return {
    categoryData
  }
}