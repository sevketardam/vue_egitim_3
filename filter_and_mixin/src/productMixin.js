export const productMixin = {
    data() {
        return {
            products: ["monitor", "klavye", "masa", "kitap", "şişe", "harddisk"],
            searchText: ""
        }
    },
    computed: {
        filtered() {
            return this.products.filter((element) => {
                return element.match(this.searchText)
            })
        }
    }
}