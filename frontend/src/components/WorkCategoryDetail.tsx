import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function WorkCategoryDetail() {
  const { categoryId } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/work`)
      .then(res => res.json())
      .then(data => {
          // Filter only the items for this specific page
          setItems(data.filter((i: any) => i.category === categoryId));
      });
  }, [categoryId]);

  return (
    <div className="min-h-screen bg-[#d7d7d7] py-20 px-10">
      <h1 className="text-4xl font-bold mb-10 text-center uppercase">{categoryId}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.map((item: any) => (
          <div key={item.id} className="rounded-lg overflow-hidden shadow-xl bg-black">
            {categoryId === 'videos' || categoryId === 'shorts' ? (
                <video src={item.imageUrl} className="w-full h-64 object-cover" controls />
            ) : (
                <img src={item.imageUrl} className="w-full h-64 object-cover" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}