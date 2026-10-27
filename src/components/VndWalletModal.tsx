import React from 'react';
import { useApp } from '../context/AppContext';
import { X, Coins, ShoppingBag, Sparkles, Check, ArrowRight } from 'lucide-react';

export const VndWalletModal: React.FC = () => {
  const { activeProfile, isVndModalOpen, setIsVndModalOpen } = useApp();

  if (!isVndModalOpen) return null;

  const totalVnd = activeProfile.points * 1000;

  // Breakdown of notes in wallet
  const calculateBanknotes = (amount: number) => {
    let rem = amount;
    const n500 = Math.floor(rem / 500000);
    rem %= 500000;
    const n200 = Math.floor(rem / 200000);
    rem %= 200000;
    const n100 = Math.floor(rem / 100000);
    rem %= 100000;
    const n50 = Math.floor(rem / 50000);
    rem %= 50000;
    const n20 = Math.floor(rem / 20000);
    rem %= 20000;
    const n10 = Math.floor(rem / 10000);
    rem %= 10000;
    return { n500, n200, n100, n50, n20, n10, small: rem };
  };

  const notes = calculateBanknotes(totalVnd);

  const saigonTreats = [
    { name: "1 ly Trà Đá vỉa hè", price: 5000, emoji: "🧊", note: "Uống giải nhiệt tức thì" },
    { name: "1 bắp xào bơ Hồ Con Rùa", price: 15000, emoji: "🌽", note: "Món ăn vặt tuổi teen" },
    { name: "1 ổ Bánh Mì Thịt giòn tan", price: 25000, emoji: "🥖", note: "Đặc sản Sài Gòn số 1" },
    { name: "1 ly Cà Phê Sữa Đá đậm đà", price: 30000, emoji: "☕", note: "Hương vị buổi sáng phố" },
    { name: "1 tô Cơm Tấm Sườn Bì Chả", price: 55000, emoji: "🍛", note: "Bữa trưa no nê chuẩn Nam" },
    { name: "1 ly Trà Sữa trân châu", price: 70000, emoji: "🧋", note: "Thưởng cho bạn chăm học" },
    { name: "Vé Thảo Cầm Viên cho bé", price: 60000, emoji: "🦒", note: "Cuối tuần đi chơi thú" }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white rounded-4xl max-w-xl w-full max-h-[90vh] overflow-y-auto p-6 shadow-cute border-2 border-emerald-200 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-emerald-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-3xl bg-emerald-100 text-emerald-800 flex items-center justify-center shadow-xs">
              <Coins className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-lg font-black text-slate-800">
                Ví Tiền Tệ Sài Gòn / Saigon Play Money & Wallet
              </h2>
              <p className="text-xs text-emerald-700 font-semibold">
                1 điểm học tập = 1.000₫ tiền giả / 1 point = 1,000₫ play money 🌸
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsVndModalOpen(false)}
            className="w-9 h-9 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-700 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Big Total Wallet Balance */}
        <div className="mt-5 p-5 rounded-3xl bg-gradient-to-br from-emerald-500 via-teal-500 to-emerald-600 text-white shadow-cute text-center relative overflow-hidden">
          <div className="text-xs uppercase tracking-wider text-emerald-100 font-bold">
            Số dư ví / Wallet Balance: {activeProfile.name} {activeProfile.avatar}
          </div>
          <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight my-1 text-white">
            {totalVnd.toLocaleString('vi-VN')} ₫
          </div>
          <div className="text-xs text-emerald-100 font-semibold">
            Tương đương <strong className="font-mono text-white bg-white/20 px-2 py-0.5 rounded-md">{activeProfile.points}</strong> điểm tích lũy / points
          </div>
        </div>

        {/* Banknote visual distribution */}
        <div className="mt-5 space-y-2">
          <h3 className="text-xs font-black uppercase tracking-wider text-slate-600">
            Các tờ tiền trong ví / Banknote Denominations:
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {notes.n500 > 0 && (
              <div className="p-2.5 rounded-2xl border-2 border-cyan-200 bg-cyan-50/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-cyan-900 font-mono">500.000₫</div>
                  <div className="text-[10px] text-cyan-700 font-medium">Tờ Polymer xanh</div>
                </div>
                <span className="text-xs font-black font-mono px-2 py-0.5 rounded-lg bg-cyan-200 text-cyan-900">
                  x{notes.n500}
                </span>
              </div>
            )}
            {notes.n200 > 0 && (
              <div className="p-2.5 rounded-2xl border-2 border-rose-200 bg-rose-50/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-rose-900 font-mono">200.000₫</div>
                  <div className="text-[10px] text-rose-700 font-medium">Tờ Polymer hồng</div>
                </div>
                <span className="text-xs font-black font-mono px-2 py-0.5 rounded-lg bg-rose-200 text-rose-900">
                  x{notes.n200}
                </span>
              </div>
            )}
            {notes.n100 > 0 && (
              <div className="p-2.5 rounded-2xl border-2 border-emerald-200 bg-emerald-50/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-emerald-900 font-mono">100.000₫</div>
                  <div className="text-[10px] text-emerald-700 font-medium">Tờ Polymer lục</div>
                </div>
                <span className="text-xs font-black font-mono px-2 py-0.5 rounded-lg bg-emerald-200 text-emerald-900">
                  x{notes.n100}
                </span>
              </div>
            )}
            {notes.n50 > 0 && (
              <div className="p-2.5 rounded-2xl border-2 border-purple-200 bg-purple-50/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-purple-900 font-mono">50.000₫</div>
                  <div className="text-[10px] text-purple-700 font-medium">Tờ Polymer tím</div>
                </div>
                <span className="text-xs font-black font-mono px-2 py-0.5 rounded-lg bg-purple-200 text-purple-900">
                  x{notes.n50}
                </span>
              </div>
            )}
            {notes.n20 > 0 && (
              <div className="p-2.5 rounded-2xl border-2 border-blue-200 bg-blue-50/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-blue-900 font-mono">20.000₫</div>
                  <div className="text-[10px] text-blue-700 font-medium">Tờ Polymer lam</div>
                </div>
                <span className="text-xs font-black font-mono px-2 py-0.5 rounded-lg bg-blue-200 text-blue-900">
                  x{notes.n20}
                </span>
              </div>
            )}
            {notes.n10 > 0 && (
              <div className="p-2.5 rounded-2xl border-2 border-amber-200 bg-amber-50/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-black text-amber-900 font-mono">10.000₫</div>
                  <div className="text-[10px] text-amber-700 font-medium">Tờ Polymer nâu vàng</div>
                </div>
                <span className="text-xs font-black font-mono px-2 py-0.5 rounded-lg bg-amber-200 text-amber-900">
                  x{notes.n10}
                </span>
              </div>
            )}
            {totalVnd === 0 && (
              <div className="col-span-3 text-center py-4 text-xs text-slate-400">
                Chưa có tiền trong ví · Complete exercises to earn reward points!
              </div>
            )}
          </div>
        </div>

        {/* Cute Saigon Treats Shopping Catalog */}
        <div className="mt-5 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-xs font-black uppercase tracking-wider text-slate-600 flex items-center gap-1.5">
              <ShoppingBag className="w-4 h-4 text-rose-500" />
              <span>Giá Các Món Ăn Vặt Sài Gòn / Saigon Street Treats:</span>
            </h3>
            <span className="text-[11px] text-rose-600 font-bold">Mua sắm / Treats Menu</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-52 overflow-y-auto pr-1">
            {saigonTreats.map((treat, idx) => {
              const canAfford = totalVnd >= treat.price;
              return (
                <div
                  key={idx}
                  className={`p-3 rounded-2xl border-2 flex items-center justify-between gap-3 transition-all ${
                    canAfford
                      ? 'border-emerald-300 bg-emerald-50/60 shadow-xs'
                      : 'border-slate-200 bg-slate-50/50 opacity-60'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span className="text-2xl">{treat.emoji}</span>
                    <div className="min-w-0">
                      <div className="text-xs font-black text-slate-800 truncate">{treat.name}</div>
                      <div className="text-[10px] text-slate-400">{treat.note}</div>
                    </div>
                  </div>

                  <div className="text-right shrink-0">
                    <div className="font-mono font-black text-xs text-slate-800">
                      {treat.price.toLocaleString('vi-VN')}₫
                    </div>
                    {canAfford ? (
                      <span className="text-[10px] text-emerald-700 font-black flex items-center gap-0.5">
                        <Check className="w-3 h-3 text-emerald-600" /> Đủ tiền / Can afford!
                      </span>
                    ) : (
                      <span className="text-[10px] text-rose-500 font-semibold">
                        Thiếu / Need {(treat.price - totalVnd).toLocaleString('vi-VN')}₫
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-emerald-100 flex items-center justify-between text-xs text-slate-500 flex-wrap gap-2">
          <span className="font-semibold text-emerald-800">
            💡 Điểm số quy đổi thành tiền giả để học viên làm quen giá cả tại Việt Nam · Learn real Vietnamese prices with play money!
          </span>
          <button
            type="button"
            onClick={() => setIsVndModalOpen(false)}
            className="px-4 py-2 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xs transition-colors shadow-xs cursor-pointer"
          >
            Đóng ví / Close
          </button>
        </div>
      </div>
    </div>
  );
};
