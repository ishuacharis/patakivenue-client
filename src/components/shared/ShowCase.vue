<template>
    <section class="showcase">
        <div class="row">
            <div class="img__container">
                <img src="../../assets/wallpaper.jpg" alt="wallpaper">
            </div>
            <div class="search">
                <div class="container">
                    <form action="#" class="form">
                        <div class="field">
                            <input type="text" name="what" class="input" id="what" placeholder="Enter your activity">
                        </div>
                        <div class="field">
                            <input type="text" name="what" class="input" id="what">
                        </div>
                        <div class="field btn__field">
                            <button class="secondary__bg-color">Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    name: 'Showcase',
    components: {

    }, setup() {
        return {}
    }
}
</script>
<style lang="scss">
    .showcase{
        background-color: #FBFBFB;
    }
    .row{
        width: 100%;
        position: relative;
    }
    .img__container{
        width: 100%;
        height: 40vh;
    }
    .img__container img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .search{
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
    @media screen and (min-width: 768px){
        .img__container {
            height: 100vh;
        }
        .search{
            position: absolute;
            top: 60%;
            left: 10%;
            transform: translate(-10%, -60%);
            width: 100%;
        }
        .form {
            display: flex;
            width: 100%;

        }
        .form .field{
            width: calc(40% - 2rem);
        }

        .form .btn__field{
            margin-left: 1rem;
            width: calc(20% - 2rem);
        }
    }
</style>