<template>
  <div class="w-screen h-screen flex p-8 bg-slate-50">
    <div v-for="(item, i) in store.trelloList" :key="i" class="min-w-[300px] border border-slate-400 rounded-md bg-white shadow-md">
      <h3>{{ i }}</h3>
      
      <draggable
        :id="item.id"
        :list="item.list"
        class="list-group min-h-[200px] border border-red-500"
        group="todos"
        item-key="title"
        @change="change"
      >
        <template #item="{ element }">
          <div class="list-group-item border border-slate-400 m-1 rounded-md p-1 shadow-md cursor-pointer">
            {{ element.title }}
          </div>
        </template>
        <template #header>
          <div class="btn-group list-group-item" role="group">
            <button class="btn btn-secondary" @click="add">Add</button>
          </div>
        </template>
      </draggable>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
import draggable from "vuedraggable";
import { useTrelloStore } from "./store";
const store = useTrelloStore();
const added = ref({})
const removed = ref({})
const add = () => {
  // Implement your logic for adding a new item here
  console.log("Adding a new item");
};

const change = (event) => {
  console.log(event);

  // Find the list based on the draggable element's ID
  let listIndex = -1;
  let columnIndex = -1;

  for (let i = 0; i < store.trelloList.length; i++) {
    for (let j = 0; j < store.trelloList[i].list.length; j++) {
      if (element.id === store.trelloList[i].list[j].id) {
        listIndex = i;
        columnIndex = j;
        break; // Exit the inner loop once the item is found
      }
    }
    if (listIndex !== -1) {
      break; // Exit the outer loop once the item is found
    }
  }

};
</script>



<style scoped></style>
