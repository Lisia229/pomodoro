<template lang="pug">
v-row#settings
  v-col(cols="12")
    h1.text-center RINGTONES
  v-col(cols="12")
    table.listtable
      tr#list1
        td Name
        td Listen
        td Choose
      tr#list2(v-for="alarm in alarms" :key="alarm.id" height="100px")
        td {{ alarm.name }}
        td
          audio(:src="alarm.file" controls)
        td
          v-radio-group(v-model="selectedAlarms" class="justify-center")
            v-radio(:value="alarm.id" color="#1c2950")
</template>

<script setup>
import { useSettingsStore } from '@/stores/settings'
import { storeToRefs } from 'pinia'

const settings = useSettingsStore()
const { alarms, selectedAlarms } = storeToRefs(settings)
</script>
