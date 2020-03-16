<template>
  <div>

      <ul class="list-group">
          <router-link tag="li" class="list-group-item" v-for="item in items" :key="item" :to="item">
              <a class="nav-link" > {{item}}</a>
          </router-link>
      </ul>
    <ul class="nav nav-tabs">



        <router-link tag="li" :to="{path:'params' }"><a  class="nav-link" >Параметры</a></router-link>
        <router-link tag="li" :to="{path:'questions' }"><a  class="nav-link" >Вопросы</a></router-link>
        <router-link tag="li" :to="{path:'logic' }"><a  class="nav-link" >Логика</a></router-link>
        <router-link tag="li" :to="{path:'condition' }"><a  class="nav-link" >Условия</a></router-link>
        <router-link tag="li" :to="{path:'responds' }"><a  class="nav-link" >Респонденты</a></router-link>

    </ul>

      <router-view></router-view>

  </div>
</template>

<script>

    export default {

    }


</script>

<style scoped>
    li.active {background: #007bff}
    li.active a {color: aliceblue}

</style>
