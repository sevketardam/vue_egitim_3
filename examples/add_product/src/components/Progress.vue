<template>
    <div>
        <div class="progress">
            <div class="progress-bar bg-info" role="progressbar" :style="{ width: this.progress + '%' }" aria-valuenow="50"
                aria-valuemin="0" aria-valuemax="100">
                {{ barCount }}/10
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            barCount: 0,
            progress: 0
        }
    },
    inject: ["eventBus"],
    created() {
        this.eventBus.on("progressBarUpdate", (data) => {
            this.barCount = data;
            this.progress = data * 10;
        })
    }
}
</script>

<style></style>