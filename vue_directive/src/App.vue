<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1>VueJs ile Gelen Directive Tanımları</h1>
        <p v-text="'Deneme Yanılma Methodu Her Zaman İyidir'"></p>
        <p v-html="'<strong>Bu v-html directive</strong>'"></p>

      </div>

    </div>
    <hr>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h1>Costume Directive</h1>
        <p v-color:background.delay.flash="{ mainColor: 'green', secondColor: 'blue', delay: 500 }">Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatem
          quidem
          impedit repellat reiciendis accusantium? Molestiae ad labore facere ab saepe accusantium, velit corrupti non
          tenetur aspernatur error assumenda ratione pariatur!</p>
        <p v-color="'red'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quidem impedit
          repellat
          reiciendis accusantium? Molestiae ad labore facere ab saepe accusantium, velit corrupti non tenetur aspernatur
          error assumenda ratione pariatur!</p>
        <p v-color="'yellow'">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quidem impedit repellat
          reiciendis accusantium? Molestiae ad labore facere ab saepe accusantium, velit corrupti non tenetur aspernatur
          error assumenda ratione pariatur!</p>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  directives: {
    "color": {
      mounted(el, bind, vnode) {
        let delay = 0
        if (bind.modifiers["delay"]) {
          delay = bind.value.delay
        }

        if (bind.modifiers["flash"]) {
          let firstColor = bind.value.mainColor
          let secondColor = bind.value.secondColor
          let currentColor = firstColor
          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor ? currentColor = firstColor : currentColor = secondColor
              if (bind.arg == "background") {
                el.style.backgroundColor = currentColor
              } else {
                el.style.color = currentColor
              }
            }, 1000)
          }, delay)
        } else {
          setTimeout(() => {
            if (bind.arg == "background") {
              el.style.backgroundColor = bind.value
            } else {

              el.style.color = bind.value
            }
          }, delay)
        }



      }
    }
  }
}
</script>

<style scoped></style>
