<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary" style="background-color: #2A3C24 !important;">
    <div class="container-fluid">
        <a class="navbar-brand text-white" href="#">Rekap History</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarScroll">
            <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style="--bs-scroll-height: 100px;">
                <li class="nav-item">
                    <router-link to="/" class="nav-link text-white" href="#" :class="{ 'btnactive': menu === 'dashboard' }" @click="changeMenu('dashboard', $event)">Dashboard</router-link>
                </li>

                <li class="nav-item">
                    <router-link to="/history" class="nav-link text-white" href="#" :class="{ 'btnactive': menu === 'history' }" @click="changeMenu('history', $event)">History</router-link>
                </li>

                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Link
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>

                <li class="nav-item">
                    <a class="nav-link disabled" aria-disabled="true">Link</a>
                </li>
            </ul>

            <form class="d-flex" role="search">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
    </div>
</nav>
</template>

<script>
import {
    RouterLink
} from 'vue-router';
import {
    ref
} from 'vue';

const app = {
    setup() {
        const menu = ref('dashboard');

        const changeMenu = (data, event) => {
            event.preventDefault();
            menu.value = data;
        };

        return {
            menu,
            changeMenu,
        };
    },
};

export default app;
</script>
