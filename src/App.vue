<template>
  <div id="app">

 <!--   <HelloWorld msg="Welcome to Your Vue.js App"/>-->



<div class="container">



    <div class="right-nav">
      <ul class="list-group">
           <router-link tag="li" class="list-group-item" v-for="item in items" :key="item.name" :to="item.link">
              <a class="nav-link" > {{item.name}}</a>
          </router-link>
      </ul>
    </div>


  <div class="main">

      <h1>{{ currentRouteName }}</h1>



      <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item">{{ $route.name }}</li>
          </ol>
      </nav>

      <router-view></router-view>


  </div>

</div>


    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
    name: 'App',
    data() {
        return {
            items: []
        }
    },
    created() {
        this.$router.options.routes.forEach(route => {
            this.items.push({
                name: route.name,
                link: route.path
            })
        })
    }
    ,
    components: {
        // HelloWorld
    },
    computed: {
        currentRouteName() {
            return this.$route.name;
        }
    }
}
</script>

<style>
.container {display: flex; flex-direction: row; margin-top:50px }
.main{flex-grow: 1; padding-left:40px;}
    li.active a {color: aliceblue}
</style>
