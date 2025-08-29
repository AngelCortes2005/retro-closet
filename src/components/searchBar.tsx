import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="email" placeholder="Email" />
      <Button type="submit" variant="outline">
        <CiSearch />
      </Button>
    </div>
  )
}

export default SearchBar