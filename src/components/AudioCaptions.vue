<template>
  <div>
    <p class="status">{{ deepgramStatus }}</p>
    <div class="btn-container">
      <button class="dg-btn" @click="openStream()">Start Captions</button>
      <button class="dg-btn-stop" @click="closeStream()">Stop Captions</button>
    </div>
  </div>
</template>

<script>
import { ref, watch } from 'vue';
import useDeepgramSocket from '../composables/useDeepgramSocket';
export default {
  setup() {
    let deepgramStatus = ref('Deepgram Not Connected');
    const { DGStatus_socket, openStream, closeStream } = useDeepgramSocket();
    watch(DGStatus_socket, () => {
      deepgramStatus.value = DGStatus_socket.value;
    });

    return { deepgramStatus, openStream, closeStream };
  },
};
</script>

<style scoped>
.btn-container {
  display: flex;
  justify-content: center;
}
.status {
  height: 5vh;
}
</style>
