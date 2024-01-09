<template >
    <div>
        <div class="memory">
            <slot name="header"></slot>
        </div>
        <div class="memory">
            <p class="text-center m-0">
                <slot></slot>
            </p>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        content: {
            type: String
        }
    }
}
</script>

<style scoped>
div.memory {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #666;
    padding: 20px 20px;
    margin-top: 20px;

}
</style>