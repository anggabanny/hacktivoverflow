<template>
        <div class="col d-flex flex-column p-0">
          {{ allQuestions }}
            <div class="d-flex flex-row text-left" style="border-bottom:1px solid red;">
              <div class="card text-left mt-2 mb-2 ml-2">
                <div class="card-body py-2 px-2">
                  <h5 class="card-title mb-0 text-center vote">0</h5>
                  <p class="card-text votes">votes</p>
                </div>
              </div>
              <div class="card text-left mt-2 mb-2 ml-2">
                <div class="card-body py-2 px-2">
                  <h5 class="card-title mb-0 text-center vote">0</h5>
                  <p class="card-text votes">answers</p>
                </div>
              </div>
              <div class="card text-left mt-2 mb-2 ml-2">
                <div class="card-body py-2 px-2">
                  <h5 class="card-title mb-0 text-center vote">0</h5>
                  <p class="card-text votes">views</p>
                </div>
              </div>
              <div class="d-flex flex-column">
                <div class="card text-left mt-2 mb-2 ml-2">
                <div class="card-body py-2 px-2">
                  <h4 class="card-title mt-2 mb-0 text-center">
                    {{ title }}
                  </h4>
                  <div class="d-flex flex-row mt-2">
                    <b-badge variant="primary">tags</b-badge>
                  </div>
                </div>
              </div>
              </div>
              <div class="mt-auto ml-auto mr-3">
                <p class="mb-1 textupdated" style="color:grey">created by <a href="">{{ author }}</a> <b style="color:grey;">1</b></p>
              </div>
            </div>
        </div>
</template>

<script>
let CronJob = require('cron').CronJob;
import { mapState } from 'vuex'
export default {
  props : [
    'title',
    'author'
  ],
  data() {
    return {
    }
  },
  methods: {
    deleteAll(){
      new CronJob('* * * 29 * *', function() {
        console.log('You will see this message every second');
      }, null, true, 'Indonesia/Jakarta');
    }
  },
}
</script>

<style>

</style>