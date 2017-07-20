<template lang="html">
  <div class="container">
    <div class="row">
      <h1>Welcome to Hacktivpress</h1>
    </div>
    <div class="row content">
      <div class="col-3">
        <h4>Article List</h4>
        <ArticleList></ArticleList>
      </div>
      <div class="col-9">
        <Articles></Articles>
      </div>
    </div>
  </div>
</template>

<script>
// import ArticleList from '@/components/ArticleList'
import Article from '@/components/Article'
export default {
  components: {
    Article
  }
}
</script>

<style lang="css" scoped>
.content {
  margin-top: 30px;
}
</style>
