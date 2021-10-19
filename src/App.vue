<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';

Vue.use(BootstrapVue);

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
</style>
