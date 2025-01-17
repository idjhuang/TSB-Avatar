<template>
  <v-container fluid style="padding-top: 0;">
    <v-row dense justify="center">
      <v-col cols="6" class="d-flex flex-column">
        <v-card block class="flex d-flex flex-column" style="background-color: #f8f8f8; height: 640px; margin: 10px;">
          <v-card-text class="flex" style="color: black;">
            <v-row justify="center" align="center" class="fill-height">
              <div>
                <v-row justify="center" align="center" style="height: 100px;">
                  <span style="font-size: 48px; font-weight: bold">{{ ServiceName }}</span>
                </v-row>
                <v-row justify="center" align="center" style="height: 100px;">
                  <span style="font-size: 80px; font-weight: bold">{{ TicketNumber }}</span>
                </v-row>
                <v-row justify="center" align="center">
                  <img src="image/ticket-200.png"/>
                </v-row>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col v-if="properties.qrcode" cols="6" class="d-flex flex-column">
        <v-card block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin: 10px;">
          <v-card-text class="flex" style="color: black;">
            <v-row justify="center" align="center" class="fill-height">
              <div>
                <v-row justify="center" style="margin-bottom: 30px;">
                  <img src="image/qr-code.png">
                </v-row>
                <v-row justify="center" align="center" style="height: 40px;">
                  <h2 style="color: crimson;">手機掃描QR Code進行交易預填</h2>
                </v-row>
                <v-row justify="center" align="center" style="height: 40px;">
                  <h2 style="color: crimson;">可縮短臨櫃交易時間</h2>
                </v-row>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense justify="center">
      <v-col cols="2">
        <v-card @click="OnClick('Welcome')" block style="background-color: #f8f8f8">
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
      ServiceName() {
        return this.$root.home.serviceName
      },
      TicketNumber() {
        return this.$root.home.ticketNumber
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
