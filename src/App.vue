<template>
    <div id="app">
        <header>
            <div class="navbar navbar-dark bg-dark shadow-sm">
                <div class="container">
                    <a href="https://www.facebook.com/birdiesoutdooradventures" class="text-white"
                        >Facebook</a
                    >

                    <a href="https://www.instagram.com/lord_smoke/" class="text-white">Instagram</a>

                    <a href="https://www.twitch.tv/lordsmoke451" class="text-white">Twitch</a>
                </div>
            </div>
        </header>
        <router-view />
    </div>
</template>

<script>
export default {
    name: 'App',
    components: {},
    data() {
        return {}
    },
    computed: {}
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
