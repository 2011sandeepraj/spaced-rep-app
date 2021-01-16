<template>
  <div class="home p-grid">

    <form class="p-col-6 p-offset-3 p-fluid">
      <div class="p-field">
        <label  for="question">Question</label>
       <InputText id="question" class="p-field"/>
      </div>
      <div class="p-field">
        <label  for="answer">Answer</label>
       <InputText id="answer" class="p-field"/>
      </div>
      <Button> Add New Card </Button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {

  },
  methods: {
    createCard () {

    }
  }
}
</script>
