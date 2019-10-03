<template>
  <div id="app">
    <p v-if="!repoName">loading...</p>
    <p v-else>最受欢迎的库是<a :href="repoUrl">{{repoName}}</a></p>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      repoUrl: "",
      repoName: ""
    }
  },
  
  mounted() {
    const url = `https://api.github.com/search/repositories?q=vu&sort=starts`
    this.$http.get(url).then(
      res => {
        const result = res.data
        const mostRepo = result.items[0]
        this.repoUrl = mostRepo.html_url
        this.repoName = mostRepo.name

      },
    )
  },
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
