// app/page.jsx
'use client'; // Add this directive

import AnimeBackground from './components/anime';

export default function Page() {
  return (
    <main>
      {/* <AnimeBackground preset='shonenNoir' backgroundColor="#000000" /> */}
      <AnimeBackground preset='fire' backgroundColor="#000000" />
      {/* <AnimeBackground preset='gojoClouds' backgroundColor="#000000" /> */}
    </main>
  );
}