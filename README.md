# RatemyAgent(mitsukeru project)

> 技術要件: Vue.js + Firebase (参考：https://inside.dmm.com/entry/2018/04/10/nuxt-firebase）

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

#詳しくはDMM insideを読んで。
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## MVP1.0

* 要件
	* エージェント検索機能
	* レビュー閲覧機能
	* レビュー投稿機能

* 保有するデータ
   * レビュー - エージェントのデータ

* 留意点
	* 誹謗中傷など書かれて荒れる？運営側は誰が投稿したかが追跡できるようにしておきたい。 




## Page設計
* "/" --> index.vue
	* "/reviews/new" --> new.vue
	* "/agents/:id?" --> _id.vue

フォルダ的には

* pages/
	* reviews
		* new.vue --> "/reviews/new"
	* agents
		* _id.vue（各agentsのレビューがみれる）--> "/reviews/:id?"
* index.vue --> "/"

### 各ページ要件
共通部分

* header 
* footer 


#### pages/index.vue
* 最初はreviewのallが見えているのもあり。
* エージェント検索機能
	* agents別
	* agencies別
* エージェント表示機能
	* 検索にマッチしたエージェントが表示される
	
* 検索->表示フロ-
	* agent/agenciesをユーザーに入力してもらう
		*  agenciesの場合は、選択型にする？
	* Agentモデルを参照し、検索タブの下に表示する  
	
#### pages/agents/_id.vue

* レビュー閲覧機能(エージェント別にレビューがソートされる）

* 閲覧フロー
	* ユーザーはすでにエージェント名もしくは、エージェント会社を入力し、検索結果が表示されている
	* ユーザーはエージェントのタブをクリック
	* エージェントのidをもとにreviewsを参照し、ヒットするインデックスの情報を取得。
	* クリックしたエージェントについて複数のレビューが投稿されている

#### pages/reviews/new.vue

* 投稿機能 
	* MVP1.0
		* 所属会社
		* 転職エージェントの名前
		* エージェントに対する評価
		* コメント
 
 * 投稿フロー
 	* 投稿内容を記入する
 	* 投稿ボタンを押して投稿
 	* Agentsモデルを検索、新しくAgentsモデルに追加するか判定
 		* 追加する場合はレコード作成, id付与
 		* 追加しない場合はidをget 
 	* reviewsモデルに追加

	
## Component設計
（方針）headerとかfooterとか共通化したいけど、当面はindex.vueに書けばいんじゃね？後で考えればいっか

## テーブル設計
* データ保持する場所　とりあえず一つ
	* reviews
		* id(<--primary_key)
		* agent_id
		* score
		* comment
		* created
	* agents ( <--MVP2.0)
		* id
		* name
		* at_company 
	* users(<--MVP2.0)
 
