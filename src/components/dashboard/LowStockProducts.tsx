
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockLowStockProducts } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

const LowStockProducts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Produtos com Estoque Baixo</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockLowStockProducts.map((product) => (
            <div key={product.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-muted-foreground">{product.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline">{product.currentStock} un</Badge>
                <Badge variant="destructive">Mín: {product.minStockLevel}</Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default LowStockProducts;
