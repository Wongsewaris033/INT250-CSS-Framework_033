<script setup>
import Alerts from './components/Alerts.vue';
import Badges from './components/Badges.vue';
import Button from './components/Button.vue';
import Card from './components/Card.vue';
import Form from './components/Form.vue';
import NavBar from './components/NavBar.vue';
import Responsive from './components/Responsive.vue';
</script>

<template>
  <div class="min-h-screen bg-gray-100">
    <div class="max-w-5xl mx-auto px-6 py-8">
      <NavBar />
      <div class="flex flex-col gap-5 mt-6">
        <Button />
        <Badges />
        <Alerts />
        <Form />
        <Card />
        <Responsive />
      </div>
    </div>
  </div>
</template>

<style scoped></style>