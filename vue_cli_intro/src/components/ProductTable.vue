<script setup>
</script>

<template>
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="list in lists" v-bind:key="list">{{ list }}</li>
        </ul>
    </div>
</template>

<script>

export default {
    data() {
        return {
            lists: [
                "status 1",
                "status 2",
                "status 3",
                "status 4",
                "status 5",
                "status 6",
            ]
        }
    }
}

</script>


<style scoped></style>
