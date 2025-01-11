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
        footer: 'welcome'
      },
      buttonProc: (data) => {
        switch (data.buttonName) {
          case 'Foreign-Trading':
            // invoke 取號 外幣交易
            Event.fire('ticket', 'S005')
            break
          case 'Open-Account':
            // invoke 取號 開戶服務
            Event.fire('ticket', 'S003')
            break
          case 'Richart':
            // invoke 取號 Richart服務
            Event.fire('ticket', 'S007')
            break
          case 'Payment':
            // invoke 取號 繳費服務
            Event.fire('ticket', 'S004')
            break
          case 'Financial':
            // invoke 取號 理財諮詢
            Event.fire('ticket', 'S006')
            break
          case 'Priority-Service':
            // invoke 取號 友善優先服務
            Event.fire('ticket', 'S008')
            break
        }
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
        footer: 'welcome'
      },
      buttonProc: (data) => {
        switch (data.buttonName) {
          case 'Foreign-Trading':
            // invoke 取號 外幣交易
            Event.fire('ticket', 'S005')
            break
          case 'Open-Account':
            // invoke 取號 開戶服務
            Event.fire('ticket', 'S003')
            break
          case 'Richart':
            // invoke 取號 Richart服務
            Event.fire('ticket', 'S007')
            break
          case 'Payment':
            // invoke 取號 繳費服務
            Event.fire('ticket', 'S004')
            break
          case 'Financial':
            // invoke 取號 理財諮詢
            Event.fire('ticket', 'S006')
            break
          case 'Priority-Service':
            // invoke 取號 友善優先服務
            Event.fire('ticket', 'S008')
            break
        }
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'NTD-Trading': {
      videoName: '台幣交易項目',
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
      videoName: '交易金額是否超過三萬',
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
      },
      buttonProc: (data) => {
        if (data.buttonName === 'Rules-Above') {
          // invoke 取號 臺幣交易
          Event.fire('ticket', 'S001')
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
      footer: 'home',
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
          Event.fire('ticket', 'S004')
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
      footer: 'home',
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
      footer: 'home',
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
      footer: 'home',
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
      footer: 'home',
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
      footer: 'home',
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
      footer: 'home',
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
          transaction: '外幣交易',
          number: '1001',
          qrcode: true
        },
      footer: 'home',
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
          transaction: '開戶服務',
          number: '1001',
          qrcode: true
        },
      footer: 'home',
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
          transaction: 'Richart服務',
          number: '1001',
          qrcode: false
        },
      footer: 'home',
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
          transaction: '繳費服務',
          number: '1001',
          qrcode: false
        },
      footer: 'home',
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
          transaction: '理財諮詢',
          number: '1001',
          qrcode: false
        },
      footer: 'home',
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
          transaction: '友善優先服務',
          number: '1001',
          qrcode: false
        },
      footer: 'home',
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
        footer: 'home'
      },
      buttonProc: (data) => {
        if (data.buttonName !== 'Internet-Banking') {
          // invoke 取號 各項申請
          Event.fire('ticket', 'S002')
        }
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Transfer-Account': {
      videoName: '已為您取號-掃描QRCode',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
        {
          transaction: '各項申請',
          number: '1001',
          qrcode: true
        },
      footer: 'home',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Lost-Reissue': {
      videoName: '已為您取號',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
        {
          transaction: '各項申請',
          number: '1001',
          qrcode: false
        },
      footer: 'home',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'EasyCard-Refund': {
      videoName: '已為您取號',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
        {
          transaction: '各項申請',
          number: '1001',
          qrcode: false
        },
      footer: 'home',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Other-Applications': {
      videoName: '已為您取號',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
        {
          transaction: '各項申請',
          number: '1001',
          qrcode: false
        },
      footer: 'home',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Internet-Banking': {
      videoName: '網路銀行',
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
      },
      buttonProc: (data) => {
        if (data.buttonName !== 'Unused-Internet') {
          Event.fire('ticket', 'S002')
        }
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Have-Used-Internet': {
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
            {name: 'Still-Take-Number-Internet', cols: 6, label: '仍要取號'}
          ]
        ],
      },
      buttonProc: (data) => {
        if (data.buttonName !== 'Still-Take-Number-Internet') {
          Event.fire('ticket', 'S002')
        }
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Still-Take-Number-Internet': {
      videoName: '已為您取號',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
      {
        transaction: '各項申請',
        number: '1001',
        qrcode: false
      },
      footer: 'home',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Wealth-Management': {
      videoName: '輸入或刷卡',
      title: '財富管理客戶',
      componentName: 'Keyboard',
      componentProperties:
      {
        keyboardHint: '使用螢幕鍵盤輸入身分證號/存款帳號',
        image: 'image/passbook-reader.jpg',
        readerHint: '刷存摺或金融卡'
      },
      footer: 'home',
      buttonProc: (data) => {
        switch (data.buttonName) {
          case 'Welcome':
            Event.fire('state', 'Welcome')
            break
          case 'Input':
            Event.fire('input', {input: data.input, state: 'Wealth-Management-OK'})
            break
        }
      }
    },
    'Wealth-Management-OK': {
      videoName: '歡迎VIP',
      title: '請點選您今天要辦理的交易',
      componentName: 'ButtonPanel',
      componentProperties:
      {
        buttonList: [
          [
            {name: 'NTD-Trading', cols: 4, label: '臺幣交易', img: 'image/ntd-trading.png', height: 320},
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
      },
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Pre-Filled': {
      videoName: '掃描預填單',
      title: '預填客戶',
      componentName: 'Keyboard',
      componentProperties:
      {
        keyboardHint: '使用螢幕鍵盤輸入手機號/預填單號',
        image: 'image/qrcode-reader.jpg',
        readerHint: '掃描預填單QR Code'
      },
      footer: 'home',
      buttonProc: (data) => {
        switch (data.buttonName) {
          case 'Welcome':
            Event.fire('state', 'Welcome')
            break
          case 'Input':
            Event.fire('input', {input: data.input, state: 'Pre-Filled-OK'})
            break
        }
      }
    },
    'Pre-Filled-OK': {
      videoName: '已為您取號',
      title: '請抽取號碼牌',
      componentName: 'TicketPanel',
      componentProperties:
      {
        transaction: '各項申請',
        number: '1001',
        qrcode: false
      },
      footer: 'home',
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Printing-Area': {
      videoName: '列印項目',
      title: '請點選您需要列印的項目',
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
      },
      buttonProc: (data) => {
        Event.fire('print', data.buttonName)
      }
    },
    'NTD-Rate': {
      videoName: '列印台幣利率',
      title: '已列印臺幣利率',
      componentName: 'ButtonPanel',
      componentProperties:
      {
        buttonList: [
          [
            {name: '', cols: 8, label: '', img: 'image/thermal-printer.jpg', inline: true},
          ]
        ],
        footer: 'home'
      },
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Foreign-Rate': {
      videoName: '列印外幣利率',
      title: '已列印外幣利率',
      componentName: 'ButtonPanel',
      componentProperties:
      {
        buttonList: [
          [
            {name: '', cols: 8, label: '', img: 'image/thermal-printer.jpg', inline: true},
          ]
        ],
        footer: 'home'
      },
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Foreign-Exchange-Rate': {
      videoName: '列印外幣匯率',
      title: '已列印外幣匯率',
      componentName: 'ButtonPanel',
      componentProperties:
        {
          buttonList: [
            [
              {name: '', cols: 8, label: '', img: 'image/thermal-printer.jpg', inline: true},
            ]
          ],
          footer: 'home'
        },
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    },
    'Gold-Price': {
      videoName: '列印黃金牌告',
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
      },
      buttonProc: (data) => {
        // default move to state
        Event.fire('state', data.buttonName)
      }
    }
  }
}
