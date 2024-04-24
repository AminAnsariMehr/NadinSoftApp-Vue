<template>
    <div class="container">
        <main class="main">
            <Menu></Menu>
            <router-view></router-view>
        </main>
    </div>
</template>


<script>
import Menu from "./components/Menu/Menu.vue";

export default {
    components: {
        "Menu": Menu,
    }
}
</script>

<style src="./style.css"></style>
