import Item from "./src/FormItem.vue"

Item.install = vue => {
  vue.component(Item.name, Item)
}




export default Item;