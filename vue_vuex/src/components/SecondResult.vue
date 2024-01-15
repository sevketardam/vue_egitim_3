<template>
    <div>
        <p class="counter-container"> Sayaç : {{ double }}</p>
        <p>Tıklama Sayısı: {{ stringC }}</p>
        <input type="text" v-model="getterValue">
        <p>{{ getterValue }}</p>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    // props : ["counter"],
    // computed: mapGetters([
    //     'getDoubleCounter',
    //     'stringCounter'
    // ]) 
    computed: {
        ...mapGetters({
            double: 'getDoubleCounter',
            stringC: 'stringCounter'
        }),
        getterValue: {
            get() {
                return this.$store.getters.getValue;
            },
            set(value) {
                this.$store.dispatch("setValueData", value)
            }
        }
    },
    methods: {
        setValue(event) {
            console.log(event)
            this.$store.dispatch("setValueData", event.target.value)
        }
    }
}

</script>
<style scoped>
.counter-container {
    border: 1px solid #aa7f08;
    padding: 10px 5px;
    background-color: #fbbd08;
    font-size: 20px;
    color: #000;
}
</style>
  