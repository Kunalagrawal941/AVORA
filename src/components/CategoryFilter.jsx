import React from 'react';

export default function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <div className="w-full flex items-center justify-start sm:justify-center overflow-x-auto no-scrollbar py-2 px-1">
      <div className="flex items-center gap-2 sm:gap-3 flex-nowrap sm:flex-wrap">
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand ${
                isSelected
                  ? 'bg-brand text-white shadow-warm-sm transform -translate-y-0.5'
                  : 'bg-sand/70 dark:bg-dark-surface text-ink/80 dark:text-dark-text/80 hover:bg-sand dark:hover:bg-dark-border border border-brand/20'
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
}

