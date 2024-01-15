<template>
    <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: #563F7A">
        <div class="container">
            <router-link to="/" class="navbar-brand" active-class="active">
                Ürün Listesi
            </router-link>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link to="/urun-islemleri" class="nav-link" active-class="active">
                            Ürün İşlemleri
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/urun-cikisi" class="nav-link" active-class="active">
                            Ürün Çıkışı
                        </router-link>
                    </li>
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