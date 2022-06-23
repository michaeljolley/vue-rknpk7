import { ref } from 'vue';
import Deepgram from '@deepgram/sdk';
import useMicrophone from './useMicrophone';

let DGStatus_socket = ref('');
let apiKey;
let microphone;

function openDeepgramSocket(microphone) {
  const deepgram = new Deepgram('aef309d20480239d448c96e765d55c26b60d6f83');
  const deepgramSocket = deepgram.transcription.live({ punctuate: true });

  deepgramSocket.addListener('open', () => {
    if (microphone.state != 'recording') {
      DGStatus_socket.value = 'Connected to Deepgram';
      console.log('Connection opened.');

      microphone.addEventListener('dataavailable', async (event) => {
        if (event.data.size > 0 && socket.readyState == 1) {
          deepgramSocket.send(event.data);
        }
      });

      microphone.start(200);
    }
  });

  deepgramSocket.addListener('transcriptReceived', (received) => {
    const transcript = received.channel.alternatives[0].transcript;
    if (transcript && received.is_final) {
      DGStatus_socket.value = transcript + '';
    }
  });

  deepgramSocket.addListener('close', () => {
    console.log('Connection closed.');
  });
}

const openStream = () => {
  if (DGStatus_socket.value != 'Connected') {
    DGStatus_socket.value = 'Connecting';
    openDeepgramSocket(apiKey, microphone);
  }
};

const closeStream = () => {
  microphone.stop();
  DGStatus_socket.value = 'Not Connected';
};

export default function useDeepgramSocket() {
  useMicrophone().then((microphoneRes) => {
    microphone = microphoneRes.microphone;
  });
  return { DGStatus_socket, openStream, closeStream };
}
