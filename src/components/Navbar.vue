<template>
    <div class="container">
        <header class="border-bottom lh-1 py-3">
            <div class="row flex-nowrap justify-content-between align-items-center">
                <div class="col-4 pt-1">
                    <a class="link-secondary" href="#">Subscribe</a>
                </div>
                <div class="col-4 text-center">
                    <RouterLink
                        class="blog-header-logo text-body-emphasis text-decoration-none"
                        to="/"
                        >World AI</RouterLink
                    >
                </div>
                <div class="col-4 d-flex justify-content-end align-items-center">
                    <RouterLink class="btn btn-sm btn-outline-secondary" to="/about"
                        >About us</RouterLink
                    >
                </div>
            </div>
        </header>

        <div class="nav-scroller py-1 mb-3 border-bottom">
            <nav class="nav nav-underline justify-content-between"></nav>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.nav-scroller {
    position: relative;
    z-index: 2;
    height: 2.75rem;
    overflow-y: hidden;
}

.nav-scroller .nav {
    display: flex;
    flex-wrap: nowrap;
    padding-bottom: 1rem;
    margin-top: -1px;
    overflow-x: auto;
    text-align: center;
    white-space: nowrap;
    -webkit-overflow-scrolling: touch;
}
</style>
