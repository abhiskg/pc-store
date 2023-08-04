import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { categoryData } from "@/constants/categoryConstant";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 h-16 border-b bg-secondary">
      <nav className="custom-container mx-auto  flex h-full items-center justify-between">
        <Link href="/">PC Store</Link>
        <div className="flex gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Category</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Categories</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categoryData.map((category) => (
                <DropdownMenuItem key={category.href} asChild>
                  <Link href={`/categories/${category.href}`}>
                    {category.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild>
            <Link href="/pc-builder">PC Builder</Link>
          </Button>

          <Button asChild>
            <Link href="/auth/login">Login</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
}
