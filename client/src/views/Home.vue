<template>
  <div class="home">
    <!-- <div class="container"> -->
      <div class="row">
      <div class="col col-3 right-home pr-0 d-flex">
        <div class="d-flex flex-column  mt-4 ml-auto">
          <button type="button" class="buttonG">
            Home
          </button>
          <p class="mt-2 mb-0 text-left pl-3" style="font-weight: lighter;">
            PUBLIC
          </p>
          <button type="button" class="buttonGOne">
            <i class="fa fa-globe" aria-hidden="true"></i>
            Stun Overflow
          </button>
          <button type="button" class="buttonGOne mt-1">
            Tag
          </button>
          <button type="button" class="buttonGOne mt-1">
            User
          </button>
          <button type="button" class="buttonGOne mt-1">
            Job
          </button>
        </div>
      </div>
      <div class="col-5 d-flex flex-column p-0">
        <div class="main-mid-top">
        <div class="d-flex pt-3 pb-3">
          <div class="col d-flex flex-row">
            <h3 class="text-left ml-3">Top Questions</h3>
              <button type="button" class="btn btn-primary ml-auto" @click="$router.push('/ask')">Ask Question</button>
          </div>
        </div>
        <div class="row">
          <div class="col-7">
          </div>
          <div class="col">
            <div class="list-group d-flex flex-row mb-3  mr-1">
              <b-button type="button" class="btn-sm btn " variant="info">Interesting</b-button>
              <b-button type="button" class="btn-sm btn " variant="">Bountied</b-button>
              <b-button type="button" class="btn-sm btn " variant="">Hot</b-button>
              <b-button type="button" class="btn-sm btn " variant="">Week</b-button>
              <b-button type="button" class="btn-sm btn " variant="">Mount</b-button>
            </div>
          </div>
        </div>
        </div>
      <home-question/>
      </div>
      <div class="col mt-4 mr-5 ml-3">
        <div class="card">
          <img class="card-img-top" data-src="holder.js/100x180/?text=Image cap" alt="Card image cap">
          <div class="card-body">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Text</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Item 1</li>
            <li class="list-group-item">Item 2</li>
            <li class="list-group-item">Item 3</li>
          </ul>
        </div>
      </div>
    </div>
  <!-- </div> -->
  </div>
</template>

<script>
import Question from '../components/Question'
// @ is an alias to /src

export default {
  name: 'home',
  components: {
    'home-question': Question
  }
}
</script>

<style>
.textupdated{
  color: rgb(0, 0, 0);
}
.vote{
  font-size: 35px;
  font-weight:500;
}
.votes {
  font-weight:lighter;
}

*{
  overflow-x: hidden;
}
.right-home{
  height: 90vh;
  border-right: 1px solid rgb(218, 218, 218);
}

.buttonG{
  outline: none;
  border: none;
  background-color: rgba(0, 0, 0, 0.048);
  padding: 5px;
  padding-right: 60px;
  padding-left: 10px;
  font-weight: bold;
  border-right: 3px solid orangered;
}

.buttonGOne{
  outline: none;
  border: none;
  background-color: rgba(0, 0, 0, 0.048);
  padding: 5px;
  padding-right: 40px;
  padding-left: 20px;
  font-weight: bold;
  border-right: 3px solid orangered;
}

.main-mid-top{
  border-bottom: 1px solid rgb(218, 218, 218);
}
</style>
