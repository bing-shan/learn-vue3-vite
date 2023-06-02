//封装banner轮播图相关的业务代码

import {onMounted} from "vue";
import {getBanner} from "@/apis/layout.js"

export function useBanner(){
  const bannerList = ref([]);
  const getBannerList = async () => {
    const res = await getBanner({
      distributionSite: 2
    });
    bannerList.value = res.result;
  }

  onMounted(() => getBannerList());

  return {
    bannerList
  }
}

