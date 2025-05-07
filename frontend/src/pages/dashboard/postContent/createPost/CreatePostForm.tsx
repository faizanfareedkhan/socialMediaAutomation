import { useRef, useState, useEffect } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Mic,
  Trash2,
  UploadCloud,
  Send,
  Hash,
  Smile,
  Bot,
  ChevronsUpDown,
  Check,
  X,
  Eye,
} from "lucide-react";
// import { FaRegFileAlt } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import { FaPinterestP } from "react-icons/fa";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import { UseFormReturn } from "react-hook-form";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";

type EmojiMartEmoji = {
  native: string;
  id?: string;
  name?: string;
  [key: string]: unknown;
};

import ImageInputField from "./ImageInputField";
import { FormValues, postButtons, SocialPage } from "./CreatePost";

type Props = {
  form: UseFormReturn<FormValues>;
  onOpenModal: () => void;
  onOpenMediaLibrary: () => void;
  buttons: typeof postButtons;
  selectedPostKey: string;
  onSelectPost: (key: string) => void;
  socialPages: SocialPage[];
};

function CreatePostForm({
  form,
  onOpenModal,
  onOpenMediaLibrary,
  buttons,
  selectedPostKey,
  onSelectPost,
  socialPages,
}: Props) {
  // const socialPages = [
  //   {
  //     image: "https://cdn-icons-png.flaticon.com/512/733/733547.png",
  //     name: "Facebook Page",
  //     page: "facebook.com/yourpage",
  //     value: "facebook",
  //   },
  //   {
  //     image: "https://cdn-icons-png.flaticon.com/512/733/733558.png",
  //     name: "Instagram Page",
  //     page: "instagram.com/yourpage",
  //     value: "instagram",
  //   },
  //   {
  //     image: "https://cdn-icons-png.flaticon.com/512/733/733579.png",
  //     name: "X (Twitter) Page",
  //     page: "x.com/yourpage",
  //     value: "x",
  //   },
  //   {
  //     image: "https://cdn-icons-png.flaticon.com/512/145/145807.png",
  //     name: "LinkedIn Page",
  //     page: "linkedin.com/company/yourpage",
  //     value: "linkedin",
  //   },
  //   {
  //     image: "https://cdn-icons-png.flaticon.com/512/145/145808.png",
  //     name: "Pinterest Page",
  //     page: "pinterest.com/yourpage",
  //     value: "pinterest",
  //   },
  // ];

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);
  const [isRecording, setIsRecording] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string | null>(null);
  const shouldSaveRef = useRef(true);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const emojiPickerRef = useRef<HTMLDivElement | null>(null);
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [open, setOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const selectedPages = form.watch("social") ?? [];

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
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        emojiPickerRef.current &&
        !emojiPickerRef.current.contains(event.target as Node)
      ) {
        setShowEmojiPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const togglePage = (value: string) => {
    const updated = selectedPages.includes(value)
      ? selectedPages.filter((v) => v !== value)
      : [...selectedPages, value];
    form.setValue("social", updated);
  };

  const clearAll = () => {
    form.setValue("social", []);
  };

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

  const handlePreviewClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // prevent form submission
    onOpenModal();
  };

  return (
    <>
      <Form {...form}>
        <form className="flex flex-col justify-between gap-12">
          <div>
            <FormField
              control={form.control}
              name="social"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormControl>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          role="combobox"
                          variant={"outline"}
                          className="relative w-full justify-between border bg-[var(--base-color)] text-[var(--contrast-color)] shadow-none"
                          {...field}
                        >
                          {selectedPages.length > 0
                            ? `${selectedPages.length} page(s) selected`
                            : `Select social profiles (${socialPages.length})`}
                          {/* <Button onClick={clearAll}>Clear All</Button> */}
                          <ChevronsUpDown className="absolute right-2 h-4 w-4 shrink-0" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                        <Command>
                          <CommandInput
                            placeholder="Search page..."
                            className="h-9"
                          />
                          <CommandList>
                            <CommandEmpty>No page found.</CommandEmpty>
                            <CommandGroup>
                              {socialPages.map((page) => (
                                <CommandItem
                                  key={page.value}
                                  onSelect={() => togglePage(page.value)}
                                >
                                  <div className="flex w-full items-center gap-2">
                                    <img
                                      src={page.image}
                                      alt={page.name}
                                      className="h-8 w-8"
                                    />
                                    <div className="flex flex-col text-left">
                                      <span>{page.page}</span>
                                      <span className="text-muted-foreground text-xs">
                                        {page.name}
                                      </span>
                                    </div>
                                    <Check
                                      className={cn(
                                        "ml-auto",
                                        selectedPages.includes(page.value)
                                          ? "opacity-100"
                                          : "opacity-0",
                                      )}
                                    />
                                  </div>
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </FormControl>
                  {/* <FormMessage /> */}
                </FormItem>
              )}
            />

            {/* Selected Pages List */}
            {selectedPages.length > 0 && (
              <div className="relative mt-2 flex flex-wrap gap-2">
                {selectedPages.map((val) => {
                  const page = socialPages.find((p) => p.value === val);
                  return (
                    <div
                      key={val}
                      className="bg-muted flex items-center gap-2 rounded-full border px-3 py-1 text-sm"
                    >
                      <img
                        src={page?.image}
                        alt={page?.name}
                        className="h-5 w-5 rounded-full"
                      />
                      <span>{page?.name}</span>
                      <button
                        type="button"
                        onClick={() => togglePage(val)}
                        className="ml-1 text-gray-500 hover:text-red-500"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  );
                })}
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="absolute right-0 h-8 w-8 p-2 hover:bg-gray-100"
                  onClick={clearAll}
                >
                  <Trash2 />
                </Button>
              </div>
            )}
          </div>

          <div>
            <FormField
              control={form.control}
              name="prompt"
              render={({ field }) => (
                <FormItem className="w-full">
                  <div className="relative w-full">
                    <FormLabel>Prompt: </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Type/Record/Upload your prompt here..."
                        className="min-h-[120px] resize-none pr-24 pb-10 break-words !text-black"
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
                    <div className="absolute top-[-40px] left-0 flex w-full gap-2">
                      {buttons.map((btn) => (
                        <Button
                          type="button"
                          key={btn.key}
                          onClick={() => onSelectPost(btn.key)}
                          className={`text-white ${selectedPostKey === btn.key ? "ring-2 ring-black" : ""}`}
                          style={{ backgroundColor: btn.color }}
                        >
                          {btn.icon}
                        </Button>
                      ))}
                      <Button
                        variant="ghost"
                        className="gap-1 md:hidden"
                        onClick={handlePreviewClick}
                        type="button"
                      >
                        <Eye />
                        Preview
                      </Button>
                    </div>

                    <div className="absolute bottom-2 left-2 flex gap-2">
                      <div className="relative">
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-2 hover:bg-gray-100"
                          onClick={() => setShowEmojiPicker((prev) => !prev)}
                        >
                          <Smile className="h-4 w-4" />
                        </Button>

                        {showEmojiPicker && (
                          <div
                            // ref={emojiPickerRef}
                            className="fixed left-2 z-[999999]"
                          >
                            <Picker
                              data={data}
                              onEmojiSelect={(emoji: EmojiMartEmoji) => {
                                const newValue = field.value + emoji.native;
                                field.onChange(newValue);
                              }}
                            />
                          </div>
                        )}
                      </div>

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
                    </div>
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
          </div>

          <ImageInputField
            form={form}
            onOpenMediaLibrary={onOpenMediaLibrary}
          />
        </form>
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

export default CreatePostForm;
