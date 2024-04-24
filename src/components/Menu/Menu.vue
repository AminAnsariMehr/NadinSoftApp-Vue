<template>
    <ul class="menu" id="menu">
        <li class="menuItem">
            <router-link class="menuItem__routeLink" to="/dashboard">
                <i class="fa-solid fa-house menuItem__icon"></i>
                <span class="menuItem__title">Dashboard</span>
            </router-link>
        </li>

        <li class="menuItem">
            <router-link class="menuItem__routeLink" to="/todo">
                <i class="fa-solid fa-square-check menuItem__icon"></i>
                <span class="menuItem__title">Todo</span>
            </router-link>
        </li>

        <li class="menuItem">
            <router-link class="menuItem__routeLink" to="/weather">
                <i class="fa-solid fa-cloud menuItem__icon"></i>
                <span class="menuItem__title">Weather</span>
            </router-link>
        </li>

        <li class="menuItem">
            <router-link class="menuItem__routeLink" to="/profile">
                <i class="fa-solid fa-user menuItem__icon"></i>
                <span class="menuItem__title">Profile</span>
            </router-link>
        </li>

    </ul>
</template>


<script>
export default {

}
</script>

<style src="./Menu.css"></style>