<template>
  <div>
    <ul>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="postcss" scoped>
* {
  box-sizing: border-box;
}

ul {
  margin: 0;
  display: flex;
  list-style-type: none;
  padding: 1em;
  justify-content: flex-end;
}

ul li {
  margin-right: 1em;
  margin-left: 0;
}

ul li a {
  text-decoration: none;
  font-weight: 700;
  color: #2c3e50;
}

ul li a:hover {
  text-decoration: underline;
}
</style>