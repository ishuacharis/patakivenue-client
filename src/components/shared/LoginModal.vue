<template>
    <div id="loginModal">
        <div id="logIn" class="modal fade "  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <h3>Welcome Back</h3>
                        <form action="#" method="post">
                            <div class="form-group">
                                <input type="email" name="email" class="form-control" id ="signinEmail" placeholder="Email" autocomplete="off">
                            </div>
                            <div class="form-group">
                                <input type="password" name="pwd" class="form-control" id ="signinPassword" placeholder="Password">
                            </div>
                                <input type="submit" name="submit" class="form-control btn btn-event" id="login" value="Sign In">
                            <div class="modal-footer">
                                <input type="hidden" name="token" value="<?php print $csrf; ?>">
                            </div>
                        </form>
                        <p>Dont have an account <a href="#" data-toggle="modal" data-target="#signUp" data-dismiss="modal">Sign Up</a> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "LoginModal",
    data() {
        return {
            
        }
    },
    
}
</script>

<style lang="scss">


</style>