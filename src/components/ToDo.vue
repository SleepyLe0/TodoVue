<template>
  <div class="lab12">
    <h1>INT305 - Lab12</h1>
    <ul>
      <li
        v-for="(todo, index) in todos"
        :key="index"
      >
        <h4>{{ todo.title }}</h4>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
  import { query, collection, getDocs, DocumentData } from 'firebase/firestore';
  import { ref, onMounted } from 'vue';
  import db from '../firebase/init.ts';

  const todos = ref<DocumentData[]>([]);

  onMounted(() => {
    getToDos();
  });

  async function getToDos() {
    const coll = collection(db, 'todos');
    const querySnap = await getDocs(query(coll));
    todos.value = [];
    querySnap.forEach((doc) => {
      const data = doc.data();
      data.id = doc.id;
      todos.value.push(data);
    });
  }
</script>

<style scoped>
.lab12 {
    color: yellow;
}
</style>
