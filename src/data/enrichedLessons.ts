import { Lesson } from '../types';
import { DIALOGUES_DATA } from './dialoguesData';

export const ENRICHED_LESSONS: Lesson[] = [
  // ==========================================
  // LESSON 1: MUA SẮM, GIÁ CẢ & MẶC CẢ
  // ==========================================
  {
    id: 1,
    titleVi: "Bài 1: Mua Sắm, Giá Cả & Mặc Cả",
    titleEn: "Lesson 1: Shopping, Prices & Polite Bargaining",
    subtitleVi: "Cách hỏi giá, mặc cả khéo léo và văn hoá mua sắm tại chợ",
    subtitleEn: "Asking prices, polite haggling, and Vietnamese market culture",
    icon: "🛍️",
    themeColor: "amber",
    stampTitleVi: "Mua Sắm Chợ Bến Thành",
    stampTitleEn: "Ben Thanh Shopping Stamp",
    landmarkVi: "Chợ Bến Thành (Quận 1)",
    landmarkEn: "Ben Thanh Market",
    culturalTraitVi: "Văn hoá mặc cả thân tình và tôn trọng giờ mở hàng",
    culturalTraitEn: "Friendly bargaining etiquette and opening sale customs",
    landmarkStoryVi: "Chợ Bến Thành có lịch sử hơn 100 năm, là thiên đường mua sắm vải vóc, nón lá, cà phê và đồ lưu niệm thủ công mỹ nghệ nổi tiếng tại TP.HCM.",
    landmarkStoryEn: "Over 100 years old, Ben Thanh Market is an iconic shopping haven for fabrics, souvenirs, coffee, and crafts.",
    culturalStory: {
      titleVi: "Nghệ Thuật Mặc Cả Thân Tình & Văn Hóa 'Mở Hàng'",
      titleEn: "The Art of Friendly Bargaining & the 'Opening Sale' Custom",
      habitVi: "Thói quen tươi cười mặc cả 'bớt chút đỉnh cho may mắn' và tôn trọng người mở hàng",
      habitEn: "Habit of politely asking for a small discount with a smile and respecting the first buyer of the day",
      storyVi: "Tại các khu chợ truyền thống ở Việt Nam, việc mặc cả không phải là cãi cọ mà là một cuộc trò chuyện giao lưu thân mật giữa người mua và người bán. Người Việt thường dùng các từ xưng hô thân mật như 'Cô ơi, Chú ơi, Chị ơi bớt cho con chút đỉnh nghen!' để tạo không khí vui vẻ. Tuy nhiên, vào sáng sớm khi tiểu thương vừa dọn hàng ('mở hàng'), người mua thường tránh mặc cả quá gắt hoặc hỏi giá rồi bỏ đi, vì người bán tin rằng người khách đầu tiên mang lại vận may buôn bán cho cả ngày.",
      storyEn: "In Vietnamese traditional markets, bargaining is a friendly social interaction rather than a dispute. Shoppers use affectionate kinship terms like 'Cô ơi' or 'Chị ơi' and politely say 'Bớt cho con chút đỉnh nghen!' (Could you reduce a little bit for me?). However, early in the morning during the 'opening sale' (mở hàng), vendors appreciate straightforward transactions as they believe the first customer brings luck for the entire day.",
      politeTipVi: "Mẹo giao tiếp: Hãy mỉm cười và nói 'Cô ơi, bớt cho con chút xíu được không cô?' thay vì chê bai đồ đắt một cách cộc lốc nhé!",
      politeTipEn: "Etiquette tip: Smile and say 'Bớt cho con chút xíu được không?' rather than bluntly saying an item is overpriced!",
      emoji: "🏷️",
      landmarkVi: "Chợ Bến Thành Quận 1"
    },
    flashcards: [
      {
        id: "1-1",
        termVi: "Bao nhiêu tiền",
        phonetic: "Bow nyew tyen",
        spellingFormula: "B - AO ➔ BAO / NH - IEU ➔ NHIÊU / T - IÊN - Huyền ➔ TIỀN",
        meaningEn: "How much money / What is the price?",
        emoji: "💰",
        exampleVi: "Cái nón lá này bao nhiêu tiền vậy cô?",
        exampleEn: "How much is this conical hat, ma'am?",
        southernUsageTip: "Mẫu câu cơ bản nhất để hỏi giá bất kỳ món đồ nào."
      },
      {
        id: "1-2",
        termVi: "Đắt quá / Mắc quá",
        phonetic: "Dat kwah / Mac kwah",
        spellingFormula: "Đ - Ă - T - Sắc ➔ ĐẮT / Q - U - A - Sắc ➔ QUÁ",
        meaningEn: "Too expensive / Overpriced",
        emoji: "💸",
        exampleVi: "Dạ hai trăm ngàn thì đắt quá, cô bớt cho con nhé!",
        exampleEn: "Two hundred thousand is a bit too expensive, please discount for me!",
        southernUsageTip: "Miền Nam thường nói 'Mắc quá', toàn quốc đều hiểu cả 'đắt' và 'mắc'."
      },
      {
        id: "1-3",
        termVi: "Bớt một chút",
        phonetic: "Buht moht choot",
        spellingFormula: "B - Ớ - T - Sắc ➔ BỚT / CH - Ú - T ➔ CHÚT",
        meaningEn: "Give a small discount / Lower price slightly",
        emoji: "🤝",
        exampleVi: "Cô bớt cho con một chút đỉnh được không?",
        exampleEn: "Could you please lower the price a little bit for me?",
        southernUsageTip: "'Bớt chút đỉnh' là cách nói cực kỳ duyên dáng và dễ thương."
      },
      {
        id: "1-4",
        termVi: "Giảm giá",
        phonetic: "Zahm zah",
        spellingFormula: "GI - A - M - Hỏi ➔ GIẢM / GI - A - Sắc ➔ GIÁ",
        meaningEn: "Discount / Sale price",
        emoji: "🏷️",
        exampleVi: "Cửa hàng đang có chương trình giảm giá hai mươi phần trăm.",
        exampleEn: "The store is having a twenty percent discount promotion.",
        southernUsageTip: "Thường thấy trên các biển hiệu khuyến mãi: Giảm giá 20%, 50%."
      },
      {
        id: "1-5",
        termVi: "Một trăm rưỡi",
        phonetic: "Moht tram roo-uh",
        spellingFormula: "TR - Ă - M ➔ TRĂM / R - Ư - ƠI - Dấu hỏi ➔ RƯỠI",
        meaningEn: "150,000 VND (One hundred and fifty thousand)",
        emoji: "💵",
        exampleVi: "Cái túi này giá một trăm rưỡi ngàn đồng.",
        exampleEn: "This bag costs one hundred and fifty thousand dong.",
        southernUsageTip: "'Trăm rưỡi' = 150k, 'hai trăm rưỡi' = 250k. Rất thông dụng khi trả giá."
      },
      {
        id: "1-6",
        termVi: "Mở hàng",
        phonetic: "Muh hahng",
        spellingFormula: "M - Ở ➔ MỞ / H - A - NG - Huyền ➔ HÀNG",
        meaningEn: "First sale of the day / Opening customer",
        emoji: "✨",
        exampleVi: "Thôi cô bán mở hàng đầu ngày cho con đó!",
        exampleEn: "I'll give you a discount since you are my first customer today!",
        southernUsageTip: "Nét văn hoá may mắn trong kinh doanh truyền thống Việt Nam."
      },
      {
        id: "1-7",
        termVi: "Thử đồ",
        phonetic: "Tooh doh",
        spellingFormula: "TH - Ư - Hỏi ➔ THỬ / Đ - Ô - Huyền ➔ ĐỒ",
        meaningEn: "Try on clothes / Fit check",
        emoji: "👗",
        exampleVi: "Em ơi, cho chị thử cái áo này được không?",
        exampleEn: "Excuse me, can I try on this shirt?",
        southernUsageTip: "Hỏi trước khi mặc thử quần áo tại quầy hàng."
      },
      {
        id: "1-8",
        termVi: "Vừa vặn",
        phonetic: "Voo-uh van",
        spellingFormula: "V - ƯA - Huyền ➔ VỪA / V - Ă - N - Nặng ➔ VẶN",
        meaningEn: "Fits perfectly / Right size",
        emoji: "👌",
        exampleVi: "Cái áo này con mặc vừa vặn và đẹp lắm!",
        exampleEn: "This shirt fits you perfectly and looks great!",
        southernUsageTip: "Khen ngợi khi món đồ mặc rất vừa người."
      },
      {
        id: "1-9",
        termVi: "Hàng loại một",
        phonetic: "Hahng loy moht",
        spellingFormula: "H - A - NG - Huyền ➔ HÀNG / L - O - A - I - Nặng ➔ LOẠI",
        meaningEn: "Premium grade / Top quality goods",
        emoji: "⭐",
        exampleVi: "Đây là vải lụa tơ tằm hàng loại một chất lượng cao.",
        exampleEn: "This is top-grade authentic silk of high quality.",
        southernUsageTip: "Chỉ hàng hóa đạt tiêu chuẩn chất lượng cao nhất."
      },
      {
        id: "1-10",
        termVi: "Mua hai tặng một",
        phonetic: "Moo-uh high tang moht",
        spellingFormula: "M - U - A ➔ MUA / T - Ă - NG - Nặng ➔ TẶNG",
        meaningEn: "Buy two get one free",
        emoji: "🎁",
        exampleVi: "Cửa hàng đang có ưu đãi mua hai tặng một cho bánh ngọt.",
        exampleEn: "The bakery has a buy-two-get-one-free promotion.",
        southernUsageTip: "Chương trình khuyến mãi phổ biến tại các cửa hàng."
      },
      {
        id: "1-11",
        termVi: "Mẫu mới về",
        phonetic: "Mow moy veh",
        spellingFormula: "M - Â - U - Ngã ➔ MẪU / M - Ơ - I - Sắc ➔ MỚI",
        meaningEn: "New arrival / Latest design",
        emoji: "✨",
        exampleVi: "Đây là mẫu áo thêu hoa mới về tuần này.",
        exampleEn: "This is a new floral embroidered design that arrived this week.",
        southernUsageTip: "Dùng để giới thiệu các sản phẩm thiết kế mới nhất."
      },
      {
        id: "1-12",
        termVi: "Đổi trả hàng",
        phonetic: "Doy trah hahng",
        spellingFormula: "Đ - Ô - I - Hỏi ➔ ĐỔI / TR - A - Hỏi ➔ TRẢ",
        meaningEn: "Return or exchange an item",
        emoji: "🔄",
        exampleVi: "Sản phẩm còn nguyên tem mác được đổi trả trong ba ngày.",
        exampleEn: "Items with tags intact can be exchanged within three days.",
        southernUsageTip: "Chính sách đổi hàng khi không vừa kích cỡ."
      }
    ],
    quiz: [
      {
        id: "q1-1",
        type: "picture_word",
        pictureEmoji: "🏷️",
        promptVi: "Nhìn hình thẻ giảm giá (-50% SALE) dưới đây và chọn cụm từ mua sắm đúng:",
        promptEn: "Look at the -50% SALE discount tag image below and choose the correct shopping term:",
        options: ["Giảm giá / Bớt giá", "Tăng giá", "Hết hàng", "Cấm sờ vào hiện vật"],
        optionsEn: ["Discount / Sale", "Price increase", "Out of stock", "Do not touch"],
        correctAnswer: "Giảm giá / Bớt giá",
        explanationVi: "Hình thẻ giảm giá '-50% GIẢM GIÁ' biểu tượng cho chương trình 'Giảm giá' hoặc 'Bớt giá' khi mua sắm hàng hóa.",
        explanationEn: "The discount tag (-50% SALE) represents 'Giảm giá' or 'Bớt giá' (Discount / Sale) when shopping."
      },
      {
        id: "q1-2",
        type: "multiple_choice",
        promptVi: "Bài toán mua sắm: Bạn mua một cái nón lá giá 200.000đ. Người bán đồng ý bớt 50.000đ. Bạn phải trả bao nhiêu tiền?",
        promptEn: "Shopping calculation: A conical hat is 200,000đ. The vendor discounts 50,000đ. How much do you pay?",
        options: ["150.000 đồng (Một trăm rưỡi)", "180.000 đồng", "250.000 đồng", "100.000 đồng"],
        optionsEn: ["150,000 VND (One hundred and fifty thousand)", "180,000 VND", "250,000 VND", "100,000 VND"],
        correctAnswer: "150.000 đồng (Một trăm rưỡi)",
        explanationVi: "200.000đ - 50.000đ = 150.000đ (người Việt thường gọi tắt là 'một trăm rưỡi').",
        explanationEn: "200,000 - 50,000 = 150,000 VND, commonly called 'một trăm rưỡi'."
      },
      {
        id: "q1-3",
        type: "multiple_choice",
        promptVi: "Khi đi chợ và muốn mặc cả giá một cách lịch thiệp, dễ thương nhất, bạn nên nói câu nào?",
        promptEn: "When bargaining politely at the market, which phrase sounds most natural and polite?",
        options: [
          "Cô ơi, cô bớt cho con chút đỉnh được không cô?",
          "Bán đắt như vậy ai mà mua!",
          "Tôi không có tiền đâu, giảm nửa giá đi!",
          "Hàng xấu quá mà bán đắt thế!"
        ],
        optionsEn: [
          "Ma'am, could you please discount a little bit for me?",
          "So expensive, nobody will buy this! (Rude)",
          "I have no money, cut half the price!",
          "Bad quality yet so pricey! (Rude)"
        ],
        correctAnswer: "Cô ơi, cô bớt cho con chút đỉnh được không cô?",
        explanationVi: "'Cô ơi, cô bớt cho con chút đỉnh được không cô?' là cách nói tôn trọng, thân mật và hiệu quả nhất khi mua bán.",
        explanationEn: "'Cô ơi, bớt cho con chút đỉnh được không?' is the warmest and most courteous way to bargain."
      },
      {
        id: "q1-4",
        type: "cultural_riddle",
        promptVi: "Đố vui văn hóa: Tại sao người bán hàng ở chợ truyền thống kiêng khách hỏi giá buổi sáng sớm rồi bỏ đi không mua?",
        promptEn: "Cultural riddle: Why do market vendors dislike morning customers who haggle heavily and walk away without buying?",
        options: [
          "Vì quan niệm khách 'mở hàng' đầu ngày mang lại phong thủy may mắn cho cả ngày buôn bán",
          "Vì buổi sáng người bán hàng không có tiền thối",
          "Vì chợ quy định buổi sáng không được xem hàng",
          "Vì buổi sáng chợ chưa mở cửa chính thức"
        ],
        optionsEn: [
          "The 'opening customer' is believed to bring fortune/luck for the day's business",
          "Vendors have no change in the morning",
          "Market rules forbid looking in morning",
          "Market is not officially open"
        ],
        correctAnswer: "Vì quan niệm khách 'mở hàng' đầu ngày mang lại phong thủy may mắn cho cả ngày buôn bán",
        explanationVi: "Khách 'mở hàng' suôn sẻ và vui vẻ được tin là sẽ mang lại vía may mắn, giúp tiểu thương buôn may bán đắt cả ngày.",
        explanationEn: "A smooth 'opening sale' is believed to bring positive energy and fortune for the entire business day."
      },
      {
        id: "q1-5",
        type: "picture_word",
        pictureEmoji: "👗",
        promptVi: "Nhìn hình chiếc váy dưới đây và chọn từ đúng khi muốn thử kích cỡ trang phục:",
        promptEn: "Look at the dress image below and select the correct term for trying on clothing:",
        options: ["Thử đồ / Thử quần áo", "Trả lại hàng", "Bỏ đi", "Giặt đồ"],
        optionsEn: ["Try on clothes", "Return goods", "Throw away", "Do laundry"],
        correctAnswer: "Thử đồ / Thử quần áo",
        explanationVi: "'Thử đồ' là hành động mặc thử quần áo vào phòng thay đồ trước khi quyết định mua.",
        explanationEn: "'Thử đồ' means trying on clothes in the fitting room before buying."
      }
    ],
    gameTitleVi: "Thử Thách Mua Sắm & Mặc Cả",
    gameTitleEn: "Shopping & Bargaining Challenge",
    gameDescriptionVi: "Chọn đáp án đúng nhất trong các tình huống mua sắm thực tế!",
    gameDescriptionEn: "Select the best answer in practical shopping scenarios!",
    gameItems: [],
    homework: [],
    teacherSlides: []
  },

  // ==========================================
  // LESSON 2: TÍNH TIỀN, THANH TOÁN & TIỀN TỆ
  // ==========================================
  {
    id: 2,
    titleVi: "Bài 2: Tính Tiền, Thanh Toán & Tiền Tệ",
    titleEn: "Lesson 2: Paying Bills, QR Code & Currency",
    subtitleVi: "Cách gọi tính tiền, quét mã chuyển khoản và tính toán tiền thối",
    subtitleEn: "Requesting the bill, QR code transfers, and calculating change",
    icon: "💳",
    themeColor: "rose",
    stampTitleVi: "Thanh Toán Sài Gòn",
    stampTitleEn: "Saigon Payment Stamp",
    landmarkVi: "Quán Ăn & Phố Ẩm Thực Trung Tâm",
    landmarkEn: "Downtown Food Street",
    culturalTraitVi: "Văn hoá thanh toán mã QR tiện lợi và nhận tiền bằng hai tay",
    culturalTraitEn: "Cashless QR culture and two-handed polite payment etiquette",
    landmarkStoryVi: "Hệ thống thanh toán không tiền mặt qua mã VietQR phủ sóng từ nhà hàng hiện đại đến từng quán vỉa hè, tạo sự tiện lợi tối đa cho người dân và du khách.",
    landmarkStoryEn: "Cashless payments via VietQR are ubiquitous across Vietnam, from fine restaurants to street food stalls.",
    culturalStory: {
      titleVi: "Thanh Toán Không Tiền Mặt & Phép Lịch Sự Trao Tiền Bằng Hai Tay",
      titleEn: "Cashless QR Payments & The Two-Handed Respect Rule",
      habitVi: "Thói quen quét mã QR dán trên bàn và luôn trao/nhận tiền thừa bằng hai tay",
      habitEn: "Habit of scanning tabletop QR codes and handing/receiving money with both hands",
      storyVi: "Tại Việt Nam hiện nay, bạn hầu như không cần mang theo nhiều tiền mặt vì hầu hết mọi quán cà phê, tiệm ăn hay hàng tạp hóa đều có sẵn mã QR ngân hàng dán ngay trên bàn hoặc quầy thu ngân. Khách chỉ cần mở ứng dụng ngân hàng quét mã và nhập số tiền là hoàn tất trong vài giây. Đặc biệt, khi thanh toán bằng tiền mặt hoặc nhận lại tiền thối, người Việt luôn đưa tiền bằng cả hai tay và gật đầu nhẹ để thể hiện lòng tôn trọng.",
      storyEn: "In Vietnam today, carrying a lot of cash is unnecessary because virtually every cafe, restaurant, and shop displays a QR code. Customers simply scan the code with their banking app to transfer money instantly. When paying with cash or receiving change, locals always use both hands with a gentle nod to express courtesy and mutual respect.",
      politeTipVi: "Mẹo lịch sự: Khi nhận lại tiền thối hoặc hóa đơn từ người phục vụ hay người lớn tuổi, hãy dùng hai tay đón lấy và nói 'Dạ con cảm ơn' nhé!",
      politeTipEn: "Polite tip: When receiving change or receipts, receive them with both hands and say 'Cảm ơn' to show great respect!",
      emoji: "📱",
      landmarkVi: "Phố Ẩm Thực TP.HCM"
    },
    flashcards: [
      {
        id: "2-1",
        termVi: "Tính tiền / Thanh toán",
        phonetic: "Tin tyen / Tan twan",
        spellingFormula: "T - I - NH - Sắc ➔ TÍNH / T - I - Ê - N - Huyền ➔ TIỀN",
        meaningEn: "To calculate bill / Pay the check",
        emoji: "🧾",
        exampleVi: "Em ơi, cho anh tính tiền bàn số ba!",
        exampleEn: "Excuse me, can I pay the bill for table number three!",
        southernUsageTip: "Câu nói chuẩn xác nhất khi ăn uống xong tại bất kỳ hàng quán nào."
      },
      {
        id: "2-2",
        termVi: "Quét mã QR",
        phonetic: "Kwet mah Q-R",
        spellingFormula: "Q - U - E - T - Sắc ➔ QUÉT / M - A - Ngã ➔ MÃ",
        meaningEn: "Scan QR code (to transfer money)",
        emoji: "📱",
        exampleVi: "Ở quán mình có nhận quét mã QR không em?",
        exampleEn: "Does your shop accept payment by scanning QR code?",
        southernUsageTip: "Hình thức thanh toán phổ biến hàng đầu hiện nay tại Việt Nam."
      },
      {
        id: "2-3",
        termVi: "Chuyển khoản",
        phonetic: "Chwi-en kwan",
        spellingFormula: "CH - UY - Ê - N - Hỏi ➔ CHUYỂN / KH - O - A - N - Hỏi ➔ KHOẢN",
        meaningEn: "Bank transfer",
        emoji: "🏦",
        exampleVi: "Anh chuyển khoản hai trăm ngàn cho em rồi nhé.",
        exampleEn: "I have transferred two hundred thousand dong to your account.",
        southernUsageTip: "Dùng khi thanh toán online qua tài khoản ngân hàng."
      },
      {
        id: "2-4",
        termVi: "Tiền mặt",
        phonetic: "Tyen mat",
        spellingFormula: "T - I - Ê - N - Huyền ➔ TIỀN / M - Ă - T - Nặng ➔ MẶT",
        meaningEn: "Cash / Paper currency",
        emoji: "💵",
        exampleVi: "Dạ em chỉ mang theo một ít tiền mặt thôi.",
        exampleEn: "I only carry a little bit of cash with me.",
        southernUsageTip: "Tiền giấy hoặc polymer lưu hành trực tiếp."
      },
      {
        id: "2-5",
        termVi: "Tiền thối / Tiền thừa",
        phonetic: "Tyen toy / Tyen too-uh",
        spellingFormula: "T - I - Ê - N - Huyền ➔ TIỀN / TH - Ô - I - Sắc ➔ THỐI",
        meaningEn: "Change returned / Excess money returned",
        emoji: "🪙",
        exampleVi: "Dạ gửi lại anh ba mươi ngàn tiền thối ạ.",
        exampleEn: "Here is thirty thousand dong in change for you, sir.",
        southernUsageTip: "Miền Nam thường gọi là 'tiền thối', miền Bắc gọi là 'tiền thừa'."
      },
      {
        id: "2-6",
        termVi: "Hóa đơn",
        phonetic: "Hwah duhn",
        spellingFormula: "H - O - A - Sắc ➔ HÓA / Đ - Ơ - N ➔ ĐƠN",
        meaningEn: "Bill / Receipt / Invoice",
        emoji: "📄",
        exampleVi: "Làm ơn cho tôi xem lại tờ hóa đơn tính tiền.",
        exampleEn: "Please let me check the receipt bill again.",
        southernUsageTip: "Dùng để kiểm tra các món đã gọi và tổng tiền."
      },
      {
        id: "2-7",
        termVi: "Năm trăm ngàn",
        phonetic: "Nam tram ngan",
        spellingFormula: "N - Ă - M ➔ NĂM / TR - Ă - M ➔ TRĂM / NG - A - N - Huyền ➔ NGÀN",
        meaningEn: "500,000 VND (Half a million dong)",
        emoji: "💎",
        exampleVi: "Tờ tiền năm trăm ngàn có màu xanh da trời nhạt.",
        exampleEn: "The five hundred thousand dong banknote is light cyan in color.",
        southernUsageTip: "Mệnh giá tiền giấy polymer cao nhất của tiền tệ Việt Nam."
      },
      {
        id: "2-8",
        termVi: "Chia đều tiền",
        phonetic: "Chee-uh dew tyen",
        spellingFormula: "CH - I - A ➔ CHIA / Đ - Ê - U - Huyền ➔ ĐỀU",
        meaningEn: "Split the bill evenly / Go Dutch",
        emoji: "👥",
        exampleVi: "Bữa ăn này hết 400k, tụi mình chia đều tiền nhé!",
        exampleEn: "This meal is 400k, let's split the bill evenly!",
        southernUsageTip: "Cách thanh toán khi đi ăn uống cùng nhóm bạn bè."
      },
      {
        id: "2-9",
        termVi: "Số tài khoản",
        phonetic: "Soh tye kwan",
        spellingFormula: "S - Ô - Sắc ➔ SỐ / T - A - I - Huyền ➔ TÀI",
        meaningEn: "Bank account number",
        emoji: "🔢",
        exampleVi: "Cho mình xin số tài khoản ngân hàng để chuyển tiền.",
        exampleEn: "Please give me your bank account number to transfer money.",
        southernUsageTip: "Dùng khi chuyển tiền trực tiếp không cần quét QR."
      },
      {
        id: "2-10",
        termVi: "Tiền lẻ",
        phonetic: "Tyen leh",
        spellingFormula: "T - I - Ê - N - Huyền ➔ TIỀN / L - E - Hỏi ➔ LẺ",
        meaningEn: "Small change / Small denominations",
        emoji: "🪙",
        exampleVi: "Bác ơi, cháu không có tiền lẻ, cháu gửi tờ một trăm ngàn nhé.",
        exampleEn: "Sir, I do not have small change, here is a 100k note.",
        southernUsageTip: "Tiền mệnh giá nhỏ (1k, 2k, 5k, 10k, 20k)."
      },
      {
        id: "2-11",
        termVi: "Phí dịch vụ",
        phonetic: "Fee zik voo",
        spellingFormula: "PH - I - Sắc ➔ PHÍ / D - I - CH - Nặng ➔ DỊCH",
        meaningEn: "Service charge / Service fee",
        emoji: "📋",
        exampleVi: "Hóa đơn đã bao gồm năm phần trăm phí dịch vụ.",
        exampleEn: "The bill already includes a five percent service fee.",
        southernUsageTip: "Thường gặp tại các nhà hàng hoặc khách sạn lớn."
      },
      {
        id: "2-12",
        termVi: "Giữ lại tiền thối",
        phonetic: "Ziu lye tyen toy",
        spellingFormula: "GI - Ư - Ngã ➔ GIỮ / L - A - I - Nặng ➔ LẠI",
        meaningEn: "Keep the change",
        emoji: "🤲",
        exampleVi: "Dạ số tiền thừa này em gửi tặng anh, anh giữ lại nhé!",
        exampleEn: "Please keep the change, consider it a tip for your service!",
        southernUsageTip: "Cách gửi tiền tip nhã nhặn cho tài xế hoặc người phục vụ."
      }
    ],
    quiz: [
      {
        id: "q2-1",
        type: "picture_word",
        pictureEmoji: "📱",
        promptVi: "Nhìn hình ảnh quét mã trên điện thoại dưới đây và chọn hình thức thanh toán đúng:",
        promptEn: "Look at the mobile QR scan image below and select the correct payment method:",
        options: ["Quét mã QR chuyển khoản", "Thanh toán bằng vàng", "Ghi sổ nợ", "Đổi đồ cũ"],
        optionsEn: ["Scan QR bank transfer", "Pay with gold", "Write debt book", "Trade old goods"],
        correctAnswer: "Quét mã QR chuyển khoản",
        explanationVi: "Hình điện thoại quét mã là phương thức 'Quét mã QR chuyển khoản' qua ứng dụng ngân hàng.",
        explanationEn: "The mobile phone scanning a barcode/QR code represents cashless QR bank transfer."
      },
      {
        id: "q2-2",
        type: "multiple_choice",
        promptVi: "Bài toán tính tiền: Bạn ăn 1 tô bún bò 60.000đ và uống 1 ly sinh tố 25.000đ. Tổng hóa đơn là bao nhiêu?",
        promptEn: "Bill calculation: You have 1 bowl of noodles (60k) and 1 smoothie (25k). What is the total bill?",
        options: ["85.000 đồng", "75.000 đồng", "95.000 đồng", "90.000 đồng"],
        optionsEn: ["85,000 VND", "75,000 VND", "95,000 VND", "90,000 VND"],
        correctAnswer: "85.000 đồng",
        explanationVi: "60.000đ + 25.000đ = 85.000 đồng (Tám mươi lăm ngàn đồng).",
        explanationEn: "60,000 + 25,000 = 85,000 VND."
      },
      {
        id: "q2-3",
        type: "multiple_choice",
        promptVi: "Bài toán tiền thối: Hóa đơn của bạn là 160.000đ. Bạn đưa cho thu ngân 200.000đ tiền mặt. Thu ngân phải thối lại cho bạn bao nhiêu tiền?",
        promptEn: "Change calculation: Your bill is 160k. You hand 200k in cash. How much change should you receive?",
        options: ["40.000 đồng", "30.000 đồng", "50.000 đồng", "60.000 đồng"],
        optionsEn: ["40,000 VND", "30,000 VND", "50,000 VND", "60,000 VND"],
        correctAnswer: "40.000 đồng",
        explanationVi: "200.000đ - 160.000đ = 40.000 đồng (Bốn mươi ngàn đồng).",
        explanationEn: "200,000 - 160,000 = 40,000 VND in change."
      },
      {
        id: "q2-4",
        type: "cultural_riddle",
        promptVi: "Đố vui ứng xử: Khi đưa tiền thanh toán hoặc nhận lại tiền thối từ người khác, hành động nào thể hiện phép lịch sự cao nhất?",
        promptEn: "Cultural riddle: When handing payment or receiving change from someone, which gesture shows the highest courtesy?",
        options: [
          "Dùng cả hai tay và gật đầu nhẹ kèm lời cảm ơn",
          "Ném tiền lên mặt bàn",
          "Dùng một tay ngoắc tiền rồi quay lưng đi",
          "Không nhìn vào người đối diện"
        ],
        optionsEn: [
          "Use both hands with a gentle nod and say thank you",
          "Toss money onto the table (Rude)",
          "Take money with one finger and turn away",
          "Avoid looking at the person"
        ],
        correctAnswer: "Dùng cả hai tay và gật đầu nhẹ kèm lời cảm ơn",
        explanationVi: "Đưa và nhận tiền bằng hai tay là quy tắc vàng thể hiện sự tôn trọng và giáo dục lịch thiệp trong văn hóa Việt Nam.",
        explanationEn: "Giving and receiving items with two hands is the hallmark of politeness and respect in Vietnam."
      },
      {
        id: "q2-5",
        type: "picture_word",
        pictureEmoji: "💵",
        promptVi: "Nhìn hình tờ tiền dưới đây và chọn thuật ngữ chỉ tiền giấy lưu hành trực tiếp:",
        promptEn: "Look at the cash banknote image below and choose the term for physical cash currency:",
        options: ["Tiền mặt", "Thẻ tín dụng", "Phiếu giảm giá", "Hóa đơn điện tử"],
        optionsEn: ["Cash", "Credit card", "Coupon voucher", "E-invoice"],
        correctAnswer: "Tiền mặt",
        explanationVi: "Hình cọc tiền giấy đại diện cho phương thức thanh toán bằng 'Tiền mặt'.",
        explanationEn: "The banknote stack represents physical cash payment."
      }
    ],
    gameTitleVi: "Thử Thách Tính Tiền & Thanh Toán",
    gameTitleEn: "Bill & Payment Challenge",
    gameDescriptionVi: "Giải quyết các bài toán tính tiền và quy tắc ứng xử thực tế!",
    gameDescriptionEn: "Solve bill calculations and practical payment situations!",
    gameItems: [],
    homework: [],
    teacherSlides: []
  },

  // ==========================================
  // LESSON 3: ẨM THỰC, GỌI MÓN & YÊU CẦU KHẨU VỊ
  // ==========================================
  {
    id: 3,
    titleVi: "Bài 3: Ẩm Thực, Gọi Món & Khẩu Vị",
    titleEn: "Lesson 3: Food Ordering & Taste Preferences",
    subtitleVi: "Cách dặn không cay, ít đường, không đá và thưởng thức ẩm thực",
    subtitleEn: "Customizing taste: no spicy, less sugar, no ice, and dining manners",
    icon: "🍜",
    themeColor: "rose",
    stampTitleVi: "Ẩm Thực Đường Phố",
    stampTitleEn: "Street Food Stamp",
    landmarkVi: "Khu Phố Ẩm Thực Vĩnh Khánh & Chợ Đêm",
    landmarkEn: "Vinh Khanh Food Street & Night Market",
    culturalTraitVi: "Hào sảng tặng kèm rau sống, trà đá và nghệ thuật nêm nếm gia vị",
    culturalTraitEn: "Complimentary fresh herbs, iced tea, and seasoning traditions",
    landmarkStoryVi: "Ẩm thực đường phố Sài Gòn quy tụ tinh hoa ẩm thực ba miền với phở, cơm tấm sườn bì chả, bánh mì giòn tan và những ly cà phê sữa đá đậm đà.",
    landmarkStoryEn: "Saigon's vibrant food scene combines the best of Vietnamese cuisine: savory pho, fragrant broken rice, crispy banh mi, and rich iced coffee.",
    culturalStory: {
      titleVi: "Đĩa Rau Sống Tươi Ngon, Ly Trà Đá & Tấm Lòng Hào Sảng",
      titleEn: "Fresh Herb Platters, Iced Tea & Southern Generosity",
      habitVi: "Thói quen ăn món nước kèm đĩa rau thơm đầy ắp và uống ly trà đá giải nhiệt miễn phí",
      habitEn: "Habit of eating noodle soup with generous fresh herbs and drinking free iced tea",
      storyVi: "Bất kể bạn vào một quán ăn bình dân ven đường hay nhà hàng sang trọng tại TP.HCM, ngay khi vừa ngồi xuống bạn sẽ được mời một ly trà đá mát rượi. Khi gọi tô phở, bún bò hay hủ tiếu, người phục vụ luôn mang ra một đĩa rau thơm tươi ngon ngút ngàn gồm ngò gai, húng quế, giá đỗ và chanh ớt. Bạn có thể xin thêm rau thoải mái mà không bao giờ bị tính thêm tiền. Đó chính là nét đẹp hào sảng, phóng khoáng của đất phương Nam.",
      storyEn: "Whether at a roadside food cart or a fine dining establishment in Saigon, you are immediately greeted with a refreshing glass of iced tea (trà đá). When ordering soup, an overflowing platter of fresh herbs (rau sống), lime wedges, and bean sprouts is served. You can ask for extra herbs freely without charge, embodying the warm generosity of Southern hospitality.",
      politeTipVi: "Mẹo gọi món: Nếu bạn không ăn cay được, hãy dặn nhân viên ngay lúc gọi món: 'Làm ơn đừng bỏ ớt vào tô của tôi nhé!'",
      politeTipEn: "Ordering tip: If you cannot tolerate chili, specify immediately: 'Đừng bỏ ớt nhé' (No chili please)!",
      emoji: "☕",
      landmarkVi: "Khu Ẩm Thực Quận 4"
    },
    flashcards: [
      {
        id: "3-1",
        termVi: "Cho tôi gọi món",
        phonetic: "Cho toy goy mawn",
        spellingFormula: "CH - O ➔ CHO / T - Ô - I ➔ TÔI / G - O - I - Nặng ➔ GỌI",
        meaningEn: "I would like to order food",
        emoji: "📖",
        exampleVi: "Em ơi, cho tôi gọi món ăn trưa nhé!",
        exampleEn: "Excuse me, I would like to order lunch please!",
        southernUsageTip: "Dùng để ra hiệu cho nhân viên khi bạn đã xem xong thực đơn."
      },
      {
        id: "3-2",
        termVi: "Không ăn cay / Đừng bỏ ớt",
        phonetic: "Hohm an kye / Doong baw uht",
        spellingFormula: "KH - Ô - NG ➔ KHÔNG / C - A - Y ➔ CAY / Ớ - T - Sắc ➔ ỚT",
        meaningEn: "No spicy / Do not put chili",
        emoji: "🌶️",
        exampleVi: "Tô của tôi không ăn cay, đừng bỏ ớt nghen!",
        exampleEn: "My bowl is not spicy, please do not add any chili!",
        southernUsageTip: "Cực kỳ hữu ích cho người nước ngoài không quen ăn ớt cay nồng."
      },
      {
        id: "3-3",
        termVi: "Ít đường / Không đường",
        phonetic: "Eet doo-uhng / Hohm doo-uhng",
        spellingFormula: "I - T - Sắc ➔ ÍT / Đ - ƯƠ - NG - Huyền ➔ ĐƯỜNG",
        meaningEn: "Less sugar / Sugar-free",
        emoji: "🍬",
        exampleVi: "Cho tôi một ly cà phê sữa ít đường nhiều đá.",
        exampleEn: "Please give me an iced milk coffee with less sugar and lots of ice.",
        southernUsageTip: "Đồ uống ở miền Nam thường ngọt, dặn 'ít đường' nếu bạn thích vị thanh."
      },
      {
        id: "3-4",
        termVi: "Không đá / Đá riêng",
        phonetic: "Hohm dah / Dah ree-eng",
        spellingFormula: "Đ - A - Sắc ➔ ĐÁ / R - I - Ê - NG ➔ RIÊNG",
        meaningEn: "No ice / Ice on the side",
        emoji: "🧊",
        exampleVi: "Cho tôi nước cam ép không đá nhé.",
        exampleEn: "Please give me orange juice with no ice.",
        southernUsageTip: "Dùng khi bạn bị viêm họng hoặc không muốn uống đồ lạnh."
      },
      {
        id: "3-5",
        termVi: "Cơm tấm sườn bì chả",
        phonetic: "Cohm tam soo-uhn bee chah",
        spellingFormula: "C - Ơ - M ➔ CƠM / T - Â - M - Sắc ➔ TẤM / S - ƯỜ - N ➔ SƯỜN",
        meaningEn: "Broken rice with grilled pork chop, shredded pork skin & egg meatloaf",
        emoji: "🍛",
        exampleVi: "Sáng nay mình ăn đĩa cơm tấm sườn trứng ốp la nhé!",
        exampleEn: "Let's have a plate of broken rice with pork chop and sunny egg this morning!",
        southernUsageTip: "Món ăn quốc hồn quốc túy đặc trưng nhất của Sài Gòn."
      },
      {
        id: "3-6",
        termVi: "Rau sống / Rau thơm",
        phonetic: "Zow sowng / Zow tuhm",
        spellingFormula: "R - A - U ➔ RAU / S - Ô - NG - Sắc ➔ SỐNG",
        meaningEn: "Fresh herbs / Raw vegetables",
        emoji: "🥬",
        exampleVi: "Cô ơi, cho con xin thêm một đĩa rau thơm nghen!",
        exampleEn: "Auntie, can I have an extra plate of fresh herbs please!",
        southernUsageTip: "Các loại rau húng quế, ngò gai, tía tô ăn kèm phở, bún bò."
      },
      {
        id: "3-7",
        termVi: "Mang về / Gói mang đi",
        phonetic: "Mahng vay / Goy mahng dee",
        spellingFormula: "M - A - NG ➔ MANG / V - Ê - Huyền ➔ VỀ",
        meaningEn: "Take away / To go",
        emoji: "🥡",
        exampleVi: "Cho tôi hai ổ bánh mì thịt mang về nhé.",
        exampleEn: "Give me two meat baguettes to go please.",
        southernUsageTip: "Khi muốn mua đồ ăn mang đi thay vì ăn tại chỗ."
      },
      {
        id: "3-8",
        termVi: "Khăn lạnh",
        phonetic: "Kahn lan",
        spellingFormula: "KH - Ă - N ➔ KHĂN / L - A - NH - Nặng ➔ LẠNH",
        meaningEn: "Wet wipe / Cold towel",
        emoji: "🧻",
        exampleVi: "Em ơi, cho anh hai cái khăn lạnh lau tay.",
        exampleEn: "Excuse me, bring me two cold wet towels to wipe hands.",
        southernUsageTip: "Khăn ướt để lau tay trước và sau khi ăn."
      },
      {
        id: "3-9",
        termVi: "Nước mắm chấm",
        phonetic: "Noo-uhk mam cham",
        spellingFormula: "N - ƯƠ - C - Sắc ➔ NƯỚC / M - Ă - M - Sắc ➔ MẮM",
        meaningEn: "Fish dipping sauce",
        emoji: "🥣",
        exampleVi: "Nước mắm chua ngọt pha tỏi ớt chấm chả giò rất ngon.",
        exampleEn: "Sweet-sour fish sauce with garlic and chili is delicious with spring rolls.",
        southernUsageTip: "Linh hồn của hầu hết các món ăn đường phố Việt Nam."
      },
      {
        id: "3-10",
        termVi: "Tô lớn / Tô đặc biệt",
        phonetic: "Toh luhn / Toh dac byet",
        spellingFormula: "T - Ô ➔ TÔ / L - Ơ - N - Sắc ➔ LỚN",
        meaningEn: "Large bowl / Special combo bowl",
        emoji: "🍲",
        exampleVi: "Cho anh một tô phở bò đặc biệt đầy đủ thịt tái, nạm, gầu.",
        exampleEn: "Give me a special beef pho combo with all cuts of beef.",
        southernUsageTip: "Chọn cỡ tô lớn khi bạn đang rất đói."
      },
      {
        id: "3-11",
        termVi: "Đũa và muỗng (thìa)",
        phonetic: "Doo-uh vah moo-uhng",
        spellingFormula: "Đ - U - A - Ngã ➔ ĐŨA / M - U - Ô - NG - Ngã ➔ MUỠNG",
        meaningEn: "Chopsticks and spoon",
        emoji: "🥢",
        exampleVi: "Em ơi cho xin thêm một đôi đũa và cái muỗng sạch.",
        exampleEn: "Excuse me, could you bring an extra pair of chopsticks and clean spoon.",
        southernUsageTip: "Miền Nam gọi là 'muỗng', miền Bắc gọi là 'thìa'."
      },
      {
        id: "3-12",
        termVi: "Trà đá miễn phí",
        phonetic: "Chah dah myen fee",
        spellingFormula: "TR - A - Huyền ➔ TRÀ / Đ - A - Sắc ➔ ĐÁ",
        meaningEn: "Complimentary iced tea",
        emoji: "🧊",
        exampleVi: "Ở quán cơm tấm này, trà đá và khăn giấy được phục vụ miễn phí.",
        exampleEn: "At this broken rice eatery, iced tea and napkins are served for free.",
        southernUsageTip: "Nét văn hóa hiếu khách đặc trưng của người dân Nam Bộ."
      }
    ],
    quiz: [
      {
        id: "q3-1",
        type: "picture_word",
        pictureEmoji: "🍜",
        promptVi: "Nhìn hình ảnh tô nước dùng nóng hổi dưới đây và chọn tên món ăn truyền thống nổi tiếng của Việt Nam:",
        promptEn: "Look at the hot noodle bowl image below and select Vietnam's world-famous dish:",
        options: ["Tô phở bò nóng hổi", "Bánh hamburger", "Mì cay Hàn Quốc", "Bánh pizza"],
        optionsEn: ["Hot bowl of beef pho", "Hamburger", "Korean spicy noodles", "Pizza"],
        correctAnswer: "Tô phở bò nóng hổi",
        explanationVi: "Hình tô phở bốc khói nghi ngút là món 'Phở bò' trứ danh của Việt Nam.",
        explanationEn: "The steaming bowl represents traditional Vietnamese beef pho."
      },
      {
        id: "q3-2",
        type: "multiple_choice",
        promptVi: "Bạn không thể ăn được đồ cay. Khi gọi món phở hoặc bún, câu nào dưới đây là chuẩn xác nhất để dặn dò quán?",
        promptEn: "You cannot eat spicy food. When ordering, which sentence is most accurate to instruct the restaurant?",
        options: [
          "Làm ơn đừng bỏ ớt và tiêu vào tô của tôi nhé!",
          "Cho tôi thật nhiều ớt băm cay xé lưỡi!",
          "Bỏ vào đây một trái ớt hiểm đỏ!",
          "Món này càng cay tôi càng thích!"
        ],
        optionsEn: [
          "Please do not put chili or pepper in my bowl!",
          "Add lots of spicy minced chili!",
          "Put a red hot chili here!",
          "The spicier the better!"
        ],
        correctAnswer: "Làm ơn đừng bỏ ớt và tiêu vào tô của tôi nhé!",
        explanationVi: "'Làm ơn đừng bỏ ớt và tiêu vào tô của tôi nhé!' giúp đầu bếp loại trừ các gia vị gây cay nóng.",
        explanationEn: "'Làm ơn đừng bỏ ớt và tiêu vào tô của tôi nhé!' clearly requests no spicy ingredients."
      },
      {
        id: "q3-3",
        type: "multiple_choice",
        promptVi: "Cà phê sữa đá ở miền Nam thường khá ngọt béo. Nếu muốn giảm bớt độ ngọt, bạn dặn như thế nào?",
        promptEn: "Iced milk coffee in Southern Vietnam is quite sweet. How do you ask for less sweetness?",
        options: [
          "Cho tôi cà phê sữa ít ngọt / ít sữa đặc thôi nhé!",
          "Cho thêm ba muỗng đường đầy!",
          "Cho thêm thật nhiều sữa đặc có đường!",
          "Pha thật ngọt như chè!"
        ],
        optionsEn: [
          "Make my milk coffee with less sugar / less condensed milk please!",
          "Add three big spoons of sugar!",
          "Add lots of sweet condensed milk!",
          "Make it as sweet as dessert soup!"
        ],
        correctAnswer: "Cho tôi cà phê sữa ít ngọt / ít sữa đặc thôi nhé!",
        explanationVi: "'Cho tôi ít ngọt / ít đường' là câu cửa miệng để người pha chế giảm lượng sữa đặc trong ly cà phê.",
        explanationEn: "'Ít ngọt / ít đường' tells the barista to reduce condensed milk for a balanced taste."
      },
      {
        id: "q3-4",
        type: "cultural_riddle",
        promptVi: "Đố vui ẩm thực: Tại sao khi gọi món nước như phở, hủ tiếu hay bún bò ở Sài Gòn, thực khách luôn được tặng kèm một đĩa rau thơm lớn?",
        promptEn: "Culinary riddle: Why is a big platter of fresh herbs always served complimentary with soups in Saigon?",
        options: [
          "Vì thói quen ăn kèm rau sống thơm mát giúp cân bằng vị giác và là nét hào sảng đặc trưng",
          "Vì quán muốn thanh lý rau cũ",
          "Vì rau bắt buộc phải tính thêm 50.000 đồng",
          "Vì luật pháp quy định ai cũng phải ăn hết rau"
        ],
        optionsEn: [
          "Fresh herbs balance flavors and reflect Southern culinary generosity",
          "The shop wants to discard old vegetables",
          "Vegetables cost extra 50,000 VND",
          "Law requires everyone to finish herbs"
        ],
        correctAnswer: "Vì thói quen ăn kèm rau sống thơm mát giúp cân bằng vị giác và là nét hào sảng đặc trưng",
        explanationVi: "Rau sống tươi (ngò gai, húng quế, giá đỗ) làm dậy hương thơm của nước lèo và cân bằng dinh dưỡng, hoàn toàn miễn phí.",
        explanationEn: "Fresh aromatic herbs elevate the broth aroma and balance the meal, offered free as part of local hospitality."
      },
      {
        id: "q3-5",
        type: "picture_word",
        pictureEmoji: "☕",
        promptVi: "Nhìn hình ly thức uống dưới đây và chọn tên thức uống biểu tượng của đường phố Sài Gòn:",
        promptEn: "Look at the beverage image below and choose Saigon's iconic street beverage:",
        options: ["Cà phê sữa đá", "Rượu vang đỏ", "Sữa tươi trân châu", "Nước ngọt có ga"],
        optionsEn: ["Vietnamese iced milk coffee", "Red wine", "Bubble milk", "Carbonated soda"],
        correctAnswer: "Cà phê sữa đá",
        explanationVi: "Ly 'Cà phê sữa đá' pha phin đậm đà hòa cùng sữa đặc và đá viên là biểu tượng văn hóa giải khát số một của Sài Gòn.",
        explanationEn: "Vietnamese iced milk coffee is the quintessential daily drink of Saigon."
      }
    ],
    gameTitleVi: "Thực Đơn & Khẩu Vị Ẩm Thực",
    gameTitleEn: "Menu & Taste Challenge",
    gameDescriptionVi: "Chọn món ăn và dặn dò khẩu vị chuẩn xác!",
    gameDescriptionEn: "Choose food items and customize tastes accurately!",
    gameItems: [],
    homework: [],
    teacherSlides: []
  },

  // ==========================================
  // LESSON 4: HỎI ĐƯỜNG, PHƯƠNG HƯỚNG & ĐÓN XE
  // ==========================================
  {
    id: 4,
    titleVi: "Bài 4: Hỏi Đường, Hướng & Đón Xe",
    titleEn: "Lesson 4: Directions, Navigation & Rides",
    subtitleVi: "Cách hỏi đường, rẽ trái, rẽ phải, đi thẳng và đón xe di chuyển",
    subtitleEn: "Asking directions, turning left/right, going straight, and hailing rides",
    icon: "🧭",
    themeColor: "sky",
    stampTitleVi: "Du Hí Đường Phố Sài Gòn",
    stampTitleEn: "Saigon Navigation Stamp",
    landmarkVi: "Nhà thờ Đức Bà & Bưu điện Thành phố",
    landmarkEn: "Notre Dame Cathedral & Post Office",
    culturalTraitVi: "Sự nhiệt tình chỉ đường và cách xưng hô thân mật của người dân",
    culturalTraitEn: "Friendly street directions and warm conversational demeanor",
    landmarkStoryVi: "Khu vực trung tâm với các đại lộ rợp bóng cây cổ thụ và những ngã tư đông đúc, nơi du khách dễ dàng hỏi đường và di chuyển thuận tiện.",
    landmarkStoryEn: "The central district features tree-lined boulevards and bustling intersections where locals are always eager to give directions.",
    culturalStory: {
      titleVi: "Người Sài Gòn Chỉ Đường Tận Tình & Thói Quen Cảm Ơn",
      titleEn: "Saigon's Enthusiastic Navigators & The Thank-You Etiquette",
      habitVi: "Thói quen hỏi đường người lớn tuổi, bác xe ôm và sự nhiệt tình chỉ dẫn tận tình",
      habitEn: "Habit of asking elders or drivers for directions and their passionate, detailed guidance",
      storyVi: "Nếu bạn bị lạc đường ở TP.HCM, đừng ngần ngại tấp xe vào lề hoặc bước đến một bác xe ôm, một cô bán nước ven đường để hỏi. Người Sài Gòn nổi tiếng với sự nhiệt tình khi chỉ đường: họ sẽ dùng cả hai tay khua khoắng mô tả ngã tư, dặn dò 'con đi thẳng qua cái đèn đỏ, thấy cái cây cổ thụ bự chảng thì quẹo phải nghen!'. Đôi khi, nếu thấy du khách còn bối rối, họ sẵn sàng nổ máy xe chạy trước dẫn đường một đoạn dài mà không đòi hỏi bất cứ điều gì.",
      storyEn: "If you get lost in Ho Chi Minh City, don't hesitate to pull over and ask a motorbike taxi driver or roadside vendor. Locals are legendary for their navigational enthusiasm: they will gesture animatedly with both hands, saying 'Walk straight past the traffic light, then turn right at the big tree!'. If you still look confused, they might even hop on their scooter and lead you there for free.",
      politeTipVi: "Mẹo hỏi đường: Luôn bắt đầu bằng câu chào lễ phép: 'Chú ơi / Cô ơi / Anh ơi, làm ơn cho con hỏi thăm đường...' và kết thúc bằng nụ cười cảm ơn chân thành!",
      politeTipEn: "Tip for directions: Always open with 'Chú ơi / Chị ơi, làm ơn cho con hỏi đường...' and close with a sincere warm thank you!",
      emoji: "🧭",
      landmarkVi: "Công viên 30/4 Quận 1"
    },
    flashcards: [
      {
        id: "4-1",
        termVi: "Đi thẳng",
        phonetic: "Dee tang",
        spellingFormula: "Đ - I ➔ ĐI / TH - Ă - NG - Dấu hỏi ➔ THẲNG",
        meaningEn: "Go straight / Walk straight ahead",
        emoji: "⬆️",
        exampleVi: "Anh cứ đi thẳng con đường này khoảng năm trăm mét nhé.",
        exampleEn: "Just go straight along this road for about five hundred meters.",
        southernUsageTip: "Hướng đi cơ bản nhất khi được chỉ dẫn trên đường."
      },
      {
        id: "4-2",
        termVi: "Rẽ trái / Quẹo trái",
        phonetic: "Zeh try / Kweo try",
        spellingFormula: "R - E - Ngã ➔ RẼ / TR - A - I - Sắc ➔ TRÁI",
        meaningEn: "Turn left",
        emoji: "⬅️",
        exampleVi: "Tới ngã tư đèn giao thông thì quẹo trái nghen con!",
        exampleEn: "When you reach the traffic light intersection, turn left!",
        southernUsageTip: "Miền Nam dùng từ 'quẹo trái', miền Bắc dùng 'rẽ trái'. Cả hai đều chuẩn."
      },
      {
        id: "4-3",
        termVi: "Rẽ phải / Quẹo phải",
        phonetic: "Zeh fye / Kweo fye",
        spellingFormula: "R - E - Ngã ➔ RẼ / PH - A - I - Hỏi ➔ PHẢI",
        meaningEn: "Turn right",
        emoji: "➡️",
        exampleVi: "Qua khỏi cây cầu thì rẽ phải vào đường lớn.",
        exampleEn: "After crossing the bridge, turn right onto the main boulevard.",
        southernUsageTip: "'Quẹo phải' là khẩu ngữ miền Nam rất tự nhiên."
      },
      {
        id: "4-4",
        termVi: "Ngã tư / Đèn đỏ",
        phonetic: "Ngah too / Den daw",
        spellingFormula: "NG - A - Ngã ➔ NGÃ / T - Ư ➔ TƯ",
        meaningEn: "Intersection / Traffic light",
        emoji: "🚦",
        exampleVi: "Dừng lại chờ đèn đỏ ở ngã tư nhé anh tài xế.",
        exampleEn: "Please stop and wait for the red light at the intersection, driver.",
        southernUsageTip: "Điểm mốc định hướng quan trọng nhất trên đường phố đô thị."
      },
      {
        id: "4-5",
        termVi: "Đối diện",
        phonetic: "Doy dyen",
        spellingFormula: "Đ - Ô - I - Sắc ➔ ĐỐI / D - I - Ê - N - Nặng ➔ DIỆN",
        meaningEn: "Opposite / Across from",
        emoji: "↔️",
        exampleVi: "Bưu điện nằm ngay đối diện Nhà thờ Đức Bà.",
        exampleEn: "The Post Office is located directly across from Notre Dame Cathedral.",
        southernUsageTip: "Vị trí ở phía bên kia con đường."
      },
      {
        id: "4-6",
        termVi: "Bao xa / Bao lâu",
        phonetic: "Bow sah / Bow low",
        spellingFormula: "B - AO ➔ BAO / X - A ➔ XA / L - Â - U ➔ LÂU",
        meaningEn: "How far? / How long (time)?",
        emoji: "⏱️",
        exampleVi: "Từ đây ra sân bay Tân Sơn Nhất đi mất bao lâu?",
        exampleEn: "How long does it take to travel from here to the airport?",
        southernUsageTip: "Hỏi về khoảng cách km hoặc thời gian di chuyển phút/tiếng."
      },
      {
        id: "4-7",
        termVi: "Lạc đường",
        phonetic: "Lac doo-uhng",
        spellingFormula: "L - A - C - Nặng ➔ LẠC / Đ - ƯƠ - NG - Huyền ➔ ĐƯỜNG",
        meaningEn: "Lost / Get lost",
        emoji: "🗺️",
        exampleVi: "Xin lỗi, tôi là khách du lịch và tôi đang bị lạc đường.",
        exampleEn: "Excuse me, I am a tourist and I am currently lost.",
        southernUsageTip: "Nói câu này để nhờ người dân xung quanh giúp đỡ."
      },
      {
        id: "4-8",
        termVi: "Bắt taxi / Đặt Grab",
        phonetic: "Bat taxi / Dat Grab",
        spellingFormula: "B - Ă - T - Sắc ➔ BẮT / T - A - X - I",
        meaningEn: "Catch a taxi / Book a ride-hailing app",
        emoji: "🚕",
        exampleVi: "Trời mưa rồi, mình đặt xe công nghệ về khách sạn đi!",
        exampleEn: "It is raining, let's book a ride app to go back to the hotel!",
        southernUsageTip: "Phương tiện di chuyển thuận tiện và phổ biến nhất."
      },
      {
        id: "4-9",
        termVi: "Quay đầu xe",
        phonetic: "Kwy dow seh",
        spellingFormula: "Q - U - A - Y ➔ QUAY / Đ - Â - U - Huyền ➔ ĐẦU",
        meaningEn: "Make a U-turn",
        emoji: "↩️",
        exampleVi: "Đi quá đường rồi, bác tài vui lòng quay đầu xe lại giúp tôi.",
        exampleEn: "We missed the turn, please make a U-turn driver.",
        southernUsageTip: "Hướng dẫn tài xế khi cần đổi chiều xe chạy."
      },
      {
        id: "4-10",
        termVi: "Bên cạnh / Kế bên",
        phonetic: "Ben kan / Keh ben",
        spellingFormula: "B - Ê - N ➔ BÊN / C - A - NH - Nặng ➔ CẠNH",
        meaningEn: "Next to / Beside",
        emoji: "👉",
        exampleVi: "Hiệu sách nằm ngay bên cạnh tiệm bánh ngọt.",
        exampleEn: "The bookstore is located right next to the bakery.",
        southernUsageTip: "Mô tả vị trí tiếp giáp gần kề."
      },
      {
        id: "4-11",
        termVi: "Trạm xe buýt",
        phonetic: "Tram seh bwyt",
        spellingFormula: "TR - A - M - Nặng ➔ TRẠM / B - U - Y - T - Sắc ➔ BUÝT",
        meaningEn: "Bus stop",
        emoji: "🚏",
        exampleVi: "Tôi đang đứng đợi bạn ở trạm xe buýt trước công viên.",
        exampleEn: "I am waiting for you at the bus stop in front of the park.",
        southernUsageTip: "Điểm đón phương tiện giao thông công cộng."
      },
      {
        id: "4-12",
        termVi: "Cầu vượt / Hầm chui",
        phonetic: "Cow voo-uht / Ham chooy",
        spellingFormula: "C - Â - U - Huyền ➔ CẦU / V - ƯƠ - T - Nặng ➔ VƯỢT",
        meaningEn: "Overpass bridge / Underpass tunnel",
        emoji: "🌉",
        exampleVi: "Đi qua khỏi cầu vượt là tới trung tâm mua sắm.",
        exampleEn: "Once you cross the overpass, you will arrive at the mall.",
        southernUsageTip: "Công trình giao thông phân luồng xe chạy."
      }
    ],
    quiz: [
      {
        id: "q4-1",
        type: "picture_word",
        pictureEmoji: "🧭",
        promptVi: "Nhìn hình chiếc la bàn và bản đồ dưới đây và chọn từ chỉ phương hướng trong giao thông:",
        promptEn: "Look at the compass and map image below and choose the navigational term:",
        options: ["Bản đồ & Phương hướng", "Đồ nấu ăn", "Hóa đơn tiền điện", "Vở tập viết"],
        optionsEn: ["Map & Directions", "Cooking tools", "Electricity bill", "Notebook"],
        correctAnswer: "Bản đồ & Phương hướng",
        explanationVi: "Hình la bàn biểu tượng cho 'Bản đồ & Phương hướng' để xác định đường đi.",
        explanationEn: "The compass represents maps and navigation directions."
      },
      {
        id: "q4-2",
        type: "multiple_choice",
        promptVi: "Người dân chỉ đường cho bạn: 'Cứ đi thẳng tới ngã tư đèn đỏ rồi quẹo phải'. Bạn cần di chuyển như thế nào?",
        promptEn: "A local directs you: 'Go straight to the red light intersection, then turn right'. What should you do?",
        options: [
          "Đi thẳng đến ngã tư đèn giao thông, sau đó rẽ sang bên tay phải",
          "Quay đầu xe chạy ngược lại",
          "Rẽ sang bên tay trái ngay lập tức",
          "Dừng xe lại không đi nữa"
        ],
        optionsEn: [
          "Go straight to the traffic light, then turn to your right hand side",
          "Make a U-turn and go back",
          "Turn left immediately",
          "Stop and do not proceed"
        ],
        correctAnswer: "Đi thẳng đến ngã tư đèn giao thông, sau đó rẽ sang bên tay phải",
        explanationVi: "'Đi thẳng' ➔ 'ngã tư' ➔ 'quẹo phải' có nghĩa là đi thẳng tới ngã giao lộ rồi rẽ sang tay phải.",
        explanationEn: "'Go straight' to the intersection, then 'quẹo phải' (turn right)."
      },
      {
        id: "q4-3",
        type: "multiple_choice",
        promptVi: "Khi đi taxi hoặc xe ôm công nghệ và đã tới đúng nơi cần đến, bạn nên nói câu nào với bác tài?",
        promptEn: "When taking a taxi and reaching your destination, which phrase should you say to the driver?",
        options: [
          "Bác tài ơi, cho con / tôi xuống ngay chỗ này nhé!",
          "Chạy thêm mười cây số nữa đi!",
          "Sao chạy chậm chạp thế!",
          "Cứ chạy lòng vòng mãi đi!"
        ],
        optionsEn: [
          "Driver, please let me get off right here!",
          "Drive ten more kilometers!",
          "Why driving so slow!",
          "Keep circling around!"
        ],
        correctAnswer: "Bác tài ơi, cho con / tôi xuống ngay chỗ này nhé!",
        explanationVi: "'Bác tài ơi, cho tôi xuống ngay chỗ này nhé!' là câu nói chuẩn mực và thân thiện khi muốn xuống xe.",
        explanationEn: "'Bác tài ơi, cho tôi xuống ngay chỗ này nhé!' is the standard polite way to ask to alight."
      },
      {
        id: "q4-4",
        type: "cultural_riddle",
        promptVi: "Đố vui từ ngữ: Trong khẩu ngữ hàng ngày của người dân miền Nam, cụm từ 'gần xịt' có nghĩa là gì?",
        promptEn: "Cultural riddle: In Southern daily speech, what does the phrase 'gần xịt' mean?",
        options: [
          "Rất gần, chỉ cách vài bước chân hoặc đi vài phút là tới",
          "Rất xa, cách hàng trăm cây số",
          "Đường bị ngập nước",
          "Đường bị kẹt xe không đi được"
        ],
        optionsEn: [
          "Very close, just a few steps or minutes away",
          "Very far away",
          "Flooded street",
          "Traffic jam"
        ],
        correctAnswer: "Rất gần, chỉ cách vài bước chân hoặc đi vài phút là tới",
        explanationVi: "'Gần xịt' là từ lóng địa phương thân thương có nghĩa là 'rất gần, cực kỳ gần'.",
        explanationEn: "'Gần xịt' is a Southern colloquial expression meaning 'super close / right around the corner'."
      },
      {
        id: "q4-5",
        type: "picture_word",
        pictureEmoji: "🚦",
        promptVi: "Nhìn hình cột đèn giao thông dưới đây và chọn từ vựng đúng:",
        promptEn: "Look at the traffic light image below and select the correct vocabulary word:",
        options: ["Cột đèn giao thông / Đèn đỏ", "Biển báo cấm", "Cột đèn đường đêm", "Cột cờ"],
        optionsEn: ["Traffic light / Red light", "Prohibition sign", "Streetlamp", "Flagpole"],
        correctAnswer: "Cột đèn giao thông / Đèn đỏ",
        explanationVi: "Hình cột đèn ba màu xanh vàng đỏ là 'Đèn giao thông / Đèn đỏ' tại các giao lộ.",
        explanationEn: "The traffic light icon represents road traffic signals."
      }
    ],
    gameTitleVi: "Thử Thách Tìm Đường & Định Hướng",
    gameTitleEn: "Navigation & Directions Game",
    gameDescriptionVi: "Chọn hướng đi chính xác trong các tình huống lạc đường!",
    gameDescriptionEn: "Choose the correct route in navigation situations!",
    gameItems: [],
    homework: [],
    teacherSlides: []
  },

  // ==========================================
  // LESSON 5: DU LỊCH, KHÁCH SẠN & KHÁM PHÁ ĐỊA DANH
  // ==========================================
  {
    id: 5,
    titleVi: "Bài 5: Du Lịch, Khách Sạn & Khám Phá",
    titleEn: "Lesson 5: Travel, Hotels & Sightseeing",
    subtitleVi: "Cách mua vé tham quan, nhận phòng khách sạn và nhờ chụp ảnh",
    subtitleEn: "Buying admission tickets, hotel check-in, and photo requests",
    icon: "🧳",
    themeColor: "purple",
    stampTitleVi: "Du Lịch Khám Phá Sài Gòn",
    stampTitleEn: "Saigon Sightseeing Stamp",
    landmarkVi: "Dinh Độc Lập & Bến Bạch Đằng",
    landmarkEn: "Independence Palace & Bach Dang Wharf",
    culturalTraitVi: "Văn hoá mến khách, nụ cười chào đón và lưu giữ kỷ niệm đẹp",
    culturalTraitEn: "Hospitality, warm smiles, and creating lasting travel memories",
    landmarkStoryVi: "Dinh Độc Lập là di tích lịch sử quốc gia đặc biệt, nơi chứng kiến thời khắc lịch sử quan trọng của dân tộc và là điểm tham quan không thể bỏ qua tại TP.HCM.",
    landmarkStoryEn: "Independence Palace is a momentous historical landmark witnessing Vietnam's historic milestones, visited by millions of international travelers.",
    culturalStory: {
      titleVi: "Tấm Lòng Mến Khách Của Người Việt Nam & Niềm Vui Chụp Ảnh",
      titleEn: "Vietnamese Warm Hospitality & The Joy of Souvenir Photos",
      habitVi: "Thói quen sẵn lòng chụp ảnh giúp du khách và tươi cười chào đón bạn bè năm châu",
      habitEn: "Habit of enthusiastically helping tourists take photos and welcoming global visitors",
      storyVi: "Người Việt Nam có lòng hiếu khách nồng hậu và luôn cảm thấy tự hào khi giới thiệu vẻ đẹp quê hương với du khách quốc tế. Khi bạn đứng trước một danh lam thắng cảnh và cần chụp ảnh kỷ niệm, chỉ cần mỉm cười và mở lời nhờ: 'Anh/Chị ơi, làm ơn chụp giùm tôi một tấm hình được không?', họ sẽ sẵn sàng dừng lại, canh góc thật đẹp, đếm 'một hai ba cười nè!' và chụp liền vài tấm để bạn chọn ảnh ưng ý nhất. Khi tham quan các di tích trang nghiêm, du khách cũng chú ý mặc trang phục lịch sự để thể hiện lòng tôn kính văn hóa bản địa.",
      storyEn: "Vietnamese people are genuinely hospitable and take pride in sharing their country's heritage with foreign travelers. If you need a commemorative photo before an iconic landmark, simply smile and ask: 'Làm ơn chụp giùm tôi một tấm hình được không?'. Locals will gladly take multiple shots, angle the lighting, and count down 'One, two, three, smile!'. When visiting sacred cultural sites, modest attire is customary to honor heritage.",
      politeTipVi: "Mẹo du lịch văn hóa: Khi vào tham quan các đền chùa, di tích lịch sử, hãy mặc trang phục kín đáo (áo có tay, quần/váy dài qua đầu gối) và cởi nón khi vào chánh điện nhé!",
      politeTipEn: "Travel etiquette tip: When visiting temples or historical shrines, dress respectfully with covered shoulders and knees!",
      emoji: "📸",
      landmarkVi: "Dinh Độc Lập Quận 1"
    },
    flashcards: [
      {
        id: "5-1",
        termVi: "Vé vào cổng / Vé tham quan",
        phonetic: "Veh vow cowng / Veh tam kwan",
        spellingFormula: "V - E - Sắc ➔ VÉ / C - Ô - NG ➔ CỔNG",
        meaningEn: "Admission ticket / Sightseeing ticket",
        emoji: "🎟️",
        exampleVi: "Vé vào cổng Dinh Độc Lập giá sáu mươi ngàn một người.",
        exampleEn: "The admission ticket to Independence Palace is sixty thousand dong per person.",
        southernUsageTip: "Mua tại quầy vé trước khi vào tham quan các di tích."
      },
      {
        id: "5-2",
        termVi: "Nhận phòng / Trả phòng",
        phonetic: "Nyan fowng / Trah fowng",
        spellingFormula: "NH - Â - N - Nặng ➔ NHẬN / PH - Ò - NG ➔ PHÒNG",
        meaningEn: "Check-in / Check-out (hotel room)",
        emoji: "🏨",
        exampleVi: "Chào bạn, tôi muốn làm thủ tục nhận phòng khách sạn.",
        exampleEn: "Hello, I would like to check in to my hotel room.",
        southernUsageTip: "Giao tiếp tại quầy lễ tân khách sạn."
      },
      {
        id: "5-3",
        termVi: "Chụp hình giùm / Chụp ảnh giúp",
        phonetic: "Choop hin zoom / Choop anh zoop",
        spellingFormula: "CH - U - P - Sắc ➔ CHỤP / H - I - NH - Huyền ➔ HÌNH",
        meaningEn: "Take a picture for me / Photo request",
        emoji: "📷",
        exampleVi: "Chị ơi, làm ơn chụp giùm tôi một tấm hình kỷ niệm nhé!",
        exampleEn: "Sister, could you please take a souvenir photo for me!",
        southernUsageTip: "Miền Nam dùng 'chụp hình giùm', miền Bắc dùng 'chụp ảnh giúp'."
      },
      {
        id: "5-4",
        termVi: "Mấy giờ mở cửa",
        phonetic: "May zyuh muh coo-uh",
        spellingFormula: "M - Â - Y - Sắc ➔ MẤY / G - I - Ờ - Huyền ➔ GIỜ",
        meaningEn: "What time does it open?",
        emoji: "🕙",
        exampleVi: "Bảo tàng mỹ thuật mấy giờ mở cửa buổi sáng vậy ạ?",
        exampleEn: "What time does the fine arts museum open in the morning?",
        southernUsageTip: "Hỏi giờ giấc hoạt động của các điểm tham quan."
      },
      {
        id: "5-5",
        termVi: "Điểm tham quan nổi tiếng",
        phonetic: "Dyem tam kwan noy tyeng",
        spellingFormula: "Đ - I - Ê - M - Hỏi ➔ ĐIỂM / T - H - A - M ➔ THAM",
        meaningEn: "Famous tourist attraction / Sight",
        emoji: "🏛️",
        exampleVi: "Ở TP.HCM có những điểm tham quan nổi tiếng nào?",
        exampleEn: "What are the famous tourist sights in Ho Chi Minh City?",
        southernUsageTip: "Hỏi gợi ý lịch trình du lịch từ người bản địa."
      },
      {
        id: "5-6",
        termVi: "Hành lý",
        phonetic: "Han lee",
        spellingFormula: "H - A - NH - Huyền ➔ HÀNH / L - Y - Sắc ➔ LÝ",
        meaningEn: "Baggage / Luggage / Suitcase",
        emoji: "🧳",
        exampleVi: "Làm ơn cho tôi gửi hành lý tại quầy lễ tân đến chiều.",
        exampleEn: "Please allow me to store my luggage at the reception until evening.",
        southernUsageTip: "Vali, balo đồ đạc khi đi du lịch."
      },
      {
        id: "5-7",
        termVi: "Quà lưu niệm",
        phonetic: "Kwah loo nyem",
        spellingFormula: "Q - U - A - Huyền ➔ QUÀ / L - Ư - U ➔ LƯU",
        meaningEn: "Souvenirs / Keepsakes",
        emoji: "🎁",
        exampleVi: "Tôi muốn mua cà phê phin và nón lá làm quà lưu niệm.",
        exampleEn: "I want to buy phin coffee and conical hats as souvenirs.",
        southernUsageTip: "Món quà mua về cho gia đình, bạn bè sau chuyến đi."
      },
      {
        id: "5-8",
        termVi: "Chuyến đi tuyệt vời",
        phonetic: "Chwee-en dee twyet vuh-ee",
        spellingFormula: "CH - UY - Ê - N - Sắc ➔ CHUYẾN / T - UY - Ê - T - Nặng ➔ TUYỆT",
        meaningEn: "Wonderful journey / Amazing trip",
        emoji: "🌟",
        exampleVi: "Việt Nam thật đẹp, tôi đã có một chuyến đi tuyệt vời!",
        exampleEn: "Vietnam is beautiful, I had a truly wonderful trip!",
        southernUsageTip: "Lời khen ngợi và cảm xúc tích cực về trải nghiệm du lịch."
      },
      {
        id: "5-9",
        termVi: "Hướng dẫn viên",
        phonetic: "Hoo-uhng zan vyen",
        spellingFormula: "H - ƯƠ - NG - Sắc ➔ HƯỚNG / D - Â - N - Ngã ➔ DẪN",
        meaningEn: "Tour guide",
        emoji: "🗣️",
        exampleVi: "Anh hướng dẫn viên thuyết minh lịch sử rất cuốn hút.",
        exampleEn: "The tour guide explained the history very engagingly.",
        southernUsageTip: "Người đồng hành thuyết minh văn hóa địa phương."
      },
      {
        id: "5-10",
        termVi: "Đặt tour du lịch",
        phonetic: "Dat toor zoo lik",
        spellingFormula: "Đ - Ă - T - Nặng ➔ ĐẶT / T - O - U - R",
        meaningEn: "Book a travel tour",
        emoji: "⛵",
        exampleVi: "Chúng tôi đã đặt tour tham quan sông Mekong bằng thuyền.",
        exampleEn: "We booked a boat tour exploring the Mekong River.",
        southernUsageTip: "Đăng ký các chương trình tham quan trọn gói."
      },
      {
        id: "5-11",
        termVi: "Bản đồ du lịch",
        phonetic: "Ban doh zoo lik",
        spellingFormula: "B - A - N - Hỏi ➔ BẢN / Đ - Ô - Huyền ➔ ĐỒ",
        meaningEn: "Tourist guidebook & map",
        emoji: "🗺️",
        exampleVi: "Khách sạn tặng miễn phí bản đồ du lịch thành phố cho khách.",
        exampleEn: "The hotel offers complimentary city tourist maps to guests.",
        southernUsageTip: "Tài liệu hữu ích để tự khám phá các con phố."
      },
      {
        id: "5-12",
        termVi: "Lễ tân phục vụ",
        phonetic: "Leh tan fook voo",
        spellingFormula: "L - Ê - Ngã ➔ LỄ / T - Â - N ➔ TÂN",
        meaningEn: "Hotel reception desk",
        emoji: "🛎️",
        exampleVi: "Quầy lễ tân phục vụ khách hai mươi bốn trên hai mươi bốn giờ.",
        exampleEn: "The hotel reception desk operates twenty-four seven.",
        southernUsageTip: "Nơi tiếp nhận mọi yêu cầu hỗ trợ khi lưu trú."
      }
    ],
    quiz: [
      {
        id: "q5-1",
        type: "picture_word",
        pictureEmoji: "🧳",
        promptVi: "Nhìn hình chiếc vali du lịch dưới đây và chọn từ vựng tương ứng:",
        promptEn: "Look at the luggage suitcase image below and select the corresponding term:",
        options: ["Hành lý du lịch", "Thùng rác", "Tủ lạnh gia đình", "Bàn ăn"],
        optionsEn: ["Travel luggage / baggage", "Trash bin", "Home refrigerator", "Dining table"],
        correctAnswer: "Hành lý du lịch",
        explanationVi: "Hình chiếc vali là biểu tượng của 'Hành lý du lịch' cho các chuyến đi khám phá.",
        explanationEn: "The suitcase icon represents travel luggage."
      },
      {
        id: "q5-2",
        type: "multiple_choice",
        promptVi: "Bài toán tiền vé tham quan: Giá vé người lớn là 60.000đ, vé trẻ em là 20.000đ. Gia đình bạn có 2 người lớn và 1 trẻ em. Tổng số tiền vé phải trả là bao nhiêu?",
        promptEn: "Ticket calculation: Adult ticket is 60k, child is 20k. For 2 adults and 1 child, what is the total price?",
        options: ["140.000 đồng", "120.000 đồng", "160.000 đồng", "100.000 đồng"],
        optionsEn: ["140,000 VND", "120,000 VND", "160,000 VND", "100,000 VND"],
        correctAnswer: "140.000 đồng",
        explanationVi: "(2 x 60.000đ) + (1 x 20.000đ) = 120.000đ + 20.000đ = 140.000 đồng.",
        explanationEn: "(2 x 60k) + (1 x 20k) = 140,000 VND total."
      },
      {
        id: "q5-3",
        type: "multiple_choice",
        promptVi: "Khi muốn nhờ một người đang đứng gần đó chụp giúp bạn một tấm hình kỷ niệm trước di tích, bạn nói câu nào lịch sự nhất?",
        promptEn: "When asking a nearby person to take a souvenir photo for you, which phrase is most polite?",
        options: [
          "Anh/Chị ơi, làm ơn chụp giùm tôi một tấm hình được không ạ?",
          "Cầm máy ảnh lên chụp ngay cho tôi!",
          "Nè, đứng đó làm gì, chụp ảnh đi!",
          "Chụp nhanh lên tôi đang vội!"
        ],
        optionsEn: [
          "Could you please take a photo for me, sir/ma'am?",
          "Hold the camera and shoot now! (Rude)",
          "Hey, shoot a photo! (Rude)",
          "Shoot fast, I'm in a rush!"
        ],
        correctAnswer: "Anh/Chị ơi, làm ơn chụp giùm tôi một tấm hình được không ạ?",
        explanationVi: "'Anh/Chị ơi, làm ơn chụp giùm tôi một tấm hình được không ạ?' là câu nhờ vả nhã nhặn, lịch thiệp và luôn được vui vẻ giúp đỡ.",
        explanationEn: "'Làm ơn chụp giùm tôi một tấm hình được không ạ?' is the universally courteous way to request a photo."
      },
      {
        id: "q5-4",
        type: "cultural_riddle",
        promptVi: "Đố vui quy tắc văn hóa: Khi vào tham quan các địa điểm tôn nghiêm như đền chùa, lăng tẩm tại Việt Nam, quy tắc lịch sự nào bạn cần tuân thủ?",
        promptEn: "Cultural riddle: When visiting sacred temples or shrines in Vietnam, which etiquette rule must you observe?",
        options: [
          "Mặc trang phục kín đáo qua đầu gối, cởi nón và nói năng nhẹ nhàng",
          "Mặc đồ bơi và đi dép lê gây ồn ào",
          "Chạy nhảy và hét to trong gian thờ",
          "Tự ý leo trèo lên các tượng đài"
        ],
        optionsEn: [
          "Wear modest clothing covering knees, remove hats, and speak softly",
          "Wear swimwear and noisy sandals",
          "Run and scream inside shrines",
          "Climb on monuments"
        ],
        correctAnswer: "Mặc trang phục kín đáo qua đầu gối, cởi nón và nói năng nhẹ nhàng",
        explanationVi: "Trang phục kín đáo, cởi nón và giữ trật tự thể hiện lòng tôn kính sâu sắc đối với các không gian tín ngưỡng thiêng liêng.",
        explanationEn: "Modest attire and respectful demeanor are vital when visiting spiritual sites in Vietnam."
      },
      {
        id: "q5-5",
        type: "picture_word",
        pictureEmoji: "📸",
        promptVi: "Nhìn hình chiếc máy ảnh dưới đây và chọn hành động lưu giữ kỷ niệm trong chuyến du lịch:",
        promptEn: "Look at the camera image below and choose the action of preserving travel memories:",
        options: ["Chụp hình kỷ niệm", "Hủy bỏ chuyến đi", "Làm mất đồ đạc", "Trả phòng sớm"],
        optionsEn: ["Take souvenir photos", "Cancel trip", "Lose belongings", "Early check-out"],
        correctAnswer: "Chụp hình kỷ niệm",
        explanationVi: "Hình chiếc máy ảnh biểu tượng cho hành động 'Chụp hình kỷ niệm' để ghi lại những khoảnh khắc đẹp.",
        explanationEn: "The camera icon symbolizes taking souvenir photos to capture wonderful moments."
      }
    ],
    gameTitleVi: "Thử Thách Du Lịch & Khách Sạn",
    gameTitleEn: "Travel & Hospitality Challenge",
    gameDescriptionVi: "Trải nghiệm các tình huống giao tiếp du lịch thực tế!",
    gameDescriptionEn: "Experience practical travel and hotel communication!",
    gameItems: [],
    homework: [],
    teacherSlides: []
  },

  // ==========================================
  // LESSON 6: THUÊ NHÀ, TIỆN ÍCH & ĐỜI SỐNG HÀNG NGÀY
  // ==========================================
  {
    id: 6,
    titleVi: "Bài 6: Thuê Nhà, Tiện Ích & Đời Sống",
    titleEn: "Lesson 6: Renting, Utilities & Daily Living",
    subtitleVi: "Hợp đồng thuê, tiền cọc, tiền điện nước và tiện ích căn hộ",
    subtitleEn: "Rental lease, deposit, utility bills, and apartment amenities",
    icon: "🏠",
    themeColor: "emerald",
    stampTitleVi: "An Cư Đời Sống",
    stampTitleEn: "Living in Vietnam Stamp",
    landmarkVi: "Khu Đô Thị Thảo Điền (TP. Thủ Đức)",
    landmarkEn: "Thao Dien Residential District",
    culturalTraitVi: "Văn hoá láng giềng thân thiện và thói quen chào hỏi bảo vệ",
    culturalTraitEn: "Friendly neighborhood relations and greeting security guards",
    landmarkStoryVi: "Thảo Điền là nơi sinh sống của đông đảo cộng đồng chuyên gia và bạn bè quốc tế tại TP.HCM với nhiều khu căn hộ hiện đại ven sông Sài Gòn.",
    landmarkStoryEn: "Thao Dien is a premier international residential hub along the Saigon River, home to thousands of expats and professionals.",
    culturalStory: {
      titleVi: "Văn Hóa Láng Giềng Thân Thiện & Bác Bảo Vệ Tận Tụy",
      titleEn: "Friendly Neighbor Culture & The Dedicated Security Guard",
      habitVi: "Thói quen tươi cười chào hỏi bác bảo vệ tòa nhà và san sẻ đồ ăn ngon với hàng xóm",
      habitEn: "Habit of greeting building security guards and sharing treats with neighbors",
      storyVi: "Khi chuyển đến sống tại một chung cư hay khu phố ở Việt Nam, bạn sẽ nhanh chóng cảm nhận được sự ấm áp từ những người hàng xóm. Người Việt có câu tục ngữ 'Bán anh em xa, mua láng giềng gần' đề cao tình đoàn kết cộng đồng. Bác bảo vệ tòa nhà không chỉ giữ gìn an ninh mà còn luôn nhiệt tình nhận bưu phẩm bưu kiện giùm khi bạn vắng nhà. Mỗi lần đi làm về, một lời chào 'Dạ con chào chú bảo vệ' sẽ khiến mọi người luôn quý mến bạn.",
      storyEn: "When moving into an apartment in Vietnam, you will quickly feel the community warmth. The proverb 'Better a neighbor nearby than a relative far away' reflects this bond. Building security guards (bác bảo vệ) not only safeguard the premises but also generously receive deliveries on your behalf. A polite greeting 'Con chào chú!' whenever coming home builds wonderful rapport.",
      politeTipVi: "Mẹo thuê nhà: Luôn kiểm tra kỹ số công tơ điện và chỉ số đồng hồ nước cùng chủ nhà vào ngày đầu tiên nhận bàn giao chìa khóa phòng nhé!",
      politeTipEn: "Renting tip: Always check the electricity and water meters together with your landlord on your official move-in day!",
      emoji: "🔑",
      landmarkVi: "Chung Cư Thảo Điền"
    },
    flashcards: [
      {
        id: "6-1",
        termVi: "Giá thuê một tháng",
        phonetic: "Zah thoo-eh moht tang",
        spellingFormula: "GI - A - Sắc ➔ GIÁ / TH - U - Ê ➔ THUÊ",
        meaningEn: "Monthly rental price",
        emoji: "💵",
        exampleVi: "Căn hộ này giá thuê một tháng là tám triệu đồng.",
        exampleEn: "This apartment has a monthly rent of 8 million dong.",
        southernUsageTip: "Chi phí tiền nhà định kỳ mỗi tháng."
      },
      {
        id: "6-2",
        termVi: "Tiền cọc / Đặt cọc",
        phonetic: "Tyen cawc / Dat cawc",
        spellingFormula: "T - I - Ê - N - Huyền ➔ TIỀN / C - O - C - Nặng ➔ CỌC",
        meaningEn: "Security deposit",
        emoji: "🛡️",
        exampleVi: "Chủ nhà yêu cầu đặt cọc trước hai tháng tiền phòng.",
        exampleEn: "The landlord requires a two-month security deposit upfront.",
        southernUsageTip: "Khoản tiền bảo đảm hợp đồng được hoàn lại khi hết hạn thuê."
      },
      {
        id: "6-3",
        termVi: "Hợp đồng thuê nhà",
        phonetic: "Huhp dohng thoo-eh nyah",
        spellingFormula: "H - Ơ - P - Nặng ➔ HỢP / Đ - Ô - NG - Huyền ➔ ĐỒNG",
        meaningEn: "House / apartment lease agreement",
        emoji: "📑",
        exampleVi: "Hai bên cùng ký vào bản hợp đồng thuê nhà một năm.",
        exampleEn: "Both parties sign the one-year apartment lease agreement.",
        southernUsageTip: "Văn bản pháp lý ghi rõ quyền lợi và nghĩa vụ hai bên."
      },
      {
        id: "6-4",
        termVi: "Tiền điện theo số",
        phonetic: "Tyen dyen tay-oh soh",
        spellingFormula: "Đ - I - Ê - N - Nặng ➔ ĐIỆN / S - Ô - Sắc ➔ SỐ",
        meaningEn: "Electricity bill per kWh unit",
        emoji: "⚡",
        exampleVi: "Tiền điện tính bốn ngàn đồng một số theo công tơ riêng.",
        exampleEn: "Electricity is four thousand dong per unit on an individual meter.",
        southernUsageTip: "'Số điện' = 1 kilowatt-giờ (kWh)."
      },
      {
        id: "6-5",
        termVi: "Tiền nước hàng tháng",
        phonetic: "Tyen noo-uhk hahng tang",
        spellingFormula: "N - ƯƠ - C - Sắc ➔ NƯỚC / H - A - NG - Huyền ➔ HÀNG",
        meaningEn: "Monthly water utility fee",
        emoji: "🚰",
        exampleVi: "Tiền nước tính một trăm ngàn một người mỗi tháng.",
        exampleEn: "Water fee is 100,000đ per person per month.",
        southernUsageTip: "Có thể tính theo đầu người hoặc theo mét khối (m3)."
      },
      {
        id: "6-6",
        termVi: "Máy lạnh / Điều hòa",
        phonetic: "Mye lan / Dyew hwah",
        spellingFormula: "M - A - Y - Sắc ➔ MÁY / L - A - NH - Nặng ➔ LẠNH",
        meaningEn: "Air conditioner",
        emoji: "❄️",
        exampleVi: "Phòng ngủ có sẵn máy lạnh tiết kiệm điện hai chiều.",
        exampleEn: "The bedroom comes equipped with an energy-saving AC.",
        southernUsageTip: "Miền Nam luôn gọi là 'máy lạnh', miền Bắc gọi là 'điều hòa'."
      },
      {
        id: "6-7",
        termVi: "Máy giặt chung",
        phonetic: "Mye zat choong",
        spellingFormula: "M - A - Y - Sắc ➔ MÁY / GI - Ă - T - Nặng ➔ GIẶT",
        meaningEn: "Washing machine (shared)",
        emoji: "🧺",
        exampleVi: "Khu vực sân thượng có hai máy giặt chung cho các phòng.",
        exampleEn: "The rooftop area has two shared washing machines for all rooms.",
        southernUsageTip: "Thiết bị giặt giũ quần áo trong khu căn hộ."
      },
      {
        id: "6-8",
        termVi: "Bác bảo vệ",
        phonetic: "Bac bow veh",
        spellingFormula: "B - A - O - Hỏi ➔ BẢO / V - Ê - Nặng ➔ VỆ",
        meaningEn: "Building security guard",
        emoji: "👮‍♂️",
        exampleVi: "Bác bảo vệ nhận bưu phẩm giùm em lúc sáng sớm.",
        exampleEn: "The security guard received the package for me this morning.",
        southernUsageTip: "Người giữ xe và kiểm soát trật tự an ninh tòa nhà."
      },
      {
        id: "6-9",
        termVi: "Phí quản lý",
        phonetic: "Fee kwan lee",
        spellingFormula: "PH - I - Sắc ➔ PHÍ / Q - U - A - N - Hỏi ➔ QUẢN",
        meaningEn: "Building management fee",
        emoji: "🏢",
        exampleVi: "Phí quản lý chung cư bao gồm vệ sinh và hồ bơi.",
        exampleEn: "The management fee includes cleaning and swimming pool access.",
        southernUsageTip: "Chi phí bảo trì vận hành khu chung cư."
      },
      {
        id: "6-10",
        termVi: "Nội thất đầy đủ",
        phonetic: "Noy tat dye doo",
        spellingFormula: "N - Ô - I - Nặng ➔ NỘI / TH - Â - T - Sắc ➔ THẤT",
        meaningEn: "Fully furnished",
        emoji: "🛋️",
        exampleVi: "Căn hộ này đã có đầy đủ nội thất tivi, tủ lạnh, giường nệm.",
        exampleEn: "This apartment is fully furnished with TV, fridge, and bed.",
        southernUsageTip: "Khách thuê chỉ cần xách vali vào ở ngay."
      },
      {
        id: "6-11",
        termVi: "Bãi giữ xe",
        phonetic: "Bye ziu seh",
        spellingFormula: "B - A - I - Ngã ➔ BÃI / GI - Ư - Ngã ➔ GIỮ",
        meaningEn: "Parking basement / Parking lot",
        emoji: "🅿️",
        exampleVi: "Dưới tầng hầm có bãi giữ xe máy an toàn hai mươi bốn giờ.",
        exampleEn: "The basement has a 24-hour secured motorbike parking lot.",
        southernUsageTip: "Nơi để xe máy hoặc ô tô trong khu nhà ở."
      },
      {
        id: "6-12",
        termVi: "Hàng xóm thân thiện",
        phonetic: "Hahng sawm tan tyen",
        spellingFormula: "H - A - NG - Huyền ➔ HÀNG / X - O - M - Sắc ➔ XÓM",
        meaningEn: "Friendly neighbors",
        emoji: "🤝",
        exampleVi: "Những người hàng xóm ở đây rất tốt bụng và sẵn lòng giúp đỡ.",
        exampleEn: "The neighbors here are very kind and always willing to help.",
        southernUsageTip: "Mối quan hệ cộng đồng quanh khu vực sinh sống."
      }
    ],
    quiz: [
      {
        id: "q6-1",
        type: "picture_word",
        pictureEmoji: "🔑",
        promptVi: "Nhìn hình chiếc chìa khóa dưới đây và chọn hành động khi thuê phòng ở mới:",
        promptEn: "Look at the key image below and choose the action when renting a new room:",
        options: ["Nhận chìa khóa & Ký hợp đồng", "Bán nhà gấp", "Đập phá phòng", "Chuyển đi ngay"],
        optionsEn: ["Receive keys & Sign lease", "Urgent house sale", "Vandalize room", "Move out immediately"],
        correctAnswer: "Nhận chìa khóa & Ký hợp đồng",
        explanationVi: "Hình chiếc chìa khóa biểu tượng cho việc 'Nhận chìa khóa & Ký hợp đồng' để bắt đầu dọn vào ở.",
        explanationEn: "The key icon symbolizes receiving keys and signing the lease."
      },
      {
        id: "q6-2",
        type: "multiple_choice",
        promptVi: "Bài toán tiền điện nước: Tháng này bạn dùng hết 100 số điện (4.000đ/số) và tiền nước là 100.000đ. Tổng tiền tiện ích phải trả là bao nhiêu?",
        promptEn: "Utility calculation: You used 100 kWh of electricity (4k/kWh) and water is 100k. What is the total utility bill?",
        options: ["500.000 đồng (Nửa triệu)", "400.000 đồng", "600.000 đồng", "300.000 đồng"],
        optionsEn: ["500,000 VND (Half a million)", "400,000 VND", "600,000 VND", "300,000 VND"],
        correctAnswer: "500.000 đồng (Nửa triệu)",
        explanationVi: "(100 số x 4.000đ) + 100.000đ nước = 400.000đ + 100.000đ = 500.000 đồng.",
        explanationEn: "(100 x 4k) + 100k = 400k + 100k = 500,000 VND total."
      },
      {
        id: "q6-3",
        type: "multiple_choice",
        promptVi: "Người miền Nam gọi thiết bị làm mát không khí trong phòng ngủ là gì?",
        promptEn: "What do people in Southern Vietnam call the indoor room-cooling air conditioning device?",
        options: ["Máy lạnh", "Điều hòa không khí", "Quạt trần", "Tủ đông"],
        optionsEn: ["Máy lạnh (Air conditioner)", "Điều hòa", "Ceiling fan", "Freezer"],
        correctAnswer: "Máy lạnh",
        explanationVi: "Tại miền Nam, thiết bị làm mát phòng luôn được người dân gọi quen thuộc là 'Máy lạnh'.",
        explanationEn: "In Southern Vietnam, air conditioners are universally called 'Máy lạnh'."
      },
      {
        id: "q6-4",
        type: "cultural_riddle",
        promptVi: "Đố vui nếp sống: Khi sống tại một khu chung cư hay hẻm phố ở Việt Nam, hành động nào giúp bạn dễ dàng kết thân với mọi người nhất?",
        promptEn: "Cultural riddle: When living in a Vietnamese apartment building or alley, which habit best fosters good relationships?",
        options: [
          "Tươi cười chào hỏi bác bảo vệ và hàng xóm khi gặp nhau ở thang máy / hành lang",
          "Mở nhạc thật to lúc nửa đêm",
          "Để rác bừa bãi trước cửa nhà người khác",
          "Không bao giờ nhìn mặt ai"
        ],
        optionsEn: [
          "Smiling and greeting security guards and neighbors in elevators/corridors",
          "Play loud music at midnight (Rude)",
          "Litter outside neighbor's door",
          "Never look at anyone"
        ],
        correctAnswer: "Tươi cười chào hỏi bác bảo vệ và hàng xóm khi gặp nhau ở thang máy / hành lang",
        explanationVi: "Nụ cười và lời chào thân mật tạo sự gắn kết cộng đồng và giúp bạn luôn được yêu mến, giúp đỡ khi cần.",
        explanationEn: "A friendly greeting creates community harmony and ensures neighbors are eager to assist you."
      },
      {
        id: "q6-5",
        type: "picture_word",
        pictureEmoji: "❄️",
        promptVi: "Nhìn hình biểu tượng bông tuyết mát lạnh dưới đây và chọn thiết bị làm mát phòng phổ biến:",
        promptEn: "Look at the cold snowflake icon below and choose the common room-cooling appliance:",
        options: ["Máy lạnh", "Bếp ga", "Lò vi sóng", "Bình đun siêu tốc"],
        optionsEn: ["Air conditioner (Máy lạnh)", "Gas stove", "Microwave", "Electric kettle"],
        correctAnswer: "Máy lạnh",
        explanationVi: "Biểu tượng bông tuyết mát rượi tượng trưng cho 'Máy lạnh' trong phòng ở.",
        explanationEn: "The snowflake icon represents the air conditioner."
      }
    ],
    gameTitleVi: "Thử Thách Đời Sống & Thuê Nhà",
    gameTitleEn: "Living & Renting Challenge",
    gameDescriptionVi: "Trải nghiệm các tình huống thuê nhà và thanh toán sinh hoạt phí!",
    gameDescriptionEn: "Experience renting situations and utility bill payments!",
    gameItems: [],
    homework: [],
    teacherSlides: []
  },

  // ==========================================
  // LESSON 7: SỨC KHỎE, KHÁM BỆNH & HIỆU THUỐC
  // ==========================================
  {
    id: 7,
    titleVi: "Bài 7: Sức Khỏe, Khám Bệnh & Hiệu Thuốc",
    titleEn: "Lesson 7: Health, Symptoms & Pharmacy",
    subtitleVi: "Cách mô tả triệu chứng bệnh, mua thuốc tây và chăm sóc sức khỏe",
    subtitleEn: "Describing symptoms, buying medicine at pharmacies, and wellness",
    icon: "💊",
    themeColor: "rose",
    stampTitleVi: "Chăm Sóc Sức Khỏe",
    stampTitleEn: "Healthcare & Wellness Stamp",
    landmarkVi: "Bệnh Viện Chợ Rẫy & Phố Y Dược",
    landmarkEn: "Cho Ray Hospital & Medical Street",
    culturalTraitVi: "Văn hoá mua thuốc tiện lợi tại tiệm thuốc tây và thói quen giải cảm bằng cháo nóng",
    culturalTraitEn: "Convenient local pharmacy access and herbal hot porridge remedies",
    landmarkStoryVi: "Khu vực đường Hải Thượng Lãn Ông và hệ thống y tế TP.HCM kết hợp hài hòa giữa y học hiện đại và dược liệu y học cổ truyền trăm năm.",
    landmarkStoryEn: "Hai Thuong Lan Ong Street is famous for centuries-old traditional herbal apothecaries alongside modern medical centers.",
    culturalStory: {
      titleVi: "Tiệm Thuốc Tây Đầu Phố & Nồi Cháo Hành Giải Cảm",
      titleEn: "Neighborhood Pharmacies & Hot Onion Porridge Remedy",
      habitVi: "Thói quen ra tiệm thuốc tây mô tả triệu chứng mua theo liều và ăn cháo tía tô giải cảm",
      habitEn: "Habit of consulting local pharmacists for multi-day doses and eating hot herbal porridge",
      storyVi: "Tại Việt Nam, các tiệm thuốc tây có mặt ở hầu khắp mọi góc phố. Khi bị cảm cúm, sốt nhẹ hoặc nhức đầu, người dân thường ghé tiệm thuốc gần nhà, mô tả triệu chứng và nhờ dược sĩ lấy 'hai ngày thuốc' hoặc 'ba ngày thuốc'. Thuốc được chia thành từng gói nhỏ tiện lợi uống sau bữa ăn. Ngoài ra, người Việt còn có thói quen dân gian rất hiệu quả là nấu một tô cháo hành nóng rắc nhiều lá tía tô và tiêu cay để xông mồ hôi giải cảm tự nhiên.",
      storyEn: "In Vietnam, pharmacies (tiệm thuốc tây) are conveniently located in every neighborhood. For minor colds or fevers, locals visit their neighborhood pharmacist, describe their symptoms, and get packaged daily doses. Alongside medicine, a beloved home remedy is eating a hot bowl of rice porridge with chopped scallions, perilla leaves, and black pepper to sweat out the fever naturally.",
      politeTipVi: "Mẹo y tế: Khi mua thuốc tại Việt Nam, hãy luôn nhớ thông báo rõ cho dược sĩ nếu bạn có tiền sử dị ứng với bất kỳ loại kháng sinh hay paracetamol nào nhé!",
      politeTipEn: "Medical tip: Always inform the pharmacist clearly if you have any history of drug allergies to antibiotics or painkillers!",
      emoji: "🩹",
      landmarkVi: "Phố Thuốc Đông Y Quận 5"
    },
    flashcards: [
      {
        id: "7-1",
        termVi: "Hiệu thuốc / Tiệm thuốc tây",
        phonetic: "Hyew thoo-uk / Tyem thoo-uk tye",
        spellingFormula: "TH - U - Ô - C - Sắc ➔ THUỐC / T - Â - Y ➔ TÂY",
        meaningEn: "Pharmacy / Drugstore",
        emoji: "🏥",
        exampleVi: "Đầu con hẻm này có một tiệm thuốc tây mở cửa cả ngày.",
        exampleEn: "At the beginning of this alley is a pharmacy open all day.",
        southernUsageTip: "Nơi mua thuốc điều trị và dụng cụ y tế cơ bản."
      },
      {
        id: "7-2",
        termVi: "Đau đầu / Nhức đầu",
        phonetic: "Dow dow / Nyooc dow",
        spellingFormula: "Đ - A - U ➔ ĐAU / Đ - Â - U - Huyền ➔ ĐẦU",
        meaningEn: "Headache",
        emoji: "🤕",
        exampleVi: "Hôm nay làm việc nhiều tôi thấy hơi đau đầu.",
        exampleEn: "Working hard today gives me a slight headache.",
        southernUsageTip: "Miền Nam dùng cả 'đau đầu' và 'nhức đầu'."
      },
      {
        id: "7-3",
        termVi: "Đau bụng",
        phonetic: "Dow boong",
        spellingFormula: "Đ - A - U ➔ ĐAU / B - U - NG - Nặng ➔ BỤNG",
        meaningEn: "Stomachache / Belly pain",
        emoji: "😣",
        exampleVi: "Do ăn đồ lạ nên bụng tôi hơi khó chịu và đau bụng.",
        exampleEn: "Eating unfamiliar food made my stomach ache.",
        southernUsageTip: "Mô tả triệu chứng rối loạn tiêu hóa."
      },
      {
        id: "7-4",
        termVi: "Bị sốt / Cảm cúm",
        phonetic: "Bee soht / Cam coom",
        spellingFormula: "S - Ô - T - Sắc ➔ SỐT / C - Ú - M ➔ CÚM",
        meaningEn: "Fever / Flu / Cold",
        emoji: "🤒",
        exampleVi: "Em bé bị sốt nhẹ ba mươi tám độ.",
        exampleEn: "The baby has a mild fever of 38 degrees Celsius.",
        southernUsageTip: "Triệu chứng thân nhiệt tăng cao khi bị ốm."
      },
      {
        id: "7-5",
        termVi: "Thuốc hạ sốt",
        phonetic: "Thoo-uk hah soht",
        spellingFormula: "H - A - Nặng ➔ HẠ / S - Ô - T - Sắc ➔ SỐT",
        meaningEn: "Fever reducer (Paracetamol)",
        emoji: "💊",
        exampleVi: "Uống một viên thuốc hạ sốt sau khi ăn no ba mươi phút.",
        exampleEn: "Take one fever-reducing pill thirty minutes after eating.",
        southernUsageTip: "Thuốc phổ biến nhất để hạ nhiệt cơ thể."
      },
      {
        id: "7-6",
        termVi: "Dị ứng thức ăn",
        phonetic: "Zee oong thoo-uk an",
        spellingFormula: "D - I - Nặng ➔ DỊ / Ư - NG - Sắc ➔ ỨNG",
        meaningEn: "Food allergy / Allergic reaction",
        emoji: "⚠️",
        exampleVi: "Tôi bị dị ứng với hải sản tôm cua và đậu phộng.",
        exampleEn: "I am allergic to seafood like shrimp, crab, and peanuts.",
        southernUsageTip: "Thông báo quan trọng cho quán ăn và bác sĩ."
      },
      {
        id: "7-7",
        termVi: "Uống thuốc sau khi ăn",
        phonetic: "Oo-uhng thoo-uk sow kee an",
        spellingFormula: "U - Ô - NG - Sắc ➔ UỐNG / Ă - N ➔ ĂN",
        meaningEn: "Take medicine after meals",
        emoji: "🍱",
        exampleVi: "Dược sĩ dặn uống thuốc này sau khi ăn no để không đau bao tử.",
        exampleEn: "The pharmacist instructed to take this medicine after meals.",
        southernUsageTip: "Quy tắc uống thuốc bảo vệ dạ dày."
      },
      {
        id: "7-8",
        termVi: "Nhiệt kế đo sốt",
        phonetic: "Nyet keh daw soht",
        spellingFormula: "NH - I - Ê - T - Nặng ➔ NHIỆT / K - Ê - Sắc ➔ KẾ",
        meaningEn: "Thermometer",
        emoji: "🌡️",
        exampleVi: "Dùng nhiệt kế đo nhiệt độ dưới nách trong ba phút.",
        exampleEn: "Use a thermometer to measure body temperature.",
        southernUsageTip: "Dụng cụ y tế kiểm tra độ sốt."
      },
      {
        id: "7-9",
        termVi: "Khám bác sĩ",
        phonetic: "Kham bac see",
        spellingFormula: "KH - A - M - Sắc ➔ KHÁM / B - A - C - Sắc ➔ BÁC",
        meaningEn: "See a doctor / Medical consultation",
        emoji: "👨‍⚕️",
        exampleVi: "Nếu sốt cao quá hai ngày, bạn nên đi bệnh viện khám bác sĩ.",
        exampleEn: "If the fever persists over two days, you should see a doctor.",
        southernUsageTip: "Đến cơ sở y tế khi bệnh nặng."
      },
      {
        id: "7-10",
        termVi: "Bảo hiểm y tế",
        phonetic: "Bow hyem ee teh",
        spellingFormula: "B - A - O - Hỏi ➔ BẢO / H - I - Ê - M - Hỏi ➔ HIỂM",
        meaningEn: "Health / Medical insurance",
        emoji: "🪪",
        exampleVi: "Bệnh viện này có thanh toán bảo hiểm y tế quốc tế không?",
        exampleEn: "Does this hospital accept international medical insurance?",
        southernUsageTip: "Thẻ chi trả viện phí khi khám chữa bệnh."
      },
      {
        id: "7-11",
        termVi: "Nghỉ ngơi tĩnh dưỡng",
        phonetic: "Ngee nguh-ee tin zoo-uhng",
        spellingFormula: "NGH - I - Hỏi ➔ NGHỈ / NG - Ơ - I ➔ NGƠI",
        meaningEn: "Rest and recover",
        emoji: "🛌",
        exampleVi: "Bác sĩ khuyên bệnh nhân nên ngủ đủ giấc và nghỉ ngơi.",
        exampleEn: "The doctor advised the patient to get plenty of sleep and rest.",
        southernUsageTip: "Chế độ phục hồi sức khỏe."
      },
      {
        id: "7-12",
        termVi: "Uống nhiều nước ấm",
        phonetic: "Oo-uhng nyew noo-uhk am",
        spellingFormula: "Ư - Ơ - C - Sắc ➔ NƯỚC / Â - M - Sắc ➔ ẤM",
        meaningEn: "Drink lots of warm water",
        emoji: "🍵",
        exampleVi: "Khi bị cảm lạnh, nhớ uống nhiều nước ấm để mau khỏi bệnh.",
        exampleEn: "When catching a cold, remember to drink lots of warm water.",
        southernUsageTip: "Lời khuyên sức khỏe hàng đầu của người Việt."
      }
    ],
    quiz: [
      {
        id: "q7-1",
        type: "picture_word",
        pictureEmoji: "💊",
        promptVi: "Nhìn hình viên thuốc dưới đây và chọn từ vựng dùng để hạ nhiệt khi cơ thể bị sốt cao:",
        promptEn: "Look at the pill image below and choose the medicine term used to reduce body fever:",
        options: ["Thuốc hạ sốt", "Nước ngọt có ga", "Kẹo cao su", "Kem đánh răng"],
        optionsEn: ["Fever reducer pill", "Soda drink", "Chewing gum", "Toothpaste"],
        correctAnswer: "Thuốc hạ sốt",
        explanationVi: "Hình viên thuốc đại diện cho 'Thuốc hạ sốt' (như Paracetamol) giúp hạ thân nhiệt an toàn.",
        explanationEn: "The capsule icon represents fever-reducing medicine."
      },
      {
        id: "q7-2",
        type: "multiple_choice",
        promptVi: "Bạn bị dị ứng nặng với hải sản tôm cua. Trước khi gọi món ăn tại nhà hàng, câu nào quan trọng nhất bạn cần nói?",
        promptEn: "You have a severe seafood allergy. What is the most crucial sentence to say before ordering?",
        options: [
          "Tôi bị dị ứng nặng với tôm cua, món này có tôm cua không?",
          "Cho tôi thật nhiều hải sản cay nồng!",
          "Món nào có tôm tôi càng thích ăn!",
          "Không cần kiểm tra nguyên liệu đâu!"
        ],
        optionsEn: [
          "I am severely allergic to seafood, does this dish contain shrimp/crab?",
          "Give me lots of spicy seafood!",
          "I love eating whatever has shrimp!",
          "No need to check ingredients!"
        ],
        correctAnswer: "Tôi bị dị ứng nặng với tôm cua, món này có tôm cua không?",
        explanationVi: "Thông báo rõ tiền sử dị ứng là nguyên tắc an toàn hàng đầu khi ăn uống tại nước ngoài.",
        explanationEn: "Clear allergy disclosure is vital for food safety when dining abroad."
      },
      {
        id: "q7-3",
        type: "multiple_choice",
        promptVi: "Dược sĩ dặn: 'Uống thuốc này sau khi ăn no 30 phút'. Bạn nên thực hiện thế nào?",
        promptEn: "The pharmacist advises: 'Take this medicine 30 minutes after a full meal'. How should you take it?",
        options: [
          "Ăn một bữa cơm no, đợi 30 phút sau rồi mới uống thuốc",
          "Uống thuốc khi bụng đang đói cồn cào",
          "Uống thuốc trước bữa ăn một tiếng",
          "Không cần ăn cơm cũng uống được"
        ],
        optionsEn: [
          "Eat a full meal, wait 30 minutes, then take the pill",
          "Take the pill on an empty starving stomach",
          "Take it an hour before eating",
          "Take without eating anything"
        ],
        correctAnswer: "Ăn một bữa cơm no, đợi 30 phút sau rồi mới uống thuốc",
        explanationVi: "Uống thuốc sau khi ăn no giúp tráng một lớp thức ăn bảo vệ niêm mạc dạ dày khỏi bị cồn cào.",
        explanationEn: "Taking medicine after eating protects the stomach lining from irritation."
      },
      {
        id: "q7-4",
        type: "cultural_riddle",
        promptVi: "Đố vui mẹo dân gian: Người Việt Nam thường nấu món ăn nóng hổi nào có nhiều hành và lá tía tô để giúp người bệnh xông mồ hôi giải cảm?",
        promptEn: "Folk remedy riddle: Which hot comfort food garnished with scallions and perilla leaves is used to sweat out a fever in Vietnam?",
        options: [
          "Tô cháo hành tía tô nóng hổi rắc tiêu",
          "Kem lạnh socola",
          "Nước đá bào siro",
          "Gỏi cuốn nguội"
        ],
        optionsEn: [
          "Hot rice porridge with scallions and perilla leaves",
          "Cold chocolate ice cream",
          "Shaved ice with syrup",
          "Cold spring rolls"
        ],
        correctAnswer: "Tô cháo hành tía tô nóng hổi rắc tiêu",
        explanationVi: "Tô cháo hành nóng là bài thuốc dân gian nổi tiếng (gợi nhớ truyện Chí Phèo) giúp cơ thể toát mồ hôi giải cảm rất nhanh.",
        explanationEn: "Hot scallion and perilla rice porridge is Vietnam's beloved traditional comfort food to break fevers."
      },
      {
        id: "q7-5",
        type: "picture_word",
        pictureEmoji: "🌡️",
        promptVi: "Nhìn hình dụng cụ y tế dưới đây và chọn tên thiết bị dùng để đo thân nhiệt:",
        promptEn: "Look at the medical tool image below and choose the device for measuring body temperature:",
        options: ["Nhiệt kế đo sốt", "Cân sức khỏe", "Kính cận thị", "Bình xịt khoáng"],
        optionsEn: ["Thermometer", "Weight scale", "Eyeglasses", "Mineral spray"],
        correctAnswer: "Nhiệt kế đo sốt",
        explanationVi: "Hình nhiệt kế là thiết bị y tế dùng để đo nhiệt độ cơ thể khi nghi ngờ bị sốt.",
        explanationEn: "The thermometer measures body temperature."
      }
    ],
    gameTitleVi: "Thử Thách Sức Khỏe & Hiệu Thuốc",
    gameTitleEn: "Health & Pharmacy Game",
    gameDescriptionVi: "Chọn triệu chứng và phương pháp chăm sóc sức khỏe phù hợp!",
    gameDescriptionEn: "Identify symptoms and select appropriate wellness care!",
    gameItems: [],
    homework: [],
    teacherSlides: []
  },

  // ==========================================
  // LESSON 8: THỜI TIẾT, MƯA NGẬP & GIỜ CAO ĐIỂM
  // ==========================================
  {
    id: 8,
    titleVi: "Bài 8: Thời Tiết, Mưa & Giờ Cao Điểm",
    titleEn: "Lesson 8: Weather, Rain & Rush Hour",
    subtitleVi: "Đặc điểm hai mùa mưa nắng, áo mưa cánh dơi và cách né kẹt xe",
    subtitleEn: "Two seasons, sudden rainstorms, poncho raincoats, and traffic tips",
    icon: "🌦️",
    themeColor: "sky",
    stampTitleVi: "Nhịp Sống Đô Thị",
    stampTitleEn: "Urban Rhythm Stamp",
    landmarkVi: "Hầm Thủ Thiêm & Cầu Ba Son",
    landmarkEn: "Thu Thiem Tunnel & Ba Son Bridge",
    culturalTraitVi: "Văn hoá mang áo mưa trong cốp xe và thói quen ngồi cà phê trú mưa",
    culturalTraitEn: "Under-seat raincoat habits and coffee shop rain-sheltering culture",
    landmarkStoryVi: "Hệ thống cầu và hầm vượt sông Sài Gòn kết nối các quận trung tâm, nhộn nhịp dòng xe máy nườm nượp mỗi buổi sáng sớm và chiều tan tầm.",
    landmarkStoryEn: "Bridges and river tunnels connect Saigon's districts, bustling with scooter traffic during morning and evening rush hours.",
    culturalStory: {
      titleVi: "Cơn Mưa Rào Bất Chợt & Thói Quen Cà Phê Trú Mưa",
      titleEn: "Sudden Tropical Showers & The Coffee Rain-Shelter Habit",
      habitVi: "Thói quen luôn thủ sẵn áo mưa trong xe và tấp vào quán cà phê ngắm mưa đợi hết kẹt xe",
      habitEn: "Habit of carrying raincoats under scooter seats and sitting in cafes during downpours",
      storyVi: "Thời tiết miền Nam không có bốn mùa rõ rệt mà chỉ có hai mùa: Mùa mưa (từ tháng 5 đến tháng 11) và Mùa khô (từ tháng 12 đến tháng 4). Cơn mưa rào Sài Gòn nổi tiếng là 'đỏng đảnh': trời đang nắng chói chang bỗng đổ một cơn mưa rào xối xả rồi lại tạnh ráo ngay trong vòng ba mươi phút. Khi mưa trút xuống vào giờ tan tầm (5h - 6h30 chiều), các ngả đường thường bị kẹt xe. Thay vì chen chúc ướt át, người dân thường tấp vào một quán cà phê ven đường trú mưa, nhâm nhi ly trà nóng và ngắm phố xá.",
      storyEn: "Southern Vietnam has two seasons: the rainy season (May-November) and the dry season (December-April). Saigon rainstorms are famously swift: pouring torrentially for 30 minutes before sunshine returns. When heavy rain hits during rush hour (5:00-6:30 PM), traffic slows down. Instead of battling wet gridlock, locals simply pull into a cafe, sip warm tea, and wait out the rain comfortably.",
      politeTipVi: "Mẹo giao thông: Khi đi xe máy dưới trời mưa, hãy bật đèn xe, đi chậm và dừng xe sát lề đường an toàn để mặc áo mưa, tránh dừng đột ngột giữa làn đường nhé!",
      politeTipEn: "Traffic tip: When rain starts, pull over safely onto the curb to put on your raincoat; never stop abruptly in the middle of traffic lanes!",
      emoji: "🌧️",
      landmarkVi: "Cầu Ba Son Quận 1"
    },
    flashcards: [
      {
        id: "8-1",
        termVi: "Mùa mưa và mùa khô",
        phonetic: "Moo-uh moo-uh vah moo-uh khoh",
        spellingFormula: "M - U - A ➔ MÙA / M - Ư - A ➔ MƯA / KH - Ô ➔ KHÔ",
        meaningEn: "Rainy season and dry season",
        emoji: "☀️",
        exampleVi: "Miền Nam chỉ có hai mùa là mùa mưa và mùa khô.",
        exampleEn: "Southern Vietnam only has two distinct seasons: rainy and dry.",
        southernUsageTip: "Đặc điểm khí hậu nhiệt đới gió mùa phương Nam."
      },
      {
        id: "8-2",
        termVi: "Cơn mưa rào",
        phonetic: "Cohn moo-uh zow",
        spellingFormula: "C - Ơ - N ➔ CƠN / R - A - O - Huyền ➔ RÀO",
        meaningEn: "Sudden rain shower / Downpour",
        emoji: "🌧️",
        exampleVi: "Cơn mưa rào chiều nay làm không khí mát mẻ hẳn lên.",
        exampleEn: "This afternoon's rain shower cooled down the air considerably.",
        southernUsageTip: "Mưa lớn nhưng tạnh rất nhanh."
      },
      {
        id: "8-3",
        termVi: "Áo mưa cánh dơi",
        phonetic: "Ow moo-uh canh zoy",
        spellingFormula: "A - O - Sắc ➔ ÁO / M - Ư - A ➔ MƯA / D - Ơ - I ➔ DƠI",
        meaningEn: "Poncho raincoat for motorbikes",
        emoji: "🧥",
        exampleVi: "Tôi luôn để sẵn một bộ áo mưa trong cốp xe máy.",
        exampleEn: "I always keep a poncho raincoat ready under my scooter seat.",
        southernUsageTip: "Trang bị bắt buộc của người đi xe máy tại Việt Nam."
      },
      {
        id: "8-4",
        termVi: "Kẹt xe / Tắc đường",
        phonetic: "Ket seh / Tac doo-uhng",
        spellingFormula: "K - E - T - Nặng ➔ KẸT / X - E ➔ XE",
        meaningEn: "Traffic jam / Gridlock",
        emoji: "🚦",
        exampleVi: "Đường Cộng Hòa chiều nay kẹt xe kéo dài hai cây số.",
        exampleEn: "Cong Hoa Street is experiencing a 2km traffic jam this afternoon.",
        southernUsageTip: "Miền Nam gọi là 'kẹt xe', miền Bắc gọi là 'tắc đường'."
      },
      {
        id: "8-5",
        termVi: "Giờ cao điểm / Giờ tan tầm",
        phonetic: "Zyuh cow dyem / Zyuh tan tam",
        spellingFormula: "G - I - Ờ - Huyền ➔ GIỜ / C - AO ➔ CAO",
        meaningEn: "Rush hour / Peak hours (7-8:30 AM & 5-6:30 PM)",
        emoji: "⏰",
        exampleVi: "Tránh đi qua ngã tư này vào giờ cao điểm tan tầm.",
        exampleEn: "Avoid this intersection during evening rush hours.",
        southernUsageTip: "Thời gian đường xá đông đúc nhất trong ngày."
      },
      {
        id: "8-6",
        termVi: "Ngập nước",
        phonetic: "Nhap noo-uhk",
        spellingFormula: "NG - Â - P - Nặng ➔ NGẬP / N - ƯƠ - C - Sắc ➔ NƯỚC",
        meaningEn: "Street flooding (after heavy rain)",
        emoji: "🌊",
        exampleVi: "Mưa to kết hợp triều cường khiến một số con đường bị ngập nước.",
        exampleEn: "Heavy rain combined with high tide causes localized street flooding.",
        southernUsageTip: "Hiện tượng đường đọng nước khi mưa quá to."
      },
      {
        id: "8-7",
        termVi: "Trời nắng nóng",
        phonetic: "Chuh-ee nang nawng",
        spellingFormula: "TR - Ờ - I ➔ TRỜI / N - Ă - NG - Sắc ➔ NẮNG / N - O - NG - Sắc ➔ NÓNG",
        meaningEn: "Hot sunny weather",
        emoji: "🌞",
        exampleVi: "Trời nắng nóng ba mươi lăm độ, nhớ bôi kem chống nắng nhé.",
        exampleEn: "It is 35 degrees hot today, remember sunscreen.",
        southernUsageTip: "Thời tiết vào mùa khô giữa trưa."
      },
      {
        id: "8-8",
        termVi: "Mũ bảo hiểm",
        phonetic: "Moo bow hyem",
        spellingFormula: "M - U - Ngã ➔ MŨ / B - A - O - Hỏi ➔ BẢO / H - I - Ê - M - Hỏi ➔ HIỂM",
        meaningEn: "Motorbike helmet",
        emoji: "⛑️",
        exampleVi: "Luôn cài quai mũ bảo hiểm an toàn khi ngồi trên xe máy.",
        exampleEn: "Always fasten your helmet strap securely when riding scooters.",
        southernUsageTip: "Bắt buộc theo luật giao thông Việt Nam."
      },
      {
        id: "8-9",
        termVi: "Quán cà phê trú mưa",
        phonetic: "Kwan cah fay troo moo-uh",
        spellingFormula: "Q - U - A - N - Sắc ➔ QUÁN / TR - U - Sắc ➔ TRÚ",
        meaningEn: "Coffee shop to shelter from rain",
        emoji: "☕",
        exampleVi: "Ghé vào quán cà phê trú mưa đợi tạnh rồi hãy về.",
        exampleEn: "Let's stop at a cafe to take shelter until the rain stops.",
        southernUsageTip: "Thói quen thư giãn chờ mưa tạnh rất phổ biến."
      },
      {
        id: "8-10",
        termVi: "Dự báo thời tiết",
        phonetic: "Zoo bow tuh-ee tyet",
        spellingFormula: "D - Ư - Nặng ➔ DỰ / B - A - O - Sắc ➔ BÁO",
        meaningEn: "Weather forecast",
        emoji: "📺",
        exampleVi: "Dự báo thời tiết hôm nay trời có mây và mưa rào rải rác.",
        exampleEn: "The weather forecast today predicts clouds and scattered showers.",
        southernUsageTip: "Thông tin thời tiết hàng ngày trên điện thoại."
      },
      {
        id: "8-11",
        termVi: "Đèn pha xe máy",
        phonetic: "Den fah seh mye",
        spellingFormula: "Đ - E - N - Huyền ➔ ĐÈN / PH - A ➔ PHA",
        meaningEn: "Motorbike headlight",
        emoji: "💡",
        exampleVi: "Khi trời mưa tối, nhớ bật đèn pha xe máy để an toàn.",
        exampleEn: "Turn on your scooter headlight in the dark rain for safety.",
        southernUsageTip: "Bật đèn xe giúp người đi ngược chiều dễ nhìn thấy."
      },
      {
        id: "8-12",
        termVi: "Tạnh mưa rồi",
        phonetic: "Tanh moo-uh zoy",
        spellingFormula: "T - A - NH - Nặng ➔ TẠNH / R - Ô - I - Huyền ➔ RỒI",
        meaningEn: "The rain has stopped",
        emoji: "🌈",
        exampleVi: "Trời tạnh mưa rồi, cầu vồng hiện lên đẹp quá!",
        exampleEn: "The rain stopped, and a beautiful rainbow appeared!",
        southernUsageTip: "Thời điểm có thể tiếp tục hành trình."
      }
    ],
    quiz: [
      {
        id: "q8-1",
        type: "picture_word",
        pictureEmoji: "🧥",
        promptVi: "Nhìn hình chiếc áo mưa cánh dơi dưới đây và chọn trang bị đi mưa bắt buộc trong cốp xe máy của người Việt:",
        promptEn: "Look at the poncho raincoat image below and choose the essential rain gear kept under every scooter seat in Vietnam:",
        options: ["Áo mưa cánh dơi", "Áo phao cứu sinh", "Khăn choàng cổ len", "Găng tay trượt tuyết"],
        optionsEn: ["Poncho raincoat (Áo mưa)", "Life vest", "Wool scarf", "Ski gloves"],
        correctAnswer: "Áo mưa cánh dơi",
        explanationVi: "Chiếc 'Áo mưa cánh dơi' là vật bất ly thân trong cốp xe máy của người dân để đối phó với những cơn mưa rào bất chợt.",
        explanationEn: "A poncho raincoat is the indispensable item carried under every scooter seat in Vietnam."
      },
      {
        id: "q8-2",
        type: "multiple_choice",
        promptVi: "Tại TP.HCM và các tỉnh miền Nam, khí hậu trong năm được chia thành hai mùa nào rõ rệt?",
        promptEn: "In Ho Chi Minh City and Southern Vietnam, the climate is divided into which two distinct seasons?",
        options: ["Mùa mưa và Mùa khô", "Mùa xuân và Mùa đông có tuyết", "Mùa thu lá vàng và Mùa bão tuyết", "Chỉ có duy nhất mùa lạnh"],
        optionsEn: ["Rainy season and Dry season", "Spring and snowy Winter", "Autumn and Blizzard", "Only Cold season"],
        correctAnswer: "Mùa mưa và Mùa khô",
        explanationVi: "Miền Nam có khí hậu nhiệt đới chỉ gồm 2 mùa: mùa mưa (tháng 5-11) và mùa khô (tháng 12-4).",
        explanationEn: "Southern Vietnam climate features only two seasons: rainy and dry."
      },
      {
        id: "q8-3",
        type: "multiple_choice",
        promptVi: "Vào khoảng 5:30 chiều tan tầm, trời bất ngờ đổ mưa to và đường xá bắt đầu kẹt cứng. Cách xử lý thông minh và an toàn nhất là gì?",
        promptEn: "At 5:30 PM rush hour, heavy rain starts and streets gridlock. What is the smartest and safest response?",
        options: [
          "Tấp vào một quán cà phê ven đường trú mưa, đợi hết kẹt xe rồi hẵng về",
          "Cố tình chạy xe lên vỉa hè lấn làn nguy hiểm",
          "Dừng xe ngay giữa ngã tư để mặc áo mưa",
          "Bấm còi inh ỏi bắt mọi người nhường đường"
        ],
        optionsEn: [
          "Pull into a roadside cafe to shelter from rain and wait until traffic clears",
          "Ride dangerously on the sidewalk",
          "Stop abruptly in the middle of intersection to wear raincoat",
          "Honk aggressively at everyone"
        ],
        correctAnswer: "Tấp vào một quán cà phê ven đường trú mưa, đợi hết kẹt xe rồi hẵng về",
        explanationVi: "Trú mưa tại quán cà phê vừa an toàn, khô ráo lại vừa tận hưởng nét sinh hoạt thú vị của người dân bản địa.",
        explanationEn: "Sheltering in a cafe avoids dangerous traffic, stays dry, and embraces local lifestyle."
      },
      {
        id: "q8-4",
        type: "cultural_riddle",
        promptVi: "Đố vui thời tiết: Cơn mưa rào mùa hạ ở Sài Gòn thường có đặc điểm gì khiến nhiều người bất ngờ?",
        promptEn: "Weather riddle: What surprising characteristic does a Saigon summer shower possess?",
        options: [
          "Trời đang nắng bỗng đổ mưa xối xả rồi lại tạnh ráo nắng lên chỉ sau 30 phút",
          "Mưa kéo dài 30 ngày không tạnh",
          "Có tuyết rơi trắng xóa đường phố",
          "Mưa làm đóng băng mặt hồ"
        ],
        optionsEn: [
          "Sunny one minute, torrential downpour the next, then sunny again within 30 minutes",
          "Rains non-stop for 30 days",
          "Snow blankets the streets",
          "Freezes lakes into ice"
        ],
        correctAnswer: "Trời đang nắng bỗng đổ mưa xối xả rồi lại tạnh ráo nắng lên chỉ sau 30 phút",
        explanationVi: "Cơn mưa rào Nam Bộ thường đến rất nhanh và tạnh cũng rất nhanh, trả lại bầu không khí trong lành mát mẻ.",
        explanationEn: "Tropical showers arrive suddenly and clear quickly, leaving behind fresh and cool air."
      },
      {
        id: "q8-5",
        type: "picture_word",
        pictureEmoji: "⛑️",
        promptVi: "Nhìn hình chiếc mũ bảo hiểm xe máy dưới đây và chọn trang bị an toàn bắt buộc phải đội khi ngồi trên xe máy ở Việt Nam:",
        promptEn: "Look at the motorcycle helmet image below and choose the mandatory safety gear to wear on motorbikes in Vietnam:",
        options: ["Mũ bảo hiểm", "Mũ len mùa đông", "Mũ tai bèo", "Nón lá mỏng"],
        optionsEn: ["Helmet (Mũ bảo hiểm)", "Winter beanie", "Bucket hat", "Conical hat"],
        correctAnswer: "Mũ bảo hiểm",
        explanationVi: "'Mũ bảo hiểm' là trang bị an toàn bắt buộc theo luật giao thông đường bộ đối với mọi người điều khiển và ngồi trên xe máy.",
        explanationEn: "A safety helmet is legally required for all motorbike riders and passengers in Vietnam."
      }
    ],
    gameTitleVi: "Thử Thách Thời Tiết & Giao Thông",
    gameTitleEn: "Weather & Traffic Rush Game",
    gameDescriptionVi: "Vượt qua các tình huống thời tiết và giao thông đô thị!",
    gameDescriptionEn: "Navigate weather conditions and urban rush hours!",
    gameItems: [],
    homework: [],
    teacherSlides: []
  },

  // ==========================================
  // LESSON 9: LÀM ĐẸP, CẮT TÓC, SPA & DỊCH VỤ
  // ==========================================
  {
    id: 9,
    titleVi: "Bài 9: Làm Đẹp, Cắt Tóc & Spa Dịch Vụ",
    titleEn: "Lesson 9: Haircut, Spa & Personal Care",
    subtitleVi: "Cách dặn thợ cắt tóc, gội đầu dưỡng sinh và văn hoá tiền tip",
    subtitleEn: "Barbershop styles, herbal scalp wash, and tipping customs",
    icon: "✂️",
    themeColor: "purple",
    stampTitleVi: "Thư Giãn Phố Thị",
    stampTitleEn: "Wellness & Spa Stamp",
    landmarkVi: "Khu Phố Spa & Chăm Sóc Sức Khỏe",
    landmarkEn: "City Spa & Wellness District",
    culturalTraitVi: "Dịch vụ gội đầu dưỡng sinh bằng thảo dược và thái độ phục vụ chu đáo",
    culturalTraitEn: "Herbal head spas and attentive, affordable hospitality services",
    landmarkStoryVi: "Hệ thống tiệm cắt tóc nam truyền thống và các spa gội đầu thảo dược dưỡng sinh tạo nên trải nghiệm thư giãn tinh thần độc đáo cho du khách.",
    landmarkStoryEn: "Traditional barbershops and herbal head spas provide a rejuvenating cultural experience cherished by locals and travelers alike.",
    culturalStory: {
      titleVi: "Gội Đầu Dưỡng Sinh Thảo Dược & Nghệ Thuật Chăm Sóc Tận Tâm",
      titleEn: "Herbal Head Spa & The Art of Attentive Service",
      habitVi: "Thói quen đi gội đầu thư giãn cuối tuần và văn hóa gửi tiền boa (tip) khen ngợi thợ",
      habitEn: "Habit of weekend head wash relaxation and tipping generously for good service",
      storyVi: "Ở Việt Nam, 'gội đầu dưỡng sinh' không đơn thuần là làm sạch tóc mà là một liệu pháp chăm sóc sức khỏe toàn diện. Nước gội được nấu từ bồ kết, sả, chanh, vỏ bưởi thơm lừng kết hợp các động tác massage cổ vai gáy bấm huyệt nhẹ nhàng giúp xua tan mọi mệt mỏi sau một tuần làm việc. Các tiệm cắt tóc nam vỉa hè hay salon hiện đại đều có thợ tay nghề cao, tỉ mỉ cạo mặt, ngoáy tai rất êm. Giá dịch vụ rất vừa túi tiền, và khách thường gửi thêm một khoản tiền boa nhỏ (tip) để khen ngợi sự chu đáo của nhân viên.",
      storyEn: "In Vietnam, an 'herbal head wash' (gội đầu dưỡng sinh) is a full relaxation ritual. Scalp washes use fragrant natural broths boiled from locust fruit (bồ kết), lemongrass, and pomelo rind, coupled with soothing neck and shoulder acupressure. Barbershops and salons offer affordable, meticulous services. Satisfied customers often leave a modest tip (tiền boa) to show appreciation.",
      politeTipVi: "Mẹo khi cắt tóc: Hãy diễn tả rõ ràng độ dài bạn muốn: 'Cắt ngắn hai bên giùm tôi, ở trên chỉ tỉa mỏng bớt thôi, đừng cắt quá ngắn nhé!'",
      politeTipEn: "Haircut tip: Be precise with your stylist: 'Cắt ngắn hai bên, ở trên tỉa mỏng thôi' (Short on sides, thin out top lightly)!",
      emoji: "💇‍♂️",
      landmarkVi: "Salon Phố Cổ Quận 3"
    },
    flashcards: [
      {
        id: "9-1",
        termVi: "Cắt tóc gọn gàng",
        phonetic: "Cat tawc gawn gahng",
        spellingFormula: "C - Ă - T - Sắc ➔ CẮT / T - O - C - Sắc ➔ TÓC",
        meaningEn: "Neat haircut / Trim hair",
        emoji: "✂️",
        exampleVi: "Anh muốn cắt tóc ngắn gọn gàng để đi dự tiệc cưới.",
        exampleEn: "I want a neat short haircut to attend a wedding banquet.",
        southernUsageTip: "Yêu cầu cơ bản khi bước vào tiệm cắt tóc."
      },
      {
        id: "9-2",
        termVi: "Gội đầu dưỡng sinh",
        phonetic: "Goy dow zoo-uhng sin",
        spellingFormula: "G - Ô - I - Nặng ➔ GỘI / Đ - Â - U - Huyền ➔ ĐẦU",
        meaningEn: "Herbal head spa & scalp massage",
        emoji: "💆",
        exampleVi: "Dịch vụ gội đầu dưỡng sinh thảo dược này rất thư giãn.",
        exampleEn: "This herbal head spa service is extremely relaxing.",
        southernUsageTip: "Trải nghiệm thư giãn cực kỳ được ưa chuộng tại Việt Nam."
      },
      {
        id: "9-3",
        termVi: "Cắt ngắn hai bên tai",
        phonetic: "Cat ngan high ben tye",
        spellingFormula: "N - G - Ă - N - Sắc ➔ NGẮN / T - A - I ➔ TAI",
        meaningEn: "Cut sides short (fade / taper)",
        emoji: "👂",
        exampleVi: "Cắt ngắn hai bên tai giùm anh cho thoáng mát.",
        exampleEn: "Cut both sides short around the ears to stay cool.",
        southernUsageTip: "Dặn thợ hớt tóc kiểu tóc nam hiện đại."
      },
      {
        id: "9-4",
        termVi: "Tỉa mỏng bớt",
        phonetic: "Tee-uh mawng buht",
        spellingFormula: "T - I - A - Hỏi ➔ TỈA / M - O - NG - Hỏi ➔ MỎNG",
        meaningEn: "Thin out hair lightly",
        emoji: "💇",
        exampleVi: "Tóc dày quá, thợ tỉa mỏng bớt ở phần đỉnh đầu nhé.",
        exampleEn: "My hair is thick, please thin it out on the top.",
        southernUsageTip: "Giảm bớt độ dày của tóc mà không làm mất phom dáng."
      },
      {
        id: "9-5",
        termVi: "Đừng cắt quá ngắn",
        phonetic: "Doong cat kwah ngan",
        spellingFormula: "Đ - Ư - NG - Huyền ➔ ĐỪNG / Q - U - A - Sắc ➔ QUÁ",
        meaningEn: "Do not cut too short",
        emoji: "🙅",
        exampleVi: "Em ơi, nhớ đừng cắt quá ngắn của anh nhé!",
        exampleEn: "Please remember not to cut my hair too short!",
        southernUsageTip: "Lời dặn dò quan trọng để thợ không cắt hụt tóc."
      },
      {
        id: "9-6",
        termVi: "Cạo râu sạch sẽ",
        phonetic: "Cow zow sak seh",
        spellingFormula: "C - A - O - Nặng ➔ CẠO / R - Â - U ➔ RÂU",
        meaningEn: "Clean shave / Shave beard",
        emoji: "🪒",
        exampleVi: "Thợ cạo râu và thoa kem làm mềm da rất êm ái.",
        exampleEn: "The barber shaved the beard smoothly with shaving foam.",
        southernUsageTip: "Dịch vụ cạo râu mặt truyền thống tại tiệm cắt tóc nam."
      },
      {
        id: "9-7",
        termVi: "Làm móng / Làm nail",
        phonetic: "Lahm mawng / Lahm nail",
        spellingFormula: "L - A - M - Huyền ➔ LÀM / M - O - NG - Sắc ➔ MÓNG",
        meaningEn: "Manicure & Pedicure / Nail salon",
        emoji: "💅",
        exampleVi: "Chị ấy đi làm móng tay sơn màu hồng pastel xinh xắn.",
        exampleEn: "She had her nails manicured with cute pastel pink color.",
        southernUsageTip: "Dịch vụ chăm sóc móng tay móng chân cho phái đẹp."
      },
      {
        id: "9-8",
        termVi: "Tiền boa / Tiền tip",
        phonetic: "Tyen bow-ah / Tyen tip",
        spellingFormula: "T - I - Ê - N - Huyền ➔ TIỀN / B - O - A ➔ BOA",
        meaningEn: "Tip money (gratuity)",
        emoji: "💵",
        exampleVi: "Khách gửi thêm năm mươi ngàn tiền boa vì thợ phục vụ tận tâm.",
        exampleEn: "Customer tipped 50k dong for the attentive service.",
        southernUsageTip: "Khoản tiền thưởng thêm cho nhân viên dịch vụ."
      },
      {
        id: "9-9",
        termVi: "Bảng giá dịch vụ",
        phonetic: "Bang zah zik voo",
        spellingFormula: "B - A - NG - Hỏi ➔ BẢNG / GI - A - Sắc ➔ GIÁ",
        meaningEn: "Service price list / Menu of services",
        emoji: "📜",
        exampleVi: "Xem bảng giá dịch vụ trước quầy để chọn gói phù hợp.",
        exampleEn: "Check the service price list at the counter to choose packages.",
        southernUsageTip: "Xem giá niêm yết trước khi làm dịch vụ."
      },
      {
        id: "9-10",
        termVi: "Sấy tóc vào nếp",
        phonetic: "Say tawc vow nep",
        spellingFormula: "S - Â - Y - Sắc ➔ SẤY / N - Ê - P - Sắc ➔ NẾP",
        meaningEn: "Blow-dry and style hair",
        emoji: "💨",
        exampleVi: "Thợ sấy tóc phồng và vuốt sáp tạo kiểu rất đẹp trai.",
        exampleEn: "The stylist blow-dried and waxed the hair into great shape.",
        southernUsageTip: "Tạo kiểu tóc sau khi gội và cắt."
      },
      {
        id: "9-11",
        termVi: "Nhuộm màu tóc",
        phonetic: "Nyoom mow tawc",
        spellingFormula: "NH - U - Ô - M - Nặng ➔ NHUỘM / M - A - U - Huyền ➔ MÀU",
        meaningEn: "Hair coloring / Dye hair",
        emoji: "🎨",
        exampleVi: "Cô ấy muốn nhuộm màu tóc nâu hạt dẻ tự nhiên.",
        exampleEn: "She wants to dye her hair natural chestnut brown.",
        southernUsageTip: "Đổi màu tóc theo sở thích cá nhân."
      },
      {
        id: "9-12",
        termVi: "Massage vai gáy",
        phonetic: "Mat-sah vye gye",
        spellingFormula: "V - A - I ➔ VAI / G - A - Y - Sắc ➔ GÁY",
        meaningEn: "Neck and shoulder massage",
        emoji: "💆‍♂️",
        exampleVi: "Động tác massage vai gáy giúp giảm nhức mỏi cơ tức thì.",
        exampleEn: "Neck and shoulder massage relieves muscle soreness immediately.",
        southernUsageTip: "Phần thư giãn tuyệt vời trong buổi gội đầu dưỡng sinh."
      }
    ],
    quiz: [
      {
        id: "q9-1",
        type: "picture_word",
        pictureEmoji: "✂️",
        promptVi: "Nhìn hình cây kéo dưới đây và chọn dịch vụ chăm sóc tóc phổ biến:",
        promptEn: "Look at the scissors image below and choose the common hair care service:",
        options: ["Cắt tóc gọn gàng", "May vá quần áo", "Nấu ăn trong bếp", "Sửa chữa xe máy"],
        optionsEn: ["Haircut (Cắt tóc)", "Sew clothes", "Cook in kitchen", "Fix motorbike"],
        correctAnswer: "Cắt tóc gọn gàng",
        explanationVi: "Hình cây kéo là biểu tượng chuẩn của dịch vụ 'Cắt tóc gọn gàng' tại salon hoặc tiệm tóc.",
        explanationEn: "The scissors icon represents haircut services."
      },
      {
        id: "q9-2",
        type: "multiple_choice",
        promptVi: "Bài toán tính tiền dịch vụ: Bạn cắt tóc giá 80.000đ, gội đầu dưỡng sinh 70.000đ và gửi thêm 30.000đ tiền boa. Tổng cộng bạn chi bao nhiêu tiền?",
        promptEn: "Service bill calculation: Haircut is 80k, herbal wash is 70k, and tip is 30k. How much do you pay in total?",
        options: ["180.000 đồng", "150.000 đồng", "200.000 đồng", "160.000 đồng"],
        optionsEn: ["180,000 VND", "150,000 VND", "200,000 VND", "160,000 VND"],
        correctAnswer: "180.000 đồng",
        explanationVi: "80.000đ + 70.000đ + 30.000đ = 180.000 đồng.",
        explanationEn: "80k + 70k + 30k = 180,000 VND total."
      },
      {
        id: "q9-3",
        type: "multiple_choice",
        promptVi: "Khi ngồi vào ghế cắt tóc và muốn giữ độ dài của tóc, chỉ muốn thợ làm mỏng bớt mái tóc dày, bạn nên dặn câu nào?",
        promptEn: "When sitting in the barber chair wanting to keep your length and just reduce hair thickness, which sentence should you say?",
        options: [
          "Tỉa mỏng bớt giùm anh thôi, đừng cắt quá ngắn nhé!",
          "Cạo trọc đầu cho tôi luôn đi!",
          "Cắt sát da đầu thật ngắn vào!",
          "Thích cắt thế nào thì cắt!"
        ],
        optionsEn: [
          "Just thin it out lightly, please do not cut too short!",
          "Shave my whole head bald!",
          "Cut extremely close to the scalp!",
          "Cut however you like without caring!"
        ],
        correctAnswer: "Tỉa mỏng bớt giùm anh thôi, đừng cắt quá ngắn nhé!",
        explanationVi: "'Tỉa mỏng bớt thôi, đừng cắt quá ngắn' là câu chỉ dẫn chuẩn xác để thợ dùng kéo tỉa mà không làm ngắn chiều dài tóc.",
        explanationEn: "'Tỉa mỏng bớt, đừng cắt quá ngắn' accurately asks to thin out thickness without shortening length."
      },
      {
        id: "q9-4",
        type: "cultural_riddle",
        promptVi: "Đố vui thư giãn: Liệu pháp chăm sóc tóc và da đầu kết hợp massage cổ vai gáy bằng nước bồ kết thảo dược thơm lừng ở Việt Nam được gọi là gì?",
        promptEn: "Relaxation riddle: What is the herbal scalp wash and neck acupressure massage therapy called in Vietnam?",
        options: [
          "Gội đầu dưỡng sinh",
          "Tắm biển ngoài trời",
          "Chạy bộ thể dục",
          "Xem phim rạp"
        ],
        optionsEn: [
          "Herbal head spa (Gội đầu dưỡng sinh)",
          "Outdoor sea swimming",
          "Jogging exercise",
          "Cinema movie"
        ],
        correctAnswer: "Gội đầu dưỡng sinh",
        explanationVi: "'Gội đầu dưỡng sinh' là dịch vụ chăm sóc sức khỏe và thư giãn tinh thần rất thịnh hành và được yêu thích tại Việt Nam.",
        explanationEn: "'Gội đầu dưỡng sinh' is the hugely popular holistic herbal scalp wash and relaxation treatment."
      },
      {
        id: "q9-5",
        type: "picture_word",
        pictureEmoji: "💅",
        promptVi: "Nhìn hình bàn tay sơn móng dưới đây và chọn dịch vụ làm đẹp móng tay móng chân phổ biến:",
        promptEn: "Look at the manicured hand image below and select the common nail care beauty service:",
        options: ["Làm móng / Làm nail", "Sơn tường nhà", "Vẽ tranh sơn dầu", "Nấu ăn"],
        optionsEn: ["Manicure & Nail care (Làm nail)", "Paint home walls", "Oil painting", "Cooking"],
        correctAnswer: "Làm móng / Làm nail",
        explanationVi: "Hình vẽ móng tay đại diện cho dịch vụ 'Làm móng / Làm nail' của chị em phụ nữ.",
        explanationEn: "The nail polish icon represents manicure and pedicure nail services."
      }
    ],
    gameTitleVi: "Thử Thách Làm Đẹp & Dịch Vụ",
    gameTitleEn: "Barbershop & Spa Game",
    gameDescriptionVi: "Chọn dịch vụ thư giãn và giao tiếp với thợ tạo mẫu!",
    gameDescriptionEn: "Choose wellness services and communicate with stylists!",
    gameItems: [],
    homework: [],
    teacherSlides: []
  },

  // ==========================================
  // LESSON 10: KẾT BẠN, GIAO LƯU & MỜI ĐI ĂN UỐNG
  // ==========================================
  {
    id: 10,
    titleVi: "Bài 10: Giao Lưu, Kết Bạn & Mời Đi Ăn",
    titleEn: "Lesson 10: Socializing, Friends & Dining Out",
    subtitleVi: "Cách rủ đi cà phê, kết bạn Zalo, mời ăn uống và hô 'Một hai ba dô!'",
    subtitleEn: "Coffee invites, Zalo networking, dining etiquette, and 'Một hai ba dô!'",
    icon: "🍻",
    themeColor: "amber",
    stampTitleVi: "Tình Bạn Phương Nam",
    stampTitleEn: "Southern Friendship Stamp",
    landmarkVi: "Phố Đi Bộ Nguyễn Huệ & Cà Phê Bệt",
    landmarkEn: "Nguyen Hue Walking Street & Sidewalk Cafes",
    culturalTraitVi: "Văn hoá 'đi cà phê' giao lưu, lòng mến khách và thói quen 'hôm nay tôi đãi'",
    culturalTraitEn: "Coffee socializing culture, warm hospitality, and the 'my treat' tradition",
    landmarkStoryVi: "Phố đi bộ Nguyễn Huệ rực rỡ ánh đèn về đêm, nơi tụ hội của giới trẻ, nghệ sĩ đường phố và du khách cùng giao lưu chuyện trò rôm rả.",
    landmarkStoryEn: "Nguyen Hue Walking Street comes alive at night with street performers, youth, and travelers sharing lively conversations.",
    culturalStory: {
      titleVi: "Văn Hóa 'Đi Cà Phê', Lời Mời 'Tôi Đãi' & 'Một Hai Ba Dô!'",
      titleEn: "The 'Đi Cà Phê' Culture, 'My Treat' Hospitality & 'Một Hai Ba Dô!'",
      habitVi: "Thói quen rủ bạn bè 'đi cà phê' để trò chuyện và tinh thần hào sảng tranh nhau trả tiền mời bạn",
      habitEn: "Habit of inviting friends for coffee to socialize and the warm custom of treating companions",
      storyVi: "Ở Việt Nam, khi ai đó nói: 'Hôm nào rảnh tụi mình đi cà phê nhé!', điều đó không có nghĩa là bạn nhất định phải uống cà phê. 'Đi cà phê' là một nét văn hóa đẹp biểu tượng cho sự gặp gỡ, trò chuyện và kết nối bạn bè. Tại bàn ăn vỉa hè hay bữa tiệc ấm cúng, người Việt rất thích nâng ly cùng hô to: 'Một, hai, ba - Dô! Hai, ba - Dô! Hai, ba - Uống!' để tạo không khí rộn rã gắn kết. Khi tính tiền, bạn sẽ thường thấy cảnh người Việt giành nhau thanh toán và hào sảng nói: 'Bữa nay tôi đãi, lần sau tới bạn nghen!'",
      storyEn: "In Vietnam, when someone says 'Hôm nào đi cà phê nhé!' (Let’s get coffee sometime!), you don't necessarily have to drink coffee. 'Đi cà phê' is a cultural metaphor for meeting up, chatting, and bonding. At dining tables, locals enthusiastically raise glasses with the cheer 'Một, hai, ba - Dô!' to celebrate camaraderie. When the bill arrives, it is customary to affectionately compete to pay: 'Bữa nay tôi đãi!' (My treat today!).",
      politeTipVi: "Mẹo giao lưu: Ứng dụng nhắn tin phổ biến nhất tại Việt Nam là Zalo. Hãy lưu sẵn mã QR Zalo trên điện thoại để kết bạn với bạn bè người Việt chỉ trong một giây nhé!",
      politeTipEn: "Networking tip: Zalo is the dominant messaging app in Vietnam. Keep your Zalo QR code handy to connect with local friends in a flash!",
      emoji: "🤝",
      landmarkVi: "Phố Đi Bộ Nguyễn Huệ"
    },
    flashcards: [
      {
        id: "10-1",
        termVi: "Đi cà phê không?",
        phonetic: "Dee cah fay hohm",
        spellingFormula: "Đ - I ➔ ĐI / C - À ➔ CÀ / PH - Ê ➔ PHÊ",
        meaningEn: "Wanna go get coffee? / Hang out?",
        emoji: "☕",
        exampleVi: "Tối nay rảnh rỗi không, tụi mình đi cà phê nghen!",
        exampleEn: "Are you free tonight? Let's go get coffee!",
        southernUsageTip: "Lời rủ rê giao lưu kết bạn phổ biến nhất ở Việt Nam."
      },
      {
        id: "10-2",
        termVi: "Kết bạn Zalo / Quét mã Zalo",
        phonetic: "Ket ban Zalo / Kwet mah Zalo",
        spellingFormula: "K - Ê - T - Sắc ➔ KẾT / B - A - N - Nặng ➔ BẠN",
        meaningEn: "Connect on Zalo / Scan Zalo QR",
        emoji: "💬",
        exampleVi: "Cho mình xin Zalo của bạn để gửi hình chụp nhé.",
        exampleEn: "Can I have your Zalo to send over the photos?",
        southernUsageTip: "Kênh liên lạc công việc và cá nhân số 1 tại Việt Nam."
      },
      {
        id: "10-3",
        termVi: "Bữa nay tôi đãi / Tôi bao",
        phonetic: "Boo-uh nye toy dye / Toy bow",
        spellingFormula: "Đ - A - I - Ngã ➔ ĐÃI / B - AO ➔ BAO",
        meaningEn: "It is my treat today / I will pay for it",
        emoji: "🎁",
        exampleVi: "Hôm nay sinh nhật tôi, bữa ăn này tôi đãi cả nhóm!",
        exampleEn: "Today is my birthday, this dinner is my treat for everyone!",
        southernUsageTip: "'Tôi bao' là khẩu ngữ miền Nam rất phóng khoáng."
      },
      {
        id: "10-4",
        termVi: "Một hai ba dô!",
        phonetic: "Moht high bah zoh",
        spellingFormula: "M - Ộ - T ➔ MỘT / H - AI ➔ HAI / D - Ô ➔ DÔ",
        meaningEn: "One two three, cheers! (Toast)",
        emoji: "🍻",
        exampleVi: "Nào mọi người cùng nâng ly: Một, hai, ba, dô!",
        exampleEn: "Everyone raise your glasses: One, two, three, cheers!",
        southernUsageTip: "Tiếng hô chúc mừng rôm rả tại mọi bữa tiệc Việt Nam."
      },
      {
        id: "10-5",
        termVi: "Cuối tuần này bạn có rảnh không?",
        phonetic: "Cooy twan nye ban caw ran hohm",
        spellingFormula: "C - U - Ô - I - Sắc ➔ CUỐI / R - Ă - NH - Hỏi ➔ RẢNH",
        meaningEn: "Are you free this weekend?",
        emoji: "📅",
        exampleVi: "Cuối tuần này bạn có rảnh không, mình đi xem kịch nhé?",
        exampleEn: "Are you free this weekend, let's go watch a play?",
        southernUsageTip: "Mở đầu lịch sự khi muốn hẹn gặp ai đó."
      },
      {
        id: "10-6",
        termVi: "Ăn ốc vỉa hè",
        phonetic: "An awk vee-uh heh",
        spellingFormula: "Ă - N ➔ ĂN / Ô - C - Sắc ➔ ỐC",
        meaningEn: "Eating street-side snails & seafood",
        emoji: "🐚",
        exampleVi: "Người Sài Gòn rất mê tụ tập ăn ốc vỉa hè buổi tối.",
        exampleEn: "Saigon locals love gathering at street-side snail stalls in the evening.",
        southernUsageTip: "Nét ẩm thực giao lưu đêm nổi tiếng của người Nam Bộ."
      },
      {
        id: "10-7",
        termVi: "Rất vui được làm quen",
        phonetic: "Zat vooy doo-uhk lahm kwen",
        spellingFormula: "V - U - Y ➔ VUI / Q - U - E - N ➔ QUEN",
        meaningEn: "Nice to meet you / Delighted to make acquaintance",
        emoji: "🤝",
        exampleVi: "Chào bạn, mình là David, rất vui được làm quen với bạn!",
        exampleEn: "Hello, I am David, very nice to make your acquaintance!",
        southernUsageTip: "Câu chào khi vừa mới được giới thiệu gặp mặt."
      },
      {
        id: "10-8",
        termVi: "Số điện thoại của bạn là gì?",
        phonetic: "Soh dyen thwye coo-uh ban lah zee",
        spellingFormula: "Đ - I - Ê - N - Nặng ➔ ĐIỆN / TH - O - A - I - Nặng ➔ THOẠI",
        meaningEn: "What is your phone number?",
        emoji: "📞",
        exampleVi: "Số điện thoại của bạn là gì để mình lưu vào danh bạ?",
        exampleEn: "What is your phone number so I can save it to contacts?",
        southernUsageTip: "Hỏi để giữ liên lạc lâu dài."
      },
      {
        id: "10-9",
        termVi: "Chúc mừng sinh nhật",
        phonetic: "Chook moong sin nyat",
        spellingFormula: "CH - Ú - C ➔ CHÚC / M - Ừ - NG ➔ MỪNG",
        meaningEn: "Happy Birthday",
        emoji: "🎂",
        exampleVi: "Chúc mừng sinh nhật bạn, chúc bạn luôn vui vẻ và thành công!",
        exampleEn: "Happy birthday to you, wishing you joy and success always!",
        southernUsageTip: "Lời chúc mừng ngày sinh nhật."
      },
      {
        id: "10-10",
        termVi: "Hẹn gặp lại nhé",
        phonetic: "Hen gap lye nye",
        spellingFormula: "H - E - N - Nặng ➔ HẸN / G - Ă - P - Nặng ➔ GẶP",
        meaningEn: "See you again! / Goodbye for now",
        emoji: "👋",
        exampleVi: "Hôm nay vui quá, hẹn gặp lại bạn vào tuần sau nhé!",
        exampleEn: "Today was great, see you again next week!",
        southernUsageTip: "Lời tạm biệt ấm áp sau buổi gặp gỡ."
      },
      {
        id: "10-11",
        termVi: "Quán quen",
        phonetic: "Kwan kwen",
        spellingFormula: "Q - U - A - N - Sắc ➔ QUÁN / Q - U - E - N ➔ QUEN",
        meaningEn: "Favorite regular spot / Go-to eatery",
        emoji: "📍",
        exampleVi: "Tụi mình ghé quán quen uống cà phê vợt gia truyền nhé.",
        exampleEn: "Let's stop by our regular spot for traditional stocking coffee.",
        southernUsageTip: "Quán ăn hoặc quán cà phê thân thuộc hay lui tới."
      },
      {
        id: "10-12",
        termVi: "Nâng ly chúc mừng",
        phonetic: "Nang lee chook moong",
        spellingFormula: "N - Â - NG ➔ NÂNG / L - Y ➔ LY",
        meaningEn: "Raise a toast / Clink glasses",
        emoji: "🥂",
        exampleVi: "Cùng nâng ly chúc mừng cho tình bạn đẹp của chúng ta!",
        exampleEn: "Let's raise our glasses to celebrate our wonderful friendship!",
        southernUsageTip: "Hành động cụng ly thể hiện sự gắn kết trong bàn tiệc."
      }
    ],
    quiz: [
      {
        id: "q10-1",
        type: "picture_word",
        pictureEmoji: "🍻",
        promptVi: "Nhìn hình hai chiếc ly cụng vào nhau dưới đây và chọn khẩu hiệu chúc mừng thân thiện tại bàn tiệc Việt Nam:",
        promptEn: "Look at the clinking glasses image below and choose the friendly Vietnamese toast cheer:",
        options: ["Một, hai, ba, dô!", "Đi ngủ thôi", "Đừng nói chuyện", "Tính tiền về sớm"],
        optionsEn: ["One, two, three, cheers! (Một hai ba dô!)", "Go to sleep", "Do not talk", "Pay and leave early"],
        correctAnswer: "Một, hai, ba, dô!",
        explanationVi: "Tiếng hô 'Một, hai, ba, dô!' là tiếng cụng ly chúc mừng kinh điển rộn rã trong các bữa tiệc gặp mặt bạn bè tại Việt Nam.",
        explanationEn: "'Một, hai, ba, dô!' is the iconic celebratory toast cheer in Vietnamese gatherings."
      },
      {
        id: "q10-2",
        type: "multiple_choice",
        promptVi: "Ở Việt Nam, khi một người bạn nói: 'Cuối tuần này rảnh không, đi cà phê nhé!', mục đích chính của lời rủ này là gì?",
        promptEn: "In Vietnam, when a friend asks 'Are you free this weekend, let's go get coffee!', what is the primary purpose?",
        options: [
          "Gặp gỡ, trò chuyện, giao lưu và thắt chặt tình bạn",
          "Bắt buộc bạn phải uống hết 10 ly cà phê đắng",
          "Đi kiểm tra chất lượng hạt cà phê",
          "Nhờ bạn đi làm việc nặng giúp"
        ],
        optionsEn: [
          "Meeting up, chatting, socializing, and bonding friendship",
          "Forcing you to drink 10 bitter coffees",
          "Inspecting coffee bean quality",
          "Asking you to do heavy labor"
        ],
        correctAnswer: "Gặp gỡ, trò chuyện, giao lưu và thắt chặt tình bạn",
        explanationVi: "'Đi cà phê' là nét văn hóa ẩn dụ cho lời mời gặp gỡ chuyện trò, bạn có thể gọi trà đào, sinh tố hoặc nước trái cây tùy thích.",
        explanationEn: "'Đi cà phê' is a cultural metaphor for hanging out; you can order fruit smoothies or tea as well."
      },
      {
        id: "q10-3",
        type: "multiple_choice",
        promptVi: "Khi đi ăn với bạn bè và bạn muốn hào sảng thanh toán toàn bộ bữa ăn để chiêu đãi mọi người, bạn nói câu nào?",
        promptEn: "When dining with friends and you want to generously treat everyone for the meal, which phrase do you say?",
        options: [
          "Bữa nay tôi đãi / Tôi bao cả nhóm nhé!",
          "Mọi người tự trả tiền phần của mình đi!",
          "Ai có nhiều tiền nhất thì trả đi!",
          "Tôi không mang theo ví tiền đâu!"
        ],
        optionsEn: [
          "Today is my treat / I'll cover the whole group!",
          "Everyone pay your own share!",
          "Whoever has most money should pay!",
          "I didn't bring my wallet!"
        ],
        correctAnswer: "Bữa nay tôi đãi / Tôi bao cả nhóm nhé!",
        explanationVi: "'Bữa nay tôi đãi' hoặc 'Bữa nay tôi bao' thể hiện sự hào sảng, hiếu khách ấm áp của người Việt Nam.",
        explanationEn: "'Bữa nay tôi đãi / Tôi bao' warmly signals that the meal is your generous treat."
      },
      {
        id: "q10-4",
        type: "cultural_riddle",
        promptVi: "Đố vui công nghệ & đời sống: Ứng dụng nhắn tin trên điện thoại nào được người dân Việt Nam sử dụng phổ biến nhất để liên lạc và kết bạn hàng ngày?",
        promptEn: "Tech & life riddle: Which mobile messaging app is most widely used across Vietnam for daily communication and networking?",
        options: ["Zalo", "MySpace", "Yahoo Messenger", "Skype"],
        optionsEn: ["Zalo", "MySpace", "Yahoo Messenger", "Skype"],
        correctAnswer: "Zalo",
        explanationVi: "Zalo là ứng dụng nhắn tin quốc dân tại Việt Nam, hầu hết mọi người đều dùng Zalo để nhắn tin, gọi điện và gửi tài liệu.",
        explanationEn: "Zalo is Vietnam's ubiquitous national messaging and networking platform."
      },
      {
        id: "q10-5",
        type: "picture_word",
        pictureEmoji: "🤝",
        promptVi: "Nhìn hình cái bắt tay thân thiện dưới đây và chọn câu nói thể hiện sự niềm nở khi vừa làm quen với bạn mới:",
        promptEn: "Look at the friendly handshake image below and choose the polite introductory greeting when making a new friend:",
        options: ["Rất vui được làm quen với bạn", "Tôi ghét bạn", "Đi chỗ khác chơi", "Không thèm nói chuyện"],
        optionsEn: ["Very nice to meet you", "I dislike you", "Go away", "Refuse to talk"],
        correctAnswer: "Rất vui được làm quen với bạn",
        explanationVi: "Hình bắt tay đại diện cho lời chào nhã nhặn 'Rất vui được làm quen với bạn' khi gặp gỡ người mới.",
        explanationEn: "The handshake symbolizes 'Nice to meet you'."
      }
    ],
    gameTitleVi: "Thử Thách Giao Lưu & Kết Bạn",
    gameTitleEn: "Socializing & Friendship Game",
    gameDescriptionVi: "Trải nghiệm các tình huống kết bạn và mời đi ăn uống đời sống!",
    gameDescriptionEn: "Experience making friends and dining invitations in daily life!",
    gameItems: [],
    homework: [],
    teacherSlides: []
  }
];
