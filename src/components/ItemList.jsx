import ItemCard from './ItemCard';

function ItemList({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {items.map(item => <ItemCard key={item.id} item={item} />)}
    </div>
  );
}

export default ItemList;
