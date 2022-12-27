<template lang="pug">
#listtitle.text-center
  img(src="https://gifdb.com/images/high/uppy-staring-on-rainy-day-n0v4v2gs1y555vtq.webp")
  sapn To Do List
v-row#list
  v-col.col(cols="12" md="6" lg="6")
    //- h1.text-center.listtitle To Do List
    v-text-field(ref="input" v-model="newItem" label="New Item" :rules="[rules.required, rules.length]" @keydown.enter="onInputSubmit")
      template(#append)
        v-btn(icon="mdi-plus" variant="text" @click="onInputSubmit")
    v-table.listtable
      thead
        tr
          th.text-center Name
          th.text-center Operate
      tbody
        tr(v-if="items.length === 0")
          td.text-center(colspan="2") None
        tr(v-for="item in items" v-else :key="item.id" ref="editInputs")
          td.text-center
            v-text-field(v-if="item.edit" v-model="item.model" autofocus :rules="[rules.required, rules.length]")
            span(v-else) {{ item.name }}
          td.text-center
            span(v-if="item.edit")
              v-btn(icon="mdi-check" variant="text" color="#f2e3d1" @click="confirmEditItem(item.id)")
              v-btn(icon="mdi-undo" variant="text" color="#3F51B5" @click="undoEditItem(item.id)")
            span(v-else)
              v-btn(icon="mdi-pencil-circle" variant="text" color="#f2e3d1" @click="editItem(item.id)")
              v-btn(icon="mdi-delete" variant="text" color="rgb(180, 59, 59)" @click="delItem(item.id)")
  v-col.col(cols="12" md="6" lg="6")
    h1.text-center.finishlist -Finished-
    v-table.listtable
      thead
        tr
          th.text-center name
          th.text-center operate
      tbody
        tr(v-if="finishedItems.length === 0")
          td.text-center(colspan="2") None
        tr(v-for="item in finishedItems" v-else :key="item.id" ref="editInputs")
          td.text-center {{ item.name }}
          td.text-center
            v-btn(icon="mdi-delete" variant="text" color="red" @click="delFinishedItem(item.id)")
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useListStore } from '@/stores/list'

const list = useListStore()
const { addItem, editItem, delItem, confirmEditItem, undoEditItem, delFinishedItem } = list
const { items, finishedItems } = storeToRefs(list)

const newItem = ref('')
const input = ref(null)
const editInputs = ref([])

const rules = {
  required (v) {
    return !!v || '欄位必填'
  },
  length (v) {
    return v.length >= 3 || '必須三個字以上'
  }
}

const onInputSubmit = async () => {
  const valid = await input.value.validate()
  console.log(valid)
  if (valid.length > 0) return
  addItem(newItem.value)
  input.value.$el.querySelector('input').blur()
  input.value.reset()
}
</script>
