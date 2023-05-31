//定义懒加载插件：
import {useIntersectionObserver} from "@vueuse/core";

export const lazyPlugin = {
  install(app) {
    app.directive("img-lazy", {
      mounted(el, binding) {
        //el:指令绑定的那个元素
        //binding:一个对象，包含多个属性，其中一个为value，就是传递给指令的表达式的值。
        //console.log(el, binding.value)
        const {stop} = useIntersectionObserver(
            el,
            ([{isIntersecting}], observerElement) => {
              if (isIntersecting) {
                el.src = binding.value;
                stop();//在图片第一次加载后，就停止对目标的监控，以减少资源消耗。
              }
            },
        )
      }
    })
  }
}