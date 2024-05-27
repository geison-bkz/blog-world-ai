<template>
    <main class="container">
        <Banner></Banner>
        <Thumbnail></Thumbnail>
        <div class="row g-5">
            <div class="col-md-8"><RouterView /></div>
            <div class="col-md-4"><SideContent></SideContent></div>
        </div>
    </main>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Banner from '@/components/Banner.vue';
import Thumbnail from '@/components/Thumbnail.vue';
import SideContent from '@/components/SideContent.vue';
</script>

<style scoped></style>
