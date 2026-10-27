import React from 'react';

interface QuizIllustrationProps {
  questionId: string;
  type?: string;
  pictureEmoji?: string;
}

export const QuizIllustration: React.FC<QuizIllustrationProps> = ({
  questionId,
  type,
  pictureEmoji
}) => {
  // If not a picture_word question and no pictureEmoji, do not render
  if (type !== 'picture_word' && !pictureEmoji) {
    return null;
  }

  // Render dedicated high-fidelity SVG illustration based on questionId
  const renderIllustration = () => {
    switch (questionId) {
      // ----------------------------------------------------
      // LESSON 1: MUA SẮM & MẶC CẢ
      // ----------------------------------------------------
      case 'q1-1': // Giảm giá / Bớt giá (Sale / Discount Tag)
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Hanging string */}
              <path d="M70,30 Q90,5 110,25 Q130,45 150,40" fill="none" stroke="#d97706" strokeWidth="3" strokeDasharray="4,2" />
              <circle cx="110" cy="25" r="4" fill="#f59e0b" />
              
              {/* Main Red-Pink Discount Tag */}
              <defs>
                <linearGradient id="tagGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#f43f5e" />
                  <stop offset="100%" stopColor="#e11d48" />
                </linearGradient>
                <linearGradient id="goldRibbon" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#fbbf24" />
                </linearGradient>
              </defs>

              {/* Tag Body */}
              <g transform="rotate(-8 120 90)">
                <path
                  d="M50,45 L150,45 L195,90 L150,135 L50,135 Z"
                  fill="url(#tagGrad1)"
                  stroke="#fda4af"
                  strokeWidth="3"
                />
                {/* Brass Eyelet */}
                <circle cx="68" cy="90" r="10" fill="#fff" stroke="#fcd34d" strokeWidth="4" />
                <circle cx="68" cy="90" r="5" fill="#e11d48" />

                {/* Ribbon SALE */}
                <rect x="85" y="55" width="85" height="24" rx="6" fill="url(#goldRibbon)" />
                <text x="127" y="72" fill="#78350f" fontSize="13" fontWeight="900" textAnchor="middle" letterSpacing="2">
                  GIẢM GIÁ
                </text>

                {/* Big -50% Text */}
                <text x="130" y="112" fill="#ffffff" fontSize="28" fontWeight="900" textAnchor="middle">
                  -50%
                </text>

                {/* Strikethrough Price */}
                <text x="130" y="128" fill="#ffe4e6" fontSize="10" fontWeight="700" textAnchor="middle">
                  200.000đ → 100.000đ
                </text>
              </g>

              {/* Sparkles */}
              <path d="M20,60 L24,70 L34,74 L24,78 L20,88 L16,78 L6,74 L16,70 Z" fill="#fbbf24" />
              <path d="M210,40 L213,47 L220,50 L213,53 L210,60 L207,53 L200,50 L207,47 Z" fill="#fbbf24" />
              <path d="M190,140 L192,145 L198,147 L192,149 L190,154 L188,149 L182,147 L188,145 Z" fill="#fbbf24" />
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-300 shadow-xs mt-1">
              🏷️ THẺ GIẢM GIÁ (-50%) · SALE TAG
            </span>
          </div>
        );

      case 'q1-5': // Thử đồ / Phòng thử đồ (Fitting Room)
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Room Frame */}
              <rect x="30" y="15" width="180" height="150" rx="16" fill="#fdf2f8" stroke="#fbcfe8" strokeWidth="2" />
              {/* Curtain Rod */}
              <rect x="25" y="25" width="190" height="6" rx="3" fill="#cbd5e1" />
              {/* Pink Curtains tied back */}
              <path d="M30,31 Q50,90 35,160 L55,160 Q70,90 45,31 Z" fill="#f472b6" opacity="0.85" />
              <path d="M210,31 Q190,90 205,160 L185,160 Q170,90 195,31 Z" fill="#f472b6" opacity="0.85" />
              
              {/* Full-length mirror */}
              <rect x="75" y="38" width="40" height="110" rx="8" fill="#e0f2fe" stroke="#38bdf8" strokeWidth="2" />
              <line x1="82" y1="45" x2="105" y2="75" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              
              {/* Clothes rack / Hanger with dress */}
              <path d="M135,55 L165,70 L135,85" fill="none" stroke="#94a3b8" strokeWidth="2" />
              {/* Hanger */}
              <path d="M148,45 Q150,38 155,42 Q160,45 155,50 L140,65 L170,65 Z" fill="none" stroke="#d97706" strokeWidth="2" />
              {/* Cute Dress on hanger */}
              <path d="M145,65 L165,65 L175,120 L135,120 Z" fill="#ec4899" />
              <circle cx="155" cy="78" r="4" fill="#fbcfe8" />
              
              {/* Fitting Room Sign */}
              <rect x="70" y="145" width="100" height="20" rx="6" fill="#fb7185" />
              <text x="120" y="159" fill="#ffffff" fontSize="9" fontWeight="900" textAnchor="middle" letterSpacing="0.5">
                PHÒNG THỬ ĐỒ
              </text>
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-pink-100 text-pink-800 border border-pink-300 shadow-xs mt-1">
              👗 PHÒNG THỬ ĐỒ · FITTING ROOM
            </span>
          </div>
        );

      // ----------------------------------------------------
      // LESSON 2: TÍNH TIỀN & THANH TOÁN
      // ----------------------------------------------------
      case 'q2-1': // Quét mã QR chuyển khoản
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Smartphone Frame */}
              <rect x="70" y="10" width="100" height="155" rx="16" fill="#1e293b" stroke="#334155" strokeWidth="3" />
              {/* Phone Screen */}
              <rect x="76" y="22" width="88" height="130" rx="8" fill="#0f172a" />
              {/* App Header */}
              <rect x="76" y="22" width="88" height="22" rx="4" fill="#0284c7" />
              <text x="120" y="37" fill="#ffffff" fontSize="8" fontWeight="800" textAnchor="middle">
                VIETQR THANH TOÁN
              </text>

              {/* QR Code Graphic Box */}
              <rect x="88" y="52" width="64" height="64" rx="6" fill="#ffffff" />
              {/* QR Patterns */}
              <rect x="94" y="58" width="16" height="16" fill="#0f172a" />
              <rect x="97" y="61" width="10" height="10" fill="#ffffff" />
              <rect x="99" y="63" width="6" height="6" fill="#0f172a" />

              <rect x="130" y="58" width="16" height="16" fill="#0f172a" />
              <rect x="133" y="61" width="10" height="10" fill="#ffffff" />
              <rect x="135" y="63" width="6" height="6" fill="#0f172a" />

              <rect x="94" y="94" width="16" height="16" fill="#0f172a" />
              <rect x="97" y="97" width="10" height="10" fill="#ffffff" />
              <rect x="99" y="99" width="6" height="6" fill="#0f172a" />

              {/* Data dots */}
              <rect x="114" y="62" width="8" height="4" fill="#0f172a" />
              <rect x="118" y="72" width="6" height="8" fill="#0f172a" />
              <rect x="128" y="86" width="10" height="6" fill="#0f172a" />
              <rect x="115" y="96" width="6" height="12" fill="#0f172a" />

              {/* Camera Scanner Viewfinder & Laser */}
              <path d="M84,48 L84,56 M84,48 L92,48" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M156,48 L156,56 M156,48 L148,48" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M84,120 L84,112 M84,120 L92,120" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" />
              <path d="M156,120 L156,112 M156,120 L148,120" stroke="#10b981" strokeWidth="3" fill="none" strokeLinecap="round" />
              {/* Laser Line */}
              <line x1="84" y1="84" x2="156" y2="84" stroke="#ef4444" strokeWidth="2" strokeDasharray="3,1" />

              {/* Status text */}
              <text x="120" y="132" fill="#38bdf8" fontSize="7" fontWeight="700" textAnchor="middle">
                Đang quét mã chuyển khoản...
              </text>
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-300 shadow-xs mt-1">
              📱 QUÉT MÃ QR · CASHLESS BANK TRANSFER
            </span>
          </div>
        );

      case 'q2-5': // Tiền mặt 500.000 VNĐ (Cash / Polymer)
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Stack of cash below */}
              <rect x="35" y="55" width="170" height="90" rx="8" fill="#0284c7" opacity="0.4" />
              <rect x="40" y="50" width="170" height="90" rx="8" fill="#0284c7" opacity="0.6" />
              
              {/* Top 500,000 VND Banknote */}
              <defs>
                <linearGradient id="vnd500k" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#38bdf8" />
                  <stop offset="50%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#0369a1" />
                </linearGradient>
              </defs>

              <rect x="30" y="40" width="180" height="95" rx="8" fill="url(#vnd500k)" stroke="#bae6fd" strokeWidth="2" />
              
              {/* Decorative Guilloche Border */}
              <rect x="36" y="46" width="168" height="83" rx="5" fill="none" stroke="#e0f2fe" strokeWidth="1" strokeDasharray="2,2" opacity="0.7" />

              {/* Transparent Security Window */}
              <ellipse cx="65" cy="88" rx="18" ry="24" fill="#e0f2fe" opacity="0.85" stroke="#38bdf8" strokeWidth="1.5" />
              <circle cx="65" cy="88" r="8" fill="#bae6fd" />

              {/* Header Text */}
              <text x="135" y="60" fill="#ffffff" fontSize="8" fontWeight="800" textAnchor="middle" letterSpacing="0.5">
                CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM
              </text>

              {/* Big 500.000 */}
              <text x="135" y="88" fill="#fef08a" fontSize="24" fontWeight="900" textAnchor="middle" letterSpacing="1">
                500.000
              </text>
              <text x="135" y="104" fill="#ffffff" fontSize="9" fontWeight="800" textAnchor="middle">
                NĂM TRĂM NGÀN ĐỒNG
              </text>
              <text x="195" y="122" fill="#bae6fd" fontSize="9" fontWeight="900">
                VNĐ
              </text>

              {/* Gold Coins */}
              <circle cx="190" cy="140" r="16" fill="#f59e0b" stroke="#fef3c7" strokeWidth="2" />
              <text x="190" y="145" fill="#78350f" fontSize="12" fontWeight="900" textAnchor="middle">₫</text>
              <circle cx="170" cy="148" r="13" fill="#fbbf24" stroke="#fef3c7" strokeWidth="2" />
              <text x="170" y="152" fill="#78350f" fontSize="10" fontWeight="900" textAnchor="middle">₫</text>
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-xs mt-1">
              💵 TIỀN MẶT VIỆT NAM (500K VNĐ) · CASH
            </span>
          </div>
        );

      // ----------------------------------------------------
      // LESSON 3: ẨM THỰC ĐƯỜNG PHỐ & GỌI MÓN
      // ----------------------------------------------------
      case 'q3-1': // Tô Phở Bò / Bún Bò
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Table top */}
              <ellipse cx="120" cy="150" rx="95" ry="25" fill="#fef3c7" />

              {/* Rising Steam */}
              <path d="M100,50 Q105,35 100,20" fill="none" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
              <path d="M120,45 Q128,30 122,15" fill="none" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
              <path d="M140,50 Q135,35 142,20" fill="none" stroke="#e2e8f0" strokeWidth="3" strokeLinecap="round" opacity="0.7" />

              {/* Big Ceramic Bowl */}
              <ellipse cx="120" cy="85" rx="65" ry="22" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="2" />
              <path d="M55,85 Q55,140 120,140 Q185,140 185,85 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
              {/* Blue Traditional Pattern on bowl */}
              <path d="M62,95 Q120,120 178,95" fill="none" stroke="#0284c7" strokeWidth="3" strokeDasharray="6,3" />

              {/* Savory Soup inside */}
              <ellipse cx="120" cy="87" rx="58" ry="18" fill="#d97706" />

              {/* Beef Slices */}
              <ellipse cx="105" cy="86" rx="14" ry="7" fill="#b91c1c" />
              <ellipse cx="135" cy="85" rx="15" ry="8" fill="#991b1b" />

              {/* Fresh Herbs & Scallions */}
              <circle cx="118" cy="82" r="3" fill="#22c55e" />
              <circle cx="125" cy="88" r="3.5" fill="#16a34a" />
              <circle cx="108" cy="92" r="2.5" fill="#22c55e" />

              {/* Lime Wedge */}
              <path d="M85,80 A6,6 0 0,1 95,84 Z" fill="#84cc16" />
              {/* Red Chili Slices */}
              <circle cx="120" cy="92" r="3" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />

              {/* Bamboo Chopsticks */}
              <line x1="50" y1="70" x2="190" y2="78" stroke="#78350f" strokeWidth="4" strokeLinecap="round" />
              <line x1="50" y1="75" x2="190" y2="82" stroke="#92400e" strokeWidth="3.5" strokeLinecap="round" />
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300 shadow-xs mt-1">
              🍜 TÔ PHỞ BÒ NÓNG HỔI · BEEF PHO NOODLES
            </span>
          </div>
        );

      case 'q3-5': // Cà Phê Sữa Đá Sài Gòn
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Tall Faceted Glass */}
              <path d="M80,35 L90,145 Q120,150 150,145 L160,35 Z" fill="#e0f2fe" opacity="0.6" stroke="#38bdf8" strokeWidth="2" />
              
              {/* Condensed Milk Layer at Bottom */}
              <path d="M92,125 Q120,130 148,125 L150,145 Q120,150 90,145 Z" fill="#fffbeb" stroke="#fef08a" strokeWidth="1" />
              <text x="120" y="140" fill="#92400e" fontSize="7" fontWeight="800" textAnchor="middle">SỮA ĐẶC</text>

              {/* Dark Coffee Layer */}
              <path d="M84,48 L92,125 Q120,130 148,125 L156,48 Q120,53 84,48 Z" fill="#451a03" />

              {/* Ice Cubes floating */}
              <rect x="96" y="58" width="18" height="18" rx="3" fill="#bae6fd" opacity="0.8" stroke="#ffffff" strokeWidth="1" />
              <rect x="122" y="65" width="20" height="20" rx="3" fill="#bae6fd" opacity="0.8" stroke="#ffffff" strokeWidth="1" />
              <rect x="105" y="85" width="22" height="20" rx="3" fill="#bae6fd" opacity="0.75" stroke="#ffffff" strokeWidth="1" />

              {/* Red Straw */}
              <line x1="145" y1="15" x2="115" y2="135" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
              <line x1="145" y1="15" x2="160" y2="10" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />

              {/* Metal Phin Coffee Dripper on side */}
              <g transform="translate(165, 80) scale(0.65)">
                <rect x="20" y="10" width="40" height="8" rx="2" fill="#94a3b8" />
                <rect x="25" y="18" width="30" height="35" rx="3" fill="#cbd5e1" stroke="#64748b" strokeWidth="2" />
                <rect x="15" y="53" width="50" height="6" rx="2" fill="#94a3b8" />
                {/* Coffee drip */}
                <circle cx="40" cy="70" r="3" fill="#451a03" />
              </g>

              {/* Glass of Trà Đá on left */}
              <g transform="translate(25, 75) scale(0.65)">
                <path d="M30,30 L35,90 Q50,95 65,90 L70,30 Z" fill="#fef3c7" stroke="#fbbf24" strokeWidth="2" />
                <text x="50" y="70" fill="#b45309" fontSize="10" fontWeight="900" textAnchor="middle">TRÀ ĐÁ</text>
              </g>
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 shadow-xs mt-1">
              ☕ CÀ PHÊ SỮA ĐÁ SÀI GÒN · ICED MILK COFFEE
            </span>
          </div>
        );

      // ----------------------------------------------------
      // LESSON 4: HỎI ĐƯỜNG & ĐỊNH HƯỚNG
      // ----------------------------------------------------
      case 'q4-1': // Rẽ trái / Quẹo trái (Turn Left Road Sign)
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Road / Intersection below */}
              <path d="M40,160 L200,160 L180,110 L60,110 Z" fill="#334155" />
              {/* White Dashed Center Line */}
              <line x1="120" y1="160" x2="120" y2="120" stroke="#f8fafc" strokeWidth="3" strokeDasharray="8,6" />

              {/* Metal Sign Post */}
              <rect x="116" y="80" width="8" height="60" fill="#94a3b8" />

              {/* Blue Circular Navigation Sign */}
              <circle cx="120" cy="65" r="48" fill="#0284c7" stroke="#ffffff" strokeWidth="4" />

              {/* White Curved Arrow Turning Left */}
              <g fill="#ffffff">
                {/* Vertical stem */}
                <rect x="122" y="58" width="12" height="30" rx="3" />
                {/* Curved elbow */}
                <path d="M134,60 Q134,44 110,44 L95,44 L95,56 L110,56 Q122,56 122,60 Z" />
                {/* Left Arrow Head */}
                <polygon points="98,34 72,50 98,66" />
              </g>

              {/* Warning/Guidance Text */}
              <rect x="65" y="130" width="110" height="22" rx="6" fill="#f8fafc" stroke="#0284c7" strokeWidth="2" />
              <text x="120" y="145" fill="#0369a1" fontSize="10" fontWeight="900" textAnchor="middle" letterSpacing="1">
                RẼ TRÁI / QUẸO TRÁI
              </text>
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-300 shadow-xs mt-1">
              ⬅️ BIỂN BÁO: RẼ TRÁI / QUẸO TRÁI · TURN LEFT
            </span>
          </div>
        );

      case 'q4-5': // Cột Đèn Giao Thông (Traffic Light)
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Zebra Crosswalk */}
              <rect x="30" y="150" width="180" height="20" fill="#334155" rx="4" />
              <rect x="45" y="153" width="18" height="14" fill="#ffffff" />
              <rect x="75" y="153" width="18" height="14" fill="#ffffff" />
              <rect x="105" y="153" width="18" height="14" fill="#ffffff" />
              <rect x="135" y="153" width="18" height="14" fill="#ffffff" />
              <rect x="165" y="153" width="18" height="14" fill="#ffffff" />

              {/* Pole */}
              <rect x="116" y="115" width="8" height="40" fill="#64748b" />

              {/* Matte Black Traffic Box */}
              <rect x="96" y="15" width="48" height="105" rx="12" fill="#0f172a" stroke="#334155" strokeWidth="2" />

              {/* RED Light */}
              <circle cx="120" cy="36" r="13" fill="#ef4444" stroke="#7f1d1d" strokeWidth="2" />
              <circle cx="117" cy="33" r="4" fill="#fca5a5" opacity="0.6" />

              {/* YELLOW/AMBER Light */}
              <circle cx="120" cy="67" r="13" fill="#f59e0b" stroke="#78350f" strokeWidth="2" />
              <circle cx="117" cy="64" r="4" fill="#fef08a" opacity="0.6" />

              {/* GREEN Light (Active Glow) */}
              <circle cx="120" cy="98" r="15" fill="#10b981" stroke="#047857" strokeWidth="2" />
              <circle cx="120" cy="98" r="20" fill="#34d399" opacity="0.25" />
              <circle cx="117" cy="95" r="5" fill="#a7f3d0" />

              {/* Digital Countdown Box */}
              <rect x="155" y="30" width="45" height="35" rx="6" fill="#0f172a" stroke="#475569" strokeWidth="2" />
              <text x="177" y="54" fill="#10b981" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="monospace">
                15s
              </text>
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-xs mt-1">
              🚦 CỘT ĐÈN GIAO THÔNG · TRAFFIC LIGHTS
            </span>
          </div>
        );

      // ----------------------------------------------------
      // LESSON 5: DU LỊCH & ĐỊA DANH
      // ----------------------------------------------------
      case 'q5-1': // Vali Hành Lý Du Lịch
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Extended Handle */}
              <path d="M100,50 L100,15 L140,15 L140,50" fill="none" stroke="#64748b" strokeWidth="4" />
              <rect x="105" y="12" width="30" height="6" rx="3" fill="#1e293b" />

              {/* Main Suitcase Body (Pastel Sunny Yellow) */}
              <rect x="75" y="45" width="90" height="110" rx="16" fill="#facc15" stroke="#eab308" strokeWidth="3" />
              {/* Grooves */}
              <line x1="95" y1="55" x2="95" y2="145" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
              <line x1="120" y1="55" x2="120" y2="145" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />
              <line x1="145" y1="55" x2="145" y2="145" stroke="#eab308" strokeWidth="2" strokeLinecap="round" />

              {/* Wheels */}
              <circle cx="90" cy="160" r="7" fill="#1e293b" />
              <circle cx="150" cy="160" r="7" fill="#1e293b" />

              {/* Vietnam Passport in Pocket */}
              <g transform="translate(150, 70) rotate(15)">
                <rect x="0" y="0" width="36" height="50" rx="4" fill="#047857" stroke="#10b981" strokeWidth="1" />
                <text x="18" y="15" fill="#fef08a" fontSize="5" fontWeight="900" textAnchor="middle">HỘ CHIẾU</text>
                <circle cx="18" cy="28" r="7" fill="none" stroke="#fef08a" strokeWidth="1" />
                <text x="18" y="44" fill="#ffffff" fontSize="4" fontWeight="800" textAnchor="middle">VIETNAM</text>
              </g>

              {/* SGN Luggage Tag */}
              <rect x="70" y="85" width="30" height="16" rx="3" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" />
              <text x="85" y="96" fill="#0f172a" fontSize="7" fontWeight="900" textAnchor="middle">SGN</text>
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300 shadow-xs mt-1">
              🧳 VALI HÀNH LÝ DU LỊCH · TRAVEL SUITCASE
            </span>
          </div>
        );

      case 'q5-5': // Chụp Hình / Chụp Ảnh
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Polaroid Photo sliding out */}
              <g transform="translate(85, 20) rotate(-5)">
                <rect x="0" y="0" width="70" height="85" rx="4" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" />
                {/* Photo image showing Ben Thanh Clock */}
                <rect x="5" y="5" width="60" height="55" rx="3" fill="#fef3c7" />
                {/* Clock tower silhouette */}
                <rect x="25" y="25" width="20" height="35" fill="#b91c1c" rx="2" />
                <polygon points="20,25 35,12 50,25" fill="#991b1b" />
                <circle cx="35" cy="32" r="5" fill="#ffffff" />
                <text x="35" y="74" fill="#64748b" fontSize="6" fontWeight="700" textAnchor="middle">Sài Gòn 🇻🇳</text>
              </g>

              {/* Camera Body */}
              <rect x="55" y="75" width="130" height="80" rx="16" fill="#ec4899" stroke="#db2777" strokeWidth="3" />
              {/* Top Shutter Button */}
              <rect x="75" y="66" width="22" height="10" rx="3" fill="#334155" />
              {/* Flash Lamp */}
              <rect x="145" y="85" width="24" height="16" rx="4" fill="#fef08a" stroke="#f59e0b" strokeWidth="1.5" />

              {/* Big Lens */}
              <circle cx="105" cy="115" r="30" fill="#1e293b" stroke="#fbcfe8" strokeWidth="4" />
              <circle cx="105" cy="115" r="22" fill="#0f172a" />
              <circle cx="105" cy="115" r="14" fill="#0284c7" />
              <ellipse cx="100" cy="110" rx="5" ry="3" fill="#ffffff" opacity="0.8" />

              {/* Sparkle */}
              <path d="M185,60 L188,67 L195,70 L188,73 L185,80 L182,73 L175,70 L182,67 Z" fill="#f59e0b" />
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-pink-100 text-pink-800 border border-pink-300 shadow-xs mt-1">
              📸 CHỤP ẢNH KỶ NIỆM · TAKE SOUVENIR PHOTOS
            </span>
          </div>
        );

      // ----------------------------------------------------
      // LESSON 6: THUÊ NHÀ & CĂN HỘ
      // ----------------------------------------------------
      case 'q6-1': // Chìa Khóa Nhà / Căn Hộ
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Key Ring */}
              <circle cx="120" cy="45" r="22" fill="none" stroke="#94a3b8" strokeWidth="5" />

              {/* Wooden House Keychain */}
              <g transform="translate(60, 60)">
                <polygon points="35,0 70,25 70,70 0,70 0,25" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
                <rect x="25" y="38" width="20" height="32" rx="3" fill="#78350f" />
                <circle cx="40" cy="54" r="2" fill="#fef08a" />
                <rect x="15" y="18" width="40" height="15" rx="3" fill="#fef3c7" />
                <text x="35" y="29" fill="#92400e" fontSize="7" fontWeight="900" textAnchor="middle">PHÒNG 402</text>
              </g>

              {/* Brass Shiny Keys */}
              <g transform="translate(130, 60) rotate(18)">
                <circle cx="20" cy="20" r="14" fill="#fbbf24" stroke="#d97706" strokeWidth="3" />
                <circle cx="20" cy="20" r="6" fill="#fef3c7" />
                <rect x="16" y="32" width="8" height="55" fill="#fbbf24" stroke="#d97706" strokeWidth="2" />
                {/* Teeth */}
                <rect x="24" y="65" width="8" height="6" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
                <rect x="24" y="77" width="10" height="6" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
              </g>
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300 shadow-xs mt-1">
              🔑 CHÌA KHÓA CĂN HỘ · APARTMENT KEYS
            </span>
          </div>
        );

      case 'q6-5': // Máy Lạnh / Điều Hòa (Air Conditioner)
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Wall Background */}
              <rect x="20" y="10" width="200" height="160" rx="12" fill="#f8fafc" stroke="#e2e8f0" strokeWidth="2" />

              {/* Indoor AC Unit Body */}
              <rect x="40" y="30" width="160" height="60" rx="8" fill="#ffffff" stroke="#cbd5e1" strokeWidth="3" />

              {/* Air Outlet LOUVER (Open) */}
              <rect x="48" y="74" width="144" height="10" rx="3" fill="#e2e8f0" />

              {/* Cool Blue Air Flow Waves */}
              <path d="M60,90 Q70,120 55,145" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
              <path d="M90,90 Q105,125 90,150" fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" opacity="0.8" />
              <path d="M120,90 Q130,120 120,150" fill="none" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" opacity="0.9" />
              <path d="M150,90 Q165,125 150,150" fill="none" stroke="#38bdf8" strokeWidth="3.5" strokeLinecap="round" opacity="0.8" />
              <path d="M180,90 Q190,120 175,145" fill="none" stroke="#38bdf8" strokeWidth="3" strokeLinecap="round" opacity="0.8" />

              {/* Digital LED Display 24°C */}
              <rect x="148" y="44" width="38" height="20" rx="4" fill="#0f172a" />
              <text x="167" y="58" fill="#38bdf8" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="monospace">
                24°C
              </text>

              {/* Remote Control on side */}
              <g transform="translate(195, 80) scale(0.65)">
                <rect x="0" y="0" width="30" height="65" rx="6" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                <rect x="5" y="8" width="20" height="18" rx="2" fill="#e0f2fe" />
                <circle cx="15" cy="38" r="4" fill="#ef4444" />
                <circle cx="15" cy="50" r="3" fill="#0284c7" />
              </g>
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-sky-100 text-sky-800 border border-sky-300 shadow-xs mt-1">
              ❄️ MÁY LẠNH / ĐIỀU HÒA (24°C) · AIR CONDITIONER
            </span>
          </div>
        );

      // ----------------------------------------------------
      // LESSON 7: NHÀ THUỐC & SỨC KHỎE
      // ----------------------------------------------------
      case 'q7-1': // Thuốc Uống / Vỉ Thuốc
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Foil Blister Pack */}
              <rect x="40" y="30" width="110" height="110" rx="10" fill="#e2e8f0" stroke="#94a3b8" strokeWidth="2" />
              <rect x="45" y="35" width="100" height="100" rx="8" fill="#f8fafc" stroke="#cbd5e1" strokeWidth="1" strokeDasharray="3,3" />

              {/* 4 Capsules on Blister */}
              {/* Cap 1 */}
              <g transform="translate(60, 48)">
                <rect x="0" y="0" width="26" height="12" rx="6" fill="#38bdf8" />
                <rect x="13" y="0" width="13" height="12" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />
              </g>
              {/* Cap 2 */}
              <g transform="translate(105, 48)">
                <rect x="0" y="0" width="26" height="12" rx="6" fill="#f43f5e" />
                <rect x="13" y="0" width="13" height="12" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />
              </g>
              {/* Cap 3 */}
              <g transform="translate(60, 85)">
                <rect x="0" y="0" width="26" height="12" rx="6" fill="#10b981" />
                <rect x="13" y="0" width="13" height="12" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />
              </g>
              {/* Cap 4 */}
              <g transform="translate(105, 85)">
                <rect x="0" y="0" width="26" height="12" rx="6" fill="#f59e0b" />
                <rect x="13" y="0" width="13" height="12" rx="6" fill="#ffffff" stroke="#cbd5e1" strokeWidth="0.5" />
              </g>

              {/* Medicine Syrup Bottle on right */}
              <g transform="translate(160, 45)">
                <rect x="15" y="0" width="20" height="12" rx="3" fill="#ffffff" stroke="#94a3b8" strokeWidth="1.5" />
                <rect x="5" y="12" width="40" height="85" rx="8" fill="#d97706" opacity="0.85" stroke="#b45309" strokeWidth="2" />
                {/* White Label */}
                <rect x="10" y="35" width="30" height="45" rx="4" fill="#ffffff" />
                {/* Red Cross */}
                <rect x="22" y="45" width="6" height="18" fill="#ef4444" rx="1" />
                <rect x="16" y="51" width="18" height="6" fill="#ef4444" rx="1" />
              </g>
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-300 shadow-xs mt-1">
              💊 THUỐC HẠ SỐT / UỐNG · MEDICINE / PHARMACY
            </span>
          </div>
        );

      case 'q7-5': // Nhiệt Kế Đo Sốt (Thermometer 38.5°C)
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Thermometer angled */}
              <g transform="translate(45, 120) rotate(-35)">
                {/* Silver probe tip */}
                <rect x="0" y="8" width="30" height="8" rx="4" fill="#cbd5e1" stroke="#64748b" strokeWidth="1" />
                {/* Plastic white body */}
                <path d="M25,2 L140,2 Q160,12 140,22 L25,22 Z" fill="#ffffff" stroke="#94a3b8" strokeWidth="2" />
                {/* Blue grip accent */}
                <path d="M125,2 L140,2 Q160,12 140,22 L125,22 Z" fill="#38bdf8" />
                {/* LCD Screen */}
                <rect x="50" y="5" width="55" height="14" rx="2" fill="#ecfdf5" stroke="#10b981" strokeWidth="1" />
                <text x="77" y="16" fill="#b91c1c" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="monospace">
                  38.5°C
                </text>
                {/* Power button */}
                <circle cx="115" cy="12" r="3" fill="#cbd5e1" />
              </g>

              {/* Fever Warning Alert Badge */}
              <rect x="135" y="40" width="85" height="42" rx="10" fill="#fef2f2" stroke="#ef4444" strokeWidth="2" />
              <text x="177" y="58" fill="#b91c1c" fontSize="11" fontWeight="900" textAnchor="middle">
                ⚠️ BỊ SỐT CAO
              </text>
              <text x="177" y="74" fill="#7f1d1d" fontSize="9" fontWeight="700" textAnchor="middle">
                (Thân nhiệt 38.5°C)
              </text>
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-300 shadow-xs mt-1">
              🌡️ NHIỆT KẾ ĐO THÂN NHIỆT (38.5°C) · THERMOMETER
            </span>
          </div>
        );

      // ----------------------------------------------------
      // LESSON 8: THỜI TIẾT & GIAO THÔNG
      // ----------------------------------------------------
      case 'q8-1': // Áo Mưa Cánh Dơi (Vietnamese Rain Poncho)
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Rain Streaks */}
              <g stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" opacity="0.6">
                <line x1="30" y1="20" x2="20" y2="50" />
                <line x1="70" y1="10" x2="60" y2="40" />
                <line x1="170" y1="15" x2="160" y2="45" />
                <line x1="210" y1="25" x2="200" y2="55" />
                <line x1="40" y1="80" x2="30" y2="110" />
                <line x1="220" y1="90" x2="210" y2="120" />
              </g>

              {/* Bright Yellow Poncho Raincoat */}
              <defs>
                <linearGradient id="ponchoGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#fde047" />
                  <stop offset="100%" stopColor="#eab308" />
                </linearGradient>
              </defs>

              {/* Hood */}
              <path d="M100,45 Q120,20 140,45 Z" fill="#eab308" stroke="#ca8a04" strokeWidth="2" />
              <ellipse cx="120" cy="45" rx="14" ry="16" fill="#fef08a" />

              {/* Main Poncho Body (Batwing shape) */}
              <path
                d="M105,48 L45,100 Q40,115 55,115 L80,115 L75,150 L165,150 L160,115 L185,115 Q200,115 195,100 L135,48 Z"
                fill="url(#ponchoGrad)"
                stroke="#ca8a04"
                strokeWidth="2.5"
              />

              {/* Transparent Clear Window for Motorbike Headlight! */}
              <rect x="100" y="95" width="40" height="30" rx="6" fill="#e0f2fe" opacity="0.75" stroke="#ffffff" strokeWidth="1.5" />
              <text x="120" y="113" fill="#0369a1" fontSize="6" fontWeight="800" textAnchor="middle">KÍNH ĐÈN XE</text>

              {/* Water Splash at bottom */}
              <path d="M70,158 Q85,150 100,158 Q120,150 140,158 Q155,150 170,158" fill="none" stroke="#38bdf8" strokeWidth="3" />
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-300 shadow-xs mt-1">
              🌧️ ÁO MƯA CÁNH DƠI TIỆN LỢI · RAIN PONCHO
            </span>
          </div>
        );

      case 'q8-5': // Mũ Bảo Hiểm Xe Máy (Motorcycle Helmet)
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Helmet Shell (Glossy Pastel Teal / Mint) */}
              <defs>
                <linearGradient id="helmetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#2dd4bf" />
                  <stop offset="50%" stopColor="#0d9488" />
                  <stop offset="100%" stopColor="#115e59" />
                </linearGradient>
              </defs>

              {/* Half Helmet Dome */}
              <path
                d="M55,105 Q55,30 130,30 Q205,30 205,105 L185,115 Q130,110 75,115 Z"
                fill="url(#helmetGrad)"
                stroke="#0f766e"
                strokeWidth="3"
              />

              {/* Helmet Sun Visor / Peak */}
              <path d="M45,95 Q130,75 215,95 L205,105 Q130,85 55,105 Z" fill="#0f172a" />

              {/* Clear Glass Shield */}
              <path d="M60,105 Q130,135 190,105 L185,135 Q130,160 65,135 Z" fill="#e0f2fe" opacity="0.6" stroke="#ffffff" strokeWidth="1.5" />

              {/* Safety Chin Strap with Buckle */}
              <path d="M85,115 Q95,155 125,160 Q155,155 165,115" fill="none" stroke="#1e293b" strokeWidth="4" />
              {/* Red Quick Release Buckle */}
              <rect x="118" y="153" width="14" height="10" rx="2" fill="#ef4444" stroke="#ffffff" strokeWidth="1" />

              {/* CR Safety Certification Stamp */}
              <rect x="150" y="60" width="32" height="20" rx="4" fill="#ffffff" stroke="#0f172a" strokeWidth="1.5" />
              <text x="166" y="74" fill="#b91c1c" fontSize="10" fontWeight="900" textAnchor="middle">
                CR
              </text>
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-teal-100 text-teal-800 border border-teal-300 shadow-xs mt-1">
              ⛑️ MŨ BẢO HIỂM XE MÁY · MOTORBIKE HELMET
            </span>
          </div>
        );

      // ----------------------------------------------------
      // LESSON 9: CẮT TÓC & LÀM ĐẸP
      // ----------------------------------------------------
      case 'q9-1': // Kéo Cắt Tóc & Lược
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Barber Comb (Black fine-tooth) */}
              <g transform="translate(60, 40) rotate(25)">
                <rect x="0" y="0" width="130" height="20" rx="4" fill="#1e293b" stroke="#0f172a" strokeWidth="1.5" />
                {/* Teeth */}
                {Array.from({ length: 18 }).map((_, i) => (
                  <line key={i} x1={20 + i * 5} y1="20" x2={20 + i * 5} y2="40" stroke="#1e293b" strokeWidth="2" />
                ))}
              </g>

              {/* Stainless Steel Styling Shears */}
              <g transform="translate(90, 80)">
                {/* Blade 1 */}
                <path d="M0,0 L75,-40 L80,-35 L15,10 Z" fill="#e2e8f0" stroke="#64748b" strokeWidth="1.5" />
                {/* Blade 2 */}
                <path d="M0,0 L75,40 L80,35 L15,-10 Z" fill="#cbd5e1" stroke="#64748b" strokeWidth="1.5" />
                {/* Pivot screw */}
                <circle cx="20" cy="0" r="5" fill="#f59e0b" stroke="#78350f" strokeWidth="1" />
                {/* Finger Loop 1 */}
                <circle cx="-15" cy="-25" r="14" fill="none" stroke="#64748b" strokeWidth="4" />
                {/* Finger Loop 2 with finger rest */}
                <circle cx="-15" cy="25" r="14" fill="none" stroke="#64748b" strokeWidth="4" />
                <path d="M-28,30 Q-38,35 -35,42" fill="none" stroke="#64748b" strokeWidth="3" />
              </g>
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-slate-200 text-slate-800 border border-slate-400 shadow-xs mt-1">
              ✂️ KÉO CẮT TÓC & LƯỢC TẠO KIỂU · SALON SCISSORS
            </span>
          </div>
        );

      case 'q9-5': // Làm Móng / Tiệm Nail
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Elegant Manicured Hand */}
              <path
                d="M40,150 Q70,90 95,90 Q110,90 120,60 Q125,50 135,55 Q140,65 130,85 Q145,55 155,60 Q160,70 145,95 Q165,70 175,75 Q178,85 160,110 L150,150 Z"
                fill="#fed7aa"
                stroke="#fb923c"
                strokeWidth="2"
              />

              {/* Glossy Pink Painted Nails */}
              <ellipse cx="130" cy="56" rx="5" ry="7" fill="#f43f5e" />
              <ellipse cx="152" cy="62" rx="5" ry="7" fill="#f43f5e" />
              <ellipse cx="172" cy="78" rx="5" ry="7" fill="#f43f5e" />

              {/* Nail Polish Bottle */}
              <g transform="translate(160, 90)">
                {/* Black Brush Cap */}
                <rect x="22" y="0" width="12" height="28" rx="3" fill="#1e293b" />
                {/* Glass Bottle Body */}
                <rect x="10" y="28" width="36" height="42" rx="8" fill="#fda4af" stroke="#f43f5e" strokeWidth="2" />
                <rect x="15" y="34" width="26" height="30" rx="4" fill="#e11d48" />
                <ellipse cx="20" cy="42" rx="3" ry="6" fill="#ffffff" opacity="0.6" />
                {/* Drip from brush */}
                <circle cx="28" cy="76" r="3" fill="#e11d48" />
              </g>
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-300 shadow-xs mt-1">
              💅 LÀM MÓNG / SƠN MÓNG TAY · MANICURE & NAILS
            </span>
          </div>
        );

      // ----------------------------------------------------
      // LESSON 10: KẾT BẠN & GIAO TIẾP
      // ----------------------------------------------------
      case 'q10-1': // Cụng Ly Bia "1, 2, 3... DÔ!"
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Clinking Splashes & Stars */}
              <path d="M120,40 L120,20 M110,35 L95,20 M130,35 L145,20" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
              <circle cx="108" cy="22" r="3" fill="#fbbf24" />
              <circle cx="132" cy="22" r="3" fill="#fbbf24" />

              {/* Beer Mug Left */}
              <g transform="translate(60, 50) rotate(12)">
                {/* Handle */}
                <path d="M-5,25 Q-25,45 -5,65" fill="none" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
                {/* Glass */}
                <rect x="0" y="10" width="45" height="70" rx="6" fill="#fef08a" stroke="#cbd5e1" strokeWidth="2" opacity="0.9" />
                {/* Golden Beer */}
                <rect x="3" y="25" width="39" height="52" rx="4" fill="#f59e0b" />
                {/* Foamy Head Overflowing */}
                <path d="M-2,10 Q22,0 47,10 Q42,25 22,22 Q0,25 -2,10 Z" fill="#ffffff" stroke="#f1f5f9" strokeWidth="1" />
              </g>

              {/* Beer Mug Right */}
              <g transform="translate(135, 50) rotate(-12)">
                {/* Handle */}
                <path d="M50,25 Q70,45 50,65" fill="none" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
                {/* Glass */}
                <rect x="0" y="10" width="45" height="70" rx="6" fill="#fef08a" stroke="#cbd5e1" strokeWidth="2" opacity="0.9" />
                {/* Golden Beer */}
                <rect x="3" y="25" width="39" height="52" rx="4" fill="#f59e0b" />
                {/* Foamy Head Overflowing */}
                <path d="M-2,10 Q22,0 47,10 Q42,25 22,22 Q0,25 -2,10 Z" fill="#ffffff" stroke="#f1f5f9" strokeWidth="1" />
              </g>

              {/* Toast Cheer Banner */}
              <rect x="55" y="138" width="130" height="24" rx="8" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
              <text x="120" y="154" fill="#ffffff" fontSize="12" fontWeight="900" textAnchor="middle" letterSpacing="1">
                "1, 2, 3... DÔ! 🍻"
              </text>
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 shadow-xs mt-1">
              🍻 CỤNG LY BIA (1 2 3 DÔ!) · CHEERS & TOAST
            </span>
          </div>
        );

      case 'q10-5': // Bắt Tay Làm Quen
        return (
          <div className="flex flex-col items-center">
            <svg viewBox="0 0 240 180" className="w-56 h-40 drop-shadow-md">
              {/* Warmth Hearts Floating */}
              <path d="M120,25 Q115,15 105,20 Q95,25 120,45 Q145,25 135,20 Q125,15 120,25 Z" fill="#f43f5e" />
              <path d="M75,45 Q70,38 65,42 Q60,46 75,58 Q90,46 85,42 Q80,38 75,45 Z" fill="#fb7185" />
              <path d="M165,45 Q160,38 155,42 Q150,46 165,58 Q180,46 175,42 Q170,38 165,45 Z" fill="#fb7185" />

              {/* Speech Bubble: Rất vui được làm quen */}
              <rect x="50" y="15" width="140" height="24" rx="8" fill="#f8fafc" stroke="#38bdf8" strokeWidth="2" />
              <text x="120" y="31" fill="#0369a1" fontSize="9" fontWeight="900" textAnchor="middle">
                "RẤT VUI ĐƯỢC LÀM QUEN! 👋"
              </text>

              {/* Handshake Hands */}
              <g transform="translate(45, 60)">
                {/* Left Sleeve */}
                <path d="M0,45 L35,25 L35,65 Z" fill="#3b82f6" />
                {/* Left Hand */}
                <path d="M35,30 L65,40 L65,60 L35,60 Z" fill="#fed7aa" stroke="#fb923c" strokeWidth="2" />

                {/* Right Sleeve */}
                <path d="M150,45 L115,25 L115,65 Z" fill="#ec4899" />
                {/* Right Hand */}
                <path d="M115,30 L85,40 L85,60 L115,60 Z" fill="#fcd34d" stroke="#f59e0b" strokeWidth="2" />

                {/* Clasped Fingers */}
                <rect x="62" y="36" width="28" height="26" rx="6" fill="#fed7aa" stroke="#ea580c" strokeWidth="2" />
                <line x1="68" y1="42" x2="84" y2="42" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
                <line x1="68" y1="48" x2="84" y2="48" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
                <line x1="68" y1="54" x2="84" y2="54" stroke="#ea580c" strokeWidth="2" strokeLinecap="round" />
              </g>
            </svg>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300 shadow-xs mt-1">
              🤝 BẮT TAY KẾT BẠN · FRIENDLY HANDSHAKE
            </span>
          </div>
        );

      // Default Fallback: Big pastel emoji frame
      default:
        return (
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 mx-auto rounded-3xl bg-white border-2 border-pink-300 shadow-cute flex items-center justify-center text-7xl select-none animate-cute-float">
              {pictureEmoji || '🖼️'}
            </div>
            <span className="text-xs font-black px-3 py-1 rounded-full bg-pink-100 text-pink-700 border border-pink-200 mt-2">
              🖼️ HÌNH ẢNH MINH HỌA BÀI TẬP
            </span>
          </div>
        );
    }
  };

  return (
    <div className="p-4 sm:p-6 rounded-3xl bg-gradient-to-br from-pink-50 via-amber-50 to-pink-50 border-2 border-pink-300 text-center shadow-inner space-y-2">
      {renderIllustration()}
      <p className="text-xs font-bold text-slate-600 pt-1">
        Nhìn hình ảnh minh họa ở trên và chọn câu trả lời đúng nhất:
      </p>
    </div>
  );
};
