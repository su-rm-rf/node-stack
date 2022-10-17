<template>
  <div>
    <h3>user-list</h3>
    <nav>
      <nuxt-link v-for="i in [1,2,3,4,5]" :to="`/user/${i}`" :key="i">user{{ i }}</nuxt-link>
    </nav>
  </div>
</template>