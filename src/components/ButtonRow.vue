<template>
  <v-row dense justify="center" no-gutters>
    <v-col v-for="item in buttonList" :key="item.name" :cols="item.cols" class="d-flex flex-column">
      <v-card v-if="item.name !== ''" @click="OnClick(item.name)" block class="flex d-flex flex-column" :style="BtnStyle(item)">
        <v-card-text class="flex" style="color: black;">
          <v-row justify="center" align="center" :class="{'fill-height': !(item.img && !item.inline && !item.height)}">
            <div v-if="item.img && !item.inline">
              <v-row justify="center" style="margin-bottom: 20px;">
                <img :src="item.img"/>
              </v-row>
              <v-row justify="center">
                <h2 v-html="item.label"></h2>
              </v-row>
            </div>
            <template v-if="item.img && item.inline">
              <img :src="item.img"/><h2 v-html="item.label"></h2>
            </template>
            <h2 v-if="!item.img" v-html="item.label"></h2>
          </v-row>
        </v-card-text>
      </v-card>
      <v-card v-if="item.name == ''" block class="flex d-flex flex-column" :style="BtnStyle(item)">
        <v-card-text class="flex" style="color: black;">
          <v-row justify="center" align="center" :class="{'fill-height': !(item.img && !item.inline && !item.height)}">
            <div v-if="item.img && !item.inline">
              <v-row justify="center" style="margin-bottom: 20px;">
                <img :src="item.img"/>
              </v-row>
              <v-row justify="center">
                <h2 v-html="item.label"></h2>
              </v-row>
            </div>
            <template v-if="item.img && item.inline">
              <img :src="item.img"/><h2 v-html="item.label"></h2>
            </template>
            <h2 v-if="!item.img" v-html="item.label"></h2>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
  export default {
    data: () => ({
    }),
    props: {
      buttonList: Array
    },
    methods: {
      OnClick(name) {
        Event.fire('button', {buttonName: name})
      },
      BtnStyle(item) {
        return item.height ?
            { 'background-color': item.color ? item.color : '#f8f8f8', height: item.height + 'px', margin: '10px' } :
            { 'background-color': item.color ? item.color : '#f8f8f8', margin: '10px' }
      }
    },
    components: {
    }
  }
</script>
<style scoped>
</style>
