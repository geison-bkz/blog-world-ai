<template>
    <div class="container under_construction">
        <hr class="featurette-divider" />

        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading fw-normal lh-1">Vitor Migliorini do Nascimento</h2>
                <span class="text-body-secondary">vitormigli.vm@gmail.com</span>
                <p class="lead">Engenharia Elétrica - 7 semestre</p>
                <a href="https://www.instagram.com/vitaomn/">Instagram</a>
            </div>
            <div class="col-md-5 banner-img vitor"></div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
            <div class="col-md-7 order-md-2">
                <h2 class="featurette-heading fw-normal lh-1">Gustavo Rodrigues Lopes</h2>
                <span class="text-body-secondary">gustavo.rlopes22@gmail.com</span>
                <p class="lead">Engenharia Elétrica (7° Semestre)</p>
            </div>
            <div class="col-md-5 order-md-1 banner-img gustavo"></div>
        </div>

        <hr class="featurette-divider" />

        <div class="row featurette">
            <div class="col-md-7">
                <h2 class="featurette-heading fw-normal lh-1">Letícia Gonçalves Bardella</h2>
                <span class="text-body-secondary">leticiabardella.7890@aluno.saojudas.br</span>
                <p class="lead">engenharia elétrica (7° semestre)</p>
            </div>
            <div class="col-md-5 banner-img leticia"></div>
        </div>

        <hr class="featurette-divider" />
    </div>
</template>

<script setup></script>

<style scoped>
.banner-img {
    height: 500px;
    background-size: contain;
    background-position: bottom;
    background-repeat: no-repeat;
}

.vitor {
    background-image: url(../assets/images/profiles/vitor-profile.jpg);
}

.gustavo {
    background-image: url(../assets/images/profiles/gustavo-profile.jpg);
}

.leticia {
    background-image: url(../assets/images/profiles/leticia-profile.jpg);
}
</style>
