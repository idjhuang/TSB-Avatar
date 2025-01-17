<template>
  <v-container fluid style="padding-top: 0;">
    <v-row v-if="!keyboard" dense justify="center">
      <v-col cols="8" class="d-flex flex-column">
        <v-card @click="OpenKeyPanel" block class="flex d-flex flex-column" style="background-color: #f8f8f8;">
          <v-card-text class="flex" style="color: black;">
            <v-row align="center" justify="center">
              <h2>{{properties.keyboardHint}}</h2>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="!keyboard" dense justify="center">
      <v-col cols="8" class="d-flex flex-column">
        <v-card block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin: 10px;">
          <v-card-text class="flex" style="color: black;">
            <v-row justify="center" align="center" class="fill-height">
              <div>
                <v-row justify="center" style="margin-bottom: 30px;">
                  <img :src="properties.image">
                </v-row>
                <v-row justify="center" align="center">
                  <h2>{{ properties.readerHint }}</h2>
                </v-row>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="keyboard" dense justify="center" align="center">
      <v-col cols="7">
        <v-card block class="flex d-flex flex-column" style="background-color: #f0f0f0; height: 80px;">
          <v-card-text class="flex" style="color: black;">
            <v-row justify="start" align="center" class="fill-height">
              <span style="padding-left: 20px; font-size: 36px;">{{ input }}</span>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="1">
        <v-card @click="BackSpace" block class="flex d-flex flex-column" style="background-color: #f8f8f8; height: 80px;">
          <v-card-text class="flex" style="color: black; padding: 10px;">
            <v-row justify="center" align="center">
              <img src="image/backspace.png"></img>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="1">
        <v-card @click="Clear" block class="flex d-flex flex-column" style="background-color: #f8f8f8; height: 80px;">
          <v-card-text class="flex" style="color: black;">
            <v-row justify="center" align="center" class="fill-height">
              <h2>清除</h2>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="1">
        <v-card @click="Done" block class="flex d-flex flex-column" style="background-color: #f8f8f8; height: 80px;">
          <v-card-text class="flex" style="color: black;">
            <v-row justify="center" align="center" class="fill-height">
              <h2>完成</h2>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="keyboard" dense no-gutters justify="center" align="center">
      <v-col cols="10" class="d-flex flex-column">
        <v-row dense no-gutters justify="center" align="center">
          <v-col cols="2">
            <v-card @click="Press('1')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>1</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('2')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>2</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('3')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>3</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('4')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>4</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('5')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>5</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('6')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>6</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense no-gutters justify="center" align="center">
          <v-col cols="2">
            <v-card @click="Press('7')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>7</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('8')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>8</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('9')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>9</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('0')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>0</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('A')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>A</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('B')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>B</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense no-gutters justify="center" align="center">
          <v-col cols="2">
            <v-card @click="Press('C')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>C</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('D')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>D</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('E')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>E</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('F')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>F</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('G')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>G</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('H')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>H</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense no-gutters justify="center" align="center">
          <v-col cols="2">
            <v-card @click="Press('I')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>I</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('J')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>J</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('K')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>K</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('L')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>L</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('M')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>M</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('N')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>N</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense no-gutters justify="center" align="center">
          <v-col cols="2">
            <v-card @click="Press('O')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>O</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('P')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>P</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('Q')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>Q</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('R')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>R</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('S')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>S</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('T')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>T</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row dense no-gutters justify="center" align="center">
          <v-col cols="2">
            <v-card @click="Press('U')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>U</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('V')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>V</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('W')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>W</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('X')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>X</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('Y')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>Y</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="2">
            <v-card @click="Press('Z')" block class="flex d-flex flex-column" style="background-color: #f8f8f8; margin:5px; height: 80px;">
              <v-card-text class="flex" style="color: black;">
                <v-row justify="center" align="center" class="fill-height">
                  <h1>Z</h1>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
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
  export default {
    data () {
      return {
        keyboard: false,
        input: ''
      }
    },
    props: {
      properties: Object
    },
    methods: {
      OpenKeyPanel() {
        this.keyboard = true
      },
      Press(text) {
        this.input += text
      },
      BackSpace() {
        this.input = this.input.substring(0, this.input.length - 1)
      },
      Clear() {
        this.input = ''
      },
      Done() {
        this.keyboard = false
        // window.chrome.webview.hostObjects.sync.interfaceObject.OnInput(this.input)
        Event.fire('button', {buttonName: 'Input', input: this.input})
      },
      OnClick(name) {
        // window.chrome.webview.hostObjects.sync.interfaceObject.OnClick(name)
        Event.fire('button', {buttonName: name})
      }
    },
    components: {
    }
  }
</script>
<style scoped>
</style>
