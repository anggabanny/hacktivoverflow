<template>
  <div class="row">
      <div class="col-2">
      </div>
      <div class="col-4" style="height:80vh">
          <h1 class="text-center mt-3 mb-2" style="font-size:80px;"> Login </h1>
          <div class="mt-3 question container">
            <b-form class="text-center">
                <div class="form-group">
                </div>
                <div class="d-flex flex-column">
                  <label for="" class="mt-2 ml-1 my-0"> <strong> Email </strong></label>
                </div>
                <center>
                <input type="email"
                    v-model="email" class="form-control w-50 mb-4 text-center" style="font-size:15px;" name="" id="" aria-describedby="helpId" placeholder="Your Email">
                </center>
                <div class="d-flex flex-column">
                  <label for="" class="mt-2 ml-1 my-0"> <strong> Password </strong></label>
                </div>
                <center>
                <input type="password"
                    v-model="password" class="form-control w-50  text-center" style="font-size:15px;" name="" id="" aria-describedby="helpId" placeholder="Your Password">
                </center>
                <button type="button" @click="login" class="btn btn-primary mt-4 mb-3">Signin</button>
                <br>
                <p>belum memiliki account?
                    <button @click="$router.push('/user/register')" type="button" class="btn btn-secondary btn-sm">
                        daftar sekarang
                    </button>
                </p>
            </b-form>
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
import { mapState } from 'vuex'
import Swal from 'sweetalert2'
export default {
    name: 'login',
    data() {
        return {
            email : '',
            password : ''
        }
    },
    methods: {
        login(){
            let form = {
                email : this.email,
                password : this.password
            }
            this.$store.dispatch('loginUser', form)
                .then(user=>{
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
                  title: 'Login in successfully'
                })
                  localStorage.setItem('token', data.token)
                  // this.$store.commit('SET_LOGIN')
                  this.$router.push('/')
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