<template>
    <div class="row">
        <div class="card offset-2 col-md-3">
            <div class="card-body tex-center d-flex align-items-center flex-column">
                <img height="128" class="img-responsive text-center mb-3 selected-img"
                    :src="product.selectedImage == null ? '/src/assets/default.png' : product.selectedImage">
                <input ref="file" type="file" style="display: none;" @change="onChange($event)" class="form-control">
                <button class="btn btn-outline-secondary " type="button" @click="$refs.file.click()">Resim Seç</button>
            </div>
        </div>
        <div class="col-md-5">
            <div class="col-md-11 card">
                <div class="card-body">
                    <div class="form-group">
                        <label>Ürün Adı</label>
                        <input type="text" class="form-control" v-model="product.title" placeholder="adını giriniz">
                    </div>
                    <div class="row">
                        <div class="form-group col-md-6">
                            <label>Ürün Adeti</label>
                            <input type="text" class="form-control" v-model="product.count" placeholder="adetini giriniz">
                        </div>
                        <div class="form-group col-md-6">
                            <label>Ürün Fiyatı</label>
                            <input type="text" class="form-control" v-model="product.price" placeholder="fiyatını giriniz">
                        </div>
                    </div>
                    <button @click="addProduct()" class="btn btn-outline-info btn-block w-100 mt-3">Ekle!</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

    data() {
        return {
            product: {
                title: null,
                count: null,
                price: null,
                totalPrice: null,
                selectedImage: null
            }
        }
    },
    inject: ["eventBus"],
    methods: {
        onChange(e) {
            const file = e.target.files[0];
            this.product.selectedImage = URL.createObjectURL(file);
        },
        addProduct() {
            this.product.totalPrice = this.product.price * this.product.count;
            console.log(this)
            this.eventBus.emit("productAdded", this.product);
            this.product = {
                title: null,
                count: null,
                price: null,
                totalPrice: null,
                selectedImage: null
            }
        }
    }
}
</script>

<style scoped>
.selected-img {
    max-width: 315px;
    object-fit: contain;
}
</style>