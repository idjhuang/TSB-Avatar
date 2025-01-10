<template>
  <v-app ref="app">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  data: () => ({
  }),
  mounted() {
    window.addEventListener("click", this.clickListen); //全局监听事件
  },
  methods: {
    clickListen(e){
      /*console.log(e.target.innerText);
      if(e.target.className=="v-btn__content" || e.target.className=="v-list-item__title" ||e.target.className=="v-chip__content"){
        console.log(e.target.innerText)
        this.$recordtrack.record(this,'A',e.target.innerText,'','');
      }*/
    }
  }
};
</script>
<style>
 #app {
     background: transparent;
     background-color: transparent;
 }
</style>
