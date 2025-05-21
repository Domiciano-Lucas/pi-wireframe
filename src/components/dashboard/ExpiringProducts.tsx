
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockExpiringProducts } from "@/data/mockData";
import { Badge } from "@/components/ui/badge";

const ExpiringProducts = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Produtos Próximos do Vencimento</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockExpiringProducts.map((product) => (
            <div key={product.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{product.name}</p>
                <p className="text-sm text-muted-foreground">{product.category}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant={product.daysRemaining <= 5 ? "destructive" : "outline"}>
                  {product.daysRemaining} dias
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ExpiringProducts;
