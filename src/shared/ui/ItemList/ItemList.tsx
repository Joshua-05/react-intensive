import React, { type MouseEventHandler } from 'react';

interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  keyExtractor: (item: T, index: number) => string | number;
  onItemClick?: (item: T, index: number) => void;
  className?: string;
  emptyMessage?: string;
}

export function ItemList<T>({
  items,
  renderItem,
  keyExtractor,
  onItemClick,
  className = '',
  emptyMessage = 'Список пуст',
}: ItemListProps<T>) {
  if (!items.length) {
    return <div className="item-list-empty">{emptyMessage}</div>;
  }

  const handleItemClick = (item: T, index: number): MouseEventHandler<HTMLDivElement> => () => {
    if (onItemClick) {
      onItemClick(item, index);
    }
  };

  return (
    <div className={`item-list ${className}`}>
      {items.map((item, index) => (
        <div
          key={keyExtractor(item, index)}
          className={`item-list-item ${onItemClick ? 'clickable' : ''}`}
          onClick={onItemClick ? handleItemClick(item, index) : undefined}
        >
          {renderItem(item, index)}
        </div>
      ))}
    </div>
  );
}