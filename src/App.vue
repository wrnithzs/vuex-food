<template>
  <div id="app">
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <router-link :to="{ name: 'Home' }" class="nav-link">
          Home
          <span class="sr-only">(current)</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'CreateMenu' }" class="nav-link">
          CreateMenu
          <span class="sr-only">(current)</span>
        </router-link>
      </li>
    </ul>
    <img
      width="100%"
      src="https://www.vigsitainteractives.com/wp-content/uploads/2019/07/banner.jpg"
    />
    <br />
    <br />
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
