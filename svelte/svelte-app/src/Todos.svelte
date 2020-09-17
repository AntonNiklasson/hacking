<script>
  export let items = []
</script>

<ul>
  {#each items as item}
    <li>
      <input type="checkbox" checked={item.done}>
      <span>{item.label}</span>
    </li>
  {/each}
</ul>

<style>
  ul {
    padding: 0;
    list-style: none;
  }
  li {
    background: #EAEAEA;
  }
</style>
