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
    </div>
</template>

<script>
export default {
    data() {
        return {
            message: "Kablosuz kedi | videosinif.com",
        }
    },
    computed: {
        toUpperCase() {
            return this.message.toUpperCase()
        }
    }
}
</script>

<style scoped></style>
