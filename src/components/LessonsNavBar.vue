<template>
    <div class="nav-bar">
      <div class="nav-links">
        <router-link :to="to" class="hover:text-decoration-underline text-blue-600">
          <i class="mdi mdi-arrow-left"></i>
          Back
        </router-link>
      </div>
    </div>
  </template>

<script setup>
const props = defineProps({
  to: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
    .nav-bar {
display: flex;
justify-content: flex-start;
padding: 16px;
background-color: #006a71;
}

.nav-links > * {
margin-left: 8px;
color: white;
text-decoration: none;
}
</style>