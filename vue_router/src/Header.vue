<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mb-5">
        <div class="container">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link exact active-class="active" to="/" class="nav-link">
                            Home
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/user" active-class="active" class="nav-link">
                            User
                        </router-link>
                    </li>
                    <!-- <li class="nav-item">
                        <router-link exact to="/user/2" active-class="active" class="nav-link">
                            User 2
                        </router-link>
                    </li> -->

                </ul>

            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style></style>