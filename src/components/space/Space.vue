<template>
    <Navbar/>
    <section>
        <div class="space-container">
            <div class="carousel"></div>
            <div class="space__details">
                <div class="space__details-top">
                    <div class="details">
                        <div class="space-heading">
                            <h1 class="heading1">Chelsea Meeting Room Space</h1>
                            <div class="location">
                                <span>Midtown, </span>
                                <span>New York, NY</span>
                            </div>
                        </div>
                        <div class="space-summary">
                            <div class="summary">
                                <span class="guest">12 people</span>
                            </div>
                            <div class="host">
                                <div class="host-avatar"></div>
                                <p class="host-name">Olawale O.</p>
                            </div>
                        </div>
                        <div class="reviews-container">
                            <div class="reviews">
                                <div class="review">
                                    <div class="avatar"></div>
                                    <div class="comment">
                                        <span class="text">
                                            <span class="text">
                                                <q>I would definitely recommend this space.</q>
                                            </span>
                                        </span>
                                        <span class="name">
                                            Tiffany S.
                                        </span>
                                    </div>
                                </div>
                                <div class="review">
                                    <div class="avatar"></div>
                                    <div class="comment">
                                        <span class="text">
                                            <q>I would definitely recommend this space.</q>
                                        </span>
                                        <span class="name">
                                            Tiffany S.
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>

                    <div class="booking-form">
                        <form action="" method="post">
                            <div class="booking-form__fields">
                                <div class="field">
                                    <label class="label" for="firstname">First Name</label>
                                    <input type="text" placeholder="tosin">
                                </div>
                                <div class="field">
                                    <label class="label" for="firstname">Last Name</label>
                                    <input type="text" placeholder="uche">
                                </div>
                                <div class="field">
                                    <label class="label" for="phone">Phone</label>
                                    <input type="text" placeholder="08092773785">
                                </div>
                                <div class="field">
                                    <label class="label" for="email">Email</label>
                                    <input type="email" placeholder="tosinuche@patakivenue.com">
                                </div>
                                <div class="field">
                                    <label class="label" for="inspectiondate">Inspection Date</label>
                                    <input type="text">
                                </div>
                                <div class="field">
                                    <label class="label" for="email">Event Date</label>
                                    <input type="email" placeholder="">
                                </div>
                                <div class="field">
                                    <label class="label" for="flexible">
                                        <span>Is Date Flexible</span>
                                        <div>
                                            <input type="checkbox">
                                        </div>
                                    </label>
                                </div>
                                <div class="field">
                                    <label class="label" for="purpose">Purpose</label>
                                    <input type="purpose" placeholder="Wedding">
                                </div>
                            </div>
                            <div class="field btn__field">
                                <button class="secondary__bg-color">Reserve space</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
                <div class="space__details-bottom">
                    <div class="about-space">
                        <h6 class="heading6">About the space</h6>
                        <p>
                            We provide very cool, yet professional, office space and
                             meeting rooms to hundreds of companies in NYC. 
                             We are currently in the Flatiron and Chelsea areas. 
                             We are home to many start ups and established companies. 
                             We provide offices and meeting rooms on an 
                             hourly/daily/monthly basis for any size group with access 
                             to common areas, cafes, lounges etc. We are 
                            trying to change the way people feel about where they work.
                        </p>
                    </div>
                     <div class="included-in-booking">
                        <h6 class="heading6">Included in your booking</h6>
                        <div class="amenities">
                            <h6 class="small-heading6">Amenities</h6>
                            <ul class="amenities-list">
                                <li>Screen</li>
                                <li>Whiteboard</li>
                                <li>Projector</li>
                                <li>Wi-Fi</li>
                                <li>Coffee</li>
                            </ul>
                        </div>
                        <div class="features">
                            <h6 class="small-heading6">Features</h6>
                            <ul class="features-list">
                                <li>Screen</li>
                                <li>Whiteboard</li>
                                <li>Projector</li>
                                <li>Wi-Fi</li>
                                <li>Coffee</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</template>

<script>
    import Navbar from "../shared/Navbar.vue"
    import Footer from "../shared/Footer.vue"
    export default {
        name: 'Space', 
        components: {
            Navbar,Footer
        }
    }
</script>

<style lang="scss" scoped>
    .space-container {
        width: 100%;
        max-width: 115rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        position: relative;
        margin-top: 6rem;
        margin-right: auto;
        margin-left: auto;
    }
    .carousel {
        height: 48vh;
        background-color: red;
        margin-bottom: 2.5rem;
    }
    .space__details-top{
        margin-bottom: 2rem;
    }
    .details{
        margin-bottom: 2rem;
    }
    .space-summary{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
   
    .heading1{
        margin-bottom: 0;
    }
    .location{
        margin-bottom: 1.2rem;
    }
    .location, .summary, .host {
        font-size: 1.4rem;
        color: rgb(126, 116, 116);
        font-weight: bold;
    }
    .host{
        text-align: center;
    }
    .host-avatar{
        width: 100px;
        height: 100px;
        border-radius: 50%;
        background-color: yellow;
    }
    .reviews-container {
        display:flex;
        justify-content: space-between;
        min-height: 5rem;
        margin-bottom: 5rem;
    }
    .reviews {
        font-size: 1.8rem;
        display: none;
    }
    .review {
        margin-bottom: 2rem;
        display: flex;
        justify-content: space-between;
    }
    .review .avatar{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background-color: red;
        margin-right: 1.5rem;
    }
    .booking-form__fields{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 1.5rem;
    }
    .booking-form__fields .field{
        flex: 0 0 calc(50% - 1rem);
    }
    .label {
        display: block;
        margin-bottom: 0.5rem;
        font-size: 1.5rem;
    }
    .booking-form__fields input{
        width: 100%;
        padding: 1rem 0.5rem;
        font-size: 1.5rem;
        outline: none;
        border-radius: 0.5rem;
        border: 1px solid rgba(173, 160, 160, 0.795);
    }
    .field input:focus{
        box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.3);
        border-color: #8cc5f3;
    }
    .field button {
        box-shadow: none;
    }
    .about-space {
        margin-bottom: 2rem;
    }
    .about-space p {
        font-size: 1.6rem;
        line-height: 1.8;
        color: #000;
        text-align: justify;
    }
    .amenities-list, .features-list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .amenities-list li, .features-list li {
        flex: 0 0 calc(50% - 2rem);
        font-size: 1.8rem;
        margin-bottom: 1.5rem;
    }
    @media screen and (min-width: 600px){
        .reviews {
           display: block;
        }
    }
    @media screen and (min-width: 1200px){
  
        .space__details-top{
            display: flex;
            justify-content: space-between;
        }
        .details{
            flex:  0 0 calc(55% - 2rem);
        }
        .booking-form {
            flex: 0 0 45%;
        }
       
    }
</style>