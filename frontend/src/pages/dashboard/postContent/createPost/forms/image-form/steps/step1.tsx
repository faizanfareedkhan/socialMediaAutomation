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
import { Mic, Trash2, UploadCloud, Send, ChartArea, Hash, AtomIcon, Smile, CircuitBoard, Bot } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import MultipleSelector from "@/components/ui/multiselect";

const formSchema = z.object({
  platforms: z.array(z.string()).min(1, "Select at least one platform"),
  prompt: z.string().min(10, "Prompt is required"),
});

const frameworks: Option[] = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "angular",
    label: "Angular",
  },
  {
    value: "vue",
    label: "Vue.js",
  },
  {
    value: "react",
    label: "React",
  },
  {
    value: "ember",
    label: "Ember.js",
  },
  {
    value: "gatsby",
    label: "Gatsby",
  },
  {
    value: "eleventy",
    label: "Eleventy",
  },
  {
    value: "solid",
    label: "SolidJS",
  },
  {
    value: "preact",
    label: "Preact",
  },
  {
    value: "qwik",
    label: "Qwik",
  },
  {
    value: "alpine",
    label: "Alpine.js",
  },
  {
    value: "lit",
    label: "Lit",
  },
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
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  const toggleRecording = () => {
    const mediaRecorder = mediaRecorderRef.current;

    if (!mediaRecorder) return;

    if (mediaRecorder.state === "recording") {
      mediaRecorder.pause();
      setIsPaused(true);
    } else if (mediaRecorder.state === "paused") {
      mediaRecorder.resume();
      setIsPaused(false);
    }
  };

  useEffect(() => {
    if (recordedChunks.length === 0) return;

    const blob = new Blob(recordedChunks, { type: "audio/webm" });
    const file = new File([blob], "recording.webm", { type: "audio/webm" });

    const tempAudio = new Audio(URL.createObjectURL(blob));
    tempAudio.onloadedmetadata = () => {
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
    const mediaRecorder = mediaRecorderRef.current;

    if (mediaRecorder && mediaRecorder.state !== "inactive") {
      mediaRecorder.stop();
      mediaRecorder.stream.getTracks().forEach((track) => track.stop());
      mediaRecorderRef.current = null;
    }

    setIsRecording(false);
    setIsPaused(false);
    setShowDialog(false); // close the modal after saving
  };

  // Handle file upload
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type === "audio/mpeg" || file.name.endsWith(".mp3")) {
        setAudioFile(file);
      } else {
        alert("Please select an MP3 file only");
      }
    }
  };
  useEffect(() => {
    if (!audioFile) return;

    const objectUrl = URL.createObjectURL(audioFile);
    setAudioSrc(objectUrl); // if you're using it somewhere else

    if (audioRef.current) {
      audioRef.current.src = objectUrl;
    }

    return () => {
      URL.revokeObjectURL(objectUrl);
    };
  }, [audioFile]);

  const handleDeleteAudio = () => {
    setAudioFile(null);

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
    console.log(values);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Platform Selection  */}

          <div className="*:not-first:mt-2">
            <Label>Multiselect</Label>
            <MultipleSelector
              commandProps={{
                label: "Select frameworks",
              }}
              // value={frameworks.slice(0, 2)}
              defaultOptions={frameworks}
              placeholder="Select frameworks"
              hideClearAllButton
              hidePlaceholderWhenSelected
              emptyIndicator={
                <p className="text-center text-sm">No results found</p>
              }
            />
          </div>
          {/* <FormField
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
          /> */}
          {/* Prompt Section */}
          <FormField
            control={form.control}
            name="prompt"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Prompt</FormLabel>
                <div className="relative w-full">
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
                    >
                      <Smile className="h-4 w-4" />
                    </Button>{" "}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-2 hover:bg-gray-100"
                    >
                      <Hash className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="h-8 w-8 p-2 hover:bg-gray-100"
                    >
                      <Bot className="h-4 w-4" />
                    </Button>
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

          <div className={`${audioFile ? "flex" : "hidden"} items-center`}>
            <audio
              ref={audioRef}
              src={audioSrc || ""}
              className={`custom-audio flex-1`}
              controls={true}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-8 w-8 bg-black p-2 text-white hover:bg-white hover:text-black"
              onClick={() => fileInputRef.current?.click()}
              title="Generate Transcript"
            >
              <Send />
            </Button>
          </div>

          <Button type="submit">Submit</Button>
        </form>

        {/* Hidden audio element */}
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

          <div className="mt-4 flex justify-end gap-2">
            {/* Toggle Button for Pause/Resume */}
            <Button variant="secondary" onClick={toggleRecording}>
              {isPaused ? "Continue" : "Stop"}
            </Button>

            {/* Finish Button */}
            <Button variant="default" onClick={finishRecording}>
              Finish
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
