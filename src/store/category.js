import {defineStore} from "pinia";
import {computed, ref} from "vue";
import {getCategory} from "@/apis/layout.js"

export const useCategoryStore = defineStore("category", () => {

  const categoryList = ref([]);

  //actions:
  const getCategoryList = async () => {
    const res = await getCategory();
    categoryList.value = res.result;
  }

  return {
    categoryList,
    getCategoryList,
  }
})