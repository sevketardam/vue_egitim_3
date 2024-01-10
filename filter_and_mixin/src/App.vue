<script setup>
import FilterList from './components/FilterList.vue'
</script>
<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <h3>Fiter ve Mixins</h3>
                <p>{{ $filters.toLowerCase(message) }} Global</p>
                <p>{{ toUpperCase }} Inside </p>
                <filter-list>

                </filter-list>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <h3>Fiter ve Mixins</h3>
                <p>{{ $filters.toLowerCase(message) }} Global</p>
                <p>{{ toUpperCase }} Inside </p>
                <button class="btn btn-sm btn-primary" @click="products.push('test')">Ekle!</button>
                <input type="text" v-model="searchText">
                
                <ul>
                    <li v-for="product in filtered " :key="product">
                        {{ product }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { productMixin } from './productMixin';
export default {
    data() {
        return {
            message: "Kablosuz kedi | videosinif.com",
        }
    },
    mixins: [productMixin],
    computed: {
        toUpperCase() {
            return this.message.toUpperCase()
        }
    }
}
</script>

<style scoped></style>
