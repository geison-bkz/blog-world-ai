<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import DarkModeButton from './components/DarkModeButton.vue';
import Banner from '@/components/Banner.vue';
import './assets/js/color-modes';
import Thumbnail from './components/Thumbnail.vue';
import SideContent from './components/SideContent.vue';
import BlogFooter from './components/BlogFooter.vue';
</script>

<template>
    <Navbar></Navbar>
    <Banner></Banner>
    <Thumbnail></Thumbnail>
    <main class="container">
        <div class="row g-5">
            <div class="col-md-8"><RouterView /></div>
            <div class="col-md-4"><SideContent></SideContent></div>
        </div>
    </main>
    <BlogFooter></BlogFooter>
    <DarkModeButton></DarkModeButton>
</template>

<style scoped></style>
