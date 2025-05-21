
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Header = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-6 sticky top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-bold text-primary">Padaria Gestão de Estoque</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0 h-full"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
