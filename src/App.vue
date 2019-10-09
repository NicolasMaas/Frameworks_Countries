<template>
    <div id="app">
        <div class="o-container">
            <div class="o-row o-row--header">
                <router-link to="/">
                    <h1 class="c-nav__title">Country Explorer</h1>
                </router-link>

                <nav class="c-nav">
                    <router-link class="c-nav__link" to="/">Home</router-link>
                    <router-link class="c-nav__link" to="/about">About</router-link>
                </nav>
            </div>
        </div>
        <router-view />
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "@/assets/style/screen.scss";
</style>
