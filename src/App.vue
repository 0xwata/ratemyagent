<template>
  <div id="app">
    <div class="header">
      <nav>
        <ul class="primary-secondary-tertiary">
          <li>
            <ul class="primary">
              <li><a href="/about">About</a></li>
              <li><a href="">Cat</a></li>
              <li><a href="">Bird</a></li>
              <li><a href="">Horse</a></li>
            </ul>
          </li>
          <li>
            <ul class="secondary">
                <li>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;</li>
            </ul>
          </li>
          <li>
            <ul class="tertiary">
              <li><a href="/reviews/new">投稿</a></li>
            </ul>
          </li>
        </ul>

      </nav>
    </div>
    <div class="contents">
    <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.header {
  position:fixed;
  width:100%;
  height: 80px;
  left:0;
  top:0;
  z-index: 1;
}

a {
  text-decoration: none;
  color: #fff;
  display: block;
}

ul {
  list-style: none;
  position: relative;
  text-align: left;
}

li {
  float: left;
}

/* clear'n floats */
ul:after {
  clear: both;
}

ul:before,
ul:after {
    content: " ";
    display: table;
}

nav {
  position: relative;
  background: #2B2B2B;
  background-image: -webkit-linear-gradient(bottom, #2B2B2B 7%, #333333 100%);
  background-image: -moz-linear-gradient(bottom, #2B2B2B 7%, #333333 100%);
  background-image: -o-linear-gradient(bottom, #2B2B2B 7%, #333333 100%);
  background-image: linear-gradient(bottom, #2B2B2B 7%, #333333 100%);
  text-align: center;
  letter-spacing: 1px;
  text-shadow: 1px 1px 1px #0E0E0E;
  -webkit-box-shadow: 2px 2px 3px #888;
  -moz-box-shadow: 2px 2px 3px #888;
  box-shadow: 2px 2px 3px #888;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
}

ul.primary-secondary-tertiary li a {
}
ul.secondary li a{
    background: #000000;
    width: 200px;
}
ul.tertiary li a {
    background: #f5f5f5;
    padding: 20px 30px;
    border-radius:10px 10px 10px 10px;/*検索ボックスの角を丸める*/
    color:#000000;

}
/* prime */
ul.primary li a {
  display: block;
  padding: 20px 30px;
  border-right: 1px solid #3D3D3D;
}

ul.primary li:last-child a {
  border-right: none;
}

ul.primary li a:hover {
  color: #000;
}

/* sub display*/
ul.primary li:hover ul {
  display: block;
  background: #fff;
}

/* keeps the tab background white */
ul.primary li:hover a {
  background: #fff;
  color: #666;
  text-shadow: none;
}

ul.primary li:hover > a{
  color: #000;
}

.contents{
  padding-top: 70px;/*追記部分*/
}
</style>
