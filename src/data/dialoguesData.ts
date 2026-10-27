import { Dialogue } from '../types';

export const DIALOGUES_DATA: Record<number, Dialogue> = {
  1: {
    id: 'dialogue-lesson-1',
    titleVi: 'Mua Sắm & Mặc Cả Lịch Sự Tại Chợ',
    titleEn: 'Polite Shopping & Bargaining at the Market',
    contextVi: 'Khách du lịch mua nón lá quà lưu niệm và mặc cả giá lịch thiệp với người bán.',
    contextEn: 'A traveler shops for souvenir conical hats and politely asks for a small discount.',
    landmarkVi: 'Chợ Bến Thành (Quận 1)',
    roles: [
      { id: 'role-khach', nameVi: 'Khách mua', nameEn: 'Customer', avatar: '🧑‍💼' },
      { id: 'role-ban', nameVi: 'Cô bán hàng', nameEn: 'Vendor', avatar: '👩‍🌾' }
    ],
    culturalTakeawayVi: 'Người Việt rất coi trọng không khí mua bán vui vẻ. Mặc cả thân mật và gọi "Cô/Chú ơi bớt chút đỉnh" sẽ giúp đôi bên đều thoải mái.',
    culturalTakeawayEn: 'Friendly haggling with a warm smile and respectful pronouns makes bargaining a pleasant cultural exchange.',
    lines: [
      {
        id: 'd1-1',
        speakerId: 'role-khach',
        speakerVi: 'Khách mua',
        speakerEn: 'Customer',
        avatar: '🧑‍💼',
        textVi: 'Chào cô! Cái nón lá thêu này bao nhiêu tiền vậy cô?',
        textEn: 'Hello! How much is this embroidered conical hat, ma’am?',
        phonetic: 'Chào cô! Cái nón lá thêu này bao nhiêu tiền vậy cô?'
      },
      {
        id: 'd1-2',
        speakerId: 'role-ban',
        speakerVi: 'Cô bán hàng',
        speakerEn: 'Vendor',
        avatar: '👩‍🌾',
        textVi: 'Dạ nón lá loại một, hai trăm ngàn một cái đó con ơi.',
        textEn: 'It is premium grade, two hundred thousand dong each, my dear.',
        phonetic: 'Dạ nón lá loại một, hai trăm ngàn một cái đó con ơi.'
      },
      {
        id: 'd1-3',
        speakerId: 'role-khach',
        speakerVi: 'Khách mua',
        speakerEn: 'Customer',
        avatar: '🧑‍💼',
        textVi: 'Dạ hơi đắt một chút. Cô bớt cho con chút đỉnh được không?',
        textEn: 'It’s a bit high. Could you give me a small discount please?',
        phonetic: 'Dạ hơi đắt một chút. Cô bớt cho con chút đỉnh được không?'
      },
      {
        id: 'd1-4',
        speakerId: 'role-ban',
        speakerVi: 'Cô bán hàng',
        speakerEn: 'Vendor',
        avatar: '👩‍🌾',
        textVi: 'Thôi cô mở hàng đầu ngày, bớt cho con còn một trăm rưỡi (150k) nghen!',
        textEn: 'Since you’re my opening customer, I’ll discount it to 150k for good luck!',
        phonetic: 'Thôi cô mở hàng đầu ngày, bớt cho con còn một trăm rưỡi nghen!'
      },
      {
        id: 'd1-5',
        speakerId: 'role-khach',
        speakerVi: 'Khách mua',
        speakerEn: 'Customer',
        avatar: '🧑‍💼',
        textVi: 'Dạ con cảm ơn cô nhiều, con gửi tiền cô ạ!',
        textEn: 'Thank you very much, here is the money ma’am!',
        phonetic: 'Dạ con cảm ơn cô nhiều, con gửi tiền cô ạ!'
      }
    ]
  },

  2: {
    id: 'dialogue-lesson-2',
    titleVi: 'Tính Tiền & Quét Mã QR Thanh Toán',
    titleEn: 'Paying the Bill & QR Code Transfer',
    contextVi: 'Khách ăn xong tại quán và đề nghị thanh toán qua quét mã QR chuyển khoản.',
    contextEn: 'A customer finishes eating and asks to pay via bank transfer QR code.',
    landmarkVi: 'Quán Ăn Trung Tâm Sài Gòn',
    roles: [
      { id: 'role-khach', nameVi: 'Khách', nameEn: 'Customer', avatar: '👨‍🦱' },
      { id: 'role-thu-ngan', nameVi: 'Thu ngân', nameEn: 'Cashier', avatar: '👩‍💼' }
    ],
    culturalTakeawayVi: 'Mã QR thanh toán (VietQR) cực kỳ phổ biến tại Việt Nam. Bạn có thể quét mã từ điện thoại một cách an toàn và nhanh chóng.',
    culturalTakeawayEn: 'QR payments are widely accepted everywhere in Vietnam, from street food stalls to upscale cafes.',
    lines: [
      {
        id: 'd2-1',
        speakerId: 'role-khach',
        speakerVi: 'Khách',
        speakerEn: 'Customer',
        avatar: '👨‍🦱',
        textVi: 'Em ơi, cho anh xin hóa đơn tính tiền bàn số 4 nhé!',
        textEn: 'Excuse me, could I have the bill for table number 4 please?',
        phonetic: 'Em ơi, cho anh xin hóa đơn tính tiền bàn số 4 nhé!'
      },
      {
        id: 'd2-2',
        speakerId: 'role-thu-ngan',
        speakerVi: 'Thu ngân',
        speakerEn: 'Cashier',
        avatar: '👩‍💼',
        textVi: 'Dạ tổng cộng của anh hết hai trăm tám mươi ngàn (280.000đ) ạ.',
        textEn: 'Your total is two hundred eighty thousand dong, sir.',
        phonetic: 'Dạ tổng cộng của anh hết hai trăm tám mươi ngàn ạ.'
      },
      {
        id: 'd2-3',
        speakerId: 'role-khach',
        speakerVi: 'Khách',
        speakerEn: 'Customer',
        avatar: '👨‍🦱',
        textVi: 'Ở đây có nhận quét mã QR chuyển khoản không em?',
        textEn: 'Do you accept payment by bank transfer QR code here?',
        phonetic: 'Ở đây có nhận quét mã QR chuyển khoản không em?'
      },
      {
        id: 'd2-4',
        speakerId: 'role-thu-ngan',
        speakerVi: 'Thu ngân',
        speakerEn: 'Cashier',
        avatar: '👩‍💼',
        textVi: 'Dạ có, anh quét mã QR dán ngay trên bàn giùm em nghen!',
        textEn: 'Yes! Please scan the QR code sticker placed on your table!',
        phonetic: 'Dạ có, anh quét mã QR dán ngay trên bàn giùm em nghen!'
      },
      {
        id: 'd2-5',
        speakerId: 'role-khach',
        speakerVi: 'Khách',
        speakerEn: 'Customer',
        avatar: '👨‍🦱',
        textVi: 'Anh chuyển xong hai trăm tám mươi ngàn rồi, em kiểm tra nhé.',
        textEn: 'I’ve transferred 280,000đ, please check your screen.',
        phonetic: 'Anh chuyển xong hai trăm tám mươi ngàn rồi, em kiểm tra nhé.'
      },
      {
        id: 'd2-6',
        speakerId: 'role-thu-ngan',
        speakerVi: 'Thu ngân',
        speakerEn: 'Cashier',
        avatar: '👩‍💼',
        textVi: 'Dạ em nhận được rồi, em cảm ơn anh nhiều ạ!',
        textEn: 'Payment received! Thank you very much, sir!',
        phonetic: 'Dạ em nhận được rồi, em cảm ơn anh nhiều ạ!'
      }
    ]
  },

  3: {
    id: 'dialogue-lesson-3',
    titleVi: 'Gọi Món & Yêu Cầu Đặc Biệt Về Khẩu Vị',
    titleEn: 'Ordering Food with Taste Preferences',
    contextVi: 'Khách dặn nhân viên phục vụ không bỏ ớt và pha cà phê ít đường.',
    contextEn: 'A diner asks for no spicy chili and iced coffee with less sugar.',
    landmarkVi: 'Quán Cơm Tấm & Cà Phê Vỉa Hè',
    roles: [
      { id: 'role-khach', nameVi: 'Khách', nameEn: 'Customer', avatar: '👩‍🦰' },
      { id: 'role-phuc-vu', nameVi: 'Phục vụ', nameEn: 'Server', avatar: '🧑‍🍳' }
    ],
    culturalTakeawayVi: 'Đĩa rau sống và ly trà đá là nét hào sảng không thể thiếu khi ăn uống ở miền Nam.',
    culturalTakeawayEn: 'Fresh herb plates and iced tea are complimentary essentials in Vietnamese dining.',
    lines: [
      {
        id: 'd3-1',
        speakerId: 'role-phuc-vu',
        speakerVi: 'Phục vụ',
        speakerEn: 'Server',
        avatar: '🧑‍🍳',
        textVi: 'Dạ chào chị! Hôm nay chị muốn dùng món gì ạ?',
        textEn: 'Hello! What would you like to order today, ma’am?',
        phonetic: 'Dạ chào chị! Hôm nay chị muốn dùng món gì ạ?'
      },
      {
        id: 'd3-2',
        speakerId: 'role-khach',
        speakerVi: 'Khách',
        speakerEn: 'Customer',
        avatar: '👩‍🦰',
        textVi: 'Cho tôi một đĩa cơm tấm sườn trứng và một ly cà phê sữa đá.',
        textEn: 'Please give me broken rice with pork chop and egg, plus an iced milk coffee.',
        phonetic: 'Cho tôi một đĩa cơm tấm sườn trứng và một ly cà phê sữa đá.'
      },
      {
        id: 'd3-3',
        speakerId: 'role-phuc-vu',
        speakerVi: 'Phục vụ',
        speakerEn: 'Server',
        avatar: '🧑‍🍳',
        textVi: 'Dạ chị có ăn cay được không để bếp chuẩn bị nước mắm?',
        textEn: 'Can you eat spicy food so the kitchen can prepare the dipping sauce?',
        phonetic: 'Dạ chị có ăn cay được không để bếp chuẩn bị nước mắm?'
      },
      {
        id: 'd3-4',
        speakerId: 'role-khach',
        speakerVi: 'Khách',
        speakerEn: 'Customer',
        avatar: '👩‍🦰',
        textVi: 'Tôi không ăn cay được, đừng bỏ ớt nhé. Cà phê thì cho ít ngọt thôi.',
        textEn: 'I can’t eat spicy, no chili please. And less sugar in the coffee.',
        phonetic: 'Tôi không ăn cay được, đừng bỏ ớt nhé. Cà phê thì cho ít ngọt thôi.'
      },
      {
        id: 'd3-5',
        speakerId: 'role-phuc-vu',
        speakerVi: 'Phục vụ',
        speakerEn: 'Server',
        avatar: '🧑‍🍳',
        textVi: 'Dạ quán nhớ rồi, chị ngồi chờ năm phút có đồ ăn nóng hổi nghen!',
        textEn: 'Got it! Please take a seat, your hot meal will be ready in 5 minutes!',
        phonetic: 'Dạ quán nhớ rồi, chị ngồi chờ năm phút có đồ ăn nóng hổi nghen!'
      }
    ]
  },

  4: {
    id: 'dialogue-lesson-4',
    titleVi: 'Hỏi Đường & Phương Hướng Đi Lại',
    titleEn: 'Asking for Directions on the Street',
    contextVi: 'Khách hỏi đường người dân để đi bộ ra Nhà thờ Đức Bà và Bưu điện.',
    contextEn: 'A visitor asks a local pedestrian for directions to Notre Dame Cathedral.',
    landmarkVi: 'Công viên 30/4 (Quận 1)',
    roles: [
      { id: 'role-khach', nameVi: 'Khách', nameEn: 'Visitor', avatar: '🏃‍♂️' },
      { id: 'role-nguoi-dan', nameVi: 'Chú Ba', nameEn: 'Local Elder', avatar: '👨‍🦳' }
    ],
    culturalTakeawayVi: 'Người dân Sài Gòn rất hào sảng và nhiệt tình chỉ đường, luôn giải thích rõ ràng từng ngã tư.',
    culturalTakeawayEn: 'Locals in Saigon are exceptionally friendly and helpful when guiding lost travelers.',
    lines: [
      {
        id: 'd4-1',
        speakerId: 'role-khach',
        speakerVi: 'Khách',
        speakerEn: 'Visitor',
        avatar: '🏃‍♂️',
        textVi: 'Chú ơi, làm ơn cho con hỏi thăm đường ra Nhà thờ Đức Bà đi hướng nào ạ?',
        textEn: 'Excuse me sir, could you please tell me which way to Notre Dame Cathedral?',
        phonetic: 'Chú ơi, làm ơn cho con hỏi thăm đường ra Nhà thờ Đức Bà đi hướng nào ạ?'
      },
      {
        id: 'd4-2',
        speakerId: 'role-nguoi-dan',
        speakerVi: 'Chú Ba',
        speakerEn: 'Local Elder',
        avatar: '👨‍🦳',
        textVi: 'À con cứ đi thẳng đường này khoảng hai trăm mét, gặp ngã tư thì quẹo phải nghen!',
        textEn: 'Walk straight on this road about 200m, turn right at the traffic intersection!',
        phonetic: 'À con cứ đi thẳng đường này khoảng hai trăm mét, gặp ngã tư thì quẹo phải nghen!'
      },
      {
        id: 'd4-3',
        speakerId: 'role-khach',
        speakerVi: 'Khách',
        speakerEn: 'Visitor',
        avatar: '🏃‍♂️',
        textVi: 'Dạ từ đây đi bộ ra đó có xa không chú?',
        textEn: 'Is it far to walk there from here, sir?',
        phonetic: 'Dạ từ đây đi bộ ra đó có xa không chú?'
      },
      {
        id: 'd4-4',
        speakerId: 'role-nguoi-dan',
        speakerVi: 'Chú Ba',
        speakerEn: 'Local Elder',
        avatar: '👨‍🦳',
        textVi: 'Gần xịt hà! Đi bộ chừng năm phút là thấy nó nằm ngay đối diện Bưu điện đó.',
        textEn: 'Very close! A five-minute walk, right across from the Central Post Office.',
        phonetic: 'Gần xịt hà! Đi bộ chừng năm phút là thấy nó nằm ngay đối diện Bưu điện đó.'
      },
      {
        id: 'd4-5',
        speakerId: 'role-khach',
        speakerVi: 'Khách',
        speakerEn: 'Visitor',
        avatar: '🏃‍♂️',
        textVi: 'Dạ con hiểu rồi, con cảm ơn chú Ba nhiều lắm!',
        textEn: 'I understand now. Thank you so much, Uncle Ba!',
        phonetic: 'Dạ con hiểu rồi, con cảm ơn chú Ba nhiều lắm!'
      }
    ]
  },

  5: {
    id: 'dialogue-lesson-5',
    titleVi: 'Du Lịch, Mua Vé & Nhờ Chụp Hình Kỷ Niệm',
    titleEn: 'Sightseeing, Tickets & Asking for Photos',
    contextVi: 'Khách mua vé tham quan Dinh Độc Lập và nhờ nhân viên chụp giúp một tấm ảnh.',
    contextEn: 'A tourist buys entrance tickets at Independence Palace and asks for a photo.',
    landmarkVi: 'Dinh Độc Lập (Quận 1)',
    roles: [
      { id: 'role-du-khach', nameVi: 'Du khách', nameEn: 'Tourist', avatar: '🧗' },
      { id: 'role-quay-ve', nameVi: 'Chị bán vé', nameEn: 'Ticket Staff', avatar: '👩‍💼' }
    ],
    culturalTakeawayVi: 'Người Việt Nam rất mến khách và luôn nhiệt tình chụp hình kỷ niệm giúp bạn khi được nhờ.',
    culturalTakeawayEn: 'Vietnamese people warmly welcome travelers and are always delighted to help take photos.',
    lines: [
      {
        id: 'd5-1',
        speakerId: 'role-du-khach',
        speakerVi: 'Du khách',
        speakerEn: 'Tourist',
        avatar: '🧗',
        textVi: 'Chào chị, vé vào cổng tham quan Dinh Độc Lập bao nhiêu một người ạ?',
        textEn: 'Hello, how much is the entrance ticket per person for Independence Palace?',
        phonetic: 'Chào chị, vé vào cổng tham quan Dinh Độc Lập bao nhiêu một người ạ?'
      },
      {
        id: 'd5-2',
        speakerId: 'role-quay-ve',
        speakerVi: 'Chị bán vé',
        speakerEn: 'Ticket Staff',
        avatar: '👩‍💼',
        textVi: 'Dạ vé người lớn là sáu mươi ngàn (60k), mở cửa tham quan tới năm giờ chiều nghen anh.',
        textEn: 'Adult tickets are 60,000đ, and the palace is open until 5:00 PM, sir.',
        phonetic: 'Dạ vé người lớn là sáu mươi ngàn, mở cửa tham quan tới năm giờ chiều nghen anh.'
      },
      {
        id: 'd5-3',
        speakerId: 'role-du-khach',
        speakerVi: 'Du khách',
        speakerEn: 'Tourist',
        avatar: '🧗',
        textVi: 'Cho tôi mua hai vé người lớn. Chị chụp giùm tôi tấm hình kỷ niệm trước cổng được không?',
        textEn: 'Two adult tickets please. Could you take a souvenir photo for me in front of the gate?',
        phonetic: 'Cho tôi mua hai vé người lớn. Chị chụp giùm tôi tấm hình kỷ niệm trước cổng được không?'
      },
      {
        id: 'd5-4',
        speakerId: 'role-quay-ve',
        speakerVi: 'Chị bán vé',
        speakerEn: 'Ticket Staff',
        avatar: '👩‍💼',
        textVi: 'Dạ sẵn sàng liền! Anh đứng ngay giữa bãi cỏ canh góc cho đẹp nhé. Một, hai, ba cười nè!',
        textEn: 'Gladly! Stand right on the grass for a great angle. One, two, three, smile!',
        phonetic: 'Dạ sẵn sàng liền! Anh đứng ngay giữa bãi cỏ canh góc cho đẹp nhé. Một, hai, ba cười nè!'
      },
      {
        id: 'd5-5',
        speakerId: 'role-du-khach',
        speakerVi: 'Du khách',
        speakerEn: 'Tourist',
        avatar: '🧗',
        textVi: 'Ảnh đẹp và rõ nét lắm, cảm ơn chị rất nhiều!',
        textEn: 'The photo is clear and wonderful. Thank you so much!',
        phonetic: 'Ảnh đẹp và rõ nét lắm, cảm ơn chị rất nhiều!'
      }
    ]
  },

  // ==========================================
  // LESSON 6: THUÊ NHÀ, TIỆN ÍCH & ĐỜI SỐNG HÀNG NGÀY
  // ==========================================
  6: {
    id: 'dialogue-lesson-6',
    titleVi: 'Hỏi Thuê Căn Hộ & Tiền Điện Nước',
    titleEn: 'Renting an Apartment & Utility Bills',
    contextVi: 'Khách đến xem phòng trọ/chung cư, hỏi tiền thuê, tiền cọc và chi phí sinh hoạt hàng tháng.',
    contextEn: 'A tenant views an apartment, asking about rent, security deposit, and utilities.',
    landmarkVi: 'Khu Căn Hộ Chung Cư Quận 2 (Thảo Điền)',
    roles: [
      { id: 'role-khach-thue', nameVi: 'Khách thuê', nameEn: 'Tenant', avatar: '🧑‍💻' },
      { id: 'role-chu-nha', nameVi: 'Chủ nhà', nameEn: 'Landlord', avatar: '👨‍💼' }
    ],
    culturalTakeawayVi: 'Tại Việt Nam, tiền thuê nhà thường đặt cọc từ 1 đến 2 tháng. Tiền điện thường được tính riêng theo số kWh đồng hồ.',
    culturalTakeawayEn: 'Rental deposits in Vietnam are typically 1-2 months. Electricity is billed by metered kWh.',
    lines: [
      {
        id: 'd6-1',
        speakerId: 'role-khach-thue',
        speakerVi: 'Khách thuê',
        speakerEn: 'Tenant',
        avatar: '🧑‍💻',
        textVi: 'Chào anh, căn hộ một phòng ngủ này giá thuê một tháng bao nhiêu ạ?',
        textEn: 'Hello, how much is the monthly rent for this one-bedroom apartment?',
        phonetic: 'Chào anh, căn hộ một phòng ngủ này giá thuê một tháng bao nhiêu ạ?'
      },
      {
        id: 'd6-2',
        speakerId: 'role-chu-nha',
        speakerVi: 'Chủ nhà',
        speakerEn: 'Landlord',
        avatar: '👨‍💼',
        textVi: 'Dạ giá thuê là tám triệu một tháng, tiền cọc một tháng, hợp đồng một năm em nhé.',
        textEn: 'The rent is 8 million dong per month, 1-month deposit, 1-year lease agreement.',
        phonetic: 'Dạ giá thuê là tám triệu một tháng, tiền cọc một tháng, hợp đồng một năm em nhé.'
      },
      {
        id: 'd6-3',
        speakerId: 'role-khach-thue',
        speakerVi: 'Khách thuê',
        speakerEn: 'Tenant',
        avatar: '🧑‍💻',
        textVi: 'Các chi phí tiện ích như tiền điện, tiền nước và wifi tính thế nào vậy anh?',
        textEn: 'How are utilities like electricity, water, and wifi calculated?',
        phonetic: 'Các chi phí tiện ích như tiền điện, tiền nước và wifi tính thế nào vậy anh?'
      },
      {
        id: 'd6-4',
        speakerId: 'role-chu-nha',
        speakerVi: 'Chủ nhà',
        speakerEn: 'Landlord',
        avatar: '👨‍💼',
        textVi: 'Điện bốn ngàn một số (4k/kWh), nước một trăm ngàn một người, wifi miễn phí nghen!',
        textEn: 'Electricity is 4k per kWh, water is 100k per person, and high-speed wifi is free!',
        phonetic: 'Điện bốn ngàn một số, nước một trăm ngàn một người, wifi miễn phí nghen!'
      },
      {
        id: 'd6-5',
        speakerId: 'role-khach-thue',
        speakerVi: 'Khách thuê',
        speakerEn: 'Tenant',
        avatar: '🧑‍💻',
        textVi: 'Dạ phòng sạch đẹp và thoáng mát quá, ngày mai em qua ký hợp đồng nhận phòng nhé!',
        textEn: 'The room is clean and airy. I will come tomorrow to sign the lease and move in!',
        phonetic: 'Dạ phòng sạch đẹp và thoáng mát quá, ngày mai em qua ký hợp đồng nhận phòng nhé!'
      }
    ]
  },

  // ==========================================
  // LESSON 7: SỨC KHỎE, KHÁM BỆNH & HIỆU THUỐC
  // ==========================================
  7: {
    id: 'dialogue-lesson-7',
    titleVi: 'Mua Thuốc Tây & Mô Tả Triệu Chứng Sức Khỏe',
    titleEn: 'Buying Medicine & Explaining Symptoms',
    contextVi: 'Khách bị cảm cúm sốt nhẹ và đau đầu đến hiệu thuốc tây mua thuốc uống.',
    contextEn: 'A customer visits a local pharmacy to purchase flu and headache medicine.',
    landmarkVi: 'Hiệu Thuốc Tây Truyền Thống',
    roles: [
      { id: 'role-benh-nhan', nameVi: 'Khách', nameEn: 'Customer', avatar: '🤒' },
      { id: 'role-duoc-si', nameVi: 'Dược sĩ', nameEn: 'Pharmacist', avatar: '👩‍⚕️' }
    ],
    culturalTakeawayVi: 'Tại Việt Nam, các tiệm thuốc tây có ở khắp các con phố. Dược sĩ luôn hỏi kỹ triệu chứng để kê đúng liều lượng.',
    culturalTakeawayEn: 'Pharmacies are conveniently located on every street, where pharmacists advise suitable doses.',
    lines: [
      {
        id: 'd7-1',
        speakerId: 'role-benh-nhan',
        speakerVi: 'Khách',
        speakerEn: 'Customer',
        avatar: '🤒',
        textVi: 'Chào dược sĩ, tôi bị đau đầu, sổ mũi và hơi sốt nhẹ từ tối hôm qua.',
        textEn: 'Hello pharmacist, I have a headache, runny nose, and slight fever since last night.',
        phonetic: 'Chào dược sĩ, tôi bị đau đầu, sổ mũi và hơi sốt nhẹ từ tối hôm qua.'
      },
      {
        id: 'd7-2',
        speakerId: 'role-duoc-si',
        speakerVi: 'Dược sĩ',
        speakerEn: 'Pharmacist',
        avatar: '👩‍⚕️',
        textVi: 'Dạ anh có bị dị ứng với thành phần thuốc hạ sốt paracetamol hay kháng sinh nào không?',
        textEn: 'Do you have any allergies to paracetamol or any antibiotics, sir?',
        phonetic: 'Dạ anh có bị dị ứng với thành phần thuốc hạ sốt paracetamol hay kháng sinh nào không?'
      },
      {
        id: 'd7-3',
        speakerId: 'role-benh-nhan',
        speakerVi: 'Khách',
        speakerEn: 'Customer',
        avatar: '🤒',
        textVi: 'Tôi không bị dị ứng gì cả, bán cho tôi liều thuốc uống trong ba ngày nhé.',
        textEn: 'I have no allergies, please give me a 3-day course of medicine.',
        phonetic: 'Tôi không bị dị ứng gì cả, bán cho tôi liều thuốc uống trong ba ngày nhé.'
      },
      {
        id: 'd7-4',
        speakerId: 'role-duoc-si',
        speakerVi: 'Dược sĩ',
        speakerEn: 'Pharmacist',
        avatar: '👩‍⚕️',
        textVi: 'Dạ đây là thuốc hạ sốt và giảm đau, uống sau khi ăn no và nhớ uống nhiều nước ấm nghen!',
        textEn: 'Here is fever reducer and pain relief. Take after meals and drink plenty of warm water!',
        phonetic: 'Dạ đây là thuốc hạ sốt và giảm đau, uống sau khi ăn no và nhớ uống nhiều nước ấm nghen!'
      },
      {
        id: 'd7-5',
        speakerId: 'role-benh-nhan',
        speakerVi: 'Khách',
        speakerEn: 'Customer',
        avatar: '🤒',
        textVi: 'Dạ của tôi hết bao nhiêu tiền? Tôi có thể chuyển khoản được không?',
        textEn: 'How much is it in total? Can I pay by bank transfer?',
        phonetic: 'Dạ của tôi hết bao nhiêu tiền? Tôi có thể chuyển khoản được không?'
      },
      {
        id: 'd7-6',
        speakerId: 'role-duoc-si',
        speakerVi: 'Dược sĩ',
        speakerEn: 'Pharmacist',
        avatar: '👩‍⚕️',
        textVi: 'Dạ của anh hết tám mươi lăm ngàn (85k), anh quét mã QR trước quầy giùm em ạ!',
        textEn: 'It is 85,000đ total, please scan the QR code right on the counter!',
        phonetic: 'Dạ của anh hết tám mươi lăm ngàn, anh quét mã QR trước quầy giùm em ạ!'
      }
    ]
  },

  // ==========================================
  // LESSON 8: THỜI TIẾT, MƯA NGẬP & GIỜ CAO ĐIỂM
  // ==========================================
  8: {
    id: 'dialogue-lesson-8',
    titleVi: 'Thời Tiết Mưa Rào & Tránh Kẹt Xe Giờ Cao Điểm',
    titleEn: 'Tropical Downpours & Rush Hour Traffic',
    contextVi: 'Hai người bạn đồng nghiệp dặn nhau mang áo mưa và tìm chỗ trú mưa tránh kẹt xe tan tầm.',
    contextEn: 'Two colleagues remind each other to carry raincoats and avoid rush hour traffic jams.',
    landmarkVi: 'Cầu Sài Gòn & Tuyến Đường Giờ Tan Tầm',
    roles: [
      { id: 'role-minh', nameVi: 'Minh', nameEn: 'Minh', avatar: '🛵' },
      { id: 'role-nam', nameVi: 'Nam', nameEn: 'Nam', avatar: '🎒' }
    ],
    culturalTakeawayVi: 'Thời tiết miền Nam có hai mùa mưa và nắng. Cơn mưa rào thường đến nhanh đi nhanh, người dân luôn có sẵn áo mưa trong cốp xe máy.',
    culturalTakeawayEn: 'Southern Vietnam has wet and dry seasons. Rainstorms are sudden and short; locals always carry raincoats in their scooters.',
    lines: [
      {
        id: 'd8-1',
        speakerId: 'role-minh',
        speakerVi: 'Minh',
        speakerEn: 'Minh',
        avatar: '🛵',
        textVi: 'Nam ơi, nhìn trời chuyển mây đen kìa, chắc sắp có cơn mưa rào lớn đó!',
        textEn: 'Nam, look at those dark clouds, a big tropical rainstorm is coming!',
        phonetic: 'Nam ơi, nhìn trời chuyển mây đen kìa, chắc sắp có cơn mưa rào lớn đó!'
      },
      {
        id: 'd8-2',
        speakerId: 'role-nam',
        speakerVi: 'Nam',
        speakerEn: 'Nam',
        avatar: '🎒',
        textVi: 'May quá tôi luôn cất sẵn một bộ áo mưa cánh dơi trong cốp xe máy rồi nè.',
        textEn: 'Luckily I always keep a poncho raincoat ready under my scooter seat.',
        phonetic: 'May quá tôi luôn cất sẵn một bộ áo mưa cánh dơi trong cốp xe máy rồi nè.'
      },
      {
        id: 'd8-3',
        speakerId: 'role-minh',
        speakerVi: 'Minh',
        speakerEn: 'Minh',
        avatar: '🛵',
        textVi: 'Giờ này đúng năm rưỡi chiều, giờ cao điểm đường nào cũng kẹt xe dữ dội lắm.',
        textEn: 'It is 5:30 PM right now, rush hour traffic is completely jammed everywhere.',
        phonetic: 'Giờ này đúng năm rưỡi chiều, giờ cao điểm đường nào cũng kẹt xe dữ dội lắm.'
      },
      {
        id: 'd8-4',
        speakerId: 'role-nam',
        speakerVi: 'Nam',
        speakerEn: 'Nam',
        avatar: '🎒',
        textVi: 'Vậy tụi mình tấp vào quán cà phê trú mưa, đợi hết kẹt xe rồi hẵng về nghen!',
        textEn: 'Let’s pull into a coffee shop to shelter from rain, and wait until traffic clears!',
        phonetic: 'Vậy tụi mình tấp vào quán cà phê trú mưa, đợi hết kẹt xe rồi hẵng về nghen!'
      },
      {
        id: 'd8-5',
        speakerId: 'role-minh',
        speakerVi: 'Minh',
        speakerEn: 'Minh',
        avatar: '🛵',
        textVi: 'Đồng ý luôn! Vừa an toàn, khô ráo lại vừa được uống nước ngắm mưa rơi.',
        textEn: 'Agreed! It’s safe, stays dry, and we get to enjoy watching the rain.',
        phonetic: 'Đồng ý luôn! Vừa an toàn, khô ráo lại vừa được uống nước ngắm mưa rơi.'
      }
    ]
  },

  // ==========================================
  // LESSON 9: LÀM ĐẸP, CẮT TÓC, SPA & DỊCH VỤ
  // ==========================================
  9: {
    id: 'dialogue-lesson-9',
    titleVi: 'Tại Tiệm Cắt Tóc & Gội Đầu Dưỡng Sinh',
    titleEn: 'At the Barbershop & Herbal Head Spa',
    contextVi: 'Khách đến tiệm cắt tóc yêu cầu cắt tỉa gọn gàng và trải nghiệm dịch vụ gội đầu thư giãn.',
    contextEn: 'A customer visits a hair salon for a neat trim and relaxing herbal wash.',
    landmarkVi: 'Tiệm Cắt Tóc & Salon Phố Cổ',
    roles: [
      { id: 'role-khach', nameVi: 'Khách', nameEn: 'Customer', avatar: '💇‍♂️' },
      { id: 'role-tho-toc', nameVi: 'Thợ tóc', nameEn: 'Stylist', avatar: '✂️' }
    ],
    culturalTakeawayVi: 'Dịch vụ cắt tóc và gội đầu dưỡng sinh bằng thảo dược là nét sinh hoạt thư giãn rất phổ biến và có giá cả rất hợp lý tại Việt Nam.',
    culturalTakeawayEn: 'Herbal hair washes and barbershop grooming are immensely popular, relaxing, and affordable in Vietnam.',
    lines: [
      {
        id: 'd9-1',
        speakerId: 'role-khach',
        speakerVi: 'Khách',
        speakerEn: 'Customer',
        avatar: '💇‍♂️',
        textVi: 'Chào em, anh muốn cắt tóc ngắn gọn gàng và gội đầu thư giãn nhé.',
        textEn: 'Hello, I’d like a neat haircut trim and a relaxing shampoo wash please.',
        phonetic: 'Chào em, anh muốn cắt tóc ngắn gọn gàng và gội đầu thư giãn nhé.'
      },
      {
        id: 'd9-2',
        speakerId: 'role-tho-toc',
        speakerVi: 'Thợ tóc',
        speakerEn: 'Stylist',
        avatar: '✂️',
        textVi: 'Dạ anh muốn cắt theo kiểu nào ạ? Cắt ngắn hai bên tai hay chỉ tỉa bớt thôi anh?',
        textEn: 'What style do you prefer? Short on the sides or just a light trim on top?',
        phonetic: 'Dạ anh muốn cắt theo kiểu nào ạ? Cắt ngắn hai bên tai hay chỉ tỉa bớt thôi anh?'
      },
      {
        id: 'd9-3',
        speakerId: 'role-khach',
        speakerVi: 'Khách',
        speakerEn: 'Customer',
        avatar: '💇‍♂️',
        textVi: 'Cắt ngắn hai bên giùm anh, còn ở trên đỉnh đầu thì tỉa mỏng thôi, đừng cắt quá ngắn nhé.',
        textEn: 'Short on both sides please, and just thin out the top lightly, don’t cut too short.',
        phonetic: 'Cắt ngắn hai bên giùm anh, còn ở trên đỉnh đầu thì tỉa mỏng thôi, đừng cắt quá ngắn nhé.'
      },
      {
        id: 'd9-4',
        speakerId: 'role-tho-toc',
        speakerVi: 'Thợ tóc',
        speakerEn: 'Stylist',
        avatar: '✂️',
        textVi: 'Dạ em hiểu ý anh rồi! Cắt tóc xong mời anh qua giường gội đầu massage thảo dược nghen.',
        textEn: 'Understood perfectly! After cutting, I’ll invite you over for herbal scalp massage.',
        phonetic: 'Dạ em hiểu ý anh rồi! Cắt tóc xong mời anh qua giường gội đầu massage thảo dược nghen.'
      },
      {
        id: 'd9-5',
        speakerId: 'role-khach',
        speakerVi: 'Khách',
        speakerEn: 'Customer',
        avatar: '💇‍♂️',
        textVi: 'Cắt xong đẹp và mát mẻ quá! Tổng cộng hết bao nhiêu để anh gửi tiền và gửi thêm tiền boa cho em nhé?',
        textEn: 'Looks great and feels so fresh! What is the total so I can pay and leave you a tip?',
        phonetic: 'Cắt xong đẹp và mát mẻ quá! Tổng cộng hết bao nhiêu để anh gửi tiền và tiền boa nhé?'
      }
    ]
  },

  // ==========================================
  // LESSON 10: KẾT BẠN, GIAO LƯU & MỜI ĐI ĂN UỐNG
  // ==========================================
  10: {
    id: 'dialogue-lesson-10',
    titleVi: 'Hẹn Đi Cà Phê, Ăn Ốc & Kết Bạn Zalo',
    titleEn: 'Coffee Meetup, Street Snails & Making Friends',
    contextVi: 'Hai người bạn hẹn nhau đi cà phê cuối tuần, rủ nhau đi ăn ốc vỉa hè và kết bạn qua Zalo.',
    contextEn: 'Two friends arrange a weekend coffee meetup, plan to eat street snails, and connect on Zalo.',
    landmarkVi: 'Phố Đi Bộ Nguyễn Huệ & Cà Phê Chung Cư',
    roles: [
      { id: 'role-minh', nameVi: 'Minh', nameEn: 'Minh', avatar: '🙋‍♂️' },
      { id: 'role-alex', nameVi: 'Alex', nameEn: 'Alex', avatar: '🙋‍♀️' }
    ],
    culturalTakeawayVi: 'Tại Việt Nam, "đi cà phê" là lời mời thân thiện để gặp gỡ, trò chuyện và thắt chặt tình bạn chứ không đơn thuần chỉ là uống nước.',
    culturalTakeawayEn: 'In Vietnam, "đi cà phê" (let’s get coffee) is the universal friendly invitation to hang out, socialize, and bond.',
    lines: [
      {
        id: 'd10-1',
        speakerId: 'role-minh',
        speakerVi: 'Minh',
        speakerEn: 'Minh',
        avatar: '🙋‍♂️',
        textVi: 'Alex ơi, cuối tuần này bạn có rảnh không? Tụi mình đi cà phê trò chuyện nhé!',
        textEn: 'Alex, are you free this weekend? Let’s go get coffee and catch up!',
        phonetic: 'Alex ơi, cuối tuần này bạn có rảnh không? Tụi mình đi cà phê trò chuyện nhé!'
      },
      {
        id: 'd10-2',
        speakerId: 'role-alex',
        speakerVi: 'Alex',
        speakerEn: 'Alex',
        avatar: '🙋‍♀️',
        textVi: 'Thứ Bảy tôi rảnh nè! Mình tìm quán cà phê nào có ban công ngắm phố nghen.',
        textEn: 'I’m free on Saturday! Let’s find a cafe with a balcony overlooking the street.',
        phonetic: 'Thứ Bảy tôi rảnh nè! Mình tìm quán cà phê nào có ban công ngắm phố nghen.'
      },
      {
        id: 'd10-3',
        speakerId: 'role-minh',
        speakerVi: 'Minh',
        speakerEn: 'Minh',
        avatar: '🙋‍♂️',
        textVi: 'Tuyệt vời luôn! Uống cà phê xong buổi tối tụi mình đi ăn ốc vỉa hè, bữa nay Minh đãi Alex nghen!',
        textEn: 'Awesome! After coffee, let’s eat seafood snails street-style, my treat today!',
        phonetic: 'Tuyệt vời luôn! Uống cà phê xong tụi mình đi ăn ốc vỉa hè, bữa nay Minh đãi Alex nghen!'
      },
      {
        id: 'd10-4',
        speakerId: 'role-alex',
        speakerVi: 'Alex',
        speakerEn: 'Alex',
        avatar: '🙋‍♀️',
        textVi: 'Cảm ơn Minh nhiều nha! Cho Alex xin số điện thoại hoặc Zalo để nhắn tin địa chỉ nhé.',
        textEn: 'Thank you so much Minh! Can I get your phone number or Zalo to text the address?',
        phonetic: 'Cảm ơn Minh nhiều nha! Cho Alex xin số điện thoại hoặc Zalo để nhắn tin nhé.'
      },
      {
        id: 'd10-5',
        speakerId: 'role-minh',
        speakerVi: 'Minh',
        speakerEn: 'Minh',
        avatar: '🙋‍♂️',
        textVi: 'Đây là mã QR Zalo của mình nè, Alex quét một cái là kết bạn được liền!',
        textEn: 'Here is my Zalo QR code, scan it and we will be connected right away!',
        phonetic: 'Đây là mã QR Zalo của mình nè, Alex quét một cái là kết bạn được liền!'
      }
    ]
  }
};
