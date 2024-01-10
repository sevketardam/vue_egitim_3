<template>
    <div class="container">
        <h1>Tebrikler Bildiniz</h1>
        <button @click="newGame">Yeni Oyun</button>
    </div>
</template>

<script>
export default {
    methods:{
        newGame(){
            this.$emit("activeComponentEmit","AppGameCard")
        }
    }
}
</script>

<style scoped>
.container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.container h1 {
    font-size: 33px;
    text-align: center;
    color: darkgreen;
    opacity: .5;
}

.container button {
    cursor: pointer;
    width: 200px;
    background: #fff;
    color: darkred;
    border: 1px solid darkgreen;
    font-size: 15px;
    height: 50px;
    outline: none;
    transition: all .5s;
    border-radius: 4px;;
}

.container button:hover {
    background: darkgreen;
    color: #fff;
}
</style>