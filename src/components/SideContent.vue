<template>
    <div class="position-sticky" style="top: 2rem">
        <div class="p-4 mb-3 bg-body-tertiary rounded">
            <h4 class="fst-italic">About us</h4>
            <p class="mb-0">
                We are students of Anima Education, passionate about AI and we developed this work
                to share our knowledge and curiosity about the subject. It is a great pleasure to
                have you as a reader of our blog.
            </p>
        </div>

        <div>
            <h4 class="fst-italic">Recent posts</h4>
            <ul class="list-unstyled">
                <li>
                    <RouterLink
                        class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                        to="/article-04"
                    >
                        <div class="img-article-04"></div>
                        <div class="col-lg-8">
                            <h6 class="mb-0">Use artificial intelligence for image generation</h6>
                            <small class="text-body-secondary">May 27, 2024</small>
                        </div>
                    </RouterLink>
                </li>
                <li>
                    <a
                        class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                        href="#"
                    >
                        <svg
                            class="bd-placeholder-img"
                            width="100%"
                            height="96"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <rect width="100%" height="100%" fill="#777" />
                        </svg>
                        <div class="col-lg-8">
                            <h6 class="mb-0">This is another blog post title</h6>
                            <small class="text-body-secondary">January 14, 2024</small>
                        </div>
                    </a>
                </li>
                <li>
                    <a
                        class="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top"
                        href="#"
                    >
                        <svg
                            class="bd-placeholder-img"
                            width="100%"
                            height="96"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                            preserveAspectRatio="xMidYMid slice"
                            focusable="false"
                        >
                            <rect width="100%" height="100%" fill="#777" />
                        </svg>
                        <div class="col-lg-8">
                            <h6 class="mb-0">
                                Longer blog post title: This one has multiple lines!
                            </h6>
                            <small class="text-body-secondary">January 13, 2024</small>
                        </div>
                    </a>
                </li>
            </ul>
        </div>

        <div class="p-4">
            <h4 class="fst-italic">Elsewhere</h4>
            <ol class="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Linkedin</a></li>
            </ol>
        </div>
    </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
.img-article-04 {
    height: 100px;
    width: 100%;
    background-image: url(../assets/images/leticia.png);
    background-position: left;
    background-size: cover;
}
</style>
