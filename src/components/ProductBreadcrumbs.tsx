
import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface ProductBreadcrumbsProps {
  items?: BreadcrumbItem[];
  currentCategory?: string;
}

const ProductBreadcrumbs: React.FC<ProductBreadcrumbsProps> = ({ 
  items = [], 
  currentCategory 
}) => {
  const defaultItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Catálogo', href: '/catalogo' }
  ];

  const allItems = [...defaultItems, ...items];
  
  if (currentCategory) {
    allItems.push({ label: currentCategory });
  }

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {allItems.map((item, index) => (
          <li key={index} className="flex items-center">
            {index === 0 && <Home className="w-4 h-4 mr-1" />}
            
            {item.href ? (
              <Link
                to={item.href}
                className="hover:text-sircell-green transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.label}
              </span>
            )}
            
            {index < allItems.length - 1 && (
              <ChevronRight className="w-4 h-4 mx-2 text-gray-400" />
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ProductBreadcrumbs;
