'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import AnimeBackground from '@/app/components/anime';
import { useCart } from '@/app/context/CartContext';
import { GLASS, GLASS_INPUT, GLASS_CHIP } from '@/app/lib/glass';

const STEPS = ["Address", "Payment", "Review"];

export default function CheckoutPage() {
  const { lines, subtotal, clearCart } = useCart();
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [payment, setPayment] = useState("card");
  const [placing, setPlacing] = useState(false);
  const [form, setForm] = useState({
    fullName: "", phone: "", address: "", city: "", state: "", pincode: "",
  });

  const shipping = subtotal > 1999 || subtotal === 0 ? 0 : 99;
  const total = subtotal + shipping;

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const placeOrder = () => {
    // Frontend-only: no real payment processing. Wire this up to your
    // payment gateway + order API when the backend is ready.
    setPlacing(true);
    setTimeout(() => {
      clearCart();
      router.push('/checkout/success');
    }, 900);
  };

  return (
    <main>
      <AnimeBackground preset="samuraiInk" backgroundColor="#000000" />

      <section className="mx-auto max-w-5xl px-1 py-8 sm:px-2">
        <h1 className="mb-6 text-2xl font-bold uppercase tracking-wide text-white sm:text-3xl">Checkout</h1>

        {/* Step indicator */}
        <div className="mb-8 flex items-center gap-2 font-nb17-sans text-xs uppercase tracking-[0.15em] text-white/50">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center gap-2">
              <span className={i === step ? "text-white" : ""}>{s}</span>
              {i < STEPS.length - 1 && <span className="text-white/25">—</span>}
            </div>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-[1fr_320px]">
          <div className={`rounded-[1.75rem] p-6 font-nb17-sans text-white sm:p-8 ${GLASS}`}>
            {step === 0 && (
              <div className="flex flex-col gap-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input className={GLASS_INPUT} name="fullName" placeholder="Full name" value={form.fullName} onChange={onChange} />
                  <input className={GLASS_INPUT} name="phone" placeholder="Phone number" value={form.phone} onChange={onChange} />
                </div>
                <input className={GLASS_INPUT} name="address" placeholder="Address" value={form.address} onChange={onChange} />
                <div className="grid gap-4 sm:grid-cols-3">
                  <input className={GLASS_INPUT} name="city" placeholder="City" value={form.city} onChange={onChange} />
                  <input className={GLASS_INPUT} name="state" placeholder="State" value={form.state} onChange={onChange} />
                  <input className={GLASS_INPUT} name="pincode" placeholder="Pincode" value={form.pincode} onChange={onChange} />
                </div>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="mt-2 self-start rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02]"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {step === 1 && (
              <div className="flex flex-col gap-3">
                {[
                  { id: "card", label: "Credit / Debit Card" },
                  { id: "upi", label: "UPI" },
                  { id: "cod", label: "Cash on Delivery" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setPayment(opt.id)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-left text-sm transition-colors ${
                      payment === opt.id ? "border border-white bg-white/15" : `border ${GLASS_CHIP}`
                    }`}
                  >
                    {opt.label}
                    <span className={`h-4 w-4 rounded-full border ${payment === opt.id ? "border-white bg-white" : "border-white/40"}`} />
                  </button>
                ))}
                <div className="mt-2 flex gap-3">
                  <button type="button" onClick={() => setStep(0)} className="rounded-full border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 hover:text-white">
                    Back
                  </button>
                  <button type="button" onClick={() => setStep(2)} className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02]">
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="flex flex-col gap-4">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Shipping to</h3>
                  <p className="mt-1 text-sm text-white/80">
                    {form.fullName || "—"}, {form.address || "—"}, {form.city || "—"} {form.pincode || ""}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">Payment method</h3>
                  <p className="mt-1 text-sm capitalize text-white/80">{payment === "cod" ? "Cash on Delivery" : payment}</p>
                </div>
                <div className="mt-2 flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="rounded-full border border-white/25 px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 hover:text-white">
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={placeOrder}
                    disabled={placing || lines.length === 0}
                    className="rounded-full bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-black transition-transform hover:scale-[1.02] disabled:opacity-50"
                  >
                    {placing ? "Placing Order…" : "Place Order"}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Order summary */}
          <div className={`h-fit rounded-[1.75rem] p-6 font-nb17-sans text-white ${GLASS}`}>
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">Order Summary</h2>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              {lines.map((l) => (
                <div key={`${l.id}-${l.size}`} className="flex justify-between text-white/70">
                  <span>{l.title} × {l.qty} <span className="text-white/40">({l.size})</span></span>
                  <span>Rs-{(l.price * l.qty).toLocaleString("en-IN")}</span>
                </div>
              ))}
              <div className="flex justify-between text-white/70">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `Rs-${shipping}`}</span>
              </div>
              <div className="mt-2 flex justify-between border-t border-white/15 pt-3 text-base font-semibold">
                <span>Total</span>
                <span>Rs-{total.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
