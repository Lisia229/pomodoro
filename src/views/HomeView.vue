<template lang="pug">
//- img#shape(src="../assets/123283-shape-animation-unscreen.gif")
v-row#home
  v-col.col1(cols="12" lg="6")
    h1.text-center.hometitle TO DO NOW
      img(src="../assets/qcBoeLGKi.gif")
    hr
    h1.text-center.todolist {{ currentText }}
  v-col.col(cols="12" lg="6" )
    .timecount
      img.timeclock(src="../assets/colck.png")
      h1.timer {{ currentTime }}
      .tool-button
        v-btn.btn1(v-if="status !== 1" variant="text" icon="mdi-play" @click="startTimer")
        v-btn.btn1(v-if="status === 1" icon="mdi-pause" variant="text" @click="pauseTimer")
        v-btn.btn1(v-if="currentItem.length > 0" icon="mdi-skip-next" variant="text" @click="finishTimer")
</template>
<script setup>
import { ref, computed } from 'vue'
import { useListStore } from '@/stores/list'
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const list = useListStore()
const { currentItem, items, timeleft } = storeToRefs(list)
const { start, countdown, finish } = list

const settings = useSettingsStore()
const { selectedAlarmFile, notify } = storeToRefs(settings)

// 0 = 停止
// 1 = 倒數中
// 2 = 暫停
const status = ref(0)

let timer = 0
function startTimer () {
  if (status.value === 0 && items.value.length > 0) {
    start()
  }
  if (currentItem.value.length > 0) {
    status.value = 1
    timer = setInterval(() => {
      countdown()
      if (timeleft.value === 0) {
        finishTimer()
      }
    }, 1000)
  }
}
const pauseTimer = () => {
  status.value = 2
  clearInterval(timer)
}
const finishTimer = () => {
  clearInterval(timer)
  status.value = 0
  const audio = new Audio()
  audio.src = selectedAlarmFile.value
  audio.play()
  if (notify.value) {
    // eslint-disable-next-line
    const notification = new Notification("Finished", {
      body: currentText.value,
      icon: 'https://github.com/lisia229.png'
    })
  }
  finish()
  if (items.value.length > 0) {
    startTimer()
  }
}

const currentText = computed(() => {
  return currentItem.value.length > 0
    ? currentItem.value
    : items.value.length > 0
      ? 'Start'
      : 'Nothing'
})
const currentTime = computed(() => {
  const m = Math.floor(timeleft.value / 60)
    .toString()
    .padStart(2, '0')
  const s = (timeleft.value % 60).toString().padStart(2, '0')
  return m + ' : ' + s
})
</script>
