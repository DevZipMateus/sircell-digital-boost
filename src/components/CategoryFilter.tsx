
import React from 'react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange
}) => {
  return (
    <div className="text-center mb-12">
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <button
          onClick={() => onCategoryChange('Todos')}
          className={`px-6 py-2 rounded-full transition-colors ${
            selectedCategory === 'Todos'
              ? 'bg-sircell-green text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-sircell-green-light hover:text-white'
          }`}
        >
          Todos
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => onCategoryChange(category)}
            className={`px-6 py-2 rounded-full transition-colors ${
              selectedCategory === category
                ? 'bg-sircell-green text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-sircell-green-light hover:text-white'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
