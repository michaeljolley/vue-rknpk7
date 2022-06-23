<template>
  <div>
    <h1>VIP Channel</h1>
    <audio-captions />
  </div>
</template>
<script>
import AudioCaptions from './components/AudioCaptions.vue';
export default {
  components: {
    AudioCaptions,
  },
};
</script>
<style>
h1,
h2 {
  font-family: 'Cairo', sans-serif;
}

body {
  font-family: 'Source Sans Pro', sans-serif;
  height: 100vh;
  text-align: center;
}

button {
  font-family: 'Fira Code', sans-serif;
  height: 35px;
  width: 175px;
  padding: 0.5rem 1.5rem;
  border-radius: 0.375rem;
  display: flex;
  justify-content: center;
  font-weight: 700;
  border: 1px solid #141e29;
}

input {
  border-radius: 0.375rem;
  height: 30px;
  width: 150px;
  margin: 0 10px;
  border: 1px solid #141e29;
  font-family: 'Fira Code', sans-serif;
}

.dg-btn {
  background-color: #38edac;
  color: #141e29;
}

.dg-btn:hover {
  background-color: #80f4ca;
}

.dg-btn:active {
  background-color: #00a971;
}

.dg-btn-stop {
  margin-left: 10px;
  background-color: #fe5c5c;
}

.dg-btn-stop:hover {
  background-color: #fe8888;
}

.dg-btn-stop:active {
  background-color: #d04b4b;
}

.link {
  color: #fb3640;
}
</style>
