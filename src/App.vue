<script setup lang="ts">
import ToDo from './components/ToDo.vue';
</script>

<template>
  <div class="bsod">
        <h1>:(</h1>
        <h2>Your PC ran into a problem that it couldn't handle, and now it needs to restart.</h2>
        <p>We're just collecting some error info, and then we'll restart for you.</p>
        <p>If you'd like to know more, you can search online later for this error:</p>
        <p><strong>UNEXPECTED_KERNEL_MODE_TRAP</strong></p>
        <p>Stop code: 0x0000007F</p>
    </div>
    <ToDo />
</template>

<style scoped>
.bsod {
    max-width: 600px;
}

h1 {
    font-size: 100px;
    margin: 0;
}

h2 {
    font-size: 24px;
}

p {
    font-size: 18px;
}
</style>
