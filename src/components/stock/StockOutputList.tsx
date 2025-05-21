
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { mockStockOutputs } from "@/data/mockData";
import { Plus, Search } from "lucide-react";
import StockOutputForm from "@/components/stock/StockOutputForm";
import { formatDate } from "@/lib/formatters";

const StockOutputList = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Saídas de Estoque</h2>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Nova Saída
        </Button>
      </div>

      <div className="flex items-center mb-4 gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar saídas..."
            className="pl-8"
          />
        </div>
      </div>

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Data</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Motivo</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockStockOutputs.map((output) => (
              <TableRow key={output.id}>
                <TableCell>{formatDate(output.date)}</TableCell>
                <TableCell className="font-medium">{output.productName}</TableCell>
                <TableCell>{output.quantity} un</TableCell>
                <TableCell>{output.reason}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {isFormOpen && (
        <StockOutputForm 
          isOpen={isFormOpen}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
};

export default StockOutputList;
