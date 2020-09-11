<template>
    <section>
        <div class="container">
            <div class="notfound">
                <h1 class="heading1">
                    <a href="#" class="primary__link-color">
                        Patakivenue
                    </a>
                </h1>

                <h3 class="heading3">
                    Page not found
                </h3>

                <div>
                    <button class="sm__button secondary__bg-color">
                        Browse spaces
                    </button>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
</template>

<script>
    import Footer from "../shared/Footer";
    export default {
        name: 'NotFound',
        components: {
            Footer
        }
    }
</script>

<style lang="scss" scoped>
    .notfound{
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .heading1 {
        font-size: 5rem;
        margin-bottom: 4rem;
    }
    .heading3 {
        font-size: 3rem;
        margin-bottom: 2.8rem;
    }
    @media screen and (min-width: 768px){
        .notfound {
            height: 90vh;
        }
    }
</style>

