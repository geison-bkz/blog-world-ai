<template>
    <div class="container">
        <div class="row mb-2">
            <div class="col-md-6">
                <div
                    class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                >
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-primary-emphasis"
                            >Regulation</strong
                        >
                        <h3 class="mb-0">Regulation of the use of AI in the World</h3>
                        <div class="mb-1 text-body-secondary">Apr 10</div>
                        <p class="card-text mb-auto">
                            Nowadays, AI (Artificial Intelligence) has been perfecting itself in a
                            frightening...
                        </p>
                        <RouterLink
                            to="/article-02"
                            class="icon-link gap-1 icon-link-hover stretched-link"
                        >
                            Continue reading
                            <svg class="bi"><use xlink:href="#chevron-right" /></svg>
                        </RouterLink>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img
                            class="bd-placeholder-img"
                            src="/src/assets/images/background.jpg"
                            alt="Thumbnail"
                        />
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div
                    class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative"
                >
                    <div class="col p-4 d-flex flex-column position-static">
                        <strong class="d-inline-block mb-2 text-success-emphasis">Design</strong>
                        <h3 class="mb-0">Post title</h3>
                        <div class="mb-1 text-body-secondary">Nov 11</div>
                        <p class="mb-auto">
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content.
                        </p>
                        <a href="#" class="icon-link gap-1 icon-link-hover stretched-link">
                            Continue reading
                            <svg class="bi"><use xlink:href="#chevron-right" /></svg>
                        </a>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                        <img
                            class="bd-placeholder-img"
                            src="/src/assets/images/background.jpg"
                            alt="Thumbnail"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.bd-placeholder-img {
    width: 200px;
    height: 250px;
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}
</style>
