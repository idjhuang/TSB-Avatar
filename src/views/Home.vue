<template>
  <v-container fluid>
    <div :style="{height: `${containerHeight}px`, 'background-color': 'black'}" @click="PlayStandbyVideo">
      <div :style="{ 'height': `${videoHeight}px`, 'background-color': 'black', 'overflow': 'hidden', 'position': 'absolute', 'top': `${videoOffsetY}px`, 'left': `${videoOffsetX}px` }">
        <video id="standbyVideo" width="100%">
          <source src="video/Standby.mp4" type="video/mp4"/>
        </video>
        <video id="video" width="100%" style="display: none">
          <source src="video/Standby.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
    <v-row justify="center" :style="{'margin-top': `${titleMarginTop}px`}">
      <span v-html="title" :style="{'font-size': `${titleSize}px`, 'font-weight': '900'}"></span>
    </v-row>
    <component :is="componentName" :properties="componentProperties"></component>
  </v-container>
</template>
<script>
  import ButtonPanel from "@/components/ButtonPanel.vue";
  import TicketPanel from "@/components/TicketPanel.vue";
  import Keyboard from "@/components/Keyboard.vue";

  export default {
    name: 'Home',
    components: {
      ButtonPanel, TicketPanel, Keyboard
    },
    data: () => ({
      sizeRatio: 1,
      standbyVideo: null,
      video: null,
      isVideoPlaying: false,
      buttonProc: null,
      serviceName: '',
      ticketNumber: '',
      /* Welcom */
      title: '請點選您今天要辦理的交易',
      componentName: 'ButtonPanel',
      componentProperties:
      {
        buttonList: [
          [
            {name: 'TWD-Trading', cols: 3, label: '臺幣交易', img: 'image/ntd-trading.png', height: 230},
            {name: 'Foreign-Trading', cols: 3, label: '外幣交易', img: 'image/foreign-trading.png', height: 230},
            {name: 'Open-Account', cols: 3, label: '開戶服務', img: 'image/open-account.png', height: 230},
            {name: 'Richart', cols: 3, label: 'Richart服務', img: 'image/richart.png', height: 230}
          ],
          [
            {name: 'Payment', cols: 3, label: '繳費服務', img: 'image/payment.png', height: 230},
            {name: 'Application', cols: 3, label: '各項申請', img: 'image/application.png', height: 230},
            {name: 'Financial', cols: 3, label: '理財諮詢', img: 'image/financial.png', height: 230},
            {name: 'Priority-Service', cols: 3, label: '友善優先服務', img: 'image/priority.png', height: 230}
          ]
        ],
        footer: 'welcome'
      }
    }),
    computed: {
      containerHeight() {
        return Math.round(this.sizeRatio * 1085)
      },
      videoHeight() {
        return Math.round(this.sizeRatio * 1490)
      },
      videoOffsetY() {
        return Math.round(this.sizeRatio * -392)
      },
      videoOffsetX() {
        return Math.round(this.sizeRatio * 0)
      },
      titleSize() {
        return Math.round(this.sizeRatio * 32)
      },
      titleMarginTop() {
        return Math.round(this.sizeRatio * 10)
      }
    },
    beforeDestroy() {
      Event.remove('state')
      Event.remove('button')
      Event.remove('ticket')
      Event.remove('input')
      Event.remove('print')
    },
    created() {
      Event.listen('state', this.State)
      Event.listen('button', this.OnButton)
      Event.listen('ticket', this.TakeTicket)
      Event.listen('input', this.InputProcess)
      Event.listen('print', this.PrintProcess)
      // add reference to root
      this.$root.home = this
    },
    mounted() {
      this.sizeRatio = window.innerWidth / 1080.0
      this.standbyVideo = window.document.getElementById('standbyVideo')
      this.video = window.document.getElementById('video')
      this.video.onplaying = this.OnVideoPlaying
      this.video.onended = this.OnVideoEnded
      this.State('Standby')
    },
    methods: {
      State(stateName) {
        console.log('stateName', stateName)
        const state = window.GlobalConfig.stateDefinition[stateName]
        this.buttonProc = state.buttonProc
        this.title = state.title
        this.componentName = state.componentName
        this.componentProperties = state.componentProperties
        this.PlayVideo(state.videoName)
      },
      PlayStandbyVideo() {
        this.standbyVideo.loop = true
        this.standbyVideo.play()
      },
      OnVideoPlaying() {
        this.standbyVideo.pause()
        this.standbyVideo.style.display = 'none'
        this.video.style.display = 'block'
        this.standbyVideo.currentTime = 0
      },
      OnVideoEnded() {
        this.isVideoPlaying = false
        this.standbyVideo.loop = true
        this.standbyVideo.play()
        this.video.style.display = 'none'
        this.standbyVideo.style.display = 'block'
      },
      PlayVideo(video) {
        if (this.isVideoPlaying) {
          this.standbyVideo.play()
          this.video.style.display = 'none'
          this.standbyVideo.style.display = 'block'
        }
        this.video.src = `video/${video}.mp4`
        this.isVideoPlaying = true
        this.video.play()
      },
      OnButton(data) {
        console.log(`Button: ${data.buttonName}`)
        this.buttonProc(data)
      },
      TakeTicket(serviceId) {
        console.log('TakeTicket', serviceId)
        this.ticketNumber = window.chrome.webview.hostObjects.sync.interfaceObject.TakeTicket(serviceId, false)
        // invoke 取號, 傳回值為取號單號碼, 存入 this.ticketNumber
        switch (serviceId) {
          case 'S001':
            this.serviceName = '臺幣交易'
            // this.ticketNumber = '1001'
            break
          case 'S002':
            this.serviceName = '各項申請'
            // this.ticketNumber = '1201'
            break
          case 'S003':
            this.serviceName = '開戶服務'
            // this.ticketNumber = '1301'
            break
          case 'S004':
            this.serviceName = '繳費服務'
            // this.ticketNumber = '1401'
            break
          case 'S005':
            this.serviceName = '外幣交易'
            // this.ticketNumber = '1501'
            break
          case 'S006':
            this.serviceName = '理財諮詢'
            // this.ticketNumber = '1601'
            break
          case 'S007':
            this.serviceName = 'Richart服務'
            // this.ticketNumber = '1701'
            break
          case 'S008':
            this.serviceName = '友善優先服務'
            // this.ticketNumber = '1801'
            break
        }
      },
      InputProcess(data) {
        // invoke 輸入資料/刷卡
        console.log(`Input: ${data.input}`)
        window.chrome.webview.hostObjects.sync.interfaceObject.Input(data.input)
        // 若身分資料正確, 轉換到對應的state
        this.State(data.state)
      },
      PrintProcess(data) {
        // invoke 列印
        console.log(`Print: ${data}`)
        window.chrome.webview.hostObjects.sync.interfaceObject.Print(data)
        // 列印完成, 轉換到對應的state
        this.State(data)
      },
      Print() {
        window.print()
      }
    }
  }
</script>
<style>
    ::-webkit-scrollbar {
        display: none;
    }
    body {
      background-color: #eeeeee;
    }
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 28px;
    }
    h3 {
      font-size: 20px;
    }
    .button{
      margin: 20px;
      background-color: #f8f8f8;
    }
    .red-font {
      color: crimson;
    }
    .white-font {
      color: white;
    }
    .v-menu {
        display: block;
    }
    .video_container {
      height: 1110px;
    }
    .video {
      height: 1490px;
      background-color: black;
      overflow: hidden;
      position: absolute;
      top: -380px;
    }
</style>
