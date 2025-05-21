
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Dashboard from "@/components/Dashboard";
import ProductsList from "@/components/products/ProductsList";
import CategoriesList from "@/components/categories/CategoriesList";
import SuppliersList from "@/components/suppliers/SuppliersList";
import StockEntryList from "@/components/stock/StockEntryList";
import StockOutputList from "@/components/stock/StockOutputList";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <Tabs defaultValue="dashboard" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-6 mb-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="products">Produtos</TabsTrigger>
            <TabsTrigger value="categories">Categorias</TabsTrigger>
            <TabsTrigger value="suppliers">Fornecedores</TabsTrigger>
            <TabsTrigger value="stock-entries">Entradas</TabsTrigger>
            <TabsTrigger value="stock-outputs">Saídas</TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard">
            <Dashboard />
          </TabsContent>
          
          <TabsContent value="products">
            <ProductsList />
          </TabsContent>
          
          <TabsContent value="categories">
            <CategoriesList />
          </TabsContent>
          
          <TabsContent value="suppliers">
            <SuppliersList />
          </TabsContent>
          
          <TabsContent value="stock-entries">
            <StockEntryList />
          </TabsContent>
          
          <TabsContent value="stock-outputs">
            <StockOutputList />
          </TabsContent>
        </Tabs>
      </main>
      <Toaster />
    </div>
  );
};

export default Index;
