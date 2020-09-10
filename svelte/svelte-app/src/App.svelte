<script>
  import Editor from './Editor.svelte'

	let value = "lorem ipsum"
	let count = 0;
	
</script>

<div class="editor-wrapper">
  <Editor />
</div>

<style>
  :global(body) {
    font: 16px helvetica, arial, sans-serif;
    background: red;
  }

  .editor-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background: papayawhip;
  }
</style>
