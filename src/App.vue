<template>
  <div v-for="(item,index) in routes" :key="index">
    <router-link :to="item.path">{{item.name}}</router-link>
  </div>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import {routes} from './router';

export default defineComponent({
  setup() {
    return {
      routes: routes.filter(i => i.name)
    }
  },
})
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
