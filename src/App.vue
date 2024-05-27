<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import BlogFooter from './components/BlogFooter.vue';
</script>

<template>
    <Navbar></Navbar>
    <RouterView></RouterView>
    <BlogFooter></BlogFooter>
</template>

<style scoped></style>
