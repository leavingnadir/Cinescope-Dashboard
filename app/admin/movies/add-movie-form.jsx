"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function AddMovieForm() {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" placeholder="Movie title" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="title">Year</Label>
          <Select id="year" name="year" required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select Year" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2025">2025</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="director">Director</Label>
          <Input id="director" name="director" placeholder="Director name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="genre">Genre</Label>
          <Select id="genre" name="genre" required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select genre" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Action">Action</SelectItem>
              <SelectItem value="Adventure">Adventure</SelectItem>
              <SelectItem value="Sci-Fi">Sci-Fi</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="rating">Rating</Label>
          <Input
            id="rating"
            name="rating"
            type="number"
            min="0"
            max="10"
            step="0.1"
            placeholder="Rating (0.0 - 10.0)"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="runtime">Runtime (Minutes)</Label>
          <Input
            id="runtime"
            name="runtime"
            type="number"
            min="1"
            placeholder="Runtime in minutes"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="overview">Overview</Label>
        <Textarea
          id="overview"
          name="overview"
          placeholder="Movie description"
          className="h-[100px]"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="poster">Poster URL</Label>
          <Input
            id="poster"
            name="poster"
            placeholder="URL to poster image"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="backdrop">Backdrop URL</Label>
          <Input
            id="backdrop"
            name="backdrop"
            placeholder="URL to backdrop image"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="status">Status</Label>
          <Select id="status" name="status" required>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="published">Published</SelectItem>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="archived">Archived</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <DialogFooter>
        <Button type="button" variant="outline" className="min-w-[102px]">
          Cancel
        </Button>
        <Button type="submit" className="min-w-[102px]">
          Add
        </Button>
      </DialogFooter>
    </form>
  );
}
