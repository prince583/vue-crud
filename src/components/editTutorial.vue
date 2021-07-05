<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="tutorial.title"
          name="title"
        />
      </div>

      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="tutorial.description"
          name="description"
        />
      </div>

      <button @click="saveTutorial" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You updated  successfully!</h4>
      
       

    </div>
  </div>
</template>

<script>
import TutorialDataService from "../services/TutorialDataService";

export default {
  name: "add-tutorial",
  data() {
    return {
      tutorial: {
        id: null,
        title: "",
        description: "",
        published: false
      },
      submitted: false
    };
  },
created(){
    console.log(this.$route);
    const id = this.$route.params.id;
    if(id){
        this.getTutorial(id);
    }else{
        this.$router.push("/");
    }

},
  methods: {
    saveTutorial() {
      const data = {
          id:this.tutorial.id,
        title: this.tutorial.title,
        description: this.tutorial.description
      };

      TutorialDataService.update(data)
        .then(response => {
          //this.tutorial.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
     getTutorial(id){
          TutorialDataService.get(id)
        .then(response => {
          this.tutorial = response.data;
          console.log(response.data);
          //this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });

     }
    
    //newTutorial() {
    //  this.submitted = false;
    //  this.tutorial = {};
   // }
  }
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>