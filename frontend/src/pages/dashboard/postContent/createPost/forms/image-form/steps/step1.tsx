"use client";
import { useRef, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Mic, Trash2, UploadCloud, Play, Pause } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const formSchema = z.object({
  platforms: z.array(z.string()).min(1, "Select at least one platform"),
  prompt: z.string().min(1, "Prompt is required"),
});

const platforms = [
  { id: "facebook", name: "Facebook" },
  { id: "twitter", name: "X (Twitter)" },
  { id: "instagram", name: "Instagram" },
  { id: "linkedin", name: "LinkedIn" },
];

export function PlatformForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      platforms: [],
      prompt: "",
    },
  });
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const shouldSaveRef = useRef(true); // new ref to control saving

  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [audioFile, setAudioFile] = useState<File | null>(null);

  useEffect(() => {
    if (recordedChunks.length === 0) return;

    const blob = new Blob(recordedChunks, { type: "audio/webm" });
    const file = new File([blob], "recording.webm", { type: "audio/webm" });

    const tempAudio = new Audio(URL.createObjectURL(blob));
    tempAudio.onloadedmetadata = () => {
      setDuration(tempAudio.duration);
      URL.revokeObjectURL(tempAudio.src);
    };

    setAudioFile(file);
    setAudioSrc(URL.createObjectURL(file)); // set audio src here too
  }, [recordedChunks]);

  const startRecording = async () => {
    setShowDialog(true);
    setIsRecording(true);
    shouldSaveRef.current = true; // allow saving on finish

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      setRecordedChunks([]); // reset previous recording

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0 && shouldSaveRef.current) {
          setRecordedChunks((prev) => [...prev, event.data]);
        }
      };

      mediaRecorder.start();
    } catch (err) {
      console.error("Microphone access error:", err);
      setShowDialog(false);
      setIsRecording(false);
      alert("Could not access microphone.");
    }
  };

  const stopOngoingRecordingOnly = () => {
    shouldSaveRef.current = false; // prevent saving
    const mediaRecorder = mediaRecorderRef.current;

    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
      mediaRecorderRef.current = null;
    }

    setIsRecording(false);
    setRecordedChunks([]); // clear chunks

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
    }
  };

  const finishRecording = () => {
    shouldSaveRef.current = true; // allow saving
    const mediaRecorder = mediaRecorderRef.current;

    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
      mediaRecorderRef.current = null;
    }

    setIsRecording(false);
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "audio/mpeg" || file.name.endsWith(".mp3")) {
        setAudioFile(file);
        setIsPlaying(false); // Reset play state when new file is selected
      } else {
        alert("Please select an MP3 file only");
      }
    }
  };

  // Toggle play/pause
  const togglePlayPause = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent form submission
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  // Handle time updates during playback
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  // Set duration when metadata loads
  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  // Handle seeking
  const handleSeek = (values: number[]) => {
    const seekTime = values[0];
    setCurrentTime(seekTime);
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  // Format time display
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleDeleteAudio = () => {
    setAudioFile(null);
    setIsPlaying(false);
    setCurrentTime(0);
    setDuration(0);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.src = "";
    }

    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // This is the fix!
    }
  };

  // Form submit handler
  function onSubmit(values: z.infer<typeof formSchema>) {
    // console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Platform Selection  */}
          <FormField
            control={form.control}
            name="platforms"
            render={() => (
              <FormItem>
                <div className="mb-4">
                  <FormLabel className="text-base">Platforms</FormLabel>
                </div>
                {platforms.map((platform) => (
                  <FormField
                    key={platform.id}
                    control={form.control}
                    name="platforms"
                    render={({ field }) => (
                      <FormItem
                        key={platform.id}
                        className="flex flex-row items-start space-y-0 space-x-3"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(platform.id)}
                            onCheckedChange={(checked) => {
                              const current = field.value || [];
                              return checked
                                ? field.onChange([...current, platform.id])
                                : field.onChange(
                                    current.filter(
                                      (value) => value !== platform.id,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {platform.name}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Prompt Section */}
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Prompt</FormLabel>
                <div className="relative w-full lg:max-w-[50%]">
                  <FormControl>
                    <Textarea
                      placeholder="Type your prompt here..."
                      className="min-h-[120px] pr-24 pb-10"
                      {...field}
                    />
                  </FormControl>

                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                    accept=".mp3,audio/mpeg"
                    className="hidden"
                  />

                  <div className="absolute right-2 bottom-2 flex gap-2">
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-2 hover:bg-gray-100"
                      onClick={startRecording}
                    >
                      <Mic className="h-4 w-4" />
                    </Button>

                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-2 hover:bg-gray-100"
                      onClick={() => fileInputRef.current?.click()}
                    >
                      <UploadCloud />
                    </Button>

                    {audioFile && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        className="h-8 w-8 p-2 hover:bg-gray-100"
                        onClick={handleDeleteAudio}
                      >
                        <Trash2 />
                      </Button>
                    )}
                  </div>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Audio Player Section */}
          {audioFile && (
            <div className="mt-4 w-full lg:max-w-[50%]">
              <div className="flex items-center gap-3">
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-10 w-10 p-0"
                  onClick={togglePlayPause}
                  disabled={!audioFile}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>

                <Slider
                  value={[currentTime]}
                  max={duration > 0 ? duration : 1}
                  step={0.1}
                  onValueChange={handleSeek}
                  className="flex-1"
                  disabled={!audioFile || duration <= 0}
                />

                <span className="text-muted-foreground w-20 text-right text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </span>
              </div>
            </div>
          )}

          <Button type="submit">Submit</Button>
        </form>

        {/* Hidden audio element */}
        <audio
          ref={audioRef}
          src={audioSrc || ""}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          className="hidden"
        />
      </Form>
      <Dialog
        open={showDialog}
        onOpenChange={(open) => {
          if (!open && isRecording) {
            stopOngoingRecordingOnly(); // clean stop + reset
          }
          setShowDialog(open);
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Recording...</DialogTitle>
            <DialogDescription>
              Speak now. Your voice is being recorded.
            </DialogDescription>
          </DialogHeader>

          {/* Recording Timer */}
          <div className="text-center font-mono text-2xl">
            {formatTime(
              recordedChunks.reduce((acc, chunk) => acc + chunk.size, 0) / 1000,
            )}
          </div>

          <div className="mt-4 flex justify-end gap-2">
            <Button
              variant="secondary"
              onClick={finishRecording} // Stop but keep recording
            >
              Stop & Save
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
