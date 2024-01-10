<script setup>
import AppCard from './Card.vue'
import AppDefaultCard from './DefaultCard.vue'

</script>

<template>
    <div class="game-area">
        <h1 class="title"> Poğaça <span>Nerede</span> <strong>?</strong></h1>
        <h4 class="description">Açık kartların birini seçtikten sonra kapalı olan karta tıklayınız</h4>
        <div class="container">
            <transition-group name="rotate" class="card-container" tag="div" appear>
                <app-card :card="card" :class="{ 'shadow': selectedCard == card.id }" v-for="card in cards" :key="card"
                    @click.native="selectedCard = card.id">
                </app-card>
            </transition-group>
        </div>
        <div class="container">
            <transition name="rotate-single" mode="out-in" type="animation">
                <component @click="showCard(this.answer)" :is="activeCard" :card="this.answer">
                </component>
            </transition>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            cards: [
                {
                    id: 1,
                    component: "AppCard",
                    image: "/src/assets/card-1.jpg"
                },
                {
                    id: 2,
                    component: "AppCard",
                    image: "/src/assets/card-2.jpg"
                },
                {
                    id: 3,
                    component: "AppCard",
                    image: "/src/assets/card-3.jpg"
                },
                {
                    id: 4,
                    component: "AppCard",
                    image: "/src/assets/card-4.jpg"
                },
                {
                    id: 5,
                    component: "AppCard",
                    image: "/src/assets/card-5.jpg"
                },
            ],
            answer: {},
            selectedCard: null,
            activeCard: "AppDefaultCard"
        }
    },
    methods: {
        showCard(answer) {
            if (this.selectedCard == null) {
                alert("Kart Seçiniz")
            } else {
                this.activeCard = answer.component
                setTimeout(() => {
                    if (answer.id == this.selectedCard) {
                        this.$emit("activeComponentEmit","AppCelebrate")
                    } else {
                        this.$emit("activeComponentEmit","AppFailure")
                    }
                }, 1000)

            }


        }
    },
    components: {
        AppDefaultCard,
        AppCard
    },
    created() {
        let answer = Math.ceil(Math.random() * this.cards.length)

        this.answer = this.cards[answer - 1]
    }

}
</script>

<style scoped>
.rotate-single-enter-active {
    animation: rotate-in ease-in-out .5s forwards;
}

.rotate-single-leave-active {
    animation: rotate-out ease-in-out .5s forwards;
}


@keyframes rotate-in {
    from {
        transform: rotateY(90deg);
    }

    to {
        transform: rotateY(0);
    }
}

@keyframes rotate-out {
    from {
        transform: rotateY(0);
    }

    to {
        transform: rotateY(90deg);
    }
}


.rotate-enter-active {
    animation: rotate-all ease-in-out 2s forwards;
}

@keyframes rotate-all {
    from {
        transform: rotateY(0);
    }

    to {
        transform: rotateY(1080deg);
    }
}


.shadow {
    box-shadow: 0 5px 48px #30969f !important;
    transition: box-shadow .5s;
}

.container,
.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.title {
    text-align: center;
    color: rosybrown;
}

.title span {
    color: mediumpurple;
}

.title strong {
    color: darkred;
}

.description {
    color: grey;
    text-align: center;
}
</style>