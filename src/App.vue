<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderNav from './components/HeaderNav.vue'
import SiteFooter from './components/Footer.vue'
</script>

<template>
  <HeaderNav />
  <main>
    <RouterView v-slot="{ Component }">
      <transition name="route-fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>
  <SiteFooter />
</template>

