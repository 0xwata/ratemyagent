<template>
    <div>
    <form class="review_form" v-on:submit.prevent="createReview()">
        <p>転職エージェントの名前：<br>
        <input class="input" v-model="postReview.agent_name" placeholder="高嶺航"></p>
        <p>所属転職エージェント会社：<br>
        <input class="input" v-model="postReview.at_company" placeholder="ビズリーチ転職"></p>
        <p>エージェントに対する評価：<br>
        <input class="input" v-model="postReview.score" placeholder="2.5"></p>
        <p>コメント：<br>
        <input class="input" v-model="postReview.comment" placeholder="情報がいつも後手後手で不満しかありませんでした"></p>
        <button type="submit" >投稿</button>
        <!-- <button type="submit" v-on:click="createReview">投稿</button> -->
    </form>
    <div>{{ reviewRef.agent_name }}</div>
    </div>
</template>

<script>
// import axios from 'axios'
import firebase from '@/firebase/firestore'
var db = firebase.firestore()

export default {
  created: function () {
    this.ReviewsRaw = db.collection('reviews_raw')
  },
  methods: {
    createReview: function () {
      console.log('テスト')
      console.log(this.postReview.agent_name)
      console.log(this.postReview.at_company)
      console.log(this.postReview.score)
      console.log(this.postReview.comment)
      var now = new Date()
      this.postReview.createdAt = now.getMonth() + 1 + '月' + now.getDate() + '日' + now.getHours() + '時' + now.getMinutes() + '分'
      // addの引数に保存したいデータを渡す
      this.ReviewsRaw.add(this.postReview).then(function (docRef) {
        // 正常にデータ保存できた時の処理
        console.log('Document written with ID: ', docRef.agent_name)
      }).catch(function (error) {
        // エラー発生時の処理
        console.error('Error adding document: ', error)
      })
      // console.log(this.ReviewsRaw)
      this.postReview.agent_name = ''
      this.postReview.at_company = ''
      this.postReview.score = 0
      this.postReview.comment = ''
      this.postReview.createdAt = ''
    }
  },
  data () {
    return {
      postReview: {
        agent_name: '',
        at_company: '',
        score: 0,
        comment: '',
        createdAt: ''
      },
      reviewRef: [],
      database: null,
      ReviewsRaw: null
    }
  }
}
</script>
<style>
.review_form{
    top: 50%;
    margin: 0 auto;
}
</style>
