<script>
  import axios from 'axios'

  import list from './test'

  axios.get('http://localhost:3000').then(res => {
    console.log(res.data)
  })

  export default {
    
  }
</script>
<template>
  <div>
    <h3>user-parent</h3>
    <nuxt-child />
  </div>
</template>