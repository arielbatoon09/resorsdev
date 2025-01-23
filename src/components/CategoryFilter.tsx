import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface CategoryFilterProps {
  value: string;
  onValueChange: (value: string) => void;
}

export const CategoryFilter = ({ value, onValueChange }: CategoryFilterProps) => {
  return (
    <Select value={value} onValueChange={onValueChange}>
      <SelectTrigger className="w-full md:w-[180px]">
        <SelectValue placeholder="Show all" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="all">Show all</SelectItem>
        <SelectItem value="courses">Courses</SelectItem>
        <SelectItem value="tutorials">Tutorials</SelectItem>
        {/* <SelectItem value="favorites">Favorites</SelectItem> */}
        <SelectItem value="tools">Tools</SelectItem>
      </SelectContent>
    </Select>
  );
};