<template>
    <nav class="navbar fixed-bottom  navbar-light" style="background-color: #bd91e5;">
        <div class="container">
            <span class="navbar-text mr-auto">
                <strong><a href="https://github.com/sevketardam">github/sevketardam</a></strong> | Şevket Arda
            </span>
            <span class="navbar-text my-2 my-lg-0 mr-3">
                <strong>Alış Tutarı : </strong>
                <span class="badge text-bg-danger">{{ $filters.currency(getTradeResult.purchase) }}</span>
            </span>
            <span class="navbar-text my-2 my-lg-0 mr-3">
                <strong>Satış Tutarı : </strong>
                <span class="badge text-bg-success">{{ $filters.currency(getTradeResult.sale) }}</span>
            </span>
            <span class="navbar-text my-2 my-lg-0">
                <strong>Bakiye : </strong>
                <span class="badge text-bg-primary">{{ $filters.currency(getTradeResult.balance) }}</span>
            </span>
        </div>
    </nav>
</template>

<script>

import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters([
            "getTradeResult"
        ])
    },
}
</script>

<style></style>