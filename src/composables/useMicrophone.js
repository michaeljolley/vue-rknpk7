async function getAudio() {
  try {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    const mediaRecorder = new MediaRecorder(mediaStream, {
      audio: true,
    });
    return mediaRecorder;
  } catch (e) {
    console.error(e);
  }
}

export default async function useMicrophone() {
  const microphone = await getAudio();
  return { microphone };
}
