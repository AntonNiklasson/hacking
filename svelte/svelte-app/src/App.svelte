<script>
  import Todos from './Todos.svelte'

  let todos = [
    {
      done: true,
      label: 'Call mom'
    },
    {
      done: false,
      label: 'Buy milk'
    },
    {
      done: false,
      label: 'Pay'
    }
  ]
  
</script>

<div class="wrapper">
<Todos items={todos} />
</div>

<style>
  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    --background: white;
    --text: black;

    font: 20px helvetica, arial, sans-serif;
    background: var(--background);
    color: var(--text);
    padding: 0;
  }

  .wrapper {
    max-width: 600px;
    width: 100%;
    padding: 0;
    margin: 0 auto;
  }
</style>
