<script>


</script>

<template>
  <header class="bg-black text-white">
    <div class="wrapper">
      <nav>
        <RouterLink to="/"></RouterLink>
        <RouterLink to="/shopping01">shopping01 </RouterLink> 
          <RouterLink to="/shopping03">shopping03 </RouterLink>
        <RouterLink to="/shopping04">shopping04 </RouterLink>
        <RouterLink class="flex justify-end mr-4" to="/shopping02"><img src="./img/svgexport-1.svg" alt=""></RouterLink>
     
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>


</style>
