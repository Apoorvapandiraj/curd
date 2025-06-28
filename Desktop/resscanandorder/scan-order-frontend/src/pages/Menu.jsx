import React from 'react';
import menuData from '../mock/menuData';
import MenuItem from '../components/MenuItem';

const Menu = () => {
  const tableId = localStorage.getItem('tableId');

  const grouped = menuData.reduce((acc, item) => {
    acc[item.category] = [...(acc[item.category] || []), item];
    return acc;
  }, {});

  return (
    <section className="p-6 text-gold bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-2">Table ID: {tableId}</h1>
      <h2 className="text-xl mb-6">Explore Our Premium Menu</h2>

      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h3 className="text-2xl underline mb-4">{category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => (
              <MenuItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default Menu;