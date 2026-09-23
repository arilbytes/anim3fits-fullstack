// // app/page.jsx
// 'use client'; // Add this directive

// import AnimeBackground from './components/anime';

// export default function Page() {
//   return (
//     <main>
//       <AnimeBackground preset='shonenNoir' backgroundColor="#000000" />
//       {/* <AnimeBackground preset='fire' backgroundColor="#000000" /> */}
//       {/* <AnimeBackground preset='gojoClouds' backgroundColor="#000000" /> */}
//     </main>
//   );
// }

// app/page.tsx
'use client';

import AnimeBackground from './components/anime';
import ProductCard from './components/ProductCard';

const SHIRTS = [
  { id: 1, image: '/shirts/gojo.png',   title: 'Gojo Infinity', price: '1,299' },
  { id: 2, image: '/shirts/sukuna.png', title: 'Sukuna Domain',  price: '1,499' },
  { id: 3, image: '/shirts/samurai.png',title: 'Samurai Ink',    price: '1,399' },
  { id: 4, image: '/shirts/vapor.png',  title: 'Vaporwave',      price: '1,299' },
];

export default function Page() {
  return (
    <main>
      <AnimeBackground preset="moonMars" backgroundColor="#000000" />

      <section className="mx-auto grid max-w-7xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
        {SHIRTS.map((s) => (
          <ProductCard
            key={s.id}
            image={s.image}
            title={s.title}
            price={s.price}
            onWishlist={(next) => console.log('wishlist:', s.id, next)}
          />
        ))}
      </section>
    </main>
  );
}