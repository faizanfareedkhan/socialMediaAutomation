import React, { useRef, useState, useEffect } from "react";
import WaveSurfer from "wavesurfer.js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Mic, Trash2 } from "lucide-react";

const VoiceRecorder = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [recordedAudio, setRecordedAudio] = useState<Blob | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordedChunks = useRef<Blob[]>([]);
  const waveformRef = useRef<HTMLDivElement | null>(null);
  const waveSurfer = useRef<WaveSurfer | null>(null);

  // Start recording
  const startRecording = async () => {
    setShowDialog(true);
    setIsRecording(true);
    recordedChunks.current = [];

    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);
    mediaRecorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        recordedChunks.current.push(event.data);
      }
    };
    mediaRecorderRef.current.start();

    // WaveSurfer live audio setup
    waveSurfer.current = WaveSurfer.create({
      container: waveformRef.current!,
      waveColor: "#e4e4e7",
      progressColor: "#1e40af",
      interact: false,
      cursorWidth: 0,
    });

    const audioCtx = new AudioContext();
    const source = audioCtx.createMediaStreamSource(stream);
    waveSurfer.current.loadDecodedBuffer = null; // prevent crashing
    waveSurfer.current.microphone = {
      start: () => {
        waveSurfer.current?.setFilters([source]);
      },
    };

    waveSurfer.current.microphone?.start();
    waveSurfer.current.microphone?.startRendering?.();
  };

  // Stop recording and clear everything
  const stopRecording = () => {
    mediaRecorderRef.current?.stop();
    waveSurfer.current?.destroy();
    setIsRecording(false);
    setShowDialog(false);
  };

  // Finish recording and save blob
  const finishRecording = () => {
    stopRecording();

    const blob = new Blob(recordedChunks.current, { type: "audio/webm" });
    setRecordedAudio(blob);
  };

  // Reset everything
  const deleteRecording = () => {
    setRecordedAudio(null);
    recordedChunks.current = [];
  };

  return (
    <>
      {/* Record Button */}
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="h-8 w-8 p-2 hover:bg-gray-100"
        onClick={startRecording}
      >
        <Mic className="h-4 w-4" />
      </Button>

      {/* Delete Button */}
      {recordedAudio && (
        <Button
          variant="ghost"
          size="sm"
          className="text-destructive ml-2 h-8 w-8 p-2 hover:bg-gray-100"
          onClick={deleteRecording}
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      )}

      {/* Audio Preview */}
      {recordedAudio && (
        <audio
          src={URL.createObjectURL(recordedAudio)}
          controls
          className="mt-4"
        />
      )}

      {/* Dialog Modal */}
      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Recording...</DialogTitle>
            <DialogDescription>
              Speak now, your voice is being recorded.
            </DialogDescription>
          </DialogHeader>

          {/* Waveform */}
          <div
            ref={waveformRef}
            className="bg-muted mt-4 h-24 w-full rounded-md"
          />

          {/* Buttons */}
          <div className="mt-6 flex items-center justify-between">
            <Button variant="secondary" onClick={finishRecording}>
              Finish
            </Button>
            <Button variant="destructive" onClick={stopRecording}>
              Stop
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VoiceRecorder;
