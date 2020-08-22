<template>
    <section id="activity">
        <div class="container">
            <h1 class="heading1">Book a unique space for your activity</h1>
            <div class="activities">
                <a href="#" class="activity__single">
                    <div class="activity__single-img">
                        <img src="../../assets/patakivenue_wedding.jpg" alt="wedding">
                    </div>
                    <h6 class="heading6 activity__single-text">Wedding</h6>
                </a>
                <a href="#" class="activity__single">
                    <div class="activity__single-img">
                        <img src="../../assets/patakivenue_meeting.jpg" alt="wedding">
                    </div>
                    <h6 class="heading6 activity__single-text">Meeting</h6>
                </a>
                <a href="#" class="activity__single">
                    <div class="activity__single-img">
                        <img src="../../assets/patakivenue_seminar.jpg" alt="seminar">
                    </div>
                    <h6 class="heading6 activity__single-text">Seminar</h6>
                </a>
                <a href="#" class="activity__single">
                    <div class="activity__single-img">
                        <img src="../../assets/patakivenue_garden.jpg" alt="garden">
                    </div>
                    <h6 class="heading6 activity__single-text">Garden</h6>
                </a>
                <a href="#" class="activity__single">
                    <div class="activity__single-img">
                        <img src="../../assets/patakivenue_pool.jpg" alt="pool">
                    </div>
                    <h6 class="heading6 activity__single-text">Pool</h6>
                </a>
                <a href="#" class="activity__single">
                    <div class="activity__single-img">
                        <img src="../../assets/patakivenue_exihibition.jpg" alt="exihibition">
                    </div>
                    <h6 class="heading6 activity__single-text" >Exihibition</h6>
                </a>
                <a href="#" class="primary__link-color primary__text">
                    View all activities
                    <i class="fas fa-chevron-right"></i>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'Activity',
        setup() {

            return {}
        }
    }
    
</script>
<style lang="scss">
    #activity{
        padding-top: 3rem;
        padding-bottom: 3rem;
    }
    .activities{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .activity__single{
        display: block;
        width: calc(50% - 1rem);
        position: relative;
        margin-bottom: 1.5rem;
        border-radius: 1rem;
    }

    .activity__single:after{
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(68, 67, 67, 0.1);
        border-radius: inherit;
    }
    .activity__single:hover .activity__single:after{
        background-color: rgba(68, 67, 67, 0.9);
    }
  
    .activity__single-img{
        width: 100%;
        border-radius: inherit;
    }
    .activity__single-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: inherit;
    }
    .activity__single-text{
        position: absolute;
        left: 0;
        bottom: 2rem;
        width: 100%;
        color: #ffffff;
        font-weight: bold;
        text-align: center;
    }

   
</style>