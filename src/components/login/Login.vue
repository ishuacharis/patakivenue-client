<template>
    <section>
        <div class="auth">
            <div class="container">
                <div class="auth__form-container">
                    <div class="auth__form-header">
                        <h1 class="heading1">Welcome back</h1>
                        <h6 class="heading6">Please Log in</h6>
                    </div>
                    <div class="auth__form-content">
                        <form action="" method="post">
                            <div class="auth__button">
                                <button class="btn google-btn">Continue with Google</button>
                                <button class="btn facebook-btn">Continue with Facebook</button>
                            </div>
                            <div class="or">
                                <span class="line"></span>
                                <span class="text">or</span>
                                <span class="line"></span>
                            </div>
                            <div class="fields">
                                <div class="field">
                                    <input type="text" class="inputtext" placeholder="Email">
                                </div>
                                <div class="field">
                                    <input type="text" class="inputtext" placeholder="Password">
                                </div>
                                <div class="field btn__field">
                                    <button class="secondary__bg-color">Log in</button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="auth__form-footer">
                            <div>
                                <p>
                                    <a href="#">
                                        Forgot password
                                    </a> 
                                </p>
                            </div>
                            <div>
                                <p>Do't have an account?  <a href="#">Register</a></p>
                            </div>
                        </div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default {
    
}
</script>


<style lang="scss" scoped>
    .auth{
        height: 100vh;
    }
    .auth__form-container {
        text-align: center;
        width: 100%;
        margin: 0 auto;
        padding: 1.2rem;
        box-shadow:  2px 2px 10px 1px rgba(0, 0, 0, 0.3);
        height: 100vh;
    }
    .auth__form-header {
        margin-bottom: 5rem;
    }
    .auth__button {
        margin-bottom: 1rem;
    }
    .btn{
        display: block;
        width: 100%;
        padding: 1.5rem 0.5rem;
        font-size: 1.5rem;
        outline: none;
        border-radius: 0.5rem;
        border: 1px solid transparent;
        margin-bottom: 1.2rem;
        background-color: transparent;
    }
    .google-btn {
        border-color: red;
    }
    .facebook-btn {
        border-color: blue;
    }
    .auth__form-content{
        margin-bottom: 1.5rem;
    }
    .or {
        margin-bottom: 1rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .or .line{
        flex: 2;
        height: 1px;
        background-color: #ccc;
    }
    .or .text {
        font-size: 1.5rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
    }
    .auth__form-footer div:not(:last-child){
        margin-bottom: 1.5rem;
    }
    p{
        font-size: 1.5rem;
        line-height: 1.6;
        letter-spacing: 0.2px;
    }
    @media screen and (min-width: 768px){
        .auth__form-container {
            width: 48.92rem;
        }
    }
</style>