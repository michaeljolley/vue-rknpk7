<template>
  <div>
    <h1>VIP Channel</h1>
    <audio-captions />
  </div>
</template>

<script>
import AudioCaptions from '../components/AudioCaptions.vue';
export default {
  name: 'StreamChannel',
  components: {
    AudioCaptions,
  },
};
</script>
