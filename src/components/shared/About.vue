<template>
    <section id="about">
        <div class="row">
           <div class="about">
                <div class="about__img">
                    <img src="../../assets/patakivenue_host.jpg" alt="" srcset="">
                </div>
                <div class="container">
                    <h4 class="heading1">Why Patakivenue?</h4>
                    <div class="about__summary">
                        <div class="about__summary-single">
                            <h6 class="heading6">Unique spaces</h6>
                            <p>
                                Every day we uncover new, creative spaces - 
                                from neighborhood galleries to hidden rooftops and beyond.
                            </p>
                        </div>
                        <div class="about__summary-single">
                            <h6 class="heading6">Honest pricing</h6>
                            <p>
                                Our spaces are priced to fit your budget. 
                                Pay by the hour without worrying about hidden fees.
                            </p>
                        </div>
                        <div class="about__summary-single">
                            <h6 class="heading6">Smooth booking</h6>
                            <p>
                               No more messy contracts. We build the tools to make booking 
                               a space as easy as the click of a button.
                            </p>
                        </div>
                    </div>
                </div>
           </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style lang="scss" scoped>
    #about{
        background-color: #FBFBFB;
    }
    .about{
        padding-bottom: 5rem;
    }
    .about__img {
        width: 100%;
        height: 40vh;
        margin-bottom: 2rem;
    }
    .about__img img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .about__summary-single{
        margin-bottom: 3rem;
    }
    .about__summary-single:last-child{
        margin-bottom: 0;
    }
    .about__summary-single p{
        font-size: 2rem;
        line-height: 1.5;
    }
</style>