<script setup>
import AppProduct from './Product.vue'

</script>

<template>
    <div v-if="productList.length > 0">
        <h3 class="text-center">Eklenen Ürünlerin Listesi</h3>
        <hr>
        <div class="row product-container">
            <app-product v-for="product in productList" :key="product">
                <img class="card-img-top" :src="product.selectedImage" :alt="product.title">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <small><strong>Adet : </strong> {{ product.count }} </small>
                    <br>
                    <small><strong>Fiyat : </strong> {{ product.price }}</small>
                    <br>
                    <small><strong>Tutar : </strong> {{ product.totalPrice }}</small>
                </div>
            </app-product>
        </div>
    </div>  
</template>

<script>
export default {
    data() {
        return {
            productList: [],
        }
    },
    inject: ["eventBus"],
    created() {
        this.eventBus.on("productAdded", (data) => {
            if (this.productList.length < 10) {
                this.productList.push(data)
                this.eventBus.emit("progressBarUpdate", this.productList.length)
            } else {
                alert("Daha fazla ürün ekleyemezsiniz!!")
            }
        })
    }

}
</script>

<style></style>