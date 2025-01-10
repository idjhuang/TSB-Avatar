window.GlobalConfig = {
  apiUrl: 'http://' + window.location.hostname + ':8082/api',
  //npm run serve
  //apiUrl: 'http://localhost:16800/api',
  stateDefinition: {
    'Standby': {
      videoName: 'Standby',
      title: '請點選您今天要辦理的交易',
      componentName: 'ButtonPanel',
      componentProperties: {
        buttonList: [
          [
            {name: 'NTD-Trading', cols: 3, label: '臺幣交易', img: 'image/ntd-trading.png', height: 230},
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
        footer: 'Welcome'
      },
      buttonProc: (data) => {
        /* proc for input button
        if (data.buttonName === 'input') {
          console.log(data.input)
        }
        */
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Welcome': {
      videoName: '歡迎光臨',
      title: '請點選您今天要辦理的交易',
      componentName: 'ButtonPanel',
      componentProperties: {
        buttonList: [
          [
            {name: 'NTD-Trading', cols: 3, label: '臺幣交易', img: 'image/ntd-trading.png', height: 230},
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
        footer: 'Welcome'
      },
      buttonProc: (data) => {
        /* proc for input button
        if (data.buttonName === 'input') {
          console.log(data.input)
        }
        */
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'NTD-Trading': {
      videoName: 'Standby',
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
        footer: 'Welcome'
      },
      buttonProc: (data) => {
        if (data.buttonName !== 'Cash-Transaction') {
          // invoke 取號 臺幣交易
        }
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Cash-Transaction': {
      videoName: '現金交易是否超過三萬',
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
        footer: 'Welcome'
      },
      buttonProc: (data) => {
        if (data.buttonName === 'Rules-Above') {
          // invoke 取號 臺幣交易
        }
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Rules-Above': {
      videoName: '已為您取號-掃描QRCode',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
      {
        transaction: '臺幣交易',
        number: '1001',
        qrcode: true
      },
      footer: 'Welcome',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Rules-Below': {
      videoName: '至ATM操作',
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
              {name: 'Still-Take-Number-Cash', cols: 6, label: '仍要取號'}
            ]
          ],
        },
      buttonProc: (data) => {
        if (data.buttonName === 'Still-Take-Number-Cash') {
          // invoke 取號 臺幣交易
        }
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Still-Take-Number-Cash': {
      videoName: '已為您取號-掃描QRCode',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
        {
          transaction: '臺幣交易',
          number: '1001',
          qrcode: true
        },
      footer: 'Welcome',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Transfer-Transaction': {
      videoName: '已為您取號-掃描QRCode',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
        {
          transaction: '臺幣交易',
          number: '1001',
          qrcode: true
        },
      footer: 'Welcome',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Exchange-for-Coins': {
      videoName: '已為您取號-掃描QRCode',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
        {
          transaction: '臺幣交易',
          number: '1001',
          qrcode: true
        },
      footer: 'Welcome',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Passbook-Reissue': {
      videoName: '已為您取號',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
        {
          transaction: '臺幣交易',
          number: '1001',
          qrcode: false
        },
      footer: 'Welcome',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Deposit': {
      videoName: '已為您取號-掃描QRCode',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
        {
          transaction: '臺幣交易',
          number: '1001',
          qrcode: true
        },
      footer: 'Welcome',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Other-NTD-Trading': {
      videoName: '已為您取號-掃描QRCode',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
        {
          transaction: '臺幣交易',
          number: '1001',
          qrcode: true
        },
      footer: 'Welcome',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Foreign-Trading': {
      videoName: '已為您取號-掃描QRCode',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
        {
          transaction: '臺幣交易',
          number: '1001',
          qrcode: true
        },
      footer: 'Welcome',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Open-Account': {
      videoName: '已為您取號-掃描QRCode',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
        {
          transaction: '臺幣交易',
          number: '1001',
          qrcode: true
        },
      footer: 'Welcome',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Richart': {
      videoName: '已為您取號',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
        {
          transaction: '臺幣交易',
          number: '1001',
          qrcode: false
        },
      footer: 'Welcome',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Payment': {
      videoName: '已為您取號',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
        {
          transaction: '臺幣交易',
          number: '1001',
          qrcode: false
        },
      footer: 'Welcome',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Financial': {
      videoName: '已為您取號',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
        {
          transaction: '臺幣交易',
          number: '1001',
          qrcode: false
        },
      footer: 'Welcome',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Priority-Service': {
      videoName: '已為您取號',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
        {
          transaction: '臺幣交易',
          number: '1001',
          qrcode: false
        },
      footer: 'Welcome',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Application': {
      videoName: '申請項目',
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
        footer: 'Welcome'
      },
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    '': {
      videoName: '',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    '': {
      videoName: '',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    '': {
      videoName: '',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    '': {
      videoName: '',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    '': {
      videoName: '',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    '': {
      videoName: '',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    '': {
      videoName: '',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    '': {
      videoName: '',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    '': {
      videoName: '',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    '': {
      videoName: '',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    '': {
      videoName: '',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    '': {
      videoName: '',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    }
  }
}
