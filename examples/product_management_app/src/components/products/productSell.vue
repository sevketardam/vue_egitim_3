<template>
    <div class="container">
        <div class="loading" v-if="saveButtonClick">
            <div class="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
        <div class="row">
            <div class="col-6 offset-3 pt-3 card mt-5 shadow">
                <div class="card-body">
                    <h3>Ürün Çıkışı</h3>
                    <hr>
                    <div class="mb-3">
                        <label>Ürün Adı</label>
                        <select class="form-control" v-model="selectedProduct" @change="productSelected">
                            <option disabled>Lütfen Bir Ürün Seçiniz</option>

                            <option :value="product.id" :disabled="product.count <= 0" v-for="product in getProducts"
                                :key="product.id">{{ product.title }}</option>
                        </select>
                    </div>
                    <transition name="fade" mode="out-in">
                        <div class="card mb-2 border border-danger" v-if="product != null">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-12 text-center">
                                        <div class="mb-3">
                                            <span class="badge text-bg-info me-2">Stok : {{ product.count }}</span>
                                            <span class="badge text-bg-primary">Fiyat : {{ $filters.currency(product.price)
                                            }}</span>
                                        </div>
                                        <p class="border border-warning p-2 text-secondary">{{ product.description }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </transition>

                    <div class="form-group">
                        <label>Adet</label>
                        <input type="text" v-model="productCount" class="form-control" placeholder="Ürün adetini giriniz..">
                    </div>
                    <hr>
                    <button @click="save"  :disabled="saveEnabled" class="btn btn-primary">Kaydet</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            selectedProduct: null,
            product: null,
            productCount: null,
            saveButtonClick:false
        }
    },
    computed: {
        ...mapGetters(["getProducts"]),
        saveEnabled() {
            if (this.selectedProduct != null && this.productCount > 0) {
                return false;
            }
            return true;
        },
    },
    methods: {
        async productSelected() {
            console.log(this.selectedProduct)
            this.product = (await this.$store.getters.getProduct(this.selectedProduct))[0]
            console.log(this.product)
        },
        save() {
            this.saveButtonClick = true;
            let product = {
                key: this.selectedProduct,
                count: this.productCount
            }

            this.$store.dispatch("sellProducts", product)
        }
    },
    beforeRouteLeave(to, from, next) {
       
        if ((this.selectedProduct != null || this.productCount > 0) && !this.saveButtonClick) {
            if (confirm("Kaydedilmemiş değişiklikleriniz var yinede ayrılma istiyor musunz?")) {
                next()
            } else {
                next(false)
            }
        } else {
            next()
        }
    }
}
</script>

<style scoped>
.border-danger {
    border-style: dashed !important;
}
</style>