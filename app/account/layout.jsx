import AnimeBackground from '@/app/components/anime';
import AccountNav from './AccountNav';

export default function AccountLayout({ children }) {
  return (
    <main>
      <AnimeBackground preset="sciFiDusk" backgroundColor="#000000" />
      <section className="mx-auto max-w-5xl px-1 py-8 sm:px-2">
        <div className="grid gap-6 md:grid-cols-[220px_1fr]">
          <AccountNav />
          <div>{children}</div>
        </div>
      </section>
    </main>
  );
}
