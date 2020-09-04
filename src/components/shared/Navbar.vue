<template>
    <nav>
        <div class="container">
            <div class="nav">
                <div class="sm-show nav__links">
                    <div class="logo">
                        <router-link to="/">Patakivenue</router-link>
                    </div>
                    <ul class="right__nav">
                        <li class="nav__item">
                            <a href="#" class="nav__link primary__link-color">
                                <i class="fas fa-search"></i>
                                Search
                            </a>
                        </li>
                        <li class="nav__item pipe">
                            <i class="fas fa-grip-lines-vertical"></i>
                        </li>
                        <li class="nav__item">
                            <router-link to="/register" class="nav__link secondary__link-color">
                                Sign Up
                            </router-link>
                        </li>
                        <li @click="showNav" class="nav__item bars">
                            <i class="fas fa-bars"></i>
                        </li>
                    </ul>
                    <div class="sm__nav">
                        <ul class="sm__nav-links">
                            <li class="nav__item">
                                <a @click="showList" class="nav__link" href="javascript:void(0)">
                                    Activities
                                    <i class="fas fa-chevron-down"></i>
                                    <ul class="activity__nav" :style="{display: block}">
                                        <li><a href="#">Wedding</a></li>
                                        <li><a href="#">Wedding</a></li>
                                        <li><a href="#">Wedding</a></li>
                                    </ul>
                                </a>
                            </li>
                            <li class="nav__item">
                                <a class="nav__link primary__link-color" href="#">
                                    List space
                                </a>
                            </li>
                            <li class="nav__item">
                                <a class="nav__link" href="#">
                                    Log in
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="sm-hide nav__links">
                    <div>
                        <ul class="left__nav">
                            <li class="logo">
                                <a href="#">Patakivenue</a>
                            </li>
                            <li class="nav__item">
                                <a href="#" class="nav__link">
                                    <i class="fas fa-search"></i>
                                    Search
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul class="right__nav">
                            <li class="nav__item">
                                <a href="#" class="nav__link">Activities</a>
                            </li>
                            <li class="nav__item">
                                <a href="#" class="nav__link space__btn">List Space</a>
                            </li>
                            <li class="nav__item">
                                <a href="#" class="nav__link">Sign Up</a>
                            </li>
                            <li class="nav__item">
                                <router-link to="/login" class="nav__link">Log In</router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
    
</template>

<script>

import { ref , } from 'vue'

export default {
    name: 'Navbar',
    components: {
    },
    setup()  {
        const isLoginModalVisible = ref(true);
        const isListVisible  = ref(false);

        function showLoginModal(){
            console.log("show")
            document.body.classList.toggle('modal-open')
        }
        function showNav() {
            console.log("show nav")
            document.body.classList.toggle('open')
        }
        function showList() {
            document.body.classList.toggle('open__list')
            console.log("list")
        }
    
        return {isLoginModalVisible, isListVisible, showNav, showList, showLoginModal}
    }
}
</script>