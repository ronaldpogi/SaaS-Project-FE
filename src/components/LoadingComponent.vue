<template>
  <div>
    <div class="dot animate-bounce"></div>
    <div class="dot animate-bounce delay-150"></div>
    <div class="dot animate-bounce delay-300"></div>
  </div>
</template>

<script lang="ts" setup></script>

<style>
.dot {
  width: 6px;
  height: 6px;
  background-color: white;
  border-radius: 50%;
  display: inline-block;
}

/* Staggered bounce animation */
@keyframes bounce {
  0%,
  80%,
  100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}

.animate-bounce {
  animation: bounce 1s infinite;
}

.delay-150 {
  animation-delay: 0.15s;
}

.delay-300 {
  animation-delay: 0.3s;
}
</style>
