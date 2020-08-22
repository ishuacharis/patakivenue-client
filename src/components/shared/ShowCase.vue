<template>
    <section class="showcase">
        <div class="row">
            <div class="img__container">
                <img src="../../assets/wallpaper.jpg" alt="wallpaper">
            </div>
            <div class="container">
                <div class="search">
                    <form action="#">
                        <div class="field">
                            <input type="text" name="what" id="what" placeholder="Enter your activity">
                        </div>
                        <div class="field">
                            <input type="text" name="what" id="what">
                        </div>
                        <div class="field">
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
        /*position: absolute;
        top: 0;*/
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
</style>