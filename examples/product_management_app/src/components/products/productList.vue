<template>
    <div class="container">
        <div class="row">
            <div class="col-12 mb-5 card mt-5 shadow">
                <div class="card-body">
                    <h3>Ürün Listesi</h3>
                    <hr>
                    <table class="table table-hover table-striped table-bordered" v-if="getProducts.length > 0">
                        <thead>
                            <th>id</th>
                            <th>Ürün Adı</th>
                            <th>Adet</th>
                            <th>Fiyat</th>
                            <th>Açıklama</th>
                        </thead>
                        <tbody>
                            <tr v-for="product in getProducts" :key="product">
                                <td class="align-middle text-center"><span class="badge text-bg-info"> {{ product.id }}
                                    </span>
                                </td>
                                <td class="align-middle text-center"> {{ product.title }} </td>
                                <td class="align-middle text-center" :class="getCountClasses(product.count)"> {{
                                    product.count }} </td>
                                <td style="width: 120px;"> {{ $filters.currency(product.price) }}</td>
                                <td class="align-middle"> {{ product.description }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="alert alert-warning" v-else>
                        <strong>Henüz Burada Bir Kayıt Bulamadık</strong>
                        <br>
                        <small>Kayıt Eklemek için Ürün İşlemleri menüsünden yararlanabilirsiniz
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters(["getProducts"]),

    },
    methods: {
        getCountClasses(count) {
            return {
                'bg-danger text-white': count <= 0 || count == null,
                'bg-success text-white': count > 0
            }
        }
    }
}
</script>

<style></style>