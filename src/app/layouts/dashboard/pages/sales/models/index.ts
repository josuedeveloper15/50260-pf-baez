import { Product } from '../../products/models';
import { User } from '../../users/models';

export interface Sale {
  id: string | number;
  userId: string | number;
  productId: string | number;
  user?: User;
  product?: Product;
}

export interface CreateSaleData {
  userId: string | number | null;
  productId: string | number | null;
}
