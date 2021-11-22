<!-- Файл всех компонентов vue -->
<template>
  <div id="app">
    <Nav/>
    <!-- router-view - сам контент-->
    <router-view/>
    <Footer/>
  </div>
</template>

<!-- Подключить всю статику -->
<style>
@import "assets/css/bootstrap.css";
@import "assets/css/font-awesome.css";
@import "assets/css/style.css";
</style>

<!-- Подключить всю логику -->
<script>
import Nav from "./components/Nav";
import Footer from "./components/Footer";

export default {
  components: {Nav, Footer}
}
</script>