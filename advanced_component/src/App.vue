<script setup>
import AppMemory from './components/Memory.vue';
import AppAuthor from './components/Author.vue';
import AppNewMemory from './components/NewMemory.vue';
</script>

<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <button @click="selectedComponent = 'AppMemory'" class="btn btn-sm btn-primary me-2">App Memory</button>
                <button @click="selectedComponent = 'AppNewMemory'" class="btn btn-sm btn-primary me-2">App New
                    Memory</button>
                <button @click="selectedComponent = 'AppAuthor'" class="btn btn-sm btn-primary me-2">App Author</button>
                <hr>
                {{ selectedComponent }}
                <hr>
                <!--  Bunu yazmazsak çağırdığımızda sıfırdan çağırıyoruz -->
                <keep-alive> 
                    <component :is="selectedComponent">
                        <template v-slot:header>
                            <h1>Başlık</h1>
                        </template>
                        <template v-slot>
                            <p>Bu çok güzel bir anıdır</p>
                        </template>
                    </component>
                </keep-alive>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedComponent: "appMemory"
        }
    },
    components: {
        AppMemory,
        AppNewMemory,
        AppAuthor
    }
}
</script>

<style scoped></style>
