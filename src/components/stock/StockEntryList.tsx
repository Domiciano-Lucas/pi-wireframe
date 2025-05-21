
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
import { mockStockEntries } from "@/data/mockData";
import { Plus, Search } from "lucide-react";
import StockEntryForm from "@/components/stock/StockEntryForm";
import { formatCurrency, formatDate } from "@/lib/formatters";

const StockEntryList = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Entradas em Estoque</h2>
        <Button onClick={() => setIsFormOpen(true)}>
          <Plus className="mr-2 h-4 w-4" /> Nova Entrada
        </Button>
      </div>

      <div className="flex items-center mb-4 gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar entradas..."
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
              <TableHead>Fornecedor</TableHead>
              <TableHead>Quantidade</TableHead>
              <TableHead>Preço de Compra</TableHead>
              <TableHead>Total</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockStockEntries.map((entry) => (
              <TableRow key={entry.id}>
                <TableCell>{formatDate(entry.date)}</TableCell>
                <TableCell className="font-medium">{entry.productName}</TableCell>
                <TableCell>{entry.supplierName}</TableCell>
                <TableCell>{entry.quantity} un</TableCell>
                <TableCell>{formatCurrency(entry.purchasePrice)}</TableCell>
                <TableCell>{formatCurrency(entry.quantity * entry.purchasePrice)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {isFormOpen && (
        <StockEntryForm 
          isOpen={isFormOpen}
          onClose={handleCloseForm}
        />
      )}
    </div>
  );
};

export default StockEntryList;
