<template>
  <div class=pageSet>
    <div class='panelArea'>
        <div class = 'message'>
        <h1>Real reviews that help you choose</h1>
        <h2>Over 600,000 reviews of recruit agents.</h2>
        </div>
        <div class = 'search_panel'>
             <ul class="search_filter">
                <li><a href="">Agents</a></li>
                <li><a href="">Agency</a></li>
            </ul>
        <div class="search_form">
            <form id="form1" v-on:submit.prevent="submit">
            <input id="sbox" name="s" type="text" placeholder="Search for agent by name" v-model="formData.text"/>
            <input id="sbtn" type="submit" value="検索">
            </form>
        </div>
        </div>
        <div class="hit_number">検索結果 {{ results.length }}件</div>
    </div>
    <div class=home>
        <div class=homeLeftArea>{{ allData }}</div>
        <div class=homeRightArea>
        <div class="hit_result">
        <div v-if="seen">
        <table>
            <tbody class=sample>
                <tr v-for="result in results" v-bind:key="result.id" @click="select(result)" class="a" v-bind:style="{backgroundColor:fontColor(result.opinion)}">
                    <td><p>{{ result.id }} {{ result.issue_date }}</p>
                        <p>{{ result.sector }} {{ result.stock_code }} {{ result.stock_name }}</p>
                        <p>{{ result.opinion_object }} {{ result.opinion }}</p>
                        <p>{{ result.basis }}</p>
                    </td>
                </tr>
            </tbody>
            </table>
        </div> <!--v-if="seen"-->
        </div> <!-- class="hit_result"-->
        </div> <!--class=homeLeftArea -->
        {{ have }}
    </div> <!--class=contents -->
</div> <!--class=pageSet -->
</template>

<script>
import axios from 'axios'
import firebase from '@/firebase/firestore'
// import 'firebase/database'
// import 'firebase/firestore'
var db = firebase.firestore()

export default {
  data () {
    return {
      have: '',
      seen: false,
      results: [],
      classBlue: '#00BFFF',
      classRed: '#F08080',
      formData: {
        text: ''
      },
      allData: []
    }
  },
  methods: {
    submit () {
      axios.post('http://localhost:5000/api/report', this.formData)
        .then(response => {
          this.results = response.data.query
          this.seen = true
        })
        .catch(error => {
          console.log(error)
        })
    },
    select: function (itemname) {
      this.have = itemname
      console.log(this.have.stock_name)
      this.$store.state.randomNumber = this.have
      console.log(this.$store.state.randomNumber)
      this.$router.push('/review')
    },
    fontColor: function (opinion) {
      console.log(opinion)
      if (opinion === '上方修正') {
        console.log('Red')
        console.log(this.classRed)
        return this.classRed
      } else {
        console.log('Blue')
        return this.classBlue
      }
    }
  },
  created () {
    // this.submit()
    console.log('ああああ')
    db.collection('agents').get().then(snapshot => {
      snapshot.forEach(doc => {
        this.allData.push(doc.data()
        )
        console.log(doc.data())
      })
    })
  }
}
</script>

<style>
.message{
    color: #FFFFFF;
    padding: 30px;
}
.panelArea{
  background-image: url("../assets/Mantle.jpg");
  position: relative;
  width:100%;
  height: 500px;
}
.home{
    top:20px;
    height:500px;
}
.homeLeftArea {
   display: inline-block;
    text-align: left;
   vertical-align: middle;
   width:320px;
   height:120px;
}

.sector{
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
}
.sector tr{
        background-color: #eee;
        border-bottom: solid 2px white;
}
.homeRightArea{
  display: inline-block;
  vertical-align: middle;
  width:660px;
  height:120px;
}

.search_panel{
    background-color: #f5f5f5;
    text-align: center;
    margin: 0 auto;
    height:200px;
    width:660px;
}

/* prime */
ul.search_filter li a {
  display: block;
  padding: 20px 30px;
  /* border-right: 1px solid #3D3D3D; */
  color:#000000;
  border-radius:20px 20px 20px 20px;/*検索ボックスの角を丸める*/

}

ul.search_filter li:last-child a {
  border-right: none;
}

ul.search_filter li a:hover {
  color: #FFFFFF;
}

/* sub display*/
ul.search_filter li:hover ul {
  display: block;
  background: #00ced1;
}

/* keeps the tab background white */
ul.search_filter li:hover a {
  background: #00ced1;
  color: #FFFFFF;
  text-shadow: none;
}

ul.search_filter li:hover > a{
  color: #FFFFFF;
}

.search_form{
    text-align: center;
    margin: 0 auto;
}

.hit_number{
    text-align: center;
    padding: 40px;
    color: #FFFFFF;
}
.hit_result{
}
.a {
   display: inline-block;      /* リンクをインラインブロック化して表示 */
   width: 20em;              /* 横幅を15文字分にする(※値は自由に調節して下さい) */
   border: 1px solid skyblue;    /* 枠線を加える(※値は自由に調節して下さい) */
   border-radius: 0.75em;        /* 枠線の角を丸くする(※値は自由に調節して下さい) */
   padding: 0.7em;
   color:black;/*検索ボタンのテキストカラー*/
   margin: 0px 30em 0.5em 0em; /* 外側の余白量として、右に0.15文字分、下に0.5文字分を用意。この余白は「クリック対象外」です。(※値は自由に調節して下さい) */
   text-decoration: none;        /* リンクの下線を消す */
   line-height: 1.2;  /* 行の高さを1.4倍にする(※値は自由に調節して下さい) */
   text-align:center;
}
/* ▼リンクの上にマウスが載った際の装飾(背景色だけ指定) */
.sample :hover { background-color: #fcfcaa; }
/*フォーム全体*/

#form1{
position: absolute;
top: 70%;
left: 50%;
-webkit-transform : translate(-50%,-50%);
transform : translate(-50%,-50%);
max-width:500px;/*フォームのサイズ*/
margin-bottom:15px;/*フォームの下に余白*/
margin: 0 auto;
}
/*検索ボックス*/
#sbox{
display: inline-block;
width:230px;/*検索ボタンの横幅*/
outline:0;/*クリック時の青い枠線消す*/
height:50px;/*検索ボックスの高さ*/
border-radius:2px 0 0 2px;/*検索ボックスの角を丸める*/
background:#eee;/*検索ボックスの背景カラー*/
}
/*検索ボタン*/
#sbtn{
display: inline-block;
width:70px;/*検索ボタンの横幅*/
height:50px;/*検索ボタンの縦幅*/
border-radius:0 2px 2px 0;/*検索ボタンの角を丸める*/
background:#7fbfff;/*検索ボタンの背景カラー*/
border:none;/*検索ボタンの枠線を消す*/
color:#fff;/*検索ボタンのテキストカラー*/
font-weight:bold;/*検索ボタンのテキスト太字*/
font-size:16px;/*検索ボタンのフォントサイズ*/
}
/*検索ボタンマウスオーバー時*/
#sbtn:hover{
color:#666;/*検索ボタンマウスオーバー時のフォントカラー*/
}
</style>
