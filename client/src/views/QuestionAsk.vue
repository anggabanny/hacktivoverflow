<template>
  <div class="row">
      <div class="col-2">
      </div>
      <div class="col-6" style="height:80vh">
          <h3 class="text-left mt-3 mb-5"> Ask a public question</h3>
          <div class="mt-3 question container">
            <b-form class="text-left">
                <div class="form-group">
                <div class="d-flex flex-column">
                  <label for="" class="mt-2 ml-1 my-0"> <strong> Title </strong></label>
                  <label for="" class="ml-1 my-0" style="font-size:12px;">Be specific and imagine you’re asking a question to another person</label>
                </div>
                  <input type="text" v-model="title"
                    class="form-control" style="font-size:15px;" name="" id="" aria-describedby="helpId" placeholder="e.g. Is there an R function for finding the index of an element in a vector?">
                </div>
                <div class="mt-2">
                    <div class="d-flex flex-column">
                        <label for="" class="mt-2 ml-1 my-0"> <strong> Body </strong></label>
                        <label for="" class="ml-1 my-0 mb-1" style="font-size:12px;">Include all the information someone would need to answer your question</label>
                    </div>
                    <wysiwyg v-model="myHTML" />
                </div>
                <div class="">
                    <hr>
                    {{ myHTML }}
                    <hr>
                </div>
                <!-- <div class="d-flex flex-column"> -->
                  <!-- <label for="" class="mt-2 ml-1 my-0"> <strong> Tags </strong></label> -->
                  <!-- <label for="" class="ml-1 my-0" style="font-size:12px;">Add up to tags to describe what your question is about</label> -->
                <!-- </div> -->
                <!-- <input type="text" -->
                    <!-- class="form-control mb-5" style="font-size:15px;" name="" id="" aria-describedby="helpId" placeholder="e.g. (reactjs html5 mongodb)"> -->
            </b-form>
          </div>
          <div class="text-left ml-1 mt-3">
            <button @click="create" type="button" class="btn btn-primary mt-3">Review your question</button>
          </div>
      </div>
      <div class="col-3 mt-5">
          <div class="card text-center mt-5">
            <div class="card-header">
              <ul class="nav nav-tabs card-header-tabs">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active tab</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Tab</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled tab</a>
                </li>
              </ul>
            </div>
            <div class="card-body">
              <h4 class="card-title">Title</h4>
              <p class="card-text">Body</p>
            </div>
          </div>
      </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapState } from 'vuex'
export default {
    name: 'question',
    data() {
        return {
            myHTML: '',
            title : ''
        }
    },
    methods: {
      create(){
        let form = {
          title : this.title,
          description : this.myHTML
        }
        this.$store.dispatch('createQuestion', form)
          .then(({ data })=>{
            const Toast = Swal.mixin({
                  toast: true,
                  position: 'top-end',
                  showConfirmButton: false,
                  timer: 3000,
                  timerProgressBar: true,
                  onOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                  }
                })
                Toast.fire({
                  icon: 'success',
                  title: 'Create in successfully'
                })
                this.$router.push('/')
                this.$store.dispatch('allQuestion')
          })
          .catch(_=>{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Signin Failed!"
            });
          })
      }
    }
}
</script>

<style>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
.question{
    background-color: rgb(255, 255, 255);
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.158);
}
</style>