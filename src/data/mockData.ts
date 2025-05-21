
// Mock data for the application

// Dashboard data
export const mockDashboardData = {
  totalProducts: 87,
  totalCategories: 5,
  totalSuppliers: 12,
  lowStockCount: 8,
  expiringCount: 6
};

// Products with low stock
export const mockLowStockProducts = [
  { id: 1, name: 'Pão Francês', category: 'Pães', currentStock: 10, minStockLevel: 20 },
  { id: 2, name: 'Croissant', category: 'Pães', currentStock: 5, minStockLevel: 15 },
  { id: 3, name: 'Torta de Morango', category: 'Bolos', currentStock: 2, minStockLevel: 5 },
  { id: 4, name: 'Pão de Queijo', category: 'Salgados', currentStock: 8, minStockLevel: 25 },
];

// Products expiring soon
export const mockExpiringProducts = [
  { id: 1, name: 'Bolo de Chocolate', category: 'Bolos', daysRemaining: 2 },
  { id: 2, name: 'Sonho', category: 'Doces', daysRemaining: 3 },
  { id: 3, name: 'Pão Integral', category: 'Pães', daysRemaining: 1 },
  { id: 4, name: 'Coxinha', category: 'Salgados', daysRemaining: 5 },
];

// Products
export const mockProducts = [
  { 
    id: 1, 
    name: 'Pão Francês', 
    description: 'Pão tradicional francês crocante', 
    price: 0.75, 
    stockQuantity: 150, 
    expiryDate: '2025-05-24', 
    category: 'Pães',
    categoryId: 1 
  },
  { 
    id: 2, 
    name: 'Bolo de Chocolate', 
    description: 'Bolo de chocolate com cobertura', 
    price: 35.00, 
    stockQuantity: 8, 
    expiryDate: '2025-05-23', 
    category: 'Bolos',
    categoryId: 2 
  },
  { 
    id: 3, 
    name: 'Croissant', 
    description: 'Croissant de manteiga', 
    price: 4.50, 
    stockQuantity: 25, 
    expiryDate: '2025-05-24', 
    category: 'Pães',
    categoryId: 1 
  },
  { 
    id: 4, 
    name: 'Pão de Queijo', 
    description: 'Tradicional pão de queijo mineiro', 
    price: 1.50, 
    stockQuantity: 120, 
    expiryDate: '2025-05-25', 
    category: 'Salgados',
    categoryId: 3 
  },
  { 
    id: 5, 
    name: 'Torta de Limão', 
    description: 'Torta de limão com merengue', 
    price: 45.00, 
    stockQuantity: 5, 
    expiryDate: '2025-05-23', 
    category: 'Bolos',
    categoryId: 2 
  },
];

// Categories
export const mockCategories = [
  { id: 1, name: 'Pães', productCount: 28 },
  { id: 2, name: 'Bolos', productCount: 15 },
  { id: 3, name: 'Salgados', productCount: 22 },
  { id: 4, name: 'Doces', productCount: 17 },
  { id: 5, name: 'Bebidas', productCount: 5 },
];

// Suppliers
export const mockSuppliers = [
  { id: 1, name: 'Moinho Paulista', phone: '(11) 3456-7890', address: 'Rua das Farinhas, 123' },
  { id: 2, name: 'Laticínios do Sul', phone: '(11) 2345-6789', address: 'Av. dos Queijos, 456' },
  { id: 3, name: 'Açúcar & Cia', phone: '(11) 3456-7890', address: 'Rua Doce, 789' },
  { id: 4, name: 'Distribuidora de Insumos', phone: '(11) 4567-8901', address: 'Av. Central, 101' },
];

// Stock Entries
export const mockStockEntries = [
  { 
    id: 1, 
    productId: 1, 
    productName: 'Pão Francês', 
    supplierId: 1, 
    supplierName: 'Moinho Paulista',
    quantity: 200, 
    purchasePrice: 0.50, 
    date: '2025-05-20' 
  },
  { 
    id: 2, 
    productId: 2, 
    productName: 'Bolo de Chocolate', 
    supplierId: 3, 
    supplierName: 'Açúcar & Cia',
    quantity: 10, 
    purchasePrice: 25.00, 
    date: '2025-05-20' 
  },
  { 
    id: 3, 
    productId: 4, 
    productName: 'Pão de Queijo', 
    supplierId: 2, 
    supplierName: 'Laticínios do Sul',
    quantity: 150, 
    purchasePrice: 1.00, 
    date: '2025-05-19' 
  },
  { 
    id: 4, 
    productId: 3, 
    productName: 'Croissant', 
    supplierId: 1, 
    supplierName: 'Moinho Paulista',
    quantity: 30, 
    purchasePrice: 3.50, 
    date: '2025-05-19' 
  },
];

// Stock Outputs
export const mockStockOutputs = [
  { 
    id: 1, 
    productId: 1, 
    productName: 'Pão Francês', 
    quantity: 50, 
    reason: 'Venda', 
    date: '2025-05-21' 
  },
  { 
    id: 2, 
    productId: 2, 
    productName: 'Bolo de Chocolate', 
    quantity: 2, 
    reason: 'Venda', 
    date: '2025-05-21' 
  },
  { 
    id: 3, 
    productId: 3, 
    productName: 'Croissant', 
    quantity: 5, 
    reason: 'Expirado', 
    date: '2025-05-20' 
  },
  { 
    id: 4, 
    productId: 4, 
    productName: 'Pão de Queijo', 
    quantity: 30, 
    reason: 'Venda', 
    date: '2025-05-20' 
  },
];
