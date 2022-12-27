import { defineStore } from 'pinia'

export const useSettingsStore = defineStore({
  // 這個 store 的 id
  id: 'settings',
  // 這個 store 存了哪些資料
  state () {
    return {
      alarms: [
        { id: 1, name: 'Alarm', file: new URL('@/assets/alarm.mp3', import.meta.url).href },
        { id: 2, name: 'Yay', file: new URL('@/assets/yay.mp3', import.meta.url).href },
        { id: 3, name: 'AllGo', file: new URL('@/assets/Allgo.mp3', import.meta.url).href },
        { id: 4, name: 'DontSay', file: new URL('@/assets/DontSay.mp3', import.meta.url).href },
        { id: 5, name: 'Honne', file: new URL('@/assets/Honne.mp3', import.meta.url).href },
        { id: 6, name: 'Imissyousomuch', file: new URL('@/assets/Imissyou.mp3', import.meta.url).href },
        { id: 7, name: 'Paris', file: new URL('@/assets/Paris.mp3', import.meta.url).href },
        { id: 8, name: 'Runaway', file: new URL('@/assets/Runaway.mp3', import.meta.url).href },
        { id: 9, name: 'Withoutyou', file: new URL('@/assets/Withoutyou.mp3', import.meta.url).href }
      ],
      selectedAlarms: 2,
      notify: false
    }
  },
  actions: {
    async toggleNotify () {
      if (!this.notify && 'Notification' in window) {
        const permission = await Notification.requestPermission()
        if (permission === 'granted') {
          this.notify = true
        }
      } else {
        this.notify = false
      }
    }
  },
  getters: {
    selectedAlarmFile () {
      const i = this.alarms.findIndex(alarm => alarm.id === this.selectedAlarms)
      return this.alarms[i].file
    }
  },
  persist: {
    key: 'pomodoro-settings',
    paths: ['selectedAlarms', 'notify']
  }
})
