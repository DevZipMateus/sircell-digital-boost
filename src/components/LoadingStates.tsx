
import React from 'react';
import { Loader2 } from 'lucide-react';

export const InlineLoader: React.FC<{ message?: string }> = ({ 
  message = "Carregando..." 
}) => (
  <div className="flex items-center justify-center py-8">
    <div className="flex items-center gap-2 text-sircell-green">
      <Loader2 className="h-5 w-5 animate-spin" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  </div>
);

export const LoadMoreButton: React.FC<{
  onClick: () => void;
  isLoading: boolean;
  hasMore: boolean;
}> = ({ onClick, isLoading, hasMore }) => {
  if (!hasMore) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Todos os produtos foram carregados</p>
      </div>
    );
  }

  return (
    <div className="text-center py-8">
      <button
        onClick={onClick}
        disabled={isLoading}
        className="inline-flex items-center gap-2 px-6 py-3 bg-sircell-green text-white rounded-full hover:bg-sircell-green-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
        {isLoading ? "Carregando..." : "Carregar mais produtos"}
      </button>
    </div>
  );
};

export const EmptyState: React.FC<{ 
  message?: string;
  onReset?: () => void;
}> = ({ 
  message = "Nenhum produto encontrado.",
  onReset 
}) => (
  <div className="text-center py-16">
    <div className="max-w-md mx-auto">
      <div className="mb-4">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2M4 13h2" />
          </svg>
        </div>
      </div>
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        {message}
      </h3>
      <p className="text-gray-500 mb-6">
        Tente ajustar os filtros ou limpar a busca para ver mais produtos.
      </p>
      {onReset && (
        <button
          onClick={onReset}
          className="inline-flex items-center px-4 py-2 bg-sircell-green text-white rounded-lg hover:bg-sircell-green-dark transition-colors"
        >
          Limpar filtros
        </button>
      )}
    </div>
  </div>
);
