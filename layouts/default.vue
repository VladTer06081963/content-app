<template>
  <div class="wrapper">
    <header>
      <a href="/">Home</a>
      <a href="/about">about</a>
      <a href="/my-page">my-page</a>
      <a href="/primer">primer-1</a>
      <!-- Ваш заголовок (header) -->
    </header>
       <NuxtPage/>
       <MistralComponent />
    <MyHello/>
    <footer>
      <!-- Ваш подвал (footer) -->
      <p>
        это мой футер
      </p>
      hello footer
    </footer>
  </div>
</template>

<script>
export default {
  // Опционально: добавьте любые свойства или методы, необходимые для вашего шаблона
}
</script>

<style>
header {
  background-color: #343541;
  padding: 10px;
}
a{
  padding: 5px;
}
a:hover {
  color: yellow;
}
NuxtPage {
  flex: 1;
}
footer {
  color: blueviolet;
  text-align: center;
}
</style> 

