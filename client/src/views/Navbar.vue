<template>
<div>
  <b-navbar toggleable="sm" type="light" variant="light" class="top-orange p-0">
    <button class="btnStun p-2 ml-5" @click="$router.push('/')">
      <img src="../assets/stunOverflow.png" style="height:30px;" alt="icon">
    </button>
    <div class="ml-auto">
      <button class="btnStun p-2 ml-5 mr-3" @click="$router.push('/user/login')">
        <i class="fas fa-user-circle fa-2x"></i>
      </button>
    </div>
  </b-navbar>
</div>
</template>

<script>
export default {
  name: 'navbar-parent'
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
