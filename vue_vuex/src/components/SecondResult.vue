<template>
    <div>
        <p class="counter-container"> Sayaç : {{ getDoubleCounter }}</p>
        <p>Tıklama Sayısı: {{ stringCounter }}</p>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
    // props : ["counter"],
    computed: mapGetters([
        'getDoubleCounter',
        'stringCounter'
    ])
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
  