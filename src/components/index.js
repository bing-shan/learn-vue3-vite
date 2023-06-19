import ImageView from "./imageView/Index.vue"
import Sku from "./XtxSku/Index.vue"
export const componentPlugin = {
  install(app){
    app.component("XtxImageView",ImageView);
    app.component("XtxSku",Sku);
  }
}