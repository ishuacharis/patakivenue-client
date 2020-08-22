<template>
    <footer>
        <div class="container">
            <div class="footer">
                <div class="logo">
                    <h3>Patakivenue</h3>
                </div>
                <div class="footer__tile">
                    <div class="footer__tile-single">
                        <h6 class="heading6 footer__heading">Company</h6>
                        <ul class="footer__tile-single__links">
                            <li><a class="footer__links" href="#">About</a></li>
                        </ul>
                    </div>
                    <div class="footer__tile-single">
                        <h6 class="heading6 footer__heading">Social</h6>
                        <ul class="footer__tile-single__links">
                            <li><a class="footer__links" href="#">Twitter</a></li>
                            <li><a class="footer__links" href="#">Facebook</a></li>
                            <li><a class="footer__links" href="#">Instagram</a></li>
                        </ul>
                    </div>
                    <div class="footer__tile-single">
                        <h6 class="heading6 footer__heading">Explore</h6>
                        <ul class="footer__tile-single__links">
                            <li><a class="footer__links" href="#">Activities</a></li>
                        </ul>
                    </div>
                    <div class="footer__tile-single">
                        <h6 class="heading6 footer__heading">Explore</h6>
                        <ul class="footer__tile-single__links">
                            <li><a class="footer__links" href="#">Activities</a></li>
                        </ul>
                    </div>
                </div>
                <div class="copyright">
                    <span>&copy;</span>
                    <span>Patakivenue</span>
                    <span>Terms</span>
                    <span>Policy</span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang="scss" scoped>
    footer{
        width: 100%;
        height: 100vh;
        background-color: #090009;
        color: #fff;
    }
    .footer{
        padding: 2rem;
        width: 100%;
        height: 100vh;
        position: relative;
        display: flex;
        flex-direction: column;

    }
    .logo{
        font-size: 3rem;
        width: 100%;
        flex: 1;
    }
    .footer__heading{
        color: #ba55d3;
        opacity: 0.4;
    }
    .footer__tile{
        display: flex;
        width: 100%;
        flex-wrap: wrap;
        flex: 8;
    }
    .footer__tile-single{
        margin-bottom: 2rem;
        width: calc(50% - 1rem);
    }
    .footer__tile-single li{
      
        margin-bottom: 1.5rem;
    }
    .footer__tile-single li:last-child{
        margin-bottom: 0;
    }
    .footer__links{
        display: inline-block;
        color: #fff;
        font-size: 1.8rem;
    }
    .footer__links:hover{
        color: #ba55d3;
    }
    .copyright{
        width: 100%;
        font-size: 1.3rem;
        flex: 1;
    }
    .copyright span{
        display: inline-block;
        margin-left: 1rem;
    }
    .copyright span:first-child {
        margin-left: 0;
    }
</style>