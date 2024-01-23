<template>
    <span class="tag" :class="selectedTheme">
        <span class="content">{{ tag }}</span>
        <span class="close ms-2" @click="$emit('removeOneTagEvent', index)">X</span>
    </span>
</template>

<script>
export default {
    props: ["tag", "index", "tagColor"],
    data() {
        return {
            selectedTheme: null
        }
    },
    created() {
        this.selectedTheme = this.tagColor;
    }
}
</script>

<style scoped>
.primary {
    color: #004085;
    background: #cce5ff;
    border-color: #b8daff;
}
.secondary {
    color: #383d41;
    background: #e2e3e5;
    border-color: #d6d8db;
}

.success {
    color: #155734;
    background: #D5EDDB;
    border: 1px solid #c3e6cb;
}

.info {
    color: #0c5460;
    background: #d1ecf1;
    border-color: #bee5eb;
}

.warning {
    color: #856404;
    background: #fff3cd;
    border-color: #ffeeba;
}
.danger {
    color: #721c24;
    background: #f8d7da;
    border-color: #f5c6cb;
}


.tag {
    padding: 10px;
    cursor: default;
    font-size: 14px;
    margin-right: 4px;
}

.tag .close {
    font-size: 12px;
    cursor: pointer;
    font-weight: bold;
}
</style>