<template lang="pug">
v-app#app.typing-txt-block.bg-animation
  v-app-bar(color="primary")
    v-app-bar-title.apptitle
      img(src="./assets/qcBoeLGKi.gif")
      span POMOTORO TO DO LIST
    v-spacer
    v-btn.homebtn(icon="mdi-home" variant="text" to="/")
    v-btn.homebtn(icon="mdi-format-list-bulleted" variant="text" to="/list")
    v-btn.homebtn(icon="mdi-cog" variant="text" to="/settings")
    v-btn.homebtn(:icon="notify ? 'mdi-bell' : 'mdi-bell-off'" variant="text" @click="toggleNotify")
  v-main
    img#kabo(src="./assets/k5IcoJB-unscreen.gif")
    v-container
      router-view(v-slot="{ Component }")
        //- 換頁保留元件不被銷毀
        //- 設定 include 指定要保留的元件
        keep-alive(include="HomeView")
          //- 動態元件，將元件以 is 傳入
          component(:is="Component")
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'
const settings = useSettingsStore()
const { notify } = storeToRefs(settings)
const { toggleNotify } = settings
</script>
