<template>
  <v-container fluid style="padding-top: 0;">
    <ButtonRow v-for="item in properties.buttonList" :button-list="item"></ButtonRow>
    <v-row v-if="properties.footer === 'welcome'" dense justify="center">
      <v-col cols="3" class="d-flex flex-column">
        <v-card @click="OnClick('Wealth-Management')" block class="flex d-flex flex-column" style="background-color: #f8e0e0; margin: 10px;">
          <v-card-text class="flex" style="color: black;">
            <v-row justify="center" align="center" class="fill-height">
              <h2>財管客戶</h2>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3" class="d-flex flex-column">
        <v-card @click="OnClick('Pre-Filled')" block class="flex d-flex flex-column" style="background-color: #f8e0e0; margin: 10px;">
          <v-card-text class="flex" style="color: black;">
            <v-row justify="center" align="center" class="fill-height">
              <h2>預填客戶</h2>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3" class="d-flex flex-column">
        <v-card @click="OnClick('Printing-Area')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin: 10px;">
          <v-card-text class="flex" style="color: black;">
            <v-row justify="center" align="center" class="fill-height">
              <h2>列印專區</h2>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3" class="d-flex flex-column">
        <v-card block class="flex d-flex flex-column" style="background-color: #f8f8f8; height: 180px; margin: 10px;">
          <v-card-text class="flex" style="color: black;">
            <v-row justify="center" align="center" class="fill-height">
              <div>
                <v-row justify="center" style="margin-bottom: 40px;">
                  <h2>總等待人數</h2>
                </v-row>
                <v-row justify="center">
                  <h2><span style="color: crimson; font-size: 48px; font-weight: bolder">{{WaitingNumber}}</span>人</h2>
                </v-row>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="properties.footer === 'home'" dense justify="center">
      <v-col cols="2">
        <v-card @click="OnClick('Welcome')" block style="background-color: #f8f8f8;">
          <v-card-text class="flex" style="color: black; padding: 10px;">
            <v-row justify="center" align="center">
              <img src="image/home-32.png"/><h3>回首頁</h3>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import ButtonRow from "@/components/ButtonRow.vue";

  export default {
    computed: {
      WaitingNumber() {
        // invoke api to retrieve waiting number
        return window.chrome.webview.hostObjects.sync.interfaceObject.GetWaitingNumber();
      }
    },
    data () {
      return {
      }
    },
    props: {
      properties: Object
    },
    methods: {
      OnClick(name) {
        // window.chrome.webview.hostObjects.sync.interfaceObject.OnClick(name)
        Event.fire('button', {buttonName: name})
      }
    },
    components: {
      ButtonRow
    }
  }
</script>
<style scoped>
</style>
