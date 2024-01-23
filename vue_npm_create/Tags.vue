<script setup>
import AppTag from './Tag.vue'


</script>

<template>
    <div class="tag-container">
        <app-tag v-for="(tag, index) in tags" :key="index" :tag="tag" :index="index"
            @removeOneTagEvent="removeOneTag($event)" :tagColor="color"></app-tag>

        <input type="text" @keydown.enter="addTag" @keydown.backspace="removeTag">
        <div class="error" v-if="error">Bu Etiket Daha Önceden Eklenmiş!</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tags: ["deneme", "test"],
            error: false
        }
    },
    methods: {
        addTag(event) {
            let text = event.target.value;
            let matchedTag = false;
            if (text.length <= 0) return;

            this.tags.forEach(tag => {
                if (tag.toLowerCase() == text.toLowerCase()) {
                    matchedTag = true

                }
            });

            if (matchedTag) {
                this.error = true;
                setTimeout(() => {
                    this.error = false;
                }, 2000)
                return;
            }

            this.tags.push(text)
            event.target.value = "";
            this.error = false;

        },
        removeTag(e) {
            if (e.target.value.length <= 0) {
                this.tags.splice(this.tags.length - 1, 1)
            }
        },
        removeOneTag(index) {
            this.tags.splice(index, 1)
        }
    },
    props: {
        value: {
            required: false
        },
        color: {
            type: String,
            required: false,
            default: "primary"
        }
    },
    created() {
        if (this.value) {
            if (this.value.length > 0) {
                this.tags = this.value.split(",")
            }
        }
    },
    watch: {
        tags: {
            handler() {
                this.$emit("update:modelValue", this.tags.join(","))
            },
            deep: true
        }
    }
}
</script>

<style scoped>
.tag-container {
    border: 1px solid #ccc;
    padding: 20px
}



input {
    outline: none;
    height: 100%;
    width: 100px;
}

.error {
    font-size: 12px;
    color: red;
    margin-top: 10px;
}
</style>