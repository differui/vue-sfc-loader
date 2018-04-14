<template>
  <div class="app">
    <div class="app_logo">
      <img
        class="app_img"
        width="140"
        height="140"
        src="https://vuejs.org/images/logo.png" />
    </div>
    <h1 class="app_title">{{ title }}</h1>
    <ul class="app_list">
      <li>
        <a
          class="app_button"
          href="mailto: differui@gmail.com">Contact</a>
      </li>
      <li>
        <a
          class="app_button"
          href="https://github.com/differui/vue-sfc-loader">Github</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Vue SFC loader for browser',
      msg: 'sfc loader works',
    };
  },
}
</script>

<style lang="sssa">
html {
  font-family: 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 300;
}

html, body, #app, .app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.app {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &_img {
    width: 140px;
    height: 140px;
    display: block;
  }

  &_title {
    color: #2c3e50;
    font-weight: 300;
  }

  &_list {
    display: flex;
    list-style-type: none;
    padding: 0;
    margin: 1em 0 0;
  }

  &_list li:last-child {
    margin-left: 1em;
  }

  &_button {
    color: #42b983;
    border: solid 1px #42b983;
    padding: 0.75em 2em;
    border-radius: 2em;
    text-decoration: none;
  }
}
</style>