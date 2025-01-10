<template>
  <v-container fluid>
    <div class="video_container" @click="PlayStandbyVideo">
      <div class="video">
        <video id="standbyVideo" width="100%">
          <source src="video/Standby.mp4" type="video/mp4"/>
        </video>
        <video id="video" width="100%" style="display: none">
          <source src="video/Standby.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
    <v-row justify="center" style="margin-top: 20px;">
      <h1 v-html="title"></h1>
      <!--v-select v-model="selectedVideo" :items="videoList" @change="PlayVideo"></v-select-->
      <v-btn @click="TestVideo()">Play</v-btn>
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
      // ----- for test -----
      videoList: [
        '歡迎光臨',
        '台幣交易項目',
        '交易金額是否超過三萬',
        '至ATM操作',
        '已為您取號',
        '已為您取號-掃描QRCode',
        '掃描預填單',
        '網路銀行',
        '輸入或刷卡',
        '歡迎VIP',
        '列印項目',
        '列印台幣利率',
        '列印外幣利率',
        '列印外幣匯率',
        '列印黃金牌告'
      ],
      videoIndex: 0,
      // ----- for test -----
      standbyVideo: null,
      video: null,
      buttonProc: null,
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

      /* NTD-Trading *
      title: '請點選您今天要辦理的<span class="red-font">臺幣交易項目</span>',
      componentName: 'ButtonPanel',
      componentProperties:
      {
        buttonList: [
          [
            {name: 'Cash-Transaction', cols: 6, label: '現金交易(存款/提款/匯款)', img: 'image/cash.png', height: 400},
            {name: 'Transfer-Transaction', cols: 6, label: '轉帳/跨行匯款', img: 'image/transfer.png', height: 400}
          ],
          [
            {name: 'Exchange-for-Coins', cols: 3, label: '現金兌換零錢', img: 'image/exchange.png', height: 230},
            {name: 'Passbook-Reissue', cols: 3, label: '換發存摺', img: 'image/passbook.png', height: 230},
            {name: 'Deposit', cols: 3, label: '定存', img: 'image/deposit.png', height: 230},
            {name: 'Other-NTD-Trading', cols: 3, label: '其他臺幣交易', img: 'image/bank.png', height: 230}
          ]
        ],
        footer: 'home'
      }
      */
      /* Cash-Transaction
      title: '交易金額是否<span class="red-font">超過臺幣三萬元</span>?',
      componentName: 'ButtonPanel',
      componentProperties:
      {
        buttonList: [
          [
            {name: 'Rules-Above', cols: 6, label: '是，三萬以上', img: 'image/up.png', height: 450},
            {name: 'Rules-Below', cols: 6, label: '否，三萬以下', img: 'image/down.png', height: 450}
          ]
        ],
        footer: 'home'
      }

      /* Rules-Below
      title: '可以用ATM操作處理，不須抽號等待',
      componentName: 'ButtonPanel',
      componentProperties:
      {
        buttonList: [
          [
            {name: '', cols: 6, label: '', img: 'image/atm.jpg', inline: true, height: 510},
          ],
          [
            {name: 'Welcome', cols: 6, label: '<span class="white-font">了解</span>', img: 'image/check.png', color: 'crimson', inline: true}
          ],
          [
            {name: 'Still-Take-Number- Cash', cols: 6, label: '仍要取號'}
          ]
        ],
      }
      */

      /* Ticket /
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
      {
        transaction: '台幣交易',
        number: '1001',
        qrcode: false
      },
      footer: 'home'
      /**/
      /* Application /
      title: '請點選您今天要辦理的<span class="red-font">申請項目</span>',
      componentName: 'ButtonPanel',
      componentProperties:
      {
        buttonList: [
          [
            {name: 'Transfer-Account', cols: 4, label: '約定轉帳帳號', img: 'image/account.png', height: 320},
            {name: 'Lost-Reissue', cols: 4, label: '遺失補發金融卡/存摺', img: 'image/bank-card.png', height: 320},
            {name: 'Internet-Banking', cols: 4, label: '網路銀行相關', img: 'image/net-banking.png', height: 320}
          ],
          [
            {name: 'Passbook-Reissue', cols: 4, label: '換發存摺', img: 'image/passbook.png', height: 320},
            {name: 'EasyCard-Refund', cols: 4, label: '悠遊卡退費', img: 'image/refund.png', height: 320},
            {name: 'Other-Applications', cols: 4, label: '其他各項申請', img: 'image/bank.png', height: 230}
          ]
        ],
        footer: 'home'
      }
      */
      /* Internet-Banking /
      title: '是否曾登入使用過網路銀行？',
      componentName: 'ButtonPanel',
      componentProperties:
      {
        buttonList: [
          [
            {name: 'Have-Used-Internet', cols: 6, label: '是，我曾登入使用', img: 'image/yes.png', height: 450},
            {name: 'Unused-Internet', cols: 6, label: '否，我沒登入過', img: 'image/no.png', height: 450}
          ]
        ],
        footer: 'home'
      }
      */
      /* Keyboard /
      title: '預填客戶',
      componentName: 'Keyboard',
      componentProperties:
      {
        keyboardHint: '使用螢幕鍵盤輸入身分證號/存款帳號',
        image: 'image/passbook-reader.jpg',
        readerHint: '刷存摺或金融卡'
      },
      footer: 'home'
      */

      /* Wealth-Management-OK /
      title: '請點選您今天要辦理的交易',
      componentName: 'ButtonPanel',
      componentProperties:
      {
        buttonList: [
          [
            {name: 'TWD-Trading', cols: 4, label: '臺幣交易', img: 'image/ntd-trading.png', height: 320},
            {name: 'Foreign-Trading', cols: 4, label: '外幣交易', img: 'image/foreign-trading.png', height: 320},
            {name: 'Open-Account', cols: 4, label: '開戶服務', img: 'image/open-account.png', height: 320},
          ],
          [
            {name: 'Payment', cols: 4, label: '繳費服務', img: 'image/payment.png', height: 320},
            {name: 'Application', cols: 4, label: '各項申請', img: 'image/application.png', height: 320},
            {name: 'Financial', cols: 4, label: '理財諮詢', img: 'image/financial.png', height: 320},
          ]
        ],
        footer: 'home'
      }
      */
      /* Printing-Area /
      title: '請點選您需要列印的項目</span>',
      componentName: 'ButtonPanel',
      componentProperties:
      {
        buttonList: [
          [
            {name: 'NTD-Rate', cols: 4, label: '臺幣利率', img: 'image/ntd-rate.png', height: 320},
            {name: 'Foreign-Rate', cols: 4, label: '外幣利率', img: 'image/foreign-rate.png', height: 320}
          ],
          [
            {name: 'Foreign-Exchange-Rate', cols: 4, label: '外幣匯率', img: 'image/exchange-rate.png', height: 320},
            {name: 'Gold-Price', cols: 4, label: '黃金牌告', img: 'image/gold.png', height: 320}
          ]
        ],
        footer: 'home'
      }

      /* NTD-Rate /
      title: '已列印黃金牌告',
      componentName: 'ButtonPanel',
      componentProperties:
      {
        buttonList: [
          [
            {name: '', cols: 8, label: '', img: 'image/thermal-printer.jpg', inline: true},
          ]
        ],
        footer: 'home'
      }
      */
    }),
    beforeDestroy() {
      Event.remove('state')
      Event.remove('button')
    },
    created() {
      Event.listen('state', this.State)
      Event.listen('button', this.OnButton)
      // add reference to root
      this.$root.home = this
    },
    mounted() {
      this.standbyVideo = window.document.getElementById('standbyVideo')
      this.video = window.document.getElementById('video')
      this.video.onplaying = this.OnVideoPlaying
      this.video.onended = this.OnVideoEnded
    },
    methods: {
      State(stateName) {
        const state = window.stateDefinition[stateName]
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
        this.standbyVideo.play()
        this.video.style.display = 'none'
        this.standbyVideo.style.display = 'block'
      },
      PlayVideo(video) {
        this.video.src = `video/${video}.mp4`
        this.video.play()
      },
      OnButton(buttonName) {
        console.log(`Button: ${buttonName}`)
      },
      TestVideo() {
        this.video.src = `video/${this.videoList[this.videoIndex]}.mp4`
        this.video.play()
        this.videoIndex++
        if (this.videoIndex > 14) this.videoIndex = 0
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
