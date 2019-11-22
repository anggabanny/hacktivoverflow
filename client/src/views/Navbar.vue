<template>
<div>
  <b-navbar toggleable="sm" type="light" variant="light" class="top-orange p-0">
    <button class="btnStun p-2 ml-5" @click="$router.push('/')">
      <img src="../assets/stunOverflow.png" style="height:30px;" alt="icon">
    </button>
    <div class="ml-auto">
      <button v-if="!isLogin" class="btnStun p-2 ml-5 mr-3" @click="$router.push('/user/login')">
        <i class="fas fa-user-circle fa-2x"></i>
      </button>
      <button v-if="isLogin" class="btnStun btn-primary p-2 ml-5 mr-3" @click="logout">
        Logout
      </button>
    </div>
  </b-navbar>
</div>
</template>

<script>
import Swal from 'sweetalert2'
import { mapState } from 'vuex'
export default {
  name: 'navbar-parent',
  computed: mapState([ 'isLogin' ]),
  methods: {
    logout(){
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
      localStorage.removeItem('token')
      this.$store.commit('SET_LOGIN')
      this.$router.push('/')
    }
  },
}
</script>

<style>

.top-orange{
  border-top: 3px solid #E67C26;
  transition: 0.4;
  border-bottom: 1px solid rgb(218, 218, 218);
}
.btnStun{
  border: none;
  background-color: #F8F9FA;
}
.btnStun:hover{
  background-color: rgb(201, 201, 201);
}
.btnStun:focus{
  border: none;
  outline: none;
}
</style>
