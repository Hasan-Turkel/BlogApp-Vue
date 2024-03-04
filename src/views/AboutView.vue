<script setup lang="ts">
import { Icon } from '@iconify/vue'
</script>

<template>
  <div className="d-flex justify-content-center m-4 ">
      <div className="card my-5" style="width: 20rem;">
        <div className="card-body text-center">
          <p className="card-text  fs-3">
            This blog has been developed by <br />
            <span className="fw-bolder">Hasan Turkel</span> <br /> who is a
            full-stack developer.
          </p>
          <hr />
          <h4 >For Contact</h4>
          <div className="d-flex justify-content-center gap-3">
            <a href="https://www.linkedin.com/in/hasan-turkel/" target="blank">
              <Icon icon="mdi:linkedin"  class="fs-2 text-primary" />
            </a>

            <a href="https://github.com/Hasan-Turkel" target="blank">
              <Icon icon="mdi:github"  class="fs-2 text-dark" />
            </a>

            <a href="mailto:mhturkel@gmail.com" target="blank">
              <Icon icon="mdi:gmail"  class="fs-2 text-danger" />
            </a>
          </div>
        </div>
      </div>
    </div>
</template>


