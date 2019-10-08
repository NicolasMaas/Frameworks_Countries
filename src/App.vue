<template>
    <div id="app">
        <div class="o-container">
            <div class="o-row o-row--header">
                <h1 class="c-nav__title">Country Explorer</h1>

                <nav class="c-nav">
                    <router-link class="c-nav__link" to="/">Home</router-link>
                    <router-link class="c-nav__link" to="/settings">Settings</router-link>
                </nav>
            </div>
        </div>
        <router-view />
    </div>
</template>

<style lang="scss">
@import "@/assets/style/screen.scss";
@import "@/assets/style/6-components/navigation.scss";
</style>
