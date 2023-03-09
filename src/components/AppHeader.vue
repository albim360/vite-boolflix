<template>
  <header class="bg-dark">
    <div class="container-fluid">
      <div class="row align-items-center">
        <div class="col-md-3 col-6">
          <img src="../public/Netflix-logo-500x281.png" alt="Logo" class="img-fluid" style="height: 50px; margin-right: 50px;">
        </div>
        <div class="col-md-9 col-6">
          <MovieSearch @search="searchMovies" />
        </div>
      </div>
    </div>
  </header>
</template>


<style>
header {
  background-color: black;
  min-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

img {
  height: 50px;
}
</style>
