<template>
<nav class="navbar navbar-expand-lg bg-body-tertiary mb-5" style="background-color: #2A3C24 !important;">
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
                    <a class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false" :class="{ 'btnactive': menu === 'master' }" @click="changeMenu('master', $event)">
                        Master
                    </a>
                    <ul class="dropdown-menu" style="background-color: #A1C349 !important;">
                        <li><router-link to="/kategori" class="dropdown-item" href="#" :class="{ 'subbtnactive': subMenu === 'kategori' }" @click="changeSubMenu('kategori', $event)">Kategori</router-link></li>
                        <li><router-link to="/genre" class="dropdown-item" href="#" :class="{ 'subbtnactive': subMenu === 'genre' }" @click="changeSubMenu('genre', $event)">Genre</router-link></li>
                    </ul>
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
    ref, onMounted 
} from 'vue';

const app = {
    setup() {
        const menu = ref('dashboard');
        const subMenu = ref('');

        const changeMenu = (data, event) => {
            event.preventDefault();
            menu.value = data;
            localStorage.setItem('menu', menu.value);
        };
        
        const changeSubMenu = (data, event) => {
            event.preventDefault();
            subMenu.value = data;
            localStorage.setItem('subMenu', subMenu.value);
        };

        onMounted(() => {
            menu.value = localStorage.getItem('menu') ?? menu.value
            subMenu.value = localStorage.getItem('subMenu') ?? subMenu.value
        });

        return {
            menu,
            changeMenu,
            subMenu,
            changeSubMenu,
        };
    },
};

export default app;
</script>
