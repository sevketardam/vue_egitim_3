<script setup>
import AppHome from './components/Home.vue';
import AppPost from './components/Post.vue';

</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <!-- <hr>
        <select v-model="activeEffect" class="form-select">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>

        </select>
        <br>

        <button class="btn btn-primary mb-3" @click="show = !show">Kutuyu Göster/Gizle</button>
        <Transition :name="activeEffect">
          <div class="alert alert-success" v-if="!show">Bu bir alert kutusudur</div>
        </Transition>
        <hr>
        <Transition name="slide" type="animation" appear>
          <div class="alert alert-warning" v-if="!show">Bu bir alert kutusudur</div>
        </Transition>
        <hr>
        <Transition 
        enter-class=""
        enter-to-class="animate__animated animate__wobble"
        leave-class=""
        leave-active-class="animate__animated animate__jello"

        type="animation" appear>
          <div class="alert alert-warning" v-if="!show">Bu bir alert kutusudur</div>
        </Transition> 
        <hr>
        <Transition name="fade" mode="out-in">
          <div class="alert alert-success" v-if="!show" key="success">Bu bir alert kutusudur</div>
          <div class="alert alert-danger" v-else key="danger">Bu bir alert kutusudur</div>
        </Transition> -->
        <hr>
        <button class="btn btn-sm btn-primary mb-3" @click="showJS = !showJS">Göster/Gizle</button>
        <Transition :css="false" @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"
          @after-enter-cancelled="afterEnterCancelled" @before-leave="beforeleave" @leave="leave"
          @after-leave="afterLeave" @after-leave-cancelled="afterLeaveCancelled">


          <div style="width:300px;background-color: #fbbd08; border: 1px solid #666; height: 100px;" v-if="showJS">Bu bir
            alert kutusudur</div>
        </Transition>
        <hr>
        <h3>Dinamik Componentler Arası Geçiş</h3>
        <button class="btn btn-sm btn-danger me-3" @click="activeComponent = 'appHome'">Home</button>
        <button class="btn btn-sm btn-primary" @click="activeComponent = 'appPost'">Post</button>
        <br><br>
        <transition name="fade" mode="out-in">

          <component :is="activeComponent"></component>
        </transition>
        <hr>
        <button class="btn btn-sm btn-success" @click="addNewItem">Yeni Eleman Ekle</button>
        <br><br>
        <ul class="list-group">
          <transition-group name="slide">
            <li class="list-group-item" v-for="(number,index) in numberList" :key="number" @click="removeItem(index)">Number: {{ number }}</li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false,
      showJS: false,
      activeEffect: "slide",
      elementWidth: 100,
      activeComponent:"appPost",
      numberList:[1,2,3,4,5,6]
    }
  },
  components:{
    appPost:AppPost,
    AppHome:AppHome
  },
  methods: {
    addNewItem(){
      const position = Math.floor(Math.random() * this.numberList.length)
      this.numberList.splice(position,0,this.numberList.length +1)
    },
    removeItem(index){
      this.numberList.splice(index,1)
    },
    beforeEnter(el) {
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px"
      console.log("beforeEnter")
    },
    enter(el, done) {
      console.log("enter")
      let round = 1
      var interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + "px"

        if (round > 20) {
          clearInterval(interval)
          done();
        }
        round++
      }, 50)
    },
    afterEnter(el) {
      console.log("afterEnter")

    },
    afterEnterCancelled(el) {
      console.log("afterEnterCancelled")

    },
    beforeLeave(el) {
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px"
      console.log("beforeLeave")
    },
    leave(el,done) {
      let round = 1
      var interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + "px"
        round++
        if (round > 20) {
          clearInterval(interval)
          done();
        }
      }, 50)
      console.log("leave")

    },
    afterLeave(el) {
      console.log("afterLeave")

    },
    afterLeaveCancelled(el) {
      console.log("afterLeaveCancelled")

    }
  }
}
</script>


<style scoped>
.slide-move{
  transition: transform 1s;
}

.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter-to {
  /* opacity: 1; */
}

.fade-leave-active {
  opacity: 0;
  transition: opacity 1s;
}

.slide-enter-from {
  opacity: 0;

}

.slide-enter-active {
  transition: opacity 1s;
  animation: slide-in 1s ease-out;
}

.slide-enter-to {}

.slide-leave-active {
  opacity: 0;
  /* transition: opacity 1s; */
  animation: slide-out 1s ease-out;
  position: absolute;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }

  to {
    transform: translateY(0px);

  }
}

@keyframes slide-out {
  from {
    transform: translateY(0px);
  }

  to {
    transform: translateY(20px);

  }
}
</style>
