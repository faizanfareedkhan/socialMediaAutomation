import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  GalleryVertical,
  Info,
  MoreVertical,
  Puzzle,
  Upload,
} from "lucide-react";
import { useState, useEffect, useCallback, useMemo } from "react";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { UseFormReturn } from "react-hook-form";
import { FormValues } from "./CreatePost";

type Props = {
  form: UseFormReturn<FormValues>;
  onOpenMediaLibrary: () => void;
};

const ImageInputField = ({ form, onOpenMediaLibrary }: Props) => {
  const [isInfoHovered, setIsInfoHovered] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const { setValue, watch } = form;
  const rawImages = watch("images");
  const images = useMemo(() => rawImages || [], [rawImages]);

  const handleDeleteImage = useCallback(
    (targetId: string) => {
      console.log(targetId);
      const filteredImages = images.filter((file: File) => {
        const fileId = `${file.name}-${file.lastModified}`;
        return fileId !== targetId;
      });
      setValue("images", filteredImages, { shouldValidate: true });
    },
    [images, setValue],
  );

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  // Generate preview URLs and cleanup properly
  const filesWithPreview = useMemo(() => {
    return images.map((file: File) => ({
      file,
      previewUrl: URL.createObjectURL(file),
      id: `${file.name}-${file.lastModified}`,
    }));
  }, [images]);

  // Cleanup blob URLs
  useEffect(() => {
    return () => {
      filesWithPreview.forEach(({ previewUrl }) =>
        URL.revokeObjectURL(previewUrl),
      );
    };
  }, [filesWithPreview]);

  const handleFileUpload = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files?.length) {
        const newFiles = Array.from(e.target.files);
        setValue("images", [...images, ...newFiles], { shouldValidate: true });
      }
    },
    [images, setValue],
  );

  const handleDragEnd = useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      if (!over || active.id === over.id) return;

      const oldIndex = images.findIndex(
        (file: File) => `${file.name}-${file.lastModified}` === active.id,
      );
      const newIndex = images.findIndex(
        (file: File) => `${file.name}-${file.lastModified}` === over.id,
      );

      if (oldIndex !== -1 && newIndex !== -1) {
        const newImages = arrayMove(images, oldIndex, newIndex);
        setValue("images", newImages, { shouldValidate: true });
      }
    },
    [images, setValue],
  );
  return (
    <div className="relative flex flex-col gap-2 text-[var(--contrast-color)]">
      <div>Media</div>

      {images.length === 0 ? (
        <>
          <div className="relative h-32 w-full border-2 border-dashed">
            <input
              className="absolute inset-0 z-50 h-full w-full cursor-pointer opacity-0"
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileUpload}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <Popover open={isInfoHovered} onOpenChange={setIsInfoHovered}>
                <PopoverTrigger
                  className="absolute top-1 right-1"
                  onMouseEnter={() => setIsInfoHovered(true)}
                  onMouseLeave={() => setIsInfoHovered(false)}
                >
                  <Info className="relative z-[999999999] h-4 w-4" />
                </PopoverTrigger>
                <PopoverContent side="top" className="w-60 space-y-2">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium">Accepted file formats:</p>
                    <ul className="list-disc pl-4 text-sm">
                      <li>png</li>
                      <li>jpeg</li>
                      <li>webp</li>
                      <li>gif</li>
                      <li>mp4</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium">Maximum file size:</p>
                    <p className="text-sm">100MB</p>
                  </div>
                </PopoverContent>
              </Popover>
              <Upload className="h-6 w-6" />
              <div>Click to upload or drag and drop</div>
              <div className="relative z-[9999] flex gap-2">
                <Button type="button" onClick={onOpenMediaLibrary}>
                  <GalleryVertical className="mr-2 h-4 w-4" /> Media Library
                </Button>
                <Button type="button" onClick={onOpenMediaLibrary}>
                  <Puzzle className="mr-2 h-4 w-4" />
                  Plugins
                </Button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <DndContext
          sensors={sensors}
          onDragStart={({ active }) => setActiveId(active.id as string)}
          onDragEnd={handleDragEnd}
          onDragCancel={() => setActiveId(null)}
        >
          <SortableContext items={filesWithPreview.map((f) => f.id)}>
            <div className="flex w-full flex-row flex-wrap gap-2">
              <div
                className="relative flex h-full max-w-36 flex-1/2 items-center justify-center border-2 border-dashed p-4 sm:h-32 sm:flex-1/6 md:flex-1/4 lg:flex-1/8"
                //   className="relative flex h-32 w-32 items-center justify-center border-2 border-dashed"
              >
                <input
                  className="absolute inset-0 z-50 h-full cursor-pointer opacity-0"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileUpload}
                />
                <Popover open={isInfoHovered} onOpenChange={setIsInfoHovered}>
                  <PopoverTrigger
                    className="absolute top-1 right-1"
                    onMouseEnter={() => setIsInfoHovered(true)}
                    onMouseLeave={() => setIsInfoHovered(false)}
                  >
                    <Info className="relative z-[999999999] h-4 w-4" />
                  </PopoverTrigger>
                  <PopoverContent side="top" className="w-60 space-y-2">
                    <div className="flex flex-col gap-1">
                      <p className="font-medium">Accepted file formats:</p>
                      <ul className="list-disc pl-4 text-sm">
                        <li>png</li>
                        <li>jpeg</li>
                        <li>webp</li>
                        <li>gif</li>
                        <li>mp4</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-medium">Maximum file size:</p>
                      <p className="text-sm">100MB</p>
                    </div>
                  </PopoverContent>
                </Popover>
                <Upload className="h-6 w-6" />
                <Popover>
                  <PopoverTrigger className="bg-background absolute right-1 bottom-1 rounded-full p-1 hover:bg-gray-100">
                    <MoreVertical className="relative z-[999999999999] h-5 w-5" />
                  </PopoverTrigger>
                  <PopoverContent className="w-40 p-1" align="end">
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={onOpenMediaLibrary}
                    >
                      <GalleryVertical className="mr-2 h-4 w-4" /> Media Library
                    </Button>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                      onClick={onOpenMediaLibrary}
                    >
                      <Puzzle className="mr-2 h-4 w-4" /> Plugins
                    </Button>
                  </PopoverContent>
                </Popover>
              </div>

              {filesWithPreview.map(({ id, previewUrl }, index) => (
                <SortableItem
                  key={id}
                  id={id}
                  previewUrl={previewUrl}
                  index={index + 1}
                  onDelete={handleDeleteImage}
                />
              ))}
            </div>
          </SortableContext>

          <DragOverlay>
            {activeId ? (
              <img
                src={
                  filesWithPreview.find((f) => f.id === activeId)?.previewUrl ||
                  ""
                }
                className="h-32 w-max rounded-md object-cover opacity-80 shadow-lg"
                alt="Dragging preview"
              />
            ) : null}
          </DragOverlay>
        </DndContext>
      )}
    </div>
  );
};

export default ImageInputField;
import { Eye, Pencil, Trash } from "lucide-react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"; // adjust path if needed

const SortableItem = ({
  id,
  previewUrl,
  index,
  onDelete,
}: {
  id: string;
  previewUrl: string;
  index: number;
  onDelete: (id: string) => void;
}) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: isDragging ? 100 : "auto",
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="group relative h-full max-w-36 flex-1/2 touch-none sm:h-32 sm:flex-1/6 md:flex-1/4 lg:flex-1/8"
    >
      <img
        src={previewUrl}
        alt={`Preview ${index}`}
        className={`h-full w-full rounded-md border-2 object-cover ${
          isDragging ? "border-primary opacity-50" : "border-transparent"
        }`}
      />
      <Badge className="absolute top-1 left-1">{index}</Badge>

      {/* Overlay on hover */}
      <div className="absolute inset-0 z-[999999] hidden items-end justify-center gap-2 rounded-md bg-black/50 pb-2 group-hover:flex">
        <Tooltip>
          <TooltipTrigger asChild>
            <Eye className="cursor-pointer text-white" />
          </TooltipTrigger>
          <TooltipContent side="top">Preview</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Pencil className="cursor-pointer text-white" />
          </TooltipTrigger>
          <TooltipContent side="top">Edit</TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Trash
              className="cursor-pointer text-white hover:text-red-500"
              onClick={(e) => {
                e.stopPropagation(); // avoid DnD conflict
                onDelete(id);
              }}
            />
          </TooltipTrigger>
          <TooltipContent side="top">Remove</TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};
