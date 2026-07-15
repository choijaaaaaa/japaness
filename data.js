// JLPT N5~N1 단어 데이터. WHY: 백엔드/DB 없이 정적 배포(GitHub Pages)만으로 동작하도록 데이터를 코드에 내장.
// 각 항목: level, kanji(표기), reading(히라가나), korean(한글 발음 표기),
//          meaning(한국어 뜻), example(예문), exampleReading, exampleKorean, exampleMeaning
const VOCAB = [
  // ---------- N5 ----------
  { level: "N5", kanji: "食べる", reading: "たべる", korean: "다베루", meaning: "먹다",
    example: "朝ごはんを食べます。", exampleReading: "あさごはんをたべます。", exampleKorean: "아사고항오 다베마스", exampleMeaning: "아침밥을 먹습니다.",
    breakdown: [
      { word: "朝ごはん", reading: "あさごはん", meaning: "아침밥" },
      { word: "食べます", reading: "たべます", meaning: "먹습니다 (食べる의 정중형)" },
    ] },
  { level: "N5", kanji: "飲む", reading: "のむ", korean: "노무", meaning: "마시다",
    example: "水を飲みます。", exampleReading: "みずをのみます。", exampleKorean: "미즈오 노미마스", exampleMeaning: "물을 마십니다.",
    breakdown: [
      { word: "を", reading: "を", meaning: "~을/를 (목적격 조사)" },
      { word: "飲みます", reading: "のみます", meaning: "마십니다 (飲む의 정중형)" },
    ] },
  { level: "N5", kanji: "学校", reading: "がっこう", korean: "각코-", meaning: "학교",
    example: "毎日学校へ行きます。", exampleReading: "まいにちがっこうへいきます。", exampleKorean: "마이니치 각코-에 이키마스", exampleMeaning: "매일 학교에 갑니다.",
    breakdown: [
      { word: "毎日", reading: "まいにち", meaning: "매일" },
      { word: "へ", reading: "へ", meaning: "~으로 (방향 조사)" },
    ] },
  { level: "N5", kanji: "先生", reading: "せんせい", korean: "센세-", meaning: "선생님",
    example: "あの人は英語の先生です。", exampleReading: "あのひとはえいごのせんせいです。", exampleKorean: "아노 히토와 에-고노 센세-데스", exampleMeaning: "저 사람은 영어 선생님입니다.",
    breakdown: [
      { word: "あの人", reading: "あのひと", meaning: "저 사람" },
      { word: "の", reading: "の", meaning: "~의 (소유·소속)" },
    ] },
  { level: "N5", kanji: "友達", reading: "ともだち", korean: "도모다치", meaning: "친구",
    example: "友達と映画を見ます。", exampleReading: "ともだちとえいがをみます。", exampleKorean: "도모다치토 에-가오 미마스", exampleMeaning: "친구와 영화를 봅니다.",
    breakdown: [
      { word: "と", reading: "と", meaning: "~와/과 (동반)" },
      { word: "見ます", reading: "みます", meaning: "봅니다 (見る의 정중형)" },
    ] },
  { level: "N5", kanji: "家", reading: "いえ", korean: "이에", meaning: "집",
    example: "家で本を読みます。", exampleReading: "いえでほんをよみます。", exampleKorean: "이에데 홍오 요미마스", exampleMeaning: "집에서 책을 읽습니다.",
    breakdown: [
      { word: "で", reading: "で", meaning: "~에서 (장소 조사)" },
      { word: "読みます", reading: "よみます", meaning: "읽습니다 (読む의 정중형)" },
    ] },
  { level: "N5", kanji: "水", reading: "みず", korean: "미즈", meaning: "물",
    example: "この水はとても冷たいです。", exampleReading: "このみずはとてもつめたいです。", exampleKorean: "코노 미즈와 도테모 츠메타이데스", exampleMeaning: "이 물은 아주 차갑습니다.",
    breakdown: [
      { word: "この", reading: "この", meaning: "이 (지시어)" },
      { word: "冷たい", reading: "つめたい", meaning: "차갑다" },
    ] },
  { level: "N5", kanji: "本", reading: "ほん", korean: "홍", meaning: "책",
    example: "図書館で本を借りました。", exampleReading: "としょかんでほんをかりました。", exampleKorean: "토쇼칸데 홍오 카리마시타", exampleMeaning: "도서관에서 책을 빌렸습니다.",
    breakdown: [
      { word: "図書館", reading: "としょかん", meaning: "도서관" },
      { word: "借りました", reading: "かりました", meaning: "빌렸습니다 (借りる의 과거형)" },
    ] },
  { level: "N5", kanji: "電話", reading: "でんわ", korean: "뎅와", meaning: "전화",
    example: "母に電話をかけます。", exampleReading: "ははにでんわをかけます。", exampleKorean: "하하니 뎅와오 카케마스", exampleMeaning: "엄마에게 전화를 겁니다.",
    breakdown: [
      { word: "母", reading: "はは", meaning: "어머니" },
      { word: "かけます", reading: "かけます", meaning: "겁니다 (전화를 かける)" },
    ] },
  { level: "N5", kanji: "今日", reading: "きょう", korean: "쿄-", meaning: "오늘",
    example: "今日は天気がいいです。", exampleReading: "きょうはてんきがいいです。", exampleKorean: "쿄-와 텡키가 이-데스", exampleMeaning: "오늘은 날씨가 좋습니다.",
    breakdown: [
      { word: "天気", reading: "てんき", meaning: "날씨" },
    ] },
  { level: "N5", kanji: "明日", reading: "あした", korean: "아시타", meaning: "내일",
    example: "明日、友達に会います。", exampleReading: "あした、ともだちにあいます。", exampleKorean: "아시타 도모다치니 아이마스", exampleMeaning: "내일 친구를 만납니다.",
    breakdown: [
      { word: "に", reading: "に", meaning: "~를/에게 (대상 조사)" },
      { word: "会います", reading: "あいます", meaning: "만납니다 (会う의 정중형)" },
    ] },
  { level: "N5", kanji: "会社", reading: "かいしゃ", korean: "카이샤", meaning: "회사",
    example: "父は会社で働いています。", exampleReading: "ちちはかいしゃではたらいています。", exampleKorean: "치치와 카이샤데 하타라이테이마스", exampleMeaning: "아버지는 회사에서 일하고 있습니다.",
    breakdown: [
      { word: "父", reading: "ちち", meaning: "아버지" },
      { word: "働いています", reading: "はたらいています", meaning: "일하고 있습니다 (진행형)" },
    ] },
  { level: "N5", kanji: "車", reading: "くるま", korean: "쿠루마", meaning: "자동차",
    example: "新しい車を買いました。", exampleReading: "あたらしいくるまをかいました。", exampleKorean: "아타라시- 쿠루마오 카이마시타", exampleMeaning: "새 차를 샀습니다.",
    breakdown: [
      { word: "新しい", reading: "あたらしい", meaning: "새롭다" },
      { word: "買いました", reading: "かいました", meaning: "샀습니다 (買う의 과거형)" },
    ] },
  { level: "N5", kanji: "天気", reading: "てんき", korean: "텡키", meaning: "날씨",
    example: "明日の天気はどうですか。", exampleReading: "あしたのてんきはどうですか。", exampleKorean: "아시타노 텡키와 도-데스카", exampleMeaning: "내일 날씨는 어떻습니까?",
    breakdown: [
      { word: "どうですか", reading: "どうですか", meaning: "어떻습니까?" },
    ] },
  { level: "N5", kanji: "好き", reading: "すき", korean: "스키", meaning: "좋아함",
    example: "私は音楽が好きです。", exampleReading: "わたしはおんがくがすきです。", exampleKorean: "와타시와 옹가쿠가 스키데스", exampleMeaning: "저는 음악을 좋아합니다.",
    breakdown: [
      { word: "が", reading: "が", meaning: "~을/를 (好き 앞에서는 が 사용)" },
    ] },
  { level: "N5", kanji: "大きい", reading: "おおきい", korean: "오-키-", meaning: "크다",
    example: "この犬はとても大きいです。", exampleReading: "このいぬはとてもおおきいです。", exampleKorean: "코노 이누와 도테모 오-키-데스", exampleMeaning: "이 개는 아주 큽니다.",
    breakdown: [
      { word: "とても", reading: "とても", meaning: "아주, 매우" },
    ] },
  { level: "N5", kanji: "小さい", reading: "ちいさい", korean: "치-사이", meaning: "작다",
    example: "小さい猫がいます。", exampleReading: "ちいさいねこがいます。", exampleKorean: "치-사이 네코가 이마스", exampleMeaning: "작은 고양이가 있습니다.",
    breakdown: [
      { word: "います", reading: "います", meaning: "있습니다 (생물의 존재)" },
    ] },
  { level: "N5", kanji: "走る", reading: "はしる", korean: "하시루", meaning: "달리다",
    example: "毎朝公園を走ります。", exampleReading: "まいあさこうえんをはしります。", exampleKorean: "마이아사 코-엔오 하시리마스", exampleMeaning: "매일 아침 공원을 달립니다.",
    breakdown: [
      { word: "毎朝", reading: "まいあさ", meaning: "매일 아침" },
      { word: "走ります", reading: "はしります", meaning: "달립니다 (走る의 정중형)" },
    ] },
  { level: "N5", kanji: "見る", reading: "みる", korean: "미루", meaning: "보다",
    example: "テレビを見るのが好きです。", exampleReading: "テレビをみるのがすきです。", exampleKorean: "테레비오 미루노가 스키데스", exampleMeaning: "텔레비전 보는 것을 좋아합니다.",
    breakdown: [
      { word: "の", reading: "の", meaning: "~하는 것 (동사를 명사화)" },
    ] },
  { level: "N5", kanji: "買う", reading: "かう", korean: "카우", meaning: "사다",
    example: "スーパーで野菜を買います。", exampleReading: "スーパーでやさいをかいます。", exampleKorean: "스-파-데 야사이오 카이마스", exampleMeaning: "슈퍼에서 채소를 삽니다.",
    breakdown: [
      { word: "スーパー", reading: "スーパー", meaning: "슈퍼마켓" },
    ] },

  { level: "N5", kanji: "犬", reading: "いぬ", korean: "이누", meaning: "개",
    example: "公園で犬と遊びます。", exampleReading: "こうえんでいぬとあそびます。", exampleKorean: "코-엔데 이누토 아소비마스", exampleMeaning: "공원에서 개와 놉니다.",
    breakdown: [
      { word: "遊びます", reading: "あそびます", meaning: "놉니다 (遊ぶ의 정중형)" },
    ] },
  { level: "N5", kanji: "猫", reading: "ねこ", korean: "네코", meaning: "고양이",
    example: "うちには猫が二匹います。", exampleReading: "うちにはねこがにひきいます。", exampleKorean: "우치니와 네코가 니히키 이마스", exampleMeaning: "우리 집에는 고양이가 두 마리 있습니다.",
    breakdown: [
      { word: "二匹", reading: "にひき", meaning: "두 마리 (동물 세는 단위)" },
    ] },
  { level: "N5", kanji: "学生", reading: "がくせい", korean: "각세-", meaning: "학생",
    example: "私は大学の学生です。", exampleReading: "わたしはだいがくのがくせいです。", exampleKorean: "와타시와 다이가쿠노 각세-데스", exampleMeaning: "저는 대학교 학생입니다.",
    breakdown: [
      { word: "大学", reading: "だいがく", meaning: "대학교" },
    ] },
  { level: "N5", kanji: "病院", reading: "びょういん", korean: "뵤-잉", meaning: "병원",
    example: "頭が痛くて病院へ行きました。", exampleReading: "あたまがいたくてびょういんへいきました。", exampleKorean: "아타마가 이타쿠테 뵤-잉에 이키마시타", exampleMeaning: "머리가 아파서 병원에 갔습니다.",
    breakdown: [
      { word: "痛くて", reading: "いたくて", meaning: "아파서 (痛い의 て형)" },
    ] },
  { level: "N5", kanji: "銀行", reading: "ぎんこう", korean: "깅코-", meaning: "은행",
    example: "銀行でお金を下ろしました。", exampleReading: "ぎんこうでおかねをおろしました。", exampleKorean: "깅코-데 오카네오 오로시마시타", exampleMeaning: "은행에서 돈을 인출했습니다.",
    breakdown: [
      { word: "下ろしました", reading: "おろしました", meaning: "인출했습니다" },
    ] },
  { level: "N5", kanji: "駅", reading: "えき", korean: "에키", meaning: "역",
    example: "駅で友達を待っています。", exampleReading: "えきでともだちをまっています。", exampleKorean: "에키데 도모다치오 맛테이마스", exampleMeaning: "역에서 친구를 기다리고 있습니다.",
    breakdown: [
      { word: "待っています", reading: "まっています", meaning: "기다리고 있습니다 (진행형)" },
    ] },
  { level: "N5", kanji: "公園", reading: "こうえん", korean: "코-엔", meaning: "공원",
    example: "子供たちが公園で遊んでいます。", exampleReading: "こどもたちがこうえんであそんでいます。", exampleKorean: "코도모타치가 코-엔데 아손데이마스", exampleMeaning: "아이들이 공원에서 놀고 있습니다.",
    breakdown: [
      { word: "子供たち", reading: "こどもたち", meaning: "아이들" },
    ] },
  { level: "N5", kanji: "花", reading: "はな", korean: "하나", meaning: "꽃",
    example: "庭にきれいな花が咲きました。", exampleReading: "にわにきれいなはながさきました。", exampleKorean: "니와니 키레-나 하나가 사키마시타", exampleMeaning: "마당에 예쁜 꽃이 피었습니다.",
    breakdown: [
      { word: "きれいな", reading: "きれいな", meaning: "예쁜 (な형용사)" },
      { word: "咲きました", reading: "さきました", meaning: "피었습니다" },
    ] },
  { level: "N5", kanji: "空", reading: "そら", korean: "소라", meaning: "하늘",
    example: "今日の空はとても青いです。", exampleReading: "きょうのそらはとてもあおいです。", exampleKorean: "쿄-노 소라와 도테모 아오이데스", exampleMeaning: "오늘 하늘은 아주 파랗습니다.",
    breakdown: [
      { word: "青い", reading: "あおい", meaning: "파랗다" },
    ] },
  { level: "N5", kanji: "山", reading: "やま", korean: "야마", meaning: "산",
    example: "週末に山に登ります。", exampleReading: "しゅうまつにやまにのぼります。", exampleKorean: "슈-마츠니 야마니 노보리마스", exampleMeaning: "주말에 산에 오릅니다.",
    breakdown: [
      { word: "登ります", reading: "のぼります", meaning: "오릅니다 (登る의 정중형)" },
    ] },
  { level: "N5", kanji: "海", reading: "うみ", korean: "우미", meaning: "바다",
    example: "夏は海で泳ぎたいです。", exampleReading: "なつはうみでおよぎたいです。", exampleKorean: "나츠와 우미데 오요기타이데스", exampleMeaning: "여름에는 바다에서 수영하고 싶습니다.",
    breakdown: [
      { word: "泳ぎたいです", reading: "およぎたいです", meaning: "수영하고 싶습니다 (泳ぐ+たい)" },
    ] },
  { level: "N5", kanji: "朝", reading: "あさ", korean: "아사", meaning: "아침",
    example: "朝は六時に起きます。", exampleReading: "あさはろくじにおきます。", exampleKorean: "아사와 로쿠지니 오키마스", exampleMeaning: "아침에는 6시에 일어납니다.",
    breakdown: [
      { word: "六時に", reading: "ろくじに", meaning: "6시에" },
    ] },
  { level: "N5", kanji: "夜", reading: "よる", korean: "요루", meaning: "밤",
    example: "夜は静かに本を読みます。", exampleReading: "よるはしずかにほんをよみます。", exampleKorean: "요루와 시즈카니 홍오 요미마스", exampleMeaning: "밤에는 조용히 책을 읽습니다.",
    breakdown: [
      { word: "静かに", reading: "しずかに", meaning: "조용히 (な형용사+に)" },
    ] },
  { level: "N5", kanji: "昼", reading: "ひる", korean: "히루", meaning: "낮",
    example: "昼にレストランで食事をします。", exampleReading: "ひるにレストランでしょくじをします。", exampleKorean: "히루니 레스토랑데 쇼쿠지오 시마스", exampleMeaning: "낮에 레스토랑에서 식사를 합니다.",
    breakdown: [
      { word: "食事をします", reading: "しょくじをします", meaning: "식사를 합니다" },
    ] },
  { level: "N5", kanji: "週末", reading: "しゅうまつ", korean: "슈-마츠", meaning: "주말",
    example: "週末は家族と過ごします。", exampleReading: "しゅうまつはかぞくとすごします。", exampleKorean: "슈-마츠와 카조쿠토 스고시마스", exampleMeaning: "주말은 가족과 보냅니다.",
    breakdown: [
      { word: "過ごします", reading: "すごします", meaning: "보냅니다 (過ごす의 정중형)" },
    ] },
  { level: "N5", kanji: "時間", reading: "じかん", korean: "지캉", meaning: "시간",
    example: "時間がないので急ぎましょう。", exampleReading: "じかんがないのでいそぎましょう。", exampleKorean: "지캉가 나이노데 이소기마쇼-", exampleMeaning: "시간이 없으니 서두릅시다.",
    breakdown: [
      { word: "ので", reading: "ので", meaning: "~해서 (이유)" },
      { word: "急ぎましょう", reading: "いそぎましょう", meaning: "서두릅시다" },
    ] },
  { level: "N5", kanji: "部屋", reading: "へや", korean: "헤야", meaning: "방",
    example: "自分の部屋を掃除しました。", exampleReading: "じぶんのへやをそうじしました。", exampleKorean: "지분노 헤야오 소-지 시마시타", exampleMeaning: "제 방을 청소했습니다.",
    breakdown: [
      { word: "自分の", reading: "じぶんの", meaning: "자신의" },
    ] },
  { level: "N5", kanji: "教室", reading: "きょうしつ", korean: "쿄-시츠", meaning: "교실",
    example: "教室で日本語を勉強します。", exampleReading: "きょうしつでにほんごをべんきょうします。", exampleKorean: "쿄-시츠데 니홍고오 벵쿄- 시마스", exampleMeaning: "교실에서 일본어를 공부합니다.",
    breakdown: [
      { word: "日本語", reading: "にほんご", meaning: "일본어" },
    ] },
  { level: "N5", kanji: "医者", reading: "いしゃ", korean: "이샤", meaning: "의사",
    example: "兄は医者になりました。", exampleReading: "あにはいしゃになりました。", exampleKorean: "아니와 이샤니 나리마시타", exampleMeaning: "형은 의사가 되었습니다.",
    breakdown: [
      { word: "になりました", reading: "になりました", meaning: "~이 되었습니다" },
    ] },
  { level: "N5", kanji: "音楽", reading: "おんがく", korean: "옹가쿠", meaning: "음악",
    example: "電車の中で音楽を聞きます。", exampleReading: "でんしゃのなかでおんがくをききます。", exampleKorean: "덴샤노 나카데 옹가쿠오 키키마스", exampleMeaning: "전철 안에서 음악을 듣습니다.",
    breakdown: [
      { word: "電車の中で", reading: "でんしゃのなかで", meaning: "전철 안에서" },
    ] },
  { level: "N5", kanji: "映画", reading: "えいが", korean: "에-가", meaning: "영화",
    example: "週末に映画を見に行きます。", exampleReading: "しゅうまつにえいがをみにいきます。", exampleKorean: "슈-마츠니 에-가오 미니 이키마스", exampleMeaning: "주말에 영화를 보러 갑니다.",
    breakdown: [
      { word: "見に行きます", reading: "みにいきます", meaning: "보러 갑니다 (동사ます형+に行く)" },
    ] },
  { level: "N5", kanji: "旅行", reading: "りょこう", korean: "료코-", meaning: "여행",
    example: "来月、家族で旅行します。", exampleReading: "らいげつ、かぞくでりょこうします。", exampleKorean: "라이게츠 카조쿠데 료코- 시마스", exampleMeaning: "다음 달에 가족끼리 여행합니다.",
    breakdown: [
      { word: "来月", reading: "らいげつ", meaning: "다음 달" },
    ] },
  { level: "N5", kanji: "料理", reading: "りょうり", korean: "료-리", meaning: "요리",
    example: "母の料理はとてもおいしいです。", exampleReading: "ははのりょうりはとてもおいしいです。", exampleKorean: "하하노 료-리와 도테모 오이시-데스", exampleMeaning: "엄마의 요리는 아주 맛있습니다.",
    breakdown: [
      { word: "おいしいです", reading: "おいしいです", meaning: "맛있습니다" },
    ] },
  { level: "N5", kanji: "仕事", reading: "しごと", korean: "시고토", meaning: "일",
    example: "今日は仕事が忙しかったです。", exampleReading: "きょうはしごとがいそがしかったです。", exampleKorean: "쿄-와 시고토가 이소가시캇타데스", exampleMeaning: "오늘은 일이 바빴습니다.",
    breakdown: [
      { word: "忙しかったです", reading: "いそがしかったです", meaning: "바빴습니다 (忙しい의 과거형)" },
    ] },
  { level: "N5", kanji: "勉強", reading: "べんきょう", korean: "벵쿄-", meaning: "공부",
    example: "毎晩、日本語の勉強をします。", exampleReading: "まいばん、にほんごのべんきょうをします。", exampleKorean: "마이방 니홍고노 벵쿄-오 시마스", exampleMeaning: "매일 밤 일본어 공부를 합니다.",
    breakdown: [
      { word: "毎晩", reading: "まいばん", meaning: "매일 밤" },
    ] },
  { level: "N5", kanji: "起きる", reading: "おきる", korean: "오키루", meaning: "일어나다",
    example: "毎朝七時に起きます。", exampleReading: "まいあさしちじにおきます。", exampleKorean: "마이아사 시치지니 오키마스", exampleMeaning: "매일 아침 7시에 일어납니다.",
    breakdown: [
      { word: "七時に", reading: "しちじに", meaning: "7시에" },
    ] },
  { level: "N5", kanji: "寝る", reading: "ねる", korean: "네루", meaning: "자다",
    example: "夜十一時に寝ます。", exampleReading: "よるじゅういちじにねます。", exampleKorean: "요루 쥬-이치지니 네마스", exampleMeaning: "밤 11시에 잡니다.",
    breakdown: [
      { word: "十一時に", reading: "じゅういちじに", meaning: "11시에" },
    ] },
  { level: "N5", kanji: "話す", reading: "はなす", korean: "하나스", meaning: "이야기하다",
    example: "友達と電話で話しました。", exampleReading: "ともだちとでんわではなしました。", exampleKorean: "도모다치토 뎅와데 하나시마시타", exampleMeaning: "친구와 전화로 이야기했습니다.",
    breakdown: [
      { word: "電話で", reading: "でんわで", meaning: "전화로" },
    ] },
  { level: "N5", kanji: "聞く", reading: "きく", korean: "키쿠", meaning: "듣다",
    example: "ラジオでニュースを聞きます。", exampleReading: "ラジオでニュースをききます。", exampleKorean: "라지오데 뉴-스오 키키마스", exampleMeaning: "라디오로 뉴스를 듣습니다.",
    breakdown: [
      { word: "ラジオで", reading: "ラジオで", meaning: "라디오로" },
    ] },
  { level: "N5", kanji: "書く", reading: "かく", korean: "카쿠", meaning: "쓰다",
    example: "ノートに名前を書きます。", exampleReading: "ノートになまえをかきます。", exampleKorean: "노-토니 나마에오 카키마스", exampleMeaning: "노트에 이름을 씁니다.",
    breakdown: [
      { word: "名前", reading: "なまえ", meaning: "이름" },
    ] },
  { level: "N5", kanji: "読む", reading: "よむ", korean: "요무", meaning: "읽다",
    example: "寝る前に本を読みます。", exampleReading: "ねるまえにほんをよみます。", exampleKorean: "네루 마에니 홍오 요미마스", exampleMeaning: "자기 전에 책을 읽습니다.",
    breakdown: [
      { word: "寝る前に", reading: "ねるまえに", meaning: "자기 전에" },
    ] },
  { level: "N5", kanji: "行く", reading: "いく", korean: "이쿠", meaning: "가다",
    example: "明日、学校に行きます。", exampleReading: "あした、がっこうにいきます。", exampleKorean: "아시타 각코-니 이키마스", exampleMeaning: "내일 학교에 갑니다.",
    breakdown: [
      { word: "に", reading: "に", meaning: "~에 (도착점 조사)" },
    ] },
  { level: "N5", kanji: "来る", reading: "くる", korean: "쿠루", meaning: "오다",
    example: "友達が家に来ます。", exampleReading: "ともだちがいえにきます。", exampleKorean: "도모다치가 이에니 키마스", exampleMeaning: "친구가 집에 옵니다.",
    breakdown: [
      { word: "が", reading: "が", meaning: "~이/가 (주어 조사)" },
    ] },
  { level: "N5", kanji: "帰る", reading: "かえる", korean: "카에루", meaning: "돌아가다",
    example: "六時に家に帰ります。", exampleReading: "ろくじにいえにかえります。", exampleKorean: "로쿠지니 이에니 카에리마스", exampleMeaning: "6시에 집에 돌아갑니다.",
    breakdown: [
      { word: "帰ります", reading: "かえります", meaning: "돌아갑니다 (帰る의 정중형)" },
    ] },
  { level: "N5", kanji: "分かる", reading: "わかる", korean: "와카루", meaning: "이해하다",
    example: "この問題がよく分かりません。", exampleReading: "このもんだいがよくわかりません。", exampleKorean: "코노 몬다이가 요쿠 와카리마셍", exampleMeaning: "이 문제를 잘 모르겠습니다.",
    breakdown: [
      { word: "よく", reading: "よく", meaning: "잘" },
    ] },
  { level: "N5", kanji: "高い", reading: "たかい", korean: "타카이", meaning: "비싸다, 높다",
    example: "このかばんは高いです。", exampleReading: "このかばんはたかいです。", exampleKorean: "코노 카방와 타카이데스", exampleMeaning: "이 가방은 비쌉니다.",
    breakdown: [
      { word: "かばん", reading: "かばん", meaning: "가방" },
    ] },
  { level: "N5", kanji: "安い", reading: "やすい", korean: "야스이", meaning: "싸다",
    example: "このレストランは安くておいしいです。", exampleReading: "このレストランはやすくておいしいです。", exampleKorean: "코노 레스토랑와 야스쿠테 오이시-데스", exampleMeaning: "이 레스토랑은 싸고 맛있습니다.",
    breakdown: [
      { word: "安くて", reading: "やすくて", meaning: "싸고 (安い의 て형)" },
    ] },
  { level: "N5", kanji: "新しい", reading: "あたらしい", korean: "아타라시-", meaning: "새롭다",
    example: "新しい靴を買いました。", exampleReading: "あたらしいくつをかいました。", exampleKorean: "아타라시- 쿠츠오 카이마시타", exampleMeaning: "새 신발을 샀습니다.",
    breakdown: [
      { word: "靴", reading: "くつ", meaning: "신발" },
    ] },
  { level: "N5", kanji: "古い", reading: "ふるい", korean: "후루이", meaning: "오래되다",
    example: "この建物はとても古いです。", exampleReading: "このたてものはとてもふるいです。", exampleKorean: "코노 타테모노와 도테모 후루이데스", exampleMeaning: "이 건물은 아주 오래되었습니다.",
    breakdown: [
      { word: "建物", reading: "たてもの", meaning: "건물" },
    ] },
  { level: "N5", kanji: "忙しい", reading: "いそがしい", korean: "이소가시-", meaning: "바쁘다",
    example: "今週はとても忙しいです。", exampleReading: "こんしゅうはとてもいそがしいです。", exampleKorean: "콘슈-와 도테모 이소가시-데스", exampleMeaning: "이번 주는 아주 바쁩니다.",
    breakdown: [
      { word: "今週", reading: "こんしゅう", meaning: "이번 주" },
    ] },

  { level: "N5", kanji: "父", reading: "ちち", korean: "치치", meaning: "아버지",
    example: "父は毎朝散歩をします。", exampleReading: "ちちはまいあささんぽをします。", exampleKorean: "치치와 마이아사 삼포오 시마스", exampleMeaning: "아버지는 매일 아침 산책을 합니다.",
    breakdown: [
      { word: "毎朝", reading: "まいあさ", meaning: "매일 아침" },
      { word: "散歩をします", reading: "さんぽをします", meaning: "산책을 합니다" },
    ] },
  { level: "N5", kanji: "母", reading: "はは", korean: "하하", meaning: "어머니",
    example: "母は料理が上手です。", exampleReading: "はははりょうりがじょうずです。", exampleKorean: "하하와 료-리가 죠-즈데스", exampleMeaning: "어머니는 요리를 잘합니다.",
    breakdown: [
      { word: "上手です", reading: "じょうずです", meaning: "잘합니다, 능숙합니다" },
    ] },
  { level: "N5", kanji: "兄", reading: "あに", korean: "아니", meaning: "형, 오빠",
    example: "兄は東京で働いています。", exampleReading: "あにはとうきょうではたらいています。", exampleKorean: "아니와 토-쿄-데 하타라이테이마스", exampleMeaning: "형은 도쿄에서 일하고 있습니다.",
    breakdown: [
      { word: "東京で", reading: "とうきょうで", meaning: "도쿄에서" },
    ] },
  { level: "N5", kanji: "姉", reading: "あね", korean: "아네", meaning: "누나, 언니",
    example: "姉は看護師です。", exampleReading: "あねはかんごしです。", exampleKorean: "아네와 캉고시데스", exampleMeaning: "누나는 간호사입니다.",
    breakdown: [
      { word: "看護師", reading: "かんごし", meaning: "간호사" },
    ] },
  { level: "N5", kanji: "弟", reading: "おとうと", korean: "오토-토", meaning: "남동생",
    example: "弟は高校生です。", exampleReading: "おとうとはこうこうせいです。", exampleKorean: "오토-토와 코-코-세-데스", exampleMeaning: "남동생은 고등학생입니다.",
    breakdown: [
      { word: "高校生", reading: "こうこうせい", meaning: "고등학생" },
    ] },
  { level: "N5", kanji: "妹", reading: "いもうと", korean: "이모-토", meaning: "여동생",
    example: "妹はピアノを習っています。", exampleReading: "いもうとはピアノをならっています。", exampleKorean: "이모-토와 피아노오 나랏테이마스", exampleMeaning: "여동생은 피아노를 배우고 있습니다.",
    breakdown: [
      { word: "ピアノ", reading: "ピアノ", meaning: "피아노" },
      { word: "習っています", reading: "ならっています", meaning: "배우고 있습니다" },
    ] },
  { level: "N5", kanji: "子供", reading: "こども", korean: "코도모", meaning: "아이",
    example: "公園で子供が遊んでいます。", exampleReading: "こうえんでこどもがあそんでいます。", exampleKorean: "코-엔데 코도모가 아손데이마스", exampleMeaning: "공원에서 아이가 놀고 있습니다.",
    breakdown: [
      { word: "遊んでいます", reading: "あそんでいます", meaning: "놀고 있습니다" },
    ] },
  { level: "N5", kanji: "赤ちゃん", reading: "あかちゃん", korean: "아카짱", meaning: "아기",
    example: "赤ちゃんがぐっすり眠っています。", exampleReading: "あかちゃんがぐっすりねむっています。", exampleKorean: "아카짱가 굿스리 네뭇테이마스", exampleMeaning: "아기가 곤히 자고 있습니다.",
    breakdown: [
      { word: "ぐっすり", reading: "ぐっすり", meaning: "곤히" },
      { word: "眠っています", reading: "ねむっています", meaning: "자고 있습니다" },
    ] },
  { level: "N5", kanji: "赤い", reading: "あかい", korean: "아카이", meaning: "빨갛다",
    example: "赤いりんごを買いました。", exampleReading: "あかいりんごをかいました。", exampleKorean: "아카이 링고오 카이마시타", exampleMeaning: "빨간 사과를 샀습니다.",
    breakdown: [
      { word: "りんご", reading: "りんご", meaning: "사과" },
    ] },
  { level: "N5", kanji: "青い", reading: "あおい", korean: "아오이", meaning: "파랗다",
    example: "空が青いです。", exampleReading: "そらがあおいです。", exampleKorean: "소라가 아오이데스", exampleMeaning: "하늘이 파랗습니다.",
    breakdown: [
      { word: "空", reading: "そら", meaning: "하늘" },
    ] },
  { level: "N5", kanji: "白い", reading: "しろい", korean: "시로이", meaning: "하얗다",
    example: "白い猫を飼っています。", exampleReading: "しろいねこをかっています。", exampleKorean: "시로이 네코오 캇테이마스", exampleMeaning: "하얀 고양이를 기르고 있습니다.",
    breakdown: [
      { word: "飼っています", reading: "かっています", meaning: "기르고 있습니다" },
    ] },
  { level: "N5", kanji: "黒い", reading: "くろい", korean: "쿠로이", meaning: "검다",
    example: "黒い靴を履いています。", exampleReading: "くろいくつをはいています。", exampleKorean: "쿠로이 쿠츠오 하이테이마스", exampleMeaning: "검은 신발을 신고 있습니다.",
    breakdown: [
      { word: "履いています", reading: "はいています", meaning: "신고 있습니다" },
    ] },
  { level: "N5", kanji: "肉", reading: "にく", korean: "니쿠", meaning: "고기",
    example: "夕食に肉を焼きます。", exampleReading: "ゆうしょくににくをやきます。", exampleKorean: "유-쇼쿠니 니쿠오 야키마스", exampleMeaning: "저녁 식사로 고기를 굽습니다.",
    breakdown: [
      { word: "夕食に", reading: "ゆうしょくに", meaning: "저녁 식사로" },
      { word: "焼きます", reading: "やきます", meaning: "굽습니다" },
    ] },
  { level: "N5", kanji: "魚", reading: "さかな", korean: "사카나", meaning: "생선",
    example: "朝ごはんに魚を食べました。", exampleReading: "あさごはんにさかなをたべました。", exampleKorean: "아사고항니 사카나오 타베마시타", exampleMeaning: "아침밥으로 생선을 먹었습니다.",
    breakdown: [
      { word: "朝ごはんに", reading: "あさごはんに", meaning: "아침밥으로" },
    ] },
  { level: "N5", kanji: "野菜", reading: "やさい", korean: "야사이", meaning: "채소",
    example: "野菜をたくさん食べましょう。", exampleReading: "やさいをたくさんたべましょう。", exampleKorean: "야사이오 타쿠상 타베마쇼-", exampleMeaning: "채소를 많이 먹읍시다.",
    breakdown: [
      { word: "食べましょう", reading: "たべましょう", meaning: "먹읍시다 (청유형)" },
    ] },
  { level: "N5", kanji: "果物", reading: "くだもの", korean: "쿠다모노", meaning: "과일",
    example: "果物が大好きです。", exampleReading: "くだものがだいすきです。", exampleKorean: "쿠다모노가 다이스키데스", exampleMeaning: "과일을 아주 좋아합니다.",
    breakdown: [
      { word: "大好きです", reading: "だいすきです", meaning: "아주 좋아합니다" },
    ] },
  { level: "N5", kanji: "卵", reading: "たまご", korean: "타마고", meaning: "달걀",
    example: "卵を二つ買ってきてください。", exampleReading: "たまごをふたつかってきてください。", exampleKorean: "타마고오 후타츠 캇테키테쿠다사이", exampleMeaning: "달걀을 두 개 사다 주세요.",
    breakdown: [
      { word: "二つ", reading: "ふたつ", meaning: "두 개" },
      { word: "買ってきてください", reading: "かってきてください", meaning: "사다 주세요" },
    ] },
  { level: "N5", kanji: "牛乳", reading: "ぎゅうにゅう", korean: "규-뉴-", meaning: "우유",
    example: "毎朝、牛乳を飲みます。", exampleReading: "まいあさ、ぎゅうにゅうをのみます。", exampleKorean: "마이아사 규-뉴-오 노미마스", exampleMeaning: "매일 아침 우유를 마십니다.",
    breakdown: [
      { word: "毎朝", reading: "まいあさ", meaning: "매일 아침" },
    ] },
  { level: "N5", kanji: "お茶", reading: "おちゃ", korean: "오챠", meaning: "차",
    example: "熱いお茶を飲みました。", exampleReading: "あついおちゃをのみました。", exampleKorean: "아츠이 오챠오 노미마시타", exampleMeaning: "뜨거운 차를 마셨습니다.",
    breakdown: [
      { word: "熱い", reading: "あつい", meaning: "뜨겁다" },
    ] },
  { level: "N5", kanji: "頭", reading: "あたま", korean: "아타마", meaning: "머리",
    example: "頭が痛いです。", exampleReading: "あたまがいたいです。", exampleKorean: "아타마가 이타이데스", exampleMeaning: "머리가 아픕니다.",
    breakdown: [
      { word: "が", reading: "が", meaning: "~이/가 (주어 조사)" },
    ] },
  { level: "N5", kanji: "目", reading: "め", korean: "메", meaning: "눈",
    example: "目が疲れました。", exampleReading: "めがつかれました。", exampleKorean: "메가 츠카레마시타", exampleMeaning: "눈이 피곤합니다.",
    breakdown: [
      { word: "疲れました", reading: "つかれました", meaning: "피곤했습니다" },
    ] },
  { level: "N5", kanji: "耳", reading: "みみ", korean: "미미", meaning: "귀",
    example: "耳がよく聞こえません。", exampleReading: "みみがよくきこえません。", exampleKorean: "미미가 요쿠 키코에마셍", exampleMeaning: "귀가 잘 안 들립니다.",
    breakdown: [
      { word: "聞こえません", reading: "きこえません", meaning: "들리지 않습니다" },
    ] },
  { level: "N5", kanji: "口", reading: "くち", korean: "쿠치", meaning: "입",
    example: "口を大きく開けてください。", exampleReading: "くちをおおきくあけてください。", exampleKorean: "쿠치오 오-키쿠 아케테쿠다사이", exampleMeaning: "입을 크게 벌려 주세요.",
    breakdown: [
      { word: "大きく", reading: "おおきく", meaning: "크게" },
    ] },
  { level: "N5", kanji: "手", reading: "て", korean: "테", meaning: "손",
    example: "食事の前に手を洗います。", exampleReading: "しょくじのまえにてをあらいます。", exampleKorean: "쇼쿠지노 마에니 테오 아라이마스", exampleMeaning: "식사 전에 손을 씻습니다.",
    breakdown: [
      { word: "食事の前に", reading: "しょくじのまえに", meaning: "식사 전에" },
    ] },
  { level: "N5", kanji: "足", reading: "あし", korean: "아시", meaning: "발, 다리",
    example: "足が痛くて歩けません。", exampleReading: "あしがいたくてあるけません。", exampleKorean: "아시가 이타쿠테 아루케마셍", exampleMeaning: "다리가 아파서 걸을 수 없습니다.",
    breakdown: [
      { word: "歩けません", reading: "あるけません", meaning: "걸을 수 없습니다 (가능형 부정)" },
    ] },
  { level: "N5", kanji: "郵便局", reading: "ゆうびんきょく", korean: "유-빙쿄쿠", meaning: "우체국",
    example: "郵便局で切手を買いました。", exampleReading: "ゆうびんきょくできってをかいました。", exampleKorean: "유-빙쿄쿠데 킷테오 카이마시타", exampleMeaning: "우체국에서 우표를 샀습니다.",
    breakdown: [
      { word: "切手", reading: "きって", meaning: "우표" },
    ] },
  { level: "N5", kanji: "図書館", reading: "としょかん", korean: "토쇼칸", meaning: "도서관",
    example: "図書館で静かに勉強します。", exampleReading: "としょかんでしずかにべんきょうします。", exampleKorean: "토쇼칸데 시즈카니 벵쿄- 시마스", exampleMeaning: "도서관에서 조용히 공부합니다.",
    breakdown: [
      { word: "静かに", reading: "しずかに", meaning: "조용히" },
    ] },
  { level: "N5", kanji: "トイレ", reading: "トイレ", korean: "토이레", meaning: "화장실",
    example: "トイレはどこですか。", exampleReading: "トイレはどこですか。", exampleKorean: "토이레와 도코데스카", exampleMeaning: "화장실은 어디입니까?",
    breakdown: [
      { word: "どこですか", reading: "どこですか", meaning: "어디입니까?" },
    ] },
  { level: "N5", kanji: "洗う", reading: "あらう", korean: "아라우", meaning: "씻다",
    example: "毎日、顔を洗います。", exampleReading: "まいにち、かおをあらいます。", exampleKorean: "마이니치 카오오 아라이마스", exampleMeaning: "매일 얼굴을 씻습니다.",
    breakdown: [
      { word: "顔", reading: "かお", meaning: "얼굴" },
    ] },
  { level: "N5", kanji: "作る", reading: "つくる", korean: "츠쿠루", meaning: "만들다",
    example: "母と一緒にケーキを作りました。", exampleReading: "ははといっしょにケーキをつくりました。", exampleKorean: "하하토 잇쇼니 케-키오 츠쿠리마시타", exampleMeaning: "엄마와 함께 케이크를 만들었습니다.",
    breakdown: [
      { word: "一緒に", reading: "いっしょに", meaning: "함께" },
    ] },
  { level: "N5", kanji: "使う", reading: "つかう", korean: "츠카우", meaning: "사용하다",
    example: "このパソコンを使ってもいいですか。", exampleReading: "このパソコンをつかってもいいですか。", exampleKorean: "코노 파소콘오 츠캇테모 이-데스카", exampleMeaning: "이 컴퓨터를 사용해도 됩니까?",
    breakdown: [
      { word: "てもいいですか", reading: "てもいいですか", meaning: "~해도 됩니까? (허가를 묻는 표현)" },
    ] },
  { level: "N5", kanji: "開ける", reading: "あける", korean: "아케루", meaning: "열다",
    example: "窓を開けてください。", exampleReading: "まどをあけてください。", exampleKorean: "마도오 아케테쿠다사이", exampleMeaning: "창문을 열어 주세요.",
    breakdown: [
      { word: "てください", reading: "てください", meaning: "~해 주세요" },
    ] },
  { level: "N5", kanji: "閉める", reading: "しめる", korean: "시메루", meaning: "닫다",
    example: "ドアを閉めました。", exampleReading: "ドアをしめました。", exampleKorean: "도아오 시메마시타", exampleMeaning: "문을 닫았습니다.",
    breakdown: [
      { word: "閉めました", reading: "しめました", meaning: "닫았습니다" },
    ] },
  { level: "N5", kanji: "入る", reading: "はいる", korean: "하이루", meaning: "들어가다",
    example: "部屋に入ってください。", exampleReading: "へやにはいってください。", exampleKorean: "헤야니 하잇테쿠다사이", exampleMeaning: "방에 들어와 주세요.",
    breakdown: [
      { word: "部屋に", reading: "へやに", meaning: "방에" },
    ] },
  { level: "N5", kanji: "出る", reading: "でる", korean: "데루", meaning: "나가다",
    example: "七時に家を出ます。", exampleReading: "しちじにいえをでます。", exampleKorean: "시치지니 이에오 데마스", exampleMeaning: "7시에 집을 나갑니다.",
    breakdown: [
      { word: "七時に", reading: "しちじに", meaning: "7시에" },
    ] },
  { level: "N5", kanji: "座る", reading: "すわる", korean: "스와루", meaning: "앉다",
    example: "どうぞ、こちらに座ってください。", exampleReading: "どうぞ、こちらにすわってください。", exampleKorean: "도-조 코치라니 스왓테쿠다사이", exampleMeaning: "자, 이쪽에 앉으세요.",
    breakdown: [
      { word: "どうぞ", reading: "どうぞ", meaning: "자, 부디" },
      { word: "こちらに", reading: "こちらに", meaning: "이쪽에" },
    ] },
  { level: "N5", kanji: "立つ", reading: "たつ", korean: "타츠", meaning: "서다",
    example: "バスの中でずっと立っていました。", exampleReading: "バスのなかでずっとたっていました。", exampleKorean: "바스노 나카데 즛토 탓테이마시타", exampleMeaning: "버스 안에서 계속 서 있었습니다.",
    breakdown: [
      { word: "ずっと", reading: "ずっと", meaning: "계속" },
      { word: "立っていました", reading: "たっていました", meaning: "서 있었습니다" },
    ] },
  { level: "N5", kanji: "泳ぐ", reading: "およぐ", korean: "오요구", meaning: "수영하다",
    example: "プールで泳ぐのが好きです。", exampleReading: "プールでおよぐのがすきです。", exampleKorean: "푸-루데 오요구노가 스키데스", exampleMeaning: "수영장에서 수영하는 것을 좋아합니다.",
    breakdown: [
      { word: "プールで", reading: "プールで", meaning: "수영장에서" },
    ] },
  { level: "N5", kanji: "暑い", reading: "あつい", korean: "아츠이", meaning: "덥다",
    example: "今日はとても暑いです。", exampleReading: "きょうはとてもあついです。", exampleKorean: "쿄-와 도테모 아츠이데스", exampleMeaning: "오늘은 아주 덥습니다.",
    breakdown: [
      { word: "とても", reading: "とても", meaning: "아주" },
    ] },
  { level: "N5", kanji: "寒い", reading: "さむい", korean: "사무이", meaning: "춥다",
    example: "冬はとても寒いです。", exampleReading: "ふゆはとてもさむいです。", exampleKorean: "후유와 도테모 사무이데스", exampleMeaning: "겨울은 아주 춥습니다.",
    breakdown: [
      { word: "冬", reading: "ふゆ", meaning: "겨울" },
    ] },
  { level: "N5", kanji: "涼しい", reading: "すずしい", korean: "스즈시-", meaning: "시원하다",
    example: "今朝は涼しかったです。", exampleReading: "けさはすずしかったです。", exampleKorean: "케사와 스즈시캇타데스", exampleMeaning: "오늘 아침은 시원했습니다.",
    breakdown: [
      { word: "今朝は", reading: "けさは", meaning: "오늘 아침은" },
    ] },
  { level: "N5", kanji: "暖かい", reading: "あたたかい", korean: "아타타카이", meaning: "따뜻하다",
    example: "今日は暖かいです。", exampleReading: "きょうはあたたかいです。", exampleKorean: "쿄-와 아타타카이데스", exampleMeaning: "오늘은 따뜻합니다.",
    breakdown: [
      { word: "今日は", reading: "きょうは", meaning: "오늘은" },
    ] },
  { level: "N5", kanji: "痛い", reading: "いたい", korean: "이타이", meaning: "아프다",
    example: "お腹が痛いです。", exampleReading: "おなかがいたいです。", exampleKorean: "오나카가 이타이데스", exampleMeaning: "배가 아픕니다.",
    breakdown: [
      { word: "お腹", reading: "おなか", meaning: "배" },
    ] },
  { level: "N5", kanji: "甘い", reading: "あまい", korean: "아마이", meaning: "달다",
    example: "このケーキはとても甘いです。", exampleReading: "このケーキはとてもあまいです。", exampleKorean: "코노 케-키와 도테모 아마이데스", exampleMeaning: "이 케이크는 아주 답니다.",
    breakdown: [
      { word: "ケーキ", reading: "ケーキ", meaning: "케이크" },
    ] },
  { level: "N5", kanji: "辛い", reading: "からい", korean: "카라이", meaning: "맵다",
    example: "韓国の料理は辛いです。", exampleReading: "かんこくのりょうりはからいです。", exampleKorean: "캉코쿠노 료-리와 카라이데스", exampleMeaning: "한국 요리는 맵습니다.",
    breakdown: [
      { word: "韓国の料理", reading: "かんこくのりょうり", meaning: "한국 요리" },
    ] },
  { level: "N5", kanji: "重い", reading: "おもい", korean: "오모이", meaning: "무겁다",
    example: "このかばんは重いです。", exampleReading: "このかばんはおもいです。", exampleKorean: "코노 카방와 오모이데스", exampleMeaning: "이 가방은 무겁습니다.",
    breakdown: [
      { word: "かばん", reading: "かばん", meaning: "가방" },
    ] },
  { level: "N5", kanji: "軽い", reading: "かるい", korean: "카루이", meaning: "가볍다",
    example: "新しいパソコンは軽いです。", exampleReading: "あたらしいパソコンはかるいです。", exampleKorean: "아타라시- 파소콘와 카루이데스", exampleMeaning: "새 컴퓨터는 가볍습니다.",
    breakdown: [
      { word: "新しい", reading: "あたらしい", meaning: "새롭다" },
    ] },
  { level: "N5", kanji: "長い", reading: "ながい", korean: "나가이", meaning: "길다",
    example: "髪が長くなりました。", exampleReading: "かみがながくなりました。", exampleKorean: "카미가 나가쿠 나리마시타", exampleMeaning: "머리카락이 길어졌습니다.",
    breakdown: [
      { word: "長くなりました", reading: "ながくなりました", meaning: "길어졌습니다 (형용사+なる)" },
    ] },
  { level: "N5", kanji: "短い", reading: "みじかい", korean: "미지카이", meaning: "짧다",
    example: "今日の会議は短かったです。", exampleReading: "きょうのかいぎはみじかかったです。", exampleKorean: "쿄-노 카이기와 미지카캇타데스", exampleMeaning: "오늘 회의는 짧았습니다.",
    breakdown: [
      { word: "会議", reading: "かいぎ", meaning: "회의" },
    ] },
  { level: "N5", kanji: "元気", reading: "げんき", korean: "겐키", meaning: "건강함, 활기참",
    example: "祖父はまだ元気です。", exampleReading: "そふはまだげんきです。", exampleKorean: "소후와 마다 겐키데스", exampleMeaning: "할아버지는 아직 건강합니다.",
    breakdown: [
      { word: "祖父", reading: "そふ", meaning: "할아버지" },
      { word: "まだ", reading: "まだ", meaning: "아직" },
    ] },

  { level: "N5", kanji: "月曜日", reading: "げつようび", korean: "게츠요-비", meaning: "월요일",
    example: "月曜日から仕事が始まります。", exampleReading: "げつようびからしごとがはじまります。", exampleKorean: "게츠요-비카라 시고토가 하지마리마스", exampleMeaning: "월요일부터 일이 시작됩니다.",
    breakdown: [
      { word: "から", reading: "から", meaning: "~부터" },
      { word: "始まります", reading: "はじまります", meaning: "시작됩니다" },
    ] },
  { level: "N5", kanji: "火曜日", reading: "かようび", korean: "카요-비", meaning: "화요일",
    example: "火曜日に病院へ行きます。", exampleReading: "かようびにびょういんへいきます。", exampleKorean: "카요-비니 뵤-잉에 이키마스", exampleMeaning: "화요일에 병원에 갑니다.",
    breakdown: [
      { word: "病院へ", reading: "びょういんへ", meaning: "병원으로" },
    ] },
  { level: "N5", kanji: "水曜日", reading: "すいようび", korean: "스이요-비", meaning: "수요일",
    example: "水曜日はいつも忙しいです。", exampleReading: "すいようびはいつもいそがしいです。", exampleKorean: "스이요-비와 이츠모 이소가시-데스", exampleMeaning: "수요일은 항상 바쁩니다.",
    breakdown: [
      { word: "いつも", reading: "いつも", meaning: "항상" },
    ] },
  { level: "N5", kanji: "木曜日", reading: "もくようび", korean: "모쿠요-비", meaning: "목요일",
    example: "木曜日に会議があります。", exampleReading: "もくようびにかいぎがあります。", exampleKorean: "모쿠요-비니 카이기가 아리마스", exampleMeaning: "목요일에 회의가 있습니다.",
    breakdown: [
      { word: "会議があります", reading: "かいぎがあります", meaning: "회의가 있습니다" },
    ] },
  { level: "N5", kanji: "金曜日", reading: "きんようび", korean: "킹요-비", meaning: "금요일",
    example: "金曜日の夜は友達と会います。", exampleReading: "きんようびのよるはともだちとあいます。", exampleKorean: "킹요-비노 요루와 도모다치토 아이마스", exampleMeaning: "금요일 밤에는 친구와 만납니다.",
    breakdown: [
      { word: "夜は", reading: "よるは", meaning: "밤에는" },
    ] },
  { level: "N5", kanji: "土曜日", reading: "どようび", korean: "도요-비", meaning: "토요일",
    example: "土曜日はいつも家にいます。", exampleReading: "どようびはいつもいえにいます。", exampleKorean: "도요-비와 이츠모 이에니 이마스", exampleMeaning: "토요일은 항상 집에 있습니다.",
    breakdown: [
      { word: "家にいます", reading: "いえにいます", meaning: "집에 있습니다" },
    ] },
  { level: "N5", kanji: "日曜日", reading: "にちようび", korean: "니치요-비", meaning: "일요일",
    example: "日曜日に教会へ行きます。", exampleReading: "にちようびにきょうかいへいきます。", exampleKorean: "니치요-비니 쿄-카이에 이키마스", exampleMeaning: "일요일에 교회에 갑니다.",
    breakdown: [
      { word: "教会", reading: "きょうかい", meaning: "교회" },
    ] },
  { level: "N5", kanji: "先週", reading: "せんしゅう", korean: "센슈-", meaning: "지난주",
    example: "先週、京都へ旅行しました。", exampleReading: "せんしゅう、きょうとへりょこうしました。", exampleKorean: "센슈- 쿄-토에 료코- 시마시타", exampleMeaning: "지난주 교토로 여행했습니다.",
    breakdown: [
      { word: "京都", reading: "きょうと", meaning: "교토" },
    ] },
  { level: "N5", kanji: "来週", reading: "らいしゅう", korean: "라이슈-", meaning: "다음 주",
    example: "来週、試験があります。", exampleReading: "らいしゅう、しけんがあります。", exampleKorean: "라이슈- 시켄가 아리마스", exampleMeaning: "다음 주 시험이 있습니다.",
    breakdown: [
      { word: "試験", reading: "しけん", meaning: "시험" },
    ] },
  { level: "N5", kanji: "先月", reading: "せんげつ", korean: "센게츠", meaning: "지난달",
    example: "先月、新しい仕事を始めました。", exampleReading: "せんげつ、あたらしいしごとをはじめました。", exampleKorean: "센게츠 아타라시- 시고토오 하지메마시타", exampleMeaning: "지난달 새로운 일을 시작했습니다.",
    breakdown: [
      { word: "始めました", reading: "はじめました", meaning: "시작했습니다" },
    ] },
  { level: "N5", kanji: "来月", reading: "らいげつ", korean: "라이게츠", meaning: "다음 달",
    example: "来月、誕生日です。", exampleReading: "らいげつ、たんじょうびです。", exampleKorean: "라이게츠 탄죠-비데스", exampleMeaning: "다음 달 생일입니다.",
    breakdown: [
      { word: "誕生日", reading: "たんじょうび", meaning: "생일" },
    ] },
  { level: "N5", kanji: "今年", reading: "ことし", korean: "코토시", meaning: "올해",
    example: "今年は日本語を頑張ります。", exampleReading: "ことしはにほんごをがんばります。", exampleKorean: "코토시와 니홍고오 감바리마스", exampleMeaning: "올해는 일본어를 열심히 하겠습니다.",
    breakdown: [
      { word: "頑張ります", reading: "がんばります", meaning: "열심히 하겠습니다" },
    ] },
  { level: "N5", kanji: "去年", reading: "きょねん", korean: "쿄넨", meaning: "작년",
    example: "去年、大学を卒業しました。", exampleReading: "きょねん、だいがくをそつぎょうしました。", exampleKorean: "쿄넨 다이가쿠오 소츠교- 시마시타", exampleMeaning: "작년에 대학을 졸업했습니다.",
    breakdown: [
      { word: "卒業しました", reading: "そつぎょうしました", meaning: "졸업했습니다" },
    ] },
  { level: "N5", kanji: "来年", reading: "らいねん", korean: "라이넨", meaning: "내년",
    example: "来年、日本へ留学します。", exampleReading: "らいねん、にほんへりゅうがくします。", exampleKorean: "라이넨 니홍에 류-가쿠 시마스", exampleMeaning: "내년에 일본으로 유학갑니다.",
    breakdown: [
      { word: "留学します", reading: "りゅうがくします", meaning: "유학갑니다" },
    ] },
  { level: "N5", kanji: "毎日", reading: "まいにち", korean: "마이니치", meaning: "매일",
    example: "毎日、日記を書いています。", exampleReading: "まいにち、にっきをかいています。", exampleKorean: "마이니치 닉키오 카이테이마스", exampleMeaning: "매일 일기를 쓰고 있습니다.",
    breakdown: [
      { word: "日記", reading: "にっき", meaning: "일기" },
    ] },
  { level: "N5", kanji: "毎週", reading: "まいしゅう", korean: "마이슈-", meaning: "매주",
    example: "毎週、映画を見に行きます。", exampleReading: "まいしゅう、えいがをみにいきます。", exampleKorean: "마이슈- 에-가오 미니 이키마스", exampleMeaning: "매주 영화를 보러 갑니다.",
    breakdown: [
      { word: "見に行きます", reading: "みにいきます", meaning: "보러 갑니다" },
    ] },
  { level: "N5", kanji: "毎年", reading: "まいとし", korean: "마이토시", meaning: "매년",
    example: "毎年、家族で旅行します。", exampleReading: "まいとし、かぞくでりょこうします。", exampleKorean: "마이토시 카조쿠데 료코- 시마스", exampleMeaning: "매년 가족끼리 여행합니다.",
    breakdown: [
      { word: "家族で", reading: "かぞくで", meaning: "가족끼리" },
    ] },
  { level: "N5", kanji: "午前", reading: "ごぜん", korean: "고젠", meaning: "오전",
    example: "午前中に宿題を終わらせます。", exampleReading: "ごぜんちゅうにしゅくだいをおわらせます。", exampleKorean: "고젠츄-니 슈쿠다이오 오와라세마스", exampleMeaning: "오전 중에 숙제를 끝내겠습니다.",
    breakdown: [
      { word: "終わらせます", reading: "おわらせます", meaning: "끝내겠습니다" },
    ] },
  { level: "N5", kanji: "午後", reading: "ごご", korean: "고고", meaning: "오후",
    example: "午後から雨が降るそうです。", exampleReading: "ごごからあめがふるそうです。", exampleKorean: "고고카라 아메가 후루 소-데스", exampleMeaning: "오후부터 비가 온다고 합니다.",
    breakdown: [
      { word: "そうです", reading: "そうです", meaning: "~라고 합니다 (전문)" },
    ] },
  { level: "N5", kanji: "雨", reading: "あめ", korean: "아메", meaning: "비",
    example: "今日は朝から雨です。", exampleReading: "きょうはあさからあめです。", exampleKorean: "쿄-와 아사카라 아메데스", exampleMeaning: "오늘은 아침부터 비입니다.",
    breakdown: [
      { word: "朝から", reading: "あさから", meaning: "아침부터" },
    ] },
  { level: "N5", kanji: "雪", reading: "ゆき", korean: "유키", meaning: "눈",
    example: "昨日、たくさん雪が降りました。", exampleReading: "きのう、たくさんゆきがふりました。", exampleKorean: "키노- 타쿠상 유키가 후리마시타", exampleMeaning: "어제 눈이 많이 내렸습니다.",
    breakdown: [
      { word: "昨日", reading: "きのう", meaning: "어제" },
      { word: "降りました", reading: "ふりました", meaning: "내렸습니다" },
    ] },
  { level: "N5", kanji: "風", reading: "かぜ", korean: "카제", meaning: "바람",
    example: "今日は風が強いです。", exampleReading: "きょうはかぜがつよいです。", exampleKorean: "쿄-와 카제가 츠요이데스", exampleMeaning: "오늘은 바람이 강합니다.",
    breakdown: [
      { word: "強い", reading: "つよい", meaning: "강하다" },
    ] },
  { level: "N5", kanji: "曇り", reading: "くもり", korean: "쿠모리", meaning: "흐림",
    example: "明日は曇りの予報です。", exampleReading: "あしたはくもりのよほうです。", exampleKorean: "아시타와 쿠모리노 요호-데스", exampleMeaning: "내일은 흐리다는 예보입니다.",
    breakdown: [
      { word: "予報", reading: "よほう", meaning: "예보" },
    ] },
  { level: "N5", kanji: "晴れ", reading: "はれ", korean: "하레", meaning: "맑음",
    example: "今日は一日中晴れでした。", exampleReading: "きょうはいちにちじゅうはれでした。", exampleKorean: "쿄-와 이치니치쥬- 하레데시타", exampleMeaning: "오늘은 하루 종일 맑았습니다.",
    breakdown: [
      { word: "一日中", reading: "いちにちじゅう", meaning: "하루 종일" },
    ] },
  { level: "N5", kanji: "電車", reading: "でんしゃ", korean: "덴샤", meaning: "전철",
    example: "電車で会社に通っています。", exampleReading: "でんしゃでかいしゃにかよっています。", exampleKorean: "덴샤데 카이샤니 카욧테이마스", exampleMeaning: "전철로 회사에 다니고 있습니다.",
    breakdown: [
      { word: "通っています", reading: "かよっています", meaning: "다니고 있습니다" },
    ] },
  { level: "N5", kanji: "バス", reading: "バス", korean: "바스", meaning: "버스",
    example: "バスに乗って学校に行きます。", exampleReading: "バスにのってがっこうにいきます。", exampleKorean: "바스니 놋테 각코-니 이키마스", exampleMeaning: "버스를 타고 학교에 갑니다.",
    breakdown: [
      { word: "乗って", reading: "のって", meaning: "타고" },
    ] },
  { level: "N5", kanji: "飛行機", reading: "ひこうき", korean: "히코-키", meaning: "비행기",
    example: "飛行機で大阪へ行きます。", exampleReading: "ひこうきでおおさかへいきます。", exampleKorean: "히코-키데 오-사카에 이키마스", exampleMeaning: "비행기로 오사카에 갑니다.",
    breakdown: [
      { word: "大阪", reading: "おおさか", meaning: "오사카" },
    ] },
  { level: "N5", kanji: "自転車", reading: "じてんしゃ", korean: "지텐샤", meaning: "자전거",
    example: "自転車で駅まで行きます。", exampleReading: "じてんしゃでえきまでいきます。", exampleKorean: "지텐샤데 에키마데 이키마스", exampleMeaning: "자전거로 역까지 갑니다.",
    breakdown: [
      { word: "まで", reading: "まで", meaning: "~까지" },
    ] },
  { level: "N5", kanji: "タクシー", reading: "タクシー", korean: "타쿠시-", meaning: "택시",
    example: "タクシーを呼びました。", exampleReading: "タクシーをよびました。", exampleKorean: "타쿠시-오 요비마시타", exampleMeaning: "택시를 불렀습니다.",
    breakdown: [
      { word: "呼びました", reading: "よびました", meaning: "불렀습니다" },
    ] },
  { level: "N5", kanji: "道", reading: "みち", korean: "미치", meaning: "길",
    example: "この道をまっすぐ行ってください。", exampleReading: "このみちをまっすぐいってください。", exampleKorean: "코노 미치오 맛스구 잇테쿠다사이", exampleMeaning: "이 길을 곧장 가세요.",
    breakdown: [
      { word: "まっすぐ", reading: "まっすぐ", meaning: "곧장" },
    ] },
  { level: "N5", kanji: "信号", reading: "しんごう", korean: "싱고-", meaning: "신호등",
    example: "信号が赤になりました。", exampleReading: "しんごうがあかになりました。", exampleKorean: "싱고-가 아카니 나리마시타", exampleMeaning: "신호등이 빨간불이 되었습니다.",
    breakdown: [
      { word: "赤になりました", reading: "あかになりました", meaning: "빨간불이 되었습니다" },
    ] },
  { level: "N5", kanji: "切符", reading: "きっぷ", korean: "킵푸", meaning: "표, 티켓",
    example: "駅で切符を買いました。", exampleReading: "えきできっぷをかいました。", exampleKorean: "에키데 킵푸오 카이마시타", exampleMeaning: "역에서 표를 샀습니다.",
    breakdown: [
      { word: "駅で", reading: "えきで", meaning: "역에서" },
    ] },
  { level: "N5", kanji: "服", reading: "ふく", korean: "후쿠", meaning: "옷",
    example: "新しい服を買いました。", exampleReading: "あたらしいふくをかいました。", exampleKorean: "아타라시- 후쿠오 카이마시타", exampleMeaning: "새 옷을 샀습니다.",
    breakdown: [
      { word: "新しい", reading: "あたらしい", meaning: "새롭다" },
    ] },
  { level: "N5", kanji: "靴", reading: "くつ", korean: "쿠츠", meaning: "신발",
    example: "この靴はとても履きやすいです。", exampleReading: "このくつはとてもはきやすいです。", exampleKorean: "코노 쿠츠와 도테모 하키야스이데스", exampleMeaning: "이 신발은 아주 신기 편합니다.",
    breakdown: [
      { word: "履きやすい", reading: "はきやすい", meaning: "신기 편하다 (동사+やすい)" },
    ] },
  { level: "N5", kanji: "帽子", reading: "ぼうし", korean: "보-시", meaning: "모자",
    example: "帽子をかぶって出かけます。", exampleReading: "ぼうしをかぶってでかけます。", exampleKorean: "보-시오 카붓테 데카케마스", exampleMeaning: "모자를 쓰고 외출합니다.",
    breakdown: [
      { word: "かぶって", reading: "かぶって", meaning: "쓰고" },
      { word: "出かけます", reading: "でかけます", meaning: "외출합니다" },
    ] },
  { level: "N5", kanji: "眼鏡", reading: "めがね", korean: "메가네", meaning: "안경",
    example: "眼鏡をかけて本を読みます。", exampleReading: "めがねをかけてほんをよみます。", exampleKorean: "메가네오 카케테 홍오 요미마스", exampleMeaning: "안경을 쓰고 책을 읽습니다.",
    breakdown: [
      { word: "かけて", reading: "かけて", meaning: "쓰고 (안경을 かける)" },
    ] },
  { level: "N5", kanji: "傘", reading: "かさ", korean: "카사", meaning: "우산",
    example: "雨なので傘を持って行きます。", exampleReading: "あめなのでかさをもっていきます。", exampleKorean: "아메나노데 카사오 못테 이키마스", exampleMeaning: "비가 와서 우산을 가지고 갑니다.",
    breakdown: [
      { word: "持って行きます", reading: "もっていきます", meaning: "가지고 갑니다" },
    ] },
  { level: "N5", kanji: "窓", reading: "まど", korean: "마도", meaning: "창문",
    example: "窓から山が見えます。", exampleReading: "まどからやまがみえます。", exampleKorean: "마도카라 야마가 미에마스", exampleMeaning: "창문에서 산이 보입니다.",
    breakdown: [
      { word: "見えます", reading: "みえます", meaning: "보입니다 (자동사)" },
    ] },
  { level: "N5", kanji: "ドア", reading: "ドア", korean: "도아", meaning: "문",
    example: "ドアをノックしました。", exampleReading: "ドアをノックしました。", exampleKorean: "도아오 녹쿠 시마시타", exampleMeaning: "문을 노크했습니다.",
    breakdown: [
      { word: "ノックしました", reading: "ノックしました", meaning: "노크했습니다" },
    ] },
  { level: "N5", kanji: "机", reading: "つくえ", korean: "츠쿠에", meaning: "책상",
    example: "机の上に本があります。", exampleReading: "つくえのうえにほんがあります。", exampleKorean: "츠쿠에노 우에니 홍가 아리마스", exampleMeaning: "책상 위에 책이 있습니다.",
    breakdown: [
      { word: "上に", reading: "うえに", meaning: "위에" },
    ] },
  { level: "N5", kanji: "椅子", reading: "いす", korean: "이스", meaning: "의자",
    example: "この椅子に座ってください。", exampleReading: "このいすにすわってください。", exampleKorean: "코노 이스니 스왓테쿠다사이", exampleMeaning: "이 의자에 앉으세요.",
    breakdown: [
      { word: "座ってください", reading: "すわってください", meaning: "앉아 주세요" },
    ] },
  { level: "N5", kanji: "ベッド", reading: "ベッド", korean: "벳도", meaning: "침대",
    example: "ベッドで本を読みます。", exampleReading: "ベッドでほんをよみます。", exampleKorean: "벳도데 홍오 요미마스", exampleMeaning: "침대에서 책을 읽습니다.",
    breakdown: [
      { word: "読みます", reading: "よみます", meaning: "읽습니다" },
    ] },
  { level: "N5", kanji: "冷蔵庫", reading: "れいぞうこ", korean: "레-조-코", meaning: "냉장고",
    example: "冷蔵庫に牛乳があります。", exampleReading: "れいぞうこにぎゅうにゅうがあります。", exampleKorean: "레-조-코니 규-뉴-가 아리마스", exampleMeaning: "냉장고에 우유가 있습니다.",
    breakdown: [
      { word: "牛乳", reading: "ぎゅうにゅう", meaning: "우유" },
    ] },
  { level: "N5", kanji: "エアコン", reading: "エアコン", korean: "에아콘", meaning: "에어컨",
    example: "暑いのでエアコンをつけます。", exampleReading: "あついのでエアコンをつけます。", exampleKorean: "아츠이노데 에아콘오 츠케마스", exampleMeaning: "더워서 에어컨을 켭니다.",
    breakdown: [
      { word: "つけます", reading: "つけます", meaning: "켭니다" },
    ] },
  { level: "N5", kanji: "電気", reading: "でんき", korean: "뎅키", meaning: "전기, 불",
    example: "部屋の電気をつけてください。", exampleReading: "へやのでんきをつけてください。", exampleKorean: "헤야노 뎅키오 츠케테쿠다사이", exampleMeaning: "방의 불을 켜 주세요.",
    breakdown: [
      { word: "部屋の", reading: "へやの", meaning: "방의" },
    ] },
  { level: "N5", kanji: "空港", reading: "くうこう", korean: "쿠-코-", meaning: "공항",
    example: "空港まで友達を迎えに行きます。", exampleReading: "くうこうまでともだちをむかえにいきます。", exampleKorean: "쿠-코-마데 도모다치오 무카에니 이키마스", exampleMeaning: "공항까지 친구를 마중하러 갑니다.",
    breakdown: [
      { word: "迎えに行きます", reading: "むかえにいきます", meaning: "마중하러 갑니다" },
    ] },
  { level: "N5", kanji: "ホテル", reading: "ホテル", korean: "호테루", meaning: "호텔",
    example: "駅の近くのホテルに泊まります。", exampleReading: "えきのちかくのホテルにとまります。", exampleKorean: "에키노 치카쿠노 호테루니 토마리마스", exampleMeaning: "역 근처 호텔에 묵습니다.",
    breakdown: [
      { word: "近くの", reading: "ちかくの", meaning: "근처의" },
      { word: "泊まります", reading: "とまります", meaning: "묵습니다" },
    ] },
  { level: "N5", kanji: "美術館", reading: "びじゅつかん", korean: "비쥬츠칸", meaning: "미술관",
    example: "週末に美術館へ行きます。", exampleReading: "しゅうまつにびじゅつかんへいきます。", exampleKorean: "슈-마츠니 비쥬츠칸에 이키마스", exampleMeaning: "주말에 미술관에 갑니다.",
    breakdown: [
      { word: "週末に", reading: "しゅうまつに", meaning: "주말에" },
    ] },
  { level: "N5", kanji: "動物園", reading: "どうぶつえん", korean: "도-부츠엔", meaning: "동물원",
    example: "子供と動物園に行きました。", exampleReading: "こどもとどうぶつえんにいきました。", exampleKorean: "코도모토 도-부츠엔니 이키마시타", exampleMeaning: "아이와 동물원에 갔습니다.",
    breakdown: [
      { word: "子供と", reading: "こどもと", meaning: "아이와" },
    ] },
  { level: "N5", kanji: "喫茶店", reading: "きっさてん", korean: "킷사텐", meaning: "찻집",
    example: "喫茶店でコーヒーを飲みました。", exampleReading: "きっさてんでコーヒーをのみました。", exampleKorean: "킷사텐데 코-히-오 노미마시타", exampleMeaning: "찻집에서 커피를 마셨습니다.",
    breakdown: [
      { word: "コーヒー", reading: "コーヒー", meaning: "커피" },
    ] },
  { level: "N5", kanji: "家族", reading: "かぞく", korean: "카조쿠", meaning: "가족",
    example: "家族は四人です。", exampleReading: "かぞくはよにんです。", exampleKorean: "카조쿠와 요닌데스", exampleMeaning: "가족은 네 명입니다.",
    breakdown: [
      { word: "四人", reading: "よにん", meaning: "네 명" },
    ] },
  { level: "N5", kanji: "主人", reading: "しゅじん", korean: "슈진", meaning: "남편",
    example: "主人は今、出張中です。", exampleReading: "しゅじんはいま、しゅっちょうちゅうです。", exampleKorean: "슈진와 이마 슛쵸-츄-데스", exampleMeaning: "남편은 지금 출장 중입니다.",
    breakdown: [
      { word: "出張中", reading: "しゅっちょうちゅう", meaning: "출장 중" },
    ] },
  { level: "N5", kanji: "店員", reading: "てんいん", korean: "텡잉", meaning: "점원",
    example: "店員に道を聞きました。", exampleReading: "てんいんにみちをききました。", exampleKorean: "텡인니 미치오 키키마시타", exampleMeaning: "점원에게 길을 물었습니다.",
    breakdown: [
      { word: "聞きました", reading: "ききました", meaning: "물었습니다" },
    ] },
  { level: "N5", kanji: "お客さん", reading: "おきゃくさん", korean: "오캬쿠상", meaning: "손님",
    example: "店にお客さんがたくさんいます。", exampleReading: "みせにおきゃくさんがたくさんいます。", exampleKorean: "미세니 오캬쿠상가 타쿠상 이마스", exampleMeaning: "가게에 손님이 많이 있습니다.",
    breakdown: [
      { word: "店に", reading: "みせに", meaning: "가게에" },
    ] },
  { level: "N5", kanji: "授業", reading: "じゅぎょう", korean: "쥬교-", meaning: "수업",
    example: "授業は九時に始まります。", exampleReading: "じゅぎょうはくじにはじまります。", exampleKorean: "쥬교-와 쿠지니 하지마리마스", exampleMeaning: "수업은 9시에 시작됩니다.",
    breakdown: [
      { word: "九時に", reading: "くじに", meaning: "9시에" },
    ] },
  { level: "N5", kanji: "先輩", reading: "せんぱい", korean: "셈파이", meaning: "선배",
    example: "会社の先輩に相談しました。", exampleReading: "かいしゃのせんぱいにそうだんしました。", exampleKorean: "카이샤노 셈파이니 소-단 시마시타", exampleMeaning: "회사 선배와 상담했습니다.",
    breakdown: [
      { word: "相談しました", reading: "そうだんしました", meaning: "상담했습니다" },
    ] },
  { level: "N5", kanji: "後輩", reading: "こうはい", korean: "코-하이", meaning: "후배",
    example: "後輩に仕事を教えます。", exampleReading: "こうはいにしごとをおしえます。", exampleKorean: "코-하이니 시고토오 오시에마스", exampleMeaning: "후배에게 일을 가르칩니다.",
    breakdown: [
      { word: "教えます", reading: "おしえます", meaning: "가르칩니다" },
    ] },
  { level: "N5", kanji: "大学", reading: "だいがく", korean: "다이가쿠", meaning: "대학교",
    example: "大学で経済を勉強しています。", exampleReading: "だいがくでけいざいをべんきょうしています。", exampleKorean: "다이가쿠데 케-자이오 벵쿄- 시테이마스", exampleMeaning: "대학에서 경제를 공부하고 있습니다.",
    breakdown: [
      { word: "経済", reading: "けいざい", meaning: "경제" },
    ] },
  { level: "N5", kanji: "高校", reading: "こうこう", korean: "코-코-", meaning: "고등학교",
    example: "高校で日本語を習いました。", exampleReading: "こうこうでにほんごをならいました。", exampleKorean: "코-코-데 니홍고오 나라이마시타", exampleMeaning: "고등학교에서 일본어를 배웠습니다.",
    breakdown: [
      { word: "習いました", reading: "ならいました", meaning: "배웠습니다" },
    ] },
  { level: "N5", kanji: "クラス", reading: "クラス", korean: "쿠라스", meaning: "반, 클래스",
    example: "私たちは同じクラスです。", exampleReading: "わたしたちはおなじクラスです。", exampleKorean: "와타시타치와 오나지 쿠라스데스", exampleMeaning: "우리는 같은 반입니다.",
    breakdown: [
      { word: "同じ", reading: "おなじ", meaning: "같은" },
    ] },
  { level: "N5", kanji: "どこ", reading: "どこ", korean: "도코", meaning: "어디",
    example: "トイレはどこですか。", exampleReading: "トイレはどこですか。", exampleKorean: "토이레와 도코데스카", exampleMeaning: "화장실은 어디입니까?",
    breakdown: [
      { word: "トイレ", reading: "トイレ", meaning: "화장실" },
    ] },
  { level: "N5", kanji: "いつ", reading: "いつ", korean: "이츠", meaning: "언제",
    example: "誕生日はいつですか。", exampleReading: "たんじょうびはいつですか。", exampleKorean: "탄죠-비와 이츠데스카", exampleMeaning: "생일은 언제입니까?",
    breakdown: [
      { word: "誕生日", reading: "たんじょうび", meaning: "생일" },
    ] },
  { level: "N5", kanji: "誰", reading: "だれ", korean: "다레", meaning: "누구",
    example: "あの人は誰ですか。", exampleReading: "あのひとはだれですか。", exampleKorean: "아노 히토와 다레데스카", exampleMeaning: "저 사람은 누구입니까?",
    breakdown: [
      { word: "あの人", reading: "あのひと", meaning: "저 사람" },
    ] },
  { level: "N5", kanji: "どう", reading: "どう", korean: "도-", meaning: "어떻게",
    example: "この料理はどうやって作りますか。", exampleReading: "このりょうりはどうやってつくりますか。", exampleKorean: "코노 료-리와 도- 얏테 츠쿠리마스카", exampleMeaning: "이 요리는 어떻게 만듭니까?",
    breakdown: [
      { word: "どうやって", reading: "どうやって", meaning: "어떻게 (방법)" },
    ] },
  { level: "N5", kanji: "なぜ", reading: "なぜ", korean: "나제", meaning: "왜",
    example: "なぜ遅刻したのですか。", exampleReading: "なぜちこくしたのですか。", exampleKorean: "나제 치코쿠시타노데스카", exampleMeaning: "왜 지각했습니까?",
    breakdown: [
      { word: "遅刻した", reading: "ちこくした", meaning: "지각했다" },
    ] },
  { level: "N5", kanji: "たくさん", reading: "たくさん", korean: "타쿠상", meaning: "많이",
    example: "今日はたくさん歩きました。", exampleReading: "きょうはたくさんあるきました。", exampleKorean: "쿄-와 타쿠상 아루키마시타", exampleMeaning: "오늘은 많이 걸었습니다.",
    breakdown: [
      { word: "歩きました", reading: "あるきました", meaning: "걸었습니다" },
    ] },
  { level: "N5", kanji: "少し", reading: "すこし", korean: "스코시", meaning: "조금",
    example: "少し休みたいです。", exampleReading: "すこしやすみたいです。", exampleKorean: "스코시 야스미타이데스", exampleMeaning: "조금 쉬고 싶습니다.",
    breakdown: [
      { word: "休みたいです", reading: "やすみたいです", meaning: "쉬고 싶습니다" },
    ] },
  { level: "N5", kanji: "全部", reading: "ぜんぶ", korean: "젠부", meaning: "전부",
    example: "全部食べてしまいました。", exampleReading: "ぜんぶたべてしまいました。", exampleKorean: "젠부 타베테시마이마시타", exampleMeaning: "전부 먹어 버렸습니다.",
    breakdown: [
      { word: "てしまいました", reading: "てしまいました", meaning: "~해버렸습니다 (완료·아쉬움)" },
    ] },
  { level: "N5", kanji: "一緒に", reading: "いっしょに", korean: "잇쇼니", meaning: "함께",
    example: "一緒に映画を見ませんか。", exampleReading: "いっしょにえいがをみませんか。", exampleKorean: "잇쇼니 에-가오 미마셍카", exampleMeaning: "같이 영화 보지 않을래요?",
    breakdown: [
      { word: "ませんか", reading: "ませんか", meaning: "~하지 않겠습니까? (권유)" },
    ] },
  { level: "N5", kanji: "また", reading: "また", korean: "마타", meaning: "또",
    example: "また明日会いましょう。", exampleReading: "またあしたあいましょう。", exampleKorean: "마타 아시타 아이마쇼-", exampleMeaning: "내일 또 만납시다.",
    breakdown: [
      { word: "会いましょう", reading: "あいましょう", meaning: "만납시다" },
    ] },
  { level: "N5", kanji: "もう", reading: "もう", korean: "모-", meaning: "이미, 벌써",
    example: "もう宿題は終わりました。", exampleReading: "もうしゅくだいはおわりました。", exampleKorean: "모- 슈쿠다이와 오와리마시타", exampleMeaning: "이미 숙제는 끝냈습니다.",
    breakdown: [
      { word: "終わりました", reading: "おわりました", meaning: "끝났습니다" },
    ] },
  { level: "N5", kanji: "まだ", reading: "まだ", korean: "마다", meaning: "아직",
    example: "まだ準備ができていません。", exampleReading: "まだじゅんびができていません。", exampleKorean: "마다 준비가 데키테이마셍", exampleMeaning: "아직 준비가 안 되었습니다.",
    breakdown: [
      { word: "できていません", reading: "できていません", meaning: "안 되어 있습니다" },
    ] },
  { level: "N5", kanji: "すぐ", reading: "すぐ", korean: "스구", meaning: "바로, 금방",
    example: "すぐ戻ります。", exampleReading: "すぐもどります。", exampleKorean: "스구 모도리마스", exampleMeaning: "바로 돌아오겠습니다.",
    breakdown: [
      { word: "戻ります", reading: "もどります", meaning: "돌아옵니다" },
    ] },
  { level: "N5", kanji: "ゆっくり", reading: "ゆっくり", korean: "육쿠리", meaning: "천천히",
    example: "ゆっくり休んでください。", exampleReading: "ゆっくりやすんでください。", exampleKorean: "육쿠리 야슨데쿠다사이", exampleMeaning: "천천히 쉬세요.",
    breakdown: [
      { word: "休んでください", reading: "やすんでください", meaning: "쉬어 주세요" },
    ] },
  { level: "N5", kanji: "早く", reading: "はやく", korean: "하야쿠", meaning: "빨리",
    example: "早く来てください。", exampleReading: "はやくきてください。", exampleKorean: "하야쿠 키테쿠다사이", exampleMeaning: "빨리 와 주세요.",
    breakdown: [
      { word: "来てください", reading: "きてください", meaning: "와 주세요" },
    ] },
  { level: "N5", kanji: "歌う", reading: "うたう", korean: "우타우", meaning: "노래하다",
    example: "カラオケで歌を歌います。", exampleReading: "カラオケでうたをうたいます。", exampleKorean: "카라오케데 우타오 우타이마스", exampleMeaning: "노래방에서 노래를 부릅니다.",
    breakdown: [
      { word: "カラオケで", reading: "カラオケで", meaning: "노래방에서" },
    ] },
  { level: "N5", kanji: "踊る", reading: "おどる", korean: "오도루", meaning: "춤추다",
    example: "パーティーで楽しく踊りました。", exampleReading: "パーティーでたのしくおどりました。", exampleKorean: "파-티-데 타노시쿠 오도리마시타", exampleMeaning: "파티에서 즐겁게 춤을 췄습니다.",
    breakdown: [
      { word: "楽しく", reading: "たのしく", meaning: "즐겁게" },
    ] },
  { level: "N5", kanji: "撮る", reading: "とる", korean: "토루", meaning: "찍다",
    example: "家族の写真を撮りました。", exampleReading: "かぞくのしゃしんをとりました。", exampleKorean: "카조쿠노 샤신오 토리마시타", exampleMeaning: "가족 사진을 찍었습니다.",
    breakdown: [
      { word: "写真", reading: "しゃしん", meaning: "사진" },
    ] },
  { level: "N5", kanji: "送る", reading: "おくる", korean: "오쿠루", meaning: "보내다",
    example: "友達にメールを送りました。", exampleReading: "ともだちにメールをおくりました。", exampleKorean: "도모다치니 메-루오 오쿠리마시타", exampleMeaning: "친구에게 메일을 보냈습니다.",
    breakdown: [
      { word: "メール", reading: "メール", meaning: "메일" },
    ] },
  { level: "N5", kanji: "もらう", reading: "もらう", korean: "모라우", meaning: "받다",
    example: "誕生日にプレゼントをもらいました。", exampleReading: "たんじょうびにプレゼントをもらいました。", exampleKorean: "탄죠-비니 프레젠토오 모라이마시타", exampleMeaning: "생일에 선물을 받았습니다.",
    breakdown: [
      { word: "プレゼント", reading: "プレゼント", meaning: "선물" },
    ] },
  { level: "N5", kanji: "あげる", reading: "あげる", korean: "아게루", meaning: "주다",
    example: "妹にお菓子をあげました。", exampleReading: "いもうとにおかしをあげました。", exampleKorean: "이모-토니 오카시오 아게마시타", exampleMeaning: "여동생에게 과자를 주었습니다.",
    breakdown: [
      { word: "お菓子", reading: "おかし", meaning: "과자" },
    ] },
  { level: "N5", kanji: "貸す", reading: "かす", korean: "카스", meaning: "빌려주다",
    example: "友達に本を貸しました。", exampleReading: "ともだちにほんをかしました。", exampleKorean: "도모다치니 홍오 카시마시타", exampleMeaning: "친구에게 책을 빌려주었습니다.",
    breakdown: [
      { word: "友達に", reading: "ともだちに", meaning: "친구에게" },
    ] },
  { level: "N5", kanji: "借りる", reading: "かりる", korean: "카리루", meaning: "빌리다",
    example: "図書館で本を借りました。", exampleReading: "としょかんでほんをかりました。", exampleKorean: "토쇼칸데 홍오 카리마시타", exampleMeaning: "도서관에서 책을 빌렸습니다.",
    breakdown: [
      { word: "図書館で", reading: "としょかんで", meaning: "도서관에서" },
    ] },
  { level: "N5", kanji: "待つ", reading: "まつ", korean: "마츠", meaning: "기다리다",
    example: "駅で友達を待ちます。", exampleReading: "えきでともだちをまちます。", exampleKorean: "에키데 도모다치오 마치마스", exampleMeaning: "역에서 친구를 기다립니다.",
    breakdown: [
      { word: "駅で", reading: "えきで", meaning: "역에서" },
    ] },
  { level: "N5", kanji: "手伝う", reading: "てつだう", korean: "테츠다우", meaning: "돕다",
    example: "母の家事を手伝います。", exampleReading: "ははのかじをてつだいます。", exampleKorean: "하하노 카지오 테츠다이마스", exampleMeaning: "엄마의 집안일을 돕습니다.",
    breakdown: [
      { word: "家事", reading: "かじ", meaning: "집안일" },
    ] },
  { level: "N5", kanji: "始める", reading: "はじめる", korean: "하지메루", meaning: "시작하다",
    example: "新しい仕事を始めました。", exampleReading: "あたらしいしごとをはじめました。", exampleKorean: "아타라시- 시고토오 하지메마시타", exampleMeaning: "새로운 일을 시작했습니다.",
    breakdown: [
      { word: "新しい仕事", reading: "あたらしいしごと", meaning: "새로운 일" },
    ] },
  { level: "N5", kanji: "終わる", reading: "おわる", korean: "오와루", meaning: "끝나다",
    example: "会議は五時に終わりました。", exampleReading: "かいぎはごじにおわりました。", exampleKorean: "카이기와 고지니 오와리마시타", exampleMeaning: "회의는 5시에 끝났습니다.",
    breakdown: [
      { word: "五時に", reading: "ごじに", meaning: "5시에" },
    ] },
  { level: "N5", kanji: "休む", reading: "やすむ", korean: "야스무", meaning: "쉬다",
    example: "今日は家で休みます。", exampleReading: "きょうはいえでやすみます。", exampleKorean: "쿄-와 이에데 야스미마스", exampleMeaning: "오늘은 집에서 쉽니다.",
    breakdown: [
      { word: "家で", reading: "いえで", meaning: "집에서" },
    ] },
  { level: "N5", kanji: "難しい", reading: "むずかしい", korean: "무즈카시-", meaning: "어렵다",
    example: "この問題は難しいです。", exampleReading: "このもんだいはむずかしいです。", exampleKorean: "코노 몬다이와 무즈카시-데스", exampleMeaning: "이 문제는 어렵습니다.",
    breakdown: [
      { word: "問題", reading: "もんだい", meaning: "문제" },
    ] },
  { level: "N5", kanji: "面白い", reading: "おもしろい", korean: "오모시로이", meaning: "재미있다",
    example: "この本はとても面白いです。", exampleReading: "このほんはとてもおもしろいです。", exampleKorean: "코노 홍와 도테모 오모시로이데스", exampleMeaning: "이 책은 아주 재미있습니다.",
    breakdown: [
      { word: "とても", reading: "とても", meaning: "아주" },
    ] },

  { level: "N5", kanji: "一", reading: "いち", korean: "이치", meaning: "하나, 1",
    example: "一番好きな色は何ですか。", exampleReading: "いちばんすきないろはなんですか。", exampleKorean: "이치반 스키나 이로와 난데스카", exampleMeaning: "제일 좋아하는 색은 무엇입니까?",
    breakdown: [
      { word: "一番", reading: "いちばん", meaning: "제일" },
      { word: "色", reading: "いろ", meaning: "색" },
    ] },
  { level: "N5", kanji: "二", reading: "に", korean: "니", meaning: "둘, 2",
    example: "二階に上がってください。", exampleReading: "にかいにあがってください。", exampleKorean: "니카이니 아갓테쿠다사이", exampleMeaning: "2층으로 올라가 주세요.",
    breakdown: [
      { word: "上がってください", reading: "あがってください", meaning: "올라가 주세요" },
    ] },
  { level: "N5", kanji: "三", reading: "さん", korean: "상", meaning: "셋, 3",
    example: "三時にまた来ます。", exampleReading: "さんじにまたきます。", exampleKorean: "산지니 마타 키마스", exampleMeaning: "3시에 다시 오겠습니다.",
    breakdown: [
      { word: "また", reading: "また", meaning: "또" },
    ] },
  { level: "N5", kanji: "四", reading: "よん", korean: "욘", meaning: "넷, 4",
    example: "四番のバスに乗ります。", exampleReading: "よんばんのバスにのります。", exampleKorean: "욘반노 바스니 노리마스", exampleMeaning: "4번 버스를 탑니다.",
    breakdown: [
      { word: "乗ります", reading: "のります", meaning: "탑니다" },
    ] },
  { level: "N5", kanji: "五", reading: "ご", korean: "고", meaning: "다섯, 5",
    example: "五分だけ待ってください。", exampleReading: "ごふんだけまってください。", exampleKorean: "고훈다케 맛테쿠다사이", exampleMeaning: "5분만 기다려 주세요.",
    breakdown: [
      { word: "だけ", reading: "だけ", meaning: "~만" },
    ] },
  { level: "N5", kanji: "六", reading: "ろく", korean: "로쿠", meaning: "여섯, 6",
    example: "六時に起きます。", exampleReading: "ろくじにおきます。", exampleKorean: "로쿠지니 오키마스", exampleMeaning: "6시에 일어납니다.",
    breakdown: [
      { word: "起きます", reading: "おきます", meaning: "일어납니다" },
    ] },
  { level: "N5", kanji: "七", reading: "なな", korean: "나나", meaning: "일곱, 7",
    example: "七月は暑いです。", exampleReading: "しちがつはあついです。", exampleKorean: "시치가츠와 아츠이데스", exampleMeaning: "7월은 덥습니다.",
    breakdown: [
      { word: "暑いです", reading: "あついです", meaning: "덥습니다" },
    ] },
  { level: "N5", kanji: "八", reading: "はち", korean: "하치", meaning: "여덟, 8",
    example: "八時に家を出ます。", exampleReading: "はちじにいえをでます。", exampleKorean: "하치지니 이에오 데마스", exampleMeaning: "8시에 집을 나갑니다.",
    breakdown: [
      { word: "出ます", reading: "でます", meaning: "나갑니다" },
    ] },
  { level: "N5", kanji: "九", reading: "きゅう", korean: "큐-", meaning: "아홉, 9",
    example: "九月に運動会があります。", exampleReading: "くがつにうんどうかいがあります。", exampleKorean: "쿠가츠니 운도-카이가 아리마스", exampleMeaning: "9월에 운동회가 있습니다.",
    breakdown: [
      { word: "運動会", reading: "うんどうかい", meaning: "운동회" },
    ] },
  { level: "N5", kanji: "十", reading: "じゅう", korean: "쥬-", meaning: "열, 10",
    example: "十分後に始めます。", exampleReading: "じゅっぷんごにはじめます。", exampleKorean: "쥿푼고니 하지메마스", exampleMeaning: "10분 후에 시작합니다.",
    breakdown: [
      { word: "後に", reading: "ごに", meaning: "후에" },
    ] },
  { level: "N5", kanji: "百", reading: "ひゃく", korean: "햐쿠", meaning: "백, 100",
    example: "これは百円です。", exampleReading: "これはひゃくえんです。", exampleKorean: "코레와 햐쿠엔데스", exampleMeaning: "이것은 백 엔입니다.",
    breakdown: [
      { word: "円", reading: "えん", meaning: "엔 (일본 화폐 단위)" },
    ] },
  { level: "N5", kanji: "千", reading: "せん", korean: "센", meaning: "천, 1000",
    example: "千円札を持っています。", exampleReading: "せんえんさつをもっています。", exampleKorean: "센엔사츠오 못테이마스", exampleMeaning: "천 엔짜리 지폐를 가지고 있습니다.",
    breakdown: [
      { word: "札", reading: "さつ", meaning: "지폐" },
    ] },
  { level: "N5", kanji: "万", reading: "まん", korean: "만", meaning: "만, 10000",
    example: "一万円で足りますか。", exampleReading: "いちまんえんでたりますか。", exampleKorean: "이치만엔데 타리마스카", exampleMeaning: "만 엔으로 충분합니까?",
    breakdown: [
      { word: "足りますか", reading: "たりますか", meaning: "충분합니까?" },
    ] },
  { level: "N5", kanji: "何", reading: "なに", korean: "나니", meaning: "무엇",
    example: "何を食べたいですか。", exampleReading: "なにをたべたいですか。", exampleKorean: "나니오 타베타이데스카", exampleMeaning: "무엇을 먹고 싶습니까?",
    breakdown: [
      { word: "たいですか", reading: "たいですか", meaning: "~하고 싶습니까?" },
    ] },
  { level: "N5", kanji: "いくつ", reading: "いくつ", korean: "이쿠츠", meaning: "몇 개",
    example: "りんごはいくつありますか。", exampleReading: "りんごはいくつありますか。", exampleKorean: "링고와 이쿠츠 아리마스카", exampleMeaning: "사과는 몇 개 있습니까?",
    breakdown: [
      { word: "ありますか", reading: "ありますか", meaning: "있습니까?" },
    ] },
  { level: "N5", kanji: "いくら", reading: "いくら", korean: "이쿠라", meaning: "얼마",
    example: "これはいくらですか。", exampleReading: "これはいくらですか。", exampleKorean: "코레와 이쿠라데스카", exampleMeaning: "이것은 얼마입니까?",
    breakdown: [
      { word: "これ", reading: "これ", meaning: "이것" },
    ] },
  { level: "N5", kanji: "鳥", reading: "とり", korean: "토리", meaning: "새",
    example: "木の上に鳥がいます。", exampleReading: "きのうえにとりがいます。", exampleKorean: "키노 우에니 토리가 이마스", exampleMeaning: "나무 위에 새가 있습니다.",
    breakdown: [
      { word: "木の上に", reading: "きのうえに", meaning: "나무 위에" },
    ] },
  { level: "N5", kanji: "馬", reading: "うま", korean: "우마", meaning: "말",
    example: "馬に乗ったことがあります。", exampleReading: "うまにのったことがあります。", exampleKorean: "우마니 놋타 코토가 아리마스", exampleMeaning: "말을 타 본 적이 있습니다.",
    breakdown: [
      { word: "たことがあります", reading: "たことがあります", meaning: "~한 적이 있습니다 (경험)" },
    ] },
  { level: "N5", kanji: "牛", reading: "うし", korean: "우시", meaning: "소",
    example: "牧場で牛を見ました。", exampleReading: "ぼくじょうでうしをみました。", exampleKorean: "보쿠죠-데 우시오 미마시타", exampleMeaning: "목장에서 소를 봤습니다.",
    breakdown: [
      { word: "牧場", reading: "ぼくじょう", meaning: "목장" },
    ] },
  { level: "N5", kanji: "豚", reading: "ぶた", korean: "부타", meaning: "돼지",
    example: "豚肉を買いました。", exampleReading: "ぶたにくをかいました。", exampleKorean: "부타니쿠오 카이마시타", exampleMeaning: "돼지고기를 샀습니다.",
    breakdown: [
      { word: "豚肉", reading: "ぶたにく", meaning: "돼지고기" },
    ] },
  { level: "N5", kanji: "米", reading: "こめ", korean: "코메", meaning: "쌀",
    example: "毎日、米を食べます。", exampleReading: "まいにち、こめをたべます。", exampleKorean: "마이니치 코메오 타베마스", exampleMeaning: "매일 쌀을 먹습니다.",
    breakdown: [
      { word: "毎日", reading: "まいにち", meaning: "매일" },
    ] },
  { level: "N5", kanji: "パン", reading: "パン", korean: "팡", meaning: "빵",
    example: "朝はパンを食べます。", exampleReading: "あさはパンをたべます。", exampleKorean: "아사와 팡오 타베마스", exampleMeaning: "아침은 빵을 먹습니다.",
    breakdown: [
      { word: "朝は", reading: "あさは", meaning: "아침은" },
    ] },
  { level: "N5", kanji: "ラーメン", reading: "ラーメン", korean: "라-멘", meaning: "라면",
    example: "昼にラーメンを食べました。", exampleReading: "ひるにラーメンをたべました。", exampleKorean: "히루니 라-멘오 타베마시타", exampleMeaning: "점심에 라멘을 먹었습니다.",
    breakdown: [
      { word: "昼に", reading: "ひるに", meaning: "점심에" },
    ] },
  { level: "N5", kanji: "カレー", reading: "カレー", korean: "카레-", meaning: "카레",
    example: "今晩はカレーを作ります。", exampleReading: "こんばんはカレーをつくります。", exampleKorean: "콤방와 카레-오 츠쿠리마스", exampleMeaning: "오늘 밤은 카레를 만듭니다.",
    breakdown: [
      { word: "今晩", reading: "こんばん", meaning: "오늘 밤" },
    ] },
  { level: "N5", kanji: "スープ", reading: "スープ", korean: "스-프", meaning: "수프",
    example: "温かいスープを飲みました。", exampleReading: "あたたかいスープをのみました。", exampleKorean: "아타타카이 스-프오 노미마시타", exampleMeaning: "따뜻한 수프를 마셨습니다.",
    breakdown: [
      { word: "温かい", reading: "あたたかい", meaning: "따뜻하다" },
    ] },
  { level: "N5", kanji: "サラダ", reading: "サラダ", korean: "사라다", meaning: "샐러드",
    example: "サラダをたくさん食べます。", exampleReading: "サラダをたくさんたべます。", exampleKorean: "사라다오 타쿠상 타베마스", exampleMeaning: "샐러드를 많이 먹습니다.",
    breakdown: [
      { word: "たくさん", reading: "たくさん", meaning: "많이" },
    ] },
  { level: "N5", kanji: "お菓子", reading: "おかし", korean: "오카시", meaning: "과자",
    example: "お菓子を子供にあげました。", exampleReading: "おかしをこどもにあげました。", exampleKorean: "오카시오 코도모니 아게마시타", exampleMeaning: "과자를 아이에게 주었습니다.",
    breakdown: [
      { word: "子供に", reading: "こどもに", meaning: "아이에게" },
    ] },
  { level: "N5", kanji: "アイス", reading: "アイス", korean: "아이스", meaning: "아이스크림",
    example: "暑いのでアイスを食べます。", exampleReading: "あついのでアイスをたべます。", exampleKorean: "아츠이노데 아이스오 타베마스", exampleMeaning: "더워서 아이스크림을 먹습니다.",
    breakdown: [
      { word: "ので", reading: "ので", meaning: "~해서" },
    ] },
  { level: "N5", kanji: "ジュース", reading: "ジュース", korean: "쥬-스", meaning: "주스",
    example: "オレンジジュースが好きです。", exampleReading: "オレンジジュースがすきです。", exampleKorean: "오렌지 쥬-스가 스키데스", exampleMeaning: "오렌지 주스를 좋아합니다.",
    breakdown: [
      { word: "オレンジ", reading: "オレンジ", meaning: "오렌지" },
    ] },
  { level: "N5", kanji: "ビール", reading: "ビール", korean: "비-루", meaning: "맥주",
    example: "父はビールが好きです。", exampleReading: "ちちはビールがすきです。", exampleKorean: "치치와 비-루가 스키데스", exampleMeaning: "아버지는 맥주를 좋아합니다.",
    breakdown: [
      { word: "好きです", reading: "すきです", meaning: "좋아합니다" },
    ] },
  { level: "N5", kanji: "お酒", reading: "おさけ", korean: "오사케", meaning: "술",
    example: "お酒はあまり飲みません。", exampleReading: "おさけはあまりのみません。", exampleKorean: "오사케와 아마리 노미마셍", exampleMeaning: "술은 별로 마시지 않습니다.",
    breakdown: [
      { word: "あまり~ません", reading: "あまり~ません", meaning: "그다지 ~하지 않습니다" },
    ] },
  { level: "N5", kanji: "箸", reading: "はし", korean: "하시", meaning: "젓가락",
    example: "箸で食べます。", exampleReading: "はしでたべます。", exampleKorean: "하시데 타베마스", exampleMeaning: "젓가락으로 먹습니다.",
    breakdown: [
      { word: "で", reading: "で", meaning: "~로 (도구 조사)" },
    ] },
  { level: "N5", kanji: "フォーク", reading: "フォーク", korean: "포-쿠", meaning: "포크",
    example: "フォークを使ってください。", exampleReading: "フォークをつかってください。", exampleKorean: "포-쿠오 츠캇테쿠다사이", exampleMeaning: "포크를 사용해 주세요.",
    breakdown: [
      { word: "使ってください", reading: "つかってください", meaning: "사용해 주세요" },
    ] },
  { level: "N5", kanji: "スプーン", reading: "スプーン", korean: "스푸-ㄴ", meaning: "숟가락",
    example: "スープをスプーンで飲みます。", exampleReading: "スープをスプーンでのみます。", exampleKorean: "스-프오 스푸-ㄴ데 노미마스", exampleMeaning: "수프를 숟가락으로 먹습니다.",
    breakdown: [
      { word: "飲みます", reading: "のみます", meaning: "마십니다" },
    ] },
  { level: "N5", kanji: "お皿", reading: "おさら", korean: "오사라", meaning: "접시",
    example: "お皿を洗います。", exampleReading: "おさらをあらいます。", exampleKorean: "오사라오 아라이마스", exampleMeaning: "접시를 씻습니다.",
    breakdown: [
      { word: "洗います", reading: "あらいます", meaning: "씻습니다" },
    ] },
  { level: "N5", kanji: "コップ", reading: "コップ", korean: "콥푸", meaning: "컵",
    example: "コップに水を入れます。", exampleReading: "コップにみずをいれます。", exampleKorean: "콥푸니 미즈오 이레마스", exampleMeaning: "컵에 물을 넣습니다.",
    breakdown: [
      { word: "入れます", reading: "いれます", meaning: "넣습니다" },
    ] },
  { level: "N5", kanji: "鍋", reading: "なべ", korean: "나베", meaning: "냄비",
    example: "鍋でスープを作ります。", exampleReading: "なべでスープをつくります。", exampleKorean: "나베데 스-프오 츠쿠리마스", exampleMeaning: "냄비로 수프를 만듭니다.",
    breakdown: [
      { word: "作ります", reading: "つくります", meaning: "만듭니다" },
    ] },
  { level: "N5", kanji: "フライパン", reading: "フライパン", korean: "후라이판", meaning: "프라이팬",
    example: "フライパンで卵を焼きます。", exampleReading: "フライパンでたまごをやきます。", exampleKorean: "후라이판데 타마고오 야키마스", exampleMeaning: "프라이팬으로 달걀을 굽습니다.",
    breakdown: [
      { word: "卵", reading: "たまご", meaning: "달걀" },
    ] },
  { level: "N5", kanji: "台所", reading: "だいどころ", korean: "다이도코로", meaning: "부엌",
    example: "台所で料理をしています。", exampleReading: "だいどころでりょうりをしています。", exampleKorean: "다이도코로데 료-리오 시테이마스", exampleMeaning: "부엌에서 요리를 하고 있습니다.",
    breakdown: [
      { word: "料理をしています", reading: "りょうりをしています", meaning: "요리를 하고 있습니다" },
    ] },
  { level: "N5", kanji: "庭", reading: "にわ", korean: "니와", meaning: "마당, 정원",
    example: "庭に花を植えました。", exampleReading: "にわにはなをうえました。", exampleKorean: "니와니 하나오 우에마시타", exampleMeaning: "마당에 꽃을 심었습니다.",
    breakdown: [
      { word: "植えました", reading: "うえました", meaning: "심었습니다" },
    ] },
  { level: "N5", kanji: "屋根", reading: "やね", korean: "야네", meaning: "지붕",
    example: "屋根の上に猫がいます。", exampleReading: "やねのうえにねこがいます。", exampleKorean: "야네노 우에니 네코가 이마스", exampleMeaning: "지붕 위에 고양이가 있습니다.",
    breakdown: [
      { word: "上に", reading: "うえに", meaning: "위에" },
    ] },
  { level: "N5", kanji: "階段", reading: "かいだん", korean: "카이단", meaning: "계단",
    example: "階段を上ります。", exampleReading: "かいだんをのぼります。", exampleKorean: "카이단오 노보리마스", exampleMeaning: "계단을 오릅니다.",
    breakdown: [
      { word: "上ります", reading: "のぼります", meaning: "오릅니다" },
    ] },
  { level: "N5", kanji: "エレベーター", reading: "エレベーター", korean: "에레베-타-", meaning: "엘리베이터",
    example: "エレベーターで五階に行きます。", exampleReading: "エレベーターでごかいにいきます。", exampleKorean: "에레베-타-데 고카이니 이키마스", exampleMeaning: "엘리베이터로 5층에 갑니다.",
    breakdown: [
      { word: "五階", reading: "ごかい", meaning: "5층" },
    ] },
  { level: "N5", kanji: "サッカー", reading: "サッカー", korean: "삭카-", meaning: "축구",
    example: "週末にサッカーをします。", exampleReading: "しゅうまつにサッカーをします。", exampleKorean: "슈-마츠니 삭카-오 시마스", exampleMeaning: "주말에 축구를 합니다.",
    breakdown: [
      { word: "週末に", reading: "しゅうまつに", meaning: "주말에" },
    ] },
  { level: "N5", kanji: "野球", reading: "やきゅう", korean: "야큐-", meaning: "야구",
    example: "野球の試合を見に行きます。", exampleReading: "やきゅうのしあいをみにいきます。", exampleKorean: "야큐-노 시아이오 미니 이키마스", exampleMeaning: "야구 시합을 보러 갑니다.",
    breakdown: [
      { word: "試合", reading: "しあい", meaning: "시합" },
    ] },
  { level: "N5", kanji: "テニス", reading: "テニス", korean: "테니스", meaning: "테니스",
    example: "友達とテニスをします。", exampleReading: "ともだちとテニスをします。", exampleKorean: "도모다치토 테니스오 시마스", exampleMeaning: "친구와 테니스를 칩니다.",
    breakdown: [
      { word: "友達と", reading: "ともだちと", meaning: "친구와" },
    ] },
  { level: "N5", kanji: "スキー", reading: "スキー", korean: "스키-", meaning: "스키",
    example: "冬にスキーをしに行きます。", exampleReading: "ふゆにスキーをしにいきます。", exampleKorean: "후유니 스키-오 시니 이키마스", exampleMeaning: "겨울에 스키를 타러 갑니다.",
    breakdown: [
      { word: "しに行きます", reading: "しにいきます", meaning: "하러 갑니다" },
    ] },
  { level: "N5", kanji: "試合", reading: "しあい", korean: "시아이", meaning: "시합",
    example: "明日、大事な試合があります。", exampleReading: "あした、だいじなしあいがあります。", exampleKorean: "아시타 다이지나 시아이가 아리마스", exampleMeaning: "내일 중요한 시합이 있습니다.",
    breakdown: [
      { word: "大事な", reading: "だいじな", meaning: "중요한" },
    ] },
  { level: "N5", kanji: "チーム", reading: "チーム", korean: "치-무", meaning: "팀",
    example: "私たちのチームが勝ちました。", exampleReading: "わたしたちのチームがかちました。", exampleKorean: "와타시타치노 치-무가 카치마시타", exampleMeaning: "우리 팀이 이겼습니다.",
    breakdown: [
      { word: "勝ちました", reading: "かちました", meaning: "이겼습니다" },
    ] },
  { level: "N5", kanji: "選手", reading: "せんしゅ", korean: "센슈", meaning: "선수",
    example: "有名な選手に会いました。", exampleReading: "ゆうめいなせんしゅにあいました。", exampleKorean: "유-메-나 센슈니 아이마시타", exampleMeaning: "유명한 선수를 만났습니다.",
    breakdown: [
      { word: "有名な", reading: "ゆうめいな", meaning: "유명한" },
    ] },

  { level: "N5", kanji: "おはよう", reading: "おはよう", korean: "오하요-", meaning: "안녕 (아침 인사)",
    example: "毎朝、おはようと挨拶します。", exampleReading: "まいあさ、おはようとあいさつします。", exampleKorean: "마이아사 오하요-토 아이사츠 시마스", exampleMeaning: "매일 아침 \"안녕\"이라고 인사합니다.",
    breakdown: [
      { word: "挨拶します", reading: "あいさつします", meaning: "인사합니다" }
    ] },
  { level: "N5", kanji: "こんにちは", reading: "こんにちは", korean: "콘니치와", meaning: "안녕하세요 (낮 인사)",
    example: "先生にこんにちはと言いました。", exampleReading: "せんせいにこんにちはといいました。", exampleKorean: "센세-니 콘니치와토 이이마시타", exampleMeaning: "선생님께 \"안녕하세요\"라고 말했습니다.",
    breakdown: [
      { word: "言いました", reading: "いいました", meaning: "말했습니다" }
    ] },
  { level: "N5", kanji: "こんばんは", reading: "こんばんは", korean: "콤방와", meaning: "안녕하세요 (밤 인사)",
    example: "友達にこんばんはと言われました。", exampleReading: "ともだちにこんばんはといわれました。", exampleKorean: "도모다치니 콤방와토 이와레마시타", exampleMeaning: "친구에게 \"안녕하세요\"라는 인사를 받았습니다.",
    breakdown: [
      { word: "言われました", reading: "いわれました", meaning: "(그렇게) 말해졌습니다, 인사를 받았습니다" }
    ] },
  { level: "N5", kanji: "さようなら", reading: "さようなら", korean: "사요-나라", meaning: "안녕히 가세요",
    example: "先生にさようならを言いました。", exampleReading: "せんせいにさようならをいいました。", exampleKorean: "센세-니 사요-나라오 이이마시타", exampleMeaning: "선생님께 작별인사를 했습니다.",
    breakdown: [
      { word: "を言いました", reading: "をいいました", meaning: "~을 말했습니다" }
    ] },
  { level: "N5", kanji: "ありがとう", reading: "ありがとう", korean: "아리가토-", meaning: "고맙습니다",
    example: "プレゼントをもらってありがとうと言いました。", exampleReading: "プレゼントをもらってありがとうといいました。", exampleKorean: "프레젠토오 모랏테 아리가토-토 이이마시타", exampleMeaning: "선물을 받고 고맙다고 말했습니다.",
    breakdown: [
      { word: "もらって", reading: "もらって", meaning: "받고" }
    ] },
  { level: "N5", kanji: "すみません", reading: "すみません", korean: "스미마셍", meaning: "죄송합니다, 실례합니다",
    example: "遅れてすみません。", exampleReading: "おくれてすみません。", exampleKorean: "오쿠레테 스미마셍", exampleMeaning: "늦어서 죄송합니다.",
    breakdown: [
      { word: "遅れて", reading: "おくれて", meaning: "늦어서" }
    ] },
  { level: "N5", kanji: "ごめんなさい", reading: "ごめんなさい", korean: "고멘나사이", meaning: "미안합니다",
    example: "約束を忘れてごめんなさい。", exampleReading: "やくそくをわすれてごめんなさい。", exampleKorean: "야쿠소쿠오 와스레테 고멘나사이", exampleMeaning: "약속을 잊어서 미안합니다.",
    breakdown: [
      { word: "約束", reading: "やくそく", meaning: "약속" }
    ] },
  { level: "N5", kanji: "お願いします", reading: "おねがいします", korean: "오네가이시마스", meaning: "부탁합니다",
    example: "よろしくお願いします。", exampleReading: "よろしくおねがいします。", exampleKorean: "요로시쿠 오네가이시마스", exampleMeaning: "잘 부탁드립니다.",
    breakdown: [
      { word: "よろしく", reading: "よろしく", meaning: "잘" }
    ] },
  { level: "N5", kanji: "いただきます", reading: "いただきます", korean: "이타다키마스", meaning: "잘 먹겠습니다",
    example: "食事の前にいただきますと言います。", exampleReading: "しょくじのまえにいただきますといいます。", exampleKorean: "쇼쿠지노 마에니 이타다키마스토 이이마스", exampleMeaning: "식사 전에 \"잘 먹겠습니다\"라고 말합니다.",
    breakdown: [
      { word: "食事の前に", reading: "しょくじのまえに", meaning: "식사 전에" }
    ] },
  { level: "N5", kanji: "ごちそうさま", reading: "ごちそうさま", korean: "고치소-사마", meaning: "잘 먹었습니다",
    example: "食べ終わってごちそうさまと言いました。", exampleReading: "たべおわってごちそうさまといいました。", exampleKorean: "타베오왓테 고치소-사마토 이이마시타", exampleMeaning: "다 먹고 \"잘 먹었습니다\"라고 말했습니다.",
    breakdown: [
      { word: "食べ終わって", reading: "たべおわって", meaning: "다 먹고" }
    ] },
  { level: "N5", kanji: "色", reading: "いろ", korean: "이로", meaning: "색",
    example: "好きな色は青です。", exampleReading: "すきないろはあおです。", exampleKorean: "스키나 이로와 아오데스", exampleMeaning: "좋아하는 색은 파란색입니다.",
    breakdown: [
      { word: "青", reading: "あお", meaning: "파란색" }
    ] },
  { level: "N5", kanji: "茶色", reading: "ちゃいろ", korean: "챠이로", meaning: "갈색",
    example: "茶色の靴を買いました。", exampleReading: "ちゃいろのくつをかいました。", exampleKorean: "챠이로노 쿠츠오 카이마시타", exampleMeaning: "갈색 신발을 샀습니다.",
    breakdown: [
      { word: "靴", reading: "くつ", meaning: "신발" }
    ] },
  { level: "N5", kanji: "緑", reading: "みどり", korean: "미도리", meaning: "초록색",
    example: "緑の葉がきれいです。", exampleReading: "みどりのはがきれいです。", exampleKorean: "미도리노 하가 키레-데스", exampleMeaning: "초록색 잎이 예쁩니다.",
    breakdown: [
      { word: "葉", reading: "は", meaning: "잎" }
    ] },
  { level: "N5", kanji: "黄色", reading: "きいろ", korean: "키-로", meaning: "노란색",
    example: "黄色い花が咲いています。", exampleReading: "きいろいはながさいています。", exampleKorean: "키-로이 하나가 사이테이마스", exampleMeaning: "노란 꽃이 피어 있습니다.",
    breakdown: [
      { word: "咲いています", reading: "さいています", meaning: "피어 있습니다" }
    ] },
  { level: "N5", kanji: "鍵", reading: "かぎ", korean: "카기", meaning: "열쇠",
    example: "鍵をなくしてしまいました。", exampleReading: "かぎをなくしてしまいました。", exampleKorean: "카기오 나쿠시테시마이마시타", exampleMeaning: "열쇠를 잃어버리고 말았습니다.",
    breakdown: [
      { word: "なくしてしまいました", reading: "なくしてしまいました", meaning: "잃어버리고 말았습니다" }
    ] },
  { level: "N5", kanji: "時計", reading: "とけい", korean: "토케-", meaning: "시계",
    example: "この時計は正確です。", exampleReading: "このとけいはせいかくです。", exampleKorean: "코노 토케-와 세-카쿠데스", exampleMeaning: "이 시계는 정확합니다.",
    breakdown: [
      { word: "正確です", reading: "せいかくです", meaning: "정확합니다" }
    ] },
  { level: "N5", kanji: "カメラ", reading: "カメラ", korean: "카메라", meaning: "카메라",
    example: "新しいカメラで写真を撮ります。", exampleReading: "あたらしいカメラでしゃしんをとります。", exampleKorean: "아타라시- 카메라데 샤신오 토리마스", exampleMeaning: "새 카메라로 사진을 찍습니다.",
    breakdown: [
      { word: "写真", reading: "しゃしん", meaning: "사진" }
    ] },
  { level: "N5", kanji: "新聞", reading: "しんぶん", korean: "신붕", meaning: "신문",
    example: "毎朝、新聞を読みます。", exampleReading: "まいあさ、しんぶんをよみます。", exampleKorean: "마이아사 신붕오 요미마스", exampleMeaning: "매일 아침 신문을 읽습니다.",
    breakdown: [
      { word: "毎朝", reading: "まいあさ", meaning: "매일 아침" }
    ] },
  { level: "N5", kanji: "テレビ", reading: "テレビ", korean: "테레비", meaning: "텔레비전",
    example: "テレビでニュースを見ます。", exampleReading: "テレビでニュースをみます。", exampleKorean: "테레비데 뉴-스오 미마스", exampleMeaning: "텔레비전으로 뉴스를 봅니다.",
    breakdown: [
      { word: "ニュース", reading: "ニュース", meaning: "뉴스" }
    ] },
  { level: "N5", kanji: "ラジオ", reading: "ラジオ", korean: "라지오", meaning: "라디오",
    example: "車の中でラジオを聞きます。", exampleReading: "くるまのなかでラジオをききます。", exampleKorean: "쿠루마노 나카데 라지오오 키키마스", exampleMeaning: "차 안에서 라디오를 듣습니다.",
    breakdown: [
      { word: "車の中で", reading: "くるまのなかで", meaning: "차 안에서" }
    ] },
  { level: "N5", kanji: "コンビニ", reading: "コンビニ", korean: "콤비니", meaning: "편의점",
    example: "コンビニでお弁当を買いました。", exampleReading: "コンビニでおべんとうをかいました。", exampleKorean: "콤비니데 오벤토-오 카이마시타", exampleMeaning: "편의점에서 도시락을 샀습니다.",
    breakdown: [
      { word: "お弁当", reading: "おべんとう", meaning: "도시락" }
    ] },
  { level: "N5", kanji: "デパート", reading: "デパート", korean: "데파-토", meaning: "백화점",
    example: "デパートで服を買います。", exampleReading: "デパートでふくをかいます。", exampleKorean: "데파-토데 후쿠오 카이마스", exampleMeaning: "백화점에서 옷을 삽니다.",
    breakdown: [
      { word: "服", reading: "ふく", meaning: "옷" }
    ] },
  { level: "N5", kanji: "薬", reading: "くすり", korean: "쿠스리", meaning: "약",
    example: "毎日、薬を飲んでいます。", exampleReading: "まいにち、くすりをのんでいます。", exampleKorean: "마이니치 쿠스리오 논데이마스", exampleMeaning: "매일 약을 먹고 있습니다.",
    breakdown: [
      { word: "飲んでいます", reading: "のんでいます", meaning: "먹고 있습니다 (약을 飲む)" }
    ] },
  { level: "N5", kanji: "火", reading: "ひ", korean: "히", meaning: "불",
    example: "火を消してください。", exampleReading: "ひをけしてください。", exampleKorean: "히오 케시테쿠다사이", exampleMeaning: "불을 꺼 주세요.",
    breakdown: [
      { word: "消してください", reading: "けしてください", meaning: "꺼 주세요" }
    ] },
  { level: "N5", kanji: "水道", reading: "すいどう", korean: "스이도-", meaning: "수도",
    example: "水道の水を飲みます。", exampleReading: "すいどうのみずをのみます。", exampleKorean: "스이도-노 미즈오 노미마스", exampleMeaning: "수돗물을 마십니다.",
    breakdown: [
      { word: "水", reading: "みず", meaning: "물" }
    ] },
  { level: "N5", kanji: "石", reading: "いし", korean: "이시", meaning: "돌",
    example: "川で小さい石を拾いました。", exampleReading: "かわでちいさいいしをひろいました。", exampleKorean: "카와데 치-사이 이시오 히로이마시타", exampleMeaning: "강에서 작은 돌을 주웠습니다.",
    breakdown: [
      { word: "拾いました", reading: "ひろいました", meaning: "주웠습니다" }
    ] },
  { level: "N5", kanji: "星", reading: "ほし", korean: "호시", meaning: "별",
    example: "夜空に星がたくさん見えます。", exampleReading: "よぞらにほしがたくさんみえます。", exampleKorean: "요조라니 호시가 타쿠상 미에마스", exampleMeaning: "밤하늘에 별이 많이 보입니다.",
    breakdown: [
      { word: "夜空に", reading: "よぞらに", meaning: "밤하늘에" }
    ] },
  { level: "N5", kanji: "太陽", reading: "たいよう", korean: "타이요-", meaning: "태양",
    example: "太陽が明るく輝いています。", exampleReading: "たいようがあかるくかがやいています。", exampleKorean: "타이요-가 아카루쿠 카가야이테이마스", exampleMeaning: "태양이 밝게 빛나고 있습니다.",
    breakdown: [
      { word: "輝いています", reading: "かがやいています", meaning: "빛나고 있습니다" }
    ] },
  { level: "N5", kanji: "月", reading: "つき", korean: "츠키", meaning: "달",
    example: "今夜は月がきれいです。", exampleReading: "こんやはつきがきれいです。", exampleKorean: "콘야와 츠키가 키레-데스", exampleMeaning: "오늘 밤은 달이 예쁩니다.",
    breakdown: [
      { word: "今夜", reading: "こんや", meaning: "오늘 밤" }
    ] },
  { level: "N5", kanji: "地図", reading: "ちず", korean: "치즈", meaning: "지도",
    example: "地図を見ながら歩きます。", exampleReading: "ちずをみながらあるきます。", exampleKorean: "치즈오 미나가라 아루키마스", exampleMeaning: "지도를 보면서 걷습니다.",
    breakdown: [
      { word: "見ながら", reading: "みながら", meaning: "보면서" }
    ] },
  { level: "N5", kanji: "世界", reading: "せかい", korean: "세카이", meaning: "세계",
    example: "世界には多くの国があります。", exampleReading: "せかいにはおおくのくにがあります。", exampleKorean: "세카이니와 오-쿠노 쿠니가 아리마스", exampleMeaning: "세계에는 많은 나라가 있습니다.",
    breakdown: [
      { word: "多くの国", reading: "おおくのくに", meaning: "많은 나라" }
    ] },
  { level: "N5", kanji: "国", reading: "くに", korean: "쿠니", meaning: "나라",
    example: "私の国は韓国です。", exampleReading: "わたしのくにはかんこくです。", exampleKorean: "와타시노 쿠니와 캉코쿠데스", exampleMeaning: "제 나라는 한국입니다.",
    breakdown: [
      { word: "韓国", reading: "かんこく", meaning: "한국" }
    ] },
  { level: "N5", kanji: "町", reading: "まち", korean: "마치", meaning: "마을, 동네",
    example: "この町は静かです。", exampleReading: "このまちはしずかです。", exampleKorean: "코노 마치와 시즈카데스", exampleMeaning: "이 동네는 조용합니다.",
    breakdown: [
      { word: "静かです", reading: "しずかです", meaning: "조용합니다" }
    ] },
  { level: "N5", kanji: "村", reading: "むら", korean: "무라", meaning: "마을 (시골)",
    example: "祖父の村を訪ねました。", exampleReading: "そふのむらをたずねました。", exampleKorean: "소후노 무라오 타즈네마시타", exampleMeaning: "할아버지의 마을을 방문했습니다.",
    breakdown: [
      { word: "訪ねました", reading: "たずねました", meaning: "방문했습니다" }
    ] },
  { level: "N5", kanji: "池", reading: "いけ", korean: "이케", meaning: "연못",
    example: "公園に大きい池があります。", exampleReading: "こうえんにおおきいいけがあります。", exampleKorean: "코-엔니 오-키- 이케가 아리마스", exampleMeaning: "공원에 큰 연못이 있습니다.",
    breakdown: [
      { word: "大きい", reading: "おおきい", meaning: "크다" }
    ] },
  { level: "N5", kanji: "橋", reading: "はし", korean: "하시", meaning: "다리 (교량)",
    example: "この橋を渡ってください。", exampleReading: "このはしをわたってください。", exampleKorean: "코노 하시오 와탓테쿠다사이", exampleMeaning: "이 다리를 건너 주세요.",
    breakdown: [
      { word: "渡ってください", reading: "わたってください", meaning: "건너 주세요" }
    ] },
  { level: "N5", kanji: "交差点", reading: "こうさてん", korean: "코-사텐", meaning: "교차로",
    example: "交差点で右に曲がります。", exampleReading: "こうさてんでみぎにまがります。", exampleKorean: "코-사텐데 미기니 마가리마스", exampleMeaning: "교차로에서 오른쪽으로 돕니다.",
    breakdown: [
      { word: "右に曲がります", reading: "みぎにまがります", meaning: "오른쪽으로 돕니다" }
    ] },
  { level: "N5", kanji: "地下鉄", reading: "ちかてつ", korean: "치카테츠", meaning: "지하철",
    example: "地下鉄で会社に行きます。", exampleReading: "ちかてつでかいしゃにいきます。", exampleKorean: "치카테츠데 카이샤니 이키마스", exampleMeaning: "지하철로 회사에 갑니다.",
    breakdown: [
      { word: "会社に", reading: "かいしゃに", meaning: "회사에" }
    ] },
  { level: "N5", kanji: "船", reading: "ふね", korean: "후네", meaning: "배 (선박)",
    example: "船で島へ行きました。", exampleReading: "ふねでしまへいきました。", exampleKorean: "후네데 시마에 이키마시타", exampleMeaning: "배로 섬에 갔습니다.",
    breakdown: [
      { word: "島へ", reading: "しまへ", meaning: "섬으로" }
    ] },
  { level: "N5", kanji: "かばん", reading: "かばん", korean: "카방", meaning: "가방",
    example: "新しいかばんを買いました。", exampleReading: "あたらしいかばんをかいました。", exampleKorean: "아타라시- 카방오 카이마시타", exampleMeaning: "새 가방을 샀습니다.",
    breakdown: [
      { word: "新しい", reading: "あたらしい", meaning: "새롭다" }
    ] },
  { level: "N5", kanji: "靴下", reading: "くつした", korean: "쿠츠시타", meaning: "양말",
    example: "靴下を履いてください。", exampleReading: "くつしたをはいてください。", exampleKorean: "쿠츠시타오 하이테쿠다사이", exampleMeaning: "양말을 신어 주세요.",
    breakdown: [
      { word: "履いてください", reading: "はいてください", meaning: "신어 주세요" }
    ] },
  { level: "N5", kanji: "Tシャツ", reading: "ティーシャツ", korean: "티-샤츠", meaning: "티셔츠",
    example: "白いTシャツを着ています。", exampleReading: "しろいティーシャツをきています。", exampleKorean: "시로이 티-샤츠오 키테이마스", exampleMeaning: "흰 티셔츠를 입고 있습니다.",
    breakdown: [
      { word: "白い", reading: "しろい", meaning: "하얗다" }
    ] },
  { level: "N5", kanji: "ズボン", reading: "ズボン", korean: "즈봉", meaning: "바지",
    example: "新しいズボンを履きました。", exampleReading: "あたらしいズボンをはきました。", exampleKorean: "아타라시- 즈봉오 하키마시타", exampleMeaning: "새 바지를 입었습니다.",
    breakdown: [
      { word: "履きました", reading: "はきました", meaning: "입었습니다" }
    ] },
  { level: "N5", kanji: "スカート", reading: "スカート", korean: "스카-토", meaning: "치마",
    example: "妹は赤いスカートが好きです。", exampleReading: "いもうとはあかいスカートがすきです。", exampleKorean: "이모-토와 아카이 스카-토가 스키데스", exampleMeaning: "여동생은 빨간 치마를 좋아합니다.",
    breakdown: [
      { word: "赤い", reading: "あかい", meaning: "빨갛다" }
    ] },
  { level: "N5", kanji: "ネクタイ", reading: "ネクタイ", korean: "네쿠타이", meaning: "넥타이",
    example: "父はネクタイをして出かけます。", exampleReading: "ちちはネクタイをしてでかけます。", exampleKorean: "치치와 네쿠타이오 시테 데카케마스", exampleMeaning: "아버지는 넥타이를 매고 외출합니다.",
    breakdown: [
      { word: "ネクタイをして", reading: "ネクタイをして", meaning: "넥타이를 매고" }
    ] },
  { level: "N5", kanji: "指", reading: "ゆび", korean: "유비", meaning: "손가락",
    example: "指を切ってしまいました。", exampleReading: "ゆびをきってしまいました。", exampleKorean: "유비오 킷테시마이마시타", exampleMeaning: "손가락을 베고 말았습니다.",
    breakdown: [
      { word: "切ってしまいました", reading: "きってしまいました", meaning: "베고 말았습니다" }
    ] },
  { level: "N5", kanji: "肩", reading: "かた", korean: "카타", meaning: "어깨",
    example: "肩が痛いです。", exampleReading: "かたがいたいです。", exampleKorean: "카타가 이타이데스", exampleMeaning: "어깨가 아픕니다.",
    breakdown: [
      { word: "痛いです", reading: "いたいです", meaning: "아픕니다" }
    ] },
  { level: "N5", kanji: "背中", reading: "せなか", korean: "세나카", meaning: "등",
    example: "背中が痛くて眠れません。", exampleReading: "せなかがいたくてねむれません。", exampleKorean: "세나카가 이타쿠테 네무레마셍", exampleMeaning: "등이 아파서 잠을 잘 수 없습니다.",
    breakdown: [
      { word: "眠れません", reading: "ねむれません", meaning: "잠을 잘 수 없습니다" }
    ] },
  { level: "N5", kanji: "胸", reading: "むね", korean: "무네", meaning: "가슴",
    example: "走ったら胸が痛くなりました。", exampleReading: "はしったらむねがいたくなりました。", exampleKorean: "하싯타라 무네가 이타쿠 나리마시타", exampleMeaning: "달렸더니 가슴이 아파졌습니다.",
    breakdown: [
      { word: "走ったら", reading: "はしったら", meaning: "달렸더니" }
    ] },
  { level: "N5", kanji: "腕", reading: "うで", korean: "우데", meaning: "팔",
    example: "腕を組んで考えました。", exampleReading: "うでをくんでかんがえました。", exampleKorean: "우데오 쿤데 캉가에마시타", exampleMeaning: "팔짱을 끼고 생각했습니다.",
    breakdown: [
      { word: "組んで", reading: "くんで", meaning: "끼고 (팔짱을 組む)" }
    ] },

  { level: "N5", kanji: "会う", reading: "あう", korean: "아우", meaning: "만나다",
    example: "駅で友達に会います。", exampleReading: "えきでともだちにあいます。", exampleKorean: "에키데 도모다치니 아이마스", exampleMeaning: "역에서 친구를 만납니다.",
    breakdown: [
      { word: "駅で", reading: "えきで", meaning: "역에서" }
    ] },
  { level: "N5", kanji: "持つ", reading: "もつ", korean: "모츠", meaning: "들다, 가지다",
    example: "荷物を持ってください。", exampleReading: "にもつをもってください。", exampleKorean: "니모츠오 못테쿠다사이", exampleMeaning: "짐을 들어 주세요.",
    breakdown: [
      { word: "荷物", reading: "にもつ", meaning: "짐" }
    ] },
  { level: "N5", kanji: "遊ぶ", reading: "あそぶ", korean: "아소부", meaning: "놀다",
    example: "公園で子供と遊びます。", exampleReading: "こうえんでこどもとあそびます。", exampleKorean: "코-엔데 코도모토 아소비마스", exampleMeaning: "공원에서 아이와 놉니다.",
    breakdown: [
      { word: "公園で", reading: "こうえんで", meaning: "공원에서" }
    ] },
  { level: "N5", kanji: "置く", reading: "おく", korean: "오쿠", meaning: "두다",
    example: "本を机の上に置きました。", exampleReading: "ほんをつくえのうえにおきました。", exampleKorean: "홍오 츠쿠에노 우에니 오키마시타", exampleMeaning: "책을 책상 위에 두었습니다.",
    breakdown: [
      { word: "机の上に", reading: "つくえのうえに", meaning: "책상 위에" }
    ] },
  { level: "N5", kanji: "取る", reading: "とる", korean: "토루", meaning: "잡다, 취하다",
    example: "メモを取ります。", exampleReading: "メモをとります。", exampleKorean: "메모오 토리마스", exampleMeaning: "메모를 합니다.",
    breakdown: [
      { word: "メモ", reading: "メモ", meaning: "메모" }
    ] },
  { level: "N5", kanji: "渡す", reading: "わたす", korean: "와타스", meaning: "건네다",
    example: "友達に本を渡しました。", exampleReading: "ともだちにほんをわたしました。", exampleKorean: "도모다치니 홍오 와타시마시타", exampleMeaning: "친구에게 책을 건넸습니다.",
    breakdown: [
      { word: "渡しました", reading: "わたしました", meaning: "건넸습니다" }
    ] },
  { level: "N5", kanji: "運ぶ", reading: "はこぶ", korean: "하코부", meaning: "나르다",
    example: "荷物を部屋まで運びます。", exampleReading: "にもつをへやまではこびます。", exampleKorean: "니모츠오 헤야마데 하코비마스", exampleMeaning: "짐을 방까지 나릅니다.",
    breakdown: [
      { word: "部屋まで", reading: "へやまで", meaning: "방까지" }
    ] },
  { level: "N5", kanji: "曲がる", reading: "まがる", korean: "마가루", meaning: "돌다, 굽다",
    example: "次の角を曲がってください。", exampleReading: "つぎのかどをまがってください。", exampleKorean: "츠기노 카도오 마갓테쿠다사이", exampleMeaning: "다음 모퉁이를 돌아 주세요.",
    breakdown: [
      { word: "角", reading: "かど", meaning: "모퉁이" }
    ] },
  { level: "N5", kanji: "渡る", reading: "わたる", korean: "와타루", meaning: "건너다",
    example: "信号を渡ります。", exampleReading: "しんごうをわたります。", exampleKorean: "싱고-오 와타리마스", exampleMeaning: "신호를 건넙니다.",
    breakdown: [
      { word: "信号", reading: "しんごう", meaning: "신호등" }
    ] },
  { level: "N5", kanji: "泊まる", reading: "とまる", korean: "토마루", meaning: "묵다",
    example: "ホテルに二泊泊まります。", exampleReading: "ホテルににはくとまります。", exampleKorean: "호테루니 니하쿠 토마리마스", exampleMeaning: "호텔에 2박 묵습니다.",
    breakdown: [
      { word: "二泊", reading: "にはく", meaning: "2박" }
    ] },
  { level: "N5", kanji: "通う", reading: "かよう", korean: "카요우", meaning: "다니다",
    example: "毎日、学校に通っています。", exampleReading: "まいにち、がっこうにかよっています。", exampleKorean: "마이니치 각코-니 카욧테이마스", exampleMeaning: "매일 학교에 다니고 있습니다.",
    breakdown: [
      { word: "通っています", reading: "かよっています", meaning: "다니고 있습니다" }
    ] },
  { level: "N5", kanji: "通る", reading: "とおる", korean: "토-루", meaning: "지나다",
    example: "この道を通ります。", exampleReading: "このみちをとおります。", exampleKorean: "코노 미치오 토-리마스", exampleMeaning: "이 길을 지나갑니다.",
    breakdown: [
      { word: "道", reading: "みち", meaning: "길" }
    ] },
  { level: "N5", kanji: "顔", reading: "かお", korean: "카오", meaning: "얼굴",
    example: "顔を洗います。", exampleReading: "かおをあらいます。", exampleKorean: "카오오 아라이마스", exampleMeaning: "얼굴을 씻습니다.",
    breakdown: [
      { word: "洗います", reading: "あらいます", meaning: "씻습니다" }
    ] },
  { level: "N5", kanji: "首", reading: "くび", korean: "쿠비", meaning: "목",
    example: "首が痛いです。", exampleReading: "くびがいたいです。", exampleKorean: "쿠비가 이타이데스", exampleMeaning: "목이 아픕니다.",
    breakdown: [
      { word: "痛いです", reading: "いたいです", meaning: "아픕니다" }
    ] },
  { level: "N5", kanji: "腰", reading: "こし", korean: "코시", meaning: "허리",
    example: "腰が痛くて座れません。", exampleReading: "こしがいたくてすわれません。", exampleKorean: "코시가 이타쿠테 스와레마셍", exampleMeaning: "허리가 아파서 앉을 수 없습니다.",
    breakdown: [
      { word: "座れません", reading: "すわれません", meaning: "앉을 수 없습니다" }
    ] },
  { level: "N5", kanji: "膝", reading: "ひざ", korean: "히자", meaning: "무릎",
    example: "膝を怪我しました。", exampleReading: "ひざをけがしました。", exampleKorean: "히자오 케가 시마시타", exampleMeaning: "무릎을 다쳤습니다.",
    breakdown: [
      { word: "怪我しました", reading: "けがしました", meaning: "다쳤습니다" }
    ] },
  { level: "N5", kanji: "氷", reading: "こおり", korean: "코-리", meaning: "얼음",
    example: "ジュースに氷を入れます。", exampleReading: "ジュースにこおりをいれます。", exampleKorean: "쥬-스니 코-리오 이레마스", exampleMeaning: "주스에 얼음을 넣습니다.",
    breakdown: [
      { word: "ジュース", reading: "ジュース", meaning: "주스" }
    ] },
  { level: "N5", kanji: "虹", reading: "にじ", korean: "니지", meaning: "무지개",
    example: "空に虹が出ました。", exampleReading: "そらににじがでました。", exampleKorean: "소라니 니지가 데마시타", exampleMeaning: "하늘에 무지개가 떴습니다.",
    breakdown: [
      { word: "空に", reading: "そらに", meaning: "하늘에" }
    ] },
  { level: "N5", kanji: "ゴミ", reading: "ゴミ", korean: "고미", meaning: "쓰레기",
    example: "ゴミを捨ててください。", exampleReading: "ゴミをすててください。", exampleKorean: "고미오 스테테쿠다사이", exampleMeaning: "쓰레기를 버려 주세요.",
    breakdown: [
      { word: "捨ててください", reading: "すててください", meaning: "버려 주세요" }
    ] },
  { level: "N5", kanji: "洗濯機", reading: "せんたくき", korean: "센타쿠키", meaning: "세탁기",
    example: "洗濯機で服を洗います。", exampleReading: "せんたくきでふくをあらいます。", exampleKorean: "센타쿠키데 후쿠오 아라이마스", exampleMeaning: "세탁기로 옷을 빱니다.",
    breakdown: [
      { word: "服", reading: "ふく", meaning: "옷" }
    ] },
  { level: "N5", kanji: "掃除機", reading: "そうじき", korean: "소-지키", meaning: "청소기",
    example: "掃除機で部屋を掃除します。", exampleReading: "そうじきでへやをそうじします。", exampleKorean: "소-지키데 헤야오 소-지 시마스", exampleMeaning: "청소기로 방을 청소합니다.",
    breakdown: [
      { word: "部屋", reading: "へや", meaning: "방" }
    ] },
  { level: "N5", kanji: "シャワー", reading: "シャワー", korean: "샤와-", meaning: "샤워",
    example: "朝、シャワーを浴びます。", exampleReading: "あさ、シャワーをあびます。", exampleKorean: "아사 샤와-오 아비마스", exampleMeaning: "아침에 샤워를 합니다.",
    breakdown: [
      { word: "浴びます", reading: "あびます", meaning: "(샤워를) 합니다" }
    ] },
  { level: "N5", kanji: "お風呂", reading: "おふろ", korean: "오후로", meaning: "목욕, 욕조",
    example: "お風呂に入ります。", exampleReading: "おふろにはいります。", exampleKorean: "오후로니 하이리마스", exampleMeaning: "목욕을 합니다.",
    breakdown: [
      { word: "入ります", reading: "はいります", meaning: "들어갑니다 (목욕을 합니다)" }
    ] },
  { level: "N5", kanji: "コート", reading: "コート", korean: "코-토", meaning: "코트",
    example: "寒いのでコートを着ます。", exampleReading: "さむいのでコートをきます。", exampleKorean: "사무이노데 코-토오 키마스", exampleMeaning: "추워서 코트를 입습니다.",
    breakdown: [
      { word: "寒いので", reading: "さむいので", meaning: "추워서" }
    ] },
  { level: "N5", kanji: "セーター", reading: "セーター", korean: "세-타-", meaning: "스웨터",
    example: "赤いセーターを買いました。", exampleReading: "あかいセーターをかいました。", exampleKorean: "아카이 세-타-오 카이마시타", exampleMeaning: "빨간 스웨터를 샀습니다.",
    breakdown: [
      { word: "赤い", reading: "あかい", meaning: "빨갛다" }
    ] },
  { level: "N5", kanji: "サンダル", reading: "サンダル", korean: "산다루", meaning: "샌들",
    example: "夏はサンダルを履きます。", exampleReading: "なつはサンダルをはきます。", exampleKorean: "나츠와 산다루오 하키마스", exampleMeaning: "여름에는 샌들을 신습니다.",
    breakdown: [
      { word: "夏は", reading: "なつは", meaning: "여름에는" }
    ] },
  { level: "N5", kanji: "象", reading: "ぞう", korean: "조-", meaning: "코끼리",
    example: "動物園で象を見ました。", exampleReading: "どうぶつえんでぞうをみました。", exampleKorean: "도-부츠엔데 조-오 미마시타", exampleMeaning: "동물원에서 코끼리를 봤습니다.",
    breakdown: [
      { word: "動物園", reading: "どうぶつえん", meaning: "동물원" }
    ] },
  { level: "N5", kanji: "ライオン", reading: "ライオン", korean: "라이온", meaning: "사자",
    example: "ライオンは強い動物です。", exampleReading: "ライオンはつよいどうぶつです。", exampleKorean: "라이온와 츠요이 도-부츠데스", exampleMeaning: "사자는 강한 동물입니다.",
    breakdown: [
      { word: "強い", reading: "つよい", meaning: "강하다" }
    ] },
  { level: "N5", kanji: "うさぎ", reading: "うさぎ", korean: "우사기", meaning: "토끼",
    example: "うさぎは耳が長いです。", exampleReading: "うさぎはみみがながいです。", exampleKorean: "우사기와 미미가 나가이데스", exampleMeaning: "토끼는 귀가 깁니다.",
    breakdown: [
      { word: "耳", reading: "みみ", meaning: "귀" }
    ] },
  { level: "N5", kanji: "オレンジ", reading: "オレンジ", korean: "오렌지", meaning: "오렌지",
    example: "オレンジは酸っぱいです。", exampleReading: "オレンジはすっぱいです。", exampleKorean: "오렌지와 습파이데스", exampleMeaning: "오렌지는 십니다.",
    breakdown: [
      { word: "酸っぱいです", reading: "すっぱいです", meaning: "십니다" }
    ] },
  { level: "N5", kanji: "灰色", reading: "はいいろ", korean: "하이이로", meaning: "회색",
    example: "灰色の空を見ました。", exampleReading: "はいいろのそらをみました。", exampleKorean: "하이이로노 소라오 미마시타", exampleMeaning: "회색 하늘을 봤습니다.",
    breakdown: [
      { word: "空", reading: "そら", meaning: "하늘" }
    ] },
  { level: "N5", kanji: "ノート", reading: "ノート", korean: "노-토", meaning: "노트, 공책",
    example: "ノートに文字を書きます。", exampleReading: "ノートにもじをかきます。", exampleKorean: "노-토니 모지오 카키마스", exampleMeaning: "노트에 글자를 씁니다.",
    breakdown: [
      { word: "文字", reading: "もじ", meaning: "글자" }
    ] },
  { level: "N5", kanji: "鉛筆", reading: "えんぴつ", korean: "엔피츠", meaning: "연필",
    example: "鉛筆で名前を書きました。", exampleReading: "えんぴつでなまえをかきました。", exampleKorean: "엔피츠데 나마에오 카키마시타", exampleMeaning: "연필로 이름을 썼습니다.",
    breakdown: [
      { word: "名前", reading: "なまえ", meaning: "이름" }
    ] },
  { level: "N5", kanji: "消しゴム", reading: "けしゴム", korean: "케시고무", meaning: "지우개",
    example: "消しゴムを貸してください。", exampleReading: "けしゴムをかしてください。", exampleKorean: "케시고무오 카시테쿠다사이", exampleMeaning: "지우개를 빌려주세요.",
    breakdown: [
      { word: "貸してください", reading: "かしてください", meaning: "빌려주세요" }
    ] },
  { level: "N5", kanji: "黒板", reading: "こくばん", korean: "코쿠반", meaning: "칠판",
    example: "先生が黒板に書きます。", exampleReading: "せんせいがこくばんにかきます。", exampleKorean: "센세-가 코쿠반니 카키마스", exampleMeaning: "선생님이 칠판에 씁니다.",
    breakdown: [
      { word: "先生", reading: "せんせい", meaning: "선생님" }
    ] },
  { level: "N5", kanji: "ご飯", reading: "ごはん", korean: "고항", meaning: "밥",
    example: "ご飯をたくさん食べました。", exampleReading: "ごはんをたくさんたべました。", exampleKorean: "고항오 타쿠상 타베마시타", exampleMeaning: "밥을 많이 먹었습니다.",
    breakdown: [
      { word: "たくさん", reading: "たくさん", meaning: "많이" }
    ] },
  { level: "N5", kanji: "味噌汁", reading: "みそしる", korean: "미소시루", meaning: "된장국",
    example: "朝、味噌汁を作ります。", exampleReading: "あさ、みそしるをつくります。", exampleKorean: "아사 미소시루오 츠쿠리마스", exampleMeaning: "아침에 된장국을 만듭니다.",
    breakdown: [
      { word: "作ります", reading: "つくります", meaning: "만듭니다" }
    ] },
  { level: "N5", kanji: "寿司", reading: "すし", korean: "스시", meaning: "초밥",
    example: "週末に寿司を食べに行きます。", exampleReading: "しゅうまつにすしをたべにいきます。", exampleKorean: "슈-마츠니 스시오 타베니 이키마스", exampleMeaning: "주말에 초밥을 먹으러 갑니다.",
    breakdown: [
      { word: "食べに行きます", reading: "たべにいきます", meaning: "먹으러 갑니다" }
    ] },
  { level: "N5", kanji: "天ぷら", reading: "てんぷら", korean: "텐푸라", meaning: "튀김",
    example: "天ぷらとご飯を食べました。", exampleReading: "てんぷらとごはんをたべました。", exampleKorean: "텐푸라토 고항오 타베마시타", exampleMeaning: "튀김과 밥을 먹었습니다.",
    breakdown: [
      { word: "ご飯", reading: "ごはん", meaning: "밥" }
    ] },
  { level: "N5", kanji: "うどん", reading: "うどん", korean: "우동", meaning: "우동",
    example: "昼にうどんを食べました。", exampleReading: "ひるにうどんをたべました。", exampleKorean: "히루니 우동오 타베마시타", exampleMeaning: "점심에 우동을 먹었습니다.",
    breakdown: [
      { word: "昼に", reading: "ひるに", meaning: "점심에" }
    ] },
  { level: "N5", kanji: "そば", reading: "そば", korean: "소바", meaning: "소바, 메밀국수",
    example: "冬は温かいそばが好きです。", exampleReading: "ふゆはあたたかいそばがすきです。", exampleKorean: "후유와 아타타카이 소바가 스키데스", exampleMeaning: "겨울에는 따뜻한 소바를 좋아합니다.",
    breakdown: [
      { word: "温かい", reading: "あたたかい", meaning: "따뜻하다" }
    ] },
  { level: "N5", kanji: "焼き肉", reading: "やきにく", korean: "야키니쿠", meaning: "불고기, 고기구이",
    example: "週末に焼き肉を食べました。", exampleReading: "しゅうまつにやきにくをたべました。", exampleKorean: "슈-마츠니 야키니쿠오 타베마시타", exampleMeaning: "주말에 고기구이를 먹었습니다.",
    breakdown: [
      { word: "週末に", reading: "しゅうまつに", meaning: "주말에" }
    ] },
  { level: "N5", kanji: "いとこ", reading: "いとこ", korean: "이토코", meaning: "사촌",
    example: "いとこと遊びました。", exampleReading: "いとことあそびました。", exampleKorean: "이토코토 아소비마시타", exampleMeaning: "사촌과 놀았습니다.",
    breakdown: [
      { word: "遊びました", reading: "あそびました", meaning: "놀았습니다" }
    ] },
  { level: "N5", kanji: "今", reading: "いま", korean: "이마", meaning: "지금",
    example: "今、忙しいです。", exampleReading: "いま、いそがしいです。", exampleKorean: "이마 이소가시-데스", exampleMeaning: "지금 바쁩니다.",
    breakdown: [
      { word: "忙しいです", reading: "いそがしいです", meaning: "바쁩니다" }
    ] },
  { level: "N5", kanji: "後", reading: "あと", korean: "아토", meaning: "나중, 후",
    example: "後で電話します。", exampleReading: "あとででんわします。", exampleKorean: "아토데 뎅와 시마스", exampleMeaning: "나중에 전화하겠습니다.",
    breakdown: [
      { word: "電話します", reading: "でんわします", meaning: "전화하겠습니다" }
    ] },
  { level: "N5", kanji: "前", reading: "まえ", korean: "마에", meaning: "전, 앞",
    example: "駅の前で待っています。", exampleReading: "えきのまえでまっています。", exampleKorean: "에키노 마에데 맛테이마스", exampleMeaning: "역 앞에서 기다리고 있습니다.",
    breakdown: [
      { word: "待っています", reading: "まっています", meaning: "기다리고 있습니다" }
    ] },
  { level: "N5", kanji: "間", reading: "あいだ", korean: "아이다", meaning: "사이, 동안",
    example: "休みの間、旅行しました。", exampleReading: "やすみのあいだ、りょこうしました。", exampleKorean: "야스미노 아이다 료코- 시마시타", exampleMeaning: "휴가 동안 여행했습니다.",
    breakdown: [
      { word: "休み", reading: "やすみ", meaning: "휴가, 쉬는 날" }
    ] },
  { level: "N5", kanji: "音", reading: "おと", korean: "오토", meaning: "소리",
    example: "大きい音が聞こえました。", exampleReading: "おおきいおとがきこえました。", exampleKorean: "오-키- 오토가 키코에마시타", exampleMeaning: "큰 소리가 들렸습니다.",
    breakdown: [
      { word: "聞こえました", reading: "きこえました", meaning: "들렸습니다" }
    ] },
  { level: "N5", kanji: "声", reading: "こえ", korean: "코에", meaning: "목소리",
    example: "彼女の声はきれいです。", exampleReading: "かのじょのこえはきれいです。", exampleKorean: "카노죠노 코에와 키레-데스", exampleMeaning: "그녀의 목소리는 예쁩니다.",
    breakdown: [
      { word: "きれいです", reading: "きれいです", meaning: "예쁩니다" }
    ] },
  { level: "N5", kanji: "形", reading: "かたち", korean: "카타치", meaning: "형태, 모양",
    example: "星の形をしたクッキーです。", exampleReading: "ほしのかたちをしたクッキーです。", exampleKorean: "호시노 카타치오 시타 쿡키-데스", exampleMeaning: "별 모양을 한 쿠키입니다.",
    breakdown: [
      { word: "クッキー", reading: "クッキー", meaning: "쿠키" }
    ] },

  { level: "N5", kanji: "乗る", reading: "のる", korean: "노루", meaning: "타다",
    example: "バスに乗ります。", exampleReading: "バスにのります。", exampleKorean: "바스니 노리마스", exampleMeaning: "버스를 탑니다.",
    breakdown: [
      { word: "バス", reading: "バス", meaning: "버스" }
    ] },
  { level: "N5", kanji: "降りる", reading: "おりる", korean: "오리루", meaning: "내리다",
    example: "次の駅で降ります。", exampleReading: "つぎのえきでおります。", exampleKorean: "츠기노 에키데 오리마스", exampleMeaning: "다음 역에서 내립니다.",
    breakdown: [
      { word: "次の駅", reading: "つぎのえき", meaning: "다음 역" }
    ] },
  { level: "N5", kanji: "着る", reading: "きる", korean: "키루", meaning: "입다",
    example: "新しい服を着ます。", exampleReading: "あたらしいふくをきます。", exampleKorean: "아타라시- 후쿠오 키마스", exampleMeaning: "새 옷을 입습니다.",
    breakdown: [
      { word: "新しい服", reading: "あたらしいふく", meaning: "새 옷" }
    ] },
  { level: "N5", kanji: "かぶる", reading: "かぶる", korean: "카부루", meaning: "쓰다 (모자)",
    example: "帽子をかぶって出かけます。", exampleReading: "ぼうしをかぶってでかけます。", exampleKorean: "보-시오 카붓테 데카케마스", exampleMeaning: "모자를 쓰고 외출합니다.",
    breakdown: [
      { word: "出かけます", reading: "でかけます", meaning: "외출합니다" }
    ] },
  { level: "N5", kanji: "履く", reading: "はく", korean: "하쿠", meaning: "신다",
    example: "靴を履いてください。", exampleReading: "くつをはいてください。", exampleKorean: "쿠츠오 하이테쿠다사이", exampleMeaning: "신발을 신어 주세요.",
    breakdown: [
      { word: "靴", reading: "くつ", meaning: "신발" }
    ] },
  { level: "N5", kanji: "脱ぐ", reading: "ぬぐ", korean: "누구", meaning: "벗다",
    example: "玄関で靴を脱ぎます。", exampleReading: "げんかんでくつをぬぎます。", exampleKorean: "겐칸데 쿠츠오 누기마스", exampleMeaning: "현관에서 신발을 벗습니다.",
    breakdown: [
      { word: "玄関", reading: "げんかん", meaning: "현관" }
    ] },
  { level: "N5", kanji: "磨く", reading: "みがく", korean: "미가쿠", meaning: "닦다",
    example: "歯を磨きます。", exampleReading: "はをみがきます。", exampleKorean: "하오 미가키마스", exampleMeaning: "이를 닦습니다.",
    breakdown: [
      { word: "歯", reading: "は", meaning: "이, 치아" }
    ] },
  { level: "N5", kanji: "拭く", reading: "ふく", korean: "후쿠", meaning: "닦다, 훔치다",
    example: "テーブルを拭きます。", exampleReading: "テーブルをふきます。", exampleKorean: "테-부루오 후키마스", exampleMeaning: "테이블을 닦습니다.",
    breakdown: [
      { word: "テーブル", reading: "テーブル", meaning: "테이블" }
    ] },
  { level: "N5", kanji: "数える", reading: "かぞえる", korean: "카조에루", meaning: "세다",
    example: "人数を数えます。", exampleReading: "にんずうをかぞえます。", exampleKorean: "닌즈-오 카조에마스", exampleMeaning: "인원수를 셉니다.",
    breakdown: [
      { word: "人数", reading: "にんずう", meaning: "인원수" }
    ] },
  { level: "N5", kanji: "決まる", reading: "きまる", korean: "키마루", meaning: "정해지다",
    example: "旅行の日程が決まりました。", exampleReading: "りょこうのにっていがきまりました。", exampleKorean: "료코-노 닛테-가 키마리마시타", exampleMeaning: "여행 일정이 정해졌습니다.",
    breakdown: [
      { word: "日程", reading: "にってい", meaning: "일정" }
    ] },
  { level: "N5", kanji: "治す", reading: "なおす", korean: "나오스", meaning: "낫게 하다, 치료하다",
    example: "病気を早く治したいです。", exampleReading: "びょうきをはやくなおしたいです。", exampleKorean: "뵤-키오 하야쿠 나오시타이데스", exampleMeaning: "병을 빨리 낫고 싶습니다.",
    breakdown: [
      { word: "病気", reading: "びょうき", meaning: "병" }
    ] },
  { level: "N5", kanji: "光る", reading: "ひかる", korean: "히카루", meaning: "빛나다",
    example: "星が光っています。", exampleReading: "ほしがひかっています。", exampleKorean: "호시가 히캇테이마스", exampleMeaning: "별이 빛나고 있습니다.",
    breakdown: [
      { word: "星", reading: "ほし", meaning: "별" }
    ] },
  { level: "N5", kanji: "光", reading: "ひかり", korean: "히카리", meaning: "빛",
    example: "窓から光が入ります。", exampleReading: "まどからひかりがはいります。", exampleKorean: "마도카라 히카리가 하이리마스", exampleMeaning: "창문에서 빛이 들어옵니다.",
    breakdown: [
      { word: "窓から", reading: "まどから", meaning: "창문에서" }
    ] },
  { level: "N5", kanji: "気温", reading: "きおん", korean: "키온", meaning: "기온",
    example: "今日の気温は高いです。", exampleReading: "きょうのきおんはたかいです。", exampleKorean: "쿄-노 키옹와 타카이데스", exampleMeaning: "오늘의 기온은 높습니다.",
    breakdown: [
      { word: "高いです", reading: "たかいです", meaning: "높습니다" }
    ] },
  { level: "N5", kanji: "数学", reading: "すうがく", korean: "스-가쿠", meaning: "수학",
    example: "数学のテストがあります。", exampleReading: "すうがくのテストがあります。", exampleKorean: "스-가쿠노 테스토가 아리마스", exampleMeaning: "수학 시험이 있습니다.",
    breakdown: [
      { word: "テスト", reading: "テスト", meaning: "시험" }
    ] },
  { level: "N5", kanji: "英語", reading: "えいご", korean: "에-고", meaning: "영어",
    example: "毎日、英語を勉強します。", exampleReading: "まいにち、えいごをべんきょうします。", exampleKorean: "마이니치 에-고오 벵쿄- 시마스", exampleMeaning: "매일 영어를 공부합니다.",
    breakdown: [
      { word: "勉強します", reading: "べんきょうします", meaning: "공부합니다" }
    ] },
  { level: "N5", kanji: "理科", reading: "りか", korean: "리카", meaning: "과학",
    example: "理科の実験をしました。", exampleReading: "りかのじっけんをしました。", exampleKorean: "리카노 짓켄오 시마시타", exampleMeaning: "과학 실험을 했습니다.",
    breakdown: [
      { word: "実験", reading: "じっけん", meaning: "실험" }
    ] },
  { level: "N5", kanji: "体育", reading: "たいいく", korean: "타이이쿠", meaning: "체육",
    example: "体育の授業でサッカーをしました。", exampleReading: "たいいくのじゅぎょうでサッカーをしました。", exampleKorean: "타이이쿠노 쥬교-데 삭카-오 시마시타", exampleMeaning: "체육 수업에서 축구를 했습니다.",
    breakdown: [
      { word: "授業", reading: "じゅぎょう", meaning: "수업" }
    ] },
  { level: "N5", kanji: "美術", reading: "びじゅつ", korean: "비쥬츠", meaning: "미술",
    example: "美術の時間に絵を描きます。", exampleReading: "びじゅつのじかんにえをかきます。", exampleKorean: "비쥬츠노 지칸니 에오 카키마스", exampleMeaning: "미술 시간에 그림을 그립니다.",
    breakdown: [
      { word: "絵", reading: "え", meaning: "그림" }
    ] },
  { level: "N5", kanji: "ギター", reading: "ギター", korean: "기타-", meaning: "기타",
    example: "ギターを弾くのが好きです。", exampleReading: "ギターをひくのがすきです。", exampleKorean: "기타-오 히쿠노가 스키데스", exampleMeaning: "기타 치는 것을 좋아합니다.",
    breakdown: [
      { word: "弾くのが", reading: "ひくのが", meaning: "연주하는 것을" }
    ] },
  { level: "N5", kanji: "バイオリン", reading: "バイオリン", korean: "바이오린", meaning: "바이올린",
    example: "バイオリンを習っています。", exampleReading: "バイオリンをならっています。", exampleKorean: "바이오린오 나랏테이마스", exampleMeaning: "바이올린을 배우고 있습니다.",
    breakdown: [
      { word: "習っています", reading: "ならっています", meaning: "배우고 있습니다" }
    ] },
  { level: "N5", kanji: "バレーボール", reading: "バレーボール", korean: "바레-보-루", meaning: "배구",
    example: "学校でバレーボールをします。", exampleReading: "がっこうでバレーボールをします。", exampleKorean: "각코-데 바레-보-루오 시마스", exampleMeaning: "학교에서 배구를 합니다.",
    breakdown: [
      { word: "学校で", reading: "がっこうで", meaning: "학교에서" }
    ] },
  { level: "N5", kanji: "バスケットボール", reading: "バスケットボール", korean: "바스켓토보-루", meaning: "농구",
    example: "バスケットボールの試合を見ました。", exampleReading: "バスケットボールのしあいをみました。", exampleKorean: "바스켓토보-루노 시아이오 미마시타", exampleMeaning: "농구 시합을 봤습니다.",
    breakdown: [
      { word: "試合", reading: "しあい", meaning: "시합" }
    ] },
  { level: "N5", kanji: "卓球", reading: "たっきゅう", korean: "탁큐-", meaning: "탁구",
    example: "友達と卓球をしました。", exampleReading: "ともだちとたっきゅうをしました。", exampleKorean: "도모다치토 탁큐-오 시마시타", exampleMeaning: "친구와 탁구를 쳤습니다.",
    breakdown: [
      { word: "友達と", reading: "ともだちと", meaning: "친구와" }
    ] },
  { level: "N5", kanji: "ゴルフ", reading: "ゴルフ", korean: "고루후", meaning: "골프",
    example: "週末にゴルフをします。", exampleReading: "しゅうまつにゴルフをします。", exampleKorean: "슈-마츠니 고루후오 시마스", exampleMeaning: "주말에 골프를 칩니다.",
    breakdown: [
      { word: "週末に", reading: "しゅうまつに", meaning: "주말에" }
    ] },
  { level: "N5", kanji: "紫", reading: "むらさき", korean: "무라사키", meaning: "보라색",
    example: "紫の花が好きです。", exampleReading: "むらさきのはながすきです。", exampleKorean: "무라사키노 하나가 스키데스", exampleMeaning: "보라색 꽃을 좋아합니다.",
    breakdown: [
      { word: "花", reading: "はな", meaning: "꽃" }
    ] },
  { level: "N5", kanji: "金色", reading: "きんいろ", korean: "킨이로", meaning: "금색",
    example: "金色の指輪を買いました。", exampleReading: "きんいろのゆびわをかいました。", exampleKorean: "킨이로노 유비와오 카이마시타", exampleMeaning: "금색 반지를 샀습니다.",
    breakdown: [
      { word: "指輪", reading: "ゆびわ", meaning: "반지" }
    ] },
  { level: "N5", kanji: "銀色", reading: "ぎんいろ", korean: "긴이로", meaning: "은색",
    example: "銀色の車が好きです。", exampleReading: "ぎんいろのくるまがすきです。", exampleKorean: "긴이로노 쿠루마가 스키데스", exampleMeaning: "은색 차를 좋아합니다.",
    breakdown: [
      { word: "車", reading: "くるま", meaning: "차" }
    ] },
  { level: "N5", kanji: "熊", reading: "くま", korean: "쿠마", meaning: "곰",
    example: "森で熊を見ました。", exampleReading: "もりでくまをみました。", exampleKorean: "모리데 쿠마오 미마시타", exampleMeaning: "숲에서 곰을 봤습니다.",
    breakdown: [
      { word: "森", reading: "もり", meaning: "숲" }
    ] },
  { level: "N5", kanji: "猿", reading: "さる", korean: "사루", meaning: "원숭이",
    example: "動物園で猿を見ました。", exampleReading: "どうぶつえんでさるをみました。", exampleKorean: "도-부츠엔데 사루오 미마시타", exampleMeaning: "동물원에서 원숭이를 봤습니다.",
    breakdown: [
      { word: "動物園", reading: "どうぶつえん", meaning: "동물원" }
    ] },
  { level: "N5", kanji: "虫", reading: "むし", korean: "무시", meaning: "벌레",
    example: "部屋に虫がいます。", exampleReading: "へやにむしがいます。", exampleKorean: "헤야니 무시가 이마스", exampleMeaning: "방에 벌레가 있습니다.",
    breakdown: [
      { word: "部屋", reading: "へや", meaning: "방" }
    ] },
  { level: "N5", kanji: "半", reading: "はん", korean: "한", meaning: "반",
    example: "三時半に会いましょう。", exampleReading: "さんじはんにあいましょう。", exampleKorean: "산지한니 아이마쇼-", exampleMeaning: "3시 반에 만납시다.",
    breakdown: [
      { word: "会いましょう", reading: "あいましょう", meaning: "만납시다" }
    ] },
  { level: "N5", kanji: "分", reading: "ふん", korean: "훈", meaning: "분 (시간 단위)",
    example: "五分待ってください。", exampleReading: "ごふんまってください。", exampleKorean: "고훈 맛테쿠다사이", exampleMeaning: "5분 기다려 주세요.",
    breakdown: [
      { word: "待ってください", reading: "まってください", meaning: "기다려 주세요" }
    ] },
  { level: "N5", kanji: "秒", reading: "びょう", korean: "뵤-", meaning: "초",
    example: "十秒数えます。", exampleReading: "じゅうびょうかぞえます。", exampleKorean: "쥬-뵤- 카조에마스", exampleMeaning: "10초 셉니다.",
    breakdown: [
      { word: "数えます", reading: "かぞえます", meaning: "셉니다" }
    ] },
  { level: "N5", kanji: "カレンダー", reading: "カレンダー", korean: "카렌다-", meaning: "달력",
    example: "カレンダーに予定を書きます。", exampleReading: "カレンダーによていをかきます。", exampleKorean: "카렌다-니 요테-오 카키마스", exampleMeaning: "달력에 일정을 씁니다.",
    breakdown: [
      { word: "予定", reading: "よてい", meaning: "일정" }
    ] },
  { level: "N5", kanji: "ガス", reading: "ガス", korean: "가스", meaning: "가스",
    example: "ガスを止めてください。", exampleReading: "ガスをとめてください。", exampleKorean: "가스오 토메테쿠다사이", exampleMeaning: "가스를 잠가 주세요.",
    breakdown: [
      { word: "止めてください", reading: "とめてください", meaning: "잠가 주세요" }
    ] },
  { level: "N5", kanji: "石鹸", reading: "せっけん", korean: "섹켄", meaning: "비누",
    example: "石鹸で手を洗います。", exampleReading: "せっけんでてをあらいます。", exampleKorean: "섹켄데 테오 아라이마스", exampleMeaning: "비누로 손을 씻습니다.",
    breakdown: [
      { word: "手", reading: "て", meaning: "손" }
    ] },
  { level: "N5", kanji: "歯ブラシ", reading: "はブラシ", korean: "하부라시", meaning: "칫솔",
    example: "新しい歯ブラシを買いました。", exampleReading: "あたらしいはブラシをかいました。", exampleKorean: "아타라시- 하부라시오 카이마시타", exampleMeaning: "새 칫솔을 샀습니다.",
    breakdown: [
      { word: "買いました", reading: "かいました", meaning: "샀습니다" }
    ] },
  { level: "N5", kanji: "シャンプー", reading: "シャンプー", korean: "샴푸-", meaning: "샴푸",
    example: "シャンプーで髪を洗います。", exampleReading: "シャンプーでかみをあらいます。", exampleKorean: "샴푸-데 카미오 아라이마스", exampleMeaning: "샴푸로 머리를 감습니다.",
    breakdown: [
      { word: "髪", reading: "かみ", meaning: "머리카락" }
    ] },
  { level: "N5", kanji: "タオル", reading: "タオル", korean: "타오루", meaning: "수건",
    example: "タオルで顔を拭きます。", exampleReading: "タオルでかおをふきます。", exampleKorean: "타오루데 카오오 후키마스", exampleMeaning: "수건으로 얼굴을 닦습니다.",
    breakdown: [
      { word: "顔", reading: "かお", meaning: "얼굴" }
    ] },
  { level: "N5", kanji: "ティッシュ", reading: "ティッシュ", korean: "팃슈", meaning: "티슈",
    example: "ティッシュで鼻をかみます。", exampleReading: "ティッシュではなをかみます。", exampleKorean: "팃슈데 하나오 카미마스", exampleMeaning: "티슈로 코를 풉니다.",
    breakdown: [
      { word: "鼻", reading: "はな", meaning: "코" }
    ] },
  { level: "N5", kanji: "携帯", reading: "けいたい", korean: "케-타이", meaning: "휴대폰",
    example: "携帯をどこかに忘れました。", exampleReading: "けいたいをどこかにわすれました。", exampleKorean: "케-타이오 도코카니 와스레마시타", exampleMeaning: "휴대폰을 어딘가에 두고 왔습니다.",
    breakdown: [
      { word: "どこかに", reading: "どこかに", meaning: "어딘가에" }
    ] },
  { level: "N5", kanji: "バッテリー", reading: "バッテリー", korean: "밧테리-", meaning: "배터리",
    example: "バッテリーがなくなりました。", exampleReading: "バッテリーがなくなりました。", exampleKorean: "밧테리-가 나쿠나리마시타", exampleMeaning: "배터리가 다 됐습니다.",
    breakdown: [
      { word: "なくなりました", reading: "なくなりました", meaning: "없어졌습니다 (다 됐습니다)" }
    ] },
  { level: "N5", kanji: "パスワード", reading: "パスワード", korean: "파스와-도", meaning: "비밀번호",
    example: "パスワードを入力します。", exampleReading: "パスワードをにゅうりょくします。", exampleKorean: "파스와-도오 뉴-료쿠 시마스", exampleMeaning: "비밀번호를 입력합니다.",
    breakdown: [
      { word: "入力します", reading: "にゅうりょくします", meaning: "입력합니다" }
    ] },
  { level: "N5", kanji: "アプリ", reading: "アプリ", korean: "아푸리", meaning: "앱",
    example: "便利なアプリを使っています。", exampleReading: "べんりなアプリをつかっています。", exampleKorean: "벤리나 아푸리오 츠캇테이마스", exampleMeaning: "편리한 앱을 사용하고 있습니다.",
    breakdown: [
      { word: "便利な", reading: "べんりな", meaning: "편리한" }
    ] },
  { level: "N5", kanji: "番号", reading: "ばんごう", korean: "방고-", meaning: "번호",
    example: "電話番号を教えてください。", exampleReading: "でんわばんごうをおしえてください。", exampleKorean: "뎅와 방고-오 오시에테쿠다사이", exampleMeaning: "전화번호를 알려 주세요.",
    breakdown: [
      { word: "電話", reading: "でんわ", meaning: "전화" }
    ] },
  { level: "N5", kanji: "住所", reading: "じゅうしょ", korean: "쥬-쇼", meaning: "주소",
    example: "住所を書いてください。", exampleReading: "じゅうしょをかいてください。", exampleKorean: "쥬-쇼오 카이테쿠다사이", exampleMeaning: "주소를 써 주세요.",
    breakdown: [
      { word: "書いてください", reading: "かいてください", meaning: "써 주세요" }
    ] },
  { level: "N5", kanji: "名前", reading: "なまえ", korean: "나마에", meaning: "이름",
    example: "お名前を教えてください。", exampleReading: "おなまえをおしえてください。", exampleKorean: "오나마에오 오시에테쿠다사이", exampleMeaning: "성함을 알려 주세요.",
    breakdown: [
      { word: "お名前", reading: "おなまえ", meaning: "성함 (존칭)" }
    ] },
  { level: "N5", kanji: "誕生日", reading: "たんじょうび", korean: "탄죠-비", meaning: "생일",
    example: "誕生日おめでとうございます。", exampleReading: "たんじょうびおめでとうございます。", exampleKorean: "탄죠-비 오메데토- 고자이마스", exampleMeaning: "생일 축하합니다.",
    breakdown: [
      { word: "おめでとうございます", reading: "おめでとうございます", meaning: "축하합니다" }
    ] },
  { level: "N5", kanji: "休み", reading: "やすみ", korean: "야스미", meaning: "휴일, 쉬는 날",
    example: "明日は休みです。", exampleReading: "あしたはやすみです。", exampleKorean: "아시타와 야스미데스", exampleMeaning: "내일은 쉬는 날입니다.",
    breakdown: [
      { word: "明日は", reading: "あしたは", meaning: "내일은" }
    ] },
  { level: "N5", kanji: "手袋", reading: "てぶくろ", korean: "테부쿠로", meaning: "장갑",
    example: "寒いので手袋をしました。", exampleReading: "さむいのでてぶくろをしました。", exampleKorean: "사무이노데 테부쿠로오 시마시타", exampleMeaning: "추워서 장갑을 꼈습니다.",
    breakdown: [
      { word: "寒いので", reading: "さむいので", meaning: "추워서" }
    ] },
  { level: "N5", kanji: "マフラー", reading: "マフラー", korean: "마후라-", meaning: "목도리",
    example: "マフラーを首に巻きました。", exampleReading: "マフラーをくびにまきました。", exampleKorean: "마후라-오 쿠비니 마키마시타", exampleMeaning: "목도리를 목에 둘렀습니다.",
    breakdown: [
      { word: "首", reading: "くび", meaning: "목" }
    ] },
  { level: "N5", kanji: "パジャマ", reading: "パジャマ", korean: "파자마", meaning: "잠옷",
    example: "パジャマに着替えました。", exampleReading: "パジャマにきがえました。", exampleKorean: "파자마니 키가에마시타", exampleMeaning: "잠옷으로 갈아입었습니다.",
    breakdown: [
      { word: "着替えました", reading: "きがえました", meaning: "갈아입었습니다" }
    ] },
  { level: "N5", kanji: "鏡", reading: "かがみ", korean: "카가미", meaning: "거울",
    example: "鏡で顔を見ました。", exampleReading: "かがみでかおをみました。", exampleKorean: "카가미데 카오오 미마시타", exampleMeaning: "거울로 얼굴을 봤습니다.",
    breakdown: [
      { word: "顔", reading: "かお", meaning: "얼굴" }
    ] },
  { level: "N5", kanji: "ドライヤー", reading: "ドライヤー", korean: "도라이야-", meaning: "드라이어",
    example: "髪をドライヤーで乾かします。", exampleReading: "かみをドライヤーでかわかします。", exampleKorean: "카미오 도라이야-데 카와카시마스", exampleMeaning: "머리를 드라이어로 말립니다.",
    breakdown: [
      { word: "髪", reading: "かみ", meaning: "머리카락" }
    ] },
  { level: "N5", kanji: "くし", reading: "くし", korean: "쿠시", meaning: "빗",
    example: "くしで髪をとかしました。", exampleReading: "くしでかみをとかしました。", exampleKorean: "쿠시데 카미오 토카시마시타", exampleMeaning: "빗으로 머리를 빗었습니다.",
    breakdown: [
      { word: "髪", reading: "かみ", meaning: "머리카락" }
    ] },
  { level: "N5", kanji: "化粧", reading: "けしょう", korean: "케쇼-", meaning: "화장",
    example: "毎朝化粧をします。", exampleReading: "まいあさけしょうをします。", exampleKorean: "마이아사 케쇼-오 시마스", exampleMeaning: "매일 아침 화장을 합니다.",
    breakdown: [
      { word: "毎朝", reading: "まいあさ", meaning: "매일 아침" }
    ] },
  { level: "N5", kanji: "会議室", reading: "かいぎしつ", korean: "카이기시츠", meaning: "회의실",
    example: "会議室で待っています。", exampleReading: "かいぎしつでまっています。", exampleKorean: "카이기시츠데 맛테 이마스", exampleMeaning: "회의실에서 기다리고 있습니다.",
    breakdown: [
      { word: "待っています", reading: "まっています", meaning: "기다리고 있습니다" }
    ] },
  { level: "N5", kanji: "食堂", reading: "しょくどう", korean: "쇼쿠도-", meaning: "식당",
    example: "学校の食堂で昼ご飯を食べます。", exampleReading: "がっこうのしょくどうでひるごはんをたべます。", exampleKorean: "각코-노 쇼쿠도-데 히루고항오 타베마스", exampleMeaning: "학교 식당에서 점심을 먹습니다.",
    breakdown: [
      { word: "昼ご飯", reading: "ひるごはん", meaning: "점심밥" }
    ] },
  { level: "N5", kanji: "エスカレーター", reading: "エスカレーター", korean: "에스카레-타-", meaning: "에스컬레이터",
    example: "エスカレーターで上に行きます。", exampleReading: "エスカレーターでうえにいきます。", exampleKorean: "에스카레-타-데 우에니 이키마스", exampleMeaning: "에스컬레이터로 위로 갑니다.",
    breakdown: [
      { word: "上に", reading: "うえに", meaning: "위로" }
    ] },
  { level: "N5", kanji: "塀", reading: "へい", korean: "헤-", meaning: "담장",
    example: "家の周りに塀があります。", exampleReading: "いえのまわりにへいがあります。", exampleKorean: "이에노 마와리니 헤-가 아리마스", exampleMeaning: "집 주변에 담장이 있습니다.",
    breakdown: [
      { word: "周り", reading: "まわり", meaning: "주변" }
    ] },
  { level: "N5", kanji: "門", reading: "もん", korean: "몬", meaning: "문",
    example: "学校の門の前で待ちました。", exampleReading: "がっこうのもんのまえでまちました。", exampleKorean: "각코-노 몬노 마에데 마치마시타", exampleMeaning: "학교 문 앞에서 기다렸습니다.",
    breakdown: [
      { word: "前で", reading: "まえで", meaning: "앞에서" }
    ] },
  { level: "N5", kanji: "靴箱", reading: "くつばこ", korean: "쿠츠바코", meaning: "신발장",
    example: "靴箱に靴を入れました。", exampleReading: "くつばこにくつをいれました。", exampleKorean: "쿠츠바코니 쿠츠오 이레마시타", exampleMeaning: "신발장에 신발을 넣었습니다.",
    breakdown: [
      { word: "靴", reading: "くつ", meaning: "신발" }
    ] },
  { level: "N5", kanji: "洗面所", reading: "せんめんじょ", korean: "센멘죠", meaning: "세면장",
    example: "洗面所で手を洗いました。", exampleReading: "せんめんじょでてをあらいました。", exampleKorean: "센멘죠데 테오 아라이마시타", exampleMeaning: "세면장에서 손을 씻었습니다.",
    breakdown: [
      { word: "手", reading: "て", meaning: "손" }
    ] },
  { level: "N5", kanji: "お手洗い", reading: "おてあらい", korean: "오테아라이", meaning: "화장실",
    example: "お手洗いはどこですか。", exampleReading: "おてあらいはどこですか。", exampleKorean: "오테아라이와 도코데스카", exampleMeaning: "화장실은 어디입니까?",
    breakdown: [
      { word: "どこですか", reading: "どこですか", meaning: "어디입니까" }
    ] },
  { level: "N5", kanji: "リビング", reading: "リビング", korean: "리빙구", meaning: "거실",
    example: "家族はリビングでテレビを見ます。", exampleReading: "かぞくはリビングでテレビをみます。", exampleKorean: "카조쿠와 리빙구데 테레비오 미마스", exampleMeaning: "가족은 거실에서 텔레비전을 봅니다.",
    breakdown: [
      { word: "家族", reading: "かぞく", meaning: "가족" }
    ] },
  { level: "N5", kanji: "寝室", reading: "しんしつ", korean: "신시츠", meaning: "침실",
    example: "寝室で本を読みます。", exampleReading: "しんしつでほんをよみます。", exampleKorean: "신시츠데 홍오 요미마스", exampleMeaning: "침실에서 책을 읽습니다.",
    breakdown: [
      { word: "本", reading: "ほん", meaning: "책" }
    ] },
  { level: "N5", kanji: "家賃", reading: "やちん", korean: "야친", meaning: "집세",
    example: "毎月家賃を払います。", exampleReading: "まいつきやちんをはらいます。", exampleKorean: "마이츠키 야친오 하라이마스", exampleMeaning: "매달 집세를 냅니다.",
    breakdown: [
      { word: "毎月", reading: "まいつき", meaning: "매달" }
    ] },
  { level: "N5", kanji: "スーツケース", reading: "スーツケース", korean: "스-츠케-스", meaning: "여행가방",
    example: "スーツケースに荷物を詰めます。", exampleReading: "スーツケースににもつをつめます。", exampleKorean: "스-츠케-스니 니모츠오 츠메마스", exampleMeaning: "여행가방에 짐을 챙깁니다.",
    breakdown: [
      { word: "荷物", reading: "にもつ", meaning: "짐" }
    ] },
  { level: "N5", kanji: "定規", reading: "じょうぎ", korean: "죠-기", meaning: "자",
    example: "定規で線を引きました。", exampleReading: "じょうぎでせんをひきました。", exampleKorean: "죠-기데 셍오 히키마시타", exampleMeaning: "자로 선을 그었습니다.",
    breakdown: [
      { word: "線", reading: "せん", meaning: "선" }
    ] },
  { level: "N5", kanji: "はさみ", reading: "はさみ", korean: "하사미", meaning: "가위",
    example: "はさみで紙を切りました。", exampleReading: "はさみでかみをきりました。", exampleKorean: "하사미데 카미오 키리마시타", exampleMeaning: "가위로 종이를 잘랐습니다.",
    breakdown: [
      { word: "紙", reading: "かみ", meaning: "종이" }
    ] },
  { level: "N5", kanji: "のり", reading: "のり", korean: "노리", meaning: "풀",
    example: "のりで写真を貼りました。", exampleReading: "のりでしゃしんをはりました。", exampleKorean: "노리데 샤싱오 하리마시타", exampleMeaning: "풀로 사진을 붙였습니다.",
    breakdown: [
      { word: "写真", reading: "しゃしん", meaning: "사진" }
    ] },
  { level: "N5", kanji: "ホッチキス", reading: "ホッチキス", korean: "홋치키스", meaning: "스테이플러",
    example: "書類をホッチキスで留めました。", exampleReading: "しょるいをホッチキスでとめました。", exampleKorean: "쇼루이오 홋치키스데 토메마시타", exampleMeaning: "서류를 스테이플러로 찍었습니다.",
    breakdown: [
      { word: "書類", reading: "しょるい", meaning: "서류" }
    ] },
  { level: "N5", kanji: "クリップ", reading: "クリップ", korean: "쿠릿푸", meaning: "클립",
    example: "紙をクリップで挟みました。", exampleReading: "かみをクリップではさみました。", exampleKorean: "카미오 쿠릿푸데 하사미마시타", exampleMeaning: "종이를 클립으로 끼웠습니다.",
    breakdown: [
      { word: "紙", reading: "かみ", meaning: "종이" }
    ] },
  { level: "N5", kanji: "付箋", reading: "ふせん", korean: "후센", meaning: "포스트잇",
    example: "付箋にメモを書きました。", exampleReading: "ふせんにメモをかきました。", exampleKorean: "후센니 메모오 카키마시타", exampleMeaning: "포스트잇에 메모를 썼습니다.",
    breakdown: [
      { word: "メモ", reading: "メモ", meaning: "메모" }
    ] },
  { level: "N5", kanji: "ファイル", reading: "ファイル", korean: "화이루", meaning: "파일",
    example: "書類をファイルに入れます。", exampleReading: "しょるいをファイルにいれます。", exampleKorean: "쇼루이오 화이루니 이레마스", exampleMeaning: "서류를 파일에 넣습니다.",
    breakdown: [
      { word: "書類", reading: "しょるい", meaning: "서류" }
    ] },
  { level: "N5", kanji: "コピー機", reading: "コピーき", korean: "코피-키", meaning: "복사기",
    example: "コピー機が壊れています。", exampleReading: "コピーきがこわれています。", exampleKorean: "코피-키가 코와레테 이마스", exampleMeaning: "복사기가 고장 나 있습니다.",
    breakdown: [
      { word: "壊れて", reading: "こわれて", meaning: "고장 나서" }
    ] },
  { level: "N5", kanji: "プリンター", reading: "プリンター", korean: "푸린타-", meaning: "프린터",
    example: "プリンターで印刷しました。", exampleReading: "プリンターでいんさつしました。", exampleKorean: "푸린타-데 인사츠 시마시타", exampleMeaning: "프린터로 인쇄했습니다.",
    breakdown: [
      { word: "印刷", reading: "いんさつ", meaning: "인쇄" }
    ] },
  { level: "N5", kanji: "掃く", reading: "はく", korean: "하쿠", meaning: "쓸다",
    example: "毎朝庭を掃きます。", exampleReading: "まいあさにわをはきます。", exampleKorean: "마이아사 니와오 하키마스", exampleMeaning: "매일 아침 마당을 씁니다.",
    breakdown: [
      { word: "庭", reading: "にわ", meaning: "마당" }
    ] },
  { level: "N5", kanji: "干す", reading: "ほす", korean: "호스", meaning: "말리다",
    example: "洗濯物を外に干しました。", exampleReading: "せんたくものをそとにほしました。", exampleKorean: "센타쿠모노오 소토니 호시마시타", exampleMeaning: "빨래를 밖에 말렸습니다.",
    breakdown: [
      { word: "洗濯物", reading: "せんたくもの", meaning: "빨래" }
    ] },
  { level: "N5", kanji: "畳む", reading: "たたむ", korean: "타타무", meaning: "개다",
    example: "洗濯物を畳みました。", exampleReading: "せんたくものをたたみました。", exampleKorean: "센타쿠모노오 타타미마시타", exampleMeaning: "빨래를 갰습니다.",
    breakdown: [
      { word: "洗濯物", reading: "せんたくもの", meaning: "빨래" }
    ] },
  { level: "N5", kanji: "眠たい", reading: "ねむたい", korean: "네무타이", meaning: "졸리다",
    example: "今日はとても眠たいです。", exampleReading: "きょうはとてもねむたいです。", exampleKorean: "쿄-와 토테모 네무타이데스", exampleMeaning: "오늘은 매우 졸립니다.",
    breakdown: [
      { word: "今日", reading: "きょう", meaning: "오늘" }
    ] },
  { level: "N5", kanji: "懐かしい", reading: "なつかしい", korean: "나츠카시-", meaning: "그립다",
    example: "故郷が懐かしいです。", exampleReading: "こきょうがなつかしいです。", exampleKorean: "코쿄-가 나츠카시-데스", exampleMeaning: "고향이 그립습니다.",
    breakdown: [
      { word: "故郷", reading: "こきょう", meaning: "고향" }
    ] },
  { level: "N5", kanji: "眩しい", reading: "まぶしい", korean: "마부시-", meaning: "눈부시다",
    example: "朝の光が眩しいです。", exampleReading: "あさのひかりがまぶしいです。", exampleKorean: "아사노 히카리가 마부시-데스", exampleMeaning: "아침 햇살이 눈부십니다.",
    breakdown: [
      { word: "朝の光", reading: "あさのひかり", meaning: "아침 햇살" }
    ] },
  { level: "N5", kanji: "うるさい", reading: "うるさい", korean: "우루사이", meaning: "시끄럽다",
    example: "外がうるさいです。", exampleReading: "そとがうるさいです。", exampleKorean: "소토가 우루사이데스", exampleMeaning: "밖이 시끄럽습니다.",
    breakdown: [
      { word: "外", reading: "そと", meaning: "밖" }
    ] },
  { level: "N5", kanji: "静か", reading: "しずか", korean: "시즈카", meaning: "조용하다",
    example: "この部屋は静かです。", exampleReading: "このへやはしずかです。", exampleKorean: "코노 헤야와 시즈카데스", exampleMeaning: "이 방은 조용합니다.",
    breakdown: [
      { word: "部屋", reading: "へや", meaning: "방" }
    ] },
  { level: "N5", kanji: "退屈", reading: "たいくつ", korean: "타이쿠츠", meaning: "지루하다",
    example: "今日は退屈でした。", exampleReading: "きょうはたいくつでした。", exampleKorean: "쿄-와 타이쿠츠데시타", exampleMeaning: "오늘은 지루했습니다.",
    breakdown: [
      { word: "今日", reading: "きょう", meaning: "오늘" }
    ] },
  { level: "N5", kanji: "大変", reading: "たいへん", korean: "타이헨", meaning: "힘들다, 큰일",
    example: "仕事がとても大変です。", exampleReading: "しごとがとてもたいへんです。", exampleKorean: "시고토가 토테모 타이헨데스", exampleMeaning: "일이 매우 힘듭니다.",
    breakdown: [
      { word: "仕事", reading: "しごと", meaning: "일" }
    ] },
  { level: "N5", kanji: "親切", reading: "しんせつ", korean: "신세츠", meaning: "친절하다",
    example: "彼はとても親切です。", exampleReading: "かれはとてもしんせつです。", exampleKorean: "카레와 토테모 신세츠데스", exampleMeaning: "그는 매우 친절합니다.",
    breakdown: [
      { word: "彼", reading: "かれ", meaning: "그" }
    ] },
  { level: "N5", kanji: "丈夫", reading: "じょうぶ", korean: "죠-부", meaning: "튼튼하다",
    example: "この靴は丈夫です。", exampleReading: "このくつはじょうぶです。", exampleKorean: "코노 쿠츠와 죠-부데스", exampleMeaning: "이 신발은 튼튼합니다.",
    breakdown: [
      { word: "靴", reading: "くつ", meaning: "신발" }
    ] },
  { level: "N5", kanji: "簡単", reading: "かんたん", korean: "칸탄", meaning: "간단하다",
    example: "この問題は簡単です。", exampleReading: "このもんだいはかんたんです。", exampleKorean: "코노 몬다이와 칸탄데스", exampleMeaning: "이 문제는 간단합니다.",
    breakdown: [
      { word: "問題", reading: "もんだい", meaning: "문제" }
    ] },
  { level: "N5", kanji: "有名", reading: "ゆうめい", korean: "유-메-", meaning: "유명하다",
    example: "この店は有名です。", exampleReading: "このみせはゆうめいです。", exampleKorean: "코노 미세와 유-메-데스", exampleMeaning: "이 가게는 유명합니다.",
    breakdown: [
      { word: "店", reading: "みせ", meaning: "가게" }
    ] },
  { level: "N5", kanji: "大事", reading: "だいじ", korean: "다이지", meaning: "소중하다",
    example: "家族が一番大事です。", exampleReading: "かぞくがいちばんだいじです。", exampleKorean: "카조쿠가 이치반 다이지데스", exampleMeaning: "가족이 가장 소중합니다.",
    breakdown: [
      { word: "一番", reading: "いちばん", meaning: "가장" }
    ] },
  { level: "N5", kanji: "素敵", reading: "すてき", korean: "스테키", meaning: "멋지다",
    example: "素敵な服ですね。", exampleReading: "すてきなふくですね。", exampleKorean: "스테키나 후쿠데스네", exampleMeaning: "멋진 옷이네요.",
    breakdown: [
      { word: "服", reading: "ふく", meaning: "옷" }
    ] },
  { level: "N5", kanji: "立派", reading: "りっぱ", korean: "릿파", meaning: "훌륭하다",
    example: "立派な建物です。", exampleReading: "りっぱなたてものです。", exampleKorean: "릿파나 타테모노데스", exampleMeaning: "훌륭한 건물입니다.",
    breakdown: [
      { word: "建物", reading: "たてもの", meaning: "건물" }
    ] },
  { level: "N5", kanji: "無理", reading: "むり", korean: "무리", meaning: "무리",
    example: "それは無理です。", exampleReading: "それはむりです。", exampleKorean: "소레와 무리데스", exampleMeaning: "그것은 무리입니다.",
    breakdown: [
      { word: "それは", reading: "それは", meaning: "그것은" }
    ] },
  { level: "N5", kanji: "明るい", reading: "あかるい", korean: "아카루이", meaning: "밝다",
    example: "この部屋は明るいです。", exampleReading: "このへやはあかるいです。", exampleKorean: "코노 헤야와 아카루이데스", exampleMeaning: "이 방은 밝습니다.",
    breakdown: [
      { word: "部屋", reading: "へや", meaning: "방" }
    ] },
  { level: "N5", kanji: "暗い", reading: "くらい", korean: "쿠라이", meaning: "어둡다",
    example: "夜は道が暗いです。", exampleReading: "よるはみちがくらいです。", exampleKorean: "요루와 미치가 쿠라이데스", exampleMeaning: "밤에는 길이 어둡습니다.",
    breakdown: [
      { word: "道", reading: "みち", meaning: "길" }
    ] },
  { level: "N5", kanji: "にぎやか", reading: "にぎやか", korean: "니기야카", meaning: "활기차다, 번화하다",
    example: "この町はにぎやかです。", exampleReading: "このまちはにぎやかです。", exampleKorean: "코노 마치와 니기야카데스", exampleMeaning: "이 동네는 번화합니다.",
    breakdown: [
      { word: "町", reading: "まち", meaning: "동네" }
    ] },
  { level: "N5", kanji: "上手", reading: "じょうず", korean: "죠-즈", meaning: "잘함, 능숙함",
    example: "彼女は料理が上手です。", exampleReading: "かのじょはりょうりがじょうずです。", exampleKorean: "카노죠와 료-리가 죠-즈데스", exampleMeaning: "그녀는 요리를 잘합니다.",
    breakdown: [
      { word: "料理", reading: "りょうり", meaning: "요리" }
    ] },

  // ---------- N4 ----------
  { level: "N4", kanji: "経験", reading: "けいけん", korean: "케-켄", meaning: "경험",
    example: "海外で働いた経験があります。", exampleReading: "かいがいではたらいたけいけんがあります。", exampleKorean: "카이가이데 하타라이타 케-켄가 아리마스", exampleMeaning: "해외에서 일한 경험이 있습니다.",
    breakdown: [
      { word: "海外で", reading: "かいがいで", meaning: "해외에서" },
      { word: "働いた", reading: "はたらいた", meaning: "일했다" },
    ] },
  { level: "N4", kanji: "準備", reading: "じゅんび", korean: "준비", meaning: "준비",
    example: "旅行の準備をしています。", exampleReading: "りょこうのじゅんびをしています。", exampleKorean: "료코-노 준비오 시테이마스", exampleMeaning: "여행 준비를 하고 있습니다.",
    breakdown: [
      { word: "旅行の", reading: "りょこうの", meaning: "여행의" },
    ] },
  { level: "N4", kanji: "説明", reading: "せつめい", korean: "세츠메-", meaning: "설명",
    example: "先生が使い方を説明しました。", exampleReading: "せんせいがつかいかたをせつめいしました。", exampleKorean: "센세-가 츠카이카타오 세츠메- 시마시타", exampleMeaning: "선생님이 사용법을 설명했습니다.",
    breakdown: [
      { word: "使い方", reading: "つかいかた", meaning: "사용법" },
    ] },
  { level: "N4", kanji: "心配", reading: "しんぱい", korean: "심파이", meaning: "걱정",
    example: "試験の結果が心配です。", exampleReading: "しけんのけっかがしんぱいです。", exampleKorean: "시켄노 켁카가 심파이데스", exampleMeaning: "시험 결과가 걱정됩니다.",
    breakdown: [
      { word: "試験の結果", reading: "しけんのけっか", meaning: "시험 결과" },
    ] },
  { level: "N4", kanji: "続ける", reading: "つづける", korean: "츠즈케루", meaning: "계속하다",
    example: "毎日日本語の勉強を続けています。", exampleReading: "まいにちにほんごのべんきょうをつづけています。", exampleKorean: "마이니치 니홍고노 벵쿄-오 츠즈케테이마스", exampleMeaning: "매일 일본어 공부를 계속하고 있습니다.",
    breakdown: [
      { word: "続けています", reading: "つづけています", meaning: "계속하고 있습니다" },
    ] },
  { level: "N4", kanji: "案内", reading: "あんない", korean: "안나이", meaning: "안내",
    example: "駅まで道を案内しました。", exampleReading: "えきまでみちをあんないしました。", exampleKorean: "에키마데 미치오 안나이 시마시타", exampleMeaning: "역까지 길을 안내했습니다.",
    breakdown: [
      { word: "駅まで", reading: "えきまで", meaning: "역까지" },
    ] },
  { level: "N4", kanji: "特に", reading: "とくに", korean: "토쿠니", meaning: "특히",
    example: "夏は特に暑いです。", exampleReading: "なつはとくにあついです。", exampleKorean: "나츠와 토쿠니 아츠이데스", exampleMeaning: "여름은 특히 덥습니다.",
    breakdown: [
      { word: "夏は", reading: "なつは", meaning: "여름은" },
    ] },
  { level: "N4", kanji: "必要", reading: "ひつよう", korean: "히츠요-", meaning: "필요",
    example: "この仕事にはパソコンが必要です。", exampleReading: "このしごとにはパソコンがひつようです。", exampleKorean: "코노 시고토니와 파소콘가 히츠요-데스", exampleMeaning: "이 일에는 컴퓨터가 필요합니다.",
    breakdown: [
      { word: "この仕事には", reading: "このしごとには", meaning: "이 일에는" },
    ] },
  { level: "N4", kanji: "都合", reading: "つごう", korean: "츠고-", meaning: "사정, 형편",
    example: "明日は都合が悪いです。", exampleReading: "あしたはつごうがわるいです。", exampleKorean: "아시타와 츠고-가 와루이데스", exampleMeaning: "내일은 사정이 안 좋습니다.",
    breakdown: [
      { word: "悪いです", reading: "わるいです", meaning: "나쁩니다" },
    ] },
  { level: "N4", kanji: "用意", reading: "ようい", korean: "요-이", meaning: "준비",
    example: "夕食の用意をしました。", exampleReading: "ゆうしょくのよういをしました。", exampleKorean: "유-쇼쿠노 요-이오 시마시타", exampleMeaning: "저녁 준비를 했습니다.",
    breakdown: [
      { word: "夕食の", reading: "ゆうしょくの", meaning: "저녁의" },
    ] },
  { level: "N4", kanji: "招待", reading: "しょうたい", korean: "쇼-타이", meaning: "초대",
    example: "友達を誕生日パーティーに招待しました。", exampleReading: "ともだちをたんじょうびパーティーにしょうたいしました。", exampleKorean: "도모다치오 탄죠-비 파-티-니 쇼-타이 시마시타", exampleMeaning: "친구를 생일파티에 초대했습니다.",
    breakdown: [
      { word: "誕生日パーティーに", reading: "たんじょうびパーティーに", meaning: "생일 파티에" },
    ] },
  { level: "N4", kanji: "経済", reading: "けいざい", korean: "케-자이", meaning: "경제",
    example: "経済のニュースをよく見ます。", exampleReading: "けいざいのニュースをよくみます。", exampleKorean: "케-자이노 뉴-스오 요쿠 미마스", exampleMeaning: "경제 뉴스를 자주 봅니다.",
    breakdown: [
      { word: "よく", reading: "よく", meaning: "자주" },
    ] },
  { level: "N4", kanji: "決める", reading: "きめる", korean: "키메루", meaning: "정하다",
    example: "旅行の日程を決めました。", exampleReading: "りょこうのにっていをきめました。", exampleKorean: "료코-노 닛테-오 키메마시타", exampleMeaning: "여행 일정을 정했습니다.",
    breakdown: [
      { word: "日程", reading: "にってい", meaning: "일정" },
    ] },
  { level: "N4", kanji: "育てる", reading: "そだてる", korean: "소다테루", meaning: "기르다",
    example: "庭で野菜を育てています。", exampleReading: "にわでやさいをそだてています。", exampleKorean: "니와데 야사이오 소다테테이마스", exampleMeaning: "마당에서 채소를 기르고 있습니다.",
    breakdown: [
      { word: "庭で", reading: "にわで", meaning: "마당에서" },
    ] },
  { level: "N4", kanji: "変わる", reading: "かわる", korean: "카와루", meaning: "바뀌다",
    example: "天気が急に変わりました。", exampleReading: "てんきがきゅうにかわりました。", exampleKorean: "텡키가 큐-니 카와리마시타", exampleMeaning: "날씨가 갑자기 바뀌었습니다.",
    breakdown: [
      { word: "急に", reading: "きゅうに", meaning: "갑자기" },
    ] },
  { level: "N4", kanji: "忘れる", reading: "わすれる", korean: "와스레루", meaning: "잊다",
    example: "傘を電車に忘れました。", exampleReading: "かさをでんしゃにわすれました。", exampleKorean: "카사오 덴샤니 와스레마시타", exampleMeaning: "우산을 전철에 두고 왔습니다.",
    breakdown: [
      { word: "電車に", reading: "でんしゃに", meaning: "전철에" },
    ] },
  { level: "N4", kanji: "頑張る", reading: "がんばる", korean: "감바루", meaning: "노력하다, 힘내다",
    example: "試験に合格するために頑張ります。", exampleReading: "しけんにごうかくするためにがんばります。", exampleKorean: "시켄니 고-카쿠스루 타메니 감바리마스", exampleMeaning: "시험에 합격하기 위해 열심히 하겠습니다.",
    breakdown: [
      { word: "ために", reading: "ために", meaning: "~하기 위해" },
    ] },
  { level: "N4", kanji: "実は", reading: "じつは", korean: "지츠와", meaning: "사실은",
    example: "実は、明日国へ帰ります。", exampleReading: "じつは、あしたくにへかえります。", exampleKorean: "지츠와, 아시타 쿠니에 카에리마스", exampleMeaning: "사실은 내일 고향에 돌아갑니다.",
    breakdown: [
      { word: "国へ", reading: "くにへ", meaning: "고향으로" },
    ] },
  { level: "N4", kanji: "質問", reading: "しつもん", korean: "시츠몬", meaning: "질문",
    example: "授業の後で質問をしました。", exampleReading: "じゅぎょうのあとでしつもんをしました。", exampleKorean: "쥬교-노 아토데 시츠몬오 시마시타", exampleMeaning: "수업 후에 질문을 했습니다.",
    breakdown: [
      { word: "授業の後で", reading: "じゅぎょうのあとで", meaning: "수업 후에" },
    ] },
  { level: "N4", kanji: "集める", reading: "あつめる", korean: "아츠메루", meaning: "모으다",
    example: "切手を集めるのが趣味です。", exampleReading: "きってをあつめるのがしゅみです。", exampleKorean: "킷테오 아츠메루노가 슈미데스", exampleMeaning: "우표를 모으는 것이 취미입니다.",
    breakdown: [
      { word: "趣味です", reading: "しゅみです", meaning: "취미입니다" },
    ] },

  { level: "N4", kanji: "相談", reading: "そうだん", korean: "소-단", meaning: "상담",
    example: "進路について先生に相談しました。", exampleReading: "しんろについてせんせいにそうだんしました。", exampleKorean: "신로니 츠이테 센세-니 소-단 시마시타", exampleMeaning: "진로에 대해 선생님과 상담했습니다.",
    breakdown: [
      { word: "進路について", reading: "しんろについて", meaning: "진로에 대해" },
    ] },
  { level: "N4", kanji: "予定", reading: "よてい", korean: "요테-", meaning: "예정",
    example: "来週の予定を確認してください。", exampleReading: "らいしゅうのよていをかくにんしてください。", exampleKorean: "라이슈-노 요테-오 카쿠닌 시테쿠다사이", exampleMeaning: "다음 주 예정을 확인해 주세요.",
    breakdown: [
      { word: "確認してください", reading: "かくにんしてください", meaning: "확인해 주세요" },
    ] },
  { level: "N4", kanji: "予約", reading: "よやく", korean: "요야쿠", meaning: "예약",
    example: "レストランを予約しました。", exampleReading: "レストランをよやくしました。", exampleKorean: "레스토랑오 요야쿠 시마시타", exampleMeaning: "레스토랑을 예약했습니다.",
    breakdown: [
      { word: "レストラン", reading: "レストラン", meaning: "레스토랑" },
    ] },
  { level: "N4", kanji: "連絡", reading: "れんらく", korean: "렌라쿠", meaning: "연락",
    example: "何かあったらすぐ連絡してください。", exampleReading: "なにかあったらすぐれんらくしてください。", exampleKorean: "나니카 앗타라 스구 렌라쿠 시테쿠다사이", exampleMeaning: "무슨 일이 있으면 바로 연락해 주세요.",
    breakdown: [
      { word: "何かあったら", reading: "なにかあったら", meaning: "무슨 일이 있으면" },
    ] },
  { level: "N4", kanji: "生活", reading: "せいかつ", korean: "세-카츠", meaning: "생활",
    example: "日本での生活に慣れました。", exampleReading: "にほんでのせいかつになれました。", exampleKorean: "니혼데노 세-카츠니 나레마시타", exampleMeaning: "일본에서의 생활에 익숙해졌습니다.",
    breakdown: [
      { word: "慣れました", reading: "なれました", meaning: "익숙해졌습니다" },
    ] },
  { level: "N4", kanji: "習慣", reading: "しゅうかん", korean: "슈-칸", meaning: "습관",
    example: "早起きの習慣をつけたいです。", exampleReading: "はやおきのしゅうかんをつけたいです。", exampleKorean: "하야오키노 슈-칸오 츠케타이데스", exampleMeaning: "일찍 일어나는 습관을 들이고 싶습니다.",
    breakdown: [
      { word: "早起き", reading: "はやおき", meaning: "일찍 일어남" },
    ] },
  { level: "N4", kanji: "練習", reading: "れんしゅう", korean: "렌슈-", meaning: "연습",
    example: "毎日ピアノの練習をします。", exampleReading: "まいにちピアノのれんしゅうをします。", exampleKorean: "마이니치 피아노노 렌슈-오 시마스", exampleMeaning: "매일 피아노 연습을 합니다.",
    breakdown: [
      { word: "ピアノ", reading: "ピアノ", meaning: "피아노" },
    ] },
  { level: "N4", kanji: "参加", reading: "さんか", korean: "상카", meaning: "참가",
    example: "スピーチ大会に参加します。", exampleReading: "スピーチたいかいにさんかします。", exampleKorean: "스피-치 타이카이니 상카 시마스", exampleMeaning: "스피치 대회에 참가합니다.",
    breakdown: [
      { word: "スピーチ大会", reading: "スピーチたいかい", meaning: "스피치 대회" },
    ] },
  { level: "N4", kanji: "到着", reading: "とうちゃく", korean: "토-챠쿠", meaning: "도착",
    example: "飛行機は九時に到着します。", exampleReading: "ひこうきはくじにとうちゃくします。", exampleKorean: "히코-키와 쿠지니 토-챠쿠 시마스", exampleMeaning: "비행기는 9시에 도착합니다.",
    breakdown: [
      { word: "九時に", reading: "くじに", meaning: "9시에" },
    ] },
  { level: "N4", kanji: "出発", reading: "しゅっぱつ", korean: "슛파츠", meaning: "출발",
    example: "バスは十分後に出発します。", exampleReading: "バスはじゅっぷんごにしゅっぱつします。", exampleKorean: "바스와 쥿푼고니 슛파츠 시마스", exampleMeaning: "버스는 10분 후에 출발합니다.",
    breakdown: [
      { word: "十分後に", reading: "じゅっぷんごに", meaning: "10분 후에" },
    ] },
  { level: "N4", kanji: "苦手", reading: "にがて", korean: "니가테", meaning: "서투름, 싫어함",
    example: "私は数学が苦手です。", exampleReading: "わたしはすうがくがにがてです。", exampleKorean: "와타시와 스-가쿠가 니가테데스", exampleMeaning: "저는 수학을 잘 못합니다.",
    breakdown: [
      { word: "数学", reading: "すうがく", meaning: "수학" },
    ] },
  { level: "N4", kanji: "得意", reading: "とくい", korean: "토쿠이", meaning: "잘함, 자신있음",
    example: "兄は料理が得意です。", exampleReading: "あにはりょうりがとくいです。", exampleKorean: "아니와 료-리가 토쿠이데스", exampleMeaning: "형은 요리를 잘합니다.",
    breakdown: [
      { word: "料理", reading: "りょうり", meaning: "요리" },
    ] },
  { level: "N4", kanji: "便利", reading: "べんり", korean: "벤리", meaning: "편리",
    example: "このアプリはとても便利です。", exampleReading: "このアプリはとてもべんりです。", exampleKorean: "코노 아프리와 도테모 벤리데스", exampleMeaning: "이 앱은 아주 편리합니다.",
    breakdown: [
      { word: "アプリ", reading: "アプリ", meaning: "앱" },
    ] },
  { level: "N4", kanji: "不便", reading: "ふべん", korean: "후벤", meaning: "불편",
    example: "車がないと不便です。", exampleReading: "くるまがないとふべんです。", exampleKorean: "쿠루마가 나이토 후벤데스", exampleMeaning: "차가 없으면 불편합니다.",
    breakdown: [
      { word: "ないと", reading: "ないと", meaning: "없으면 (가정)" },
    ] },
  { level: "N4", kanji: "大切", reading: "たいせつ", korean: "타이세츠", meaning: "소중함, 중요함",
    example: "家族はとても大切です。", exampleReading: "かぞくはとてもたいせつです。", exampleKorean: "카조쿠와 도테모 타이세츠데스", exampleMeaning: "가족은 아주 소중합니다.",
    breakdown: [
      { word: "家族", reading: "かぞく", meaning: "가족" },
    ] },
  { level: "N4", kanji: "危険", reading: "きけん", korean: "키켄", meaning: "위험",
    example: "一人で山に登るのは危険です。", exampleReading: "ひとりでやまにのぼるのはきけんです。", exampleKorean: "히토리데 야마니 노보루노와 키켄데스", exampleMeaning: "혼자 산에 오르는 것은 위험합니다.",
    breakdown: [
      { word: "一人で", reading: "ひとりで", meaning: "혼자서" },
    ] },
  { level: "N4", kanji: "安全", reading: "あんぜん", korean: "안젠", meaning: "안전",
    example: "安全のためにベルトを締めてください。", exampleReading: "あんぜんのためにベルトをしめてください。", exampleKorean: "안젠노 타메니 베루토오 시메테쿠다사이", exampleMeaning: "안전을 위해 벨트를 매 주세요.",
    breakdown: [
      { word: "ベルトを締めて", reading: "ベルトをしめて", meaning: "벨트를 매고" },
    ] },
  { level: "N4", kanji: "自由", reading: "じゆう", korean: "지유-", meaning: "자유",
    example: "休みの日は自由に過ごします。", exampleReading: "やすみのひはじゆうにすごします。", exampleKorean: "야스미노 히와 지유-니 스고시마스", exampleMeaning: "쉬는 날은 자유롭게 보냅니다.",
    breakdown: [
      { word: "休みの日", reading: "やすみのひ", meaning: "쉬는 날" },
    ] },
  { level: "N4", kanji: "規則", reading: "きそく", korean: "키소쿠", meaning: "규칙",
    example: "学校の規則を守ります。", exampleReading: "がっこうのきそくをまもります。", exampleKorean: "각코-노 키소쿠오 마모리마스", exampleMeaning: "학교 규칙을 지킵니다.",
    breakdown: [
      { word: "守ります", reading: "まもります", meaning: "지킵니다" },
    ] },
  { level: "N4", kanji: "禁止", reading: "きんし", korean: "킨시", meaning: "금지",
    example: "ここは駐車禁止です。", exampleReading: "ここはちゅうしゃきんしです。", exampleKorean: "코코와 츄-샤 킨시데스", exampleMeaning: "여기는 주차 금지입니다.",
    breakdown: [
      { word: "駐車", reading: "ちゅうしゃ", meaning: "주차" },
    ] },
  { level: "N4", kanji: "許可", reading: "きょか", korean: "쿄카", meaning: "허가",
    example: "先生の許可をもらいました。", exampleReading: "せんせいのきょかをもらいました。", exampleKorean: "센세-노 쿄카오 모라이마시타", exampleMeaning: "선생님의 허가를 받았습니다.",
    breakdown: [
      { word: "もらいました", reading: "もらいました", meaning: "받았습니다" },
    ] },
  { level: "N4", kanji: "失敗", reading: "しっぱい", korean: "십파이", meaning: "실패",
    example: "実験に失敗しました。", exampleReading: "じっけんにしっぱいしました。", exampleKorean: "짓켄니 십파이 시마시타", exampleMeaning: "실험에 실패했습니다.",
    breakdown: [
      { word: "実験", reading: "じっけん", meaning: "실험" },
    ] },
  { level: "N4", kanji: "成功", reading: "せいこう", korean: "세-코-", meaning: "성공",
    example: "事業が成功しました。", exampleReading: "じぎょうがせいこうしました。", exampleKorean: "지교-가 세-코- 시마시타", exampleMeaning: "사업이 성공했습니다.",
    breakdown: [
      { word: "事業", reading: "じぎょう", meaning: "사업" },
    ] },
  { level: "N4", kanji: "努力", reading: "どりょく", korean: "도료쿠", meaning: "노력",
    example: "合格するために努力します。", exampleReading: "ごうかくするためにどりょくします。", exampleKorean: "고-카쿠스루 타메니 도료쿠 시마스", exampleMeaning: "합격하기 위해 노력합니다.",
    breakdown: [
      { word: "合格するために", reading: "ごうかくするために", meaning: "합격하기 위해" },
    ] },
  { level: "N4", kanji: "上達", reading: "じょうたつ", korean: "죠-타츠", meaning: "실력 향상",
    example: "日本語がだいぶ上達しました。", exampleReading: "にほんごがだいぶじょうたつしました。", exampleKorean: "니홍고가 다이부 죠-타츠 시마시타", exampleMeaning: "일본어가 많이 늘었습니다.",
    breakdown: [
      { word: "だいぶ", reading: "だいぶ", meaning: "많이" },
    ] },
  { level: "N4", kanji: "進歩", reading: "しんぽ", korean: "신포", meaning: "진보",
    example: "技術がどんどん進歩しています。", exampleReading: "ぎじゅつがどんどんしんぽしています。", exampleKorean: "기쥬츠가 돈돈 신포 시테이마스", exampleMeaning: "기술이 점점 진보하고 있습니다.",
    breakdown: [
      { word: "どんどん", reading: "どんどん", meaning: "점점, 계속" },
    ] },
  { level: "N4", kanji: "交換", reading: "こうかん", korean: "코-칸", meaning: "교환",
    example: "サイズが合わないので交換しました。", exampleReading: "サイズがあわないのでこうかんしました。", exampleKorean: "사이즈가 아와나이노데 코-칸 시마시타", exampleMeaning: "사이즈가 안 맞아서 교환했습니다.",
    breakdown: [
      { word: "サイズが合わない", reading: "サイズがあわない", meaning: "사이즈가 안 맞다" },
    ] },
  { level: "N4", kanji: "交通", reading: "こうつう", korean: "코-츠-", meaning: "교통",
    example: "この辺りは交通が便利です。", exampleReading: "このあたりはこうつうがべんりです。", exampleKorean: "코노 아타리와 코-츠-가 벤리데스", exampleMeaning: "이 근처는 교통이 편리합니다.",
    breakdown: [
      { word: "この辺り", reading: "このあたり", meaning: "이 근처" },
    ] },
  { level: "N4", kanji: "渋滞", reading: "じゅうたい", korean: "쥬-타이", meaning: "정체(교통체증)",
    example: "道路がひどく渋滞しています。", exampleReading: "どうろがひどくじゅうたいしています。", exampleKorean: "도-로가 히도쿠 쥬-타이 시테이마스", exampleMeaning: "도로가 심하게 정체되고 있습니다.",
    breakdown: [
      { word: "ひどく", reading: "ひどく", meaning: "심하게" },
    ] },
  { level: "N4", kanji: "遅刻", reading: "ちこく", korean: "치코쿠", meaning: "지각",
    example: "電車が遅れて遅刻しました。", exampleReading: "でんしゃがおくれてちこくしました。", exampleKorean: "덴샤가 오쿠레테 치코쿠 시마시타", exampleMeaning: "전철이 늦어서 지각했습니다.",
    breakdown: [
      { word: "遅れて", reading: "おくれて", meaning: "늦어서" },
    ] },
  { level: "N4", kanji: "欠席", reading: "けっせき", korean: "켓세키", meaning: "결석",
    example: "風邪で授業を欠席しました。", exampleReading: "かぜでじゅぎょうをけっせきしました。", exampleKorean: "카제데 쥬교-오 켓세키 시마시타", exampleMeaning: "감기로 수업을 결석했습니다.",
    breakdown: [
      { word: "風邪で", reading: "かぜで", meaning: "감기로" },
    ] },
  { level: "N4", kanji: "出席", reading: "しゅっせき", korean: "슛세키", meaning: "출석",
    example: "全員が会議に出席しました。", exampleReading: "ぜんいんがかいぎにしゅっせきしました。", exampleKorean: "젠잉가 카이기니 슛세키 시마시타", exampleMeaning: "전원이 회의에 출석했습니다.",
    breakdown: [
      { word: "全員", reading: "ぜんいん", meaning: "전원" },
    ] },
  { level: "N4", kanji: "提出", reading: "ていしゅつ", korean: "테-슈츠", meaning: "제출",
    example: "レポートを明日提出します。", exampleReading: "レポートをあしたていしゅつします。", exampleKorean: "레포-토오 아시타 테-슈츠 시마스", exampleMeaning: "리포트를 내일 제출합니다.",
    breakdown: [
      { word: "レポート", reading: "レポート", meaning: "리포트" },
    ] },
  { level: "N4", kanji: "締め切り", reading: "しめきり", korean: "시메키리", meaning: "마감",
    example: "レポートの締め切りは金曜日です。", exampleReading: "レポートのしめきりはきんようびです。", exampleKorean: "레포-토노 시메키리와 킹요-비데스", exampleMeaning: "리포트 마감은 금요일입니다.",
    breakdown: [
      { word: "金曜日", reading: "きんようび", meaning: "금요일" },
    ] },
  { level: "N4", kanji: "解約", reading: "かいやく", korean: "카이야쿠", meaning: "해지, 계약 해제",
    example: "携帯電話の契約を解約しました。", exampleReading: "けいたいでんわのけいやくをかいやくしました。", exampleKorean: "케-타이 뎅와노 케-야쿠오 카이야쿠 시마시타", exampleMeaning: "휴대폰 계약을 해지했습니다.",
    breakdown: [
      { word: "携帯電話の契約", reading: "けいたいでんわのけいやく", meaning: "휴대폰 계약" },
    ] },
  { level: "N4", kanji: "支払う", reading: "しはらう", korean: "시하라우", meaning: "지불하다",
    example: "カードで支払います。", exampleReading: "カードでしはらいます。", exampleKorean: "카-도데 시하라이마스", exampleMeaning: "카드로 지불합니다.",
    breakdown: [
      { word: "カードで", reading: "カードで", meaning: "카드로" },
    ] },
  { level: "N4", kanji: "節約", reading: "せつやく", korean: "세츠야쿠", meaning: "절약",
    example: "電気を節約しています。", exampleReading: "でんきをせつやくしています。", exampleKorean: "뎅키오 세츠야쿠 시테이마스", exampleMeaning: "전기를 절약하고 있습니다.",
    breakdown: [
      { word: "電気", reading: "でんき", meaning: "전기" },
    ] },
  { level: "N4", kanji: "増える", reading: "ふえる", korean: "후에루", meaning: "늘다",
    example: "最近、体重が増えました。", exampleReading: "さいきん、たいじゅうがふえました。", exampleKorean: "사이킹 타이쥬-가 후에마시타", exampleMeaning: "최근 체중이 늘었습니다.",
    breakdown: [
      { word: "体重", reading: "たいじゅう", meaning: "체중" },
    ] },
  { level: "N4", kanji: "減る", reading: "へる", korean: "헤루", meaning: "줄다",
    example: "貯金がだいぶ減りました。", exampleReading: "ちょきんがだいぶへりました。", exampleKorean: "쵸킨가 다이부 헤리마시타", exampleMeaning: "저금이 많이 줄었습니다.",
    breakdown: [
      { word: "貯金", reading: "ちょきん", meaning: "저금" },
    ] },
  { level: "N4", kanji: "治る", reading: "なおる", korean: "나오루", meaning: "낫다, 치료되다",
    example: "風邪がやっと治りました。", exampleReading: "かぜがやっとなおりました。", exampleKorean: "카제가 얏토 나오리마시타", exampleMeaning: "감기가 드디어 나았습니다.",
    breakdown: [
      { word: "やっと", reading: "やっと", meaning: "드디어" },
    ] },

  { level: "N4", kanji: "気持ち", reading: "きもち", korean: "키모치", meaning: "기분, 느낌",
    example: "今日はとてもいい気持ちです。", exampleReading: "きょうはとてもいいきもちです。", exampleKorean: "쿄-와 도테모 이- 키모치데스", exampleMeaning: "오늘은 아주 기분이 좋습니다.",
    breakdown: [
      { word: "いい", reading: "いい", meaning: "좋다" },
    ] },
  { level: "N4", kanji: "気分", reading: "きぶん", korean: "키분", meaning: "기분",
    example: "気分が悪いので早退します。", exampleReading: "きぶんがわるいのでそうたいします。", exampleKorean: "키분가 와루이노데 소-타이 시마스", exampleMeaning: "컨디션이 안 좋아서 조퇴하겠습니다.",
    breakdown: [
      { word: "早退します", reading: "そうたいします", meaning: "조퇴합니다" },
    ] },
  { level: "N4", kanji: "楽しい", reading: "たのしい", korean: "타노시-", meaning: "즐겁다",
    example: "旅行はとても楽しかったです。", exampleReading: "りょこうはとてもたのしかったです。", exampleKorean: "료코-와 도테모 타노시캇타데스", exampleMeaning: "여행은 아주 즐거웠습니다.",
    breakdown: [
      { word: "旅行", reading: "りょこう", meaning: "여행" },
    ] },
  { level: "N4", kanji: "悲しい", reading: "かなしい", korean: "카나시-", meaning: "슬프다",
    example: "その映画を見て悲しくなりました。", exampleReading: "そのえいがをみてかなしくなりました。", exampleKorean: "소노 에-가오 미테 카나시쿠 나리마시타", exampleMeaning: "그 영화를 보고 슬퍼졌습니다.",
    breakdown: [
      { word: "悲しくなりました", reading: "かなしくなりました", meaning: "슬퍼졌습니다 (형용사+なる)" },
    ] },
  { level: "N4", kanji: "嬉しい", reading: "うれしい", korean: "우레시-", meaning: "기쁘다",
    example: "合格の知らせを聞いて嬉しかったです。", exampleReading: "ごうかくのしらせをきいてうれしかったです。", exampleKorean: "고-카쿠노 시라세오 키이테 우레시캇타데스", exampleMeaning: "합격 소식을 듣고 기뻤습니다.",
    breakdown: [
      { word: "知らせ", reading: "しらせ", meaning: "소식" },
    ] },
  { level: "N4", kanji: "寂しい", reading: "さびしい", korean: "사비시-", meaning: "외롭다",
    example: "一人暮らしは寂しいです。", exampleReading: "ひとりぐらしはさびしいです。", exampleKorean: "히토리구라시와 사비시-데스", exampleMeaning: "혼자 사는 것은 외롭습니다.",
    breakdown: [
      { word: "一人暮らし", reading: "ひとりぐらし", meaning: "혼자 사는 것" },
    ] },
  { level: "N4", kanji: "恥ずかしい", reading: "はずかしい", korean: "하즈카시-", meaning: "부끄럽다",
    example: "人前で話すのは恥ずかしいです。", exampleReading: "ひとまえではなすのははずかしいです。", exampleKorean: "히토마에데 하나스노와 하즈카시-데스", exampleMeaning: "사람들 앞에서 말하는 것은 부끄럽습니다.",
    breakdown: [
      { word: "人前で", reading: "ひとまえで", meaning: "사람들 앞에서" },
    ] },
  { level: "N4", kanji: "驚く", reading: "おどろく", korean: "오도로쿠", meaning: "놀라다",
    example: "そのニュースにとても驚きました。", exampleReading: "そのニュースにとてもおどろきました。", exampleKorean: "소노 뉴-스니 도테모 오도로키마시타", exampleMeaning: "그 뉴스에 아주 놀랐습니다.",
    breakdown: [
      { word: "に", reading: "に", meaning: "~에 (대상 조사)" },
    ] },
  { level: "N4", kanji: "泣く", reading: "なく", korean: "나쿠", meaning: "울다",
    example: "赤ちゃんが大きな声で泣いています。", exampleReading: "あかちゃんがおおきなこえでないています。", exampleKorean: "아카짱가 오-키나 코에데 나이테이마스", exampleMeaning: "아기가 큰 소리로 울고 있습니다.",
    breakdown: [
      { word: "大きな声で", reading: "おおきなこえで", meaning: "큰 소리로" },
    ] },
  { level: "N4", kanji: "笑う", reading: "わらう", korean: "와라우", meaning: "웃다",
    example: "彼はいつも笑っています。", exampleReading: "かれはいつもわらっています。", exampleKorean: "카레와 이츠모 와랏테이마스", exampleMeaning: "그는 항상 웃고 있습니다.",
    breakdown: [
      { word: "いつも", reading: "いつも", meaning: "항상" },
    ] },
  { level: "N4", kanji: "怒る", reading: "おこる", korean: "오코루", meaning: "화내다",
    example: "父は遅刻するといつも怒ります。", exampleReading: "ちちはちこくするといつもおこります。", exampleKorean: "치치와 치코쿠스루토 이츠모 오코리마스", exampleMeaning: "아버지는 지각하면 항상 화를 냅니다.",
    breakdown: [
      { word: "遅刻すると", reading: "ちこくすると", meaning: "지각하면 (필연적 조건)" },
    ] },
  { level: "N4", kanji: "喜ぶ", reading: "よろこぶ", korean: "요로코부", meaning: "기뻐하다",
    example: "両親はプレゼントを喜んでくれました。", exampleReading: "りょうしんはプレゼントをよろこんでくれました。", exampleKorean: "료-신와 프레젠토오 요로콘데쿠레마시타", exampleMeaning: "부모님은 선물을 기뻐해 주셨습니다.",
    breakdown: [
      { word: "てくれました", reading: "てくれました", meaning: "~해 주었습니다" },
    ] },
  { level: "N4", kanji: "別れる", reading: "わかれる", korean: "와카레루", meaning: "헤어지다",
    example: "駅で友達と別れました。", exampleReading: "えきでともだちとわかれました。", exampleKorean: "에키데 도모다치토 와카레마시타", exampleMeaning: "역에서 친구와 헤어졌습니다.",
    breakdown: [
      { word: "駅で", reading: "えきで", meaning: "역에서" },
    ] },
  { level: "N4", kanji: "出会う", reading: "であう", korean: "데아우", meaning: "만나다, 조우하다",
    example: "大学で今の妻と出会いました。", exampleReading: "だいがくでいまのつまとであいました。", exampleKorean: "다이가쿠데 이마노 츠마토 데아이마시타", exampleMeaning: "대학교에서 지금의 아내를 만났습니다.",
    breakdown: [
      { word: "今の妻", reading: "いまのつま", meaning: "지금의 아내" },
    ] },
  { level: "N4", kanji: "挨拶", reading: "あいさつ", korean: "아이사츠", meaning: "인사",
    example: "隣の人に挨拶をしました。", exampleReading: "となりのひとにあいさつをしました。", exampleKorean: "토나리노 히토니 아이사츠오 시마시타", exampleMeaning: "옆 사람에게 인사를 했습니다.",
    breakdown: [
      { word: "隣の人", reading: "となりのひと", meaning: "옆 사람" },
    ] },
  { level: "N4", kanji: "礼儀", reading: "れいぎ", korean: "레-기", meaning: "예의",
    example: "礼儀正しい人だと思います。", exampleReading: "れいぎただしいひとだとおもいます。", exampleKorean: "레-기 타다시- 히토다토 오모이마스", exampleMeaning: "예의 바른 사람이라고 생각합니다.",
    breakdown: [
      { word: "正しい", reading: "ただしい", meaning: "바르다" },
    ] },
  { level: "N4", kanji: "遠慮", reading: "えんりょ", korean: "엔료", meaning: "사양, 조심",
    example: "遠慮しないで食べてください。", exampleReading: "えんりょしないでたべてください。", exampleKorean: "엔료시나이데 타베테쿠다사이", exampleMeaning: "사양하지 말고 드세요.",
    breakdown: [
      { word: "しないで", reading: "しないで", meaning: "~하지 말고" },
    ] },
  { level: "N4", kanji: "我慢", reading: "がまん", korean: "가만", meaning: "참음, 인내",
    example: "痛みを我慢しました。", exampleReading: "いたみをがまんしました。", exampleKorean: "이타미오 가만 시마시타", exampleMeaning: "통증을 참았습니다.",
    breakdown: [
      { word: "痛み", reading: "いたみ", meaning: "통증" },
    ] },
  { level: "N4", kanji: "覚える", reading: "おぼえる", korean: "오보에루", meaning: "외우다",
    example: "新しい単語を覚えます。", exampleReading: "あたらしいたんごをおぼえます。", exampleKorean: "아타라시- 탕고오 오보에마스", exampleMeaning: "새로운 단어를 외웁니다.",
    breakdown: [
      { word: "単語", reading: "たんご", meaning: "단어" },
    ] },
  { level: "N4", kanji: "教える", reading: "おしえる", korean: "오시에루", meaning: "가르치다",
    example: "弟に数学を教えました。", exampleReading: "おとうとにすうがくをおしえました。", exampleKorean: "오토-토니 스-가쿠오 오시에마시타", exampleMeaning: "남동생에게 수학을 가르쳤습니다.",
    breakdown: [
      { word: "弟に", reading: "おとうとに", meaning: "남동생에게" },
    ] },
  { level: "N4", kanji: "習う", reading: "ならう", korean: "나라우", meaning: "배우다",
    example: "子供の頃、水泳を習いました。", exampleReading: "こどものころ、すいえいをならいました。", exampleKorean: "코도모노 코로 스이에-오 나라이마시타", exampleMeaning: "어릴 때 수영을 배웠습니다.",
    breakdown: [
      { word: "子供の頃", reading: "こどものころ", meaning: "어릴 때" },
    ] },
  { level: "N4", kanji: "卒業", reading: "そつぎょう", korean: "소츠교-", meaning: "졸업",
    example: "来年、大学を卒業します。", exampleReading: "らいねん、だいがくをそつぎょうします。", exampleKorean: "라이넹 다이가쿠오 소츠교- 시마스", exampleMeaning: "내년에 대학을 졸업합니다.",
    breakdown: [
      { word: "来年", reading: "らいねん", meaning: "내년" },
    ] },
  { level: "N4", kanji: "入学", reading: "にゅうがく", korean: "뉴-가쿠", meaning: "입학",
    example: "四月に小学校へ入学します。", exampleReading: "しがつにしょうがっこうへにゅうがくします。", exampleKorean: "시가츠니 쇼-각코-에 뉴-가쿠 시마스", exampleMeaning: "4월에 초등학교에 입학합니다.",
    breakdown: [
      { word: "小学校", reading: "しょうがっこう", meaning: "초등학교" },
    ] },
  { level: "N4", kanji: "試験", reading: "しけん", korean: "시켄", meaning: "시험",
    example: "来週、日本語の試験があります。", exampleReading: "らいしゅう、にほんごのしけんがあります。", exampleKorean: "라이슈- 니홍고노 시켄가 아리마스", exampleMeaning: "다음 주 일본어 시험이 있습니다.",
    breakdown: [
      { word: "来週", reading: "らいしゅう", meaning: "다음 주" },
    ] },
  { level: "N4", kanji: "合格", reading: "ごうかく", korean: "고-카쿠", meaning: "합격",
    example: "試験に合格しました。", exampleReading: "しけんにごうかくしました。", exampleKorean: "시켄니 고-카쿠 시마시타", exampleMeaning: "시험에 합격했습니다.",
    breakdown: [
      { word: "試験に", reading: "しけんに", meaning: "시험에" },
    ] },
  { level: "N4", kanji: "点数", reading: "てんすう", korean: "텐스-", meaning: "점수",
    example: "テストの点数がよかったです。", exampleReading: "テストのてんすうがよかったです。", exampleKorean: "테스토노 텐스-가 요캇타데스", exampleMeaning: "시험 점수가 좋았습니다.",
    breakdown: [
      { word: "よかったです", reading: "よかったです", meaning: "좋았습니다" },
    ] },
  { level: "N4", kanji: "宿題", reading: "しゅくだい", korean: "슈쿠다이", meaning: "숙제",
    example: "今日は宿題がたくさんあります。", exampleReading: "きょうはしゅくだいがたくさんあります。", exampleKorean: "쿄-와 슈쿠다이가 타쿠상 아리마스", exampleMeaning: "오늘은 숙제가 많이 있습니다.",
    breakdown: [
      { word: "たくさん", reading: "たくさん", meaning: "많이" },
    ] },
  { level: "N4", kanji: "掃除", reading: "そうじ", korean: "소-지", meaning: "청소",
    example: "週末に部屋の掃除をします。", exampleReading: "しゅうまつにへやのそうじをします。", exampleKorean: "슈-마츠니 헤야노 소-지오 시마스", exampleMeaning: "주말에 방 청소를 합니다.",
    breakdown: [
      { word: "部屋の", reading: "へやの", meaning: "방의" },
    ] },
  { level: "N4", kanji: "洗濯", reading: "せんたく", korean: "센타쿠", meaning: "세탁",
    example: "毎日、洗濯をします。", exampleReading: "まいにち、せんたくをします。", exampleKorean: "마이니치 센타쿠오 시마스", exampleMeaning: "매일 빨래를 합니다.",
    breakdown: [
      { word: "毎日", reading: "まいにち", meaning: "매일" },
    ] },
  { level: "N4", kanji: "引っ越す", reading: "ひっこす", korean: "힉코스", meaning: "이사하다",
    example: "来月、新しい家に引っ越します。", exampleReading: "らいげつ、あたらしいいえにひっこします。", exampleKorean: "라이게츠 아타라시- 이에니 힉코시마스", exampleMeaning: "다음 달에 새 집으로 이사합니다.",
    breakdown: [
      { word: "新しい家", reading: "あたらしいいえ", meaning: "새 집" },
    ] },
  { level: "N4", kanji: "建てる", reading: "たてる", korean: "타테루", meaning: "짓다, 세우다",
    example: "祖父が家を建てました。", exampleReading: "そふがいえをたてました。", exampleKorean: "소후가 이에오 타테마시타", exampleMeaning: "할아버지가 집을 지었습니다.",
    breakdown: [
      { word: "祖父", reading: "そふ", meaning: "할아버지" },
    ] },
  { level: "N4", kanji: "壊れる", reading: "こわれる", korean: "코와레루", meaning: "부서지다, 고장나다",
    example: "テレビが壊れてしまいました。", exampleReading: "テレビがこわれてしまいました。", exampleKorean: "테레비가 코와레테시마이마시타", exampleMeaning: "텔레비전이 고장나 버렸습니다.",
    breakdown: [
      { word: "てしまいました", reading: "てしまいました", meaning: "~해버렸습니다" },
    ] },
  { level: "N4", kanji: "直す", reading: "なおす", korean: "나오스", meaning: "고치다",
    example: "自転車を直してもらいました。", exampleReading: "じてんしゃをなおしてもらいました。", exampleKorean: "지텐샤오 나오시테모라이마시타", exampleMeaning: "자전거를 고쳐 받았습니다.",
    breakdown: [
      { word: "てもらいました", reading: "てもらいました", meaning: "~해 받았습니다" },
    ] },
  { level: "N4", kanji: "落とす", reading: "おとす", korean: "오토스", meaning: "떨어뜨리다",
    example: "財布を落としてしまいました。", exampleReading: "さいふをおとしてしまいました。", exampleKorean: "사이후오 오토시테시마이마시타", exampleMeaning: "지갑을 떨어뜨리고 말았습니다.",
    breakdown: [
      { word: "財布", reading: "さいふ", meaning: "지갑" },
    ] },
  { level: "N4", kanji: "拾う", reading: "ひろう", korean: "히로우", meaning: "줍다",
    example: "道でお金を拾いました。", exampleReading: "みちでおかねをひろいました。", exampleKorean: "미치데 오카네오 히로이마시타", exampleMeaning: "길에서 돈을 주웠습니다.",
    breakdown: [
      { word: "道で", reading: "みちで", meaning: "길에서" },
    ] },
  { level: "N4", kanji: "探す", reading: "さがす", korean: "사가스", meaning: "찾다",
    example: "なくした鍵を探しています。", exampleReading: "なくしたかぎをさがしています。", exampleKorean: "나쿠시타 카기오 사가시테이마스", exampleMeaning: "잃어버린 열쇠를 찾고 있습니다.",
    breakdown: [
      { word: "なくした", reading: "なくした", meaning: "잃어버린" },
    ] },
  { level: "N4", kanji: "見つける", reading: "みつける", korean: "미츠케루", meaning: "발견하다",
    example: "やっと答えを見つけました。", exampleReading: "やっとこたえをみつけました。", exampleKorean: "얏토 코타에오 미츠케마시타", exampleMeaning: "드디어 답을 발견했습니다.",
    breakdown: [
      { word: "やっと", reading: "やっと", meaning: "드디어" },
    ] },
  { level: "N4", kanji: "選ぶ", reading: "えらぶ", korean: "에라부", meaning: "고르다",
    example: "好きな色を選んでください。", exampleReading: "すきないろをえらんでください。", exampleKorean: "스키나 이로오 에란데쿠다사이", exampleMeaning: "좋아하는 색을 골라 주세요.",
    breakdown: [
      { word: "好きな色", reading: "すきないろ", meaning: "좋아하는 색" },
    ] },
  { level: "N4", kanji: "比べる", reading: "くらべる", korean: "쿠라베루", meaning: "비교하다",
    example: "二つの店の値段を比べました。", exampleReading: "ふたつのみせのねだんをくらべました。", exampleKorean: "후타츠노 미세노 네단오 쿠라베마시타", exampleMeaning: "두 가게의 가격을 비교했습니다.",
    breakdown: [
      { word: "二つの店", reading: "ふたつのみせ", meaning: "두 가게" },
    ] },
  { level: "N4", kanji: "混む", reading: "こむ", korean: "코무", meaning: "붐비다",
    example: "週末はいつも道が混みます。", exampleReading: "しゅうまつはいつもみちがこみます。", exampleKorean: "슈-마츠와 이츠모 미치가 코미마스", exampleMeaning: "주말은 항상 길이 붐빕니다.",
    breakdown: [
      { word: "週末は", reading: "しゅうまつは", meaning: "주말은" },
    ] },
  { level: "N4", kanji: "空く", reading: "すく", korean: "스쿠", meaning: "비다, 붐비지 않다",
    example: "このバスは空いています。", exampleReading: "このバスはすいています。", exampleKorean: "코노 바스와 스이테이마스", exampleMeaning: "이 버스는 비어 있습니다.",
    breakdown: [
      { word: "バス", reading: "バス", meaning: "버스" },
    ] },
  { level: "N4", kanji: "満員", reading: "まんいん", korean: "망잉", meaning: "만원",
    example: "電車が満員でした。", exampleReading: "でんしゃがまんいんでした。", exampleKorean: "덴샤가 망인데시타", exampleMeaning: "전철이 만원이었습니다.",
    breakdown: [
      { word: "電車が", reading: "でんしゃが", meaning: "전철이" },
    ] },
  { level: "N4", kanji: "値段", reading: "ねだん", korean: "네단", meaning: "가격",
    example: "この靴の値段はいくらですか。", exampleReading: "このくつのねだんはいくらですか。", exampleKorean: "코노 쿠츠노 네단와 이쿠라데스카", exampleMeaning: "이 신발의 가격은 얼마입니까?",
    breakdown: [
      { word: "いくらですか", reading: "いくらですか", meaning: "얼마입니까?" },
    ] },
  { level: "N4", kanji: "給料", reading: "きゅうりょう", korean: "큐-료-", meaning: "급여",
    example: "来月から給料が上がります。", exampleReading: "らいげつからきゅうりょうがあがります。", exampleKorean: "라이게츠카라 큐-료-가 아가리마스", exampleMeaning: "다음 달부터 급여가 오릅니다.",
    breakdown: [
      { word: "上がります", reading: "あがります", meaning: "오릅니다" },
    ] },
  { level: "N4", kanji: "貯金", reading: "ちょきん", korean: "쵸킨", meaning: "저금",
    example: "毎月、少しずつ貯金しています。", exampleReading: "まいつき、すこしずつちょきんしています。", exampleKorean: "마이츠키 스코시즈츠 쵸킨 시테이마스", exampleMeaning: "매달 조금씩 저금하고 있습니다.",
    breakdown: [
      { word: "少しずつ", reading: "すこしずつ", meaning: "조금씩" },
    ] },
  { level: "N4", kanji: "財布", reading: "さいふ", korean: "사이후", meaning: "지갑",
    example: "新しい財布を買いました。", exampleReading: "あたらしいさいふをかいました。", exampleKorean: "아타라시- 사이후오 카이마시타", exampleMeaning: "새 지갑을 샀습니다.",
    breakdown: [
      { word: "新しい", reading: "あたらしい", meaning: "새롭다" },
    ] },
  { level: "N4", kanji: "現金", reading: "げんきん", korean: "겐킨", meaning: "현금",
    example: "現金で支払いました。", exampleReading: "げんきんでしはらいました。", exampleKorean: "겐킨데 시하라이마시타", exampleMeaning: "현금으로 지불했습니다.",
    breakdown: [
      { word: "支払いました", reading: "しはらいました", meaning: "지불했습니다" },
    ] },
  { level: "N4", kanji: "両替", reading: "りょうがえ", korean: "료-가에", meaning: "환전",
    example: "銀行でお金を両替しました。", exampleReading: "ぎんこうでおかねをりょうがえしました。", exampleKorean: "깅코-데 오카네오 료-가에 시마시타", exampleMeaning: "은행에서 돈을 환전했습니다.",
    breakdown: [
      { word: "銀行で", reading: "ぎんこうで", meaning: "은행에서" },
    ] },
  { level: "N4", kanji: "診察", reading: "しんさつ", korean: "신사츠", meaning: "진찰",
    example: "病院で診察を受けました。", exampleReading: "びょういんでしんさつをうけました。", exampleKorean: "뵤-잉데 신사츠오 우케마시타", exampleMeaning: "병원에서 진찰을 받았습니다.",
    breakdown: [
      { word: "受けました", reading: "うけました", meaning: "받았습니다" },
    ] },
  { level: "N4", kanji: "薬局", reading: "やっきょく", korean: "약쿄쿠", meaning: "약국",
    example: "薬局で薬をもらいました。", exampleReading: "やっきょくでくすりをもらいました。", exampleKorean: "약쿄쿠데 쿠스리오 모라이마시타", exampleMeaning: "약국에서 약을 받았습니다.",
    breakdown: [
      { word: "薬", reading: "くすり", meaning: "약" },
    ] },

  { level: "N4", kanji: "用事", reading: "ようじ", korean: "요-지", meaning: "볼일",
    example: "今日は用事があって行けません。", exampleReading: "きょうはようじがあっていけません。", exampleKorean: "쿄-와 요-지가 앗테 이케마셍", exampleMeaning: "오늘은 볼일이 있어서 못 갑니다.",
    breakdown: [
      { word: "行けません", reading: "いけません", meaning: "갈 수 없습니다" },
    ] },
  { level: "N4", kanji: "都会", reading: "とかい", korean: "토카이", meaning: "도시",
    example: "都会の生活は便利です。", exampleReading: "とかいのせいかつはべんりです。", exampleKorean: "토카이노 세-카츠와 벤리데스", exampleMeaning: "도시 생활은 편리합니다.",
    breakdown: [
      { word: "生活", reading: "せいかつ", meaning: "생활" },
    ] },
  { level: "N4", kanji: "田舎", reading: "いなか", korean: "이나카", meaning: "시골",
    example: "田舎でのんびり暮らしたいです。", exampleReading: "いなかでのんびりくらしたいです。", exampleKorean: "이나카데 논비리 쿠라시타이데스", exampleMeaning: "시골에서 여유롭게 살고 싶습니다.",
    breakdown: [
      { word: "のんびり", reading: "のんびり", meaning: "느긋하게" },
    ] },
  { level: "N4", kanji: "景色", reading: "けしき", korean: "케시키", meaning: "경치",
    example: "山の上からの景色は最高でした。", exampleReading: "やまのうえからのけしきはさいこうでした。", exampleKorean: "야마노 우에카라노 케시키와 사이코-데시타", exampleMeaning: "산 위에서 본 경치는 최고였습니다.",
    breakdown: [
      { word: "最高でした", reading: "さいこうでした", meaning: "최고였습니다" },
    ] },
  { level: "N4", kanji: "印刷", reading: "いんさつ", korean: "인사츠", meaning: "인쇄",
    example: "資料を十部印刷しました。", exampleReading: "しりょうをじゅうぶいんさつしました。", exampleKorean: "시료-오 쥬-부 인사츠 시마시타", exampleMeaning: "자료를 열 부 인쇄했습니다.",
    breakdown: [
      { word: "十部", reading: "じゅうぶ", meaning: "열 부" },
    ] },
  { level: "N4", kanji: "会議", reading: "かいぎ", korean: "카이기", meaning: "회의",
    example: "十時から会議があります。", exampleReading: "じゅうじからかいぎがあります。", exampleKorean: "쥬-지카라 카이기가 아리마스", exampleMeaning: "10시부터 회의가 있습니다.",
    breakdown: [
      { word: "十時から", reading: "じゅうじから", meaning: "10시부터" },
    ] },
  { level: "N4", kanji: "出張", reading: "しゅっちょう", korean: "슛쵸-", meaning: "출장",
    example: "来週、大阪へ出張します。", exampleReading: "らいしゅう、おおさかへしゅっちょうします。", exampleKorean: "라이슈- 오-사카에 슛쵸- 시마스", exampleMeaning: "다음 주 오사카로 출장 갑니다.",
    breakdown: [
      { word: "大阪へ", reading: "おおさかへ", meaning: "오사카로" },
    ] },
  { level: "N4", kanji: "残業", reading: "ざんぎょう", korean: "장교-", meaning: "야근",
    example: "昨日は遅くまで残業しました。", exampleReading: "きのうはおそくまでざんぎょうしました。", exampleKorean: "키노-와 오소쿠마데 장교- 시마시타", exampleMeaning: "어제는 늦게까지 야근했습니다.",
    breakdown: [
      { word: "遅くまで", reading: "おそくまで", meaning: "늦게까지" },
    ] },
  { level: "N4", kanji: "休憩", reading: "きゅうけい", korean: "큐-케-", meaning: "휴식",
    example: "少し休憩しましょう。", exampleReading: "すこしきゅうけいしましょう。", exampleKorean: "스코시 큐-케- 시마쇼-", exampleMeaning: "잠깐 쉽시다.",
    breakdown: [
      { word: "ましょう", reading: "ましょう", meaning: "~합시다" },
    ] },
  { level: "N4", kanji: "昼休み", reading: "ひるやすみ", korean: "히루야스미", meaning: "점심시간",
    example: "昼休みに散歩します。", exampleReading: "ひるやすみにさんぽします。", exampleKorean: "히루야스미니 삼포 시마스", exampleMeaning: "점심시간에 산책합니다.",
    breakdown: [
      { word: "散歩します", reading: "さんぽします", meaning: "산책합니다" },
    ] },
  { level: "N4", kanji: "部長", reading: "ぶちょう", korean: "부쵸-", meaning: "부장",
    example: "部長に報告しました。", exampleReading: "ぶちょうにほうこくしました。", exampleKorean: "부쵸-니 호-코쿠 시마시타", exampleMeaning: "부장님께 보고했습니다.",
    breakdown: [
      { word: "報告しました", reading: "ほうこくしました", meaning: "보고했습니다" },
    ] },
  { level: "N4", kanji: "課長", reading: "かちょう", korean: "카쵸-", meaning: "과장",
    example: "課長は今、会議中です。", exampleReading: "かちょうはいま、かいぎちゅうです。", exampleKorean: "카쵸-와 이마 카이기츄-데스", exampleMeaning: "과장님은 지금 회의 중입니다.",
    breakdown: [
      { word: "会議中", reading: "かいぎちゅう", meaning: "회의 중" },
    ] },
  { level: "N4", kanji: "社長", reading: "しゃちょう", korean: "샤쵸-", meaning: "사장",
    example: "社長のスピーチを聞きました。", exampleReading: "しゃちょうのスピーチをききました。", exampleKorean: "샤쵸-노 스피-치오 키키마시타", exampleMeaning: "사장님의 연설을 들었습니다.",
    breakdown: [
      { word: "スピーチ", reading: "スピーチ", meaning: "연설" },
    ] },
  { level: "N4", kanji: "同僚", reading: "どうりょう", korean: "도-료-", meaning: "동료",
    example: "同僚とランチに行きました。", exampleReading: "どうりょうとランチにいきました。", exampleKorean: "도-료-토 란치니 이키마시타", exampleMeaning: "동료와 점심을 먹으러 갔습니다.",
    breakdown: [
      { word: "ランチ", reading: "ランチ", meaning: "점심(런치)" },
    ] },
  { level: "N4", kanji: "上司", reading: "じょうし", korean: "죠-시", meaning: "상사",
    example: "上司に相談しました。", exampleReading: "じょうしにそうだんしました。", exampleKorean: "죠-시니 소-단 시마시타", exampleMeaning: "상사와 상담했습니다.",
    breakdown: [
      { word: "相談しました", reading: "そうだんしました", meaning: "상담했습니다" },
    ] },
  { level: "N4", kanji: "部下", reading: "ぶか", korean: "부카", meaning: "부하",
    example: "部下に仕事を任せました。", exampleReading: "ぶかにしごとをまかせました。", exampleKorean: "부카니 시고토오 마카세마시타", exampleMeaning: "부하에게 일을 맡겼습니다.",
    breakdown: [
      { word: "任せました", reading: "まかせました", meaning: "맡겼습니다" },
    ] },
  { level: "N4", kanji: "会員", reading: "かいいん", korean: "카이잉", meaning: "회원",
    example: "このジムの会員になりました。", exampleReading: "このジムのかいいんになりました。", exampleKorean: "코노 지무노 카이인니 나리마시타", exampleMeaning: "이 헬스장 회원이 되었습니다.",
    breakdown: [
      { word: "ジム", reading: "ジム", meaning: "헬스장" },
    ] },
  { level: "N4", kanji: "契約", reading: "けいやく", korean: "케-야쿠", meaning: "계약",
    example: "新しい契約を結びました。", exampleReading: "あたらしいけいやくをむすびました。", exampleKorean: "아타라시- 케-야쿠오 무스비마시타", exampleMeaning: "새로운 계약을 맺었습니다.",
    breakdown: [
      { word: "結びました", reading: "むすびました", meaning: "맺었습니다" },
    ] },
  { level: "N4", kanji: "書類", reading: "しょるい", korean: "쇼루이", meaning: "서류",
    example: "書類を確認してください。", exampleReading: "しょるいをかくにんしてください。", exampleKorean: "쇼루이오 카쿠닌 시테쿠다사이", exampleMeaning: "서류를 확인해 주세요.",
    breakdown: [
      { word: "確認してください", reading: "かくにんしてください", meaning: "확인해 주세요" },
    ] },
  { level: "N4", kanji: "印鑑", reading: "いんかん", korean: "잉칸", meaning: "도장",
    example: "ここに印鑑を押してください。", exampleReading: "ここにいんかんをおしてください。", exampleKorean: "코코니 잉칸오 오시테쿠다사이", exampleMeaning: "여기에 도장을 찍어 주세요.",
    breakdown: [
      { word: "押してください", reading: "おしてください", meaning: "찍어 주세요" },
    ] },
  { level: "N4", kanji: "サイン", reading: "サイン", korean: "사인", meaning: "서명",
    example: "契約書にサインしました。", exampleReading: "けいやくしょにサインしました。", exampleKorean: "케-야쿠쇼니 사인 시마시타", exampleMeaning: "계약서에 서명했습니다.",
    breakdown: [
      { word: "契約書", reading: "けいやくしょ", meaning: "계약서" },
    ] },
  { level: "N4", kanji: "会話", reading: "かいわ", korean: "카이와", meaning: "회화",
    example: "日本語の会話を練習します。", exampleReading: "にほんごのかいわをれんしゅうします。", exampleKorean: "니홍고노 카이와오 렌슈- 시마스", exampleMeaning: "일본어 회화를 연습합니다.",
    breakdown: [
      { word: "練習します", reading: "れんしゅうします", meaning: "연습합니다" },
    ] },
  { level: "N4", kanji: "発音", reading: "はつおん", korean: "하츠온", meaning: "발음",
    example: "発音がまだ下手です。", exampleReading: "はつおんがまだへたです。", exampleKorean: "하츠옹가 마다 헤타데스", exampleMeaning: "발음이 아직 서툽니다.",
    breakdown: [
      { word: "下手です", reading: "へたです", meaning: "서투릅니다" },
    ] },
  { level: "N4", kanji: "意味", reading: "いみ", korean: "이미", meaning: "의미",
    example: "この言葉の意味が分かりません。", exampleReading: "このことばのいみがわかりません。", exampleKorean: "코노 코토바노 이미가 와카리마셍", exampleMeaning: "이 단어의 의미를 모르겠습니다.",
    breakdown: [
      { word: "言葉", reading: "ことば", meaning: "단어, 말" },
    ] },
  { level: "N4", kanji: "文法", reading: "ぶんぽう", korean: "붐포-", meaning: "문법",
    example: "日本語の文法は難しいです。", exampleReading: "にほんごのぶんぽうはむずかしいです。", exampleKorean: "니홍고노 붐포-와 무즈카시-데스", exampleMeaning: "일본어 문법은 어렵습니다.",
    breakdown: [
      { word: "難しいです", reading: "むずかしいです", meaning: "어렵습니다" },
    ] },
  { level: "N4", kanji: "単語", reading: "たんご", korean: "탕고", meaning: "단어",
    example: "毎日新しい単語を覚えます。", exampleReading: "まいにちあたらしいたんごをおぼえます。", exampleKorean: "마이니치 아타라시- 탕고오 오보에마스", exampleMeaning: "매일 새로운 단어를 외웁니다.",
    breakdown: [
      { word: "新しい", reading: "あたらしい", meaning: "새롭다" },
    ] },
  { level: "N4", kanji: "辞書", reading: "じしょ", korean: "지쇼", meaning: "사전",
    example: "辞書で言葉を調べます。", exampleReading: "じしょでことばをしらべます。", exampleKorean: "지쇼데 코토바오 시라베마스", exampleMeaning: "사전에서 단어를 찾습니다.",
    breakdown: [
      { word: "調べます", reading: "しらべます", meaning: "찾습니다, 조사합니다" },
    ] },
  { level: "N4", kanji: "漢字", reading: "かんじ", korean: "칸지", meaning: "한자",
    example: "漢字を書くのが苦手です。", exampleReading: "かんじをかくのがにがてです。", exampleKorean: "칸지오 카쿠노가 니가테데스", exampleMeaning: "한자를 쓰는 것이 서툽니다.",
    breakdown: [
      { word: "書くのが", reading: "かくのが", meaning: "쓰는 것이" },
    ] },
  { level: "N4", kanji: "外国", reading: "がいこく", korean: "가이코쿠", meaning: "외국",
    example: "外国で働いてみたいです。", exampleReading: "がいこくではたらいてみたいです。", exampleKorean: "가이코쿠데 하타라이테미타이데스", exampleMeaning: "외국에서 일해보고 싶습니다.",
    breakdown: [
      { word: "てみたいです", reading: "てみたいです", meaning: "~해보고 싶습니다" },
    ] },
  { level: "N4", kanji: "外国人", reading: "がいこくじん", korean: "가이코쿠징", meaning: "외국인",
    example: "この町には外国人が多いです。", exampleReading: "このまちにはがいこくじんがおおいです。", exampleKorean: "코노 마치니와 가이코쿠징가 오오이데스", exampleMeaning: "이 마을에는 외국인이 많습니다.",
    breakdown: [
      { word: "多いです", reading: "おおいです", meaning: "많습니다" },
    ] },
  { level: "N4", kanji: "大使館", reading: "たいしかん", korean: "타이시칸", meaning: "대사관",
    example: "大使館でビザを申請しました。", exampleReading: "たいしかんでビザをしんせいしました。", exampleKorean: "타이시칸데 비자오 신세- 시마시타", exampleMeaning: "대사관에서 비자를 신청했습니다.",
    breakdown: [
      { word: "申請しました", reading: "しんせいしました", meaning: "신청했습니다" },
    ] },
  { level: "N4", kanji: "観光", reading: "かんこう", korean: "캉코-", meaning: "관광",
    example: "京都を観光しました。", exampleReading: "きょうとをかんこうしました。", exampleKorean: "쿄-토오 캉코- 시마시타", exampleMeaning: "교토를 관광했습니다.",
    breakdown: [
      { word: "京都", reading: "きょうと", meaning: "교토" },
    ] },
  { level: "N4", kanji: "お土産", reading: "おみやげ", korean: "오미야게", meaning: "기념품, 선물",
    example: "家族にお土産を買いました。", exampleReading: "かぞくにおみやげをかいました。", exampleKorean: "카조쿠니 오미야게오 카이마시타", exampleMeaning: "가족에게 기념품을 샀습니다.",
    breakdown: [
      { word: "家族に", reading: "かぞくに", meaning: "가족에게" },
    ] },
  { level: "N4", kanji: "荷物", reading: "にもつ", korean: "니모츠", meaning: "짐",
    example: "荷物が重くて大変です。", exampleReading: "にもつがおもくてたいへんです。", exampleKorean: "니모츠가 오모쿠테 타이헨데스", exampleMeaning: "짐이 무거워서 힘듭니다.",
    breakdown: [
      { word: "大変です", reading: "たいへんです", meaning: "힘듭니다" },
    ] },
  { level: "N4", kanji: "パスポート", reading: "パスポート", korean: "파스포-토", meaning: "여권",
    example: "パスポートを忘れないでください。", exampleReading: "パスポートをわすれないでください。", exampleKorean: "파스포-토오 와스레나이데쿠다사이", exampleMeaning: "여권을 잊지 마세요.",
    breakdown: [
      { word: "忘れないでください", reading: "わすれないでください", meaning: "잊지 마세요" },
    ] },
  { level: "N4", kanji: "ビザ", reading: "ビザ", korean: "비자", meaning: "비자",
    example: "留学のためにビザを取りました。", exampleReading: "りゅうがくのためにビザをとりました。", exampleKorean: "류-가쿠노 타메니 비자오 토리마시타", exampleMeaning: "유학을 위해 비자를 받았습니다.",
    breakdown: [
      { word: "留学のために", reading: "りゅうがくのために", meaning: "유학을 위해" },
    ] },
  { level: "N4", kanji: "両親", reading: "りょうしん", korean: "료-신", meaning: "부모님",
    example: "両親は田舎に住んでいます。", exampleReading: "りょうしんはいなかにすんでいます。", exampleKorean: "료-신와 이나카니 슨데이마스", exampleMeaning: "부모님은 시골에 살고 계십니다.",
    breakdown: [
      { word: "住んでいます", reading: "すんでいます", meaning: "살고 있습니다" },
    ] },
  { level: "N4", kanji: "夫婦", reading: "ふうふ", korean: "후-후", meaning: "부부",
    example: "あの夫婦は仲がいいです。", exampleReading: "あのふうふはなかがいいです。", exampleKorean: "아노 후-후와 나카가 이-데스", exampleMeaning: "저 부부는 사이가 좋습니다.",
    breakdown: [
      { word: "仲がいいです", reading: "なかがいいです", meaning: "사이가 좋습니다" },
    ] },
  { level: "N4", kanji: "恋人", reading: "こいびと", korean: "코이비토", meaning: "애인",
    example: "彼女に恋人ができました。", exampleReading: "かのじょにこいびとができました。", exampleKorean: "카노죠니 코이비토가 데키마시타", exampleMeaning: "그녀에게 애인이 생겼습니다.",
    breakdown: [
      { word: "できました", reading: "できました", meaning: "생겼습니다" },
    ] },
  { level: "N4", kanji: "結婚", reading: "けっこん", korean: "켁콘", meaning: "결혼",
    example: "来年、結婚する予定です。", exampleReading: "らいねん、けっこんするよていです。", exampleKorean: "라이넹 켁콘스루 요테-데스", exampleMeaning: "내년에 결혼할 예정입니다.",
    breakdown: [
      { word: "予定です", reading: "よていです", meaning: "예정입니다" },
    ] },
  { level: "N4", kanji: "離婚", reading: "りこん", korean: "리콘", meaning: "이혼",
    example: "友人が離婚しました。", exampleReading: "ゆうじんがりこんしました。", exampleKorean: "유-징가 리콘 시마시타", exampleMeaning: "친구가 이혼했습니다.",
    breakdown: [
      { word: "友人", reading: "ゆうじん", meaning: "친구" },
    ] },
  { level: "N4", kanji: "出産", reading: "しゅっさん", korean: "슛산", meaning: "출산",
    example: "姉が来月、出産します。", exampleReading: "あねがらいげつ、しゅっさんします。", exampleKorean: "아네가 라이게츠 슛산 시마스", exampleMeaning: "누나가 다음 달에 출산합니다.",
    breakdown: [
      { word: "姉", reading: "あね", meaning: "누나, 언니" },
    ] },
  { level: "N4", kanji: "育児", reading: "いくじ", korean: "이쿠지", meaning: "육아",
    example: "育児はとても大変です。", exampleReading: "いくじはとてもたいへんです。", exampleKorean: "이쿠지와 도테모 타이헨데스", exampleMeaning: "육아는 아주 힘듭니다.",
    breakdown: [
      { word: "大変です", reading: "たいへんです", meaning: "힘듭니다" },
    ] },
  { level: "N4", kanji: "病気", reading: "びょうき", korean: "뵤-키", meaning: "병",
    example: "祖母が病気になりました。", exampleReading: "そぼがびょうきになりました。", exampleKorean: "소보가 뵤-키니 나리마시타", exampleMeaning: "할머니가 병에 걸렸습니다.",
    breakdown: [
      { word: "祖母", reading: "そぼ", meaning: "할머니" },
    ] },
  { level: "N4", kanji: "風邪", reading: "かぜ", korean: "카제", meaning: "감기",
    example: "風邪をひいてしまいました。", exampleReading: "かぜをひいてしまいました。", exampleKorean: "카제오 히이테시마이마시타", exampleMeaning: "감기에 걸리고 말았습니다.",
    breakdown: [
      { word: "ひいて", reading: "ひいて", meaning: "(감기에) 걸려서" },
    ] },
  { level: "N4", kanji: "熱", reading: "ねつ", korean: "네츠", meaning: "열",
    example: "熱が三十八度あります。", exampleReading: "ねつがさんじゅうはちどあります。", exampleKorean: "네츠가 산쥬-하치도 아리마스", exampleMeaning: "열이 38도 있습니다.",
    breakdown: [
      { word: "三十八度", reading: "さんじゅうはちど", meaning: "38도" },
    ] },
  { level: "N4", kanji: "怪我", reading: "けが", korean: "케가", meaning: "부상",
    example: "サッカーで怪我をしました。", exampleReading: "サッカーでけがをしました。", exampleKorean: "삭카-데 케가오 시마시타", exampleMeaning: "축구를 하다가 다쳤습니다.",
    breakdown: [
      { word: "サッカーで", reading: "サッカーで", meaning: "축구를 하다가" },
    ] },
  { level: "N4", kanji: "事故", reading: "じこ", korean: "지코", meaning: "사고",
    example: "交通事故に気をつけてください。", exampleReading: "こうつうじこにきをつけてください。", exampleKorean: "코-츠- 지코니 키오 츠케테쿠다사이", exampleMeaning: "교통사고를 조심하세요.",
    breakdown: [
      { word: "気をつけてください", reading: "きをつけてください", meaning: "조심하세요" },
    ] },
  { level: "N4", kanji: "火事", reading: "かじ", korean: "카지", meaning: "화재",
    example: "近くのビルで火事がありました。", exampleReading: "ちかくのビルでかじがありました。", exampleKorean: "치카쿠노 비루데 카지가 아리마시타", exampleMeaning: "근처 빌딩에서 화재가 있었습니다.",
    breakdown: [
      { word: "近くのビル", reading: "ちかくのビル", meaning: "근처 빌딩" },
    ] },
  { level: "N4", kanji: "台風", reading: "たいふう", korean: "타이후-", meaning: "태풍",
    example: "台風が近づいています。", exampleReading: "たいふうがちかづいています。", exampleKorean: "타이후-가 치카즈이테이마스", exampleMeaning: "태풍이 다가오고 있습니다.",
    breakdown: [
      { word: "近づいています", reading: "ちかづいています", meaning: "다가오고 있습니다" },
    ] },
  { level: "N4", kanji: "地震", reading: "じしん", korean: "지신", meaning: "지진",
    example: "昨夜、大きな地震がありました。", exampleReading: "さくや、おおきなじしんがありました。", exampleKorean: "사쿠야 오-키나 지신가 아리마시타", exampleMeaning: "어젯밤 큰 지진이 있었습니다.",
    breakdown: [
      { word: "昨夜", reading: "さくや", meaning: "어젯밤" },
    ] },
  { level: "N4", kanji: "停電", reading: "ていでん", korean: "테-덴", meaning: "정전",
    example: "台風で停電しました。", exampleReading: "たいふうでていでんしました。", exampleKorean: "타이후-데 테-덴 시마시타", exampleMeaning: "태풍으로 정전되었습니다.",
    breakdown: [
      { word: "台風で", reading: "たいふうで", meaning: "태풍으로" },
    ] },
  { level: "N4", kanji: "携帯電話", reading: "けいたいでんわ", korean: "케-타이 뎅와", meaning: "휴대전화",
    example: "携帯電話をなくしてしまいました。", exampleReading: "けいたいでんわをなくしてしまいました。", exampleKorean: "케-타이 뎅와오 나쿠시테시마이마시타", exampleMeaning: "휴대전화를 잃어버리고 말았습니다.",
    breakdown: [
      { word: "なくして", reading: "なくして", meaning: "잃어버려서" },
    ] },
  { level: "N4", kanji: "パソコン", reading: "パソコン", korean: "파소콘", meaning: "컴퓨터",
    example: "新しいパソコンを買いました。", exampleReading: "あたらしいパソコンをかいました。", exampleKorean: "아타라시- 파소콘오 카이마시타", exampleMeaning: "새 컴퓨터를 샀습니다.",
    breakdown: [
      { word: "新しい", reading: "あたらしい", meaning: "새롭다" },
    ] },
  { level: "N4", kanji: "インターネット", reading: "インターネット", korean: "인타-넷토", meaning: "인터넷",
    example: "インターネットで調べます。", exampleReading: "インターネットでしらべます。", exampleKorean: "인타-넷토데 시라베마스", exampleMeaning: "인터넷으로 찾아봅니다.",
    breakdown: [
      { word: "調べます", reading: "しらべます", meaning: "찾아봅니다" },
    ] },
  { level: "N4", kanji: "画面", reading: "がめん", korean: "가멘", meaning: "화면",
    example: "スマホの画面が割れました。", exampleReading: "スマホのがめんがわれました。", exampleKorean: "스마호노 가멘가 와레마시타", exampleMeaning: "스마트폰 화면이 깨졌습니다.",
    breakdown: [
      { word: "割れました", reading: "われました", meaning: "깨졌습니다" },
    ] },
  { level: "N4", kanji: "充電", reading: "じゅうでん", korean: "쥬-덴", meaning: "충전",
    example: "スマホを充電しています。", exampleReading: "スマホをじゅうでんしています。", exampleKorean: "스마호오 쥬-덴 시테이마스", exampleMeaning: "스마트폰을 충전하고 있습니다.",
    breakdown: [
      { word: "スマホ", reading: "スマホ", meaning: "스마트폰" },
    ] },
  { level: "N4", kanji: "故障", reading: "こしょう", korean: "코쇼-", meaning: "고장",
    example: "エアコンが故障しました。", exampleReading: "エアコンがこしょうしました。", exampleKorean: "에아콘가 코쇼- 시마시타", exampleMeaning: "에어컨이 고장났습니다.",
    breakdown: [
      { word: "エアコン", reading: "エアコン", meaning: "에어컨" },
    ] },
  { level: "N4", kanji: "修理", reading: "しゅうり", korean: "슈-리", meaning: "수리",
    example: "車を修理に出しました。", exampleReading: "くるまをしゅうりにだしました。", exampleKorean: "쿠루마오 슈-리니 다시마시타", exampleMeaning: "차를 수리 맡겼습니다.",
    breakdown: [
      { word: "出しました", reading: "だしました", meaning: "맡겼습니다" },
    ] },
  { level: "N4", kanji: "運転", reading: "うんてん", korean: "운텐", meaning: "운전",
    example: "父が車を運転します。", exampleReading: "ちちがくるまをうんてんします。", exampleKorean: "치치가 쿠루마오 운텐 시마스", exampleMeaning: "아버지가 차를 운전합니다.",
    breakdown: [
      { word: "父が", reading: "ちちが", meaning: "아버지가" },
    ] },
  { level: "N4", kanji: "運転手", reading: "うんてんしゅ", korean: "운텐슈", meaning: "운전기사",
    example: "タクシーの運転手に道を聞きました。", exampleReading: "タクシーのうんてんしゅにみちをききました。", exampleKorean: "타쿠시-노 운텐슈니 미치오 키키마시타", exampleMeaning: "택시 운전기사에게 길을 물었습니다.",
    breakdown: [
      { word: "道を聞きました", reading: "みちをききました", meaning: "길을 물었습니다" },
    ] },
  { level: "N4", kanji: "免許", reading: "めんきょ", korean: "멩쿄", meaning: "면허",
    example: "先月、運転免許を取りました。", exampleReading: "せんげつ、うんてんめんきょをとりました。", exampleKorean: "센게츠 운텐 멩쿄오 토리마시타", exampleMeaning: "지난달 운전면허를 땄습니다.",
    breakdown: [
      { word: "取りました", reading: "とりました", meaning: "땄습니다" },
    ] },
  { level: "N4", kanji: "駐車場", reading: "ちゅうしゃじょう", korean: "츄-샤죠-", meaning: "주차장",
    example: "駐車場に車を止めました。", exampleReading: "ちゅうしゃじょうにくるまをとめました。", exampleKorean: "츄-샤죠-니 쿠루마오 토메마시타", exampleMeaning: "주차장에 차를 세웠습니다.",
    breakdown: [
      { word: "止めました", reading: "とめました", meaning: "세웠습니다" },
    ] },
  { level: "N4", kanji: "高速道路", reading: "こうそくどうろ", korean: "코-소쿠도-로", meaning: "고속도로",
    example: "高速道路で東京へ行きます。", exampleReading: "こうそくどうろでとうきょうへいきます。", exampleKorean: "코-소쿠도-로데 토-쿄-에 이키마스", exampleMeaning: "고속도로로 도쿄에 갑니다.",
    breakdown: [
      { word: "東京へ", reading: "とうきょうへ", meaning: "도쿄로" },
    ] },
  { level: "N4", kanji: "温泉", reading: "おんせん", korean: "온센", meaning: "온천",
    example: "週末に温泉へ行きます。", exampleReading: "しゅうまつにおんせんへいきます。", exampleKorean: "슈-마츠니 온센에 이키마스", exampleMeaning: "주말에 온천에 갑니다.",
    breakdown: [
      { word: "週末に", reading: "しゅうまつに", meaning: "주말에" },
    ] },
  { level: "N4", kanji: "祭り", reading: "まつり", korean: "마츠리", meaning: "축제",
    example: "夏祭りに浴衣を着て行きました。", exampleReading: "なつまつりにゆかたをきていきました。", exampleKorean: "나츠마츠리니 유카타오 키테 이키마시타", exampleMeaning: "여름 축제에 유카타를 입고 갔습니다.",
    breakdown: [
      { word: "浴衣を着て", reading: "ゆかたをきて", meaning: "유카타를 입고" },
    ] },
  { level: "N4", kanji: "花火", reading: "はなび", korean: "하나비", meaning: "불꽃놀이",
    example: "夜、花火を見ました。", exampleReading: "よる、はなびをみました。", exampleKorean: "요루 하나비오 미마시타", exampleMeaning: "밤에 불꽃놀이를 봤습니다.",
    breakdown: [
      { word: "夜", reading: "よる", meaning: "밤" },
    ] },
  { level: "N4", kanji: "趣味", reading: "しゅみ", korean: "슈미", meaning: "취미",
    example: "私の趣味は写真を撮ることです。", exampleReading: "わたしのしゅみはしゃしんをとることです。", exampleKorean: "와타시노 슈미와 샤신오 토루 코토데스", exampleMeaning: "제 취미는 사진을 찍는 것입니다.",
    breakdown: [
      { word: "ことです", reading: "ことです", meaning: "~하는 것입니다 (명사화)" },
    ] },
  { level: "N4", kanji: "興味", reading: "きょうみ", korean: "쿄-미", meaning: "흥미",
    example: "日本の文化に興味があります。", exampleReading: "にほんのぶんかにきょうみがあります。", exampleKorean: "니혼노 붕카니 쿄-미가 아리마스", exampleMeaning: "일본 문화에 흥미가 있습니다.",
    breakdown: [
      { word: "文化", reading: "ぶんか", meaning: "문화" },
    ] },
  { level: "N4", kanji: "熱心", reading: "ねっしん", korean: "넷신", meaning: "열심",
    example: "彼は熱心に勉強しています。", exampleReading: "かれはねっしんにべんきょうしています。", exampleKorean: "카레와 넷신니 벵쿄- 시테이마스", exampleMeaning: "그는 열심히 공부하고 있습니다.",
    breakdown: [
      { word: "勉強しています", reading: "べんきょうしています", meaning: "공부하고 있습니다" },
    ] },
  { level: "N4", kanji: "真面目", reading: "まじめ", korean: "마지메", meaning: "성실함",
    example: "彼女はとても真面目な学生です。", exampleReading: "かのじょはとてもまじめながくせいです。", exampleKorean: "카노죠와 도테모 마지메나 각세-데스", exampleMeaning: "그녀는 아주 성실한 학생입니다.",
    breakdown: [
      { word: "学生", reading: "がくせい", meaning: "학생" },
    ] },
  { level: "N4", kanji: "優しい", reading: "やさしい", korean: "야사시-", meaning: "상냥하다",
    example: "彼はとても優しい人です。", exampleReading: "かれはとてもやさしいひとです。", exampleKorean: "카레와 도테모 야사시- 히토데스", exampleMeaning: "그는 아주 상냥한 사람입니다.",
    breakdown: [
      { word: "人", reading: "ひと", meaning: "사람" },
    ] },
  { level: "N4", kanji: "厳しい", reading: "きびしい", korean: "키비시-", meaning: "엄격하다",
    example: "父は私に厳しいです。", exampleReading: "ちちはわたしにきびしいです。", exampleKorean: "치치와 와타시니 키비시-데스", exampleMeaning: "아버지는 저에게 엄격합니다.",
    breakdown: [
      { word: "私に", reading: "わたしに", meaning: "저에게" },
    ] },
  { level: "N4", kanji: "素直", reading: "すなお", korean: "스나오", meaning: "솔직함, 순수함",
    example: "もっと素直になったほうがいいです。", exampleReading: "もっとすなおになったほうがいいです。", exampleKorean: "못토 스나오니 낫타 호-가 이-데스", exampleMeaning: "좀 더 솔직해지는 게 좋습니다.",
    breakdown: [
      { word: "ほうがいいです", reading: "ほうがいいです", meaning: "~하는 게 좋습니다" },
    ] },
  { level: "N4", kanji: "正直", reading: "しょうじき", korean: "쇼-지키", meaning: "정직",
    example: "正直に話してください。", exampleReading: "しょうじきにはなしてください。", exampleKorean: "쇼-지키니 하나시테쿠다사이", exampleMeaning: "정직하게 말해 주세요.",
    breakdown: [
      { word: "話してください", reading: "はなしてください", meaning: "말해 주세요" },
    ] },
  { level: "N4", kanji: "消極的", reading: "しょうきょくてき", korean: "쇼-쿄쿠테키", meaning: "소극적",
    example: "彼は消極的な性格です。", exampleReading: "かれはしょうきょくてきなせいかくです。", exampleKorean: "카레와 쇼-쿄쿠테키나 세-카쿠데스", exampleMeaning: "그는 소극적인 성격입니다.",
    breakdown: [
      { word: "性格", reading: "せいかく", meaning: "성격" },
    ] },
  { level: "N4", kanji: "冷たい", reading: "つめたい", korean: "츠메타이", meaning: "차갑다",
    example: "冷たい水を飲みました。", exampleReading: "つめたいみずをのみました。", exampleKorean: "츠메타이 미즈오 노미마시타", exampleMeaning: "차가운 물을 마셨습니다.",
    breakdown: [
      { word: "水", reading: "みず", meaning: "물" },
    ] },
  { level: "N4", kanji: "濃い", reading: "こい", korean: "코이", meaning: "진하다",
    example: "濃いコーヒーが好きです。", exampleReading: "こいコーヒーがすきです。", exampleKorean: "코이 코-히-가 스키데스", exampleMeaning: "진한 커피를 좋아합니다.",
    breakdown: [
      { word: "コーヒー", reading: "コーヒー", meaning: "커피" },
    ] },
  { level: "N4", kanji: "薄い", reading: "うすい", korean: "우스이", meaning: "연하다, 얇다",
    example: "このお茶は少し薄いです。", exampleReading: "このおちゃはすこしうすいです。", exampleKorean: "코노 오챠와 스코시 우스이데스", exampleMeaning: "이 차는 조금 연합니다.",
    breakdown: [
      { word: "少し", reading: "すこし", meaning: "조금" },
    ] },
  { level: "N4", kanji: "太い", reading: "ふとい", korean: "후토이", meaning: "굵다",
    example: "この木の幹はとても太いです。", exampleReading: "このきのみきはとてもふといです。", exampleKorean: "코노 키노 미키와 도테모 후토이데스", exampleMeaning: "이 나무의 줄기는 아주 굵습니다.",
    breakdown: [
      { word: "幹", reading: "みき", meaning: "줄기" },
    ] },
  { level: "N4", kanji: "細い", reading: "ほそい", korean: "호소이", meaning: "가늘다",
    example: "細い道を通りました。", exampleReading: "ほそいみちをとおりました。", exampleKorean: "호소이 미치오 토-리마시타", exampleMeaning: "좁은(가는) 길을 지나갔습니다.",
    breakdown: [
      { word: "通りました", reading: "とおりました", meaning: "지나갔습니다" },
    ] },
  { level: "N4", kanji: "深い", reading: "ふかい", korean: "후카이", meaning: "깊다",
    example: "この川は深いです。", exampleReading: "このかわはふかいです。", exampleKorean: "코노 카와와 후카이데스", exampleMeaning: "이 강은 깊습니다.",
    breakdown: [
      { word: "川", reading: "かわ", meaning: "강" },
    ] },
  { level: "N4", kanji: "浅い", reading: "あさい", korean: "아사이", meaning: "얕다",
    example: "このプールは浅いです。", exampleReading: "このプールはあさいです。", exampleKorean: "코노 푸-루와 아사이데스", exampleMeaning: "이 수영장은 얕습니다.",
    breakdown: [
      { word: "プール", reading: "プール", meaning: "수영장" },
    ] },
  { level: "N4", kanji: "広い", reading: "ひろい", korean: "히로이", meaning: "넓다",
    example: "この部屋は広いです。", exampleReading: "このへやはひろいです。", exampleKorean: "코노 헤야와 히로이데스", exampleMeaning: "이 방은 넓습니다.",
    breakdown: [
      { word: "部屋", reading: "へや", meaning: "방" },
    ] },
  { level: "N4", kanji: "狭い", reading: "せまい", korean: "세마이", meaning: "좁다",
    example: "このアパートは少し狭いです。", exampleReading: "このアパートはすこしせまいです。", exampleKorean: "코노 아파-토와 스코시 세마이데스", exampleMeaning: "이 아파트는 조금 좁습니다.",
    breakdown: [
      { word: "アパート", reading: "アパート", meaning: "아파트" },
    ] },
  { level: "N4", kanji: "遠い", reading: "とおい", korean: "토-이", meaning: "멀다",
    example: "会社は家から遠いです。", exampleReading: "かいしゃはいえからとおいです。", exampleKorean: "카이샤와 이에카라 토-이데스", exampleMeaning: "회사는 집에서 멉니다.",
    breakdown: [
      { word: "家から", reading: "いえから", meaning: "집에서" },
    ] },
  { level: "N4", kanji: "近い", reading: "ちかい", korean: "치카이", meaning: "가깝다",
    example: "駅は家から近いです。", exampleReading: "えきはいえからちかいです。", exampleKorean: "에키와 이에카라 치카이데스", exampleMeaning: "역은 집에서 가깝습니다.",
    breakdown: [
      { word: "駅", reading: "えき", meaning: "역" },
    ] },
  { level: "N4", kanji: "危ない", reading: "あぶない", korean: "아부나이", meaning: "위험하다",
    example: "この道は夜、危ないです。", exampleReading: "このみちはよる、あぶないです。", exampleKorean: "코노 미치와 요루 아부나이데스", exampleMeaning: "이 길은 밤에 위험합니다.",
    breakdown: [
      { word: "夜", reading: "よる", meaning: "밤" },
    ] },
  { level: "N4", kanji: "汚い", reading: "きたない", korean: "키타나이", meaning: "더럽다",
    example: "部屋が汚いので掃除します。", exampleReading: "へやがきたないのでそうじします。", exampleKorean: "헤야가 키타나이노데 소-지 시마스", exampleMeaning: "방이 더러워서 청소합니다.",
    breakdown: [
      { word: "ので", reading: "ので", meaning: "~해서" },
    ] },
  { level: "N4", kanji: "眠い", reading: "ねむい", korean: "네무이", meaning: "졸리다",
    example: "夜遅くまで起きていたので眠いです。", exampleReading: "よるおそくまでおきていたのでねむいです。", exampleKorean: "요루 오소쿠마데 오키테이타노데 네무이데스", exampleMeaning: "밤늦게까지 깨어 있어서 졸립니다.",
    breakdown: [
      { word: "起きていた", reading: "おきていた", meaning: "깨어 있었다" },
    ] },

  { level: "N4", kanji: "沸かす", reading: "わかす", korean: "와카스", meaning: "끓이다",
    example: "お湯を沸かしてお茶を入れます。", exampleReading: "おゆをわかしておちゃをいれます。", exampleKorean: "오유오 와카시테 오챠오 이레마스", exampleMeaning: "물을 끓여서 차를 탑니다.",
    breakdown: [
      { word: "お湯", reading: "おゆ", meaning: "뜨거운 물" },
      { word: "入れます", reading: "いれます", meaning: "넣습니다(차를 탑니다)" },
    ] },
  { level: "N4", kanji: "沸く", reading: "わく", korean: "와쿠", meaning: "끓다",
    example: "お湯が沸きました。", exampleReading: "おゆがわきました。", exampleKorean: "오유가 와키마시타", exampleMeaning: "물이 끓었습니다.",
    breakdown: [
      { word: "お湯", reading: "おゆ", meaning: "뜨거운 물" },
    ] },
  { level: "N4", kanji: "冷やす", reading: "ひやす", korean: "히야스", meaning: "식히다, 차게 하다",
    example: "ビールを冷蔵庫で冷やします。", exampleReading: "ビールをれいぞうこでひやします。", exampleKorean: "비-루오 레-조-코데 히야시마스", exampleMeaning: "맥주를 냉장고에서 차갑게 합니다.",
    breakdown: [
      { word: "冷蔵庫で", reading: "れいぞうこで", meaning: "냉장고에서" },
    ] },
  { level: "N4", kanji: "温める", reading: "あたためる", korean: "아타타메루", meaning: "데우다",
    example: "スープを電子レンジで温めます。", exampleReading: "スープをでんしレンジであたためます。", exampleKorean: "스-프오 덴시렌지데 아타타메마스", exampleMeaning: "수프를 전자레인지로 데웁니다.",
    breakdown: [
      { word: "電子レンジで", reading: "でんしレンジで", meaning: "전자레인지로" },
    ] },
  { level: "N4", kanji: "混ぜる", reading: "まぜる", korean: "마제루", meaning: "섞다",
    example: "卵と砂糖を混ぜます。", exampleReading: "たまごとさとうをまぜます。", exampleKorean: "타마고토 사토-오 마제마스", exampleMeaning: "달걀과 설탕을 섞습니다.",
    breakdown: [
      { word: "卵と砂糖", reading: "たまごとさとう", meaning: "달걀과 설탕" },
    ] },
  { level: "N4", kanji: "切る", reading: "きる", korean: "키루", meaning: "자르다",
    example: "野菜を小さく切ります。", exampleReading: "やさいをちいさくきります。", exampleKorean: "야사이오 치-사쿠 키리마스", exampleMeaning: "채소를 작게 자릅니다.",
    breakdown: [
      { word: "小さく", reading: "ちいさく", meaning: "작게" },
    ] },
  { level: "N4", kanji: "焼く", reading: "やく", korean: "야쿠", meaning: "굽다",
    example: "魚を焼きます。", exampleReading: "さかなをやきます。", exampleKorean: "사카나오 야키마스", exampleMeaning: "생선을 굽습니다.",
    breakdown: [
      { word: "魚", reading: "さかな", meaning: "생선" },
    ] },
  { level: "N4", kanji: "揚げる", reading: "あげる", korean: "아게루", meaning: "튀기다",
    example: "鶏肉を揚げます。", exampleReading: "とりにくをあげます。", exampleKorean: "토리니쿠오 아게마스", exampleMeaning: "닭고기를 튀깁니다.",
    breakdown: [
      { word: "鶏肉", reading: "とりにく", meaning: "닭고기" },
    ] },
  { level: "N4", kanji: "煮る", reading: "にる", korean: "니루", meaning: "조리다, 삶다",
    example: "野菜を煮ています。", exampleReading: "やさいをにています。", exampleKorean: "야사이오 니테이마스", exampleMeaning: "채소를 조리고 있습니다.",
    breakdown: [
      { word: "ています", reading: "ています", meaning: "~하고 있다 (진행형)" },
    ] },
  { level: "N4", kanji: "蒸す", reading: "むす", korean: "무스", meaning: "찌다",
    example: "野菜を蒸して食べます。", exampleReading: "やさいをむしてたべます。", exampleKorean: "야사이오 무시테 타베마스", exampleMeaning: "채소를 쪄서 먹습니다.",
    breakdown: [
      { word: "蒸して", reading: "むして", meaning: "쪄서" },
    ] },
  { level: "N4", kanji: "味", reading: "あじ", korean: "아지", meaning: "맛",
    example: "このスープは味がいいです。", exampleReading: "このスープはあじがいいです。", exampleKorean: "코노 스-프와 아지가 이-데스", exampleMeaning: "이 수프는 맛이 좋습니다.",
    breakdown: [
      { word: "いいです", reading: "いいです", meaning: "좋습니다" },
    ] },
  { level: "N4", kanji: "匂い", reading: "におい", korean: "니오이", meaning: "냄새",
    example: "いい匂いがしますね。", exampleReading: "いいにおいがしますね。", exampleKorean: "이- 니오이가 시마스네", exampleMeaning: "좋은 냄새가 나네요.",
    breakdown: [
      { word: "しますね", reading: "しますね", meaning: "나네요" },
    ] },
  { level: "N4", kanji: "香り", reading: "かおり", korean: "카오리", meaning: "향",
    example: "コーヒーの香りが好きです。", exampleReading: "コーヒーのかおりがすきです。", exampleKorean: "코-히-노 카오리가 스키데스", exampleMeaning: "커피 향을 좋아합니다.",
    breakdown: [
      { word: "好きです", reading: "すきです", meaning: "좋아합니다" },
    ] },
  { level: "N4", kanji: "苦い", reading: "にがい", korean: "니가이", meaning: "쓰다",
    example: "この薬は苦いです。", exampleReading: "このくすりはにがいです。", exampleKorean: "코노 쿠스리와 니가이데스", exampleMeaning: "이 약은 씁니다.",
    breakdown: [
      { word: "薬", reading: "くすり", meaning: "약" },
    ] },
  { level: "N4", kanji: "酸っぱい", reading: "すっぱい", korean: "습파이", meaning: "시다",
    example: "レモンは酸っぱいです。", exampleReading: "レモンはすっぱいです。", exampleKorean: "레몬와 습파이데스", exampleMeaning: "레몬은 십니다.",
    breakdown: [
      { word: "レモン", reading: "レモン", meaning: "레몬" },
    ] },
  { level: "N4", kanji: "しょっぱい", reading: "しょっぱい", korean: "숍파이", meaning: "짜다",
    example: "この味噌汁は少ししょっぱいです。", exampleReading: "このみそしるはすこししょっぱいです。", exampleKorean: "코노 미소시루와 스코시 숍파이데스", exampleMeaning: "이 된장국은 조금 짭니다.",
    breakdown: [
      { word: "味噌汁", reading: "みそしる", meaning: "된장국" },
    ] },
  { level: "N4", kanji: "味噌", reading: "みそ", korean: "미소", meaning: "된장",
    example: "味噌汁を作ります。", exampleReading: "みそしるをつくります。", exampleKorean: "미소시루오 츠쿠리마스", exampleMeaning: "된장국을 만듭니다.",
    breakdown: [
      { word: "作ります", reading: "つくります", meaning: "만듭니다" },
    ] },
  { level: "N4", kanji: "醤油", reading: "しょうゆ", korean: "쇼-유", meaning: "간장",
    example: "醤油を少しかけます。", exampleReading: "しょうゆをすこしかけます。", exampleKorean: "쇼-유오 스코시 카케마스", exampleMeaning: "간장을 조금 뿌립니다.",
    breakdown: [
      { word: "かけます", reading: "かけます", meaning: "뿌립니다" },
    ] },
  { level: "N4", kanji: "塩", reading: "しお", korean: "시오", meaning: "소금",
    example: "塩を入れすぎました。", exampleReading: "しおをいれすぎました。", exampleKorean: "시오오 이레스기마시타", exampleMeaning: "소금을 너무 많이 넣었습니다.",
    breakdown: [
      { word: "入れすぎました", reading: "いれすぎました", meaning: "너무 많이 넣었습니다 (동사+すぎる)" },
    ] },
  { level: "N4", kanji: "砂糖", reading: "さとう", korean: "사토-", meaning: "설탕",
    example: "コーヒーに砂糖を入れます。", exampleReading: "コーヒーにさとうをいれます。", exampleKorean: "코-히-니 사토-오 이레마스", exampleMeaning: "커피에 설탕을 넣습니다.",
    breakdown: [
      { word: "コーヒーに", reading: "コーヒーに", meaning: "커피에" },
    ] },
  { level: "N4", kanji: "油", reading: "あぶら", korean: "아부라", meaning: "기름",
    example: "フライパンに油をひきます。", exampleReading: "フライパンにあぶらをひきます。", exampleKorean: "후라이판니 아부라오 히키마스", exampleMeaning: "프라이팬에 기름을 두릅니다.",
    breakdown: [
      { word: "ひきます", reading: "ひきます", meaning: "두릅니다" },
    ] },
  { level: "N4", kanji: "酢", reading: "す", korean: "스", meaning: "식초",
    example: "サラダに酢をかけます。", exampleReading: "サラダにすをかけます。", exampleKorean: "사라다니 스오 카케마스", exampleMeaning: "샐러드에 식초를 뿌립니다.",
    breakdown: [
      { word: "サラダに", reading: "サラダに", meaning: "샐러드에" },
    ] },
  { level: "N4", kanji: "予備", reading: "よび", korean: "요비", meaning: "예비",
    example: "予備の電池を持っています。", exampleReading: "よびのでんちをもっています。", exampleKorean: "요비노 덴치오 못테이마스", exampleMeaning: "예비 건전지를 가지고 있습니다.",
    breakdown: [
      { word: "電池", reading: "でんち", meaning: "건전지" },
    ] },
  { level: "N4", kanji: "余裕", reading: "よゆう", korean: "요유-", meaning: "여유",
    example: "時間に余裕があります。", exampleReading: "じかんによゆうがあります。", exampleKorean: "지칸니 요유-가 아리마스", exampleMeaning: "시간에 여유가 있습니다.",
    breakdown: [
      { word: "時間に", reading: "じかんに", meaning: "시간에" },
    ] },
  { level: "N4", kanji: "余分", reading: "よぶん", korean: "요분", meaning: "여분",
    example: "余分にコピーしておきます。", exampleReading: "よぶんにコピーしておきます。", exampleKorean: "요분니 코피- 시테오키마스", exampleMeaning: "여분으로 복사해 둡니다.",
    breakdown: [
      { word: "ておきます", reading: "ておきます", meaning: "~해 둡니다" },
    ] },
  { level: "N4", kanji: "無駄", reading: "むだ", korean: "무다", meaning: "낭비, 헛됨",
    example: "時間を無駄にしたくないです。", exampleReading: "じかんをむだにしたくないです。", exampleKorean: "지캉오 무다니 시타쿠나이데스", exampleMeaning: "시간을 낭비하고 싶지 않습니다.",
    breakdown: [
      { word: "したくないです", reading: "したくないです", meaning: "하고 싶지 않습니다" },
    ] },
  { level: "N4", kanji: "節電", reading: "せつでん", korean: "세츠덴", meaning: "절전",
    example: "夏は節電を心がけています。", exampleReading: "なつはせつでんをこころがけています。", exampleKorean: "나츠와 세츠덴오 코코로가케테이마스", exampleMeaning: "여름은 절전을 유념하고 있습니다.",
    breakdown: [
      { word: "心がけています", reading: "こころがけています", meaning: "유념하고 있습니다" },
    ] },
  { level: "N4", kanji: "割引", reading: "わりびき", korean: "와리비키", meaning: "할인",
    example: "学生は割引になります。", exampleReading: "がくせいはわりびきになります。", exampleKorean: "각세-와 와리비키니 나리마스", exampleMeaning: "학생은 할인이 됩니다.",
    breakdown: [
      { word: "学生は", reading: "がくせいは", meaning: "학생은" },
    ] },
  { level: "N4", kanji: "値上げ", reading: "ねあげ", korean: "네아게", meaning: "가격 인상",
    example: "商品の値上げが続いています。", exampleReading: "しょうひんのねあげがつづいています。", exampleKorean: "쇼-힝노 네아게가 츠즈이테이마스", exampleMeaning: "상품 가격 인상이 계속되고 있습니다.",
    breakdown: [
      { word: "続いています", reading: "つづいています", meaning: "계속되고 있습니다" },
    ] },
  { level: "N4", kanji: "値下げ", reading: "ねさげ", korean: "네사게", meaning: "가격 인하",
    example: "電化製品が値下げされました。", exampleReading: "でんかせいひんがねさげされました。", exampleKorean: "뎅카 세-힝가 네사게 사레마시타", exampleMeaning: "가전제품이 가격 인하되었습니다.",
    breakdown: [
      { word: "電化製品", reading: "でんかせいひん", meaning: "가전제품" },
    ] },
  { level: "N4", kanji: "領収書", reading: "りょうしゅうしょ", korean: "료-슈-쇼", meaning: "영수증",
    example: "領収書をもらいました。", exampleReading: "りょうしゅうしょをもらいました。", exampleKorean: "료-슈-쇼오 모라이마시타", exampleMeaning: "영수증을 받았습니다.",
    breakdown: [
      { word: "もらいました", reading: "もらいました", meaning: "받았습니다" },
    ] },
  { level: "N4", kanji: "レシート", reading: "レシート", korean: "레시-토", meaning: "영수증",
    example: "レシートを捨てないでください。", exampleReading: "レシートをすてないでください。", exampleKorean: "레시-토오 스테나이데쿠다사이", exampleMeaning: "영수증을 버리지 마세요.",
    breakdown: [
      { word: "捨てないでください", reading: "すてないでください", meaning: "버리지 마세요" },
    ] },
  { level: "N4", kanji: "お釣り", reading: "おつり", korean: "오츠리", meaning: "거스름돈",
    example: "お釣りをもらい忘れました。", exampleReading: "おつりをもらいわすれました。", exampleKorean: "오츠리오 모라이 와스레마시타", exampleMeaning: "거스름돈을 받는 것을 잊었습니다.",
    breakdown: [
      { word: "もらい忘れました", reading: "もらいわすれました", meaning: "받는 것을 잊었습니다" },
    ] },
  { level: "N4", kanji: "支店", reading: "してん", korean: "시텐", meaning: "지점",
    example: "この銀行には支店がたくさんあります。", exampleReading: "このぎんこうにはしてんがたくさんあります。", exampleKorean: "코노 깅코-니와 시텐가 타쿠상 아리마스", exampleMeaning: "이 은행에는 지점이 많이 있습니다.",
    breakdown: [
      { word: "銀行", reading: "ぎんこう", meaning: "은행" },
    ] },
  { level: "N4", kanji: "本店", reading: "ほんてん", korean: "혼텐", meaning: "본점",
    example: "本店は駅前にあります。", exampleReading: "ほんてんはえきまえにあります。", exampleKorean: "혼텐와 에키마에니 아리마스", exampleMeaning: "본점은 역 앞에 있습니다.",
    breakdown: [
      { word: "駅前", reading: "えきまえ", meaning: "역 앞" },
    ] },
  { level: "N4", kanji: "売り場", reading: "うりば", korean: "우리바", meaning: "매장",
    example: "靴の売り場は二階です。", exampleReading: "くつのうりばはにかいです。", exampleKorean: "쿠츠노 우리바와 니카이데스", exampleMeaning: "신발 매장은 2층입니다.",
    breakdown: [
      { word: "二階", reading: "にかい", meaning: "2층" },
    ] },
  { level: "N4", kanji: "商店街", reading: "しょうてんがい", korean: "쇼-텐가이", meaning: "상점가",
    example: "商店街で買い物をしました。", exampleReading: "しょうてんがいでかいものをしました。", exampleKorean: "쇼-텐가이데 카이모노오 시마시타", exampleMeaning: "상점가에서 쇼핑을 했습니다.",
    breakdown: [
      { word: "買い物", reading: "かいもの", meaning: "쇼핑" },
    ] },
  { level: "N4", kanji: "屋上", reading: "おくじょう", korean: "오쿠죠-", meaning: "옥상",
    example: "屋上から景色を見ます。", exampleReading: "おくじょうからけしきをみます。", exampleKorean: "오쿠죠-카라 케시키오 미마스", exampleMeaning: "옥상에서 경치를 봅니다.",
    breakdown: [
      { word: "景色", reading: "けしき", meaning: "경치" },
    ] },
  { level: "N4", kanji: "地下", reading: "ちか", korean: "치카", meaning: "지하",
    example: "地下に駐車場があります。", exampleReading: "ちかにちゅうしゃじょうがあります。", exampleKorean: "치카니 츄-샤죠-가 아리마스", exampleMeaning: "지하에 주차장이 있습니다.",
    breakdown: [
      { word: "駐車場", reading: "ちゅうしゃじょう", meaning: "주차장" },
    ] },
  { level: "N4", kanji: "廊下", reading: "ろうか", korean: "로-카", meaning: "복도",
    example: "廊下を走らないでください。", exampleReading: "ろうかをはしらないでください。", exampleKorean: "로-카오 하시라나이데쿠다사이", exampleMeaning: "복도를 뛰지 마세요.",
    breakdown: [
      { word: "走らないでください", reading: "はしらないでください", meaning: "뛰지 마세요" },
    ] },
  { level: "N4", kanji: "階", reading: "かい", korean: "카이", meaning: "층",
    example: "何階に住んでいますか。", exampleReading: "なんかいにすんでいますか。", exampleKorean: "난카이니 슨데이마스카", exampleMeaning: "몇 층에 사십니까?",
    breakdown: [
      { word: "住んでいますか", reading: "すんでいますか", meaning: "사십니까?" },
    ] },
  { level: "N4", kanji: "隣", reading: "となり", korean: "토나리", meaning: "옆",
    example: "隣の人に挨拶しました。", exampleReading: "となりのひとにあいさつしました。", exampleKorean: "토나리노 히토니 아이사츠 시마시타", exampleMeaning: "옆 사람에게 인사했습니다.",
    breakdown: [
      { word: "挨拶しました", reading: "あいさつしました", meaning: "인사했습니다" },
    ] },
  { level: "N4", kanji: "近所", reading: "きんじょ", korean: "킨죠", meaning: "근처, 이웃",
    example: "近所のスーパーで買い物します。", exampleReading: "きんじょのスーパーでかいものします。", exampleKorean: "킨죠노 스-파-데 카이모노 시마스", exampleMeaning: "근처 슈퍼에서 쇼핑합니다.",
    breakdown: [
      { word: "スーパー", reading: "スーパー", meaning: "슈퍼마켓" },
    ] },
  { level: "N4", kanji: "周り", reading: "まわり", korean: "마와리", meaning: "주변",
    example: "家の周りを散歩します。", exampleReading: "いえのまわりをさんぽします。", exampleKorean: "이에노 마와리오 삼포 시마스", exampleMeaning: "집 주변을 산책합니다.",
    breakdown: [
      { word: "散歩します", reading: "さんぽします", meaning: "산책합니다" },
    ] },
  { level: "N4", kanji: "向かい", reading: "むかい", korean: "무카이", meaning: "맞은편",
    example: "向かいの建物が新しいです。", exampleReading: "むかいのたてものがあたらしいです。", exampleKorean: "무카이노 타테모노가 아타라시-데스", exampleMeaning: "맞은편 건물이 새것입니다.",
    breakdown: [
      { word: "建物", reading: "たてもの", meaning: "건물" },
    ] },
  { level: "N4", kanji: "奥", reading: "おく", korean: "오쿠", meaning: "안쪽",
    example: "部屋の奥に座ってください。", exampleReading: "へやのおくにすわってください。", exampleKorean: "헤야노 오쿠니 스왓테쿠다사이", exampleMeaning: "방 안쪽에 앉으세요.",
    breakdown: [
      { word: "座ってください", reading: "すわってください", meaning: "앉아 주세요" },
    ] },
  { level: "N4", kanji: "隅", reading: "すみ", korean: "스미", meaning: "구석",
    example: "荷物を部屋の隅に置きました。", exampleReading: "にもつをへやのすみにおきました。", exampleKorean: "니모츠오 헤야노 스미니 오키마시타", exampleMeaning: "짐을 방 구석에 두었습니다.",
    breakdown: [
      { word: "置きました", reading: "おきました", meaning: "두었습니다" },
    ] },
  { level: "N4", kanji: "真ん中", reading: "まんなか", korean: "만나카", meaning: "한가운데",
    example: "テーブルの真ん中に花を置きます。", exampleReading: "テーブルのまんなかにはなをおきます。", exampleKorean: "테-부루노 만나카니 하나오 오키마스", exampleMeaning: "테이블 한가운데에 꽃을 놓습니다.",
    breakdown: [
      { word: "花", reading: "はな", meaning: "꽃" },
    ] },
  { level: "N4", kanji: "端", reading: "はし", korean: "하시", meaning: "끝, 가장자리",
    example: "道の端を歩きます。", exampleReading: "みちのはしをあるきます。", exampleKorean: "미치노 하시오 아루키마스", exampleMeaning: "길 가장자리를 걷습니다.",
    breakdown: [
      { word: "歩きます", reading: "あるきます", meaning: "걷습니다" },
    ] },
  { level: "N4", kanji: "全体", reading: "ぜんたい", korean: "젠타이", meaning: "전체",
    example: "全体の計画を説明します。", exampleReading: "ぜんたいのけいかくをせつめいします。", exampleKorean: "젠타이노 케-카쿠오 세츠메- 시마스", exampleMeaning: "전체 계획을 설명합니다.",
    breakdown: [
      { word: "計画", reading: "けいかく", meaning: "계획" },
    ] },

  { level: "N4", kanji: "相手", reading: "あいて", korean: "아이테", meaning: "상대",
    example: "試合の相手はとても強いです。", exampleReading: "しあいのあいてはとてもつよいです。", exampleKorean: "시아이노 아이테와 도테모 츠요이데스", exampleMeaning: "시합 상대는 아주 강합니다.",
    breakdown: [
      { word: "試合", reading: "しあい", meaning: "시합" }
    ] },
  { level: "N4", kanji: "自信", reading: "じしん", korean: "지신", meaning: "자신감",
    example: "彼は自信を持って話します。", exampleReading: "かれはじしんをもってはなします。", exampleKorean: "카레와 지신오 못테 하나시마스", exampleMeaning: "그는 자신감을 가지고 이야기합니다.",
    breakdown: [
      { word: "持って", reading: "もって", meaning: "가지고" }
    ] },
  { level: "N4", kanji: "表す", reading: "あらわす", korean: "아라와스", meaning: "나타내다",
    example: "感情を言葉で表すのは難しいです。", exampleReading: "かんじょうをことばであらわすのはむずかしいです。", exampleKorean: "칸죠-오 코토바데 아라와스노와 무즈카시-데스", exampleMeaning: "감정을 말로 나타내는 것은 어렵습니다.",
    breakdown: [
      { word: "感情", reading: "かんじょう", meaning: "감정" }
    ] },
  { level: "N4", kanji: "表れる", reading: "あらわれる", korean: "아라와레루", meaning: "나타나다",
    example: "疲れが顔に表れています。", exampleReading: "つかれがかおにあらわれています。", exampleKorean: "츠카레가 카오니 아라와레테이마스", exampleMeaning: "피로가 얼굴에 나타나 있습니다.",
    breakdown: [
      { word: "顔に", reading: "かおに", meaning: "얼굴에" }
    ] },
  { level: "N4", kanji: "慣れる", reading: "なれる", korean: "나레루", meaning: "익숙해지다",
    example: "新しい仕事にもう慣れました。", exampleReading: "あたらしいしごとにもうなれました。", exampleKorean: "아타라시- 시고토니 모- 나레마시타", exampleMeaning: "새로운 일에 이제 익숙해졌습니다.",
    breakdown: [
      { word: "もう", reading: "もう", meaning: "이제" }
    ] },
  { level: "N4", kanji: "頼む", reading: "たのむ", korean: "타노무", meaning: "부탁하다",
    example: "友達に手伝いを頼みました。", exampleReading: "ともだちにてつだいをたのみました。", exampleKorean: "도모다치니 테츠다이오 타노미마시타", exampleMeaning: "친구에게 도움을 부탁했습니다.",
    breakdown: [
      { word: "手伝い", reading: "てつだい", meaning: "도움" }
    ] },
  { level: "N4", kanji: "頼る", reading: "たよる", korean: "타요루", meaning: "의지하다",
    example: "困った時は家族に頼ります。", exampleReading: "こまったときはかぞくにたよります。", exampleKorean: "코맛타 토키와 카조쿠니 타요리마스", exampleMeaning: "곤란할 때는 가족에게 의지합니다.",
    breakdown: [
      { word: "困った時", reading: "こまったとき", meaning: "곤란할 때" }
    ] },
  { level: "N4", kanji: "断る", reading: "ことわる", korean: "코토와루", meaning: "거절하다",
    example: "誘いを断りました。", exampleReading: "さそいをことわりました。", exampleKorean: "사소이오 코토와리마시타", exampleMeaning: "권유를 거절했습니다.",
    breakdown: [
      { word: "誘い", reading: "さそい", meaning: "권유" }
    ] },
  { level: "N4", kanji: "認める", reading: "みとめる", korean: "미토메루", meaning: "인정하다",
    example: "自分の間違いを認めました。", exampleReading: "じぶんのまちがいをみとめました。", exampleKorean: "지분노 마치가이오 미토메마시타", exampleMeaning: "자신의 잘못을 인정했습니다.",
    breakdown: [
      { word: "間違い", reading: "まちがい", meaning: "잘못" }
    ] },
  { level: "N4", kanji: "疑う", reading: "うたがう", korean: "우타가우", meaning: "의심하다",
    example: "彼の話を疑いました。", exampleReading: "かれのはなしをうたがいました。", exampleKorean: "카레노 하나시오 우타가이마시타", exampleMeaning: "그의 이야기를 의심했습니다.",
    breakdown: [
      { word: "話", reading: "はなし", meaning: "이야기" }
    ] },
  { level: "N4", kanji: "信じる", reading: "しんじる", korean: "신지루", meaning: "믿다",
    example: "彼のことを信じています。", exampleReading: "かれのことをしんじています。", exampleKorean: "카레노 코토오 신지테이마스", exampleMeaning: "그를 믿고 있습니다.",
    breakdown: [
      { word: "信じています", reading: "しんじています", meaning: "믿고 있습니다" }
    ] },
  { level: "N4", kanji: "確かめる", reading: "たしかめる", korean: "타시카메루", meaning: "확인하다",
    example: "もう一度確かめてください。", exampleReading: "もういちどたしかめてください。", exampleKorean: "모- 이치도 타시카메테쿠다사이", exampleMeaning: "한 번 더 확인해 주세요.",
    breakdown: [
      { word: "もう一度", reading: "もういちど", meaning: "한 번 더" }
    ] },
  { level: "N4", kanji: "確認", reading: "かくにん", korean: "카쿠닌", meaning: "확인",
    example: "予約を確認します。", exampleReading: "よやくをかくにんします。", exampleKorean: "요야쿠오 카쿠닌 시마스", exampleMeaning: "예약을 확인합니다.",
    breakdown: [
      { word: "予約", reading: "よやく", meaning: "예약" }
    ] },
  { level: "N4", kanji: "想定", reading: "そうてい", korean: "소-테-", meaning: "상정",
    example: "最悪の場合を想定します。", exampleReading: "さいあくのばあいをそうていします。", exampleKorean: "사이아쿠노 바아이오 소-테- 시마스", exampleMeaning: "최악의 경우를 상정합니다.",
    breakdown: [
      { word: "最悪の場合", reading: "さいあくのばあい", meaning: "최악의 경우" }
    ] },
  { level: "N4", kanji: "状態", reading: "じょうたい", korean: "죠-타이", meaning: "상태",
    example: "車は良い状態です。", exampleReading: "くるまはよいじょうたいです。", exampleKorean: "쿠루마와 요이 죠-타이데스", exampleMeaning: "차는 좋은 상태입니다.",
    breakdown: [
      { word: "良い", reading: "よい", meaning: "좋다" }
    ] },
  { level: "N4", kanji: "様子", reading: "ようす", korean: "요-스", meaning: "모습, 상태",
    example: "子供の様子を見に行きます。", exampleReading: "こどものようすをみにいきます。", exampleKorean: "코도모노 요-스오 미니 이키마스", exampleMeaning: "아이의 상태를 보러 갑니다.",
    breakdown: [
      { word: "見に行きます", reading: "みにいきます", meaning: "보러 갑니다" }
    ] },
  { level: "N4", kanji: "場合", reading: "ばあい", korean: "바아이", meaning: "경우",
    example: "雨の場合は中止します。", exampleReading: "あめのばあいはちゅうしします。", exampleKorean: "아메노 바아이와 츄-시 시마스", exampleMeaning: "비가 오는 경우는 중지합니다.",
    breakdown: [
      { word: "中止します", reading: "ちゅうしします", meaning: "중지합니다" }
    ] },
  { level: "N4", kanji: "機会", reading: "きかい", korean: "키카이", meaning: "기회",
    example: "いい機会だと思います。", exampleReading: "いいきかいだとおもいます。", exampleKorean: "이- 키카이다토 오모이마스", exampleMeaning: "좋은 기회라고 생각합니다.",
    breakdown: [
      { word: "だと思います", reading: "だとおもいます", meaning: "~라고 생각합니다" }
    ] },
  { level: "N4", kanji: "きっかけ", reading: "きっかけ", korean: "킥카케", meaning: "계기",
    example: "病気がきっかけで生活を変えました。", exampleReading: "びょうきがきっかけでせいかつをかえました。", exampleKorean: "뵤-키가 킥카케데 세-카츠오 카에마시타", exampleMeaning: "병이 계기가 되어 생활을 바꿨습니다.",
    breakdown: [
      { word: "病気", reading: "びょうき", meaning: "병" }
    ] },
  { level: "N4", kanji: "例えば", reading: "たとえば", korean: "타토에바", meaning: "예를 들면",
    example: "果物、例えばりんごが好きです。", exampleReading: "くだもの、たとえばりんごがすきです。", exampleKorean: "쿠다모노 타토에바 링고가 스키데스", exampleMeaning: "과일, 예를 들면 사과를 좋아합니다.",
    breakdown: [
      { word: "果物", reading: "くだもの", meaning: "과일" }
    ] },
  { level: "N4", kanji: "一般", reading: "いっぱん", korean: "입판", meaning: "일반",
    example: "一般の人には難しい内容です。", exampleReading: "いっぱんのひとにはむずかしいないようです。", exampleKorean: "입판노 히토니와 무즈카시- 나이요-데스", exampleMeaning: "일반인에게는 어려운 내용입니다.",
    breakdown: [
      { word: "内容", reading: "ないよう", meaning: "내용" }
    ] },
  { level: "N4", kanji: "普通", reading: "ふつう", korean: "후츠-", meaning: "보통",
    example: "普通は九時に寝ます。", exampleReading: "ふつうはくじにねます。", exampleKorean: "후츠-와 쿠지니 네마스", exampleMeaning: "보통은 9시에 잡니다.",
    breakdown: [
      { word: "九時に", reading: "くじに", meaning: "9시에" }
    ] },
  { level: "N4", kanji: "特別", reading: "とくべつ", korean: "토쿠베츠", meaning: "특별",
    example: "今日は特別な日です。", exampleReading: "きょうはとくべつなひです。", exampleKorean: "쿄-와 토쿠베츠나 히데스", exampleMeaning: "오늘은 특별한 날입니다.",
    breakdown: [
      { word: "日", reading: "ひ", meaning: "날" }
    ] },
  { level: "N4", kanji: "特殊", reading: "とくしゅ", korean: "토쿠슈", meaning: "특수",
    example: "これは特殊な例です。", exampleReading: "これはとくしゅなれいです。", exampleKorean: "코레와 토쿠슈나 레-데스", exampleMeaning: "이것은 특수한 예입니다.",
    breakdown: [
      { word: "例", reading: "れい", meaning: "예" }
    ] },
  { level: "N4", kanji: "全然", reading: "ぜんぜん", korean: "젠젠", meaning: "전혀",
    example: "全然分かりません。", exampleReading: "ぜんぜんわかりません。", exampleKorean: "젠젠 와카리마셍", exampleMeaning: "전혀 모르겠습니다.",
    breakdown: [
      { word: "分かりません", reading: "わかりません", meaning: "모르겠습니다" }
    ] },
  { level: "N4", kanji: "非常に", reading: "ひじょうに", korean: "히죠-니", meaning: "대단히",
    example: "非常に重要な会議です。", exampleReading: "ひじょうにじゅうようなかいぎです。", exampleKorean: "히죠-니 쥬-요-나 카이기데스", exampleMeaning: "대단히 중요한 회의입니다.",
    breakdown: [
      { word: "重要な", reading: "じゅうような", meaning: "중요한" }
    ] },
  { level: "N4", kanji: "かなり", reading: "かなり", korean: "카나리", meaning: "꽤, 상당히",
    example: "かなり疲れました。", exampleReading: "かなりつかれました。", exampleKorean: "카나리 츠카레마시타", exampleMeaning: "꽤 피곤했습니다.",
    breakdown: [
      { word: "疲れました", reading: "つかれました", meaning: "피곤했습니다" }
    ] },
  { level: "N4", kanji: "なるべく", reading: "なるべく", korean: "나루베쿠", meaning: "가능한 한",
    example: "なるべく早く来てください。", exampleReading: "なるべくはやくきてください。", exampleKorean: "나루베쿠 하야쿠 키테쿠다사이", exampleMeaning: "가능한 한 빨리 와 주세요.",
    breakdown: [
      { word: "早く", reading: "はやく", meaning: "빨리" }
    ] },
  { level: "N4", kanji: "できるだけ", reading: "できるだけ", korean: "데키루다케", meaning: "가능한 한",
    example: "できるだけ手伝います。", exampleReading: "できるだけてつだいます。", exampleKorean: "데키루다케 테츠다이마스", exampleMeaning: "할 수 있는 만큼 돕겠습니다.",
    breakdown: [
      { word: "手伝います", reading: "てつだいます", meaning: "돕겠습니다" }
    ] },
  { level: "N4", kanji: "現在", reading: "げんざい", korean: "겐자이", meaning: "현재",
    example: "現在、東京に住んでいます。", exampleReading: "げんざい、とうきょうにすんでいます。", exampleKorean: "겐자이 토-쿄-니 슨데이마스", exampleMeaning: "현재 도쿄에 살고 있습니다.",
    breakdown: [
      { word: "住んでいます", reading: "すんでいます", meaning: "살고 있습니다" }
    ] },
  { level: "N4", kanji: "最近", reading: "さいきん", korean: "사이킨", meaning: "최근",
    example: "最近、忙しいです。", exampleReading: "さいきん、いそがしいです。", exampleKorean: "사이킹 이소가시-데스", exampleMeaning: "최근 바쁩니다.",
    breakdown: [
      { word: "忙しいです", reading: "いそがしいです", meaning: "바쁩니다" }
    ] },
  { level: "N4", kanji: "以前", reading: "いぜん", korean: "이젠", meaning: "이전",
    example: "以前ここに来たことがあります。", exampleReading: "いぜんここにきたことがあります。", exampleKorean: "이젠 코코니 키타 코토가 아리마스", exampleMeaning: "이전에 여기 온 적이 있습니다.",
    breakdown: [
      { word: "来たことがあります", reading: "きたことがあります", meaning: "온 적이 있습니다" }
    ] },
  { level: "N4", kanji: "以来", reading: "いらい", korean: "이라이", meaning: "이래",
    example: "卒業以来、会っていません。", exampleReading: "そつぎょういらい、あっていません。", exampleKorean: "소츠교- 이라이 앗테이마셍", exampleMeaning: "졸업 이래 만나지 않았습니다.",
    breakdown: [
      { word: "卒業", reading: "そつぎょう", meaning: "졸업" }
    ] },
  { level: "N4", kanji: "最初", reading: "さいしょ", korean: "사이쇼", meaning: "최초, 처음",
    example: "最初は難しかったです。", exampleReading: "さいしょはむずかしかったです。", exampleKorean: "사이쇼와 무즈카시캇타데스", exampleMeaning: "처음에는 어려웠습니다.",
    breakdown: [
      { word: "難しかったです", reading: "むずかしかったです", meaning: "어려웠습니다" }
    ] },
  { level: "N4", kanji: "最後", reading: "さいご", korean: "사이고", meaning: "마지막",
    example: "最後まで頑張りました。", exampleReading: "さいごまでがんばりました。", exampleKorean: "사이고마데 감바리마시타", exampleMeaning: "마지막까지 열심히 했습니다.",
    breakdown: [
      { word: "頑張りました", reading: "がんばりました", meaning: "열심히 했습니다" }
    ] },
  { level: "N4", kanji: "途中", reading: "とちゅう", korean: "토츄-", meaning: "도중",
    example: "帰る途中で雨に降られました。", exampleReading: "かえるとちゅうであめにふられました。", exampleKorean: "카에루 토츄-데 아메니 후라레마시타", exampleMeaning: "돌아가는 도중에 비를 맞았습니다.",
    breakdown: [
      { word: "雨に降られました", reading: "あめにふられました", meaning: "비를 맞았습니다 (수동)" }
    ] },
  { level: "N4", kanji: "突然", reading: "とつぜん", korean: "토츠젠", meaning: "갑자기",
    example: "突然、雨が降り出しました。", exampleReading: "とつぜん、あめがふりだしました。", exampleKorean: "토츠젠 아메가 후리다시마시타", exampleMeaning: "갑자기 비가 내리기 시작했습니다.",
    breakdown: [
      { word: "降り出しました", reading: "ふりだしました", meaning: "내리기 시작했습니다" }
    ] },
  { level: "N4", kanji: "偶然", reading: "ぐうぜん", korean: "구-젠", meaning: "우연",
    example: "駅で偶然、先生に会いました。", exampleReading: "えきでぐうぜん、せんせいにあいました。", exampleKorean: "에키데 구-젠 센세-니 아이마시타", exampleMeaning: "역에서 우연히 선생님을 만났습니다.",
    breakdown: [
      { word: "駅で", reading: "えきで", meaning: "역에서" }
    ] },
  { level: "N4", kanji: "案外", reading: "あんがい", korean: "안가이", meaning: "의외로",
    example: "試験は案外簡単でした。", exampleReading: "しけんはあんがいかんたんでした。", exampleKorean: "시켄와 안가이 칸탄데시타", exampleMeaning: "시험은 의외로 간단했습니다.",
    breakdown: [
      { word: "簡単でした", reading: "かんたんでした", meaning: "간단했습니다" }
    ] },
  { level: "N4", kanji: "もし", reading: "もし", korean: "모시", meaning: "만약",
    example: "もし雨が降ったら中止です。", exampleReading: "もしあめがふったらちゅうしです。", exampleKorean: "모시 아메가 훗타라 츄-시데스", exampleMeaning: "만약 비가 오면 중지입니다.",
    breakdown: [
      { word: "降ったら", reading: "ふったら", meaning: "오면" }
    ] },
  { level: "N4", kanji: "たとえ", reading: "たとえ", korean: "타토에", meaning: "비록",
    example: "たとえ失敗しても大丈夫です。", exampleReading: "たとえしっぱいしてもだいじょうぶです。", exampleKorean: "타토에 십파이시테모 다이죠-부데스", exampleMeaning: "비록 실패하더라도 괜찮습니다.",
    breakdown: [
      { word: "失敗しても", reading: "しっぱいしても", meaning: "실패하더라도" }
    ] },
  { level: "N4", kanji: "一応", reading: "いちおう", korean: "이치오-", meaning: "일단",
    example: "一応準備はできています。", exampleReading: "いちおうじゅんびはできています。", exampleKorean: "이치오- 준비와 데키테이마스", exampleMeaning: "일단 준비는 되어 있습니다.",
    breakdown: [
      { word: "準備", reading: "じゅんび", meaning: "준비" }
    ] },
  { level: "N4", kanji: "とにかく", reading: "とにかく", korean: "토니카쿠", meaning: "어쨌든",
    example: "とにかく行ってみましょう。", exampleReading: "とにかくいってみましょう。", exampleKorean: "토니카쿠 잇테미마쇼-", exampleMeaning: "어쨌든 가 봅시다.",
    breakdown: [
      { word: "行ってみましょう", reading: "いってみましょう", meaning: "가 봅시다" }
    ] },
  { level: "N4", kanji: "せっかく", reading: "せっかく", korean: "섹카쿠", meaning: "모처럼",
    example: "せっかく来たのに誰もいません。", exampleReading: "せっかくきたのにだれもいません。", exampleKorean: "섹카쿠 키타노니 다레모 이마셍", exampleMeaning: "모처럼 왔는데 아무도 없습니다.",
    breakdown: [
      { word: "誰も", reading: "だれも", meaning: "아무도" }
    ] },
  { level: "N4", kanji: "わざわざ", reading: "わざわざ", korean: "와자와자", meaning: "일부러",
    example: "わざわざ来てくれてありがとう。", exampleReading: "わざわざきてくれてありがとう。", exampleKorean: "와자와자 키테쿠레테 아리가토-", exampleMeaning: "일부러 와 줘서 고마워요.",
    breakdown: [
      { word: "来てくれて", reading: "きてくれて", meaning: "와 줘서" }
    ] },
  { level: "N4", kanji: "わざと", reading: "わざと", korean: "와자토", meaning: "고의로",
    example: "わざと負けてあげました。", exampleReading: "わざとまけてあげました。", exampleKorean: "와자토 마케테 아게마시타", exampleMeaning: "일부러 져 주었습니다.",
    breakdown: [
      { word: "負けてあげました", reading: "まけてあげました", meaning: "져 주었습니다" }
    ] },
  { level: "N4", kanji: "うっかり", reading: "うっかり", korean: "욱카리", meaning: "무심코",
    example: "うっかり約束を忘れました。", exampleReading: "うっかりやくそくをわすれました。", exampleKorean: "욱카리 야쿠소쿠오 와스레마시타", exampleMeaning: "무심코 약속을 잊었습니다.",
    breakdown: [
      { word: "約束", reading: "やくそく", meaning: "약속" }
    ] },
  { level: "N4", kanji: "思わず", reading: "おもわず", korean: "오모와즈", meaning: "나도 모르게",
    example: "思わず笑ってしまいました。", exampleReading: "おもわずわらってしまいました。", exampleKorean: "오모와즈 와랏테시마이마시타", exampleMeaning: "나도 모르게 웃고 말았습니다.",
    breakdown: [
      { word: "笑ってしまいました", reading: "わらってしまいました", meaning: "웃고 말았습니다" }
    ] },
  { level: "N4", kanji: "まさか", reading: "まさか", korean: "마사카", meaning: "설마",
    example: "まさか彼が来るとは思いませんでした。", exampleReading: "まさかかれがくるとはおもいませんでした。", exampleKorean: "마사카 카레가 쿠루토와 오모이마센데시타", exampleMeaning: "설마 그가 올 줄은 몰랐습니다.",
    breakdown: [
      { word: "来るとは", reading: "くるとは", meaning: "올 줄은" }
    ] },
  { level: "N4", kanji: "やはり", reading: "やはり", korean: "야하리", meaning: "역시",
    example: "やはり彼の言う通りでした。", exampleReading: "やはりかれのいうとおりでした。", exampleKorean: "야하리 카레노 이우 토-리데시타", exampleMeaning: "역시 그의 말대로였습니다.",
    breakdown: [
      { word: "言う通り", reading: "いうとおり", meaning: "말한 대로" }
    ] },

  { level: "N4", kanji: "伝える", reading: "つたえる", korean: "츠타에루", meaning: "전달하다",
    example: "彼にメッセージを伝えました。", exampleReading: "かれにメッセージをつたえました。", exampleKorean: "카레니 멧세-지오 츠타에마시타", exampleMeaning: "그에게 메시지를 전달했습니다.",
    breakdown: [
      { word: "メッセージ", reading: "メッセージ", meaning: "메시지" }
    ] },
  { level: "N4", kanji: "届ける", reading: "とどける", korean: "토도케루", meaning: "보내다, 전달하다",
    example: "荷物を届けてもらいました。", exampleReading: "にもつをとどけてもらいました。", exampleKorean: "니모츠오 토도케테모라이마시타", exampleMeaning: "짐을 배달받았습니다.",
    breakdown: [
      { word: "てもらいました", reading: "てもらいました", meaning: "~해 받았습니다" }
    ] },
  { level: "N4", kanji: "配る", reading: "くばる", korean: "쿠바루", meaning: "나누어주다, 배포하다",
    example: "プリントを配ります。", exampleReading: "プリントをくばります。", exampleKorean: "프린토오 쿠바리마스", exampleMeaning: "프린트를 나누어줍니다.",
    breakdown: [
      { word: "プリント", reading: "プリント", meaning: "프린트, 인쇄물" }
    ] },
  { level: "N4", kanji: "包む", reading: "つつむ", korean: "츠츠무", meaning: "싸다, 포장하다",
    example: "プレゼントをきれいに包みました。", exampleReading: "プレゼントをきれいにつつみました。", exampleKorean: "프레젠토오 키레-니 츠츠미마시타", exampleMeaning: "선물을 예쁘게 포장했습니다.",
    breakdown: [
      { word: "きれいに", reading: "きれいに", meaning: "예쁘게" }
    ] },
  { level: "N4", kanji: "詰める", reading: "つめる", korean: "츠메루", meaning: "채우다, 담다",
    example: "かばんに荷物を詰めます。", exampleReading: "かばんににもつをつめます。", exampleKorean: "카방니 니모츠오 츠메마스", exampleMeaning: "가방에 짐을 담습니다.",
    breakdown: [
      { word: "かばん", reading: "かばん", meaning: "가방" }
    ] },
  { level: "N4", kanji: "並べる", reading: "ならべる", korean: "나라베루", meaning: "나란히 놓다",
    example: "本を棚に並べました。", exampleReading: "ほんをたなにならべました。", exampleKorean: "홍오 타나니 나라베마시타", exampleMeaning: "책을 선반에 나란히 놓았습니다.",
    breakdown: [
      { word: "棚", reading: "たな", meaning: "선반" }
    ] },
  { level: "N4", kanji: "重ねる", reading: "かさねる", korean: "카사네루", meaning: "겹치다, 포개다",
    example: "皿を重ねて置きます。", exampleReading: "さらをかさねておきます。", exampleKorean: "사라오 카사네테 오키마스", exampleMeaning: "접시를 겹쳐서 둡니다.",
    breakdown: [
      { word: "皿", reading: "さら", meaning: "접시" }
    ] },
  { level: "N4", kanji: "曲げる", reading: "まげる", korean: "마게루", meaning: "구부리다",
    example: "膝を曲げてください。", exampleReading: "ひざをまげてください。", exampleKorean: "히자오 마게테쿠다사이", exampleMeaning: "무릎을 구부려 주세요.",
    breakdown: [
      { word: "膝", reading: "ひざ", meaning: "무릎" }
    ] },
  { level: "N4", kanji: "伸ばす", reading: "のばす", korean: "노바스", meaning: "늘리다, 뻗다",
    example: "手を伸ばして取りました。", exampleReading: "てをのばしてとりました。", exampleKorean: "테오 노바시테 토리마시타", exampleMeaning: "손을 뻗어서 잡았습니다.",
    breakdown: [
      { word: "取りました", reading: "とりました", meaning: "잡았습니다" }
    ] },
  { level: "N4", kanji: "縮む", reading: "ちぢむ", korean: "치지무", meaning: "줄어들다",
    example: "洗濯したらシャツが縮みました。", exampleReading: "せんたくしたらシャツがちぢみました。", exampleKorean: "센타쿠시타라 샤츠가 치지미마시타", exampleMeaning: "세탁했더니 셔츠가 줄어들었습니다.",
    breakdown: [
      { word: "洗濯したら", reading: "せんたくしたら", meaning: "세탁했더니" }
    ] },
  { level: "N4", kanji: "安心", reading: "あんしん", korean: "안신", meaning: "안심",
    example: "結果を聞いて安心しました。", exampleReading: "けっかをきいてあんしんしました。", exampleKorean: "켁카오 키이테 안신 시마시타", exampleMeaning: "결과를 듣고 안심했습니다.",
    breakdown: [
      { word: "結果", reading: "けっか", meaning: "결과" }
    ] },
  { level: "N4", kanji: "不安", reading: "ふあん", korean: "후안", meaning: "불안",
    example: "将来に不安を感じます。", exampleReading: "しょうらいにふあんをかんじます。", exampleKorean: "쇼-라이니 후앙오 칸지마스", exampleMeaning: "장래에 불안을 느낍니다.",
    breakdown: [
      { word: "将来", reading: "しょうらい", meaning: "장래" }
    ] },
  { level: "N4", kanji: "幸せ", reading: "しあわせ", korean: "시아와세", meaning: "행복",
    example: "家族と一緒にいると幸せです。", exampleReading: "かぞくといっしょにいるとしあわせです。", exampleKorean: "카조쿠토 잇쇼니 이루토 시아와세데스", exampleMeaning: "가족과 함께 있으면 행복합니다.",
    breakdown: [
      { word: "家族と一緒に", reading: "かぞくといっしょに", meaning: "가족과 함께" }
    ] },
  { level: "N4", kanji: "不幸", reading: "ふこう", korean: "후코-", meaning: "불행",
    example: "不幸な出来事が続きました。", exampleReading: "ふこうなできごとがつづきました。", exampleKorean: "후코-나 데키고토가 츠즈키마시타", exampleMeaning: "불행한 일이 계속되었습니다.",
    breakdown: [
      { word: "出来事", reading: "できごと", meaning: "일, 사건" }
    ] },
  { level: "N4", kanji: "愛", reading: "あい", korean: "아이", meaning: "사랑",
    example: "家族への愛を感じます。", exampleReading: "かぞくへのあいをかんじます。", exampleKorean: "카조쿠에노 아이오 칸지마스", exampleMeaning: "가족에 대한 사랑을 느낍니다.",
    breakdown: [
      { word: "家族への", reading: "かぞくへの", meaning: "가족에 대한" }
    ] },
  { level: "N4", kanji: "恋", reading: "こい", korean: "코이", meaning: "사랑, 연애",
    example: "彼女に恋をしています。", exampleReading: "かのじょにこいをしています。", exampleKorean: "카노죠니 코이오 시테이마스", exampleMeaning: "그녀를 사랑하고 있습니다.",
    breakdown: [
      { word: "彼女に", reading: "かのじょに", meaning: "그녀에게" }
    ] },
  { level: "N4", kanji: "友情", reading: "ゆうじょう", korean: "유-죠-", meaning: "우정",
    example: "二人の友情は続いています。", exampleReading: "ふたりのゆうじょうはつづいています。", exampleKorean: "후타리노 유-죠-와 츠즈이테이마스", exampleMeaning: "두 사람의 우정은 계속되고 있습니다.",
    breakdown: [
      { word: "続いています", reading: "つづいています", meaning: "계속되고 있습니다" }
    ] },
  { level: "N4", kanji: "性別", reading: "せいべつ", korean: "세-베츠", meaning: "성별",
    example: "性別に関係なく応募できます。", exampleReading: "せいべつにかんけいなくおうぼできます。", exampleKorean: "세-베츠니 칸케-나쿠 오-보 데키마스", exampleMeaning: "성별에 관계없이 응모할 수 있습니다.",
    breakdown: [
      { word: "関係なく", reading: "かんけいなく", meaning: "관계없이" }
    ] },
  { level: "N4", kanji: "年齢", reading: "ねんれい", korean: "넨레-", meaning: "연령",
    example: "年齢を教えてください。", exampleReading: "ねんれいをおしえてください。", exampleKorean: "넨레-오 오시에테쿠다사이", exampleMeaning: "나이를 알려 주세요.",
    breakdown: [
      { word: "教えてください", reading: "おしえてください", meaning: "알려 주세요" }
    ] },
  { level: "N4", kanji: "身長", reading: "しんちょう", korean: "신쵸-", meaning: "키, 신장",
    example: "身長を測りました。", exampleReading: "しんちょうをはかりました。", exampleKorean: "신쵸-오 하카리마시타", exampleMeaning: "키를 쟀습니다.",
    breakdown: [
      { word: "測りました", reading: "はかりました", meaning: "쟀습니다" }
    ] },
  { level: "N4", kanji: "体重", reading: "たいじゅう", korean: "타이쥬-", meaning: "체중",
    example: "毎朝、体重を量ります。", exampleReading: "まいあさ、たいじゅうをはかります。", exampleKorean: "마이아사 타이쥬-오 하카리마스", exampleMeaning: "매일 아침 체중을 잽니다.",
    breakdown: [
      { word: "量ります", reading: "はかります", meaning: "잽니다" }
    ] },
  { level: "N4", kanji: "ソファ", reading: "ソファ", korean: "소파", meaning: "소파",
    example: "ソファでテレビを見ます。", exampleReading: "ソファでテレビをみます。", exampleKorean: "소파데 테레비오 미마스", exampleMeaning: "소파에서 텔레비전을 봅니다.",
    breakdown: [
      { word: "テレビ", reading: "テレビ", meaning: "텔레비전" }
    ] },
  { level: "N4", kanji: "テーブル", reading: "テーブル", korean: "테-부루", meaning: "테이블",
    example: "テーブルの上に花があります。", exampleReading: "テーブルのうえにはながあります。", exampleKorean: "테-부루노 우에니 하나가 아리마스", exampleMeaning: "테이블 위에 꽃이 있습니다.",
    breakdown: [
      { word: "花", reading: "はな", meaning: "꽃" }
    ] },
  { level: "N4", kanji: "棚", reading: "たな", korean: "타나", meaning: "선반",
    example: "棚から本を取りました。", exampleReading: "たなからほんをとりました。", exampleKorean: "타나카라 홍오 토리마시타", exampleMeaning: "선반에서 책을 꺼냈습니다.",
    breakdown: [
      { word: "取りました", reading: "とりました", meaning: "꺼냈습니다" }
    ] },
  { level: "N4", kanji: "ロッカー", reading: "ロッカー", korean: "록카-", meaning: "로커",
    example: "荷物をロッカーに入れました。", exampleReading: "にもつをロッカーにいれました。", exampleKorean: "니모츠오 록카-니 이레마시타", exampleMeaning: "짐을 로커에 넣었습니다.",
    breakdown: [
      { word: "入れました", reading: "いれました", meaning: "넣었습니다" }
    ] },
  { level: "N4", kanji: "布団", reading: "ふとん", korean: "후통", meaning: "이불",
    example: "布団を干しました。", exampleReading: "ふとんをほしました。", exampleKorean: "후통오 호시마시타", exampleMeaning: "이불을 널었습니다.",
    breakdown: [
      { word: "干しました", reading: "ほしました", meaning: "널었습니다" }
    ] },
  { level: "N4", kanji: "枕", reading: "まくら", korean: "마쿠라", meaning: "베개",
    example: "新しい枕を買いました。", exampleReading: "あたらしいまくらをかいました。", exampleKorean: "아타라시- 마쿠라오 카이마시타", exampleMeaning: "새 베개를 샀습니다.",
    breakdown: [
      { word: "新しい", reading: "あたらしい", meaning: "새롭다" }
    ] },
  { level: "N4", kanji: "カーテン", reading: "カーテン", korean: "카-텐", meaning: "커튼",
    example: "カーテンを閉めます。", exampleReading: "カーテンをしめます。", exampleKorean: "카-텐오 시메마스", exampleMeaning: "커튼을 닫습니다.",
    breakdown: [
      { word: "閉めます", reading: "しめます", meaning: "닫습니다" }
    ] },
  { level: "N4", kanji: "玄関", reading: "げんかん", korean: "겐칸", meaning: "현관",
    example: "玄関で靴を脱ぎます。", exampleReading: "げんかんでくつをぬぎます。", exampleKorean: "겐칸데 쿠츠오 누기마스", exampleMeaning: "현관에서 신발을 벗습니다.",
    breakdown: [
      { word: "脱ぎます", reading: "ぬぎます", meaning: "벗습니다" }
    ] },
  { level: "N4", kanji: "出勤", reading: "しゅっきん", korean: "슉킨", meaning: "출근",
    example: "九時に出勤します。", exampleReading: "くじにしゅっきんします。", exampleKorean: "쿠지니 슉킨 시마스", exampleMeaning: "9시에 출근합니다.",
    breakdown: [
      { word: "九時に", reading: "くじに", meaning: "9시에" }
    ] },
  { level: "N4", kanji: "退勤", reading: "たいきん", korean: "타이킨", meaning: "퇴근",
    example: "六時に退勤します。", exampleReading: "ろくじにたいきんします。", exampleKorean: "로쿠지니 타이킨 시마스", exampleMeaning: "6시에 퇴근합니다.",
    breakdown: [
      { word: "六時に", reading: "ろくじに", meaning: "6시에" }
    ] },
  { level: "N4", kanji: "通勤", reading: "つうきん", korean: "츠-킨", meaning: "통근",
    example: "電車で通勤しています。", exampleReading: "でんしゃでつうきんしています。", exampleKorean: "덴샤데 츠-킨 시테이마스", exampleMeaning: "전철로 통근하고 있습니다.",
    breakdown: [
      { word: "電車で", reading: "でんしゃで", meaning: "전철로" }
    ] },
  { level: "N4", kanji: "勤務", reading: "きんむ", korean: "킨무", meaning: "근무",
    example: "平日は勤務しています。", exampleReading: "へいじつはきんむしています。", exampleKorean: "헤-지츠와 킨무 시테이마스", exampleMeaning: "평일은 근무하고 있습니다.",
    breakdown: [
      { word: "平日は", reading: "へいじつは", meaning: "평일은" }
    ] },
  { level: "N4", kanji: "出社", reading: "しゅっしゃ", korean: "슛샤", meaning: "출근 (회사)",
    example: "早めに出社しました。", exampleReading: "はやめにしゅっしゃしました。", exampleKorean: "하야메니 슛샤 시마시타", exampleMeaning: "일찍 출근했습니다.",
    breakdown: [
      { word: "早めに", reading: "はやめに", meaning: "일찍" }
    ] },
  { level: "N4", kanji: "退社", reading: "たいしゃ", korean: "타이샤", meaning: "퇴근, 퇴사",
    example: "五年前に退社しました。", exampleReading: "ごねんまえにたいしゃしました。", exampleKorean: "고넨마에니 타이샤 시마시타", exampleMeaning: "5년 전에 퇴사했습니다.",
    breakdown: [
      { word: "五年前に", reading: "ごねんまえに", meaning: "5년 전에" }
    ] },
  { level: "N4", kanji: "休暇", reading: "きゅうか", korean: "큐-카", meaning: "휴가",
    example: "来週、休暇を取ります。", exampleReading: "らいしゅう、きゅうかをとります。", exampleKorean: "라이슈- 큐-카오 토리마스", exampleMeaning: "다음 주 휴가를 냅니다.",
    breakdown: [
      { word: "取ります", reading: "とります", meaning: "냅니다 (휴가를 취합니다)" }
    ] },
  { level: "N4", kanji: "定時", reading: "ていじ", korean: "테-지", meaning: "정시",
    example: "今日は定時に帰ります。", exampleReading: "きょうはていじにかえります。", exampleKorean: "쿄-와 테-지니 카에리마스", exampleMeaning: "오늘은 정시에 돌아갑니다.",
    breakdown: [
      { word: "帰ります", reading: "かえります", meaning: "돌아갑니다" }
    ] },
  { level: "N4", kanji: "早退", reading: "そうたい", korean: "소-타이", meaning: "조퇴",
    example: "気分が悪くて早退しました。", exampleReading: "きぶんがわるくてそうたいしました。", exampleKorean: "키붕가 와루쿠테 소-타이 시마시타", exampleMeaning: "컨디션이 안 좋아서 조퇴했습니다.",
    breakdown: [
      { word: "気分が悪くて", reading: "きぶんがわるくて", meaning: "컨디션이 안 좋아서" }
    ] },
  { level: "N4", kanji: "欠勤", reading: "けっきん", korean: "켁킨", meaning: "결근",
    example: "病気で欠勤しました。", exampleReading: "びょうきでけっきんしました。", exampleKorean: "뵤-키데 켁킨 시마시타", exampleMeaning: "병으로 결근했습니다.",
    breakdown: [
      { word: "病気で", reading: "びょうきで", meaning: "병으로" }
    ] },
  { level: "N4", kanji: "ボーナス", reading: "ボーナス", korean: "보-나스", meaning: "보너스",
    example: "冬にボーナスが出ます。", exampleReading: "ふゆにボーナスがでます。", exampleKorean: "후유니 보-나스가 데마스", exampleMeaning: "겨울에 보너스가 나옵니다.",
    breakdown: [
      { word: "出ます", reading: "でます", meaning: "나옵니다" }
    ] },
  { level: "N4", kanji: "昇格", reading: "しょうかく", korean: "쇼-카쿠", meaning: "승격",
    example: "部長に昇格しました。", exampleReading: "ぶちょうにしょうかくしました。", exampleKorean: "부쵸-니 쇼-카쿠 시마시타", exampleMeaning: "부장으로 승격했습니다.",
    breakdown: [
      { word: "部長", reading: "ぶちょう", meaning: "부장" }
    ] },
  { level: "N4", kanji: "降格", reading: "こうかく", korean: "코-카쿠", meaning: "강등",
    example: "彼は降格されました。", exampleReading: "かれはこうかくされました。", exampleKorean: "카레와 코-카쿠 사레마시타", exampleMeaning: "그는 강등되었습니다.",
    breakdown: [
      { word: "彼は", reading: "かれは", meaning: "그는" }
    ] },
  { level: "N4", kanji: "異動", reading: "いどう", korean: "이도-", meaning: "인사이동",
    example: "来月、異動になりました。", exampleReading: "らいげつ、いどうになりました。", exampleKorean: "라이게츠 이도-니 나리마시타", exampleMeaning: "다음 달 인사이동이 되었습니다.",
    breakdown: [
      { word: "来月", reading: "らいげつ", meaning: "다음 달" }
    ] },
  { level: "N4", kanji: "配属", reading: "はいぞく", korean: "하이조쿠", meaning: "배속",
    example: "営業部に配属されました。", exampleReading: "えいぎょうぶにはいぞくされました。", exampleKorean: "에-교-부니 하이조쿠 사레마시타", exampleMeaning: "영업부에 배속되었습니다.",
    breakdown: [
      { word: "営業部", reading: "えいぎょうぶ", meaning: "영업부" }
    ] },
  { level: "N4", kanji: "出向", reading: "しゅっこう", korean: "슉코-", meaning: "파견, 전출",
    example: "子会社に出向しています。", exampleReading: "こがいしゃにしゅっこうしています。", exampleKorean: "코가이샤니 슉코- 시테이마스", exampleMeaning: "자회사에 파견 중입니다.",
    breakdown: [
      { word: "子会社", reading: "こがいしゃ", meaning: "자회사" }
    ] },
  { level: "N4", kanji: "転勤", reading: "てんきん", korean: "텐킨", meaning: "전근",
    example: "大阪に転勤することになりました。", exampleReading: "おおさかにてんきんすることになりました。", exampleKorean: "오-사카니 텐킨스루 코토니 나리마시타", exampleMeaning: "오사카로 전근가게 되었습니다.",
    breakdown: [
      { word: "大阪に", reading: "おおさかに", meaning: "오사카로" }
    ] },
  { level: "N4", kanji: "赴任", reading: "ふにん", korean: "후닌", meaning: "부임",
    example: "海外に赴任します。", exampleReading: "かいがいにふにんします。", exampleKorean: "카이가이니 후닌 시마스", exampleMeaning: "해외로 부임합니다.",
    breakdown: [
      { word: "海外に", reading: "かいがいに", meaning: "해외로" }
    ] },
  { level: "N4", kanji: "引き継ぐ", reading: "ひきつぐ", korean: "히키츠구", meaning: "인계하다",
    example: "仕事を後任に引き継ぎました。", exampleReading: "しごとをこうにんにひきつぎました。", exampleKorean: "시고토오 코-닌니 히키츠기마시타", exampleMeaning: "일을 후임에게 인계했습니다.",
    breakdown: [
      { word: "後任", reading: "こうにん", meaning: "후임" }
    ] },
  { level: "N4", kanji: "引き受ける", reading: "ひきうける", korean: "히키우케루", meaning: "맡다, 인수하다",
    example: "その仕事を引き受けました。", exampleReading: "そのしごとをひきうけました。", exampleKorean: "소노 시고토오 히키우케마시타", exampleMeaning: "그 일을 맡았습니다.",
    breakdown: [
      { word: "仕事", reading: "しごと", meaning: "일" }
    ] },
  { level: "N4", kanji: "有給", reading: "ゆうきゅう", korean: "유-큐-", meaning: "유급휴가",
    example: "有給を使って旅行します。", exampleReading: "ゆうきゅうをつかってりょこうします。", exampleKorean: "유-큐-오 츠캇테 료코- 시마스", exampleMeaning: "유급휴가를 써서 여행합니다.",
    breakdown: [
      { word: "使って", reading: "つかって", meaning: "써서" }
    ] },
  { level: "N4", kanji: "足りる", reading: "たりる", korean: "타리루", meaning: "충분하다, 족하다",
    example: "お金が足りません。", exampleReading: "おかねがたりません。", exampleKorean: "오카네가 타리마셍", exampleMeaning: "돈이 부족합니다.",
    breakdown: [
      { word: "お金", reading: "おかね", meaning: "돈" }
    ] },
  { level: "N4", kanji: "余る", reading: "あまる", korean: "아마루", meaning: "남다",
    example: "時間が余りました。", exampleReading: "じかんがあまりました。", exampleKorean: "지캉가 아마리마시타", exampleMeaning: "시간이 남았습니다.",
    breakdown: [
      { word: "時間", reading: "じかん", meaning: "시간" }
    ] },
  { level: "N4", kanji: "足す", reading: "たす", korean: "타스", meaning: "더하다",
    example: "砂糖を少し足してください。", exampleReading: "さとうをすこしたしてください。", exampleKorean: "사토-오 스코시 타시테 쿠다사이", exampleMeaning: "설탕을 조금 더해 주세요.",
    breakdown: [
      { word: "少し", reading: "すこし", meaning: "조금" }
    ] },
  { level: "N4", kanji: "近づく", reading: "ちかづく", korean: "치카즈쿠", meaning: "가까워지다",
    example: "台風が近づいています。", exampleReading: "たいふうがちかづいています。", exampleKorean: "타이후-가 치카즈이테 이마스", exampleMeaning: "태풍이 가까워지고 있습니다.",
    breakdown: [
      { word: "台風", reading: "たいふう", meaning: "태풍" }
    ] },
  { level: "N4", kanji: "計算", reading: "けいさん", korean: "케-산", meaning: "계산",
    example: "計算が合いません。", exampleReading: "けいさんがあいません。", exampleKorean: "케-상가 아이마셍", exampleMeaning: "계산이 맞지 않습니다.",
    breakdown: [
      { word: "合いません", reading: "あいません", meaning: "맞지 않습니다" }
    ] },
  { level: "N4", kanji: "違い", reading: "ちがい", korean: "치가이", meaning: "차이",
    example: "二つの意見に違いがあります。", exampleReading: "ふたつのいけんにちがいがあります。", exampleKorean: "후타츠노 이켄니 치가이가 아리마스", exampleMeaning: "두 의견에 차이가 있습니다.",
    breakdown: [
      { word: "意見", reading: "いけん", meaning: "의견" }
    ] },
  { level: "N4", kanji: "共通", reading: "きょうつう", korean: "쿄-츠-", meaning: "공통",
    example: "二人には共通の趣味があります。", exampleReading: "ふたりにはきょうつうのしゅみがあります。", exampleKorean: "후타리니와 쿄-츠-노 슈미가 아리마스", exampleMeaning: "두 사람에게는 공통의 취미가 있습니다.",
    breakdown: [
      { word: "趣味", reading: "しゅみ", meaning: "취미" }
    ] },
  { level: "N4", kanji: "似る", reading: "にる", korean: "니루", meaning: "닮다",
    example: "兄は父によく似ています。", exampleReading: "あにはちちによくにています。", exampleKorean: "아니와 치치니 요쿠 니테 이마스", exampleMeaning: "형은 아버지를 많이 닮았습니다.",
    breakdown: [
      { word: "よく", reading: "よく", meaning: "많이, 잘" }
    ] },
  { level: "N4", kanji: "似合う", reading: "にあう", korean: "니아우", meaning: "어울리다",
    example: "その色はあなたによく似合います。", exampleReading: "そのいろはあなたによくにあいます。", exampleKorean: "소노 이로와 아나타니 요쿠 니아이마스", exampleMeaning: "그 색은 당신에게 잘 어울립니다.",
    breakdown: [
      { word: "色", reading: "いろ", meaning: "색" }
    ] },
  { level: "N4", kanji: "合わせる", reading: "あわせる", korean: "아와세루", meaning: "맞추다",
    example: "時計を正しい時間に合わせました。", exampleReading: "とけいをただしいじかんにあわせました。", exampleKorean: "토케이오 타다시- 지칸니 아와세마시타", exampleMeaning: "시계를 정확한 시간에 맞췄습니다.",
    breakdown: [
      { word: "正しい", reading: "ただしい", meaning: "정확한, 올바른" }
    ] },
  { level: "N4", kanji: "分ける", reading: "わける", korean: "와케루", meaning: "나누다",
    example: "ケーキを四つに分けました。", exampleReading: "ケーキをよっつにわけました。", exampleKorean: "케-키오 욧츠니 와케마시타", exampleMeaning: "케이크를 네 개로 나눴습니다.",
    breakdown: [
      { word: "四つ", reading: "よっつ", meaning: "네 개" }
    ] },
  { level: "N4", kanji: "分かれる", reading: "わかれる", korean: "와카레루", meaning: "나뉘다",
    example: "意見が二つに分かれました。", exampleReading: "いけんがふたつにわかれました。", exampleKorean: "이켕가 후타츠니 와카레마시타", exampleMeaning: "의견이 둘로 나뉘었습니다.",
    breakdown: [
      { word: "意見", reading: "いけん", meaning: "의견" }
    ] },
  { level: "N4", kanji: "組む", reading: "くむ", korean: "쿠무", meaning: "짜다, 조합하다",
    example: "チームを組んで作業します。", exampleReading: "チームをくんでさぎょうします。", exampleKorean: "치-무오 쿤데 사교- 시마스", exampleMeaning: "팀을 짜서 작업합니다.",
    breakdown: [
      { word: "作業", reading: "さぎょう", meaning: "작업" }
    ] },
  { level: "N4", kanji: "組み立てる", reading: "くみたてる", korean: "쿠미타테루", meaning: "조립하다",
    example: "家具を自分で組み立てました。", exampleReading: "かぐをじぶんでくみたてました。", exampleKorean: "카구오 지분데 쿠미타테마시타", exampleMeaning: "가구를 직접 조립했습니다.",
    breakdown: [
      { word: "自分で", reading: "じぶんで", meaning: "직접, 스스로" }
    ] },
  { level: "N4", kanji: "壊す", reading: "こわす", korean: "코와스", meaning: "부수다, 고장 내다",
    example: "おもちゃを壊してしまいました。", exampleReading: "おもちゃをこわしてしまいました。", exampleKorean: "오모차오 코와시테 시마이마시타", exampleMeaning: "장난감을 고장 내 버렸습니다.",
    breakdown: [
      { word: "おもちゃ", reading: "おもちゃ", meaning: "장난감" }
    ] },
  { level: "N4", kanji: "割れる", reading: "われる", korean: "와레루", meaning: "깨지다",
    example: "皿が割れてしまいました。", exampleReading: "さらがわれてしまいました。", exampleKorean: "사라가 와레테 시마이마시타", exampleMeaning: "접시가 깨져 버렸습니다.",
    breakdown: [
      { word: "皿", reading: "さら", meaning: "접시" }
    ] },
  { level: "N4", kanji: "割る", reading: "わる", korean: "와루", meaning: "나누다, 깨다",
    example: "卵を割ってください。", exampleReading: "たまごをわってください。", exampleKorean: "타마고오 왓테 쿠다사이", exampleMeaning: "계란을 깨 주세요.",
    breakdown: [
      { word: "卵", reading: "たまご", meaning: "계란" }
    ] },
  { level: "N4", kanji: "折れる", reading: "おれる", korean: "오레루", meaning: "부러지다, 접히다",
    example: "鉛筆の芯が折れました。", exampleReading: "えんぴつのしんがおれました。", exampleKorean: "엔피츠노 신가 오레마시타", exampleMeaning: "연필심이 부러졌습니다.",
    breakdown: [
      { word: "鉛筆", reading: "えんぴつ", meaning: "연필" }
    ] },
  { level: "N4", kanji: "折る", reading: "おる", korean: "오루", meaning: "접다, 부러뜨리다",
    example: "紙を半分に折りました。", exampleReading: "かみをはんぶんにおりました。", exampleKorean: "카미오 함분니 오리마시타", exampleMeaning: "종이를 반으로 접었습니다.",
    breakdown: [
      { word: "半分", reading: "はんぶん", meaning: "반" }
    ] },
  { level: "N4", kanji: "向く", reading: "むく", korean: "무쿠", meaning: "향하다",
    example: "窓の方を向いてください。", exampleReading: "まどのほうをむいてください。", exampleKorean: "마도노 호-오 무이테 쿠다사이", exampleMeaning: "창문 쪽을 향해 주세요.",
    breakdown: [
      { word: "窓の方", reading: "まどのほう", meaning: "창문 쪽" }
    ] },
  { level: "N4", kanji: "まっすぐ", reading: "まっすぐ", korean: "맛스구", meaning: "곧장, 똑바로",
    example: "まっすぐ行くと駅があります。", exampleReading: "まっすぐいくとえきがあります。", exampleKorean: "맛스구 이쿠토 에키가 아리마스", exampleMeaning: "곧장 가면 역이 있습니다.",
    breakdown: [
      { word: "行くと", reading: "いくと", meaning: "가면" }
    ] },
  { level: "N4", kanji: "横断歩道", reading: "おうだんほどう", korean: "오-단호도-", meaning: "횡단보도",
    example: "横断歩道を渡りましょう。", exampleReading: "おうだんほどうをわたりましょう。", exampleKorean: "오-단호도-오 와타리마쇼-", exampleMeaning: "횡단보도를 건넙시다.",
    breakdown: [
      { word: "渡りましょう", reading: "わたりましょう", meaning: "건넙시다" }
    ] },
  { level: "N4", kanji: "向ける", reading: "むける", korean: "무케루", meaning: "향하게 하다, 돌리다",
    example: "カメラをこちらに向けてください。", exampleReading: "カメラをこちらにむけてください。", exampleKorean: "카메라오 코치라니 무케테 쿠다사이", exampleMeaning: "카메라를 이쪽으로 돌려 주세요.",
    breakdown: [
      { word: "こちらに", reading: "こちらに", meaning: "이쪽으로" }
    ] },
  { level: "N4", kanji: "歩道", reading: "ほどう", korean: "호도-", meaning: "인도",
    example: "歩道を自転車で走らないでください。", exampleReading: "ほどうをじてんしゃではしらないでください。", exampleKorean: "호도-오 지텐샤데 하시라나이데 쿠다사이", exampleMeaning: "인도에서 자전거로 달리지 마세요.",
    breakdown: [
      { word: "自転車で", reading: "じてんしゃで", meaning: "자전거로" }
    ] },
  { level: "N4", kanji: "踏切", reading: "ふみきり", korean: "후미키리", meaning: "건널목",
    example: "踏切の前で電車を待ちました。", exampleReading: "ふみきりのまえででんしゃをまちました。", exampleKorean: "후미키리노 마에데 덴샤오 마치마시타", exampleMeaning: "건널목 앞에서 전차를 기다렸습니다.",
    breakdown: [
      { word: "電車", reading: "でんしゃ", meaning: "전차" }
    ] },
  { level: "N4", kanji: "進む", reading: "すすむ", korean: "스스무", meaning: "나아가다, 진행되다",
    example: "工事は順調に進んでいます。", exampleReading: "こうじはじゅんちょうにすすんでいます。", exampleKorean: "코-지와 준쵸-니 스슨데 이마스", exampleMeaning: "공사는 순조롭게 진행되고 있습니다.",
    breakdown: [
      { word: "順調に", reading: "じゅんちょうに", meaning: "순조롭게" }
    ] },
  { level: "N4", kanji: "戻す", reading: "もどす", korean: "모도스", meaning: "되돌리다",
    example: "本を棚に戻してください。", exampleReading: "ほんをたなにもどしてください。", exampleKorean: "홍오 타나니 모도시테 쿠다사이", exampleMeaning: "책을 선반에 되돌려 놓아 주세요.",
    breakdown: [
      { word: "棚", reading: "たな", meaning: "선반" }
    ] },
  { level: "N4", kanji: "過ぎる", reading: "すぎる", korean: "스기루", meaning: "지나다, 초과하다",
    example: "もう十二時を過ぎました。", exampleReading: "もうじゅうにじをすぎました。", exampleKorean: "모- 쥬-니지오 스기마시타", exampleMeaning: "벌써 12시를 지났습니다.",
    breakdown: [
      { word: "もう", reading: "もう", meaning: "벌써" }
    ] },
  { level: "N4", kanji: "越える", reading: "こえる", korean: "코에루", meaning: "넘다",
    example: "参加者が百人を越えました。", exampleReading: "さんかしゃがひゃくにんをこえました。", exampleKorean: "상카샤가 햐쿠닌오 코에마시타", exampleMeaning: "참가자가 100명을 넘었습니다.",
    breakdown: [
      { word: "参加者", reading: "さんかしゃ", meaning: "참가자" }
    ] },
  { level: "N4", kanji: "追いつく", reading: "おいつく", korean: "오이츠쿠", meaning: "따라잡다",
    example: "走って前の人に追いつきました。", exampleReading: "はしってまえのひとにおいつきました。", exampleKorean: "하싯테 마에노 히토니 오이츠키마시타", exampleMeaning: "뛰어서 앞사람을 따라잡았습니다.",
    breakdown: [
      { word: "前の人", reading: "まえのひと", meaning: "앞사람" }
    ] },
  { level: "N4", kanji: "追い越す", reading: "おいこす", korean: "오이코스", meaning: "추월하다",
    example: "右側から車を追い越しました。", exampleReading: "みぎがわからくるまをおいこしました。", exampleKorean: "미기가와카라 쿠루마오 오이코시마시타", exampleMeaning: "오른쪽에서 차를 추월했습니다.",
    breakdown: [
      { word: "右側から", reading: "みぎがわから", meaning: "오른쪽에서" }
    ] },
  { level: "N4", kanji: "急ぐ", reading: "いそぐ", korean: "이소구", meaning: "서두르다",
    example: "遅れそうなので急ぎましょう。", exampleReading: "おくれそうなのでいそぎましょう。", exampleKorean: "오쿠레소-나노데 이소기마쇼-", exampleMeaning: "늦을 것 같으니 서두릅시다.",
    breakdown: [
      { word: "遅れそう", reading: "おくれそう", meaning: "늦을 것 같음" }
    ] },
  { level: "N4", kanji: "慌てる", reading: "あわてる", korean: "아와테루", meaning: "당황하다",
    example: "急に聞かれて慌ててしまいました。", exampleReading: "きゅうにきかれてあわててしまいました。", exampleKorean: "큐-니 키카레테 아와테테 시마이마시타", exampleMeaning: "갑자기 질문을 받아서 당황해 버렸습니다.",
    breakdown: [
      { word: "急に", reading: "きゅうに", meaning: "갑자기" }
    ] },
  { level: "N4", kanji: "落ち着く", reading: "おちつく", korean: "오치츠쿠", meaning: "안정되다, 침착하다",
    example: "深呼吸して落ち着きましょう。", exampleReading: "しんこきゅうしておちつきましょう。", exampleKorean: "싱코큐-시테 오치츠키마쇼-", exampleMeaning: "심호흡하고 진정합시다.",
    breakdown: [
      { word: "深呼吸して", reading: "しんこきゅうして", meaning: "심호흡하고" }
    ] },
  { level: "N4", kanji: "緊張する", reading: "きんちょうする", korean: "킨쵸-스루", meaning: "긴장하다",
    example: "面接でとても緊張しました。", exampleReading: "めんせつでとてもきんちょうしました。", exampleKorean: "멘세츠데 토테모 킨쵸- 시마시타", exampleMeaning: "면접에서 매우 긴장했습니다.",
    breakdown: [
      { word: "面接", reading: "めんせつ", meaning: "면접" }
    ] },
  { level: "N4", kanji: "リラックスする", reading: "リラックスする", korean: "리랏쿠스스루", meaning: "릴랙스하다, 편히 쉬다",
    example: "お風呂に入ってリラックスします。", exampleReading: "おふろにはいってリラックスします。", exampleKorean: "오후로니 하잇테 리랏쿠스 시마스", exampleMeaning: "목욕을 하고 편히 쉽니다.",
    breakdown: [
      { word: "お風呂に入って", reading: "おふろにはいって", meaning: "목욕을 하고" }
    ] },
  { level: "N4", kanji: "支度", reading: "したく", korean: "시타쿠", meaning: "준비",
    example: "出かける支度をしています。", exampleReading: "でかけるしたくをしています。", exampleKorean: "데카케루 시타쿠오 시테 이마스", exampleMeaning: "외출 준비를 하고 있습니다.",
    breakdown: [
      { word: "出かける", reading: "でかける", meaning: "외출하다" }
    ] },
  { level: "N4", kanji: "片付ける", reading: "かたづける", korean: "카타즈케루", meaning: "정리하다",
    example: "部屋を片付けなければなりません。", exampleReading: "へやをかたづけなければなりません。", exampleKorean: "헤야오 카타즈케나케레바 나리마셍", exampleMeaning: "방을 정리해야 합니다.",
    breakdown: [
      { word: "部屋", reading: "へや", meaning: "방" }
    ] },
  { level: "N4", kanji: "散らかる", reading: "ちらかる", korean: "치라카루", meaning: "흩어지다, 어지러지다",
    example: "部屋が散らかっています。", exampleReading: "へやがちらかっています。", exampleKorean: "헤야가 치라캇테 이마스", exampleMeaning: "방이 어질러져 있습니다.",
    breakdown: [
      { word: "部屋", reading: "へや", meaning: "방" }
    ] },
  { level: "N4", kanji: "下げる", reading: "さげる", korean: "사게루", meaning: "낮추다, 내리다",
    example: "エアコンの温度を下げました。", exampleReading: "エアコンのおんどをさげました。", exampleKorean: "에아콘노 온도오 사게마시타", exampleMeaning: "에어컨 온도를 낮췄습니다.",
    breakdown: [
      { word: "温度", reading: "おんど", meaning: "온도" }
    ] },
  { level: "N4", kanji: "整える", reading: "ととのえる", korean: "토토노에루", meaning: "정돈하다",
    example: "服装を整えてから出かけます。", exampleReading: "ふくそうをととのえてからでかけます。", exampleKorean: "후쿠소-오 토토노에테카라 데카케마스", exampleMeaning: "복장을 정돈하고 나서 외출합니다.",
    breakdown: [
      { word: "服装", reading: "ふくそう", meaning: "복장" }
    ] },
  { level: "N4", kanji: "しまう", reading: "しまう", korean: "시마우", meaning: "넣다, 치우다",
    example: "使った道具を元の場所にしまいました。", exampleReading: "つかったどうぐをもとのばしょにしまいました。", exampleKorean: "츠캇타 도-구오 모토노 바쇼니 시마이마시타", exampleMeaning: "사용한 도구를 원래 자리에 치웠습니다.",
    breakdown: [
      { word: "元の場所", reading: "もとのばしょ", meaning: "원래 자리" }
    ] },
  { level: "N4", kanji: "出す", reading: "だす", korean: "다스", meaning: "꺼내다, 내다",
    example: "引き出しから書類を出しました。", exampleReading: "ひきだしからしょるいをだしました。", exampleKorean: "히키다시카라 쇼루이오 다시마시타", exampleMeaning: "서랍에서 서류를 꺼냈습니다.",
    breakdown: [
      { word: "引き出し", reading: "ひきだし", meaning: "서랍" }
    ] },
  { level: "N4", kanji: "入れる", reading: "いれる", korean: "이레루", meaning: "넣다",
    example: "カバンに教科書を入れました。", exampleReading: "カバンにきょうかしょをいれました。", exampleKorean: "카방니 쿄-카쇼오 이레마시타", exampleMeaning: "가방에 교과서를 넣었습니다.",
    breakdown: [
      { word: "教科書", reading: "きょうかしょ", meaning: "교과서" }
    ] },
  { level: "N4", kanji: "取り出す", reading: "とりだす", korean: "토리다스", meaning: "꺼내다",
    example: "ポケットから鍵を取り出しました。", exampleReading: "ポケットからかぎをとりだしました。", exampleKorean: "포켓토카라 카기오 토리다시마시타", exampleMeaning: "주머니에서 열쇠를 꺼냈습니다.",
    breakdown: [
      { word: "ポケット", reading: "ポケット", meaning: "주머니" }
    ] },
  { level: "N4", kanji: "取り替える", reading: "とりかえる", korean: "토리카에루", meaning: "교체하다",
    example: "電池を新しいものに取り替えました。", exampleReading: "でんちをあたらしいものにとりかえました。", exampleKorean: "덴치오 아타라시- 모노니 토리카에마시타", exampleMeaning: "건전지를 새것으로 교체했습니다.",
    breakdown: [
      { word: "電池", reading: "でんち", meaning: "건전지" }
    ] },
  { level: "N4", kanji: "取り消す", reading: "とりけす", korean: "토리케스", meaning: "취소하다",
    example: "予約を取り消しました。", exampleReading: "よやくをとりけしました。", exampleKorean: "요야쿠오 토리케시마시타", exampleMeaning: "예약을 취소했습니다.",
    breakdown: [
      { word: "予約", reading: "よやく", meaning: "예약" }
    ] },
  { level: "N4", kanji: "繰り返す", reading: "くりかえす", korean: "쿠리카에스", meaning: "반복하다",
    example: "同じ間違いを繰り返さないでください。", exampleReading: "おなじまちがいをくりかえさないでください。", exampleKorean: "오나지 마치가이오 쿠리카에사나이데 쿠다사이", exampleMeaning: "같은 실수를 반복하지 마세요.",
    breakdown: [
      { word: "間違い", reading: "まちがい", meaning: "실수, 잘못" }
    ] },
  { level: "N4", kanji: "続く", reading: "つづく", korean: "츠즈쿠", meaning: "계속되다",
    example: "雨は明日も続くでしょう。", exampleReading: "あめはあしたもつづくでしょう。", exampleKorean: "아메와 아시타모 츠즈쿠데쇼-", exampleMeaning: "비는 내일도 계속될 것입니다.",
    breakdown: [
      { word: "明日も", reading: "あしたも", meaning: "내일도" }
    ] },
  { level: "N4", kanji: "上げる", reading: "あげる", korean: "아게루", meaning: "올리다",
    example: "エアコンの温度を上げてください。", exampleReading: "エアコンのおんどをあげてください。", exampleKorean: "에아콘노 온도오 아게테 쿠다사이", exampleMeaning: "에어컨 온도를 올려 주세요.",
    breakdown: [
      { word: "温度", reading: "おんど", meaning: "온도" }
    ] },
  { level: "N4", kanji: "予報", reading: "よほう", korean: "요호-", meaning: "예보",
    example: "天気予報を確認しました。", exampleReading: "てんきよほうをかくにんしました。", exampleKorean: "텐키요호-오 카쿠닌시마시타", exampleMeaning: "일기예보를 확인했습니다.",
    breakdown: [
      { word: "確認", reading: "かくにん", meaning: "확인" }
    ] },
  { level: "N4", kanji: "湿度", reading: "しつど", korean: "시츠도", meaning: "습도",
    example: "今日は湿度が高いです。", exampleReading: "きょうはしつどがたかいです。", exampleKorean: "쿄-와 시츠도가 타카이데스", exampleMeaning: "오늘은 습도가 높습니다.",
    breakdown: [
      { word: "高い", reading: "たかい", meaning: "높다" }
    ] },
  { level: "N4", kanji: "涼む", reading: "すずむ", korean: "스즈무", meaning: "시원한 바람을 쐬다",
    example: "木の下で涼みました。", exampleReading: "きのしたですずみました。", exampleKorean: "키노 시타데 스즈미마시타", exampleMeaning: "나무 아래에서 바람을 쐬었습니다.",
    breakdown: [
      { word: "木の下", reading: "きのした", meaning: "나무 아래" }
    ] },
  { level: "N4", kanji: "冷える", reading: "ひえる", korean: "히에루", meaning: "차가워지다",
    example: "夜になると冷えます。", exampleReading: "よるになるとひえます。", exampleKorean: "요루니 나루토 히에마스", exampleMeaning: "밤이 되면 차가워집니다.",
    breakdown: [
      { word: "夜", reading: "よる", meaning: "밤" }
    ] },
  { level: "N4", kanji: "沸騰", reading: "ふっとう", korean: "훗토-", meaning: "비등, 끓음",
    example: "お湯が沸騰しました。", exampleReading: "おゆがふっとうしました。", exampleKorean: "오유가 훗토- 시마시타", exampleMeaning: "물이 끓었습니다.",
    breakdown: [
      { word: "お湯", reading: "おゆ", meaning: "뜨거운 물" }
    ] },
  { level: "N4", kanji: "味付け", reading: "あじつけ", korean: "아지츠케", meaning: "간, 양념",
    example: "塩で味付けをしました。", exampleReading: "しおであじつけをしました。", exampleKorean: "시오데 아지츠케오 시마시타", exampleMeaning: "소금으로 간을 했습니다.",
    breakdown: [
      { word: "塩", reading: "しお", meaning: "소금" }
    ] },
  { level: "N4", kanji: "レシピ", reading: "レシピ", korean: "레시피", meaning: "레시피",
    example: "母からレシピを教わりました。", exampleReading: "ははからレシピをおそわりました。", exampleKorean: "하하카라 레시피오 오소와리마시타", exampleMeaning: "엄마에게 레시피를 배웠습니다.",
    breakdown: [
      { word: "母から", reading: "ははから", meaning: "엄마에게" }
    ] },
  { level: "N4", kanji: "賞味期限", reading: "しょうみきげん", korean: "쇼-미키겐", meaning: "유통기한",
    example: "賞味期限を確認してください。", exampleReading: "しょうみきげんをかくにんしてください。", exampleKorean: "쇼-미키겡오 카쿠닌시테 쿠다사이", exampleMeaning: "유통기한을 확인해 주세요.",
    breakdown: [
      { word: "確認して", reading: "かくにんして", meaning: "확인해서" }
    ] },
  { level: "N4", kanji: "消費期限", reading: "しょうひきげん", korean: "쇼-히키겐", meaning: "소비기한",
    example: "消費期限が切れています。", exampleReading: "しょうひきげんがきれています。", exampleKorean: "쇼-히키겡가 키레테 이마스", exampleMeaning: "소비기한이 지났습니다.",
    breakdown: [
      { word: "切れて", reading: "きれて", meaning: "지나서, 만료되어" }
    ] },
  { level: "N4", kanji: "冷凍", reading: "れいとう", korean: "레-토-", meaning: "냉동",
    example: "肉を冷凍しました。", exampleReading: "にくをれいとうしました。", exampleKorean: "니쿠오 레-토- 시마시타", exampleMeaning: "고기를 냉동했습니다.",
    breakdown: [
      { word: "肉", reading: "にく", meaning: "고기" }
    ] },
  { level: "N4", kanji: "冷凍庫", reading: "れいとうこ", korean: "레-토-코", meaning: "냉동고",
    example: "冷凍庫にアイスがあります。", exampleReading: "れいとうこにアイスがあります。", exampleKorean: "레-토-코니 아이스가 아리마스", exampleMeaning: "냉동고에 아이스크림이 있습니다.",
    breakdown: [
      { word: "アイス", reading: "アイス", meaning: "아이스크림" }
    ] },
  { level: "N4", kanji: "常温", reading: "じょうおん", korean: "죠-온", meaning: "상온",
    example: "常温で保存してください。", exampleReading: "じょうおんでほぞんしてください。", exampleKorean: "죠-온데 호존시테 쿠다사이", exampleMeaning: "상온에서 보관해 주세요.",
    breakdown: [
      { word: "保存して", reading: "ほぞんして", meaning: "보관해서" }
    ] },
  { level: "N4", kanji: "保存", reading: "ほぞん", korean: "호존", meaning: "보존, 보관",
    example: "冷蔵庫で保存します。", exampleReading: "れいぞうこでほぞんします。", exampleKorean: "레-조-코데 호존시마스", exampleMeaning: "냉장고에서 보관합니다.",
    breakdown: [
      { word: "冷蔵庫", reading: "れいぞうこ", meaning: "냉장고" }
    ] },
  { level: "N4", kanji: "カロリー", reading: "カロリー", korean: "카로리-", meaning: "칼로리",
    example: "このケーキはカロリーが高いです。", exampleReading: "このケーキはカロリーがたかいです。", exampleKorean: "코노 케-키와 카로리-가 타카이데스", exampleMeaning: "이 케이크는 칼로리가 높습니다.",
    breakdown: [
      { word: "高い", reading: "たかい", meaning: "높다" }
    ] },
  { level: "N4", kanji: "ダイエット", reading: "ダイエット", korean: "다이엣토", meaning: "다이어트",
    example: "来月からダイエットをします。", exampleReading: "らいげつからダイエットをします。", exampleKorean: "라이게츠카라 다이엣토오 시마스", exampleMeaning: "다음 달부터 다이어트를 합니다.",
    breakdown: [
      { word: "来月から", reading: "らいげつから", meaning: "다음 달부터" }
    ] },
  { level: "N4", kanji: "体重計", reading: "たいじゅうけい", korean: "타이쥬-케-", meaning: "체중계",
    example: "体重計に乗りました。", exampleReading: "たいじゅうけいにのりました。", exampleKorean: "타이쥬-케-니 노리마시타", exampleMeaning: "체중계에 올라갔습니다.",
    breakdown: [
      { word: "乗りました", reading: "のりました", meaning: "올라갔습니다" }
    ] },
  { level: "N4", kanji: "血圧", reading: "けつあつ", korean: "케츠아츠", meaning: "혈압",
    example: "血圧を測りました。", exampleReading: "けつあつをはかりました。", exampleKorean: "케츠아츠오 하카리마시타", exampleMeaning: "혈압을 쟀습니다.",
    breakdown: [
      { word: "測りました", reading: "はかりました", meaning: "쟀습니다" }
    ] },
  { level: "N4", kanji: "体温", reading: "たいおん", korean: "타이온", meaning: "체온",
    example: "体温を測ってください。", exampleReading: "たいおんをはかってください。", exampleKorean: "타이옹오 하캇테 쿠다사이", exampleMeaning: "체온을 재 주세요.",
    breakdown: [
      { word: "測って", reading: "はかって", meaning: "재서" }
    ] },
  { level: "N4", kanji: "体温計", reading: "たいおんけい", korean: "타이온케-", meaning: "체온계",
    example: "体温計で熱を測ります。", exampleReading: "たいおんけいでねつをはかります。", exampleKorean: "타이온케-데 네츠오 하카리마스", exampleMeaning: "체온계로 열을 잽니다.",
    breakdown: [
      { word: "熱", reading: "ねつ", meaning: "열" }
    ] },
  { level: "N4", kanji: "副作用", reading: "ふくさよう", korean: "후쿠사요-", meaning: "부작용",
    example: "この薬には副作用があります。", exampleReading: "このくすりにはふくさようがあります。", exampleKorean: "코노 쿠스리니와 후쿠사요-가 아리마스", exampleMeaning: "이 약에는 부작용이 있습니다.",
    breakdown: [
      { word: "薬", reading: "くすり", meaning: "약" }
    ] },
  { level: "N4", kanji: "処方", reading: "しょほう", korean: "쇼호-", meaning: "처방",
    example: "医者が薬を処方しました。", exampleReading: "いしゃがくすりをしょほうしました。", exampleKorean: "이샤가 쿠스리오 쇼호- 시마시타", exampleMeaning: "의사가 약을 처방했습니다.",
    breakdown: [
      { word: "医者", reading: "いしゃ", meaning: "의사" }
    ] },
  { level: "N4", kanji: "薬剤師", reading: "やくざいし", korean: "야쿠자이시", meaning: "약사",
    example: "薬剤師に相談しました。", exampleReading: "やくざいしにそうだんしました。", exampleKorean: "야쿠자이시니 소-단시마시타", exampleMeaning: "약사에게 상담했습니다.",
    breakdown: [
      { word: "相談", reading: "そうだん", meaning: "상담" }
    ] },
  { level: "N4", kanji: "予防接種", reading: "よぼうせっしゅ", korean: "요보-셋슈", meaning: "예방접종",
    example: "子供に予防接種を受けさせました。", exampleReading: "こどもによぼうせっしゅをうけさせました。", exampleKorean: "코도모니 요보-셋슈오 우케사세마시타", exampleMeaning: "아이에게 예방접종을 받게 했습니다.",
    breakdown: [
      { word: "子供に", reading: "こどもに", meaning: "아이에게" }
    ] },
  { level: "N4", kanji: "保険証", reading: "ほけんしょう", korean: "호켄쇼-", meaning: "보험증",
    example: "保険証を持ってきてください。", exampleReading: "ほけんしょうをもってきてください。", exampleKorean: "호켄쇼-오 못테 키테 쿠다사이", exampleMeaning: "보험증을 가져와 주세요.",
    breakdown: [
      { word: "持ってきて", reading: "もってきて", meaning: "가져와서" }
    ] },
  { level: "N4", kanji: "診断書", reading: "しんだんしょ", korean: "신단쇼", meaning: "진단서",
    example: "病院で診断書をもらいました。", exampleReading: "びょういんでしんだんしょをもらいました。", exampleKorean: "뵤-인데 신단쇼오 모라이마시타", exampleMeaning: "병원에서 진단서를 받았습니다.",
    breakdown: [
      { word: "病院", reading: "びょういん", meaning: "병원" }
    ] },
  { level: "N4", kanji: "入院", reading: "にゅういん", korean: "뉴-인", meaning: "입원",
    example: "一週間入院しました。", exampleReading: "いっしゅうかんにゅういんしました。", exampleKorean: "잇슈-칸 뉴-인 시마시타", exampleMeaning: "일주일 동안 입원했습니다.",
    breakdown: [
      { word: "一週間", reading: "いっしゅうかん", meaning: "일주일" }
    ] },
  { level: "N4", kanji: "退院", reading: "たいいん", korean: "타이인", meaning: "퇴원",
    example: "来週退院する予定です。", exampleReading: "らいしゅうたいいんするよていです。", exampleKorean: "라이슈- 타이인스루 요테-데스", exampleMeaning: "다음 주에 퇴원할 예정입니다.",
    breakdown: [
      { word: "来週", reading: "らいしゅう", meaning: "다음 주" }
    ] },
  { level: "N4", kanji: "通院", reading: "つういん", korean: "츠-인", meaning: "통원",
    example: "毎週通院しています。", exampleReading: "まいしゅうつういんしています。", exampleKorean: "마이슈- 츠-인 시테 이마스", exampleMeaning: "매주 통원하고 있습니다.",
    breakdown: [
      { word: "毎週", reading: "まいしゅう", meaning: "매주" }
    ] },
  { level: "N4", kanji: "検診", reading: "けんしん", korean: "켄신", meaning: "건강검진",
    example: "年に一度検診を受けます。", exampleReading: "ねんにいちどけんしんをうけます。", exampleKorean: "넨니 이치도 켄싱오 우케마스", exampleMeaning: "일 년에 한 번 건강검진을 받습니다.",
    breakdown: [
      { word: "年に一度", reading: "ねんにいちど", meaning: "일 년에 한 번" }
    ] },
  { level: "N4", kanji: "キャンセル", reading: "キャンセル", korean: "캰세루", meaning: "취소",
    example: "予約をキャンセルしました。", exampleReading: "よやくをキャンセルしました。", exampleKorean: "요야쿠오 캰세루 시마시타", exampleMeaning: "예약을 취소했습니다.",
    breakdown: [
      { word: "予約", reading: "よやく", meaning: "예약" }
    ] },
  { level: "N4", kanji: "変更", reading: "へんこう", korean: "헨코-", meaning: "변경",
    example: "日程を変更しました。", exampleReading: "にっていをへんこうしました。", exampleKorean: "닛테-오 헨코- 시마시타", exampleMeaning: "일정을 변경했습니다.",
    breakdown: [
      { word: "日程", reading: "にってい", meaning: "일정" }
    ] },
  { level: "N4", kanji: "申し込む", reading: "もうしこむ", korean: "모-시코무", meaning: "신청하다",
    example: "講座に申し込みました。", exampleReading: "こうざにもうしこみました。", exampleKorean: "코-자니 모-시코미마시타", exampleMeaning: "강좌를 신청했습니다.",
    breakdown: [
      { word: "講座", reading: "こうざ", meaning: "강좌" }
    ] },
  { level: "N4", kanji: "申請", reading: "しんせい", korean: "신세-", meaning: "신청",
    example: "ビザを申請しました。", exampleReading: "ビザをしんせいしました。", exampleKorean: "비자오 신세- 시마시타", exampleMeaning: "비자를 신청했습니다.",
    breakdown: [
      { word: "ビザ", reading: "ビザ", meaning: "비자" }
    ] },
  { level: "N4", kanji: "書き込む", reading: "かきこむ", korean: "카키코무", meaning: "기입하다",
    example: "名前を書き込んでください。", exampleReading: "なまえをかきこんでください。", exampleKorean: "나마에오 카키콘데 쿠다사이", exampleMeaning: "이름을 기입해 주세요.",
    breakdown: [
      { word: "名前", reading: "なまえ", meaning: "이름" }
    ] },
  { level: "N4", kanji: "記入", reading: "きにゅう", korean: "키뉴-", meaning: "기입",
    example: "用紙に記入します。", exampleReading: "ようしにきにゅうします。", exampleKorean: "요-시니 키뉴-시마스", exampleMeaning: "용지에 기입합니다.",
    breakdown: [
      { word: "用紙", reading: "ようし", meaning: "용지" }
    ] },
  { level: "N4", kanji: "署名", reading: "しょめい", korean: "쇼메-", meaning: "서명",
    example: "契約書に署名しました。", exampleReading: "けいやくしょにしょめいしました。", exampleKorean: "케-야쿠쇼니 쇼메- 시마시타", exampleMeaning: "계약서에 서명했습니다.",
    breakdown: [
      { word: "契約書", reading: "けいやくしょ", meaning: "계약서" }
    ] },
  { level: "N4", kanji: "歓迎", reading: "かんげい", korean: "캉게-", meaning: "환영",
    example: "新入社員を歓迎します。", exampleReading: "しんにゅうしゃいんをかんげいします。", exampleKorean: "신뉴-샤잉오 캉게- 시마스", exampleMeaning: "신입사원을 환영합니다.",
    breakdown: [
      { word: "新入社員", reading: "しんにゅうしゃいん", meaning: "신입사원" }
    ] },
  { level: "N4", kanji: "送別会", reading: "そうべつかい", korean: "소-베츠카이", meaning: "송별회",
    example: "来週送別会があります。", exampleReading: "らいしゅうそうべつかいがあります。", exampleKorean: "라이슈- 소-베츠카이가 아리마스", exampleMeaning: "다음 주에 송별회가 있습니다.",
    breakdown: [
      { word: "来週", reading: "らいしゅう", meaning: "다음 주" }
    ] },
  { level: "N4", kanji: "歓迎会", reading: "かんげいかい", korean: "캉게-카이", meaning: "환영회",
    example: "新人のために歓迎会を開きました。", exampleReading: "しんじんのためにかんげいかいをひらきました。", exampleKorean: "신진노 타메니 캉게-카이오 히라키마시타", exampleMeaning: "신입을 위해 환영회를 열었습니다.",
    breakdown: [
      { word: "新人", reading: "しんじん", meaning: "신입" }
    ] },
  { level: "N4", kanji: "忘年会", reading: "ぼうねんかい", korean: "보-넨카이", meaning: "송년회",
    example: "会社の忘年会に参加しました。", exampleReading: "かいしゃのぼうねんかいにさんかしました。", exampleKorean: "카이샤노 보-넨카이니 상카시마시타", exampleMeaning: "회사 송년회에 참가했습니다.",
    breakdown: [
      { word: "会社", reading: "かいしゃ", meaning: "회사" }
    ] },
  { level: "N4", kanji: "乾杯", reading: "かんぱい", korean: "캄파이", meaning: "건배",
    example: "みんなで乾杯しました。", exampleReading: "みんなでかんぱいしました。", exampleKorean: "민나데 캄파이 시마시타", exampleMeaning: "다 함께 건배했습니다.",
    breakdown: [
      { word: "みんなで", reading: "みんなで", meaning: "다 함께" }
    ] },
  { level: "N4", kanji: "祝日", reading: "しゅくじつ", korean: "슈쿠지츠", meaning: "공휴일",
    example: "今日は祝日です。", exampleReading: "きょうはしゅくじつです。", exampleKorean: "쿄-와 슈쿠지츠데스", exampleMeaning: "오늘은 공휴일입니다.",
    breakdown: [
      { word: "今日", reading: "きょう", meaning: "오늘" }
    ] },
  { level: "N4", kanji: "記念日", reading: "きねんび", korean: "키넨비", meaning: "기념일",
    example: "今日は結婚記念日です。", exampleReading: "きょうはけっこんきねんびです。", exampleKorean: "쿄-와 켁콘 키넨비데스", exampleMeaning: "오늘은 결혼기념일입니다.",
    breakdown: [
      { word: "結婚", reading: "けっこん", meaning: "결혼" }
    ] },
  { level: "N4", kanji: "贈り物", reading: "おくりもの", korean: "오쿠리모노", meaning: "선물",
    example: "友達に贈り物をしました。", exampleReading: "ともだちにおくりものをしました。", exampleKorean: "토모다치니 오쿠리모노오 시마시타", exampleMeaning: "친구에게 선물을 했습니다.",
    breakdown: [
      { word: "友達に", reading: "ともだちに", meaning: "친구에게" }
    ] },
  { level: "N4", kanji: "包装", reading: "ほうそう", korean: "호-소-", meaning: "포장",
    example: "プレゼントを包装しました。", exampleReading: "プレゼントをほうそうしました。", exampleKorean: "프레젠토오 호-소- 시마시타", exampleMeaning: "선물을 포장했습니다.",
    breakdown: [
      { word: "プレゼント", reading: "プレゼント", meaning: "선물" }
    ] },
  { level: "N4", kanji: "値引き", reading: "ねびき", korean: "네비키", meaning: "할인",
    example: "店員が値引きしてくれました。", exampleReading: "てんいんがねびきしてくれました。", exampleKorean: "텐인가 네비키시테 쿠레마시타", exampleMeaning: "점원이 할인해 주었습니다.",
    breakdown: [
      { word: "店員", reading: "てんいん", meaning: "점원" }
    ] },
  { level: "N4", kanji: "セール", reading: "セール", korean: "세-루", meaning: "세일",
    example: "デパートでセールをしています。", exampleReading: "デパートでセールをしています。", exampleKorean: "데파-토데 세-루오 시테 이마스", exampleMeaning: "백화점에서 세일을 하고 있습니다.",
    breakdown: [
      { word: "デパート", reading: "デパート", meaning: "백화점" }
    ] },
  { level: "N4", kanji: "在庫", reading: "ざいこ", korean: "자이코", meaning: "재고",
    example: "在庫がまだあります。", exampleReading: "ざいこがまだあります。", exampleKorean: "자이코가 마다 아리마스", exampleMeaning: "재고가 아직 있습니다.",
    breakdown: [
      { word: "まだ", reading: "まだ", meaning: "아직" }
    ] },
  { level: "N4", kanji: "品切れ", reading: "しなぎれ", korean: "시나기레", meaning: "품절",
    example: "そのサイズは品切れです。", exampleReading: "そのサイズはしなぎれです。", exampleKorean: "소노 사이즈와 시나기레데스", exampleMeaning: "그 사이즈는 품절입니다.",
    breakdown: [
      { word: "サイズ", reading: "サイズ", meaning: "사이즈" }
    ] },
  { level: "N4", kanji: "配送", reading: "はいそう", korean: "하이소-", meaning: "배송",
    example: "荷物を配送しました。", exampleReading: "にもつをはいそうしました。", exampleKorean: "니모츠오 하이소- 시마시타", exampleMeaning: "짐을 배송했습니다.",
    breakdown: [
      { word: "荷物", reading: "にもつ", meaning: "짐" }
    ] },
  { level: "N4", kanji: "返品", reading: "へんぴん", korean: "헨핀", meaning: "반품",
    example: "商品を返品しました。", exampleReading: "しょうひんをへんぴんしました。", exampleKorean: "쇼-힝오 헨핀 시마시타", exampleMeaning: "상품을 반품했습니다.",
    breakdown: [
      { word: "商品", reading: "しょうひん", meaning: "상품" }
    ] },

  // ---------- N3 ----------
  { level: "N3", kanji: "影響", reading: "えいきょう", korean: "에-쿄-", meaning: "영향",
    example: "天気は体に影響を与えます。", exampleReading: "てんきはからだにえいきょうをあたえます。", exampleKorean: "텡키와 카라다니 에-쿄-오 아타에마스", exampleMeaning: "날씨는 몸에 영향을 줍니다.",
    breakdown: [
      { word: "体に", reading: "からだに", meaning: "몸에" },
      { word: "与えます", reading: "あたえます", meaning: "줍니다" },
    ] },
  { level: "N3", kanji: "環境", reading: "かんきょう", korean: "캉쿄-", meaning: "환경",
    example: "環境を守ることが大切です。", exampleReading: "かんきょうをまもることがたいせつです。", exampleKorean: "캉쿄-오 마모루 코토가 타이세츠데스", exampleMeaning: "환경을 지키는 것이 중요합니다.",
    breakdown: [
      { word: "守ること", reading: "まもること", meaning: "지키는 것" },
    ] },
  { level: "N3", kanji: "状況", reading: "じょうきょう", korean: "죠-쿄-", meaning: "상황",
    example: "今の状況を説明してください。", exampleReading: "いまのじょうきょうをせつめいしてください。", exampleKorean: "이마노 죠-쿄-오 세츠메- 시테쿠다사이", exampleMeaning: "지금 상황을 설명해 주세요.",
    breakdown: [
      { word: "今の", reading: "いまの", meaning: "지금의" },
    ] },
  { level: "N3", kanji: "積極的", reading: "せっきょくてき", korean: "셋쿄쿠테키", meaning: "적극적",
    example: "彼は積極的に発言します。", exampleReading: "かれはせっきょくてきにはつげんします。", exampleKorean: "카레와 셋쿄쿠테키니 하츠겐 시마스", exampleMeaning: "그는 적극적으로 발언합니다.",
    breakdown: [
      { word: "発言します", reading: "はつげんします", meaning: "발언합니다" },
    ] },
  { level: "N3", kanji: "判断", reading: "はんだん", korean: "한단", meaning: "판단",
    example: "自分で判断するのは難しいです。", exampleReading: "じぶんではんだんするのはむずかしいです。", exampleKorean: "지분데 한단스루노와 무즈카시-데스", exampleMeaning: "스스로 판단하는 것은 어렵습니다.",
    breakdown: [
      { word: "自分で", reading: "じぶんで", meaning: "스스로" },
    ] },
  { level: "N3", kanji: "具体的", reading: "ぐたいてき", korean: "구타이테키", meaning: "구체적",
    example: "もっと具体的に説明してください。", exampleReading: "もっとぐたいてきにせつめいしてください。", exampleKorean: "못토 구타이테키니 세츠메- 시테쿠다사이", exampleMeaning: "더 구체적으로 설명해 주세요.",
    breakdown: [
      { word: "もっと", reading: "もっと", meaning: "더" },
    ] },
  { level: "N3", kanji: "解決", reading: "かいけつ", korean: "카이케츠", meaning: "해결",
    example: "問題を解決する方法を考えます。", exampleReading: "もんだいをかいけつするほうほうをかんがえます。", exampleKorean: "몬다이오 카이케츠스루 호-호-오 캉가에마스", exampleMeaning: "문제를 해결할 방법을 생각합니다.",
    breakdown: [
      { word: "考えます", reading: "かんがえます", meaning: "생각합니다" },
    ] },
  { level: "N3", kanji: "効果", reading: "こうか", korean: "코-카", meaning: "효과",
    example: "この薬はよく効果があります。", exampleReading: "このくすりはよくこうかがあります。", exampleKorean: "코노 쿠스리와 요쿠 코-카가 아리마스", exampleMeaning: "이 약은 효과가 좋습니다.",
    breakdown: [
      { word: "薬", reading: "くすり", meaning: "약" },
    ] },
  { level: "N3", kanji: "増加", reading: "ぞうか", korean: "조-카", meaning: "증가",
    example: "人口が急に増加しました。", exampleReading: "じんこうがきゅうにぞうかしました。", exampleKorean: "징코-가 큐-니 조-카 시마시타", exampleMeaning: "인구가 갑자기 증가했습니다.",
    breakdown: [
      { word: "人口", reading: "じんこう", meaning: "인구" },
    ] },
  { level: "N3", kanji: "減少", reading: "げんしょう", korean: "겐쇼-", meaning: "감소",
    example: "売り上げが減少しています。", exampleReading: "うりあげがげんしょうしています。", exampleKorean: "우리아게가 겐쇼- 시테이마스", exampleMeaning: "매출이 감소하고 있습니다.",
    breakdown: [
      { word: "売り上げ", reading: "うりあげ", meaning: "매출" },
    ] },
  { level: "N3", kanji: "発展", reading: "はってん", korean: "핫텐", meaning: "발전",
    example: "この町は急速に発展しました。", exampleReading: "このまちはきゅうそくにはってんしました。", exampleKorean: "코노 마치와 큐-소쿠니 핫텐 시마시타", exampleMeaning: "이 마을은 급속히 발전했습니다.",
    breakdown: [
      { word: "急速に", reading: "きゅうそくに", meaning: "급속히" },
    ] },
  { level: "N3", kanji: "維持", reading: "いじ", korean: "이지", meaning: "유지",
    example: "健康を維持するために運動します。", exampleReading: "けんこうをいじするためにうんどうします。", exampleKorean: "켕코-오 이지스루 타메니 운도- 시마스", exampleMeaning: "건강을 유지하기 위해 운동합니다.",
    breakdown: [
      { word: "運動します", reading: "うんどうします", meaning: "운동합니다" },
    ] },
  { level: "N3", kanji: "改善", reading: "かいぜん", korean: "카이젠", meaning: "개선",
    example: "作業の方法を改善しました。", exampleReading: "さぎょうのほうほうをかいぜんしました。", exampleKorean: "사교-노 호-호-오 카이젠 시마시타", exampleMeaning: "작업 방법을 개선했습니다.",
    breakdown: [
      { word: "作業の方法", reading: "さぎょうのほうほう", meaning: "작업 방법" },
    ] },
  { level: "N3", kanji: "意識", reading: "いしき", korean: "이시키", meaning: "의식",
    example: "環境問題を意識するようになりました。", exampleReading: "かんきょうもんだいをいしきするようになりました。", exampleKorean: "캉쿄- 몬다이오 이시키스루 요-니 나리마시타", exampleMeaning: "환경 문제를 의식하게 되었습니다.",
    breakdown: [
      { word: "ようになりました", reading: "ようになりました", meaning: "~하게 되었습니다" },
    ] },
  { level: "N3", kanji: "対応", reading: "たいおう", korean: "타이오-", meaning: "대응",
    example: "お客様に丁寧に対応します。", exampleReading: "おきゃくさまにていねいにたいおうします。", exampleKorean: "오캬쿠사마니 테-네-니 타이오- 시마스", exampleMeaning: "손님에게 정중하게 대응합니다.",
    breakdown: [
      { word: "丁寧に", reading: "ていねいに", meaning: "정중하게" },
    ] },
  { level: "N3", kanji: "提案", reading: "ていあん", korean: "테-안", meaning: "제안",
    example: "新しいアイデアを提案しました。", exampleReading: "あたらしいアイデアをていあんしました。", exampleKorean: "아타라시- 아이데아오 테-안 시마시타", exampleMeaning: "새로운 아이디어를 제안했습니다.",
    breakdown: [
      { word: "アイデア", reading: "アイデア", meaning: "아이디어" },
    ] },
  { level: "N3", kanji: "制限", reading: "せいげん", korean: "세-겐", meaning: "제한",
    example: "時間に制限があります。", exampleReading: "じかんにせいげんがあります。", exampleKorean: "지칸니 세-겐가 아리마스", exampleMeaning: "시간에 제한이 있습니다.",
    breakdown: [
      { word: "時間に", reading: "じかんに", meaning: "시간에" },
    ] },
  { level: "N3", kanji: "実現", reading: "じつげん", korean: "지츠겐", meaning: "실현",
    example: "夢を実現するために努力します。", exampleReading: "ゆめをじつげんするためにどりょくします。", exampleKorean: "유메오 지츠겐스루 타메니 도료쿠시마스", exampleMeaning: "꿈을 실현하기 위해 노력합니다.",
    breakdown: [
      { word: "努力します", reading: "どりょくします", meaning: "노력합니다" },
    ] },
  { level: "N3", kanji: "達成", reading: "たっせい", korean: "탓세-", meaning: "달성",
    example: "目標を達成しました。", exampleReading: "もくひょうをたっせいしました。", exampleKorean: "모쿠효-오 탓세- 시마시타", exampleMeaning: "목표를 달성했습니다.",
    breakdown: [
      { word: "目標", reading: "もくひょう", meaning: "목표" },
    ] },
  { level: "N3", kanji: "検討", reading: "けんとう", korean: "켄토-", meaning: "검토",
    example: "その案について検討します。", exampleReading: "そのあんについてけんとうします。", exampleKorean: "소노 안니 츠이테 켄토- 시마스", exampleMeaning: "그 안에 대해 검토하겠습니다.",
    breakdown: [
      { word: "について", reading: "について", meaning: "~에 대해" },
    ] },

  { level: "N3", kanji: "原因", reading: "げんいん", korean: "겐잉", meaning: "원인",
    example: "事故の原因を調べています。", exampleReading: "じこのげんいんをしらべています。", exampleKorean: "지코노 겐잉오 시라베테이마스", exampleMeaning: "사고의 원인을 조사하고 있습니다.",
    breakdown: [
      { word: "調べています", reading: "しらべています", meaning: "조사하고 있습니다" },
    ] },
  { level: "N3", kanji: "結果", reading: "けっか", korean: "켁카", meaning: "결과",
    example: "テストの結果が発表されました。", exampleReading: "テストのけっかがはっぴょうされました。", exampleKorean: "테스토노 켁카가 핫표- 사레마시타", exampleMeaning: "시험 결과가 발표되었습니다.",
    breakdown: [
      { word: "発表されました", reading: "はっぴょうされました", meaning: "발표되었습니다" },
    ] },
  { level: "N3", kanji: "理由", reading: "りゆう", korean: "리유-", meaning: "이유",
    example: "遅れた理由を説明してください。", exampleReading: "おくれたりゆうをせつめいしてください。", exampleKorean: "오쿠레타 리유-오 세츠메- 시테쿠다사이", exampleMeaning: "늦은 이유를 설명해 주세요.",
    breakdown: [
      { word: "遅れた", reading: "おくれた", meaning: "늦은" },
    ] },
  { level: "N3", kanji: "目的", reading: "もくてき", korean: "모쿠테키", meaning: "목적",
    example: "留学の目的は何ですか。", exampleReading: "りゅうがくのもくてきはなんですか。", exampleKorean: "류-가쿠노 모쿠테키와 난데스카", exampleMeaning: "유학의 목적은 무엇입니까?",
    breakdown: [
      { word: "留学", reading: "りゅうがく", meaning: "유학" },
    ] },
  { level: "N3", kanji: "方法", reading: "ほうほう", korean: "호-호-", meaning: "방법",
    example: "効率的な勉強方法を探しています。", exampleReading: "こうりつてきなべんきょうほうほうをさがしています。", exampleKorean: "코-리츠테키나 벵쿄- 호-호-오 사가시테이마스", exampleMeaning: "효율적인 공부 방법을 찾고 있습니다.",
    breakdown: [
      { word: "効率的な", reading: "こうりつてきな", meaning: "효율적인" },
    ] },
  { level: "N3", kanji: "手段", reading: "しゅだん", korean: "슈단", meaning: "수단",
    example: "電車は便利な移動手段です。", exampleReading: "でんしゃはべんりないどうしゅだんです。", exampleKorean: "덴샤와 벤리나 이도-슈단데스", exampleMeaning: "전철은 편리한 이동 수단입니다.",
    breakdown: [
      { word: "移動", reading: "いどう", meaning: "이동" },
    ] },
  { level: "N3", kanji: "条件", reading: "じょうけん", korean: "죠-켄", meaning: "조건",
    example: "応募の条件を確認しました。", exampleReading: "おうぼのじょうけんをかくにんしました。", exampleKorean: "오-보노 죠-켄오 카쿠닌 시마시타", exampleMeaning: "응모 조건을 확인했습니다.",
    breakdown: [
      { word: "応募", reading: "おうぼ", meaning: "응모" },
    ] },
  { level: "N3", kanji: "内容", reading: "ないよう", korean: "나이요-", meaning: "내용",
    example: "会議の内容をまとめました。", exampleReading: "かいぎのないようをまとめました。", exampleKorean: "카이기노 나이요-오 마토메마시타", exampleMeaning: "회의 내용을 정리했습니다.",
    breakdown: [
      { word: "まとめました", reading: "まとめました", meaning: "정리했습니다" },
    ] },
  { level: "N3", kanji: "情報", reading: "じょうほう", korean: "죠-호-", meaning: "정보",
    example: "インターネットで情報を集めます。", exampleReading: "インターネットでじょうほうをあつめます。", exampleKorean: "인타-넷토데 죠-호-오 아츠메마스", exampleMeaning: "인터넷으로 정보를 모읍니다.",
    breakdown: [
      { word: "集めます", reading: "あつめます", meaning: "모읍니다" },
    ] },
  { level: "N3", kanji: "資料", reading: "しりょう", korean: "시료-", meaning: "자료",
    example: "発表の資料を準備しました。", exampleReading: "はっぴょうのしりょうをじゅんびしました。", exampleKorean: "핫표-노 시료-오 준비 시마시타", exampleMeaning: "발표 자료를 준비했습니다.",
    breakdown: [
      { word: "発表", reading: "はっぴょう", meaning: "발표" },
    ] },
  { level: "N3", kanji: "印象", reading: "いんしょう", korean: "인쇼-", meaning: "인상",
    example: "彼は真面目な印象でした。", exampleReading: "かれはまじめないんしょうでした。", exampleKorean: "카레와 마지메나 인쇼-데시타", exampleMeaning: "그는 성실한 인상이었습니다.",
    breakdown: [
      { word: "真面目な", reading: "まじめな", meaning: "성실한" },
    ] },
  { level: "N3", kanji: "感想", reading: "かんそう", korean: "칸소-", meaning: "감상",
    example: "映画の感想を聞かせてください。", exampleReading: "えいがのかんそうをきかせてください。", exampleKorean: "에-가노 칸소-오 키카세테쿠다사이", exampleMeaning: "영화 감상을 들려주세요.",
    breakdown: [
      { word: "聞かせてください", reading: "きかせてください", meaning: "들려주세요" },
    ] },
  { level: "N3", kanji: "態度", reading: "たいど", korean: "타이도", meaning: "태도",
    example: "彼の態度が急に変わりました。", exampleReading: "かれのたいどがきゅうにかわりました。", exampleKorean: "카레노 타이도가 큐-니 카와리마시타", exampleMeaning: "그의 태도가 갑자기 바뀌었습니다.",
    breakdown: [
      { word: "急に", reading: "きゅうに", meaning: "갑자기" },
    ] },
  { level: "N3", kanji: "性格", reading: "せいかく", korean: "세-카쿠", meaning: "성격",
    example: "妹は明るい性格です。", exampleReading: "いもうとはあかるいせいかくです。", exampleKorean: "이모-토와 아카루이 세-카쿠데스", exampleMeaning: "여동생은 밝은 성격입니다.",
    breakdown: [
      { word: "明るい", reading: "あかるい", meaning: "밝다" },
    ] },
  { level: "N3", kanji: "特徴", reading: "とくちょう", korean: "토쿠쵸-", meaning: "특징",
    example: "この製品の特徴を説明します。", exampleReading: "このせいひんのとくちょうをせつめいします。", exampleKorean: "코노 세-힝노 토쿠쵸-오 세츠메- 시마스", exampleMeaning: "이 제품의 특징을 설명하겠습니다.",
    breakdown: [
      { word: "製品", reading: "せいひん", meaning: "제품" },
    ] },
  { level: "N3", kanji: "特色", reading: "とくしょく", korean: "토쿠쇼쿠", meaning: "특색",
    example: "地域ごとに特色があります。", exampleReading: "ちいきごとにとくしょくがあります。", exampleKorean: "치이키고토니 토쿠쇼쿠가 아리마스", exampleMeaning: "지역마다 특색이 있습니다.",
    breakdown: [
      { word: "地域ごとに", reading: "ちいきごとに", meaning: "지역마다" },
    ] },
  { level: "N3", kanji: "割合", reading: "わりあい", korean: "와리아이", meaning: "비율",
    example: "女性の割合が増えました。", exampleReading: "じょせいのわりあいがふえました。", exampleKorean: "죠세-노 와리아이가 후에마시타", exampleMeaning: "여성의 비율이 늘었습니다.",
    breakdown: [
      { word: "女性", reading: "じょせい", meaning: "여성" },
    ] },
  { level: "N3", kanji: "平均", reading: "へいきん", korean: "헤-킨", meaning: "평균",
    example: "平均点は七十点でした。", exampleReading: "へいきんてんはななじゅってんでした。", exampleKorean: "헤-킨텐와 나나쥿텐데시타", exampleMeaning: "평균 점수는 70점이었습니다.",
    breakdown: [
      { word: "七十点", reading: "ななじゅってん", meaning: "70점" },
    ] },
  { level: "N3", kanji: "比較", reading: "ひかく", korean: "히카쿠", meaning: "비교",
    example: "二つの商品を比較しました。", exampleReading: "ふたつのしょうひんをひかくしました。", exampleKorean: "후타츠노 쇼-힝오 히카쿠 시마시타", exampleMeaning: "두 상품을 비교했습니다.",
    breakdown: [
      { word: "二つの商品", reading: "ふたつのしょうひん", meaning: "두 상품" },
    ] },
  { level: "N3", kanji: "区別", reading: "くべつ", korean: "쿠베츠", meaning: "구별",
    example: "本物と偽物を区別するのは難しいです。", exampleReading: "ほんものとにせものをくべつするのはむずかしいです。", exampleKorean: "혼모노토 니세모노오 쿠베츠스루노와 무즈카시-데스", exampleMeaning: "진짜와 가짜를 구별하는 것은 어렵습니다.",
    breakdown: [
      { word: "本物と偽物", reading: "ほんものとにせもの", meaning: "진짜와 가짜" },
    ] },
  { level: "N3", kanji: "分類", reading: "ぶんるい", korean: "분루이", meaning: "분류",
    example: "ごみを種類別に分類します。", exampleReading: "ごみをしゅるいべつにぶんるいします。", exampleKorean: "고미오 슈루이베츠니 분루이 시마스", exampleMeaning: "쓰레기를 종류별로 분류합니다.",
    breakdown: [
      { word: "種類別に", reading: "しゅるいべつに", meaning: "종류별로" },
    ] },
  { level: "N3", kanji: "整理", reading: "せいり", korean: "세-리", meaning: "정리",
    example: "机の上を整理しました。", exampleReading: "つくえのうえをせいりしました。", exampleKorean: "츠쿠에노 우에오 세-리 시마시타", exampleMeaning: "책상 위를 정리했습니다.",
    breakdown: [
      { word: "机の上", reading: "つくえのうえ", meaning: "책상 위" },
    ] },
  { level: "N3", kanji: "処理", reading: "しょり", korean: "쇼리", meaning: "처리",
    example: "データを素早く処理します。", exampleReading: "データをすばやくしょりします。", exampleKorean: "데-타오 스바야쿠 쇼리 시마스", exampleMeaning: "데이터를 신속하게 처리합니다.",
    breakdown: [
      { word: "素早く", reading: "すばやく", meaning: "신속하게" },
    ] },
  { level: "N3", kanji: "対策", reading: "たいさく", korean: "타이사쿠", meaning: "대책",
    example: "台風の対策を考えます。", exampleReading: "たいふうのたいさくをかんがえます。", exampleKorean: "타이후-노 타이사쿠오 캉가에마스", exampleMeaning: "태풍 대책을 생각합니다.",
    breakdown: [
      { word: "台風", reading: "たいふう", meaning: "태풍" },
    ] },
  { level: "N3", kanji: "予測", reading: "よそく", korean: "요소쿠", meaning: "예측",
    example: "天気予測はよく当たります。", exampleReading: "てんきよそくはよくあたります。", exampleKorean: "텡키 요소쿠와 요쿠 아타리마스", exampleMeaning: "날씨 예측은 잘 맞습니다.",
    breakdown: [
      { word: "当たります", reading: "あたります", meaning: "맞습니다" },
    ] },
  { level: "N3", kanji: "予想", reading: "よそう", korean: "요소-", meaning: "예상",
    example: "試合の結果は予想通りでした。", exampleReading: "しあいのけっかはよそうどおりでした。", exampleKorean: "시아이노 켁카와 요소-도-리데시타", exampleMeaning: "시합 결과는 예상대로였습니다.",
    breakdown: [
      { word: "予想通り", reading: "よそうどおり", meaning: "예상대로" },
    ] },
  { level: "N3", kanji: "傾く", reading: "かたむく", korean: "카타무쿠", meaning: "기울다",
    example: "棚が少し傾いています。", exampleReading: "たながすこしかたむいています。", exampleKorean: "타나가 스코시 카타무이테이마스", exampleMeaning: "선반이 조금 기울어져 있습니다.",
    breakdown: [
      { word: "棚", reading: "たな", meaning: "선반" },
    ] },
  { level: "N3", kanji: "争う", reading: "あらそう", korean: "아라소우", meaning: "다투다",
    example: "兄弟でおもちゃを争っています。", exampleReading: "きょうだいでおもちゃをあらそっています。", exampleKorean: "쿄-다이데 오모챠오 아라솟테이마스", exampleMeaning: "형제끼리 장난감을 다투고 있습니다.",
    breakdown: [
      { word: "兄弟", reading: "きょうだい", meaning: "형제" },
    ] },
  { level: "N3", kanji: "支える", reading: "ささえる", korean: "사사에루", meaning: "지탱하다, 지지하다",
    example: "家族が私を支えてくれました。", exampleReading: "かぞくがわたしをささえてくれました。", exampleKorean: "카조쿠가 와타시오 사사에테쿠레마시타", exampleMeaning: "가족이 저를 지탱해 주었습니다.",
    breakdown: [
      { word: "てくれました", reading: "てくれました", meaning: "~해 주었습니다" },
    ] },
  { level: "N3", kanji: "逃げる", reading: "にげる", korean: "니게루", meaning: "도망가다",
    example: "猫が驚いて逃げました。", exampleReading: "ねこがおどろいてにげました。", exampleKorean: "네코가 오도로이테 니게마시타", exampleMeaning: "고양이가 놀라서 도망갔습니다.",
    breakdown: [
      { word: "驚いて", reading: "おどろいて", meaning: "놀라서" },
    ] },
  { level: "N3", kanji: "追う", reading: "おう", korean: "오우", meaning: "쫓다",
    example: "夢を追って上京しました。", exampleReading: "ゆめをおってじょうきょうしました。", exampleKorean: "유메오 옷테 죠-쿄- 시마시타", exampleMeaning: "꿈을 쫓아 상경했습니다.",
    breakdown: [
      { word: "上京しました", reading: "じょうきょうしました", meaning: "상경했습니다" },
    ] },
  { level: "N3", kanji: "防ぐ", reading: "ふせぐ", korean: "후세구", meaning: "막다",
    example: "事故を防ぐために注意します。", exampleReading: "じこをふせぐためにちゅういします。", exampleKorean: "지코오 후세구 타메니 츄-이 시마스", exampleMeaning: "사고를 막기 위해 주의합니다.",
    breakdown: [
      { word: "注意します", reading: "ちゅういします", meaning: "주의합니다" },
    ] },
  { level: "N3", kanji: "補う", reading: "おぎなう", korean: "오기나우", meaning: "보충하다",
    example: "不足分を補います。", exampleReading: "ふそくぶんをおぎないます。", exampleKorean: "후소쿠분오 오기나이마스", exampleMeaning: "부족한 부분을 보충합니다.",
    breakdown: [
      { word: "不足分", reading: "ふそくぶん", meaning: "부족한 부분" },
    ] },
  { level: "N3", kanji: "従う", reading: "したがう", korean: "시타가우", meaning: "따르다",
    example: "規則に従ってください。", exampleReading: "きそくにしたがってください。", exampleKorean: "키소쿠니 시타갓테쿠다사이", exampleMeaning: "규칙에 따라주세요.",
    breakdown: [
      { word: "規則", reading: "きそく", meaning: "규칙" },
    ] },
  { level: "N3", kanji: "冷静", reading: "れいせい", korean: "레-세-", meaning: "냉정",
    example: "冷静に状況を判断しました。", exampleReading: "れいせいにじょうきょうをはんだんしました。", exampleKorean: "레-세-니 죠-쿄-오 한단 시마시타", exampleMeaning: "냉정하게 상황을 판단했습니다.",
    breakdown: [
      { word: "状況", reading: "じょうきょう", meaning: "상황" },
    ] },
  { level: "N3", kanji: "単純", reading: "たんじゅん", korean: "탄준", meaning: "단순",
    example: "問題は意外と単純でした。", exampleReading: "もんだいはいがいとたんじゅんでした。", exampleKorean: "몬다이와 이가이토 탄준데시타", exampleMeaning: "문제는 의외로 단순했습니다.",
    breakdown: [
      { word: "意外と", reading: "いがいと", meaning: "의외로" },
    ] },
  { level: "N3", kanji: "複雑", reading: "ふくざつ", korean: "후쿠자츠", meaning: "복잡",
    example: "この手続きは複雑です。", exampleReading: "このてつづきはふくざつです。", exampleKorean: "코노 테츠즈키와 후쿠자츠데스", exampleMeaning: "이 절차는 복잡합니다.",
    breakdown: [
      { word: "手続き", reading: "てつづき", meaning: "절차" },
    ] },
  { level: "N3", kanji: "完全", reading: "かんぜん", korean: "칸젠", meaning: "완전",
    example: "問題を完全に解決しました。", exampleReading: "もんだいをかんぜんにかいけつしました。", exampleKorean: "몬다이오 칸젠니 카이케츠 시마시타", exampleMeaning: "문제를 완전히 해결했습니다.",
    breakdown: [
      { word: "解決しました", reading: "かいけつしました", meaning: "해결했습니다" },
    ] },
  { level: "N3", kanji: "十分", reading: "じゅうぶん", korean: "쥬-분", meaning: "충분",
    example: "睡眠を十分に取ってください。", exampleReading: "すいみんをじゅうぶんにとってください。", exampleKorean: "스이밍오 쥬-분니 톳테쿠다사이", exampleMeaning: "수면을 충분히 취해 주세요.",
    breakdown: [
      { word: "睡眠", reading: "すいみん", meaning: "수면" },
    ] },
  { level: "N3", kanji: "不足", reading: "ふそく", korean: "후소쿠", meaning: "부족",
    example: "睡眠不足で体調が悪いです。", exampleReading: "すいみんぶそくでたいちょうがわるいです。", exampleKorean: "스이밍 후소쿠데 타이쵸-가 와루이데스", exampleMeaning: "수면 부족으로 컨디션이 안 좋습니다.",
    breakdown: [
      { word: "体調", reading: "たいちょう", meaning: "컨디션" },
    ] },

  { level: "N3", kanji: "観察", reading: "かんさつ", korean: "칸사츠", meaning: "관찰",
    example: "子供たちが昆虫を観察しています。", exampleReading: "こどもたちがこんちゅうをかんさつしています。", exampleKorean: "코도모타치가 콘츄-오 칸사츠 시테이마스", exampleMeaning: "아이들이 곤충을 관찰하고 있습니다.",
    breakdown: [
      { word: "昆虫", reading: "こんちゅう", meaning: "곤충" },
    ] },
  { level: "N3", kanji: "調査", reading: "ちょうさ", korean: "쵸-사", meaning: "조사",
    example: "アンケート調査を行いました。", exampleReading: "アンケートちょうさをおこないました。", exampleKorean: "앙케-토 쵸-사오 오코나이마시타", exampleMeaning: "설문 조사를 실시했습니다.",
    breakdown: [
      { word: "行いました", reading: "おこないました", meaning: "실시했습니다" },
    ] },
  { level: "N3", kanji: "実施", reading: "じっし", korean: "짓시", meaning: "실시",
    example: "新しい制度が来月から実施されます。", exampleReading: "あたらしいせいどがらいげつからじっしされます。", exampleKorean: "아타라시- 세-도가 라이게츠카라 짓시 사레마스", exampleMeaning: "새로운 제도가 다음 달부터 실시됩니다.",
    breakdown: [
      { word: "制度", reading: "せいど", meaning: "제도" },
    ] },
  { level: "N3", kanji: "実行", reading: "じっこう", korean: "짓코-", meaning: "실행",
    example: "計画を実行に移します。", exampleReading: "けいかくをじっこうにうつします。", exampleKorean: "케-카쿠오 짓코-니 우츠시마스", exampleMeaning: "계획을 실행에 옮깁니다.",
    breakdown: [
      { word: "移します", reading: "うつします", meaning: "옮깁니다" },
    ] },
  { level: "N3", kanji: "実験", reading: "じっけん", korean: "짓켄", meaning: "실험",
    example: "大学で化学の実験をしました。", exampleReading: "だいがくでかがくのじっけんをしました。", exampleKorean: "다이가쿠데 카가쿠노 짓켄오 시마시타", exampleMeaning: "대학에서 화학 실험을 했습니다.",
    breakdown: [
      { word: "化学", reading: "かがく", meaning: "화학" },
    ] },
  { level: "N3", kanji: "発見", reading: "はっけん", korean: "학켄", meaning: "발견",
    example: "新しい星が発見されました。", exampleReading: "あたらしいほしがはっけんされました。", exampleKorean: "아타라시- 호시가 학켄 사레마시타", exampleMeaning: "새로운 별이 발견되었습니다.",
    breakdown: [
      { word: "星", reading: "ほし", meaning: "별" },
    ] },
  { level: "N3", kanji: "発生", reading: "はっせい", korean: "핫세-", meaning: "발생",
    example: "地震が発生しました。", exampleReading: "じしんがはっせいしました。", exampleKorean: "지신가 핫세- 시마시타", exampleMeaning: "지진이 발생했습니다.",
    breakdown: [
      { word: "地震", reading: "じしん", meaning: "지진" },
    ] },
  { level: "N3", kanji: "発表", reading: "はっぴょう", korean: "핫표-", meaning: "발표",
    example: "研究の結果を発表しました。", exampleReading: "けんきゅうのけっかをはっぴょうしました。", exampleKorean: "켄큐-노 켁카오 핫표- 시마시타", exampleMeaning: "연구 결과를 발표했습니다.",
    breakdown: [
      { word: "研究", reading: "けんきゅう", meaning: "연구" },
    ] },
  { level: "N3", kanji: "発揮", reading: "はっき", korean: "학키", meaning: "발휘",
    example: "試合で実力を発揮しました。", exampleReading: "しあいでじつりょくをはっきしました。", exampleKorean: "시아이데 지츠료쿠오 학키 시마시타", exampleMeaning: "시합에서 실력을 발휘했습니다.",
    breakdown: [
      { word: "実力", reading: "じつりょく", meaning: "실력" },
    ] },
  { level: "N3", kanji: "表現", reading: "ひょうげん", korean: "효-겐", meaning: "표현",
    example: "気持ちを言葉で表現します。", exampleReading: "きもちをことばでひょうげんします。", exampleKorean: "키모치오 코토바데 효-겐 시마스", exampleMeaning: "마음을 말로 표현합니다.",
    breakdown: [
      { word: "言葉で", reading: "ことばで", meaning: "말로" },
    ] },
  { level: "N3", kanji: "表情", reading: "ひょうじょう", korean: "효-죠-", meaning: "표정",
    example: "彼女の表情が明るくなりました。", exampleReading: "かのじょのひょうじょうがあかるくなりました。", exampleKorean: "카노죠노 효-죠-가 아카루쿠 나리마시타", exampleMeaning: "그녀의 표정이 밝아졌습니다.",
    breakdown: [
      { word: "明るくなりました", reading: "あかるくなりました", meaning: "밝아졌습니다" },
    ] },
  { level: "N3", kanji: "想像", reading: "そうぞう", korean: "소-조-", meaning: "상상",
    example: "未来の生活を想像してみます。", exampleReading: "みらいのせいかつをそうぞうしてみます。", exampleKorean: "미라이노 세-카츠오 소-조- 시테미마스", exampleMeaning: "미래의 생활을 상상해 봅니다.",
    breakdown: [
      { word: "てみます", reading: "てみます", meaning: "~해봅니다" },
    ] },
  { level: "N3", kanji: "記憶", reading: "きおく", korean: "키오쿠", meaning: "기억",
    example: "その日のことをよく記憶しています。", exampleReading: "そのひのことをよくきおくしています。", exampleKorean: "소노 히노 코토오 요쿠 키오쿠 시테이마스", exampleMeaning: "그날의 일을 잘 기억하고 있습니다.",
    breakdown: [
      { word: "その日のこと", reading: "そのひのこと", meaning: "그날의 일" },
    ] },
  { level: "N3", kanji: "記録", reading: "きろく", korean: "키로쿠", meaning: "기록",
    example: "大会で新記録を出しました。", exampleReading: "たいかいでしんきろくをだしました。", exampleKorean: "타이카이데 신키로쿠오 다시마시타", exampleMeaning: "대회에서 신기록을 냈습니다.",
    breakdown: [
      { word: "大会", reading: "たいかい", meaning: "대회" },
    ] },
  { level: "N3", kanji: "経過", reading: "けいか", korean: "케-카", meaning: "경과",
    example: "手術後の経過は順調です。", exampleReading: "しゅじゅつごのけいかはじゅんちょうです。", exampleKorean: "슈쥬츠고노 케-카와 쥰쵸-데스", exampleMeaning: "수술 후 경과는 순조롭습니다.",
    breakdown: [
      { word: "手術後", reading: "しゅじゅつご", meaning: "수술 후" },
    ] },
  { level: "N3", kanji: "過程", reading: "かてい", korean: "카테-", meaning: "과정",
    example: "結果より過程が大切です。", exampleReading: "けっかよりかていがたいせつです。", exampleKorean: "켁카요리 카테-가 타이세츠데스", exampleMeaning: "결과보다 과정이 중요합니다.",
    breakdown: [
      { word: "結果より", reading: "けっかより", meaning: "결과보다" },
    ] },
  { level: "N3", kanji: "段階", reading: "だんかい", korean: "단카이", meaning: "단계",
    example: "計画は最終段階に入りました。", exampleReading: "けいかくはさいしゅうだんかいにはいりました。", exampleKorean: "케-카쿠와 사이슈- 단카이니 하이리마시타", exampleMeaning: "계획은 최종 단계에 들어갔습니다.",
    breakdown: [
      { word: "最終", reading: "さいしゅう", meaning: "최종" },
    ] },
  { level: "N3", kanji: "期間", reading: "きかん", korean: "키칸", meaning: "기간",
    example: "セール期間は一週間です。", exampleReading: "セールきかんはいっしゅうかんです。", exampleKorean: "세-루 키칸와 잇슈-칸데스", exampleMeaning: "세일 기간은 일주일입니다.",
    breakdown: [
      { word: "一週間", reading: "いっしゅうかん", meaning: "일주일" },
    ] },
  { level: "N3", kanji: "期限", reading: "きげん", korean: "키겐", meaning: "기한",
    example: "提出の期限を確認してください。", exampleReading: "ていしゅつのきげんをかくにんしてください。", exampleKorean: "테-슈츠노 키겐오 카쿠닌 시테쿠다사이", exampleMeaning: "제출 기한을 확인해 주세요.",
    breakdown: [
      { word: "提出", reading: "ていしゅつ", meaning: "제출" },
    ] },
  { level: "N3", kanji: "範囲", reading: "はんい", korean: "한이", meaning: "범위",
    example: "試験の範囲を教えてください。", exampleReading: "しけんのはんいをおしえてください。", exampleKorean: "시켄노 한이오 오시에테쿠다사이", exampleMeaning: "시험 범위를 알려 주세요.",
    breakdown: [
      { word: "試験", reading: "しけん", meaning: "시험" },
    ] },
  { level: "N3", kanji: "領域", reading: "りょういき", korean: "료-이키", meaning: "영역",
    example: "専門の領域を広げたいです。", exampleReading: "せんもんのりょういきをひろげたいです。", exampleKorean: "센몬노 료-이키오 히로게타이데스", exampleMeaning: "전문 영역을 넓히고 싶습니다.",
    breakdown: [
      { word: "広げたいです", reading: "ひろげたいです", meaning: "넓히고 싶습니다" },
    ] },
  { level: "N3", kanji: "分野", reading: "ぶんや", korean: "분야", meaning: "분야",
    example: "私はIT分野で働いています。", exampleReading: "わたしはアイティーぶんやではたらいています。", exampleKorean: "와타시와 아이티- 분야데 하타라이테이마스", exampleMeaning: "저는 IT 분야에서 일하고 있습니다.",
    breakdown: [
      { word: "IT", reading: "アイティー", meaning: "IT" },
    ] },
  { level: "N3", kanji: "専門", reading: "せんもん", korean: "센몬", meaning: "전문",
    example: "大学で経済を専門に学びました。", exampleReading: "だいがくでけいざいをせんもんにまなびました。", exampleKorean: "다이가쿠데 케-자이오 센몬니 마나비마시타", exampleMeaning: "대학에서 경제를 전문으로 배웠습니다.",
    breakdown: [
      { word: "学びました", reading: "まなびました", meaning: "배웠습니다" },
    ] },
  { level: "N3", kanji: "技術", reading: "ぎじゅつ", korean: "기쥬츠", meaning: "기술",
    example: "新しい技術を開発しました。", exampleReading: "あたらしいぎじゅつをかいはつしました。", exampleKorean: "아타라시- 기쥬츠오 카이하츠 시마시타", exampleMeaning: "새로운 기술을 개발했습니다.",
    breakdown: [
      { word: "開発しました", reading: "かいはつしました", meaning: "개발했습니다" },
    ] },
  { level: "N3", kanji: "能力", reading: "のうりょく", korean: "노-료쿠", meaning: "능력",
    example: "彼は語学の能力が高いです。", exampleReading: "かれはごがくののうりょくがたかいです。", exampleKorean: "카레와 고가쿠노 노-료쿠가 타카이데스", exampleMeaning: "그는 어학 능력이 높습니다.",
    breakdown: [
      { word: "語学", reading: "ごがく", meaning: "어학" },
    ] },
  { level: "N3", kanji: "才能", reading: "さいのう", korean: "사이노-", meaning: "재능",
    example: "彼女は音楽の才能があります。", exampleReading: "かのじょはおんがくのさいのうがあります。", exampleKorean: "카노죠와 옹가쿠노 사이노-가 아리마스", exampleMeaning: "그녀는 음악 재능이 있습니다.",
    breakdown: [
      { word: "音楽", reading: "おんがく", meaning: "음악" },
    ] },
  { level: "N3", kanji: "知識", reading: "ちしき", korean: "치시키", meaning: "지식",
    example: "幅広い知識を身につけたいです。", exampleReading: "はばひろいちしきをみにつけたいです。", exampleKorean: "하바히로이 치시키오 미니츠케타이데스", exampleMeaning: "폭넓은 지식을 익히고 싶습니다.",
    breakdown: [
      { word: "幅広い", reading: "はばひろい", meaning: "폭넓다" },
      { word: "身につけたいです", reading: "みにつけたいです", meaning: "익히고 싶습니다" },
    ] },
  { level: "N3", kanji: "常識", reading: "じょうしき", korean: "죠-시키", meaning: "상식",
    example: "それは常識だと思います。", exampleReading: "それはじょうしきだとおもいます。", exampleKorean: "소레와 죠-시키다토 오모이마스", exampleMeaning: "그것은 상식이라고 생각합니다.",
    breakdown: [
      { word: "だと思います", reading: "だとおもいます", meaning: "~라고 생각합니다" },
    ] },
  { level: "N3", kanji: "価値", reading: "かち", korean: "카치", meaning: "가치",
    example: "この経験には大きな価値があります。", exampleReading: "このけいけんにはおおきなかちがあります。", exampleKorean: "코노 케-켄니와 오-키나 카치가 아리마스", exampleMeaning: "이 경험에는 큰 가치가 있습니다.",
    breakdown: [
      { word: "経験", reading: "けいけん", meaning: "경험" },
    ] },
  { level: "N3", kanji: "存在", reading: "そんざい", korean: "손자이", meaning: "존재",
    example: "彼はチームに欠かせない存在です。", exampleReading: "かれはチームにかかせないそんざいです。", exampleKorean: "카레와 치-무니 카카세나이 손자이데스", exampleMeaning: "그는 팀에 없어서는 안 될 존재입니다.",
    breakdown: [
      { word: "欠かせない", reading: "かかせない", meaning: "없어서는 안 되는" },
    ] },

  { level: "N3", kanji: "社会", reading: "しゃかい", korean: "샤카이", meaning: "사회",
    example: "社会に出て働き始めました。", exampleReading: "しゃかいにでてはたらきはじめました。", exampleKorean: "샤카이니 데테 하타라키하지메마시타", exampleMeaning: "사회에 나와 일하기 시작했습니다.",
    breakdown: [
      { word: "働き始めました", reading: "はたらきはじめました", meaning: "일하기 시작했습니다" },
    ] },
  { level: "N3", kanji: "政治", reading: "せいじ", korean: "세-지", meaning: "정치",
    example: "政治に関心を持つようになりました。", exampleReading: "せいじにかんしんをもつようになりました。", exampleKorean: "세-지니 칸신오 모츠 요-니 나리마시타", exampleMeaning: "정치에 관심을 가지게 되었습니다.",
    breakdown: [
      { word: "関心を持つ", reading: "かんしんをもつ", meaning: "관심을 갖다" },
    ] },
  { level: "N3", kanji: "文化", reading: "ぶんか", korean: "붕카", meaning: "문화",
    example: "日本の文化に興味があります。", exampleReading: "にほんのぶんかにきょうみがあります。", exampleKorean: "니혼노 붕카니 쿄-미가 아리마스", exampleMeaning: "일본 문화에 흥미가 있습니다.",
    breakdown: [
      { word: "興味があります", reading: "きょうみがあります", meaning: "흥미가 있습니다" },
    ] },
  { level: "N3", kanji: "歴史", reading: "れきし", korean: "레키시", meaning: "역사",
    example: "大学で歴史を専攻しました。", exampleReading: "だいがくでれきしをせんこうしました。", exampleKorean: "다이가쿠데 레키시오 센코- 시마시타", exampleMeaning: "대학에서 역사를 전공했습니다.",
    breakdown: [
      { word: "専攻しました", reading: "せんこうしました", meaning: "전공했습니다" },
    ] },
  { level: "N3", kanji: "伝統", reading: "でんとう", korean: "덴토-", meaning: "전통",
    example: "この祭りは古い伝統です。", exampleReading: "このまつりはふるいでんとうです。", exampleKorean: "코노 마츠리와 후루이 덴토-데스", exampleMeaning: "이 축제는 오래된 전통입니다.",
    breakdown: [
      { word: "祭り", reading: "まつり", meaning: "축제" },
    ] },
  { level: "N3", kanji: "組織", reading: "そしき", korean: "소시키", meaning: "조직",
    example: "大きな組織で働いています。", exampleReading: "おおきなそしきではたらいています。", exampleKorean: "오-키나 소시키데 하타라이테이마스", exampleMeaning: "큰 조직에서 일하고 있습니다.",
    breakdown: [
      { word: "大きな", reading: "おおきな", meaning: "큰" },
    ] },
  { level: "N3", kanji: "団体", reading: "だんたい", korean: "단타이", meaning: "단체",
    example: "団体で旅行に行きました。", exampleReading: "だんたいでりょこうにいきました。", exampleKorean: "단타이데 료코-니 이키마시타", exampleMeaning: "단체로 여행을 갔습니다.",
    breakdown: [
      { word: "旅行", reading: "りょこう", meaning: "여행" },
    ] },
  { level: "N3", kanji: "集団", reading: "しゅうだん", korean: "슈-단", meaning: "집단",
    example: "集団行動が苦手です。", exampleReading: "しゅうだんこうどうがにがてです。", exampleKorean: "슈-단 코-도-가 니가테데스", exampleMeaning: "단체 행동을 잘 못합니다.",
    breakdown: [
      { word: "行動", reading: "こうどう", meaning: "행동" },
    ] },
  { level: "N3", kanji: "個人", reading: "こじん", korean: "코징", meaning: "개인",
    example: "個人の意見を尊重します。", exampleReading: "こじんのいけんをそんちょうします。", exampleKorean: "코진노 이켄오 손쵸- 시마스", exampleMeaning: "개인의 의견을 존중합니다.",
    breakdown: [
      { word: "尊重します", reading: "そんちょうします", meaning: "존중합니다" },
    ] },
  { level: "N3", kanji: "人口", reading: "じんこう", korean: "징코-", meaning: "인구",
    example: "この町の人口は減っています。", exampleReading: "このまちのじんこうはへっています。", exampleKorean: "코노 마치노 징코-와 헷테이마스", exampleMeaning: "이 마을의 인구는 줄고 있습니다.",
    breakdown: [
      { word: "減っています", reading: "へっています", meaning: "줄고 있습니다" },
    ] },
  { level: "N3", kanji: "世代", reading: "せだい", korean: "세다이", meaning: "세대",
    example: "世代によって考え方が違います。", exampleReading: "せだいによってかんがえかたがちがいます。", exampleKorean: "세다이니 욧테 캉가에카타가 치가이마스", exampleMeaning: "세대에 따라 사고방식이 다릅니다.",
    breakdown: [
      { word: "考え方", reading: "かんがえかた", meaning: "사고방식" },
    ] },
  { level: "N3", kanji: "若者", reading: "わかもの", korean: "와카모노", meaning: "젊은이",
    example: "最近の若者はスマホをよく使います。", exampleReading: "さいきんのわかものはスマホをよくつかいます。", exampleKorean: "사이킨노 와카모노와 스마호오 요쿠 츠카이마스", exampleMeaning: "요즘 젊은이들은 스마트폰을 자주 씁니다.",
    breakdown: [
      { word: "スマホ", reading: "スマホ", meaning: "스마트폰" },
    ] },
  { level: "N3", kanji: "高齢者", reading: "こうれいしゃ", korean: "코-레-샤", meaning: "고령자",
    example: "高齢者のための施設です。", exampleReading: "こうれいしゃのためのしせつです。", exampleKorean: "코-레-샤노 타메노 시세츠데스", exampleMeaning: "고령자를 위한 시설입니다.",
    breakdown: [
      { word: "施設", reading: "しせつ", meaning: "시설" },
    ] },
  { level: "N3", kanji: "児童", reading: "じどう", korean: "지도-", meaning: "아동",
    example: "児童のための図書館があります。", exampleReading: "じどうのためのとしょかんがあります。", exampleKorean: "지도-노 타메노 토쇼칸가 아리마스", exampleMeaning: "아동을 위한 도서관이 있습니다.",
    breakdown: [
      { word: "図書館", reading: "としょかん", meaning: "도서관" },
    ] },
  { level: "N3", kanji: "市民", reading: "しみん", korean: "시민", meaning: "시민",
    example: "市民の意見を聞きます。", exampleReading: "しみんのいけんをききます。", exampleKorean: "시민노 이켄오 키키마스", exampleMeaning: "시민의 의견을 듣습니다.",
    breakdown: [
      { word: "意見", reading: "いけん", meaning: "의견" },
    ] },
  { level: "N3", kanji: "国民", reading: "こくみん", korean: "코쿠민", meaning: "국민",
    example: "国民の生活を支えます。", exampleReading: "こくみんのせいかつをささえます。", exampleKorean: "코쿠민노 세-카츠오 사사에마스", exampleMeaning: "국민의 생활을 지탱합니다.",
    breakdown: [
      { word: "支えます", reading: "ささえます", meaning: "지탱합니다" },
    ] },
  { level: "N3", kanji: "選挙", reading: "せんきょ", korean: "센쿄", meaning: "선거",
    example: "来月、選挙があります。", exampleReading: "らいげつ、せんきょがあります。", exampleKorean: "라이게츠 센쿄가 아리마스", exampleMeaning: "다음 달 선거가 있습니다.",
    breakdown: [
      { word: "来月", reading: "らいげつ", meaning: "다음 달" },
    ] },
  { level: "N3", kanji: "法律", reading: "ほうりつ", korean: "호-리츠", meaning: "법률",
    example: "新しい法律ができました。", exampleReading: "あたらしいほうりつができました。", exampleKorean: "아타라시- 호-리츠가 데키마시타", exampleMeaning: "새로운 법률이 생겼습니다.",
    breakdown: [
      { word: "できました", reading: "できました", meaning: "생겼습니다" },
    ] },
  { level: "N3", kanji: "裁判", reading: "さいばん", korean: "사이반", meaning: "재판",
    example: "裁判の結果を待っています。", exampleReading: "さいばんのけっかをまっています。", exampleKorean: "사이반노 켁카오 맛테이마스", exampleMeaning: "재판 결과를 기다리고 있습니다.",
    breakdown: [
      { word: "結果", reading: "けっか", meaning: "결과" },
    ] },
  { level: "N3", kanji: "警察", reading: "けいさつ", korean: "케-사츠", meaning: "경찰",
    example: "警察に事故を届けました。", exampleReading: "けいさつにじこをとどけました。", exampleKorean: "케-사츠니 지코오 토도케마시타", exampleMeaning: "경찰에 사고를 신고했습니다.",
    breakdown: [
      { word: "届けました", reading: "とどけました", meaning: "신고했습니다" },
    ] },
  { level: "N3", kanji: "犯罪", reading: "はんざい", korean: "한자이", meaning: "범죄",
    example: "この町は犯罪が少ないです。", exampleReading: "このまちははんざいがすくないです。", exampleKorean: "코노 마치와 한자이가 스쿠나이데스", exampleMeaning: "이 마을은 범죄가 적습니다.",
    breakdown: [
      { word: "少ないです", reading: "すくないです", meaning: "적습니다" },
    ] },
  { level: "N3", kanji: "事件", reading: "じけん", korean: "지켄", meaning: "사건",
    example: "大きな事件が起きました。", exampleReading: "おおきなじけんがおきました。", exampleKorean: "오-키나 지켄가 오키마시타", exampleMeaning: "큰 사건이 일어났습니다.",
    breakdown: [
      { word: "起きました", reading: "おきました", meaning: "일어났습니다" },
    ] },
  { level: "N3", kanji: "報道", reading: "ほうどう", korean: "호-도-", meaning: "보도",
    example: "このニュースは全国で報道されました。", exampleReading: "このニュースはぜんこくでほうどうされました。", exampleKorean: "코노 뉴-스와 젠코쿠데 호-도- 사레마시타", exampleMeaning: "이 뉴스는 전국에 보도되었습니다.",
    breakdown: [
      { word: "全国で", reading: "ぜんこくで", meaning: "전국에서" },
    ] },
  { level: "N3", kanji: "記者", reading: "きしゃ", korean: "키샤", meaning: "기자",
    example: "記者が現場に集まりました。", exampleReading: "きしゃがげんばにあつまりました。", exampleKorean: "키샤가 겐바니 아츠마리마시타", exampleMeaning: "기자들이 현장에 모였습니다.",
    breakdown: [
      { word: "現場", reading: "げんば", meaning: "현장" },
    ] },
  { level: "N3", kanji: "番組", reading: "ばんぐみ", korean: "방구미", meaning: "방송 프로그램",
    example: "好きなテレビ番組があります。", exampleReading: "すきなテレビばんぐみがあります。", exampleKorean: "스키나 테레비 방구미가 아리마스", exampleMeaning: "좋아하는 텔레비전 프로그램이 있습니다.",
    breakdown: [
      { word: "テレビ", reading: "テレビ", meaning: "텔레비전" },
    ] },
  { level: "N3", kanji: "放送", reading: "ほうそう", korean: "호-소-", meaning: "방송",
    example: "試合は生放送されました。", exampleReading: "しあいはなまほうそうされました。", exampleKorean: "시아이와 나마 호-소- 사레마시타", exampleMeaning: "시합은 생방송되었습니다.",
    breakdown: [
      { word: "生放送", reading: "なまほうそう", meaning: "생방송" },
    ] },
  { level: "N3", kanji: "広告", reading: "こうこく", korean: "코-코쿠", meaning: "광고",
    example: "テレビで新商品の広告を見ました。", exampleReading: "テレビでしんしょうひんのこうこくをみました。", exampleKorean: "테레비데 신쇼-힝노 코-코쿠오 미마시타", exampleMeaning: "텔레비전에서 신상품 광고를 봤습니다.",
    breakdown: [
      { word: "新商品", reading: "しんしょうひん", meaning: "신상품" },
    ] },
  { level: "N3", kanji: "宣伝", reading: "せんでん", korean: "센덴", meaning: "선전",
    example: "新しい店を宣伝しています。", exampleReading: "あたらしいみせをせんでんしています。", exampleKorean: "아타라시- 미세오 센덴 시테이마스", exampleMeaning: "새 가게를 홍보하고 있습니다.",
    breakdown: [
      { word: "新しい店", reading: "あたらしいみせ", meaning: "새 가게" },
    ] },
  { level: "N3", kanji: "商品", reading: "しょうひん", korean: "쇼-힝", meaning: "상품",
    example: "この商品はよく売れています。", exampleReading: "このしょうひんはよくうれています。", exampleKorean: "코노 쇼-힝와 요쿠 우레테이마스", exampleMeaning: "이 상품은 잘 팔리고 있습니다.",
    breakdown: [
      { word: "売れています", reading: "うれています", meaning: "팔리고 있습니다" },
    ] },
  { level: "N3", kanji: "製品", reading: "せいひん", korean: "세-힝", meaning: "제품",
    example: "新しい製品を開発しました。", exampleReading: "あたらしいせいひんをかいはつしました。", exampleKorean: "아타라시- 세-힝오 카이하츠 시마시타", exampleMeaning: "새로운 제품을 개발했습니다.",
    breakdown: [
      { word: "開発しました", reading: "かいはつしました", meaning: "개발했습니다" },
    ] },
  { level: "N3", kanji: "品質", reading: "ひんしつ", korean: "힌시츠", meaning: "품질",
    example: "この会社の品質は信頼できます。", exampleReading: "このかいしゃのひんしつはしんらいできます。", exampleKorean: "코노 카이샤노 힌시츠와 신라이 데키마스", exampleMeaning: "이 회사의 품질은 믿을 수 있습니다.",
    breakdown: [
      { word: "信頼できます", reading: "しんらいできます", meaning: "믿을 수 있습니다" },
    ] },
  { level: "N3", kanji: "素材", reading: "そざい", korean: "소자이", meaning: "소재",
    example: "天然の素材を使っています。", exampleReading: "てんねんのそざいをつかっています。", exampleKorean: "텐넨노 소자이오 츠캇테이마스", exampleMeaning: "천연 소재를 사용하고 있습니다.",
    breakdown: [
      { word: "天然の", reading: "てんねんの", meaning: "천연의" },
    ] },
  { level: "N3", kanji: "原料", reading: "げんりょう", korean: "겐료-", meaning: "원료",
    example: "小麦を原料にしたパンです。", exampleReading: "こむぎをげんりょうにしたパンです。", exampleKorean: "코무기오 겐료-니 시타 팡데스", exampleMeaning: "밀을 원료로 한 빵입니다.",
    breakdown: [
      { word: "小麦", reading: "こむぎ", meaning: "밀" },
    ] },
  { level: "N3", kanji: "材料", reading: "ざいりょう", korean: "자이료-", meaning: "재료",
    example: "料理の材料を買いに行きます。", exampleReading: "りょうりのざいりょうをかいにいきます。", exampleKorean: "료-리노 자이료-오 카이니 이키마스", exampleMeaning: "요리 재료를 사러 갑니다.",
    breakdown: [
      { word: "買いに行きます", reading: "かいにいきます", meaning: "사러 갑니다" },
    ] },
  { level: "N3", kanji: "農業", reading: "のうぎょう", korean: "노-교-", meaning: "농업",
    example: "祖父は農業をしています。", exampleReading: "そふはのうぎょうをしています。", exampleKorean: "소후와 노-교-오 시테이마스", exampleMeaning: "할아버지는 농업을 하고 있습니다.",
    breakdown: [
      { word: "祖父", reading: "そふ", meaning: "할아버지" },
    ] },
  { level: "N3", kanji: "漁業", reading: "ぎょぎょう", korean: "교교-", meaning: "어업",
    example: "この町は漁業が盛んです。", exampleReading: "このまちはぎょぎょうがさかんです。", exampleKorean: "코노 마치와 교교-가 사칸데스", exampleMeaning: "이 마을은 어업이 번성합니다.",
    breakdown: [
      { word: "盛んです", reading: "さかんです", meaning: "번성합니다" },
    ] },
  { level: "N3", kanji: "産業", reading: "さんぎょう", korean: "상교-", meaning: "산업",
    example: "観光産業が発展しています。", exampleReading: "かんこうさんぎょうがはってんしています。", exampleKorean: "캉코- 상교-가 핫텐 시테이마스", exampleMeaning: "관광 산업이 발전하고 있습니다.",
    breakdown: [
      { word: "観光", reading: "かんこう", meaning: "관광" },
    ] },
  { level: "N3", kanji: "貿易", reading: "ぼうえき", korean: "보-에키", meaning: "무역",
    example: "この会社は貿易を行っています。", exampleReading: "このかいしゃはぼうえきをおこなっています。", exampleKorean: "코노 카이샤와 보-에키오 오코낫테이마스", exampleMeaning: "이 회사는 무역을 하고 있습니다.",
    breakdown: [
      { word: "会社", reading: "かいしゃ", meaning: "회사" },
    ] },
  { level: "N3", kanji: "輸出", reading: "ゆしゅつ", korean: "유슈츠", meaning: "수출",
    example: "車を海外に輸出しています。", exampleReading: "くるまをかいがいにゆしゅつしています。", exampleKorean: "쿠루마오 카이가이니 유슈츠 시테이마스", exampleMeaning: "자동차를 해외로 수출하고 있습니다.",
    breakdown: [
      { word: "海外に", reading: "かいがいに", meaning: "해외로" },
    ] },
  { level: "N3", kanji: "輸入", reading: "ゆにゅう", korean: "유뉴-", meaning: "수입",
    example: "この果物は外国から輸入されています。", exampleReading: "このくだものはがいこくからゆにゅうされています。", exampleKorean: "코노 쿠다모노와 가이코쿠카라 유뉴- 사레테이마스", exampleMeaning: "이 과일은 외국에서 수입됩니다.",
    breakdown: [
      { word: "外国から", reading: "がいこくから", meaning: "외국에서" },
    ] },
  { level: "N3", kanji: "施設", reading: "しせつ", korean: "시세츠", meaning: "시설",
    example: "新しいスポーツ施設ができました。", exampleReading: "あたらしいスポーツしせつができました。", exampleKorean: "아타라시- 스포-츠 시세츠가 데키마시타", exampleMeaning: "새로운 스포츠 시설이 생겼습니다.",
    breakdown: [
      { word: "スポーツ", reading: "スポーツ", meaning: "스포츠" },
    ] },
  { level: "N3", kanji: "設備", reading: "せつび", korean: "세츠비", meaning: "설비",
    example: "このホテルは設備が整っています。", exampleReading: "このホテルはせつびがととのっています。", exampleKorean: "코노 호테루와 세츠비가 토토놋테이마스", exampleMeaning: "이 호텔은 설비가 잘 갖춰져 있습니다.",
    breakdown: [
      { word: "整っています", reading: "ととのっています", meaning: "갖춰져 있습니다" },
    ] },
  { level: "N3", kanji: "装置", reading: "そうち", korean: "소-치", meaning: "장치",
    example: "安全のための装置を付けました。", exampleReading: "あんぜんのためのそうちをつけました。", exampleKorean: "안젠노 타메노 소-치오 츠케마시타", exampleMeaning: "안전을 위한 장치를 달았습니다.",
    breakdown: [
      { word: "付けました", reading: "つけました", meaning: "달았습니다" },
    ] },
  { level: "N3", kanji: "機能", reading: "きのう", korean: "키노-", meaning: "기능",
    example: "このカメラは多くの機能があります。", exampleReading: "このカメラはおおくのきのうがあります。", exampleKorean: "코노 카메라와 오오쿠노 키노-가 아리마스", exampleMeaning: "이 카메라는 많은 기능이 있습니다.",
    breakdown: [
      { word: "多くの", reading: "おおくの", meaning: "많은" },
    ] },
  { level: "N3", kanji: "性能", reading: "せいのう", korean: "세-노-", meaning: "성능",
    example: "性能がいいパソコンを買いました。", exampleReading: "せいのうがいいパソコンをかいました。", exampleKorean: "세-노-가 이- 파소콘오 카이마시타", exampleMeaning: "성능이 좋은 컴퓨터를 샀습니다.",
    breakdown: [
      { word: "パソコン", reading: "パソコン", meaning: "컴퓨터" },
    ] },
  { level: "N3", kanji: "構造", reading: "こうぞう", korean: "코-조-", meaning: "구조",
    example: "建物の構造を調べます。", exampleReading: "たてもののこうぞうをしらべます。", exampleKorean: "타테모노노 코-조-오 시라베마스", exampleMeaning: "건물의 구조를 조사합니다.",
    breakdown: [
      { word: "建物", reading: "たてもの", meaning: "건물" },
    ] },
  { level: "N3", kanji: "仕組み", reading: "しくみ", korean: "시쿠미", meaning: "구조, 메커니즘",
    example: "この機械の仕組みが分かりません。", exampleReading: "このきかいのしくみがわかりません。", exampleKorean: "코노 키카이노 시쿠미가 와카리마셍", exampleMeaning: "이 기계의 구조를 모르겠습니다.",
    breakdown: [
      { word: "機械", reading: "きかい", meaning: "기계" },
    ] },
  { level: "N3", kanji: "手法", reading: "しゅほう", korean: "슈호-", meaning: "기법",
    example: "新しい手法を取り入れました。", exampleReading: "あたらしいしゅほうをとりいれました。", exampleKorean: "아타라시- 슈호-오 토리이레마시타", exampleMeaning: "새로운 기법을 도입했습니다.",
    breakdown: [
      { word: "取り入れました", reading: "とりいれました", meaning: "도입했습니다" },
    ] },
  { level: "N3", kanji: "姿勢", reading: "しせい", korean: "시세-", meaning: "자세",
    example: "姿勢を正して座りました。", exampleReading: "しせいをただしてすわりました。", exampleKorean: "시세-오 타다시테 스와리마시타", exampleMeaning: "자세를 바로 하고 앉았습니다.",
    breakdown: [
      { word: "正して", reading: "ただして", meaning: "바로 하고" },
    ] },
  { level: "N3", kanji: "動作", reading: "どうさ", korean: "도-사", meaning: "동작",
    example: "このロボットの動作は速いです。", exampleReading: "このロボットのどうさははやいです。", exampleKorean: "코노 로보토노 도-사와 하야이데스", exampleMeaning: "이 로봇의 동작은 빠릅니다.",
    breakdown: [
      { word: "ロボット", reading: "ロボット", meaning: "로봇" },
    ] },
  { level: "N3", kanji: "行動", reading: "こうどう", korean: "코-도-", meaning: "행동",
    example: "早めに行動したほうがいいです。", exampleReading: "はやめにこうどうしたほうがいいです。", exampleKorean: "하야메니 코-도- 시타 호-가 이-데스", exampleMeaning: "일찍 행동하는 것이 좋습니다.",
    breakdown: [
      { word: "早めに", reading: "はやめに", meaning: "일찍" },
    ] },
  { level: "N3", kanji: "行為", reading: "こうい", korean: "코-이", meaning: "행위",
    example: "その行為は許されません。", exampleReading: "そのこういはゆるされません。", exampleKorean: "소노 코-이와 유루사레마셍", exampleMeaning: "그 행위는 용서받을 수 없습니다.",
    breakdown: [
      { word: "許されません", reading: "ゆるされません", meaning: "용서받을 수 없습니다" },
    ] },
  { level: "N3", kanji: "反応", reading: "はんのう", korean: "한노-", meaning: "반응",
    example: "お客さんの反応がよかったです。", exampleReading: "おきゃくさんのはんのうがよかったです。", exampleKorean: "오캬쿠상노 한노-가 요캇타데스", exampleMeaning: "손님의 반응이 좋았습니다.",
    breakdown: [
      { word: "お客さん", reading: "おきゃくさん", meaning: "손님" },
    ] },
  { level: "N3", kanji: "反省", reading: "はんせい", korean: "한세-", meaning: "반성",
    example: "自分の失敗を反省しました。", exampleReading: "じぶんのしっぱいをはんせいしました。", exampleKorean: "지분노 십파이오 한세- 시마시타", exampleMeaning: "자신의 실수를 반성했습니다.",
    breakdown: [
      { word: "失敗", reading: "しっぱい", meaning: "실수" },
    ] },
  { level: "N3", kanji: "反対", reading: "はんたい", korean: "한타이", meaning: "반대",
    example: "その計画に反対しました。", exampleReading: "そのけいかくにはんたいしました。", exampleKorean: "소노 케-카쿠니 한타이 시마시타", exampleMeaning: "그 계획에 반대했습니다.",
    breakdown: [
      { word: "計画", reading: "けいかく", meaning: "계획" },
    ] },
  { level: "N3", kanji: "賛成", reading: "さんせい", korean: "산세-", meaning: "찬성",
    example: "私はその意見に賛成です。", exampleReading: "わたしはそのいけんにさんせいです。", exampleKorean: "와타시와 소노 이켄니 산세-데스", exampleMeaning: "저는 그 의견에 찬성합니다.",
    breakdown: [
      { word: "意見", reading: "いけん", meaning: "의견" },
    ] },
  { level: "N3", kanji: "満足", reading: "まんぞく", korean: "만조쿠", meaning: "만족",
    example: "今の生活に満足しています。", exampleReading: "いまのせいかつにまんぞくしています。", exampleKorean: "이마노 세-카츠니 만조쿠 시테이마스", exampleMeaning: "지금의 생활에 만족하고 있습니다.",
    breakdown: [
      { word: "生活", reading: "せいかつ", meaning: "생활" },
    ] },
  { level: "N3", kanji: "不満", reading: "ふまん", korean: "후만", meaning: "불만",
    example: "サービスに不満があります。", exampleReading: "サービスにふまんがあります。", exampleKorean: "사-비스니 후만가 아리마스", exampleMeaning: "서비스에 불만이 있습니다.",
    breakdown: [
      { word: "サービス", reading: "サービス", meaning: "서비스" },
    ] },
  { level: "N3", kanji: "苦労", reading: "くろう", korean: "쿠로-", meaning: "고생",
    example: "若い頃は苦労しました。", exampleReading: "わかいころはくろうしました。", exampleKorean: "와카이 코로와 쿠로- 시마시타", exampleMeaning: "젊었을 때는 고생했습니다.",
    breakdown: [
      { word: "若い頃", reading: "わかいころ", meaning: "젊었을 때" },
    ] },
  { level: "N3", kanji: "我々", reading: "われわれ", korean: "와레와레", meaning: "우리",
    example: "我々の目標を確認しましょう。", exampleReading: "われわれのもくひょうをかくにんしましょう。", exampleKorean: "와레와레노 모쿠효-오 카쿠닌 시마쇼-", exampleMeaning: "우리의 목표를 확인합시다.",
    breakdown: [
      { word: "目標", reading: "もくひょう", meaning: "목표" },
    ] },
  { level: "N3", kanji: "互いに", reading: "たがいに", korean: "타가이니", meaning: "서로",
    example: "互いに助け合いましょう。", exampleReading: "たがいにたすけあいましょう。", exampleKorean: "타가이니 타스케아이마쇼-", exampleMeaning: "서로 도웁시다.",
    breakdown: [
      { word: "助け合いましょう", reading: "たすけあいましょう", meaning: "도웁시다" },
    ] },
  { level: "N3", kanji: "直接", reading: "ちょくせつ", korean: "쵸쿠세츠", meaning: "직접",
    example: "直接会って話しましょう。", exampleReading: "ちょくせつあってはなしましょう。", exampleKorean: "쵸쿠세츠 앗테 하나시마쇼-", exampleMeaning: "직접 만나서 이야기합시다.",
    breakdown: [
      { word: "会って", reading: "あって", meaning: "만나서" },
    ] },
  { level: "N3", kanji: "間接", reading: "かんせつ", korean: "칸세츠", meaning: "간접",
    example: "間接的に聞いた話です。", exampleReading: "かんせつてきにきいたはなしです。", exampleKorean: "칸세츠테키니 키이타 하나시데스", exampleMeaning: "간접적으로 들은 이야기입니다.",
    breakdown: [
      { word: "聞いた話", reading: "きいたはなし", meaning: "들은 이야기" },
    ] },
  { level: "N3", kanji: "従来", reading: "じゅうらい", korean: "쥬-라이", meaning: "종래",
    example: "従来の方法を見直します。", exampleReading: "じゅうらいのほうほうをみなおします。", exampleKorean: "쥬-라이노 호-호-오 미나오시마스", exampleMeaning: "종래의 방법을 재검토합니다.",
    breakdown: [
      { word: "見直します", reading: "みなおします", meaning: "재검토합니다" },
    ] },
  { level: "N3", kanji: "現代", reading: "げんだい", korean: "겐다이", meaning: "현대",
    example: "現代の社会は変化が速いです。", exampleReading: "げんだいのしゃかいはへんかがはやいです。", exampleKorean: "겐다이노 샤카이와 헨카가 하야이데스", exampleMeaning: "현대 사회는 변화가 빠릅니다.",
    breakdown: [
      { word: "変化が速い", reading: "へんかがはやい", meaning: "변화가 빠르다" },
    ] },
  { level: "N3", kanji: "将来", reading: "しょうらい", korean: "쇼-라이", meaning: "장래",
    example: "将来の夢について話しました。", exampleReading: "しょうらいのゆめについてはなしました。", exampleKorean: "쇼-라이노 유메니 츠이테 하나시마시타", exampleMeaning: "장래의 꿈에 대해 이야기했습니다.",
    breakdown: [
      { word: "夢", reading: "ゆめ", meaning: "꿈" },
    ] },
  { level: "N3", kanji: "未来", reading: "みらい", korean: "미라이", meaning: "미래",
    example: "明るい未来を信じています。", exampleReading: "あかるいみらいをしんじています。", exampleKorean: "아카루이 미라이오 신지테이마스", exampleMeaning: "밝은 미래를 믿고 있습니다.",
    breakdown: [
      { word: "信じています", reading: "しんじています", meaning: "믿고 있습니다" },
    ] },
  { level: "N3", kanji: "意欲", reading: "いよく", korean: "이요쿠", meaning: "의욕",
    example: "彼は仕事への意欲があります。", exampleReading: "かれはしごとへのいよくがあります。", exampleKorean: "카레와 시고토에노 이요쿠가 아리마스", exampleMeaning: "그는 일에 대한 의욕이 있습니다.",
    breakdown: [
      { word: "仕事への", reading: "しごとへの", meaning: "일에 대한" },
    ] },
  { level: "N3", kanji: "気配", reading: "けはい", korean: "케하이", meaning: "기척",
    example: "誰かがいる気配がしました。", exampleReading: "だれかがいるけはいがしました。", exampleKorean: "다레카가 이루 케하이가 시마시타", exampleMeaning: "누군가 있는 기척이 났습니다.",
    breakdown: [
      { word: "誰かがいる", reading: "だれかがいる", meaning: "누군가 있는" },
    ] },
  { level: "N3", kanji: "実際", reading: "じっさい", korean: "짓사이", meaning: "실제",
    example: "実際に行ってみて分かりました。", exampleReading: "じっさいにいってみてわかりました。", exampleKorean: "짓사이니 잇테미테 와카리마시타", exampleMeaning: "실제로 가 보고 알았습니다.",
    breakdown: [
      { word: "行ってみて", reading: "いってみて", meaning: "가 보고" },
    ] },

  { level: "N3", kanji: "呼吸", reading: "こきゅう", korean: "코큐-", meaning: "호흡",
    example: "深呼吸をして落ち着きます。", exampleReading: "しんこきゅうをしておちつきます。", exampleKorean: "신코큐-오 시테 오치츠키마스", exampleMeaning: "심호흡을 하고 진정합니다.",
    breakdown: [
      { word: "落ち着きます", reading: "おちつきます", meaning: "진정합니다" },
    ] },
  { level: "N3", kanji: "心臓", reading: "しんぞう", korean: "신조-", meaning: "심장",
    example: "心臓がどきどきしています。", exampleReading: "しんぞうがどきどきしています。", exampleKorean: "신조-가 도키도키 시테이마스", exampleMeaning: "심장이 두근거리고 있습니다.",
    breakdown: [
      { word: "どきどき", reading: "どきどき", meaning: "두근두근" },
    ] },
  { level: "N3", kanji: "骨", reading: "ほね", korean: "호네", meaning: "뼈",
    example: "転んで骨を折りました。", exampleReading: "ころんでほねをおりました。", exampleKorean: "코론데 호네오 오리마시타", exampleMeaning: "넘어져서 뼈가 부러졌습니다.",
    breakdown: [
      { word: "転んで", reading: "ころんで", meaning: "넘어져서" },
    ] },
  { level: "N3", kanji: "筋肉", reading: "きんにく", korean: "킨니쿠", meaning: "근육",
    example: "運動して筋肉をつけます。", exampleReading: "うんどうしてきんにくをつけます。", exampleKorean: "운도- 시테 킨니쿠오 츠케마스", exampleMeaning: "운동해서 근육을 키웁니다.",
    breakdown: [
      { word: "つけます", reading: "つけます", meaning: "키웁니다" },
    ] },
  { level: "N3", kanji: "皮膚", reading: "ひふ", korean: "히후", meaning: "피부",
    example: "皮膚が乾燥しています。", exampleReading: "ひふがかんそうしています。", exampleKorean: "히후가 칸소- 시테이마스", exampleMeaning: "피부가 건조합니다.",
    breakdown: [
      { word: "乾燥しています", reading: "かんそうしています", meaning: "건조합니다" },
    ] },
  { level: "N3", kanji: "血", reading: "ち", korean: "치", meaning: "피",
    example: "指を切って血が出ました。", exampleReading: "ゆびをきってちがでました。", exampleKorean: "유비오 킷테 치가 데마시타", exampleMeaning: "손가락을 베어 피가 났습니다.",
    breakdown: [
      { word: "指を切って", reading: "ゆびをきって", meaning: "손가락을 베어" },
    ] },
  { level: "N3", kanji: "汗", reading: "あせ", korean: "아세", meaning: "땀",
    example: "運動して汗をかきました。", exampleReading: "うんどうしてあせをかきました。", exampleKorean: "운도- 시테 아세오 카키마시타", exampleMeaning: "운동해서 땀을 흘렸습니다.",
    breakdown: [
      { word: "かきました", reading: "かきました", meaning: "흘렸습니다" },
    ] },
  { level: "N3", kanji: "涙", reading: "なみだ", korean: "나미다", meaning: "눈물",
    example: "映画を見て涙が出ました。", exampleReading: "えいがをみてなみだがでました。", exampleKorean: "에-가오 미테 나미다가 데마시타", exampleMeaning: "영화를 보고 눈물이 났습니다.",
    breakdown: [
      { word: "映画", reading: "えいが", meaning: "영화" },
    ] },
  { level: "N3", kanji: "呼ぶ", reading: "よぶ", korean: "요부", meaning: "부르다",
    example: "名前を呼ばれました。", exampleReading: "なまえをよばれました。", exampleKorean: "나마에오 요바레마시타", exampleMeaning: "이름을 불렸습니다.",
    breakdown: [
      { word: "呼ばれました", reading: "よばれました", meaning: "불렸습니다 (수동형)" },
    ] },
  { level: "N3", kanji: "叫ぶ", reading: "さけぶ", korean: "사케부", meaning: "외치다",
    example: "大きな声で叫びました。", exampleReading: "おおきなこえでさけびました。", exampleKorean: "오-키나 코에데 사케비마시타", exampleMeaning: "큰 소리로 외쳤습니다.",
    breakdown: [
      { word: "大きな声で", reading: "おおきなこえで", meaning: "큰 소리로" },
    ] },
  { level: "N3", kanji: "眠る", reading: "ねむる", korean: "네무루", meaning: "잠들다",
    example: "なかなか眠れませんでした。", exampleReading: "なかなかねむれませんでした。", exampleKorean: "나카나카 네무레마센데시타", exampleMeaning: "좀처럼 잠들지 못했습니다.",
    breakdown: [
      { word: "なかなか", reading: "なかなか", meaning: "좀처럼" },
    ] },
  { level: "N3", kanji: "目覚める", reading: "めざめる", korean: "메자메루", meaning: "눈뜨다, 잠에서 깨다",
    example: "朝早く目覚めました。", exampleReading: "あさはやくめざめました。", exampleKorean: "아사 하야쿠 메자메마시타", exampleMeaning: "아침 일찍 잠에서 깼습니다.",
    breakdown: [
      { word: "朝早く", reading: "あさはやく", meaning: "아침 일찍" },
    ] },
  { level: "N3", kanji: "疲れる", reading: "つかれる", korean: "츠카레루", meaning: "피곤하다",
    example: "今日はとても疲れました。", exampleReading: "きょうはとてもつかれました。", exampleKorean: "쿄-와 도테모 츠카레마시타", exampleMeaning: "오늘은 아주 피곤했습니다.",
    breakdown: [
      { word: "今日は", reading: "きょうは", meaning: "오늘은" },
    ] },
  { level: "N3", kanji: "太る", reading: "ふとる", korean: "후토루", meaning: "살찌다",
    example: "最近、少し太りました。", exampleReading: "さいきん、すこしふとりました。", exampleKorean: "사이킹 스코시 후토리마시타", exampleMeaning: "요즘 조금 살쪘습니다.",
    breakdown: [
      { word: "最近", reading: "さいきん", meaning: "요즘" },
    ] },
  { level: "N3", kanji: "痩せる", reading: "やせる", korean: "야세루", meaning: "마르다, 살빠지다",
    example: "運動して痩せました。", exampleReading: "うんどうしてやせました。", exampleKorean: "운도- 시테 야세마시타", exampleMeaning: "운동해서 살이 빠졌습니다.",
    breakdown: [
      { word: "運動して", reading: "うんどうして", meaning: "운동해서" },
    ] },
  { level: "N3", kanji: "育つ", reading: "そだつ", korean: "소다츠", meaning: "자라다",
    example: "子供はすくすく育っています。", exampleReading: "こどもはすくすくそだっています。", exampleKorean: "코도모와 스쿠스쿠 소닷테이마스", exampleMeaning: "아이는 무럭무럭 자라고 있습니다.",
    breakdown: [
      { word: "すくすく", reading: "すくすく", meaning: "무럭무럭" },
    ] },
  { level: "N3", kanji: "成長", reading: "せいちょう", korean: "세-쵸-", meaning: "성장",
    example: "会社は急速に成長しました。", exampleReading: "かいしゃはきゅうそくにせいちょうしました。", exampleKorean: "카이샤와 큐-소쿠니 세-쵸- 시마시타", exampleMeaning: "회사는 급속히 성장했습니다.",
    breakdown: [
      { word: "急速に", reading: "きゅうそくに", meaning: "급속히" },
    ] },
  { level: "N3", kanji: "発達", reading: "はったつ", korean: "핫타츠", meaning: "발달",
    example: "科学技術が発達しています。", exampleReading: "かがくぎじゅつがはったつしています。", exampleKorean: "카가쿠 기쥬츠가 핫타츠 시테이마스", exampleMeaning: "과학 기술이 발달하고 있습니다.",
    breakdown: [
      { word: "科学技術", reading: "かがくぎじゅつ", meaning: "과학 기술" },
    ] },
  { level: "N3", kanji: "進化", reading: "しんか", korean: "신카", meaning: "진화",
    example: "技術は日々進化しています。", exampleReading: "ぎじゅつはひびしんかしています。", exampleKorean: "기쥬츠와 히비 신카 시테이마스", exampleMeaning: "기술은 나날이 진화하고 있습니다.",
    breakdown: [
      { word: "日々", reading: "ひび", meaning: "나날이" },
    ] },
  { level: "N3", kanji: "衰える", reading: "おとろえる", korean: "오토로에루", meaning: "쇠약해지다",
    example: "年齢とともに体力が衰えます。", exampleReading: "ねんれいとともにたいりょくがおとろえます。", exampleKorean: "넨레-토 토모니 타이료쿠가 오토로에마스", exampleMeaning: "나이와 함께 체력이 쇠약해집니다.",
    breakdown: [
      { word: "年齢とともに", reading: "ねんれいとともに", meaning: "나이와 함께" },
    ] },
  { level: "N3", kanji: "老いる", reading: "おいる", korean: "오이루", meaning: "늙다",
    example: "両親も老いてきました。", exampleReading: "りょうしんもおいてきました。", exampleKorean: "료-신모 오이테키마시타", exampleMeaning: "부모님도 늙어가고 있습니다.",
    breakdown: [
      { word: "てきました", reading: "てきました", meaning: "~해왔습니다" },
    ] },
  { level: "N3", kanji: "若い", reading: "わかい", korean: "와카이", meaning: "젊다",
    example: "若い頃はよく旅行しました。", exampleReading: "わかいころはよくりょこうしました。", exampleKorean: "와카이 코로와 요쿠 료코- 시마시타", exampleMeaning: "젊었을 때는 자주 여행했습니다.",
    breakdown: [
      { word: "旅行しました", reading: "りょこうしました", meaning: "여행했습니다" },
    ] },
  { level: "N3", kanji: "幼い", reading: "おさない", korean: "오사나이", meaning: "어리다",
    example: "幼い頃の思い出があります。", exampleReading: "おさないころのおもいでがあります。", exampleKorean: "오사나이 코로노 오모이데가 아리마스", exampleMeaning: "어릴 적 추억이 있습니다.",
    breakdown: [
      { word: "思い出", reading: "おもいで", meaning: "추억" },
    ] },
  { level: "N3", kanji: "大人", reading: "おとな", korean: "오토나", meaning: "어른",
    example: "大人になったら医者になりたいです。", exampleReading: "おとなになったらいしゃになりたいです。", exampleKorean: "오토나니 낫타라 이샤니 나리타이데스", exampleMeaning: "어른이 되면 의사가 되고 싶습니다.",
    breakdown: [
      { word: "になったら", reading: "になったら", meaning: "~이 되면" },
    ] },
  { level: "N3", kanji: "自然", reading: "しぜん", korean: "시젠", meaning: "자연",
    example: "自然の中でゆっくり過ごします。", exampleReading: "しぜんのなかでゆっくりすごします。", exampleKorean: "시젠노 나카데 육쿠리 스고시마스", exampleMeaning: "자연 속에서 천천히 지냅니다.",
    breakdown: [
      { word: "ゆっくり", reading: "ゆっくり", meaning: "천천히" },
    ] },
  { level: "N3", kanji: "森", reading: "もり", korean: "모리", meaning: "숲",
    example: "森の中を散歩しました。", exampleReading: "もりのなかをさんぽしました。", exampleKorean: "모리노 나카오 삼포 시마시타", exampleMeaning: "숲속을 산책했습니다.",
    breakdown: [
      { word: "散歩しました", reading: "さんぽしました", meaning: "산책했습니다" },
    ] },
  { level: "N3", kanji: "林", reading: "はやし", korean: "하야시", meaning: "수풀",
    example: "家の裏に小さな林があります。", exampleReading: "いえのうらにちいさなはやしがあります。", exampleKorean: "이에노 우라니 치-사나 하야시가 아리마스", exampleMeaning: "집 뒤에 작은 수풀이 있습니다.",
    breakdown: [
      { word: "家の裏", reading: "いえのうら", meaning: "집 뒤" },
    ] },
  { level: "N3", kanji: "川", reading: "かわ", korean: "카와", meaning: "강",
    example: "川で魚を釣りました。", exampleReading: "かわでさかなをつりました。", exampleKorean: "카와데 사카나오 츠리마시타", exampleMeaning: "강에서 물고기를 낚았습니다.",
    breakdown: [
      { word: "釣りました", reading: "つりました", meaning: "낚았습니다" },
    ] },
  { level: "N3", kanji: "湖", reading: "みずうみ", korean: "미즈우미", meaning: "호수",
    example: "湖のそばでキャンプをしました。", exampleReading: "みずうみのそばでキャンプをしました。", exampleKorean: "미즈우미노 소바데 캼푸오 시마시타", exampleMeaning: "호수 옆에서 캠프를 했습니다.",
    breakdown: [
      { word: "そばで", reading: "そばで", meaning: "옆에서" },
    ] },
  { level: "N3", kanji: "島", reading: "しま", korean: "시마", meaning: "섬",
    example: "小さな島に旅行しました。", exampleReading: "ちいさなしまにりょこうしました。", exampleKorean: "치-사나 시마니 료코- 시마시타", exampleMeaning: "작은 섬으로 여행했습니다.",
    breakdown: [
      { word: "小さな", reading: "ちいさな", meaning: "작은" },
    ] },
  { level: "N3", kanji: "岩", reading: "いわ", korean: "이와", meaning: "바위",
    example: "大きな岩に座りました。", exampleReading: "おおきないわにすわりました。", exampleKorean: "오-키나 이와니 스와리마시타", exampleMeaning: "큰 바위에 앉았습니다.",
    breakdown: [
      { word: "大きな", reading: "おおきな", meaning: "큰" },
    ] },
  { level: "N3", kanji: "砂", reading: "すな", korean: "스나", meaning: "모래",
    example: "子供が砂で遊んでいます。", exampleReading: "こどもがすなであそんでいます。", exampleKorean: "코도모가 스나데 아손데이마스", exampleMeaning: "아이가 모래로 놀고 있습니다.",
    breakdown: [
      { word: "遊んでいます", reading: "あそんでいます", meaning: "놀고 있습니다" },
    ] },
  { level: "N3", kanji: "土", reading: "つち", korean: "츠치", meaning: "흙",
    example: "花を植えるために土を用意します。", exampleReading: "はなをうえるためにつちをよういします。", exampleKorean: "하나오 우에루 타메니 츠치오 요-이 시마스", exampleMeaning: "꽃을 심기 위해 흙을 준비합니다.",
    breakdown: [
      { word: "植えるために", reading: "うえるために", meaning: "심기 위해" },
    ] },
  { level: "N3", kanji: "植物", reading: "しょくぶつ", korean: "쇼쿠부츠", meaning: "식물",
    example: "部屋に植物を置いています。", exampleReading: "へやにしょくぶつをおいています。", exampleKorean: "헤야니 쇼쿠부츠오 오이테이마스", exampleMeaning: "방에 식물을 두고 있습니다.",
    breakdown: [
      { word: "部屋に", reading: "へやに", meaning: "방에" },
    ] },
  { level: "N3", kanji: "動物", reading: "どうぶつ", korean: "도-부츠", meaning: "동물",
    example: "動物が好きで獣医になりました。", exampleReading: "どうぶつがすきでじゅういになりました。", exampleKorean: "도-부츠가 스키데 쥬-이니 나리마시타", exampleMeaning: "동물을 좋아해서 수의사가 되었습니다.",
    breakdown: [
      { word: "獣医", reading: "じゅうい", meaning: "수의사" },
    ] },
  { level: "N3", kanji: "昆虫", reading: "こんちゅう", korean: "콘츄-", meaning: "곤충",
    example: "息子は昆虫が大好きです。", exampleReading: "むすこはこんちゅうがだいすきです。", exampleKorean: "무스코와 콘츄-가 다이스키데스", exampleMeaning: "아들은 곤충을 아주 좋아합니다.",
    breakdown: [
      { word: "息子", reading: "むすこ", meaning: "아들" },
    ] },
  { level: "N3", kanji: "資源", reading: "しげん", korean: "시겐", meaning: "자원",
    example: "資源を大切に使いましょう。", exampleReading: "しげんをたいせつにつかいましょう。", exampleKorean: "시겐오 타이세츠니 츠카이마쇼-", exampleMeaning: "자원을 소중히 씁시다.",
    breakdown: [
      { word: "大切に", reading: "たいせつに", meaning: "소중히" },
    ] },
  { level: "N3", kanji: "保護", reading: "ほご", korean: "호고", meaning: "보호",
    example: "野生動物を保護しています。", exampleReading: "やせいどうぶつをほごしています。", exampleKorean: "야세- 도-부츠오 호고 시테이마스", exampleMeaning: "야생동물을 보호하고 있습니다.",
    breakdown: [
      { word: "野生動物", reading: "やせいどうぶつ", meaning: "야생동물" },
    ] },
  { level: "N3", kanji: "汚染", reading: "おせん", korean: "오센", meaning: "오염",
    example: "川の汚染が問題になっています。", exampleReading: "かわのおせんがもんだいになっています。", exampleKorean: "카와노 오센가 몬다이니 낫테이마스", exampleMeaning: "강 오염이 문제가 되고 있습니다.",
    breakdown: [
      { word: "問題になっています", reading: "もんだいになっています", meaning: "문제가 되고 있습니다" },
    ] },
  { level: "N3", kanji: "温暖化", reading: "おんだんか", korean: "온단카", meaning: "온난화",
    example: "地球温暖化が進んでいます。", exampleReading: "ちきゅうおんだんかがすすんでいます。", exampleKorean: "치큐- 온단카가 스슨데이마스", exampleMeaning: "지구온난화가 진행되고 있습니다.",
    breakdown: [
      { word: "地球", reading: "ちきゅう", meaning: "지구" },
    ] },

  { level: "N3", kanji: "講義", reading: "こうぎ", korean: "코-기", meaning: "강의",
    example: "大学で経済学の講義を受けています。", exampleReading: "だいがくでけいざいがくのこうぎをうけています。", exampleKorean: "다이가쿠데 케-자이가쿠노 코-기오 우케테이마스", exampleMeaning: "대학에서 경제학 강의를 듣고 있습니다.",
    breakdown: [
      { word: "経済学", reading: "けいざいがく", meaning: "경제학" }
    ] },
  { level: "N3", kanji: "面接", reading: "めんせつ", korean: "멘세츠", meaning: "면접",
    example: "明日、会社の面接があります。", exampleReading: "あした、かいしゃのめんせつがあります。", exampleKorean: "아시타 카이샤노 멘세츠가 아리마스", exampleMeaning: "내일 회사 면접이 있습니다.",
    breakdown: [
      { word: "会社の", reading: "かいしゃの", meaning: "회사의" }
    ] },
  { level: "N3", kanji: "履歴書", reading: "りれきしょ", korean: "리레키쇼", meaning: "이력서",
    example: "履歴書を書いて送りました。", exampleReading: "りれきしょをかいておくりました。", exampleKorean: "리레키쇼오 카이테 오쿠리마시타", exampleMeaning: "이력서를 써서 보냈습니다.",
    breakdown: [
      { word: "送りました", reading: "おくりました", meaning: "보냈습니다" }
    ] },
  { level: "N3", kanji: "給与", reading: "きゅうよ", korean: "큐-요", meaning: "급여",
    example: "給与は毎月二十五日に支払われます。", exampleReading: "きゅうよはまいつきにじゅうごにちにしはらわれます。", exampleKorean: "큐-요와 마이츠키 니쥬-고니치니 시하라와레마스", exampleMeaning: "급여는 매달 25일에 지급됩니다.",
    breakdown: [
      { word: "支払われます", reading: "しはらわれます", meaning: "지급됩니다 (수동형)" }
    ] },
  { level: "N3", kanji: "手当", reading: "てあて", korean: "테아테", meaning: "수당",
    example: "残業手当がつきます。", exampleReading: "ざんぎょうてあてがつきます。", exampleKorean: "장교- 테아테가 츠키마스", exampleMeaning: "야근 수당이 붙습니다.",
    breakdown: [
      { word: "残業", reading: "ざんぎょう", meaning: "야근" }
    ] },
  { level: "N3", kanji: "待遇", reading: "たいぐう", korean: "타이구-", meaning: "대우",
    example: "この会社は待遇がいいです。", exampleReading: "このかいしゃはたいぐうがいいです。", exampleKorean: "코노 카이샤와 타이구-가 이-데스", exampleMeaning: "이 회사는 대우가 좋습니다.",
    breakdown: [
      { word: "いいです", reading: "いいです", meaning: "좋습니다" }
    ] },
  { level: "N3", kanji: "職場", reading: "しょくば", korean: "쇼쿠바", meaning: "직장",
    example: "新しい職場に慣れてきました。", exampleReading: "あたらしいしょくばになれてきました。", exampleKorean: "아타라시- 쇼쿠바니 나레테키마시타", exampleMeaning: "새 직장에 익숙해졌습니다.",
    breakdown: [
      { word: "慣れてきました", reading: "なれてきました", meaning: "익숙해졌습니다" }
    ] },
  { level: "N3", kanji: "労働", reading: "ろうどう", korean: "로-도-", meaning: "노동",
    example: "長時間労働が問題になっています。", exampleReading: "ちょうじかんろうどうがもんだいになっています。", exampleKorean: "쵸-지캉 로-도-가 몬다이니 낫테이마스", exampleMeaning: "장시간 노동이 문제가 되고 있습니다.",
    breakdown: [
      { word: "長時間", reading: "ちょうじかん", meaning: "장시간" }
    ] },
  { level: "N3", kanji: "労働者", reading: "ろうどうしゃ", korean: "로-도-샤", meaning: "노동자",
    example: "労働者の権利を守ります。", exampleReading: "ろうどうしゃのけんりをまもります。", exampleKorean: "로-도-샤노 켄리오 마모리마스", exampleMeaning: "노동자의 권리를 지킵니다.",
    breakdown: [
      { word: "権利", reading: "けんり", meaning: "권리" }
    ] },
  { level: "N3", kanji: "雇用", reading: "こよう", korean: "코요-", meaning: "고용",
    example: "若者の雇用を増やします。", exampleReading: "わかもののこようをふやします。", exampleKorean: "와카모노노 코요-오 후야시마스", exampleMeaning: "젊은이의 고용을 늘립니다.",
    breakdown: [
      { word: "増やします", reading: "ふやします", meaning: "늘립니다" }
    ] },
  { level: "N3", kanji: "解雇", reading: "かいこ", korean: "카이코", meaning: "해고",
    example: "突然、解雇されました。", exampleReading: "とつぜん、かいこされました。", exampleKorean: "토츠젠 카이코 사레마시타", exampleMeaning: "갑자기 해고당했습니다.",
    breakdown: [
      { word: "突然", reading: "とつぜん", meaning: "갑자기" }
    ] },
  { level: "N3", kanji: "昇給", reading: "しょうきゅう", korean: "쇼-큐-", meaning: "급여 인상",
    example: "来月から昇給します。", exampleReading: "らいげつからしょうきゅうします。", exampleKorean: "라이게츠카라 쇼-큐- 시마스", exampleMeaning: "다음 달부터 급여가 오릅니다.",
    breakdown: [
      { word: "来月から", reading: "らいげつから", meaning: "다음 달부터" }
    ] },
  { level: "N3", kanji: "賃金", reading: "ちんぎん", korean: "친긴", meaning: "임금",
    example: "最低賃金が上がりました。", exampleReading: "さいていちんぎんがあがりました。", exampleKorean: "사이테- 친긴가 아가리마시타", exampleMeaning: "최저 임금이 올랐습니다.",
    breakdown: [
      { word: "最低", reading: "さいてい", meaning: "최저" }
    ] },
  { level: "N3", kanji: "収入", reading: "しゅうにゅう", korean: "슈-뉴-", meaning: "수입, 소득",
    example: "毎月の収入を記録しています。", exampleReading: "まいつきのしゅうにゅうをきろくしています。", exampleKorean: "마이츠키노 슈-뉴-오 키로쿠 시테이마스", exampleMeaning: "매달 수입을 기록하고 있습니다.",
    breakdown: [
      { word: "記録しています", reading: "きろくしています", meaning: "기록하고 있습니다" }
    ] },
  { level: "N3", kanji: "支出", reading: "ししゅつ", korean: "시슈츠", meaning: "지출",
    example: "今月の支出を計算します。", exampleReading: "こんげつのししゅつをけいさんします。", exampleKorean: "콘게츠노 시슈츠오 케-산 시마스", exampleMeaning: "이번 달 지출을 계산합니다.",
    breakdown: [
      { word: "計算します", reading: "けいさんします", meaning: "계산합니다" }
    ] },
  { level: "N3", kanji: "貯蓄", reading: "ちょちく", korean: "쵸치쿠", meaning: "저축",
    example: "将来のために貯蓄しています。", exampleReading: "しょうらいのためにちょちくしています。", exampleKorean: "쇼-라이노 타메니 쵸치쿠 시테이마스", exampleMeaning: "미래를 위해 저축하고 있습니다.",
    breakdown: [
      { word: "将来のために", reading: "しょうらいのために", meaning: "미래를 위해" }
    ] },
  { level: "N3", kanji: "借金", reading: "しゃっきん", korean: "샥킨", meaning: "빚",
    example: "借金を返し終わりました。", exampleReading: "しゃっきんをかえしおわりました。", exampleKorean: "샥킹오 카에시오와리마시타", exampleMeaning: "빚을 다 갚았습니다.",
    breakdown: [
      { word: "返し終わりました", reading: "かえしおわりました", meaning: "다 갚았습니다" }
    ] },
  { level: "N3", kanji: "返済", reading: "へんさい", korean: "헨사이", meaning: "상환",
    example: "ローンの返済が終わりました。", exampleReading: "ローンのへんさいがおわりました。", exampleKorean: "로-온노 헨사이가 오와리마시타", exampleMeaning: "대출 상환이 끝났습니다.",
    breakdown: [
      { word: "ローン", reading: "ローン", meaning: "대출" }
    ] },
  { level: "N3", kanji: "融資", reading: "ゆうし", korean: "유-시", meaning: "융자",
    example: "銀行から融資を受けました。", exampleReading: "ぎんこうからゆうしをうけました。", exampleKorean: "깅코-카라 유-시오 우케마시타", exampleMeaning: "은행에서 융자를 받았습니다.",
    breakdown: [
      { word: "銀行から", reading: "ぎんこうから", meaning: "은행에서" }
    ] },
  { level: "N3", kanji: "保険", reading: "ほけん", korean: "호켄", meaning: "보험",
    example: "生命保険に入りました。", exampleReading: "せいめいほけんにはいりました。", exampleKorean: "세-메- 호켄니 하이리마시타", exampleMeaning: "생명보험에 가입했습니다.",
    breakdown: [
      { word: "入りました", reading: "はいりました", meaning: "가입했습니다" }
    ] },
  { level: "N3", kanji: "年金", reading: "ねんきん", korean: "넨킨", meaning: "연금",
    example: "将来、年金がもらえるか心配です。", exampleReading: "しょうらい、ねんきんがもらえるかしんぱいです。", exampleKorean: "쇼-라이 넨킨가 모라에루카 심파이데스", exampleMeaning: "장래에 연금을 받을 수 있을지 걱정입니다.",
    breakdown: [
      { word: "もらえるか", reading: "もらえるか", meaning: "받을 수 있을지" }
    ] },
  { level: "N3", kanji: "税金", reading: "ぜいきん", korean: "제-킨", meaning: "세금",
    example: "毎年、税金を納めます。", exampleReading: "まいとし、ぜいきんをおさめます。", exampleKorean: "마이토시 제-킹오 오사메마스", exampleMeaning: "매년 세금을 냅니다.",
    breakdown: [
      { word: "納めます", reading: "おさめます", meaning: "냅니다" }
    ] },
  { level: "N3", kanji: "申告", reading: "しんこく", korean: "신코쿠", meaning: "신고",
    example: "確定申告をしました。", exampleReading: "かくていしんこくをしました。", exampleKorean: "카쿠테- 신코쿠오 시마시타", exampleMeaning: "확정 신고를 했습니다.",
    breakdown: [
      { word: "確定", reading: "かくてい", meaning: "확정" }
    ] },
  { level: "N3", kanji: "手続き", reading: "てつづき", korean: "테츠즈키", meaning: "절차, 수속",
    example: "入学の手続きをします。", exampleReading: "にゅうがくのてつづきをします。", exampleKorean: "뉴-가쿠노 테츠즈키오 시마스", exampleMeaning: "입학 수속을 합니다.",
    breakdown: [
      { word: "入学", reading: "にゅうがく", meaning: "입학" }
    ] },
  { level: "N3", kanji: "証明書", reading: "しょうめいしょ", korean: "쇼-메-쇼", meaning: "증명서",
    example: "在学証明書が必要です。", exampleReading: "ざいがくしょうめいしょがひつようです。", exampleKorean: "자이가쿠 쇼-메-쇼가 히츠요-데스", exampleMeaning: "재학증명서가 필요합니다.",
    breakdown: [
      { word: "必要です", reading: "ひつようです", meaning: "필요합니다" }
    ] },
  { level: "N3", kanji: "印象的", reading: "いんしょうてき", korean: "인쇼-테키", meaning: "인상적",
    example: "印象的な映画でした。", exampleReading: "いんしょうてきなえいがでした。", exampleKorean: "인쇼-테키나 에-가데시타", exampleMeaning: "인상적인 영화였습니다.",
    breakdown: [
      { word: "映画", reading: "えいが", meaning: "영화" }
    ] },
  { level: "N3", kanji: "魅力", reading: "みりょく", korean: "미료쿠", meaning: "매력",
    example: "彼女には独特の魅力があります。", exampleReading: "かのじょにはどくとくのみりょくがあります。", exampleKorean: "카노죠니와 도쿠토쿠노 미료쿠가 아리마스", exampleMeaning: "그녀에게는 독특한 매력이 있습니다.",
    breakdown: [
      { word: "独特の", reading: "どくとくの", meaning: "독특한" }
    ] },
  { level: "N3", kanji: "魅力的", reading: "みりょくてき", korean: "미료쿠테키", meaning: "매력적",
    example: "この街はとても魅力的です。", exampleReading: "このまちはとてもみりょくてきです。", exampleKorean: "코노 마치와 도테모 미료쿠테키데스", exampleMeaning: "이 도시는 아주 매력적입니다.",
    breakdown: [
      { word: "街", reading: "まち", meaning: "도시, 마을" }
    ] },
  { level: "N3", kanji: "個性", reading: "こせい", korean: "코세-", meaning: "개성",
    example: "彼は個性が強いです。", exampleReading: "かれはこせいがつよいです。", exampleKorean: "카레와 코세-가 츠요이데스", exampleMeaning: "그는 개성이 강합니다.",
    breakdown: [
      { word: "強いです", reading: "つよいです", meaning: "강합니다" }
    ] },
  { level: "N3", kanji: "独特", reading: "どくとく", korean: "도쿠토쿠", meaning: "독특",
    example: "独特な味がします。", exampleReading: "どくとくなあじがします。", exampleKorean: "도쿠토쿠나 아지가 시마스", exampleMeaning: "독특한 맛이 납니다.",
    breakdown: [
      { word: "味", reading: "あじ", meaning: "맛" }
    ] },
  { level: "N3", kanji: "特有", reading: "とくゆう", korean: "토쿠유-", meaning: "고유",
    example: "これはこの地方特有の文化です。", exampleReading: "これはこのちほうとくゆうのぶんかです。", exampleKorean: "코레와 코노 치호- 토쿠유-노 붕카데스", exampleMeaning: "이것은 이 지방 고유의 문화입니다.",
    breakdown: [
      { word: "地方", reading: "ちほう", meaning: "지방" }
    ] },
  { level: "N3", kanji: "典型的", reading: "てんけいてき", korean: "텐케-테키", meaning: "전형적",
    example: "これは典型的な例です。", exampleReading: "これはてんけいてきなれいです。", exampleKorean: "코레와 텐케-테키나 레-데스", exampleMeaning: "이것은 전형적인 예입니다.",
    breakdown: [
      { word: "例", reading: "れい", meaning: "예" }
    ] },
  { level: "N3", kanji: "平凡", reading: "へいぼん", korean: "헤-본", meaning: "평범",
    example: "平凡な毎日を過ごしています。", exampleReading: "へいぼんなまいにちをすごしています。", exampleKorean: "헤-본나 마이니치오 스고시테이마스", exampleMeaning: "평범한 매일을 보내고 있습니다.",
    breakdown: [
      { word: "過ごしています", reading: "すごしています", meaning: "보내고 있습니다" }
    ] },
  { level: "N3", kanji: "平和", reading: "へいわ", korean: "헤-와", meaning: "평화",
    example: "世界の平和を願います。", exampleReading: "せかいのへいわをねがいます。", exampleKorean: "세카이노 헤-와오 네가이마스", exampleMeaning: "세계의 평화를 바랍니다.",
    breakdown: [
      { word: "願います", reading: "ねがいます", meaning: "바랍니다" }
    ] },
  { level: "N3", kanji: "戦争", reading: "せんそう", korean: "센소-", meaning: "전쟁",
    example: "戦争のない世界を望みます。", exampleReading: "せんそうのないせかいをのぞみます。", exampleKorean: "센소-노 나이 세카이오 노조미마스", exampleMeaning: "전쟁이 없는 세계를 바랍니다.",
    breakdown: [
      { word: "望みます", reading: "のぞみます", meaning: "바랍니다" }
    ] },
  { level: "N3", kanji: "平等", reading: "びょうどう", korean: "뵤-도-", meaning: "평등",
    example: "みんな平等に扱われるべきです。", exampleReading: "みんなびょうどうにあつかわれるべきです。", exampleKorean: "민나 뵤-도-니 아츠카와레루 베키데스", exampleMeaning: "모두 평등하게 대우받아야 합니다.",
    breakdown: [
      { word: "扱われるべきです", reading: "あつかわれるべきです", meaning: "대우받아야 합니다" }
    ] },
  { level: "N3", kanji: "差別", reading: "さべつ", korean: "사베츠", meaning: "차별",
    example: "差別をなくしたいです。", exampleReading: "さべつをなくしたいです。", exampleKorean: "사베츠오 나쿠시타이데스", exampleMeaning: "차별을 없애고 싶습니다.",
    breakdown: [
      { word: "なくしたいです", reading: "なくしたいです", meaning: "없애고 싶습니다" }
    ] },
  { level: "N3", kanji: "偏見", reading: "へんけん", korean: "헨켄", meaning: "편견",
    example: "偏見を持たないようにします。", exampleReading: "へんけんをもたないようにします。", exampleKorean: "헨켄오 모타나이 요-니 시마스", exampleMeaning: "편견을 갖지 않도록 하겠습니다.",
    breakdown: [
      { word: "持たないように", reading: "もたないように", meaning: "갖지 않도록" }
    ] },
  { level: "N3", kanji: "尊敬", reading: "そんけい", korean: "손케-", meaning: "존경",
    example: "父を尊敬しています。", exampleReading: "ちちをそんけいしています。", exampleKorean: "치치오 손케- 시테이마스", exampleMeaning: "아버지를 존경하고 있습니다.",
    breakdown: [
      { word: "父", reading: "ちち", meaning: "아버지" }
    ] },
  { level: "N3", kanji: "感謝", reading: "かんしゃ", korean: "칸샤", meaning: "감사",
    example: "両親に感謝しています。", exampleReading: "りょうしんにかんしゃしています。", exampleKorean: "료-신니 칸샤 시테이마스", exampleMeaning: "부모님께 감사하고 있습니다.",
    breakdown: [
      { word: "両親", reading: "りょうしん", meaning: "부모님" }
    ] },

  { level: "N3", kanji: "医療", reading: "いりょう", korean: "이료-", meaning: "의료",
    example: "医療の進歩はすばらしいです。", exampleReading: "いりょうのしんぽはすばらしいです。", exampleKorean: "이료-노 신포와 스바라시-데스", exampleMeaning: "의료의 발전은 훌륭합니다.",
    breakdown: [
      { word: "進歩", reading: "しんぽ", meaning: "발전, 진보" }
    ] },
  { level: "N3", kanji: "治療", reading: "ちりょう", korean: "치료-", meaning: "치료",
    example: "早めに治療を受けてください。", exampleReading: "はやめにちりょうをうけてください。", exampleKorean: "하야메니 치료-오 우케테쿠다사이", exampleMeaning: "일찍 치료를 받으세요.",
    breakdown: [
      { word: "早めに", reading: "はやめに", meaning: "일찍" }
    ] },
  { level: "N3", kanji: "手術", reading: "しゅじゅつ", korean: "슈쥬츠", meaning: "수술",
    example: "明日、手術を受けます。", exampleReading: "あした、しゅじゅつをうけます。", exampleKorean: "아시타 슈쥬츠오 우케마스", exampleMeaning: "내일 수술을 받습니다.",
    breakdown: [
      { word: "受けます", reading: "うけます", meaning: "받습니다" }
    ] },
  { level: "N3", kanji: "検査", reading: "けんさ", korean: "켄사", meaning: "검사",
    example: "健康診断で検査を受けました。", exampleReading: "けんこうしんだんでけんさをうけました。", exampleKorean: "켕코- 신단데 켄사오 우케마시타", exampleMeaning: "건강검진에서 검사를 받았습니다.",
    breakdown: [
      { word: "健康診断", reading: "けんこうしんだん", meaning: "건강검진" }
    ] },
  { level: "N3", kanji: "診断", reading: "しんだん", korean: "신단", meaning: "진단",
    example: "医者に診断してもらいました。", exampleReading: "いしゃにしんだんしてもらいました。", exampleKorean: "이샤니 신단시테모라이마시타", exampleMeaning: "의사에게 진단받았습니다.",
    breakdown: [
      { word: "医者に", reading: "いしゃに", meaning: "의사에게" }
    ] },
  { level: "N3", kanji: "症状", reading: "しょうじょう", korean: "쇼-죠-", meaning: "증상",
    example: "症状が悪化しています。", exampleReading: "しょうじょうがあっかしています。", exampleKorean: "쇼-죠-가 악카 시테이마스", exampleMeaning: "증상이 악화되고 있습니다.",
    breakdown: [
      { word: "悪化しています", reading: "あっかしています", meaning: "악화되고 있습니다" }
    ] },
  { level: "N3", kanji: "患者", reading: "かんじゃ", korean: "칸자", meaning: "환자",
    example: "病院に患者が並んでいます。", exampleReading: "びょういんにかんじゃがならんでいます。", exampleKorean: "뵤-잉니 칸자가 나란데이마스", exampleMeaning: "병원에 환자가 줄지어 있습니다.",
    breakdown: [
      { word: "並んでいます", reading: "ならんでいます", meaning: "줄지어 있습니다" }
    ] },
  { level: "N3", kanji: "看護師", reading: "かんごし", korean: "캉고시", meaning: "간호사",
    example: "看護師が丁寧に説明してくれました。", exampleReading: "かんごしがていねいにせつめいしてくれました。", exampleKorean: "캉고시가 테-네-니 세츠메- 시테쿠레마시타", exampleMeaning: "간호사가 정중하게 설명해 주었습니다.",
    breakdown: [
      { word: "丁寧に", reading: "ていねいに", meaning: "정중하게" }
    ] },
  { level: "N3", kanji: "予防", reading: "よぼう", korean: "요보-", meaning: "예방",
    example: "風邪の予防に手を洗います。", exampleReading: "かぜのよぼうにてをあらいます。", exampleKorean: "카제노 요보-니 테오 아라이마스", exampleMeaning: "감기 예방으로 손을 씻습니다.",
    breakdown: [
      { word: "風邪", reading: "かぜ", meaning: "감기" }
    ] },
  { level: "N3", kanji: "感染", reading: "かんせん", korean: "칸센", meaning: "감염",
    example: "ウイルスに感染しました。", exampleReading: "ウイルスにかんせんしました。", exampleKorean: "우이루스니 칸센 시마시타", exampleMeaning: "바이러스에 감염되었습니다.",
    breakdown: [
      { word: "ウイルス", reading: "ウイルス", meaning: "바이러스" }
    ] },
  { level: "N3", kanji: "ウイルス", reading: "ウイルス", korean: "우이루스", meaning: "바이러스",
    example: "新しいウイルスが発見されました。", exampleReading: "あたらしいウイルスがはっけんされました。", exampleKorean: "아타라시- 우이루스가 학켄 사레마시타", exampleMeaning: "새로운 바이러스가 발견되었습니다.",
    breakdown: [
      { word: "発見されました", reading: "はっけんされました", meaning: "발견되었습니다" }
    ] },
  { level: "N3", kanji: "免疫", reading: "めんえき", korean: "멘에키", meaning: "면역",
    example: "運動は免疫力を高めます。", exampleReading: "うんどうはめんえきりょくをたかめます。", exampleKorean: "운도-와 멘에키료쿠오 타카메마스", exampleMeaning: "운동은 면역력을 높입니다.",
    breakdown: [
      { word: "高めます", reading: "たかめます", meaning: "높입니다" }
    ] },
  { level: "N3", kanji: "栄養", reading: "えいよう", korean: "에-요-", meaning: "영양",
    example: "バランスよく栄養を取ります。", exampleReading: "バランスよくえいようをとります。", exampleKorean: "바란스요쿠 에-요-오 토리마스", exampleMeaning: "균형 있게 영양을 섭취합니다.",
    breakdown: [
      { word: "バランスよく", reading: "バランスよく", meaning: "균형 있게" }
    ] },
  { level: "N3", kanji: "体力", reading: "たいりょく", korean: "타이료쿠", meaning: "체력",
    example: "毎日運動して体力をつけます。", exampleReading: "まいにちうんどうしてたいりょくをつけます。", exampleKorean: "마이니치 운도-시테 타이료쿠오 츠케마스", exampleMeaning: "매일 운동해서 체력을 키웁니다.",
    breakdown: [
      { word: "つけます", reading: "つけます", meaning: "키웁니다" }
    ] },
  { level: "N3", kanji: "ストレス", reading: "ストレス", korean: "스토레스", meaning: "스트레스",
    example: "仕事でストレスがたまっています。", exampleReading: "しごとでストレスがたまっています。", exampleKorean: "시고토데 스토레스가 타맛테이마스", exampleMeaning: "일 때문에 스트레스가 쌓여 있습니다.",
    breakdown: [
      { word: "たまっています", reading: "たまっています", meaning: "쌓여 있습니다" }
    ] },
  { level: "N3", kanji: "疲労", reading: "ひろう", korean: "히로-", meaning: "피로",
    example: "疲労がたまっています。", exampleReading: "ひろうがたまっています。", exampleKorean: "히로-가 타맛테이마스", exampleMeaning: "피로가 쌓여 있습니다.",
    breakdown: [
      { word: "たまっています", reading: "たまっています", meaning: "쌓여 있습니다" }
    ] },
  { level: "N3", kanji: "睡眠", reading: "すいみん", korean: "스이민", meaning: "수면",
    example: "十分な睡眠を取りましょう。", exampleReading: "じゅうぶんなすいみんをとりましょう。", exampleKorean: "쥬-분나 스이밍오 토리마쇼-", exampleMeaning: "충분한 수면을 취합시다.",
    breakdown: [
      { word: "十分な", reading: "じゅうぶんな", meaning: "충분한" }
    ] },
  { level: "N3", kanji: "不眠", reading: "ふみん", korean: "후민", meaning: "불면",
    example: "最近、不眠に悩んでいます。", exampleReading: "さいきん、ふみんになやんでいます。", exampleKorean: "사이킹 후민니 나얀데이마스", exampleMeaning: "최근 불면에 시달리고 있습니다.",
    breakdown: [
      { word: "悩んでいます", reading: "なやんでいます", meaning: "시달리고 있습니다" }
    ] },
  { level: "N3", kanji: "リラックス", reading: "リラックス", korean: "리락쿠스", meaning: "휴식, 긴장을 풂",
    example: "お風呂に入ってリラックスします。", exampleReading: "おふろにはいってリラックスします。", exampleKorean: "오후로니 하잇테 리락쿠스 시마스", exampleMeaning: "목욕을 하고 긴장을 풉니다.",
    breakdown: [
      { word: "お風呂に入って", reading: "おふろにはいって", meaning: "목욕을 하고" }
    ] },
  { level: "N3", kanji: "集中力", reading: "しゅうちゅうりょく", korean: "슈-츄-료쿠", meaning: "집중력",
    example: "音楽を聞くと集中力が上がります。", exampleReading: "おんがくをきくとしゅうちゅうりょくがあがります。", exampleKorean: "옹가쿠오 키쿠토 슈-츄-료쿠가 아가리마스", exampleMeaning: "음악을 들으면 집중력이 오릅니다.",
    breakdown: [
      { word: "上がります", reading: "あがります", meaning: "오릅니다" }
    ] },
  { level: "N3", kanji: "応用", reading: "おうよう", korean: "오-요-", meaning: "응용",
    example: "基礎を応用に生かします。", exampleReading: "きそをおうようにいかします。", exampleKorean: "키소오 오-요-니 이카시마스", exampleMeaning: "기초를 응용에 살립니다.",
    breakdown: [
      { word: "生かします", reading: "いかします", meaning: "살립니다" }
    ] },
  { level: "N3", kanji: "基礎", reading: "きそ", korean: "키소", meaning: "기초",
    example: "基礎から勉強し直します。", exampleReading: "きそからべんきょうしなおします。", exampleKorean: "키소카라 벵쿄-시나오시마스", exampleMeaning: "기초부터 다시 공부합니다.",
    breakdown: [
      { word: "勉強し直します", reading: "べんきょうしなおします", meaning: "다시 공부합니다" }
    ] },
  { level: "N3", kanji: "原理", reading: "げんり", korean: "겐리", meaning: "원리",
    example: "機械の原理を学びます。", exampleReading: "きかいのげんりをまなびます。", exampleKorean: "키카이노 겐리오 마나비마스", exampleMeaning: "기계의 원리를 배웁니다.",
    breakdown: [
      { word: "機械", reading: "きかい", meaning: "기계" }
    ] },
  { level: "N3", kanji: "理論", reading: "りろん", korean: "리론", meaning: "이론",
    example: "理論と実践は違います。", exampleReading: "りろんとじっせんはちがいます。", exampleKorean: "리론토 짓센와 치가이마스", exampleMeaning: "이론과 실천은 다릅니다.",
    breakdown: [
      { word: "実践", reading: "じっせん", meaning: "실천" }
    ] },
  { level: "N3", kanji: "実践", reading: "じっせん", korean: "짓센", meaning: "실천",
    example: "学んだことを実践します。", exampleReading: "まなんだことをじっせんします。", exampleKorean: "마난다 코토오 짓센 시마스", exampleMeaning: "배운 것을 실천합니다.",
    breakdown: [
      { word: "学んだこと", reading: "まなんだこと", meaning: "배운 것" }
    ] },
  { level: "N3", kanji: "検定", reading: "けんてい", korean: "켄테-", meaning: "검정, 자격시험",
    example: "英語の検定を受けます。", exampleReading: "えいごのけんていをうけます。", exampleKorean: "에-고노 켄테-오 우케마스", exampleMeaning: "영어 검정시험을 봅니다.",
    breakdown: [
      { word: "英語", reading: "えいご", meaning: "영어" }
    ] },
  { level: "N3", kanji: "資格", reading: "しかく", korean: "시카쿠", meaning: "자격",
    example: "運転の資格を取りました。", exampleReading: "うんてんのしかくをとりました。", exampleKorean: "운텐노 시카쿠오 토리마시타", exampleMeaning: "운전 자격을 땄습니다.",
    breakdown: [
      { word: "運転", reading: "うんてん", meaning: "운전" }
    ] },
  { level: "N3", kanji: "免除", reading: "めんじょ", korean: "멘죠", meaning: "면제",
    example: "授業料が免除されました。", exampleReading: "じゅぎょうりょうがめんじょされました。", exampleKorean: "쥬교-료-가 멘죠 사레마시타", exampleMeaning: "수업료가 면제되었습니다.",
    breakdown: [
      { word: "授業料", reading: "じゅぎょうりょう", meaning: "수업료" }
    ] },
  { level: "N3", kanji: "適性", reading: "てきせい", korean: "테키세-", meaning: "적성",
    example: "自分の適性を知りたいです。", exampleReading: "じぶんのてきせいをしりたいです。", exampleKorean: "지분노 테키세-오 시리타이데스", exampleMeaning: "자신의 적성을 알고 싶습니다.",
    breakdown: [
      { word: "知りたいです", reading: "しりたいです", meaning: "알고 싶습니다" }
    ] },
  { level: "N3", kanji: "素質", reading: "そしつ", korean: "소시츠", meaning: "소질",
    example: "彼には音楽の素質があります。", exampleReading: "かれにはおんがくのそしつがあります。", exampleKorean: "카레니와 옹가쿠노 소시츠가 아리마스", exampleMeaning: "그에게는 음악 소질이 있습니다.",
    breakdown: [
      { word: "音楽", reading: "おんがく", meaning: "음악" }
    ] },
  { level: "N3", kanji: "可能性", reading: "かのうせい", korean: "카노-세-", meaning: "가능성",
    example: "成功する可能性は高いです。", exampleReading: "せいこうするかのうせいはたかいです。", exampleKorean: "세-코-스루 카노-세-와 타카이데스", exampleMeaning: "성공할 가능성은 높습니다.",
    breakdown: [
      { word: "成功する", reading: "せいこうする", meaning: "성공하다" }
    ] },
  { level: "N3", kanji: "限界", reading: "げんかい", korean: "겐카이", meaning: "한계",
    example: "体力の限界を感じました。", exampleReading: "たいりょくのげんかいをかんじました。", exampleKorean: "타이료쿠노 겐카이오 칸지마시타", exampleMeaning: "체력의 한계를 느꼈습니다.",
    breakdown: [
      { word: "体力", reading: "たいりょく", meaning: "체력" }
    ] },
  { level: "N3", kanji: "極限", reading: "きょくげん", korean: "쿄쿠겐", meaning: "극한",
    example: "極限の状況に置かれました。", exampleReading: "きょくげんのじょうきょうにおかれました。", exampleKorean: "쿄쿠겐노 죠-쿄-니 오카레마시타", exampleMeaning: "극한의 상황에 놓였습니다.",
    breakdown: [
      { word: "状況", reading: "じょうきょう", meaning: "상황" }
    ] },
  { level: "N3", kanji: "挑む", reading: "いどむ", korean: "이도무", meaning: "도전하다",
    example: "新記録に挑みます。", exampleReading: "しんきろくにいどみます。", exampleKorean: "신키로쿠니 이도미마스", exampleMeaning: "신기록에 도전합니다.",
    breakdown: [
      { word: "新記録", reading: "しんきろく", meaning: "신기록" }
    ] },
  { level: "N3", kanji: "乗り越える", reading: "のりこえる", korean: "노리코에루", meaning: "극복하다",
    example: "困難を乗り越えました。", exampleReading: "こんなんをのりこえました。", exampleKorean: "콘난오 노리코에마시타", exampleMeaning: "어려움을 극복했습니다.",
    breakdown: [
      { word: "困難", reading: "こんなん", meaning: "어려움" }
    ] },
  { level: "N3", kanji: "立ち向かう", reading: "たちむかう", korean: "타치무카우", meaning: "맞서다",
    example: "問題に立ち向かいます。", exampleReading: "もんだいにたちむかいます。", exampleKorean: "몬다이니 타치무카이마스", exampleMeaning: "문제에 맞섭니다.",
    breakdown: [
      { word: "問題", reading: "もんだい", meaning: "문제" }
    ] },
  { level: "N3", kanji: "打ち勝つ", reading: "うちかつ", korean: "우치카츠", meaning: "이겨내다",
    example: "誘惑に打ち勝ちました。", exampleReading: "ゆうわくにうちかちました。", exampleKorean: "유-와쿠니 우치카치마시타", exampleMeaning: "유혹을 이겨냈습니다.",
    breakdown: [
      { word: "誘惑", reading: "ゆうわく", meaning: "유혹" }
    ] },
  { level: "N3", kanji: "屈する", reading: "くっする", korean: "쿳스루", meaning: "굴복하다",
    example: "圧力に屈しませんでした。", exampleReading: "あつりょくにくっしませんでした。", exampleKorean: "아츠료쿠니 쿳시마센데시타", exampleMeaning: "압력에 굴복하지 않았습니다.",
    breakdown: [
      { word: "圧力", reading: "あつりょく", meaning: "압력" }
    ] },
  { level: "N3", kanji: "崩れる", reading: "くずれる", korean: "쿠즈레루", meaning: "무너지다",
    example: "地震で建物が崩れました。", exampleReading: "じしんでたてものがくずれました。", exampleKorean: "지신데 타테모노가 쿠즈레마시타", exampleMeaning: "지진으로 건물이 무너졌습니다.",
    breakdown: [
      { word: "地震", reading: "じしん", meaning: "지진" }
    ] },
  { level: "N3", kanji: "崩す", reading: "くずす", korean: "쿠즈스", meaning: "무너뜨리다",
    example: "体調を崩してしまいました。", exampleReading: "たいちょうをくずしてしまいました。", exampleKorean: "타이쵸-오 쿠즈시테시마이마시타", exampleMeaning: "컨디션을 망쳐버렸습니다.",
    breakdown: [
      { word: "体調", reading: "たいちょう", meaning: "컨디션" }
    ] },
  { level: "N3", kanji: "教育", reading: "きょういく", korean: "쿄-이쿠", meaning: "교육",
    example: "子供の教育に関心があります。", exampleReading: "こどものきょういくにかんしんがあります。", exampleKorean: "코도모노 쿄-이쿠니 칸싱가 아리마스", exampleMeaning: "아이의 교육에 관심이 있습니다.",
    breakdown: [
      { word: "関心", reading: "かんしん", meaning: "관심" }
    ] },
  { level: "N3", kanji: "講演", reading: "こうえん", korean: "코-엔", meaning: "강연",
    example: "有名な学者の講演を聞きました。", exampleReading: "ゆうめいながくしゃのこうえんをききました。", exampleKorean: "유-메-나 각샤노 코-엔오 키키마시타", exampleMeaning: "유명한 학자의 강연을 들었습니다.",
    breakdown: [
      { word: "学者", reading: "がくしゃ", meaning: "학자" }
    ] },
  { level: "N3", kanji: "討論", reading: "とうろん", korean: "토-론", meaning: "토론",
    example: "クラスで討論を行いました。", exampleReading: "クラスでとうろんをおこないました。", exampleKorean: "쿠라스데 토-롱오 오코나이마시타", exampleMeaning: "반에서 토론을 진행했습니다.",
    breakdown: [
      { word: "行いました", reading: "おこないました", meaning: "진행했습니다" }
    ] },
  { level: "N3", kanji: "結論", reading: "けつろん", korean: "케츠론", meaning: "결론",
    example: "会議で結論が出ました。", exampleReading: "かいぎでけつろんがでました。", exampleKorean: "카이기데 케츠롱가 데마시타", exampleMeaning: "회의에서 결론이 나왔습니다.",
    breakdown: [
      { word: "会議", reading: "かいぎ", meaning: "회의" }
    ] },
  { level: "N3", kanji: "要点", reading: "ようてん", korean: "요-텐", meaning: "요점",
    example: "話の要点をまとめてください。", exampleReading: "はなしのようてんをまとめてください。", exampleKorean: "하나시노 요-텡오 마토메테 쿠다사이", exampleMeaning: "이야기의 요점을 정리해 주세요.",
    breakdown: [
      { word: "まとめて", reading: "まとめて", meaning: "정리해서" }
    ] },
  { level: "N3", kanji: "要約", reading: "ようやく", korean: "요-야쿠", meaning: "요약",
    example: "この記事を要約してください。", exampleReading: "このきじをようやくしてください。", exampleKorean: "코노 키지오 요-야쿠시테 쿠다사이", exampleMeaning: "이 기사를 요약해 주세요.",
    breakdown: [
      { word: "記事", reading: "きじ", meaning: "기사" }
    ] },
  { level: "N3", kanji: "概要", reading: "がいよう", korean: "가이요-", meaning: "개요",
    example: "プロジェクトの概要を説明します。", exampleReading: "プロジェクトのがいようをせつめいします。", exampleKorean: "프로제쿠토노 가이요-오 세츠메-시마스", exampleMeaning: "프로젝트의 개요를 설명하겠습니다.",
    breakdown: [
      { word: "説明します", reading: "せつめいします", meaning: "설명하겠습니다" }
    ] },
  { level: "N3", kanji: "詳細", reading: "しょうさい", korean: "쇼-사이", meaning: "상세",
    example: "詳細は後でお知らせします。", exampleReading: "しょうさいはあとでおしらせします。", exampleKorean: "쇼-사이와 아토데 오시라세 시마스", exampleMeaning: "상세한 내용은 나중에 알려드리겠습니다.",
    breakdown: [
      { word: "お知らせします", reading: "おしらせします", meaning: "알려드리겠습니다" }
    ] },
  { level: "N3", kanji: "具体例", reading: "ぐたいれい", korean: "구타이레-", meaning: "구체적인 예",
    example: "具体例を挙げて説明しました。", exampleReading: "ぐたいれいをあげてせつめいしました。", exampleKorean: "구타이레이오 아게테 세츠메-시마시타", exampleMeaning: "구체적인 예를 들어 설명했습니다.",
    breakdown: [
      { word: "挙げて", reading: "あげて", meaning: "들어서" }
    ] },
  { level: "N3", kanji: "論理的", reading: "ろんりてき", korean: "론리테키", meaning: "논리적",
    example: "もっと論理的に考えてください。", exampleReading: "もっとろんりてきにかんがえてください。", exampleKorean: "못토 론리테키니 캉가에테 쿠다사이", exampleMeaning: "좀 더 논리적으로 생각해 주세요.",
    breakdown: [
      { word: "もっと", reading: "もっと", meaning: "좀 더" }
    ] },
  { level: "N3", kanji: "効率的", reading: "こうりつてき", korean: "코-리츠테키", meaning: "효율적",
    example: "効率的に仕事を進めます。", exampleReading: "こうりつてきにしごとをすすめます。", exampleKorean: "코-리츠테키니 시고토오 스스메마스", exampleMeaning: "효율적으로 일을 진행합니다.",
    breakdown: [
      { word: "進めます", reading: "すすめます", meaning: "진행합니다" }
    ] },
  { level: "N3", kanji: "合理的", reading: "ごうりてき", korean: "고-리테키", meaning: "합리적",
    example: "合理的な判断をしました。", exampleReading: "ごうりてきなはんだんをしました。", exampleKorean: "고-리테키나 한당오 시마시타", exampleMeaning: "합리적인 판단을 했습니다.",
    breakdown: [
      { word: "判断", reading: "はんだん", meaning: "판단" }
    ] },
  { level: "N3", kanji: "一方的", reading: "いっぽうてき", korean: "잇포-테키", meaning: "일방적",
    example: "一方的に決めないでください。", exampleReading: "いっぽうてきにきめないでください。", exampleKorean: "잇포-테키니 키메나이데 쿠다사이", exampleMeaning: "일방적으로 정하지 마세요.",
    breakdown: [
      { word: "決めない", reading: "きめない", meaning: "정하지 않다" }
    ] },
  { level: "N3", kanji: "相互", reading: "そうご", korean: "소-고", meaning: "상호",
    example: "相互に理解し合うことが大切です。", exampleReading: "そうごにりかいしあうことがたいせつです。", exampleKorean: "소-고니 리카이시아우 코토가 타이세츠데스", exampleMeaning: "상호 이해하는 것이 중요합니다.",
    breakdown: [
      { word: "理解し合う", reading: "りかいしあう", meaning: "서로 이해하다" }
    ] },
  { level: "N3", kanji: "相対的", reading: "そうたいてき", korean: "소-타이테키", meaning: "상대적",
    example: "物価は相対的に安いです。", exampleReading: "ぶっかはそうたいてきにやすいです。", exampleKorean: "붓카와 소-타이테키니 야스이데스", exampleMeaning: "물가는 상대적으로 쌉니다.",
    breakdown: [
      { word: "物価", reading: "ぶっか", meaning: "물가" }
    ] },
  { level: "N3", kanji: "絶対的", reading: "ぜったいてき", korean: "젯타이테키", meaning: "절대적",
    example: "絶対的な自信を持っています。", exampleReading: "ぜったいてきなじしんをもっています。", exampleKorean: "젯타이테키나 지싱오 못테 이마스", exampleMeaning: "절대적인 자신감을 가지고 있습니다.",
    breakdown: [
      { word: "自信", reading: "じしん", meaning: "자신감" }
    ] },
  { level: "N3", kanji: "普遍的", reading: "ふへんてき", korean: "후헨테키", meaning: "보편적",
    example: "これは普遍的な真理です。", exampleReading: "これはふへんてきなしんりです。", exampleKorean: "코레와 후헨테키나 신리데스", exampleMeaning: "이것은 보편적인 진리입니다.",
    breakdown: [
      { word: "真理", reading: "しんり", meaning: "진리" }
    ] },
  { level: "N3", kanji: "一時的", reading: "いちじてき", korean: "이치지테키", meaning: "일시적",
    example: "一時的に休業しています。", exampleReading: "いちじてきにきゅうぎょうしています。", exampleKorean: "이치지테키니 큐-교- 시테 이마스", exampleMeaning: "일시적으로 휴업하고 있습니다.",
    breakdown: [
      { word: "休業", reading: "きゅうぎょう", meaning: "휴업" }
    ] },
  { level: "N3", kanji: "部分的", reading: "ぶぶんてき", korean: "부분테키", meaning: "부분적",
    example: "部分的に修正しました。", exampleReading: "ぶぶんてきにしゅうせいしました。", exampleKorean: "부분테키니 슈-세-시마시타", exampleMeaning: "부분적으로 수정했습니다.",
    breakdown: [
      { word: "修正", reading: "しゅうせい", meaning: "수정" }
    ] },
  { level: "N3", kanji: "全面的", reading: "ぜんめんてき", korean: "젠멘테키", meaning: "전면적",
    example: "計画を全面的に見直します。", exampleReading: "けいかくをぜんめんてきにみなおします。", exampleKorean: "케-카쿠오 젠멘테키니 미나오시마스", exampleMeaning: "계획을 전면적으로 재검토합니다.",
    breakdown: [
      { word: "計画", reading: "けいかく", meaning: "계획" }
    ] },
  { level: "N3", kanji: "現実的", reading: "げんじつてき", korean: "겐지츠테키", meaning: "현실적",
    example: "もっと現実的に考えましょう。", exampleReading: "もっとげんじつてきにかんがえましょう。", exampleKorean: "못토 겐지츠테키니 캉가에마쇼-", exampleMeaning: "좀 더 현실적으로 생각합시다.",
    breakdown: [
      { word: "考えましょう", reading: "かんがえましょう", meaning: "생각합시다" }
    ] },
  { level: "N3", kanji: "理想的", reading: "りそうてき", korean: "리소-테키", meaning: "이상적",
    example: "理想的な環境で働いています。", exampleReading: "りそうてきなかんきょうではたらいています。", exampleKorean: "리소-테키나 캉쿄-데 하타라이테 이마스", exampleMeaning: "이상적인 환경에서 일하고 있습니다.",
    breakdown: [
      { word: "環境", reading: "かんきょう", meaning: "환경" }
    ] },
  { level: "N3", kanji: "明確", reading: "めいかく", korean: "메-카쿠", meaning: "명확",
    example: "もっと明確に説明してください。", exampleReading: "もっとめいかくにせつめいしてください。", exampleKorean: "못토 메-카쿠니 세츠메-시테 쿠다사이", exampleMeaning: "좀 더 명확하게 설명해 주세요.",
    breakdown: [
      { word: "説明して", reading: "せつめいして", meaning: "설명해서" }
    ] },
  { level: "N3", kanji: "側面", reading: "そくめん", korean: "소쿠멘", meaning: "측면",
    example: "問題を別の側面から見てみましょう。", exampleReading: "もんだいをべつのそくめんからみてみましょう。", exampleKorean: "몬다이오 베츠노 소쿠멘카라 미테 미마쇼-", exampleMeaning: "문제를 다른 측면에서 봅시다.",
    breakdown: [
      { word: "別の", reading: "べつの", meaning: "다른" }
    ] },
  { level: "N3", kanji: "発言", reading: "はつげん", korean: "하츠겐", meaning: "발언",
    example: "会議で発言する機会がありました。", exampleReading: "かいぎではつげんするきかいがありました。", exampleKorean: "카이기데 하츠겐스루 키카이가 아리마시타", exampleMeaning: "회의에서 발언할 기회가 있었습니다.",
    breakdown: [
      { word: "機会", reading: "きかい", meaning: "기회" }
    ] },
  { level: "N3", kanji: "不適切", reading: "ふてきせつ", korean: "후테키세츠", meaning: "부적절",
    example: "その発言は不適切でした。", exampleReading: "そのはつげんはふてきせつでした。", exampleKorean: "소노 하츠겡와 후테키세츠데시타", exampleMeaning: "그 발언은 부적절했습니다.",
    breakdown: [
      { word: "発言", reading: "はつげん", meaning: "발언" }
    ] },
  { level: "N3", kanji: "明白", reading: "めいはく", korean: "메-하쿠", meaning: "명백",
    example: "彼の間違いは明白です。", exampleReading: "かれのまちがいはめいはくです。", exampleKorean: "카레노 마치가이와 메-하쿠데스", exampleMeaning: "그의 실수는 명백합니다.",
    breakdown: [
      { word: "間違い", reading: "まちがい", meaning: "실수" }
    ] },
  { level: "N3", kanji: "不明", reading: "ふめい", korean: "후메-", meaning: "불명확, 불분명",
    example: "原因は今も不明です。", exampleReading: "げんいんはいまもふめいです。", exampleKorean: "겡잉와 이마모 후메-데스", exampleMeaning: "원인은 지금도 불명확합니다.",
    breakdown: [
      { word: "原因", reading: "げんいん", meaning: "원인" }
    ] },
  { level: "N3", kanji: "多様", reading: "たよう", korean: "타요-", meaning: "다양",
    example: "意見が多様で興味深いです。", exampleReading: "いけんがたようできょうみぶかいです。", exampleKorean: "이켕가 타요-데 쿄-미부카이데스", exampleMeaning: "의견이 다양해서 흥미롭습니다.",
    breakdown: [
      { word: "興味深い", reading: "きょうみぶかい", meaning: "흥미롭다" }
    ] },
  { level: "N3", kanji: "公平", reading: "こうへい", korean: "코-헤-", meaning: "공평",
    example: "全員に公平に接してください。", exampleReading: "ぜんいんにこうへいにせっしてください。", exampleKorean: "젱인니 코-헤-니 셋시테 쿠다사이", exampleMeaning: "모두에게 공평하게 대해 주세요.",
    breakdown: [
      { word: "全員", reading: "ぜんいん", meaning: "전원, 모두" }
    ] },
  { level: "N3", kanji: "不公平", reading: "ふこうへい", korean: "후코-헤-", meaning: "불공평",
    example: "それは不公平だと思います。", exampleReading: "それはふこうへいだとおもいます。", exampleKorean: "소레와 후코-헤-다토 오모이마스", exampleMeaning: "그것은 불공평하다고 생각합니다.",
    breakdown: [
      { word: "思います", reading: "おもいます", meaning: "생각합니다" }
    ] },
  { level: "N3", kanji: "対比", reading: "たいひ", korean: "타이히", meaning: "대비",
    example: "二つの作品を対比しました。", exampleReading: "ふたつのさくひんをたいひしました。", exampleKorean: "후타츠노 사쿠힝오 타이히시마시타", exampleMeaning: "두 작품을 대비했습니다.",
    breakdown: [
      { word: "作品", reading: "さくひん", meaning: "작품" }
    ] },
  { level: "N3", kanji: "類似", reading: "るいじ", korean: "루이지", meaning: "유사",
    example: "この二つの事件には類似点があります。", exampleReading: "このふたつのじけんにはるいじてんがあります。", exampleKorean: "코노 후타츠노 지켄니와 루이지텐가 아리마스", exampleMeaning: "이 두 사건에는 유사점이 있습니다.",
    breakdown: [
      { word: "事件", reading: "じけん", meaning: "사건" }
    ] },
  { level: "N3", kanji: "的確", reading: "てきかく", korean: "테키카쿠", meaning: "적확, 정확",
    example: "的確な指示をありがとうございます。", exampleReading: "てきかくなしじをありがとうございます。", exampleKorean: "테키카쿠나 시지오 아리가토- 고자이마스", exampleMeaning: "정확한 지시를 감사합니다.",
    breakdown: [
      { word: "指示", reading: "しじ", meaning: "지시" }
    ] },
  { level: "N3", kanji: "用心", reading: "ようじん", korean: "요-진", meaning: "조심, 용심",
    example: "詐欺には十分用心してください。", exampleReading: "さぎにはじゅうぶんようじんしてください。", exampleKorean: "사기니와 쥬-분 요-진 시테 쿠다사이", exampleMeaning: "사기에 충분히 조심해 주세요.",
    breakdown: [
      { word: "詐欺", reading: "さぎ", meaning: "사기" }
    ] },
  { level: "N3", kanji: "頑丈", reading: "がんじょう", korean: "간죠-", meaning: "튼튼함",
    example: "この机はとても頑丈です。", exampleReading: "このつくえはとてもがんじょうです。", exampleKorean: "코노 츠쿠에와 토테모 간죠-데스", exampleMeaning: "이 책상은 매우 튼튼합니다.",
    breakdown: [
      { word: "机", reading: "つくえ", meaning: "책상" }
    ] },
  { level: "N3", kanji: "平均的", reading: "へいきんてき", korean: "헤-킨테키", meaning: "평균적",
    example: "これは平均的な収入です。", exampleReading: "これはへいきんてきなしゅうにゅうです。", exampleKorean: "코레와 헤-킨테키나 슈-뉴-데스", exampleMeaning: "이것은 평균적인 수입입니다.",
    breakdown: [
      { word: "収入", reading: "しゅうにゅう", meaning: "수입" }
    ] },
  { level: "N3", kanji: "単調", reading: "たんちょう", korean: "탄쵸-", meaning: "단조로움",
    example: "毎日同じ作業で単調です。", exampleReading: "まいにちおなじさぎょうでたんちょうです。", exampleKorean: "마이니치 오나지 사교-데 탄쵸-데스", exampleMeaning: "매일 같은 작업이라 단조롭습니다.",
    breakdown: [
      { word: "作業", reading: "さぎょう", meaning: "작업" }
    ] },
  { level: "N3", kanji: "敏感", reading: "びんかん", korean: "빙칸", meaning: "민감",
    example: "肌がとても敏感です。", exampleReading: "はだがとてもびんかんです。", exampleKorean: "하다가 토테모 빙칸데스", exampleMeaning: "피부가 매우 민감합니다.",
    breakdown: [
      { word: "肌", reading: "はだ", meaning: "피부" }
    ] },
  { level: "N3", kanji: "鈍感", reading: "どんかん", korean: "동칸", meaning: "둔감",
    example: "彼は他人の気持ちに鈍感です。", exampleReading: "かれはたにんのきもちにどんかんです。", exampleKorean: "카레와 타닌노 키모치니 동칸데스", exampleMeaning: "그는 타인의 감정에 둔감합니다.",
    breakdown: [
      { word: "他人", reading: "たにん", meaning: "타인" }
    ] },

  // ---------- N2 ----------
  { level: "N2", kanji: "抽象的", reading: "ちゅうしょうてき", korean: "츄-쇼-테키", meaning: "추상적",
    example: "彼の説明は抽象的すぎます。", exampleReading: "かれのせつめいはちゅうしょうてきすぎます。", exampleKorean: "카레노 세츠메-와 츄-쇼-테키스기마스", exampleMeaning: "그의 설명은 너무 추상적입니다.",
    breakdown: [
      { word: "すぎます", reading: "すぎます", meaning: "너무 ~하다 (동사+すぎる)" },
    ] },
  { level: "N2", kanji: "矛盾", reading: "むじゅん", korean: "무쥰", meaning: "모순",
    example: "彼の話には矛盾があります。", exampleReading: "かれのはなしにはむじゅんがあります。", exampleKorean: "카레노 하나시니와 무쥰가 아리마스", exampleMeaning: "그의 이야기에는 모순이 있습니다.",
    breakdown: [
      { word: "話", reading: "はなし", meaning: "이야기" },
    ] },
  { level: "N2", kanji: "概念", reading: "がいねん", korean: "가이넨", meaning: "개념",
    example: "この概念を理解するのは難しいです。", exampleReading: "このがいねんをりかいするのはむずかしいです。", exampleKorean: "코노 가이넨오 리카이스루노와 무즈카시-데스", exampleMeaning: "이 개념을 이해하는 것은 어렵습니다.",
    breakdown: [
      { word: "理解する", reading: "りかいする", meaning: "이해하다" },
    ] },
  { level: "N2", kanji: "傾向", reading: "けいこう", korean: "케-코-", meaning: "경향",
    example: "最近、物価が上がる傾向にあります。", exampleReading: "さいきん、ぶっかがあがるけいこうにあります。", exampleKorean: "사이킹, 붓카가 아가루 케-코-니 아리마스", exampleMeaning: "최근 물가가 오르는 경향이 있습니다.",
    breakdown: [
      { word: "物価", reading: "ぶっか", meaning: "물가" },
    ] },
  { level: "N2", kanji: "前提", reading: "ぜんてい", korean: "젠테-", meaning: "전제",
    example: "その計画は資金があることを前提としています。", exampleReading: "そのけいかくはしきんがあることをぜんていとしています。", exampleKorean: "소노 케-카쿠와 시킹가 아루 코토오 젠테-토 시테이마스", exampleMeaning: "그 계획은 자금이 있다는 것을 전제로 합니다.",
    breakdown: [
      { word: "資金", reading: "しきん", meaning: "자금" },
    ] },
  { level: "N2", kanji: "論理", reading: "ろんり", korean: "론리", meaning: "논리",
    example: "彼の論理はとても分かりやすいです。", exampleReading: "かれのろんりはとてもわかりやすいです。", exampleKorean: "카레노 론리와 도테모 와카리야스이데스", exampleMeaning: "그의 논리는 아주 이해하기 쉽습니다.",
    breakdown: [
      { word: "分かりやすい", reading: "わかりやすい", meaning: "이해하기 쉽다" },
    ] },
  { level: "N2", kanji: "要素", reading: "ようそ", korean: "요-소", meaning: "요소",
    example: "成功にはいくつかの要素が必要です。", exampleReading: "せいこうにはいくつかのようそがひつようです。", exampleKorean: "세-코-니와 이쿠츠카노 요-소가 히츠요-데스", exampleMeaning: "성공에는 몇 가지 요소가 필요합니다.",
    breakdown: [
      { word: "いくつかの", reading: "いくつかの", meaning: "몇 가지의" },
    ] },
  { level: "N2", kanji: "分析", reading: "ぶんせき", korean: "분세키", meaning: "분석",
    example: "データを詳しく分析します。", exampleReading: "データをくわしくぶんせきします。", exampleKorean: "데-타오 쿠와시쿠 분세키 시마스", exampleMeaning: "데이터를 자세히 분석합니다.",
    breakdown: [
      { word: "詳しく", reading: "くわしく", meaning: "자세히" },
    ] },
  { level: "N2", kanji: "普及", reading: "ふきゅう", korean: "후큐-", meaning: "보급",
    example: "スマートフォンが急速に普及しました。", exampleReading: "スマートフォンがきゅうそくにふきゅうしました。", exampleKorean: "스마-토홍가 큐-소쿠니 후큐- 시마시타", exampleMeaning: "스마트폰이 급속히 보급되었습니다.",
    breakdown: [
      { word: "急速に", reading: "きゅうそくに", meaning: "급속히" },
    ] },
  { level: "N2", kanji: "促進", reading: "そくしん", korean: "소쿠신", meaning: "촉진",
    example: "経済の成長を促進します。", exampleReading: "けいざいのせいちょうをそくしんします。", exampleKorean: "케-자이노 세-쵸-오 소쿠신 시마스", exampleMeaning: "경제 성장을 촉진합니다.",
    breakdown: [
      { word: "経済の成長", reading: "けいざいのせいちょう", meaning: "경제 성장" },
    ] },
  { level: "N2", kanji: "抑制", reading: "よくせい", korean: "요쿠세-", meaning: "억제",
    example: "食欲を抑制するのは難しいです。", exampleReading: "しょくよくをよくせいするのはむずかしいです。", exampleKorean: "쇼쿠요쿠오 요쿠세-스루노와 무즈카시-데스", exampleMeaning: "식욕을 억제하는 것은 어렵습니다.",
    breakdown: [
      { word: "食欲", reading: "しょくよく", meaning: "식욕" },
    ] },
  { level: "N2", kanji: "相違", reading: "そうい", korean: "소-이", meaning: "차이",
    example: "二つの意見には相違があります。", exampleReading: "ふたつのいけんにはそういがあります。", exampleKorean: "후타츠노 이켄니와 소-이가 아리마스", exampleMeaning: "두 의견에는 차이가 있습니다.",
    breakdown: [
      { word: "二つの意見", reading: "ふたつのいけん", meaning: "두 의견" },
    ] },
  { level: "N2", kanji: "一致", reading: "いっち", korean: "잇치", meaning: "일치",
    example: "みんなの意見が一致しました。", exampleReading: "みんなのいけんがいっちしました。", exampleKorean: "민나노 이켄가 잇치 시마시타", exampleMeaning: "모두의 의견이 일치했습니다.",
    breakdown: [
      { word: "みんなの", reading: "みんなの", meaning: "모두의" },
    ] },
  { level: "N2", kanji: "妥当", reading: "だとう", korean: "다토-", meaning: "타당",
    example: "その判断は妥当だと思います。", exampleReading: "そのはんだんはだとうだとおもいます。", exampleKorean: "소노 한단와 다토-다토 오모이마스", exampleMeaning: "그 판단은 타당하다고 생각합니다.",
    breakdown: [
      { word: "判断", reading: "はんだん", meaning: "판단" },
    ] },
  { level: "N2", kanji: "曖昧", reading: "あいまい", korean: "아이마이", meaning: "애매",
    example: "彼の返事は曖昧でした。", exampleReading: "かれのへんじはあいまいでした。", exampleKorean: "카레노 헨지와 아이마이데시타", exampleMeaning: "그의 대답은 애매했습니다.",
    breakdown: [
      { word: "返事", reading: "へんじ", meaning: "대답" },
    ] },
  { level: "N2", kanji: "深刻", reading: "しんこく", korean: "싱코쿠", meaning: "심각",
    example: "環境問題はますます深刻になっています。", exampleReading: "かんきょうもんだいはますますしんこくになっています。", exampleKorean: "캉쿄- 몬다이와 마스마스 싱코쿠니 낫테이마스", exampleMeaning: "환경 문제는 점점 심각해지고 있습니다.",
    breakdown: [
      { word: "ますます", reading: "ますます", meaning: "점점" },
    ] },
  { level: "N2", kanji: "顕著", reading: "けんちょ", korean: "켄쵸", meaning: "현저",
    example: "効果が顕著に現れました。", exampleReading: "こうかがけんちょにあらわれました。", exampleKorean: "코-카가 켄쵸니 아라와레마시타", exampleMeaning: "효과가 현저하게 나타났습니다.",
    breakdown: [
      { word: "現れました", reading: "あらわれました", meaning: "나타났습니다" },
    ] },
  { level: "N2", kanji: "極端", reading: "きょくたん", korean: "쿄쿠탄", meaning: "극단",
    example: "極端な意見は避けたほうがいいです。", exampleReading: "きょくたんないけんはさけたほうがいいです。", exampleKorean: "쿄쿠탄나 이켄와 사케타 호-가 이-데스", exampleMeaning: "극단적인 의견은 피하는 것이 좋습니다.",
    breakdown: [
      { word: "避けたほうがいいです", reading: "さけたほうがいいです", meaning: "피하는 게 좋습니다" },
    ] },
  { level: "N2", kanji: "慎重", reading: "しんちょう", korean: "신쵸-", meaning: "신중",
    example: "この件については慎重に考えます。", exampleReading: "このけんについてはしんちょうにかんがえます。", exampleKorean: "코노 켄니 츠이테와 신쵸-니 캉가에마스", exampleMeaning: "이 건에 대해서는 신중하게 생각하겠습니다.",
    breakdown: [
      { word: "この件については", reading: "このけんについては", meaning: "이 건에 대해서는" },
    ] },
  { level: "N2", kanji: "柔軟", reading: "じゅうなん", korean: "쥬-난", meaning: "유연",
    example: "柔軟な考え方が大切です。", exampleReading: "じゅうなんなかんがえかたがたいせつです。", exampleKorean: "쥬-난나 캉가에카타가 타이세츠데스", exampleMeaning: "유연한 사고방식이 중요합니다.",
    breakdown: [
      { word: "考え方", reading: "かんがえかた", meaning: "사고방식" },
    ] },

  { level: "N2", kanji: "見解", reading: "けんかい", korean: "켄카이", meaning: "견해",
    example: "この問題について私の見解を述べます。", exampleReading: "このもんだいについてわたしのけんかいをのべます。", exampleKorean: "코노 몬다이니 츠이테 와타시노 켄카이오 노베마스", exampleMeaning: "이 문제에 대해 제 견해를 말씀드리겠습니다.",
    breakdown: [
      { word: "述べます", reading: "のべます", meaning: "말합니다" },
    ] },
  { level: "N2", kanji: "意図", reading: "いと", korean: "이토", meaning: "의도",
    example: "彼の発言の意図が分かりません。", exampleReading: "かれのはつげんのいとがわかりません。", exampleKorean: "카레노 하츠겐노 이토가 와카리마셍", exampleMeaning: "그의 발언 의도를 모르겠습니다.",
    breakdown: [
      { word: "発言", reading: "はつげん", meaning: "발언" },
    ] },
  { level: "N2", kanji: "目安", reading: "めやす", korean: "메야스", meaning: "기준, 목표치",
    example: "一週間を目安に完成させます。", exampleReading: "いっしゅうかんをめやすにかんせいさせます。", exampleKorean: "잇슈-캉오 메야스니 칸세-사세마스", exampleMeaning: "일주일을 기준으로 완성시키겠습니다.",
    breakdown: [
      { word: "完成させます", reading: "かんせいさせます", meaning: "완성시킵니다" },
    ] },
  { level: "N2", kanji: "基準", reading: "きじゅん", korean: "키쥰", meaning: "기준",
    example: "合格の基準を確認します。", exampleReading: "ごうかくのきじゅんをかくにんします。", exampleKorean: "고-카쿠노 키쥰오 카쿠닌 시마스", exampleMeaning: "합격 기준을 확인합니다.",
    breakdown: [
      { word: "合格", reading: "ごうかく", meaning: "합격" },
    ] },
  { level: "N2", kanji: "根拠", reading: "こんきょ", korean: "콘쿄", meaning: "근거",
    example: "その主張には根拠がありません。", exampleReading: "そのしゅちょうにはこんきょがありません。", exampleKorean: "소노 슈쵸-니와 콘쿄가 아리마셍", exampleMeaning: "그 주장에는 근거가 없습니다.",
    breakdown: [
      { word: "主張", reading: "しゅちょう", meaning: "주장" },
    ] },
  { level: "N2", kanji: "証拠", reading: "しょうこ", korean: "쇼-코", meaning: "증거",
    example: "犯人の証拠が見つかりました。", exampleReading: "はんにんのしょうこがみつかりました。", exampleKorean: "한닌노 쇼-코가 미츠카리마시타", exampleMeaning: "범인의 증거가 발견되었습니다.",
    breakdown: [
      { word: "犯人", reading: "はんにん", meaning: "범인" },
    ] },
  { level: "N2", kanji: "主張", reading: "しゅちょう", korean: "슈쵸-", meaning: "주장",
    example: "彼は自分の意見を強く主張しました。", exampleReading: "かれはじぶんのいけんをつよくしゅちょうしました。", exampleKorean: "카레와 지분노 이켄오 츠요쿠 슈쵸- 시마시타", exampleMeaning: "그는 자신의 의견을 강하게 주장했습니다.",
    breakdown: [
      { word: "強く", reading: "つよく", meaning: "강하게" },
    ] },
  { level: "N2", kanji: "反論", reading: "はんろん", korean: "한론", meaning: "반론",
    example: "彼の意見に反論しました。", exampleReading: "かれのいけんにはんろんしました。", exampleKorean: "카레노 이켄니 한론 시마시타", exampleMeaning: "그의 의견에 반론했습니다.",
    breakdown: [
      { word: "意見", reading: "いけん", meaning: "의견" },
    ] },
  { level: "N2", kanji: "議論", reading: "ぎろん", korean: "기론", meaning: "논의",
    example: "会議で活発な議論が行われました。", exampleReading: "かいぎでかっぱつなぎろんがおこなわれました。", exampleKorean: "카이기데 캅파츠나 기론가 오코나와레마시타", exampleMeaning: "회의에서 활발한 논의가 이루어졌습니다.",
    breakdown: [
      { word: "活発な", reading: "かっぱつな", meaning: "활발한" },
    ] },
  { level: "N2", kanji: "交渉", reading: "こうしょう", korean: "코-쇼-", meaning: "교섭",
    example: "給料について交渉しました。", exampleReading: "きゅうりょうについてこうしょうしました。", exampleKorean: "큐-료-니 츠이테 코-쇼- 시마시타", exampleMeaning: "급여에 대해 교섭했습니다.",
    breakdown: [
      { word: "給料", reading: "きゅうりょう", meaning: "급여" },
    ] },
  { level: "N2", kanji: "承認", reading: "しょうにん", korean: "쇼-닌", meaning: "승인",
    example: "上司から企画を承認されました。", exampleReading: "じょうしからきかくをしょうにんされました。", exampleKorean: "죠-시카라 키카쿠오 쇼-닌 사레마시타", exampleMeaning: "상사에게서 기획을 승인받았습니다.",
    breakdown: [
      { word: "企画", reading: "きかく", meaning: "기획" },
    ] },
  { level: "N2", kanji: "拒否", reading: "きょひ", korean: "쿄히", meaning: "거부",
    example: "彼はその提案を拒否しました。", exampleReading: "かれはそのていあんをきょひしました。", exampleKorean: "카레와 소노 테-안오 쿄히 시마시타", exampleMeaning: "그는 그 제안을 거부했습니다.",
    breakdown: [
      { word: "提案", reading: "ていあん", meaning: "제안" },
    ] },
  { level: "N2", kanji: "承知", reading: "しょうち", korean: "쇼-치", meaning: "승낙, 양해",
    example: "その件については承知しました。", exampleReading: "そのけんについてはしょうちしました。", exampleKorean: "소노 켄니 츠이테와 쇼-치 시마시타", exampleMeaning: "그 건에 대해서는 알겠습니다.",
    breakdown: [
      { word: "その件", reading: "そのけん", meaning: "그 건" },
    ] },
  { level: "N2", kanji: "保証", reading: "ほしょう", korean: "호쇼-", meaning: "보증",
    example: "この製品は一年間保証されています。", exampleReading: "このせいひんはいちねんかんほしょうされています。", exampleKorean: "코노 세-힝와 이치넨캉 호쇼- 사레테이마스", exampleMeaning: "이 제품은 1년간 보증됩니다.",
    breakdown: [
      { word: "一年間", reading: "いちねんかん", meaning: "1년간" },
    ] },
  { level: "N2", kanji: "責任", reading: "せきにん", korean: "세키닌", meaning: "책임",
    example: "自分の行動に責任を持ちます。", exampleReading: "じぶんのこうどうにせきにんをもちます。", exampleKorean: "지분노 코-도-니 세키닌오 모치마스", exampleMeaning: "자신의 행동에 책임을 집니다.",
    breakdown: [
      { word: "行動", reading: "こうどう", meaning: "행동" },
    ] },
  { level: "N2", kanji: "義務", reading: "ぎむ", korean: "기무", meaning: "의무",
    example: "税金を納めるのは国民の義務です。", exampleReading: "ぜいきんをおさめるのはこくみんのぎむです。", exampleKorean: "제-킹오 오사메루노와 코쿠민노 기무데스", exampleMeaning: "세금을 내는 것은 국민의 의무입니다.",
    breakdown: [
      { word: "税金を納める", reading: "ぜいきんをおさめる", meaning: "세금을 내다" },
    ] },
  { level: "N2", kanji: "権利", reading: "けんり", korean: "켄리", meaning: "권리",
    example: "誰にでも教育を受ける権利があります。", exampleReading: "だれにでもきょういくをうけるけんりがあります。", exampleKorean: "다레니데모 쿄-이쿠오 우케루 켄리가 아리마스", exampleMeaning: "누구에게나 교육을 받을 권리가 있습니다.",
    breakdown: [
      { word: "教育を受ける", reading: "きょういくをうける", meaning: "교육을 받다" },
    ] },
  { level: "N2", kanji: "権限", reading: "けんげん", korean: "켄겐", meaning: "권한",
    example: "この決定をする権限がありません。", exampleReading: "このけっていをするけんげんがありません。", exampleKorean: "코노 켓테-오 스루 켄겐가 아리마셍", exampleMeaning: "이 결정을 할 권한이 없습니다.",
    breakdown: [
      { word: "決定", reading: "けってい", meaning: "결정" },
    ] },
  { level: "N2", kanji: "制度", reading: "せいど", korean: "세-도", meaning: "제도",
    example: "新しい年金制度が始まります。", exampleReading: "あたらしいねんきんせいどがはじまります。", exampleKorean: "아타라시- 넨킨 세-도가 하지마리마스", exampleMeaning: "새로운 연금 제도가 시작됩니다.",
    breakdown: [
      { word: "年金", reading: "ねんきん", meaning: "연금" },
    ] },
  { level: "N2", kanji: "政策", reading: "せいさく", korean: "세-사쿠", meaning: "정책",
    example: "政府は新しい政策を発表しました。", exampleReading: "せいふはあたらしいせいさくをはっぴょうしました。", exampleKorean: "세-후와 아타라시- 세-사쿠오 핫표- 시마시타", exampleMeaning: "정부는 새로운 정책을 발표했습니다.",
    breakdown: [
      { word: "政府", reading: "せいふ", meaning: "정부" },
    ] },
  { level: "N2", kanji: "方針", reading: "ほうしん", korean: "호-신", meaning: "방침",
    example: "会社の方針が変わりました。", exampleReading: "かいしゃのほうしんがかわりました。", exampleKorean: "카이샤노 호-신가 카와리마시타", exampleMeaning: "회사의 방침이 바뀌었습니다.",
    breakdown: [
      { word: "会社の", reading: "かいしゃの", meaning: "회사의" },
    ] },
  { level: "N2", kanji: "戦略", reading: "せんりゃく", korean: "센랴쿠", meaning: "전략",
    example: "新しい営業戦略を立てます。", exampleReading: "あたらしいえいぎょうせんりゃくをたてます。", exampleKorean: "아타라시- 에-교- 센랴쿠오 타테마스", exampleMeaning: "새로운 영업 전략을 세웁니다.",
    breakdown: [
      { word: "営業", reading: "えいぎょう", meaning: "영업" },
    ] },
  { level: "N2", kanji: "見込み", reading: "みこみ", korean: "미코미", meaning: "전망, 가망",
    example: "来年は売り上げが伸びる見込みです。", exampleReading: "らいねんはうりあげがのびるみこみです。", exampleKorean: "라이넹와 우리아게가 노비루 미코미데스", exampleMeaning: "내년은 매출이 늘어날 전망입니다.",
    breakdown: [
      { word: "伸びる", reading: "のびる", meaning: "늘어나다" },
    ] },
  { level: "N2", kanji: "効率", reading: "こうりつ", korean: "코-리츠", meaning: "효율",
    example: "作業の効率を上げたいです。", exampleReading: "さぎょうのこうりつをあげたいです。", exampleKorean: "사교-노 코-리츠오 아게타이데스", exampleMeaning: "작업의 효율을 높이고 싶습니다.",
    breakdown: [
      { word: "上げたいです", reading: "あげたいです", meaning: "높이고 싶습니다" },
    ] },
  { level: "N2", kanji: "能率", reading: "のうりつ", korean: "노-리츠", meaning: "능률",
    example: "休憩を取ると能率が上がります。", exampleReading: "きゅうけいをとるとのうりつがあがります。", exampleKorean: "큐-케-오 토루토 노-리츠가 아가리마스", exampleMeaning: "휴식을 취하면 능률이 오릅니다.",
    breakdown: [
      { word: "休憩を取る", reading: "きゅうけいをとる", meaning: "휴식을 취하다" },
    ] },
  { level: "N2", kanji: "生産", reading: "せいさん", korean: "세-산", meaning: "생산",
    example: "この工場は自動車を生産しています。", exampleReading: "このこうじょうはじどうしゃをせいさんしています。", exampleKorean: "코노 코-죠-와 지도-샤오 세-산 시테이마스", exampleMeaning: "이 공장은 자동차를 생산하고 있습니다.",
    breakdown: [
      { word: "工場", reading: "こうじょう", meaning: "공장" },
    ] },
  { level: "N2", kanji: "消費", reading: "しょうひ", korean: "쇼-히", meaning: "소비",
    example: "電気の消費を減らします。", exampleReading: "でんきのしょうひをへらします。", exampleKorean: "뎅키노 쇼-히오 헤라시마스", exampleMeaning: "전기 소비를 줄입니다.",
    breakdown: [
      { word: "減らします", reading: "へらします", meaning: "줄입니다" },
    ] },
  { level: "N2", kanji: "供給", reading: "きょうきゅう", korean: "쿄-큐-", meaning: "공급",
    example: "水の供給が止まりました。", exampleReading: "みずのきょうきゅうがとまりました。", exampleKorean: "미즈노 쿄-큐-가 토마리마시타", exampleMeaning: "물 공급이 끊겼습니다.",
    breakdown: [
      { word: "止まりました", reading: "とまりました", meaning: "멈췄습니다" },
    ] },
  { level: "N2", kanji: "需要", reading: "じゅよう", korean: "쥬요-", meaning: "수요",
    example: "この製品の需要が高まっています。", exampleReading: "このせいひんのじゅようがたかまっています。", exampleKorean: "코노 세-힝노 쥬요-가 타카맛테이마스", exampleMeaning: "이 제품의 수요가 높아지고 있습니다.",
    breakdown: [
      { word: "高まっています", reading: "たかまっています", meaning: "높아지고 있습니다" },
    ] },
  { level: "N2", kanji: "投資", reading: "とうし", korean: "토-시", meaning: "투자",
    example: "株式に投資しています。", exampleReading: "かぶしきにとうししています。", exampleKorean: "카부시키니 토-시 시테이마스", exampleMeaning: "주식에 투자하고 있습니다.",
    breakdown: [
      { word: "株式", reading: "かぶしき", meaning: "주식" },
    ] },
  { level: "N2", kanji: "損失", reading: "そんしつ", korean: "손시츠", meaning: "손실",
    example: "会社は大きな損失を出しました。", exampleReading: "かいしゃはおおきなそんしつをだしました。", exampleKorean: "카이샤와 오-키나 손시츠오 다시마시타", exampleMeaning: "회사는 큰 손실을 냈습니다.",
    breakdown: [
      { word: "出しました", reading: "だしました", meaning: "냈습니다" },
    ] },
  { level: "N2", kanji: "利益", reading: "りえき", korean: "리에키", meaning: "이익",
    example: "今年は利益が増えました。", exampleReading: "ことしはりえきがふえました。", exampleKorean: "코토시와 리에키가 후에마시타", exampleMeaning: "올해는 이익이 늘었습니다.",
    breakdown: [
      { word: "今年", reading: "ことし", meaning: "올해" },
    ] },
  { level: "N2", kanji: "負担", reading: "ふたん", korean: "후탄", meaning: "부담",
    example: "家賃が生活の負担になっています。", exampleReading: "やちんがせいかつのふたんになっています。", exampleKorean: "야친가 세-카츠노 후탄니 낫테이마스", exampleMeaning: "집세가 생활의 부담이 되고 있습니다.",
    breakdown: [
      { word: "家賃", reading: "やちん", meaning: "집세" },
    ] },
  { level: "N2", kanji: "圧力", reading: "あつりょく", korean: "아츠료쿠", meaning: "압력",
    example: "周りからの圧力を感じます。", exampleReading: "まわりからのあつりょくをかんじます。", exampleKorean: "마와리카라노 아츠료쿠오 칸지마스", exampleMeaning: "주변으로부터의 압력을 느낍니다.",
    breakdown: [
      { word: "感じます", reading: "かんじます", meaning: "느낍니다" },
    ] },
  { level: "N2", kanji: "緊張", reading: "きんちょう", korean: "킨쵸-", meaning: "긴장",
    example: "面接でとても緊張しました。", exampleReading: "めんせつでとてもきんちょうしました。", exampleKorean: "멘세츠데 도테모 킨쵸- 시마시타", exampleMeaning: "면접에서 아주 긴장했습니다.",
    breakdown: [
      { word: "面接", reading: "めんせつ", meaning: "면접" },
    ] },
  { level: "N2", kanji: "緩和", reading: "かんわ", korean: "캉와", meaning: "완화",
    example: "規制が緩和されました。", exampleReading: "きせいがかんわされました。", exampleKorean: "키세-가 캉와 사레마시타", exampleMeaning: "규제가 완화되었습니다.",
    breakdown: [
      { word: "規制", reading: "きせい", meaning: "규제" },
    ] },
  { level: "N2", kanji: "克服", reading: "こくふく", korean: "코쿠후쿠", meaning: "극복",
    example: "困難を克服しました。", exampleReading: "こんなんをこくふくしました。", exampleKorean: "콘난오 코쿠후쿠 시마시타", exampleMeaning: "어려움을 극복했습니다.",
    breakdown: [
      { word: "困難", reading: "こんなん", meaning: "어려움" },
    ] },
  { level: "N2", kanji: "挑戦", reading: "ちょうせん", korean: "쵸-센", meaning: "도전",
    example: "新しいことに挑戦したいです。", exampleReading: "あたらしいことにちょうせんしたいです。", exampleKorean: "아타라시- 코토니 쵸-센시타이데스", exampleMeaning: "새로운 것에 도전하고 싶습니다.",
    breakdown: [
      { word: "新しいこと", reading: "あたらしいこと", meaning: "새로운 것" },
    ] },
  { level: "N2", kanji: "継続", reading: "けいぞく", korean: "케-조쿠", meaning: "계속",
    example: "この活動を継続していきます。", exampleReading: "このかつどうをけいぞくしていきます。", exampleKorean: "코노 카츠도-오 케-조쿠 시테이키마스", exampleMeaning: "이 활동을 계속해 나가겠습니다.",
    breakdown: [
      { word: "活動", reading: "かつどう", meaning: "활동" },
    ] },
  { level: "N2", kanji: "中断", reading: "ちゅうだん", korean: "츄-단", meaning: "중단",
    example: "雨で試合が中断されました。", exampleReading: "あめでしあいがちゅうだんされました。", exampleKorean: "아메데 시아이가 츄-단 사레마시타", exampleMeaning: "비로 시합이 중단되었습니다.",
    breakdown: [
      { word: "雨で", reading: "あめで", meaning: "비로" },
    ] },

  { level: "N2", kanji: "動向", reading: "どうこう", korean: "도-코-", meaning: "동향",
    example: "市場の動向を分析します。", exampleReading: "しじょうのどうこうをぶんせきします。", exampleKorean: "시죠-노 도-코-오 분세키 시마스", exampleMeaning: "시장 동향을 분석합니다.",
    breakdown: [
      { word: "市場", reading: "しじょう", meaning: "시장" },
    ] },
  { level: "N2", kanji: "展開", reading: "てんかい", korean: "텐카이", meaning: "전개",
    example: "物語は思わぬ方向に展開しました。", exampleReading: "ものがたりはおもわぬほうこうにてんかいしました。", exampleKorean: "모노가타리와 오모와누 호-코-니 텐카이 시마시타", exampleMeaning: "이야기는 뜻밖의 방향으로 전개되었습니다.",
    breakdown: [
      { word: "思わぬ方向に", reading: "おもわぬほうこうに", meaning: "뜻밖의 방향으로" },
    ] },
  { level: "N2", kanji: "展望", reading: "てんぼう", korean: "텐보-", meaning: "전망",
    example: "今後の展望について話しました。", exampleReading: "こんごのてんぼうについてはなしました。", exampleKorean: "콘고노 텐보-니 츠이테 하나시마시타", exampleMeaning: "향후 전망에 대해 이야기했습니다.",
    breakdown: [
      { word: "今後の", reading: "こんごの", meaning: "향후의" },
    ] },
  { level: "N2", kanji: "変動", reading: "へんどう", korean: "헨도-", meaning: "변동",
    example: "為替の変動が激しいです。", exampleReading: "かわせのへんどうがはげしいです。", exampleKorean: "카와세노 헨도-가 하게시-데스", exampleMeaning: "환율 변동이 심합니다.",
    breakdown: [
      { word: "為替", reading: "かわせ", meaning: "환율" },
    ] },
  { level: "N2", kanji: "変革", reading: "へんかく", korean: "헨카쿠", meaning: "변혁",
    example: "社会に大きな変革が起きています。", exampleReading: "しゃかいにおおきなへんかくがおきています。", exampleKorean: "샤카이니 오-키나 헨카쿠가 오키테이마스", exampleMeaning: "사회에 큰 변혁이 일어나고 있습니다.",
    breakdown: [
      { word: "起きています", reading: "おきています", meaning: "일어나고 있습니다" },
    ] },
  { level: "N2", kanji: "革新", reading: "かくしん", korean: "카쿠신", meaning: "혁신",
    example: "技術の革新が進んでいます。", exampleReading: "ぎじゅつのかくしんがすすんでいます。", exampleKorean: "기쥬츠노 카쿠신가 스슨데이마스", exampleMeaning: "기술 혁신이 진행되고 있습니다.",
    breakdown: [
      { word: "進んでいます", reading: "すすんでいます", meaning: "진행되고 있습니다" },
    ] },
  { level: "N2", kanji: "改革", reading: "かいかく", korean: "카이카쿠", meaning: "개혁",
    example: "教育改革が求められています。", exampleReading: "きょういくかいかくがもとめられています。", exampleKorean: "쿄-이쿠 카이카쿠가 모토메라레테이마스", exampleMeaning: "교육 개혁이 요구되고 있습니다.",
    breakdown: [
      { word: "求められています", reading: "もとめられています", meaning: "요구되고 있습니다" },
    ] },
  { level: "N2", kanji: "改訂", reading: "かいてい", korean: "카이테-", meaning: "개정",
    example: "教科書が改訂されました。", exampleReading: "きょうかしょがかいていされました。", exampleKorean: "쿄-카쇼가 카이테- 사레마시타", exampleMeaning: "교과서가 개정되었습니다.",
    breakdown: [
      { word: "教科書", reading: "きょうかしょ", meaning: "교과서" },
    ] },
  { level: "N2", kanji: "修正", reading: "しゅうせい", korean: "슈-세-", meaning: "수정",
    example: "計画を少し修正しました。", exampleReading: "けいかくをすこししゅうせいしました。", exampleKorean: "케-카쿠오 스코시 슈-세- 시마시타", exampleMeaning: "계획을 조금 수정했습니다.",
    breakdown: [
      { word: "計画", reading: "けいかく", meaning: "계획" },
    ] },
  { level: "N2", kanji: "訂正", reading: "ていせい", korean: "테-세-", meaning: "정정",
    example: "記事の誤りを訂正しました。", exampleReading: "きじのあやまりをていせいしました。", exampleKorean: "키지노 아야마리오 테-세- 시마시타", exampleMeaning: "기사의 오류를 정정했습니다.",
    breakdown: [
      { word: "記事の誤り", reading: "きじのあやまり", meaning: "기사의 오류" },
    ] },
  { level: "N2", kanji: "補足", reading: "ほそく", korean: "호소쿠", meaning: "보충",
    example: "説明を少し補足します。", exampleReading: "せつめいをすこしほそくします。", exampleKorean: "세츠메-오 스코시 호소쿠 시마스", exampleMeaning: "설명을 조금 보충하겠습니다.",
    breakdown: [
      { word: "説明", reading: "せつめい", meaning: "설명" },
    ] },
  { level: "N2", kanji: "補充", reading: "ほじゅう", korean: "호쥬-", meaning: "보충",
    example: "在庫を補充しました。", exampleReading: "ざいこをほじゅうしました。", exampleKorean: "자이코오 호쥬- 시마시타", exampleMeaning: "재고를 보충했습니다.",
    breakdown: [
      { word: "在庫", reading: "ざいこ", meaning: "재고" },
    ] },
  { level: "N2", kanji: "削減", reading: "さくげん", korean: "사쿠겐", meaning: "삭감",
    example: "経費を削減します。", exampleReading: "けいひをさくげんします。", exampleKorean: "케-히오 사쿠겐 시마스", exampleMeaning: "경비를 삭감합니다.",
    breakdown: [
      { word: "経費", reading: "けいひ", meaning: "경비" },
    ] },
  { level: "N2", kanji: "縮小", reading: "しゅくしょう", korean: "슈쿠쇼-", meaning: "축소",
    example: "事業の規模を縮小しました。", exampleReading: "じぎょうのきぼをしゅくしょうしました。", exampleKorean: "지교-노 키보오 슈쿠쇼- 시마시타", exampleMeaning: "사업 규모를 축소했습니다.",
    breakdown: [
      { word: "事業の規模", reading: "じぎょうのきぼ", meaning: "사업 규모" },
    ] },
  { level: "N2", kanji: "拡大", reading: "かくだい", korean: "카쿠다이", meaning: "확대",
    example: "会社の事業を拡大します。", exampleReading: "かいしゃのじぎょうをかくだいします。", exampleKorean: "카이샤노 지교-오 카쿠다이 시마스", exampleMeaning: "회사 사업을 확대합니다.",
    breakdown: [
      { word: "事業", reading: "じぎょう", meaning: "사업" },
    ] },
  { level: "N2", kanji: "拡張", reading: "かくちょう", korean: "카쿠쵸-", meaning: "확장",
    example: "道路を拡張する工事が始まりました。", exampleReading: "どうろをかくちょうするこうじがはじまりました。", exampleKorean: "도-로오 카쿠쵸-스루 코-지가 하지마리마시타", exampleMeaning: "도로를 확장하는 공사가 시작되었습니다.",
    breakdown: [
      { word: "工事", reading: "こうじ", meaning: "공사" },
    ] },
  { level: "N2", kanji: "強化", reading: "きょうか", korean: "쿄-카", meaning: "강화",
    example: "セキュリティを強化しました。", exampleReading: "セキュリティをきょうかしました。", exampleKorean: "세큐리티오 쿄-카 시마시타", exampleMeaning: "보안을 강화했습니다.",
    breakdown: [
      { word: "セキュリティ", reading: "セキュリティ", meaning: "보안" },
    ] },
  { level: "N2", kanji: "徹底", reading: "てってい", korean: "텟테-", meaning: "철저",
    example: "衛生管理を徹底しています。", exampleReading: "えいせいかんりをてっていしています。", exampleKorean: "에-세- 칸리오 텟테- 시테이마스", exampleMeaning: "위생 관리를 철저히 하고 있습니다.",
    breakdown: [
      { word: "衛生管理", reading: "えいせいかんり", meaning: "위생 관리" },
    ] },
  { level: "N2", kanji: "一貫", reading: "いっかん", korean: "잇칸", meaning: "일관",
    example: "彼の意見は一貫しています。", exampleReading: "かれのいけんはいっかんしています。", exampleKorean: "카레노 이켄와 잇칸 시테이마스", exampleMeaning: "그의 의견은 일관되어 있습니다.",
    breakdown: [
      { word: "意見", reading: "いけん", meaning: "의견" },
    ] },
  { level: "N2", kanji: "均等", reading: "きんとう", korean: "킨토-", meaning: "균등",
    example: "利益を均等に分けました。", exampleReading: "りえきをきんとうにわけました。", exampleKorean: "리에키오 킨토-니 와케마시타", exampleMeaning: "이익을 균등하게 나누었습니다.",
    breakdown: [
      { word: "分けました", reading: "わけました", meaning: "나누었습니다" },
    ] },

  { level: "N2", kanji: "収支", reading: "しゅうし", korean: "슈-시", meaning: "수지",
    example: "家計の収支を確認します。", exampleReading: "かけいのしゅうしをかくにんします。", exampleKorean: "카케-노 슈-시오 카쿠닌 시마스", exampleMeaning: "가계 수지를 확인합니다.",
    breakdown: [
      { word: "家計", reading: "かけい", meaning: "가계" },
    ] },
  { level: "N2", kanji: "財政", reading: "ざいせい", korean: "자이세-", meaning: "재정",
    example: "会社の財政状況が厳しいです。", exampleReading: "かいしゃのざいせいじょうきょうがきびしいです。", exampleKorean: "카이샤노 자이세- 죠-쿄-가 키비시-데스", exampleMeaning: "회사의 재정 상황이 어렵습니다.",
    breakdown: [
      { word: "厳しいです", reading: "きびしいです", meaning: "어렵습니다" },
    ] },
  { level: "N2", kanji: "予算", reading: "よさん", korean: "요산", meaning: "예산",
    example: "今年度の予算を決めました。", exampleReading: "こんねんどのよさんをきめました。", exampleKorean: "콘넨도노 요산오 키메마시타", exampleMeaning: "이번 연도 예산을 정했습니다.",
    breakdown: [
      { word: "今年度", reading: "こんねんど", meaning: "이번 연도" },
    ] },
  { level: "N2", kanji: "経営", reading: "けいえい", korean: "케-에-", meaning: "경영",
    example: "父は小さな店を経営しています。", exampleReading: "ちちはちいさなみせをけいえいしています。", exampleKorean: "치치와 치-사나 미세오 케-에- 시테이마스", exampleMeaning: "아버지는 작은 가게를 경영하고 있습니다.",
    breakdown: [
      { word: "小さな店", reading: "ちいさなみせ", meaning: "작은 가게" },
    ] },
  { level: "N2", kanji: "運営", reading: "うんえい", korean: "운에-", meaning: "운영",
    example: "このイベントはボランティアが運営しています。", exampleReading: "このイベントはボランティアがうんえいしています。", exampleKorean: "코노 이벤토와 보란티아가 운에- 시테이마스", exampleMeaning: "이 이벤트는 자원봉사자가 운영하고 있습니다.",
    breakdown: [
      { word: "ボランティア", reading: "ボランティア", meaning: "자원봉사자" },
    ] },
  { level: "N2", kanji: "管理", reading: "かんり", korean: "칸리", meaning: "관리",
    example: "在庫を管理しています。", exampleReading: "ざいこをかんりしています。", exampleKorean: "자이코오 칸리 시테이마스", exampleMeaning: "재고를 관리하고 있습니다.",
    breakdown: [
      { word: "在庫", reading: "ざいこ", meaning: "재고" },
    ] },
  { level: "N2", kanji: "監督", reading: "かんとく", korean: "칸토쿠", meaning: "감독",
    example: "工事現場を監督しています。", exampleReading: "こうじげんばをかんとくしています。", exampleKorean: "코-지 겐바오 칸토쿠 시테이마스", exampleMeaning: "공사 현장을 감독하고 있습니다.",
    breakdown: [
      { word: "工事現場", reading: "こうじげんば", meaning: "공사 현장" },
    ] },
  { level: "N2", kanji: "指導", reading: "しどう", korean: "시도-", meaning: "지도",
    example: "新人を指導しています。", exampleReading: "しんじんをしどうしています。", exampleKorean: "신징오 시도- 시테이마스", exampleMeaning: "신입을 지도하고 있습니다.",
    breakdown: [
      { word: "新人", reading: "しんじん", meaning: "신입" },
    ] },
  { level: "N2", kanji: "育成", reading: "いくせい", korean: "이쿠세-", meaning: "육성",
    example: "若手選手の育成に力を入れています。", exampleReading: "わかてせんしゅのいくせいにちからをいれています。", exampleKorean: "와카테 센슈노 이쿠세-니 치카라오 이레테이마스", exampleMeaning: "젊은 선수 육성에 힘을 쏟고 있습니다.",
    breakdown: [
      { word: "力を入れています", reading: "ちからをいれています", meaning: "힘을 쏟고 있습니다" },
    ] },
  { level: "N2", kanji: "養成", reading: "ようせい", korean: "요-세-", meaning: "양성",
    example: "教師を養成する学校です。", exampleReading: "きょうしをようせいするがっこうです。", exampleKorean: "쿄-시오 요-세-스루 각코-데스", exampleMeaning: "교사를 양성하는 학교입니다.",
    breakdown: [
      { word: "教師", reading: "きょうし", meaning: "교사" },
    ] },
  { level: "N2", kanji: "採用", reading: "さいよう", korean: "사이요-", meaning: "채용",
    example: "新しい社員を採用しました。", exampleReading: "あたらしいしゃいんをさいようしました。", exampleKorean: "아타라시- 샤인오 사이요- 시마시타", exampleMeaning: "새로운 사원을 채용했습니다.",
    breakdown: [
      { word: "社員", reading: "しゃいん", meaning: "사원" },
    ] },
  { level: "N2", kanji: "応募", reading: "おうぼ", korean: "오-보", meaning: "응모",
    example: "アルバイトに応募しました。", exampleReading: "アルバイトにおうぼしました。", exampleKorean: "아루바이토니 오-보 시마시타", exampleMeaning: "아르바이트에 응모했습니다.",
    breakdown: [
      { word: "アルバイト", reading: "アルバイト", meaning: "아르바이트" },
    ] },
  { level: "N2", kanji: "昇進", reading: "しょうしん", korean: "쇼-신", meaning: "승진",
    example: "課長に昇進しました。", exampleReading: "かちょうにしょうしんしました。", exampleKorean: "카쵸-니 쇼-신 시마시타", exampleMeaning: "과장으로 승진했습니다.",
    breakdown: [
      { word: "課長", reading: "かちょう", meaning: "과장" },
    ] },
  { level: "N2", kanji: "退職", reading: "たいしょく", korean: "타이쇼쿠", meaning: "퇴직",
    example: "来年、退職する予定です。", exampleReading: "らいねん、たいしょくするよていです。", exampleKorean: "라이넹 타이쇼쿠스루 요테-데스", exampleMeaning: "내년에 퇴직할 예정입니다.",
    breakdown: [
      { word: "来年", reading: "らいねん", meaning: "내년" },
    ] },
  { level: "N2", kanji: "引退", reading: "いんたい", korean: "인타이", meaning: "은퇴",
    example: "選手を引退しました。", exampleReading: "せんしゅをいんたいしました。", exampleKorean: "센슈오 인타이 시마시타", exampleMeaning: "선수를 은퇴했습니다.",
    breakdown: [
      { word: "選手", reading: "せんしゅ", meaning: "선수" },
    ] },
  { level: "N2", kanji: "就職", reading: "しゅうしょく", korean: "슈-쇼쿠", meaning: "취직",
    example: "来年、東京で就職します。", exampleReading: "らいねん、とうきょうでしゅうしょくします。", exampleKorean: "라이넹 토-쿄-데 슈-쇼쿠 시마스", exampleMeaning: "내년에 도쿄에서 취직합니다.",
    breakdown: [
      { word: "東京で", reading: "とうきょうで", meaning: "도쿄에서" },
    ] },
  { level: "N2", kanji: "転職", reading: "てんしょく", korean: "텐쇼쿠", meaning: "이직",
    example: "転職を考えています。", exampleReading: "てんしょくをかんがえています。", exampleKorean: "텐쇼쿠오 캉가에테이마스", exampleMeaning: "이직을 생각하고 있습니다.",
    breakdown: [
      { word: "考えています", reading: "かんがえています", meaning: "생각하고 있습니다" },
    ] },
  { level: "N2", kanji: "派遣", reading: "はけん", korean: "하켄", meaning: "파견",
    example: "海外に社員を派遣しました。", exampleReading: "かいがいにしゃいんをはけんしました。", exampleKorean: "카이가이니 샤인오 하켄 시마시타", exampleMeaning: "해외에 사원을 파견했습니다.",
    breakdown: [
      { word: "海外に", reading: "かいがいに", meaning: "해외에" },
    ] },
  { level: "N2", kanji: "委託", reading: "いたく", korean: "이타쿠", meaning: "위탁",
    example: "業務を外部に委託しています。", exampleReading: "ぎょうむをがいぶにいたくしています。", exampleKorean: "교-무오 가이부니 이타쿠 시테이마스", exampleMeaning: "업무를 외부에 위탁하고 있습니다.",
    breakdown: [
      { word: "業務", reading: "ぎょうむ", meaning: "업무" },
    ] },
  { level: "N2", kanji: "依頼", reading: "いらい", korean: "이라이", meaning: "의뢰",
    example: "通訳を依頼しました。", exampleReading: "つうやくをいらいしました。", exampleKorean: "츠-야쿠오 이라이 시마시타", exampleMeaning: "통역을 의뢰했습니다.",
    breakdown: [
      { word: "通訳", reading: "つうやく", meaning: "통역" },
    ] },
  { level: "N2", kanji: "手配", reading: "てはい", korean: "테하이", meaning: "준비, 수배",
    example: "ホテルの手配をしました。", exampleReading: "ホテルのてはいをしました。", exampleKorean: "호테루노 테하이오 시마시타", exampleMeaning: "호텔 준비를 했습니다.",
    breakdown: [
      { word: "ホテル", reading: "ホテル", meaning: "호텔" },
    ] },
  { level: "N2", kanji: "対処", reading: "たいしょ", korean: "타이쇼", meaning: "대처",
    example: "問題に冷静に対処しました。", exampleReading: "もんだいにれいせいにたいしょしました。", exampleKorean: "몬다이니 레-세-니 타이쇼 시마시타", exampleMeaning: "문제에 냉정하게 대처했습니다.",
    breakdown: [
      { word: "冷静に", reading: "れいせいに", meaning: "냉정하게" },
    ] },
  { level: "N2", kanji: "措置", reading: "そち", korean: "소치", meaning: "조치",
    example: "緊急の措置を取りました。", exampleReading: "きんきゅうのそちをとりました。", exampleKorean: "킨큐-노 소치오 토리마시타", exampleMeaning: "긴급 조치를 취했습니다.",
    breakdown: [
      { word: "緊急の", reading: "きんきゅうの", meaning: "긴급의" },
    ] },
  { level: "N2", kanji: "対象", reading: "たいしょう", korean: "타이쇼-", meaning: "대상",
    example: "このセールは学生が対象です。", exampleReading: "このセールはがくせいがたいしょうです。", exampleKorean: "코노 세-루와 각세-가 타이쇼-데스", exampleMeaning: "이 세일은 학생이 대상입니다.",
    breakdown: [
      { word: "セール", reading: "セール", meaning: "세일" },
    ] },
  { level: "N2", kanji: "該当", reading: "がいとう", korean: "가이토-", meaning: "해당",
    example: "該当する項目にチェックしてください。", exampleReading: "がいとうするこうもくにチェックしてください。", exampleKorean: "가이토-스루 코-모쿠니 첵쿠 시테쿠다사이", exampleMeaning: "해당하는 항목에 체크해 주세요.",
    breakdown: [
      { word: "項目", reading: "こうもく", meaning: "항목" },
    ] },
  { level: "N2", kanji: "適用", reading: "てきよう", korean: "테키요-", meaning: "적용",
    example: "新しい規則が適用されます。", exampleReading: "あたらしいきそくがてきようされます。", exampleKorean: "아타라시- 키소쿠가 테키요- 사레마스", exampleMeaning: "새로운 규칙이 적용됩니다.",
    breakdown: [
      { word: "規則", reading: "きそく", meaning: "규칙" },
    ] },
  { level: "N2", kanji: "適切", reading: "てきせつ", korean: "테키세츠", meaning: "적절",
    example: "適切な対応をしてください。", exampleReading: "てきせつなたいおうをしてください。", exampleKorean: "테키세츠나 타이오-오 시테쿠다사이", exampleMeaning: "적절한 대응을 해 주세요.",
    breakdown: [
      { word: "対応", reading: "たいおう", meaning: "대응" },
    ] },
  { level: "N2", kanji: "円満", reading: "えんまん", korean: "엔만", meaning: "원만",
    example: "話し合いは円満に終わりました。", exampleReading: "はなしあいはえんまんにおわりました。", exampleKorean: "하나시아이와 엔만니 오와리마시타", exampleMeaning: "논의는 원만하게 끝났습니다.",
    breakdown: [
      { word: "話し合い", reading: "はなしあい", meaning: "논의" },
    ] },
  { level: "N2", kanji: "順調", reading: "じゅんちょう", korean: "쥰쵸-", meaning: "순조로움",
    example: "計画は順調に進んでいます。", exampleReading: "けいかくはじゅんちょうにすすんでいます。", exampleKorean: "케-카쿠와 쥰쵸-니 스슨데이마스", exampleMeaning: "계획은 순조롭게 진행되고 있습니다.",
    breakdown: [
      { word: "進んでいます", reading: "すすんでいます", meaning: "진행되고 있습니다" },
    ] },
  { level: "N2", kanji: "好調", reading: "こうちょう", korean: "코-쵸-", meaning: "호조",
    example: "売り上げが好調です。", exampleReading: "うりあげがこうちょうです。", exampleKorean: "우리아게가 코-쵸-데스", exampleMeaning: "매출이 호조입니다.",
    breakdown: [
      { word: "売り上げ", reading: "うりあげ", meaning: "매출" },
    ] },
  { level: "N2", kanji: "不調", reading: "ふちょう", korean: "후쵸-", meaning: "부진",
    example: "最近、体の不調を感じます。", exampleReading: "さいきん、からだのふちょうをかんじます。", exampleKorean: "사이킹 카라다노 후쵸-오 칸지마스", exampleMeaning: "최근 몸의 컨디션 난조를 느낍니다.",
    breakdown: [
      { word: "体の", reading: "からだの", meaning: "몸의" },
    ] },
  { level: "N2", kanji: "悪化", reading: "あっか", korean: "악카", meaning: "악화",
    example: "病状が悪化しました。", exampleReading: "びょうじょうがあっかしました。", exampleKorean: "뵤-죠-가 악카 시마시타", exampleMeaning: "병세가 악화되었습니다.",
    breakdown: [
      { word: "病状", reading: "びょうじょう", meaning: "병세" },
    ] },
  { level: "N2", kanji: "好転", reading: "こうてん", korean: "코-텐", meaning: "호전",
    example: "状況が好転しました。", exampleReading: "じょうきょうがこうてんしました。", exampleKorean: "죠-쿄-가 코-텐 시마시타", exampleMeaning: "상황이 호전되었습니다.",
    breakdown: [
      { word: "状況", reading: "じょうきょう", meaning: "상황" },
    ] },
  { level: "N2", kanji: "回復", reading: "かいふく", korean: "카이후쿠", meaning: "회복",
    example: "体調が回復しました。", exampleReading: "たいちょうがかいふくしました。", exampleKorean: "타이쵸-가 카이후쿠 시마시타", exampleMeaning: "컨디션이 회복되었습니다.",
    breakdown: [
      { word: "体調", reading: "たいちょう", meaning: "컨디션" },
    ] },
  { level: "N2", kanji: "復活", reading: "ふっかつ", korean: "훅카츠", meaning: "부활",
    example: "昔の流行が復活しています。", exampleReading: "むかしのりゅうこうがふっかつしています。", exampleKorean: "무카시노 류-코-가 훅카츠 시테이마스", exampleMeaning: "옛날 유행이 부활하고 있습니다.",
    breakdown: [
      { word: "流行", reading: "りゅうこう", meaning: "유행" },
    ] },
  { level: "N2", kanji: "衰退", reading: "すいたい", korean: "스이타이", meaning: "쇠퇴",
    example: "その産業は衰退しています。", exampleReading: "そのさんぎょうはすいたいしています。", exampleKorean: "소노 상교-와 스이타이 시테이마스", exampleMeaning: "그 산업은 쇠퇴하고 있습니다.",
    breakdown: [
      { word: "産業", reading: "さんぎょう", meaning: "산업" },
    ] },
  { level: "N2", kanji: "停滞", reading: "ていたい", korean: "테-타이", meaning: "정체",
    example: "経済の成長が停滞しています。", exampleReading: "けいざいのせいちょうがていたいしています。", exampleKorean: "케-자이노 세-쵸-가 테-타이 시테이마스", exampleMeaning: "경제 성장이 정체되고 있습니다.",
    breakdown: [
      { word: "経済の成長", reading: "けいざいのせいちょう", meaning: "경제 성장" },
    ] },
  { level: "N2", kanji: "混乱", reading: "こんらん", korean: "콘란", meaning: "혼란",
    example: "会場は混乱していました。", exampleReading: "かいじょうはこんらんしていました。", exampleKorean: "카이죠-와 콘란 시테이마시타", exampleMeaning: "회장은 혼란스러웠습니다.",
    breakdown: [
      { word: "会場", reading: "かいじょう", meaning: "회장" },
    ] },
  { level: "N2", kanji: "秩序", reading: "ちつじょ", korean: "치츠죠", meaning: "질서",
    example: "社会の秩序を守ります。", exampleReading: "しゃかいのちつじょをまもります。", exampleKorean: "샤카이노 치츠죠오 마모리마스", exampleMeaning: "사회의 질서를 지킵니다.",
    breakdown: [
      { word: "社会", reading: "しゃかい", meaning: "사회" },
    ] },
  { level: "N2", kanji: "調和", reading: "ちょうわ", korean: "쵸-와", meaning: "조화",
    example: "自然との調和を大切にします。", exampleReading: "しぜんとのちょうわをたいせつにします。", exampleKorean: "시젠토노 쵸-와오 타이세츠니 시마스", exampleMeaning: "자연과의 조화를 중요하게 여깁니다.",
    breakdown: [
      { word: "自然との", reading: "しぜんとの", meaning: "자연과의" },
    ] },
  { level: "N2", kanji: "対立", reading: "たいりつ", korean: "타이리츠", meaning: "대립",
    example: "意見が対立しています。", exampleReading: "いけんがたいりつしています。", exampleKorean: "이켄가 타이리츠 시테이마스", exampleMeaning: "의견이 대립하고 있습니다.",
    breakdown: [
      { word: "意見", reading: "いけん", meaning: "의견" },
    ] },
  { level: "N2", kanji: "衝突", reading: "しょうとつ", korean: "쇼-토츠", meaning: "충돌",
    example: "二台の車が衝突しました。", exampleReading: "にだいのくるまがしょうとつしました。", exampleKorean: "니다이노 쿠루마가 쇼-토츠 시마시타", exampleMeaning: "두 대의 차가 충돌했습니다.",
    breakdown: [
      { word: "二台の車", reading: "にだいのくるま", meaning: "두 대의 차" },
    ] },
  { level: "N2", kanji: "摩擦", reading: "まさつ", korean: "마사츠", meaning: "마찰",
    example: "貿易摩擦が問題になっています。", exampleReading: "ぼうえきまさつがもんだいになっています。", exampleKorean: "보-에키 마사츠가 몬다이니 낫테이마스", exampleMeaning: "무역 마찰이 문제가 되고 있습니다.",
    breakdown: [
      { word: "貿易", reading: "ぼうえき", meaning: "무역" },
    ] },
  { level: "N2", kanji: "妨げる", reading: "さまたげる", korean: "사마타게루", meaning: "방해하다",
    example: "騒音が集中を妨げます。", exampleReading: "そうおんがしゅうちゅうをさまたげます。", exampleKorean: "소-옹가 슈-츄-오 사마타게마스", exampleMeaning: "소음이 집중을 방해합니다.",
    breakdown: [
      { word: "騒音", reading: "そうおん", meaning: "소음" },
    ] },
  { level: "N2", kanji: "阻む", reading: "はばむ", korean: "하바무", meaning: "막다, 저지하다",
    example: "悪天候が計画を阻みました。", exampleReading: "あくてんこうがけいかくをはばみました。", exampleKorean: "아쿠텡코-가 케-카쿠오 하바미마시타", exampleMeaning: "악천후가 계획을 막았습니다.",
    breakdown: [
      { word: "悪天候", reading: "あくてんこう", meaning: "악천후" },
    ] },
  { level: "N2", kanji: "潤う", reading: "うるおう", korean: "우루오우", meaning: "윤택해지다",
    example: "観光客のおかげで町が潤いました。", exampleReading: "かんこうきゃくのおかげでまちがうるおいました。", exampleKorean: "캉코-캬쿠노 오카게데 마치가 우루오이마시타", exampleMeaning: "관광객 덕분에 마을이 윤택해졌습니다.",
    breakdown: [
      { word: "観光客", reading: "かんこうきゃく", meaning: "관광객" },
    ] },
  { level: "N2", kanji: "高まる", reading: "たかまる", korean: "타카마루", meaning: "높아지다",
    example: "期待が高まっています。", exampleReading: "きたいがたかまっています。", exampleKorean: "키타이가 타카맛테이마스", exampleMeaning: "기대가 높아지고 있습니다.",
    breakdown: [
      { word: "期待", reading: "きたい", meaning: "기대" },
    ] },
  { level: "N2", kanji: "深まる", reading: "ふかまる", korean: "후카마루", meaning: "깊어지다",
    example: "二人の絆が深まりました。", exampleReading: "ふたりのきずながふかまりました。", exampleKorean: "후타리노 키즈나가 후카마리마시타", exampleMeaning: "두 사람의 유대가 깊어졌습니다.",
    breakdown: [
      { word: "絆", reading: "きずな", meaning: "유대" },
    ] },
  { level: "N2", kanji: "広まる", reading: "ひろまる", korean: "히로마루", meaning: "퍼지다",
    example: "噂が町中に広まりました。", exampleReading: "うわさがまちじゅうにひろまりました。", exampleKorean: "우와사가 마치쥬-니 히로마리마시타", exampleMeaning: "소문이 온 마을에 퍼졌습니다.",
    breakdown: [
      { word: "噂", reading: "うわさ", meaning: "소문" },
    ] },
  { level: "N2", kanji: "定着", reading: "ていちゃく", korean: "테-챠쿠", meaning: "정착",
    example: "新しい習慣が定着しました。", exampleReading: "あたらしいしゅうかんがていちゃくしました。", exampleKorean: "아타라시- 슈-칸가 테-챠쿠 시마시타", exampleMeaning: "새로운 습관이 정착했습니다.",
    breakdown: [
      { word: "習慣", reading: "しゅうかん", meaning: "습관" },
    ] },

  { level: "N2", kanji: "発足", reading: "ほっそく", korean: "홋소쿠", meaning: "발족",
    example: "新しい委員会が発足しました。", exampleReading: "あたらしいいいんかいがほっそくしました。", exampleKorean: "아타라시- 이인카이가 홋소쿠 시마시타", exampleMeaning: "새로운 위원회가 발족했습니다.",
    breakdown: [
      { word: "委員会", reading: "いいんかい", meaning: "위원회" },
    ] },
  { level: "N2", kanji: "樹立", reading: "じゅりつ", korean: "쥬리츠", meaning: "수립",
    example: "新記録を樹立しました。", exampleReading: "しんきろくをじゅりつしました。", exampleKorean: "신키로쿠오 쥬리츠 시마시타", exampleMeaning: "신기록을 수립했습니다.",
    breakdown: [
      { word: "新記録", reading: "しんきろく", meaning: "신기록" },
    ] },
  { level: "N2", kanji: "設立", reading: "せつりつ", korean: "세츠리츠", meaning: "설립",
    example: "会社を設立しました。", exampleReading: "かいしゃをせつりつしました。", exampleKorean: "카이샤오 세츠리츠 시마시타", exampleMeaning: "회사를 설립했습니다.",
    breakdown: [
      { word: "会社", reading: "かいしゃ", meaning: "회사" },
    ] },
  { level: "N2", kanji: "創立", reading: "そうりつ", korean: "소-리츠", meaning: "창립",
    example: "学校の創立百周年を祝いました。", exampleReading: "がっこうのそうりつひゃくしゅうねんをいわいました。", exampleKorean: "각코-노 소-리츠 햐쿠슈-넹오 이와이마시타", exampleMeaning: "학교의 창립 100주년을 축하했습니다.",
    breakdown: [
      { word: "百周年", reading: "ひゃくしゅうねん", meaning: "100주년" },
      { word: "祝いました", reading: "いわいました", meaning: "축하했습니다" },
    ] },
  { level: "N2", kanji: "廃止", reading: "はいし", korean: "하이시", meaning: "폐지",
    example: "古い制度を廃止しました。", exampleReading: "ふるいせいどをはいししました。", exampleKorean: "후루이 세-도오 하이시 시마시타", exampleMeaning: "오래된 제도를 폐지했습니다.",
    breakdown: [
      { word: "古い", reading: "ふるい", meaning: "오래된" },
    ] },
  { level: "N2", kanji: "撤廃", reading: "てっぱい", korean: "텟파이", meaning: "철폐",
    example: "規制が撤廃されました。", exampleReading: "きせいがてっぱいされました。", exampleKorean: "키세-가 텟파이 사레마시타", exampleMeaning: "규제가 철폐되었습니다.",
    breakdown: [
      { word: "規制", reading: "きせい", meaning: "규제" },
    ] },
  { level: "N2", kanji: "撤回", reading: "てっかい", korean: "텟카이", meaning: "철회",
    example: "発言を撤回しました。", exampleReading: "はつげんをてっかいしました。", exampleKorean: "하츠겡오 텟카이 시마시타", exampleMeaning: "발언을 철회했습니다.",
    breakdown: [
      { word: "発言", reading: "はつげん", meaning: "발언" },
    ] },
  { level: "N2", kanji: "中止", reading: "ちゅうし", korean: "츄-시", meaning: "중지",
    example: "雨で試合が中止になりました。", exampleReading: "あめでしあいがちゅうしになりました。", exampleKorean: "아메데 시아이가 츄-시니 나리마시타", exampleMeaning: "비로 시합이 중지되었습니다.",
    breakdown: [
      { word: "雨で", reading: "あめで", meaning: "비로" },
    ] },
  { level: "N2", kanji: "延期", reading: "えんき", korean: "엔키", meaning: "연기",
    example: "イベントが来週に延期されました。", exampleReading: "イベントがらいしゅうにえんきされました。", exampleKorean: "이벤토가 라이슈-니 엔키 사레마시타", exampleMeaning: "이벤트가 다음 주로 연기되었습니다.",
    breakdown: [
      { word: "イベント", reading: "イベント", meaning: "이벤트" },
    ] },
  { level: "N2", kanji: "打ち切る", reading: "うちきる", korean: "우치키루", meaning: "중단하다, 끊다",
    example: "交渉を打ち切りました。", exampleReading: "こうしょうをうちきりました。", exampleKorean: "코-쇼-오 우치키리마시타", exampleMeaning: "교섭을 중단했습니다.",
    breakdown: [
      { word: "交渉", reading: "こうしょう", meaning: "교섭" },
    ] },
  { level: "N2", kanji: "見送る", reading: "みおくる", korean: "미오쿠루", meaning: "보류하다, 배웅하다",
    example: "今回の計画は見送ることにしました。", exampleReading: "こんかいのけいかくはみおくることにしました。", exampleKorean: "콘카이노 케-카쿠와 미오쿠루 코토니 시마시타", exampleMeaning: "이번 계획은 보류하기로 했습니다.",
    breakdown: [
      { word: "ことにしました", reading: "ことにしました", meaning: "~하기로 했습니다" },
    ] },
  { level: "N2", kanji: "見直す", reading: "みなおす", korean: "미나오스", meaning: "재검토하다",
    example: "予算を見直しました。", exampleReading: "よさんをみなおしました。", exampleKorean: "요상오 미나오시마시타", exampleMeaning: "예산을 재검토했습니다.",
    breakdown: [
      { word: "予算", reading: "よさん", meaning: "예산" },
    ] },
  { level: "N2", kanji: "見落とす", reading: "みおとす", korean: "미오토스", meaning: "간과하다",
    example: "大事な点を見落としていました。", exampleReading: "だいじなてんをみおとしていました。", exampleKorean: "다이지나 텐오 미오토시테이마시타", exampleMeaning: "중요한 점을 간과하고 있었습니다.",
    breakdown: [
      { word: "大事な点", reading: "だいじなてん", meaning: "중요한 점" },
    ] },
  { level: "N2", kanji: "見逃す", reading: "みのがす", korean: "미노가스", meaning: "놓치다",
    example: "チャンスを見逃してしまいました。", exampleReading: "チャンスをみのがしてしまいました。", exampleKorean: "찬스오 미노가시테시마이마시타", exampleMeaning: "기회를 놓치고 말았습니다.",
    breakdown: [
      { word: "チャンス", reading: "チャンス", meaning: "기회(찬스)" },
    ] },
  { level: "N2", kanji: "見抜く", reading: "みぬく", korean: "미누쿠", meaning: "간파하다",
    example: "彼の嘘を見抜きました。", exampleReading: "かれのうそをみぬきました。", exampleKorean: "카레노 우소오 미누키마시타", exampleMeaning: "그의 거짓말을 간파했습니다.",
    breakdown: [
      { word: "嘘", reading: "うそ", meaning: "거짓말" },
    ] },
  { level: "N2", kanji: "把握", reading: "はあく", korean: "하아쿠", meaning: "파악",
    example: "状況を正確に把握します。", exampleReading: "じょうきょうをせいかくにはあくします。", exampleKorean: "죠-쿄-오 세-카쿠니 하아쿠 시마스", exampleMeaning: "상황을 정확하게 파악합니다.",
    breakdown: [
      { word: "正確に", reading: "せいかくに", meaning: "정확하게" },
    ] },
  { level: "N2", kanji: "認識", reading: "にんしき", korean: "닌시키", meaning: "인식",
    example: "問題の重要性を認識しています。", exampleReading: "もんだいのじゅうようせいをにんしきしています。", exampleKorean: "몬다이노 쥬-요-세-오 닌시키 시테이마스", exampleMeaning: "문제의 중요성을 인식하고 있습니다.",
    breakdown: [
      { word: "重要性", reading: "じゅうようせい", meaning: "중요성" },
    ] },
  { level: "N2", kanji: "理解", reading: "りかい", korean: "리카이", meaning: "이해",
    example: "お互いの理解を深めます。", exampleReading: "おたがいのりかいをふかめます。", exampleKorean: "오타가이노 리카이오 후카메마스", exampleMeaning: "서로의 이해를 깊게 합니다.",
    breakdown: [
      { word: "お互いの", reading: "おたがいの", meaning: "서로의" },
    ] },
  { level: "N2", kanji: "誤解", reading: "ごかい", korean: "고카이", meaning: "오해",
    example: "誤解を解きたいです。", exampleReading: "ごかいをときたいです。", exampleKorean: "고카이오 토키타이데스", exampleMeaning: "오해를 풀고 싶습니다.",
    breakdown: [
      { word: "解きたいです", reading: "ときたいです", meaning: "풀고 싶습니다" },
    ] },
  { level: "N2", kanji: "錯覚", reading: "さっかく", korean: "삭카쿠", meaning: "착각",
    example: "目の錯覚かもしれません。", exampleReading: "めのさっかくかもしれません。", exampleKorean: "메노 삭카쿠카모 시레마셍", exampleMeaning: "눈의 착각일지도 모릅니다.",
    breakdown: [
      { word: "かもしれません", reading: "かもしれません", meaning: "~일지도 모릅니다" },
    ] },
  { level: "N2", kanji: "誤り", reading: "あやまり", korean: "아야마리", meaning: "오류",
    example: "資料の誤りを訂正します。", exampleReading: "しりょうのあやまりをていせいします。", exampleKorean: "시료-노 아야마리오 테-세- 시마스", exampleMeaning: "자료의 오류를 정정합니다.",
    breakdown: [
      { word: "資料", reading: "しりょう", meaning: "자료" },
    ] },
  { level: "N2", kanji: "過ち", reading: "あやまち", korean: "아야마치", meaning: "실수, 과오",
    example: "同じ過ちを繰り返しません。", exampleReading: "おなじあやまちをくりかえしません。", exampleKorean: "오나지 아야마치오 쿠리카에시마셍", exampleMeaning: "같은 실수를 반복하지 않겠습니다.",
    breakdown: [
      { word: "繰り返しません", reading: "くりかえしません", meaning: "반복하지 않습니다" },
    ] },
  { level: "N2", kanji: "補正", reading: "ほせい", korean: "호세-", meaning: "보정",
    example: "データを補正します。", exampleReading: "データをほせいします。", exampleKorean: "데-타오 호세- 시마스", exampleMeaning: "데이터를 보정합니다.",
    breakdown: [
      { word: "データ", reading: "データ", meaning: "데이터" },
    ] },
  { level: "N2", kanji: "検証", reading: "けんしょう", korean: "켄쇼-", meaning: "검증",
    example: "実験の結果を検証します。", exampleReading: "じっけんのけっかをけんしょうします。", exampleKorean: "짓켄노 켁카오 켄쇼- 시마스", exampleMeaning: "실험 결과를 검증합니다.",
    breakdown: [
      { word: "実験の結果", reading: "じっけんのけっか", meaning: "실험 결과" },
    ] },
  { level: "N2", kanji: "証明", reading: "しょうめい", korean: "쇼-메-", meaning: "증명",
    example: "身分を証明する書類が必要です。", exampleReading: "みぶんをしょうめいするしょるいがひつようです。", exampleKorean: "미분오 쇼-메-스루 쇼루이가 히츠요-데스", exampleMeaning: "신분을 증명하는 서류가 필요합니다.",
    breakdown: [
      { word: "身分", reading: "みぶん", meaning: "신분" },
    ] },
  { level: "N2", kanji: "立証", reading: "りっしょう", korean: "릿쇼-", meaning: "입증",
    example: "事実を立証しました。", exampleReading: "じじつをりっしょうしました。", exampleKorean: "지지츠오 릿쇼- 시마시타", exampleMeaning: "사실을 입증했습니다.",
    breakdown: [
      { word: "事実", reading: "じじつ", meaning: "사실" },
    ] },
  { level: "N2", kanji: "推測", reading: "すいそく", korean: "스이소쿠", meaning: "추측",
    example: "原因を推測してみます。", exampleReading: "げんいんをすいそくしてみます。", exampleKorean: "겐잉오 스이소쿠 시테미마스", exampleMeaning: "원인을 추측해 봅니다.",
    breakdown: [
      { word: "原因", reading: "げんいん", meaning: "원인" },
    ] },
  { level: "N2", kanji: "推定", reading: "すいてい", korean: "스이테-", meaning: "추정",
    example: "被害額は一億円と推定されます。", exampleReading: "ひがいがくはいちおくえんとすいていされます。", exampleKorean: "히가이가쿠와 이치오쿠엔토 스이테- 사레마스", exampleMeaning: "피해액은 1억 엔으로 추정됩니다.",
    breakdown: [
      { word: "被害額", reading: "ひがいがく", meaning: "피해액" },
    ] },
  { level: "N2", kanji: "断定", reading: "だんてい", korean: "단테-", meaning: "단정",
    example: "まだ断定はできません。", exampleReading: "まだだんていはできません。", exampleKorean: "마다 단테-와 데키마셍", exampleMeaning: "아직 단정은 할 수 없습니다.",
    breakdown: [
      { word: "できません", reading: "できません", meaning: "할 수 없습니다" },
    ] },
  { level: "N2", kanji: "決断", reading: "けつだん", korean: "케츠단", meaning: "결단",
    example: "大きな決断をしました。", exampleReading: "おおきなけつだんをしました。", exampleKorean: "오-키나 케츠단오 시마시타", exampleMeaning: "큰 결단을 내렸습니다.",
    breakdown: [
      { word: "大きな", reading: "おおきな", meaning: "큰" },
    ] },

  { level: "N2", kanji: "見地", reading: "けんち", korean: "켄치", meaning: "견지, 관점",
    example: "教育的な見地から意見を述べます。", exampleReading: "きょういくてきなけんちからいけんをのべます。", exampleKorean: "쿄-이쿠테키나 켄치카라 이켄오 노베마스", exampleMeaning: "교육적인 견지에서 의견을 말합니다.",
    breakdown: [
      { word: "教育的な", reading: "きょういくてきな", meaning: "교육적인" }
    ] },
  { level: "N2", kanji: "立場", reading: "たちば", korean: "타치바", meaning: "입장",
    example: "相手の立場を考えます。", exampleReading: "あいてのたちばをかんがえます。", exampleKorean: "아이테노 타치바오 캉가에마스", exampleMeaning: "상대의 입장을 생각합니다.",
    breakdown: [
      { word: "相手", reading: "あいて", meaning: "상대" }
    ] },
  { level: "N2", kanji: "観点", reading: "かんてん", korean: "칸텐", meaning: "관점",
    example: "別の観点から考えてみます。", exampleReading: "べつのかんてんからかんがえてみます。", exampleKorean: "베츠노 칸텐카라 캉가에테미마스", exampleMeaning: "다른 관점에서 생각해 봅니다.",
    breakdown: [
      { word: "別の", reading: "べつの", meaning: "다른" }
    ] },
  { level: "N2", kanji: "視点", reading: "してん", korean: "시텐", meaning: "시점",
    example: "子供の視点で物事を見ます。", exampleReading: "こどものしてんでものごとをみます。", exampleKorean: "코도모노 시텐데 모노고토오 미마스", exampleMeaning: "아이의 시점으로 사물을 봅니다.",
    breakdown: [
      { word: "物事", reading: "ものごと", meaning: "사물, 일" }
    ] },
  { level: "N2", kanji: "焦点", reading: "しょうてん", korean: "쇼-텐", meaning: "초점",
    example: "議論の焦点がずれています。", exampleReading: "ぎろんのしょうてんがずれています。", exampleKorean: "기론노 쇼-텐가 즈레테이마스", exampleMeaning: "논의의 초점이 어긋나 있습니다.",
    breakdown: [
      { word: "ずれています", reading: "ずれています", meaning: "어긋나 있습니다" }
    ] },
  { level: "N2", kanji: "重点", reading: "じゅうてん", korean: "쥬-텐", meaning: "중점",
    example: "安全に重点を置いています。", exampleReading: "あんぜんにじゅうてんをおいています。", exampleKorean: "안젠니 쥬-텐오 오이테이마스", exampleMeaning: "안전에 중점을 두고 있습니다.",
    breakdown: [
      { word: "置いています", reading: "おいています", meaning: "두고 있습니다" }
    ] },
  { level: "N2", kanji: "核心", reading: "かくしん", korean: "카쿠신", meaning: "핵심",
    example: "問題の核心に触れます。", exampleReading: "もんだいのかくしんにふれます。", exampleKorean: "몬다이노 카쿠신니 후레마스", exampleMeaning: "문제의 핵심을 다룹니다.",
    breakdown: [
      { word: "触れます", reading: "ふれます", meaning: "다룹니다, 언급합니다" }
    ] },
  { level: "N2", kanji: "本質", reading: "ほんしつ", korean: "혼시츠", meaning: "본질",
    example: "事故の本質を理解する必要があります。", exampleReading: "じこのほんしつをりかいするひつようがあります。", exampleKorean: "지코노 혼시츠오 리카이스루 히츠요-가 아리마스", exampleMeaning: "사고의 본질을 이해할 필요가 있습니다.",
    breakdown: [
      { word: "理解する", reading: "りかいする", meaning: "이해하다" }
    ] },
  { level: "N2", kanji: "実質", reading: "じっしつ", korean: "짓시츠", meaning: "실질",
    example: "実質的な効果はありませんでした。", exampleReading: "じっしつてきなこうかはありませんでした。", exampleKorean: "짓시츠테키나 코-카와 아리마센데시타", exampleMeaning: "실질적인 효과는 없었습니다.",
    breakdown: [
      { word: "効果", reading: "こうか", meaning: "효과" }
    ] },
  { level: "N2", kanji: "実態", reading: "じったい", korean: "짓타이", meaning: "실태",
    example: "現場の実態を調査します。", exampleReading: "げんばのじったいをちょうさします。", exampleKorean: "겐바노 짓타이오 쵸-사 시마스", exampleMeaning: "현장의 실태를 조사합니다.",
    breakdown: [
      { word: "現場", reading: "げんば", meaning: "현장" }
    ] },
  { level: "N2", kanji: "実情", reading: "じつじょう", korean: "지츠죠-", meaning: "실정",
    example: "会社の実情を報告しました。", exampleReading: "かいしゃのじつじょうをほうこくしました。", exampleKorean: "카이샤노 지츠죠-오 호-코쿠 시마시타", exampleMeaning: "회사의 실정을 보고했습니다.",
    breakdown: [
      { word: "報告しました", reading: "ほうこくしました", meaning: "보고했습니다" }
    ] },
  { level: "N2", kanji: "情勢", reading: "じょうせい", korean: "죠-세-", meaning: "정세",
    example: "国際情勢が不安定です。", exampleReading: "こくさいじょうせいがふあんていです。", exampleKorean: "코쿠사이 죠-세-가 후안테-데스", exampleMeaning: "국제 정세가 불안정합니다.",
    breakdown: [
      { word: "不安定です", reading: "ふあんていです", meaning: "불안정합니다" }
    ] },
  { level: "N2", kanji: "局面", reading: "きょくめん", korean: "쿄쿠멘", meaning: "국면",
    example: "難しい局面を迎えています。", exampleReading: "むずかしいきょくめんをむかえています。", exampleKorean: "무즈카시- 쿄쿠멘오 무카에테이마스", exampleMeaning: "어려운 국면을 맞이하고 있습니다.",
    breakdown: [
      { word: "迎えています", reading: "むかえています", meaning: "맞이하고 있습니다" }
    ] },
  { level: "N2", kanji: "事態", reading: "じたい", korean: "지타이", meaning: "사태",
    example: "深刻な事態になりました。", exampleReading: "しんこくなじたいになりました。", exampleKorean: "신코쿠나 지타이니 나리마시타", exampleMeaning: "심각한 사태가 되었습니다.",
    breakdown: [
      { word: "深刻な", reading: "しんこくな", meaning: "심각한" }
    ] },
  { level: "N2", kanji: "現象", reading: "げんしょう", korean: "겐쇼-", meaning: "현상",
    example: "珍しい自然現象が見られました。", exampleReading: "めずらしいしぜんげんしょうがみられました。", exampleKorean: "메즈라시- 시젠 겐쇼-가 미라레마시타", exampleMeaning: "희귀한 자연 현상이 관찰되었습니다.",
    breakdown: [
      { word: "珍しい", reading: "めずらしい", meaning: "희귀하다" }
    ] },
  { level: "N2", kanji: "要因", reading: "よういん", korean: "요-인", meaning: "요인",
    example: "失敗の要因を分析します。", exampleReading: "しっぱいのよういんをぶんせきします。", exampleKorean: "십파이노 요-인오 분세키 시마스", exampleMeaning: "실패의 요인을 분석합니다.",
    breakdown: [
      { word: "分析します", reading: "ぶんせきします", meaning: "분석합니다" }
    ] },
  { level: "N2", kanji: "契機", reading: "けいき", korean: "케-키", meaning: "계기",
    example: "この出来事が契機となりました。", exampleReading: "このできごとがけいきとなりました。", exampleKorean: "코노 데키고토가 케-키토 나리마시타", exampleMeaning: "이 사건이 계기가 되었습니다.",
    breakdown: [
      { word: "出来事", reading: "できごと", meaning: "사건, 일" }
    ] },
  { level: "N2", kanji: "背景", reading: "はいけい", korean: "하이케-", meaning: "배경",
    example: "事件の背景を調べます。", exampleReading: "じけんのはいけいをしらべます。", exampleKorean: "지켄노 하이케-오 시라베마스", exampleMeaning: "사건의 배경을 조사합니다.",
    breakdown: [
      { word: "事件", reading: "じけん", meaning: "사건" }
    ] },
  { level: "N2", kanji: "基盤", reading: "きばん", korean: "키반", meaning: "기반",
    example: "経済の基盤を強化します。", exampleReading: "けいざいのきばんをきょうかします。", exampleKorean: "케-자이노 키반오 쿄-카 시마스", exampleMeaning: "경제의 기반을 강화합니다.",
    breakdown: [
      { word: "強化します", reading: "きょうかします", meaning: "강화합니다" }
    ] },
  { level: "N2", kanji: "根本", reading: "こんぽん", korean: "콘폰", meaning: "근본",
    example: "根本から見直す必要があります。", exampleReading: "こんぽんからみなおすひつようがあります。", exampleKorean: "콘폰카라 미나오스 히츠요-가 아리마스", exampleMeaning: "근본부터 재검토할 필요가 있습니다.",
    breakdown: [
      { word: "見直す", reading: "みなおす", meaning: "재검토하다" }
    ] },
  { level: "N2", kanji: "本来", reading: "ほんらい", korean: "혼라이", meaning: "본래",
    example: "本来の目的を忘れないでください。", exampleReading: "ほんらいのもくてきをわすれないでください。", exampleKorean: "혼라이노 모쿠테키오 와스레나이데쿠다사이", exampleMeaning: "본래의 목적을 잊지 마세요.",
    breakdown: [
      { word: "目的", reading: "もくてき", meaning: "목적" }
    ] },
  { level: "N2", kanji: "元来", reading: "がんらい", korean: "간라이", meaning: "원래",
    example: "元来、彼は真面目な人です。", exampleReading: "がんらい、かれはまじめなひとです。", exampleKorean: "간라이 카레와 마지메나 히토데스", exampleMeaning: "원래 그는 성실한 사람입니다.",
    breakdown: [
      { word: "真面目な", reading: "まじめな", meaning: "성실한" }
    ] },
  { level: "N2", kanji: "潜む", reading: "ひそむ", korean: "히소무", meaning: "잠재하다, 숨다",
    example: "危険が潜んでいます。", exampleReading: "きけんがひそんでいます。", exampleKorean: "키켄가 히손데이마스", exampleMeaning: "위험이 숨어 있습니다.",
    breakdown: [
      { word: "危険", reading: "きけん", meaning: "위험" }
    ] },
  { level: "N2", kanji: "秘める", reading: "ひめる", korean: "히메루", meaning: "감추다, 품다",
    example: "彼は大きな才能を秘めています。", exampleReading: "かれはおおきなさいのうをひめています。", exampleKorean: "카레와 오-키나 사이노-오 히메테이마스", exampleMeaning: "그는 큰 재능을 감추고 있습니다.",
    breakdown: [
      { word: "才能", reading: "さいのう", meaning: "재능" }
    ] },
  { level: "N2", kanji: "巡る", reading: "めぐる", korean: "메구루", meaning: "둘러싸다, 순회하다",
    example: "この問題を巡って議論が続いています。", exampleReading: "このもんだいをめぐってぎろんがつづいています。", exampleKorean: "코노 몬다이오 메굿테 기론가 츠즈이테이마스", exampleMeaning: "이 문제를 둘러싸고 논의가 계속되고 있습니다.",
    breakdown: [
      { word: "議論", reading: "ぎろん", meaning: "논의" }
    ] },
  { level: "N2", kanji: "絡む", reading: "からむ", korean: "카라무", meaning: "얽히다",
    example: "複雑な事情が絡んでいます。", exampleReading: "ふくざつなじじょうがからんでいます。", exampleKorean: "후쿠자츠나 지죠-가 카란데이마스", exampleMeaning: "복잡한 사정이 얽혀 있습니다.",
    breakdown: [
      { word: "複雑な事情", reading: "ふくざつなじじょう", meaning: "복잡한 사정" }
    ] },
  { level: "N2", kanji: "伴う", reading: "ともなう", korean: "토모나우", meaning: "수반하다",
    example: "変化には痛みが伴います。", exampleReading: "へんかにはいたみがともないます。", exampleKorean: "헨카니와 이타미가 토모나이마스", exampleMeaning: "변화에는 고통이 수반됩니다.",
    breakdown: [
      { word: "痛み", reading: "いたみ", meaning: "고통" }
    ] },
  { level: "N2", kanji: "及ぶ", reading: "およぶ", korean: "오요부", meaning: "미치다",
    example: "被害は広範囲に及びました。", exampleReading: "ひがいはこうはんいにおよびました。", exampleKorean: "히가이와 코-한이니 오요비마시타", exampleMeaning: "피해는 넓은 범위에 미쳤습니다.",
    breakdown: [
      { word: "広範囲に", reading: "こうはんいに", meaning: "넓은 범위에" }
    ] },
  { level: "N2", kanji: "客観的", reading: "きゃっかんてき", korean: "캭칸테키", meaning: "객관적",
    example: "客観的な事実に基づいて判断します。", exampleReading: "きゃっかんてきなじじつにもとづいてはんだんします。", exampleKorean: "캭칸테키나 지지츠니 모토즈이테 한단 시마스", exampleMeaning: "객관적인 사실에 근거해 판단합니다.",
    breakdown: [
      { word: "事実に基づいて", reading: "じじつにもとづいて", meaning: "사실에 근거해서" }
    ] },
  { level: "N2", kanji: "主観的", reading: "しゅかんてき", korean: "슈칸테키", meaning: "주관적",
    example: "それは主観的な意見にすぎません。", exampleReading: "それはしゅかんてきないけんにすぎません。", exampleKorean: "소레와 슈칸테키나 이켄니 스기마셍", exampleMeaning: "그것은 주관적인 의견에 불과합니다.",
    breakdown: [
      { word: "にすぎません", reading: "にすぎません", meaning: "~에 불과합니다" }
    ] },

  { level: "N2", kanji: "控える", reading: "ひかえる", korean: "히카에루", meaning: "삼가다, 대기하다",
    example: "塩分を控えるようにしています。", exampleReading: "えんぶんをひかえるようにしています。", exampleKorean: "엔붕오 히카에루 요-니 시테이마스", exampleMeaning: "염분을 삼가도록 하고 있습니다.",
    breakdown: [
      { word: "塩分", reading: "えんぶん", meaning: "염분" }
    ] },
  { level: "N2", kanji: "配慮", reading: "はいりょ", korean: "하이료", meaning: "배려",
    example: "相手への配慮が大切です。", exampleReading: "あいてへのはいりょがたいせつです。", exampleKorean: "아이테에노 하이료가 타이세츠데스", exampleMeaning: "상대에 대한 배려가 중요합니다.",
    breakdown: [
      { word: "相手への", reading: "あいてへの", meaning: "상대에 대한" }
    ] },
  { level: "N2", kanji: "気遣い", reading: "きづかい", korean: "키즈카이", meaning: "배려, 신경씀",
    example: "彼女の気遣いに感謝しています。", exampleReading: "かのじょのきづかいにかんしゃしています。", exampleKorean: "카노죠노 키즈카이니 칸샤 시테이마스", exampleMeaning: "그녀의 배려에 감사하고 있습니다.",
    breakdown: [
      { word: "感謝しています", reading: "かんしゃしています", meaning: "감사하고 있습니다" }
    ] },
  { level: "N2", kanji: "心遣い", reading: "こころづかい", korean: "코코로즈카이", meaning: "배려",
    example: "温かい心遣いをありがとう。", exampleReading: "あたたかいこころづかいをありがとう。", exampleKorean: "아타타카이 코코로즈카이오 아리가토-", exampleMeaning: "따뜻한 배려 감사합니다.",
    breakdown: [
      { word: "温かい", reading: "あたたかい", meaning: "따뜻하다" }
    ] },
  { level: "N2", kanji: "手軽", reading: "てがる", korean: "테가루", meaning: "간편함",
    example: "手軽に作れる料理を紹介します。", exampleReading: "てがるにつくれるりょうりをしょうかいします。", exampleKorean: "테가루니 츠쿠레루 료-리오 쇼-카이 시마스", exampleMeaning: "간편하게 만들 수 있는 요리를 소개합니다.",
    breakdown: [
      { word: "紹介します", reading: "しょうかいします", meaning: "소개합니다" }
    ] },
  { level: "N2", kanji: "気軽", reading: "きがる", korean: "키가루", meaning: "부담없음",
    example: "気軽に相談してください。", exampleReading: "きがるにそうだんしてください。", exampleKorean: "키가루니 소-단 시테쿠다사이", exampleMeaning: "부담없이 상담해 주세요.",
    breakdown: [
      { word: "相談してください", reading: "そうだんしてください", meaning: "상담해 주세요" }
    ] },
  { level: "N2", kanji: "率直", reading: "そっちょく", korean: "솟쵸쿠", meaning: "솔직",
    example: "率直な意見を聞かせてください。", exampleReading: "そっちょくないけんをきかせてください。", exampleKorean: "솟쵸쿠나 이켄오 키카세테쿠다사이", exampleMeaning: "솔직한 의견을 들려주세요.",
    breakdown: [
      { word: "意見", reading: "いけん", meaning: "의견" }
    ] },
  { level: "N2", kanji: "素朴", reading: "そぼく", korean: "소보쿠", meaning: "소박",
    example: "素朴な疑問があります。", exampleReading: "そぼくなぎもんがあります。", exampleKorean: "소보쿠나 기몬가 아리마스", exampleMeaning: "소박한 의문이 있습니다.",
    breakdown: [
      { word: "疑問", reading: "ぎもん", meaning: "의문" }
    ] },
  { level: "N2", kanji: "淡々と", reading: "たんたんと", korean: "탄탄토", meaning: "담담하게",
    example: "彼は淡々と話しました。", exampleReading: "かれはたんたんとはなしました。", exampleKorean: "카레와 탄탄토 하나시마시타", exampleMeaning: "그는 담담하게 말했습니다.",
    breakdown: [
      { word: "話しました", reading: "はなしました", meaning: "말했습니다" }
    ] },
  { level: "N2", kanji: "着実", reading: "ちゃくじつ", korean: "챠쿠지츠", meaning: "착실",
    example: "着実に成果を上げています。", exampleReading: "ちゃくじつにせいかをあげています。", exampleKorean: "챠쿠지츠니 세-카오 아게테이마스", exampleMeaning: "착실하게 성과를 올리고 있습니다.",
    breakdown: [
      { word: "成果", reading: "せいか", meaning: "성과" }
    ] },
  { level: "N2", kanji: "地道", reading: "じみち", korean: "지미치", meaning: "꾸준함, 착실함",
    example: "地道な努力が実を結びました。", exampleReading: "じみちなどりょくがみをむすびました。", exampleKorean: "지미치나 도료쿠가 미오 무스비마시타", exampleMeaning: "꾸준한 노력이 결실을 맺었습니다.",
    breakdown: [
      { word: "実を結びました", reading: "みをむすびました", meaning: "결실을 맺었습니다" }
    ] },
  { level: "N2", kanji: "大まか", reading: "おおまか", korean: "오-마카", meaning: "대략적임",
    example: "大まかな計画を立てました。", exampleReading: "おおまかなけいかくをたてました。", exampleKorean: "오-마카나 케-카쿠오 타테마시타", exampleMeaning: "대략적인 계획을 세웠습니다.",
    breakdown: [
      { word: "計画", reading: "けいかく", meaning: "계획" }
    ] },
  { level: "N2", kanji: "大幅", reading: "おおはば", korean: "오-하바", meaning: "대폭",
    example: "価格が大幅に下がりました。", exampleReading: "かかくがおおはばにさがりました。", exampleKorean: "카카쿠가 오-하바니 사가리마시타", exampleMeaning: "가격이 대폭 내려갔습니다.",
    breakdown: [
      { word: "下がりました", reading: "さがりました", meaning: "내려갔습니다" }
    ] },
  { level: "N2", kanji: "微妙", reading: "びみょう", korean: "비묘-", meaning: "미묘",
    example: "微妙な違いがあります。", exampleReading: "びみょうなちがいがあります。", exampleKorean: "비묘-나 치가이가 아리마스", exampleMeaning: "미묘한 차이가 있습니다.",
    breakdown: [
      { word: "違い", reading: "ちがい", meaning: "차이" }
    ] },
  { level: "N2", kanji: "微か", reading: "かすか", korean: "카스카", meaning: "희미함",
    example: "微かな音が聞こえました。", exampleReading: "かすかなおとがきこえました。", exampleKorean: "카스카나 오토가 키코에마시타", exampleMeaning: "희미한 소리가 들렸습니다.",
    breakdown: [
      { word: "音", reading: "おと", meaning: "소리" }
    ] },
  { level: "N2", kanji: "わずか", reading: "わずか", korean: "와즈카", meaning: "약간, 근소함",
    example: "わずかな差で負けました。", exampleReading: "わずかなさでまけました。", exampleKorean: "와즈카나 사데 마케마시타", exampleMeaning: "근소한 차이로 졌습니다.",
    breakdown: [
      { word: "負けました", reading: "まけました", meaning: "졌습니다" }
    ] },
  { level: "N2", kanji: "若干", reading: "じゃっかん", korean: "작칸", meaning: "약간",
    example: "予定より若干遅れています。", exampleReading: "よていよりじゃっかんおくれています。", exampleKorean: "요테-요리 작칸 오쿠레테이마스", exampleMeaning: "예정보다 약간 늦어지고 있습니다.",
    breakdown: [
      { word: "予定より", reading: "よていより", meaning: "예정보다" }
    ] },
  { level: "N2", kanji: "概ね", reading: "おおむね", korean: "오-무네", meaning: "대체로",
    example: "計画は概ね順調です。", exampleReading: "けいかくはおおむねじゅんちょうです。", exampleKorean: "케-카쿠와 오-무네 쥰쵸-데스", exampleMeaning: "계획은 대체로 순조롭습니다.",
    breakdown: [
      { word: "順調です", reading: "じゅんちょうです", meaning: "순조롭습니다" }
    ] },
  { level: "N2", kanji: "おおよそ", reading: "おおよそ", korean: "오-요소", meaning: "대략",
    example: "おおよその予算を計算しました。", exampleReading: "おおよそのよさんをけいさんしました。", exampleKorean: "오-요소노 요상오 케-산 시마시타", exampleMeaning: "대략적인 예산을 계산했습니다.",
    breakdown: [
      { word: "予算", reading: "よさん", meaning: "예산" }
    ] },
  { level: "N2", kanji: "依然", reading: "いぜん", korean: "이젠", meaning: "여전",
    example: "状況は依然として厳しいです。", exampleReading: "じょうきょうはいぜんとしてきびしいです。", exampleKorean: "죠-쿄-와 이젠토시테 키비시-데스", exampleMeaning: "상황은 여전히 어렵습니다.",
    breakdown: [
      { word: "状況", reading: "じょうきょう", meaning: "상황" }
    ] },
  { level: "N2", kanji: "相変わらず", reading: "あいかわらず", korean: "아이카와라즈", meaning: "여전히",
    example: "彼は相変わらず元気です。", exampleReading: "かれはあいかわらずげんきです。", exampleKorean: "카레와 아이카와라즈 겐키데스", exampleMeaning: "그는 여전히 건강합니다.",
    breakdown: [
      { word: "元気です", reading: "げんきです", meaning: "건강합니다" }
    ] },
  { level: "N2", kanji: "引き続き", reading: "ひきつづき", korean: "히키츠즈키", meaning: "계속해서",
    example: "引き続きご協力をお願いします。", exampleReading: "ひきつづきごきょうりょくをおねがいします。", exampleKorean: "히키츠즈키 고쿄-료쿠오 오네가이시마스", exampleMeaning: "계속해서 협력 부탁드립니다.",
    breakdown: [
      { word: "ご協力", reading: "ごきょうりょく", meaning: "협력" }
    ] },
  { level: "N2", kanji: "一連", reading: "いちれん", korean: "이치렌", meaning: "일련",
    example: "一連の事件が起きました。", exampleReading: "いちれんのじけんがおきました。", exampleKorean: "이치렌노 지켄가 오키마시타", exampleMeaning: "일련의 사건이 일어났습니다.",
    breakdown: [
      { word: "事件", reading: "じけん", meaning: "사건" }
    ] },
  { level: "N2", kanji: "一律", reading: "いちりつ", korean: "이치리츠", meaning: "일률적",
    example: "一律に料金を値上げしました。", exampleReading: "いちりつにりょうきんをねあげしました。", exampleKorean: "이치리츠니 료-킹오 네아게 시마시타", exampleMeaning: "일률적으로 요금을 인상했습니다.",
    breakdown: [
      { word: "料金", reading: "りょうきん", meaning: "요금" }
    ] },
  { level: "N2", kanji: "画一的", reading: "かくいつてき", korean: "카쿠이츠테키", meaning: "획일적",
    example: "画一的な教育を見直すべきです。", exampleReading: "かくいつてきなきょういくをみなおすべきです。", exampleKorean: "카쿠이츠테키나 쿄-이쿠오 미나오스베키데스", exampleMeaning: "획일적인 교육을 재검토해야 합니다.",
    breakdown: [
      { word: "教育", reading: "きょういく", meaning: "교육" }
    ] },
  { level: "N2", kanji: "統一", reading: "とういつ", korean: "토-이츠", meaning: "통일",
    example: "表記を統一してください。", exampleReading: "ひょうきをとういつしてください。", exampleKorean: "효-키오 토-이츠 시테쿠다사이", exampleMeaning: "표기를 통일해 주세요.",
    breakdown: [
      { word: "表記", reading: "ひょうき", meaning: "표기" }
    ] },
  { level: "N2", kanji: "統制", reading: "とうせい", korean: "토-세-", meaning: "통제",
    example: "情報を統制することは難しいです。", exampleReading: "じょうほうをとうせいすることはむずかしいです。", exampleKorean: "죠-호-오 토-세- 스루 코토와 무즈카시-데스", exampleMeaning: "정보를 통제하는 것은 어렵습니다.",
    breakdown: [
      { word: "情報", reading: "じょうほう", meaning: "정보" }
    ] },
  { level: "N2", kanji: "規制", reading: "きせい", korean: "키세-", meaning: "규제",
    example: "新しい規制が導入されました。", exampleReading: "あたらしいきせいがどうにゅうされました。", exampleKorean: "아타라시- 키세-가 도-뉴- 사레마시타", exampleMeaning: "새로운 규제가 도입되었습니다.",
    breakdown: [
      { word: "導入されました", reading: "どうにゅうされました", meaning: "도입되었습니다" }
    ] },
  { level: "N2", kanji: "制約", reading: "せいやく", korean: "세-야쿠", meaning: "제약",
    example: "時間の制約があります。", exampleReading: "じかんのせいやくがあります。", exampleKorean: "지칸노 세-야쿠가 아리마스", exampleMeaning: "시간의 제약이 있습니다.",
    breakdown: [
      { word: "時間", reading: "じかん", meaning: "시간" }
    ] },
  { level: "N2", kanji: "調整", reading: "ちょうせい", korean: "쵸-세-", meaning: "조정",
    example: "スケジュールを調整します。", exampleReading: "スケジュールをちょうせいします。", exampleKorean: "스케쥬-루오 쵸-세- 시마스", exampleMeaning: "스케줄을 조정합니다.",
    breakdown: [
      { word: "スケジュール", reading: "スケジュール", meaning: "스케줄" }
    ] },
  { level: "N2", kanji: "経緯", reading: "けいい", korean: "케-이", meaning: "경위",
    example: "事件の経緯を説明しました。", exampleReading: "じけんのけいいをせつめいしました。", exampleKorean: "지켄노 케-이오 세츠메-시마시타", exampleMeaning: "사건의 경위를 설명했습니다.",
    breakdown: [
      { word: "事件", reading: "じけん", meaning: "사건" }
    ] },
  { level: "N2", kanji: "端的", reading: "たんてき", korean: "탄테키", meaning: "단적",
    example: "端的に言うと失敗です。", exampleReading: "たんてきにいうとしっぱいです。", exampleKorean: "탄테키니 이우토 싯파이데스", exampleMeaning: "단적으로 말하면 실패입니다.",
    breakdown: [
      { word: "言うと", reading: "いうと", meaning: "말하면" }
    ] },
  { level: "N2", kanji: "如実", reading: "にょじつ", korean: "뇨지츠", meaning: "여실(사실 그대로)",
    example: "結果が如実に表れました。", exampleReading: "けっかがにょじつにあらわれました。", exampleKorean: "켁카가 뇨지츠니 아라와레마시타", exampleMeaning: "결과가 여실히 드러났습니다.",
    breakdown: [
      { word: "結果", reading: "けっか", meaning: "결과" }
    ] },
  { level: "N2", kanji: "一環", reading: "いっかん", korean: "잇칸", meaning: "일환",
    example: "訓練の一環として実施されました。", exampleReading: "くんれんのいっかんとしてじっしされました。", exampleKorean: "쿤렌노 잇칸토시테 짓시사레마시타", exampleMeaning: "훈련의 일환으로 실시되었습니다.",
    breakdown: [
      { word: "訓練", reading: "くんれん", meaning: "훈련" }
    ] },
  { level: "N2", kanji: "波及", reading: "はきゅう", korean: "하큐-", meaning: "파급",
    example: "影響が全国に波及しました。", exampleReading: "えいきょうがぜんこくにはきゅうしました。", exampleKorean: "에-쿄-가 젠코쿠니 하큐- 시마시타", exampleMeaning: "영향이 전국으로 파급되었습니다.",
    breakdown: [
      { word: "全国", reading: "ぜんこく", meaning: "전국" }
    ] },
  { level: "N2", kanji: "波紋", reading: "はもん", korean: "하몬", meaning: "파문",
    example: "その発言は波紋を呼びました。", exampleReading: "そのはつげんははもんをよびました。", exampleKorean: "소노 하츠겡와 하몽오 요비마시타", exampleMeaning: "그 발언은 파문을 일으켰습니다.",
    breakdown: [
      { word: "発言", reading: "はつげん", meaning: "발언" }
    ] },
  { level: "N2", kanji: "節目", reading: "ふしめ", korean: "후시메", meaning: "전환점, 마디",
    example: "三十歳は人生の節目です。", exampleReading: "さんじゅっさいはじんせいのふしめです。", exampleKorean: "산쥿사이와 진세-노 후시메데스", exampleMeaning: "서른 살은 인생의 전환점입니다.",
    breakdown: [
      { word: "人生", reading: "じんせい", meaning: "인생" }
    ] },
  { level: "N2", kanji: "岐路", reading: "きろ", korean: "키로", meaning: "기로",
    example: "人生の岐路に立っています。", exampleReading: "じんせいのきろにたっています。", exampleKorean: "진세-노 키로니 탓테 이마스", exampleMeaning: "인생의 기로에 서 있습니다.",
    breakdown: [
      { word: "立っています", reading: "たっています", meaning: "서 있습니다" }
    ] },
  { level: "N2", kanji: "分岐点", reading: "ぶんきてん", korean: "분키텐", meaning: "분기점",
    example: "ここが道路の分岐点です。", exampleReading: "ここがどうろのぶんきてんです。", exampleKorean: "코코가 도-로노 분키텐데스", exampleMeaning: "여기가 도로의 분기점입니다.",
    breakdown: [
      { word: "道路", reading: "どうろ", meaning: "도로" }
    ] },
  { level: "N2", kanji: "転機", reading: "てんき", korean: "텐키", meaning: "전환점, 계기",
    example: "留学が人生の転機になりました。", exampleReading: "りゅうがくがじんせいのてんきになりました。", exampleKorean: "류-가쿠가 진세-노 텐키니 나리마시타", exampleMeaning: "유학이 인생의 전환점이 되었습니다.",
    breakdown: [
      { word: "留学", reading: "りゅうがく", meaning: "유학" }
    ] },
  { level: "N2", kanji: "動機", reading: "どうき", korean: "도-키", meaning: "동기",
    example: "応募の動機を聞かれました。", exampleReading: "おうぼのどうきをきかれました。", exampleKorean: "오-보노 도-키오 키카레마시타", exampleMeaning: "지원 동기를 질문받았습니다.",
    breakdown: [
      { word: "応募", reading: "おうぼ", meaning: "지원, 응모" }
    ] },
  { level: "N2", kanji: "意気込み", reading: "いきごみ", korean: "이키고미", meaning: "의욕",
    example: "彼の意気込みが伝わってきました。", exampleReading: "かれのいきごみがつたわってきました。", exampleKorean: "카레노 이키고미가 츠타왓테 키마시타", exampleMeaning: "그의 의욕이 전해졌습니다.",
    breakdown: [
      { word: "伝わって", reading: "つたわって", meaning: "전해져서" }
    ] },
  { level: "N2", kanji: "熱意", reading: "ねつい", korean: "네츠이", meaning: "열의",
    example: "仕事への熱意を感じます。", exampleReading: "しごとへのねついをかんじます。", exampleKorean: "시고토에노 네츠이오 칸지마스", exampleMeaning: "일에 대한 열의를 느낍니다.",
    breakdown: [
      { word: "仕事へ", reading: "しごとへ", meaning: "일에 대해" }
    ] },
  { level: "N2", kanji: "意義", reading: "いぎ", korean: "이기", meaning: "의의",
    example: "この研究には大きな意義があります。", exampleReading: "このけんきゅうにはおおきないぎがあります。", exampleKorean: "코노 켕큐-니와 오-키나 이기가 아리마스", exampleMeaning: "이 연구에는 큰 의의가 있습니다.",
    breakdown: [
      { word: "研究", reading: "けんきゅう", meaning: "연구" }
    ] },
  { level: "N2", kanji: "意味合い", reading: "いみあい", korean: "이미아이", meaning: "함의, 뉘앙스",
    example: "この言葉には特別な意味合いがあります。", exampleReading: "このことばにはとくべつないみあいがあります。", exampleKorean: "코노 코토바니와 토쿠베츠나 이미아이가 아리마스", exampleMeaning: "이 단어에는 특별한 함의가 있습니다.",
    breakdown: [
      { word: "言葉", reading: "ことば", meaning: "단어, 말" }
    ] },
  { level: "N2", kanji: "見識", reading: "けんしき", korean: "켄시키", meaning: "식견",
    example: "彼は豊富な見識を持っています。", exampleReading: "かれはほうふなけんしきをもっています。", exampleKorean: "카레와 호-후나 켄시키오 못테 이마스", exampleMeaning: "그는 풍부한 식견을 가지고 있습니다.",
    breakdown: [
      { word: "豊富な", reading: "ほうふな", meaning: "풍부한" }
    ] },
  { level: "N2", kanji: "識別", reading: "しきべつ", korean: "시키베츠", meaning: "식별",
    example: "顔で本人かどうか識別します。", exampleReading: "かおでほんにんかどうかしきべつします。", exampleKorean: "카오데 혼닌카도-카 시키베츠시마스", exampleMeaning: "얼굴로 본인인지 아닌지 식별합니다.",
    breakdown: [
      { word: "本人", reading: "ほんにん", meaning: "본인" }
    ] },
  { level: "N2", kanji: "判別", reading: "はんべつ", korean: "한베츠", meaning: "판별",
    example: "本物と偽物を判別するのは難しいです。", exampleReading: "ほんものとにせものをはんべつするのはむずかしいです。", exampleKorean: "혼모노토 니세모노오 한베츠스루노와 무즈카시이데스", exampleMeaning: "진품과 가짜를 판별하는 것은 어렵습니다.",
    breakdown: [
      { word: "本物", reading: "ほんもの", meaning: "진품" }
    ] },
  { level: "N2", kanji: "選択肢", reading: "せんたくし", korean: "센타쿠시", meaning: "선택지",
    example: "選択肢が多すぎて迷います。", exampleReading: "せんたくしがおおすぎてまよいます。", exampleKorean: "센타쿠시가 오-스기테 마요이마스", exampleMeaning: "선택지가 너무 많아서 고민됩니다.",
    breakdown: [
      { word: "多すぎて", reading: "おおすぎて", meaning: "너무 많아서" }
    ] },
  { level: "N2", kanji: "余地", reading: "よち", korean: "요치", meaning: "여지",
    example: "改善の余地がまだあります。", exampleReading: "かいぜんのよちがまだあります。", exampleKorean: "카이젠노 요치가 마다 아리마스", exampleMeaning: "개선의 여지가 아직 있습니다.",
    breakdown: [
      { word: "改善", reading: "かいぜん", meaning: "개선" }
    ] },
  { level: "N2", kanji: "余韻", reading: "よいん", korean: "요잉", meaning: "여운",
    example: "映画の余韻に浸っています。", exampleReading: "えいがのよいんにひたっています。", exampleKorean: "에-가노 요인니 히탓테 이마스", exampleMeaning: "영화의 여운에 잠겨 있습니다.",
    breakdown: [
      { word: "浸って", reading: "ひたって", meaning: "잠겨서" }
    ] },
  { level: "N2", kanji: "名残", reading: "なごり", korean: "나고리", meaning: "자취, 여운",
    example: "秋の名残を感じます。", exampleReading: "あきのなごりをかんじます。", exampleKorean: "아키노 나고리오 칸지마스", exampleMeaning: "가을의 여운을 느낍니다.",
    breakdown: [
      { word: "秋", reading: "あき", meaning: "가을" }
    ] },
  { level: "N2", kanji: "気配り", reading: "きくばり", korean: "키쿠바리", meaning: "배려",
    example: "彼女は細かい気配りができます。", exampleReading: "かのじょはこまかいきくばりができます。", exampleKorean: "카노죠와 코마카이 키쿠바리가 데키마스", exampleMeaning: "그녀는 세심한 배려를 할 수 있습니다.",
    breakdown: [
      { word: "細かい", reading: "こまかい", meaning: "세심한" }
    ] },
  { level: "N2", kanji: "心構え", reading: "こころがまえ", korean: "코코로가마에", meaning: "마음가짐",
    example: "試験に臨む心構えができています。", exampleReading: "しけんにのぞむこころがまえができています。", exampleKorean: "시켄니 노조무 코코로가마에가 데키테 이마스", exampleMeaning: "시험에 임할 마음가짐이 되어 있습니다.",
    breakdown: [
      { word: "臨む", reading: "のぞむ", meaning: "임하다" }
    ] },
  { level: "N2", kanji: "覚悟", reading: "かくご", korean: "카쿠고", meaning: "각오",
    example: "失敗する覚悟はできています。", exampleReading: "しっぱいするかくごはできています。", exampleKorean: "싯파이스루 카쿠고와 데키테 이마스", exampleMeaning: "실패할 각오는 되어 있습니다.",
    breakdown: [
      { word: "失敗する", reading: "しっぱいする", meaning: "실패하다" }
    ] },
  { level: "N2", kanji: "決意", reading: "けつい", korean: "케츠이", meaning: "결의",
    example: "留学する決意を固めました。", exampleReading: "りゅうがくするけついをかためました。", exampleKorean: "류-가쿠스루 케츠이오 카타메마시타", exampleMeaning: "유학할 결의를 굳혔습니다.",
    breakdown: [
      { word: "固めました", reading: "かためました", meaning: "굳혔습니다" }
    ] },
  { level: "N2", kanji: "意思", reading: "いし", korean: "이시", meaning: "의사",
    example: "自分の意思をはっきり伝えました。", exampleReading: "じぶんのいしをはっきりつたえました。", exampleKorean: "지분노 이시오 학키리 츠타에마시타", exampleMeaning: "자신의 의사를 확실히 전했습니다.",
    breakdown: [
      { word: "はっきり", reading: "はっきり", meaning: "확실히" }
    ] },
  { level: "N2", kanji: "意向", reading: "いこう", korean: "이코-", meaning: "의향",
    example: "相手の意向を確認しました。", exampleReading: "あいてのいこうをかくにんしました。", exampleKorean: "아이테노 이코-오 카쿠닌시마시타", exampleMeaning: "상대의 의향을 확인했습니다.",
    breakdown: [
      { word: "相手", reading: "あいて", meaning: "상대" }
    ] },
  { level: "N2", kanji: "志向", reading: "しこう", korean: "시코-", meaning: "지향",
    example: "安全志向が強い傾向にあります。", exampleReading: "あんぜんしこうがつよいけいこうにあります。", exampleKorean: "안젠 시코-가 츠요이 케-코-니 아리마스", exampleMeaning: "안전 지향이 강한 경향이 있습니다.",
    breakdown: [
      { word: "傾向", reading: "けいこう", meaning: "경향" }
    ] },
  { level: "N2", kanji: "傾倒", reading: "けいとう", korean: "케-토-", meaning: "경도(치우침)",
    example: "若い頃、哲学に傾倒していました。", exampleReading: "わかいころ、てつがくにけいとうしていました。", exampleKorean: "와카이 코로, 테츠가쿠니 케-토- 시테 이마시타", exampleMeaning: "젊었을 때 철학에 심취해 있었습니다.",
    breakdown: [
      { word: "哲学", reading: "てつがく", meaning: "철학" }
    ] },

  // ---------- N1 ----------
  { level: "N1", kanji: "収束", reading: "しゅうそく", korean: "슈-소쿠", meaning: "수습, 종식",
    example: "混乱がようやく収束しました。", exampleReading: "こんらんがようやくしゅうそくしました。", exampleKorean: "콘랑가 요-야쿠 슈-소쿠 시마시타", exampleMeaning: "혼란이 마침내 수습되었습니다.",
    breakdown: [
      { word: "混乱", reading: "こんらん", meaning: "혼란" },
      { word: "ようやく", reading: "ようやく", meaning: "마침내" },
    ] },
  { level: "N1", kanji: "遂行", reading: "すいこう", korean: "스이코-", meaning: "수행",
    example: "任務を最後まで遂行します。", exampleReading: "にんむをさいごまですいこうします。", exampleKorean: "닌무오 사이고마데 스이코- 시마스", exampleMeaning: "임무를 끝까지 수행합니다.",
    breakdown: [
      { word: "任務", reading: "にんむ", meaning: "임무" },
    ] },
  { level: "N1", kanji: "培う", reading: "つちかう", korean: "츠치카우", meaning: "기르다, 함양하다",
    example: "長年の経験で技術を培いました。", exampleReading: "ながねんのけいけんでぎじゅつをつちかいました。", exampleKorean: "나가넨노 케-켄데 기쥬츠오 츠치카이마시타", exampleMeaning: "오랜 경험으로 기술을 길렀습니다.",
    breakdown: [
      { word: "長年の経験", reading: "ながねんのけいけん", meaning: "오랜 경험" },
    ] },
  { level: "N1", kanji: "潜在", reading: "せんざい", korean: "센자이", meaning: "잠재",
    example: "彼には潜在的な才能があります。", exampleReading: "かれにはせんざいてきなさいのうがあります。", exampleKorean: "카레니와 센자이테키나 사이노-가 아리마스", exampleMeaning: "그에게는 잠재적인 재능이 있습니다.",
    breakdown: [
      { word: "才能", reading: "さいのう", meaning: "재능" },
    ] },
  { level: "N1", kanji: "顕在化", reading: "けんざいか", korean: "켄자이카", meaning: "현재화, 드러남",
    example: "問題が顕在化してきました。", exampleReading: "もんだいがけんざいかしてきました。", exampleKorean: "몬다이가 켄자이카 시테키마시타", exampleMeaning: "문제가 드러나기 시작했습니다.",
    breakdown: [
      { word: "てきました", reading: "てきました", meaning: "~하기 시작했습니다" },
    ] },
  { level: "N1", kanji: "洞察", reading: "どうさつ", korean: "도-사츠", meaning: "통찰",
    example: "彼の洞察力には驚かされます。", exampleReading: "かれのどうさつりょくにはおどろかされます。", exampleKorean: "카레노 도-사츠료쿠니와 오도로카사레마스", exampleMeaning: "그의 통찰력에는 놀랄 수밖에 없습니다.",
    breakdown: [
      { word: "驚かされます", reading: "おどろかされます", meaning: "놀라게 됩니다 (사역수동)" },
    ] },
  { level: "N1", kanji: "均衡", reading: "きんこう", korean: "킨코-", meaning: "균형",
    example: "需要と供給の均衡を保ちます。", exampleReading: "じゅようときょうきゅうのきんこうをたもちます。", exampleKorean: "쥬요-토 쿄-큐-노 킨코-오 타모치마스", exampleMeaning: "수요와 공급의 균형을 유지합니다.",
    breakdown: [
      { word: "需要と供給", reading: "じゅようときょうきゅう", meaning: "수요와 공급" },
      { word: "保ちます", reading: "たもちます", meaning: "유지합니다" },
    ] },
  { level: "N1", kanji: "網羅", reading: "もうら", korean: "모-라", meaning: "망라",
    example: "この本は基礎から応用まで網羅しています。", exampleReading: "このほんはきそからおうようまでもうらしています。", exampleKorean: "코노 홍와 키소카라 오-요-마데 모-라 시테이마스", exampleMeaning: "이 책은 기초부터 응용까지 망라하고 있습니다.",
    breakdown: [
      { word: "基礎から応用まで", reading: "きそからおうようまで", meaning: "기초부터 응용까지" },
    ] },
  { level: "N1", kanji: "示唆", reading: "しさ", korean: "시사", meaning: "시사",
    example: "彼の言葉は重要なことを示唆しています。", exampleReading: "かれのことばはじゅうようなことをしさしています。", exampleKorean: "카레노 코토바와 쥬-요-나 코토오 시사 시테이마스", exampleMeaning: "그의 말은 중요한 것을 시사하고 있습니다.",
    breakdown: [
      { word: "重要なこと", reading: "じゅうようなこと", meaning: "중요한 것" },
    ] },
  { level: "N1", kanji: "精緻", reading: "せいち", korean: "세-치", meaning: "정치, 치밀함",
    example: "精緻な計算が求められます。", exampleReading: "せいちなけいさんがもとめられます。", exampleKorean: "세-치나 케-상가 모토메라레마스", exampleMeaning: "정치한 계산이 요구됩니다.",
    breakdown: [
      { word: "計算", reading: "けいさん", meaning: "계산" },
    ] },
  { level: "N1", kanji: "逸脱", reading: "いつだつ", korean: "이츠다츠", meaning: "일탈",
    example: "規則から逸脱してはいけません。", exampleReading: "きそくからいつだつしてはいけません。", exampleKorean: "키소쿠카라 이츠다츠 시테와 이케마셍", exampleMeaning: "규칙에서 일탈해서는 안 됩니다.",
    breakdown: [
      { word: "てはいけません", reading: "てはいけません", meaning: "~해서는 안 됩니다" },
    ] },
  { level: "N1", kanji: "阻害", reading: "そがい", korean: "소가이", meaning: "저해",
    example: "騒音は集中を阻害します。", exampleReading: "そうおんはしゅうちゅうをそがいします。", exampleKorean: "소-옹와 슈-츄-오 소가이 시마스", exampleMeaning: "소음은 집중을 저해합니다.",
    breakdown: [
      { word: "騒音", reading: "そうおん", meaning: "소음" },
    ] },
  { level: "N1", kanji: "是正", reading: "ぜせい", korean: "제세-", meaning: "시정",
    example: "制度の問題点を是正します。", exampleReading: "せいどのもんだいてんをぜせいします。", exampleKorean: "세-도노 몬다이텐오 제세- 시마스", exampleMeaning: "제도의 문제점을 시정합니다.",
    breakdown: [
      { word: "問題点", reading: "もんだいてん", meaning: "문제점" },
    ] },
  { level: "N1", kanji: "妥協", reading: "だきょう", korean: "다쿄-", meaning: "타협",
    example: "お互いに妥協することが必要です。", exampleReading: "おたがいにだきょうすることがひつようです。", exampleKorean: "오타가이니 다쿄- 스루 코토가 히츠요-데스", exampleMeaning: "서로 타협하는 것이 필요합니다.",
    breakdown: [
      { word: "お互いに", reading: "おたがいに", meaning: "서로" },
    ] },
  { level: "N1", kanji: "払拭", reading: "ふっしょく", korean: "훗쇼쿠", meaning: "불식, 씻어냄",
    example: "不安を払拭するために説明しました。", exampleReading: "ふあんをふっしょくするためにせつめいしました。", exampleKorean: "후앙오 훗쇼쿠스루 타메니 세츠메- 시마시타", exampleMeaning: "불안을 씻어내기 위해 설명했습니다.",
    breakdown: [
      { word: "不安", reading: "ふあん", meaning: "불안" },
    ] },
  { level: "N1", kanji: "憂慮", reading: "ゆうりょ", korean: "유-료", meaning: "우려",
    example: "将来を憂慮する声が上がっています。", exampleReading: "しょうらいをゆうりょするこえがあがっています。", exampleKorean: "쇼-라이오 유-료스루 코에가 아갓테이마스", exampleMeaning: "장래를 우려하는 목소리가 나오고 있습니다.",
    breakdown: [
      { word: "声が上がっています", reading: "こえがあがっています", meaning: "목소리가 나오고 있습니다" },
    ] },
  { level: "N1", kanji: "摂取", reading: "せっしゅ", korean: "셋슈", meaning: "섭취",
    example: "栄養をバランスよく摂取します。", exampleReading: "えいようをバランスよくせっしゅします。", exampleKorean: "에-요-오 바란스요쿠 셋슈 시마스", exampleMeaning: "영양을 균형 있게 섭취합니다.",
    breakdown: [
      { word: "バランスよく", reading: "バランスよく", meaning: "균형 있게" },
    ] },
  { level: "N1", kanji: "履行", reading: "りこう", korean: "리코-", meaning: "이행",
    example: "契約を確実に履行します。", exampleReading: "けいやくをかくじつにりこうします。", exampleKorean: "케-야쿠오 카쿠지츠니 리코- 시마스", exampleMeaning: "계약을 확실하게 이행합니다.",
    breakdown: [
      { word: "確実に", reading: "かくじつに", meaning: "확실하게" },
    ] },
  { level: "N1", kanji: "依存", reading: "いぞん", korean: "이존", meaning: "의존",
    example: "スマホに依存しすぎるのはよくありません。", exampleReading: "スマホにいぞんしすぎるのはよくありません。", exampleKorean: "스마호니 이존시스기루노와 요쿠 아리마셍", exampleMeaning: "스마트폰에 너무 의존하는 것은 좋지 않습니다.",
    breakdown: [
      { word: "しすぎる", reading: "しすぎる", meaning: "너무 ~하다" },
    ] },
  { level: "N1", kanji: "円滑", reading: "えんかつ", korean: "엔카츠", meaning: "원활",
    example: "会議が円滑に進みました。", exampleReading: "かいぎがえんかつにすすみました。", exampleKorean: "카이기가 엔카츠니 스스미마시타", exampleMeaning: "회의가 원활하게 진행되었습니다.",
    breakdown: [
      { word: "進みました", reading: "すすみました", meaning: "진행되었습니다" },
    ] },
  { level: "N1", kanji: "顧みる", reading: "かえりみる", korean: "카에리미루", meaning: "돌아보다, 반성하다",
    example: "自分の行動を顧みる必要があります。", exampleReading: "じぶんのこうどうをかえりみるひつようがあります。", exampleKorean: "지분노 코-도-오 카에리미루 히츠요-가 아리마스", exampleMeaning: "자신의 행동을 돌아볼 필요가 있습니다.",
    breakdown: [
      { word: "必要があります", reading: "ひつようがあります", meaning: "필요가 있습니다" },
    ] },
  { level: "N1", kanji: "覆す", reading: "くつがえす", korean: "쿠츠가에스", meaning: "뒤엎다",
    example: "新しい発見が定説を覆しました。", exampleReading: "あたらしいはっけんがていせつをくつがえしました。", exampleKorean: "아타라시- 학켄가 테-세츠오 쿠츠가에시마시타", exampleMeaning: "새로운 발견이 정설을 뒤엎었습니다.",
    breakdown: [
      { word: "定説", reading: "ていせつ", meaning: "정설" },
    ] },
  { level: "N1", kanji: "携わる", reading: "たずさわる", korean: "타즈사와루", meaning: "종사하다, 관여하다",
    example: "長年、教育に携わってきました。", exampleReading: "ながねん、きょういくにたずさわってきました。", exampleKorean: "나가넨 쿄-이쿠니 타즈사왓테키마시타", exampleMeaning: "오랫동안 교육에 종사해 왔습니다.",
    breakdown: [
      { word: "教育", reading: "きょういく", meaning: "교육" },
    ] },
  { level: "N1", kanji: "費やす", reading: "ついやす", korean: "츠이야스", meaning: "소비하다, 쏟다",
    example: "研究に多くの時間を費やしました。", exampleReading: "けんきゅうにおおくのじかんをついやしました。", exampleKorean: "켄큐-니 오-쿠노 지캉오 츠이야시마시타", exampleMeaning: "연구에 많은 시간을 쏟았습니다.",
    breakdown: [
      { word: "多くの時間", reading: "おおくのじかん", meaning: "많은 시간" },
    ] },
  { level: "N1", kanji: "見なす", reading: "みなす", korean: "미나스", meaning: "간주하다",
    example: "沈黙は同意と見なされます。", exampleReading: "ちんもくはどういとみなされます。", exampleKorean: "친모쿠와 도-이토 미나사레마스", exampleMeaning: "침묵은 동의로 간주됩니다.",
    breakdown: [
      { word: "沈黙", reading: "ちんもく", meaning: "침묵" },
    ] },
  { level: "N1", kanji: "踏まえる", reading: "ふまえる", korean: "후마에루", meaning: "입각하다, 근거로 하다",
    example: "過去のデータを踏まえて計画を立てます。", exampleReading: "かこのデータをふまえてけいかくをたてます。", exampleKorean: "카코노 데-타오 후마에테 케-카쿠오 타테마스", exampleMeaning: "과거 데이터에 입각하여 계획을 세웁니다.",
    breakdown: [
      { word: "計画を立てます", reading: "けいかくをたてます", meaning: "계획을 세웁니다" },
    ] },
  { level: "N1", kanji: "培養", reading: "ばいよう", korean: "바이요-", meaning: "배양",
    example: "細胞を培養する実験をしています。", exampleReading: "さいぼうをばいようするじっけんをしています。", exampleKorean: "사이보-오 바이요-스루 짓켄오 시테이마스", exampleMeaning: "세포를 배양하는 실험을 하고 있습니다.",
    breakdown: [
      { word: "細胞", reading: "さいぼう", meaning: "세포" },
    ] },
  { level: "N1", kanji: "是認", reading: "ぜにん", korean: "제닌", meaning: "시인",
    example: "彼はミスを是認しました。", exampleReading: "かれはミスをぜにんしました。", exampleKorean: "카레와 미스오 제닌 시마시타", exampleMeaning: "그는 실수를 시인했습니다.",
    breakdown: [
      { word: "ミス", reading: "ミス", meaning: "실수" },
    ] },
  { level: "N1", kanji: "否定", reading: "ひてい", korean: "히테-", meaning: "부정",
    example: "彼はその噂を否定しました。", exampleReading: "かれはそのうわさをひていしました。", exampleKorean: "카레와 소노 우와사오 히테- 시마시타", exampleMeaning: "그는 그 소문을 부정했습니다.",
    breakdown: [
      { word: "噂", reading: "うわさ", meaning: "소문" },
    ] },
  { level: "N1", kanji: "肯定", reading: "こうてい", korean: "코-테-", meaning: "긍정",
    example: "彼女は肯定的な返事をしました。", exampleReading: "かのじょはこうていてきなへんじをしました。", exampleKorean: "카노죠와 코-테-테키나 헨지오 시마시타", exampleMeaning: "그녀는 긍정적인 대답을 했습니다.",
    breakdown: [
      { word: "返事", reading: "へんじ", meaning: "대답" },
    ] },
  { level: "N1", kanji: "排除", reading: "はいじょ", korean: "하이죠", meaning: "배제",
    example: "不正を排除する仕組みが必要です。", exampleReading: "ふせいをはいじょするしくみがひつようです。", exampleKorean: "후세-오 하이죠스루 시쿠미가 히츠요-데스", exampleMeaning: "부정을 배제하는 구조가 필요합니다.",
    breakdown: [
      { word: "不正", reading: "ふせい", meaning: "부정" },
    ] },
  { level: "N1", kanji: "排出", reading: "はいしゅつ", korean: "하이슈츠", meaning: "배출",
    example: "工場が有害な物質を排出しています。", exampleReading: "こうじょうがゆうがいなぶっしつをはいしゅつしています。", exampleKorean: "코-죠-가 유-가이나 붓시츠오 하이슈츠 시테이마스", exampleMeaning: "공장이 유해한 물질을 배출하고 있습니다.",
    breakdown: [
      { word: "有害な物質", reading: "ゆうがいなぶっしつ", meaning: "유해한 물질" },
    ] },
  { level: "N1", kanji: "抽出", reading: "ちゅうしゅつ", korean: "츄-슈츠", meaning: "추출",
    example: "必要なデータだけを抽出します。", exampleReading: "ひつようなデータだけをちゅうしゅつします。", exampleKorean: "히츠요-나 데-타다케오 츄-슈츠 시마스", exampleMeaning: "필요한 데이터만 추출합니다.",
    breakdown: [
      { word: "だけ", reading: "だけ", meaning: "~만" },
    ] },
  { level: "N1", kanji: "集約", reading: "しゅうやく", korean: "슈-야쿠", meaning: "집약",
    example: "意見を一つに集約しました。", exampleReading: "いけんをひとつにしゅうやくしました。", exampleKorean: "이켄오 히토츠니 슈-야쿠 시마시타", exampleMeaning: "의견을 하나로 집약했습니다.",
    breakdown: [
      { word: "一つに", reading: "ひとつに", meaning: "하나로" },
    ] },
  { level: "N1", kanji: "統合", reading: "とうごう", korean: "토-고-", meaning: "통합",
    example: "二つの部署を統合しました。", exampleReading: "ふたつのぶしょをとうごうしました。", exampleKorean: "후타츠노 부쇼오 토-고- 시마시타", exampleMeaning: "두 부서를 통합했습니다.",
    breakdown: [
      { word: "部署", reading: "ぶしょ", meaning: "부서" },
    ] },
  { level: "N1", kanji: "分散", reading: "ぶんさん", korean: "분산", meaning: "분산",
    example: "リスクを分散させて投資します。", exampleReading: "リスクをぶんさんさせてとうしします。", exampleKorean: "리스쿠오 분산사세테 토-시 시마스", exampleMeaning: "리스크를 분산시켜 투자합니다.",
    breakdown: [
      { word: "リスク", reading: "リスク", meaning: "리스크" },
    ] },
  { level: "N1", kanji: "収益", reading: "しゅうえき", korean: "슈-에키", meaning: "수익",
    example: "新しい事業が収益を上げています。", exampleReading: "あたらしいじぎょうがしゅうえきをあげています。", exampleKorean: "아타라시- 지교-가 슈-에키오 아게테이마스", exampleMeaning: "새로운 사업이 수익을 올리고 있습니다.",
    breakdown: [
      { word: "事業", reading: "じぎょう", meaning: "사업" },
    ] },
  { level: "N1", kanji: "収容", reading: "しゅうよう", korean: "슈-요-", meaning: "수용",
    example: "この会場は千人を収容できます。", exampleReading: "このかいじょうはせんにんをしゅうようできます。", exampleKorean: "코노 카이죠-와 센닝오 슈-요- 데키마스", exampleMeaning: "이 회장은 천 명을 수용할 수 있습니다.",
    breakdown: [
      { word: "千人", reading: "せんにん", meaning: "천 명" },
    ] },
  { level: "N1", kanji: "貢献", reading: "こうけん", korean: "코-켄", meaning: "공헌",
    example: "地域社会に貢献したいです。", exampleReading: "ちいきしゃかいにこうけんしたいです。", exampleKorean: "치이키 샤카이니 코-켄시타이데스", exampleMeaning: "지역 사회에 공헌하고 싶습니다.",
    breakdown: [
      { word: "地域社会", reading: "ちいきしゃかい", meaning: "지역 사회" },
    ] },
  { level: "N1", kanji: "献身", reading: "けんしん", korean: "켄신", meaning: "헌신",
    example: "彼女は献身的に働いています。", exampleReading: "かのじょはけんしんてきにはたらいています。", exampleKorean: "카노죠와 켄신테키니 하타라이테이마스", exampleMeaning: "그녀는 헌신적으로 일하고 있습니다.",
    breakdown: [
      { word: "働いています", reading: "はたらいています", meaning: "일하고 있습니다" },
    ] },
  { level: "N1", kanji: "犠牲", reading: "ぎせい", korean: "기세-", meaning: "희생",
    example: "多くの犠牲を払って成功しました。", exampleReading: "おおくのぎせいをはらってせいこうしました。", exampleKorean: "오-쿠노 기세-오 하랏테 세-코- 시마시타", exampleMeaning: "많은 희생을 치르고 성공했습니다.",
    breakdown: [
      { word: "払って", reading: "はらって", meaning: "치르고" },
    ] },
  { level: "N1", kanji: "譲歩", reading: "じょうほ", korean: "죠-호", meaning: "양보",
    example: "お互いに少しずつ譲歩しました。", exampleReading: "おたがいにすこしずつじょうほしました。", exampleKorean: "오타가이니 스코시즈츠 죠-호 시마시타", exampleMeaning: "서로 조금씩 양보했습니다.",
    breakdown: [
      { word: "少しずつ", reading: "すこしずつ", meaning: "조금씩" },
    ] },
  { level: "N1", kanji: "妥結", reading: "だけつ", korean: "다케츠", meaning: "타결",
    example: "長い交渉の末、妥結しました。", exampleReading: "ながいこうしょうのすえ、だけつしました。", exampleKorean: "나가이 코-쇼-노 스에 다케츠 시마시타", exampleMeaning: "긴 교섭 끝에 타결되었습니다.",
    breakdown: [
      { word: "交渉の末", reading: "こうしょうのすえ", meaning: "교섭 끝에" },
    ] },
  { level: "N1", kanji: "打開", reading: "だかい", korean: "다카이", meaning: "타개",
    example: "状況を打開する方法を探します。", exampleReading: "じょうきょうをだかいするほうほうをさがします。", exampleKorean: "죠-쿄-오 다카이스루 호-호-오 사가시마스", exampleMeaning: "상황을 타개할 방법을 찾습니다.",
    breakdown: [
      { word: "探します", reading: "さがします", meaning: "찾습니다" },
    ] },
  { level: "N1", kanji: "打診", reading: "だしん", korean: "다신", meaning: "타진",
    example: "取引先に価格を打診しました。", exampleReading: "とりひきさきにかかくをだしんしました。", exampleKorean: "토리히키사키니 카카쿠오 다신 시마시타", exampleMeaning: "거래처에 가격을 타진했습니다.",
    breakdown: [
      { word: "取引先", reading: "とりひきさき", meaning: "거래처" },
    ] },
  { level: "N1", kanji: "打撃", reading: "だげき", korean: "다게키", meaning: "타격",
    example: "不況で経済に大きな打撃を受けました。", exampleReading: "ふきょうでけいざいにおおきなだげきをうけました。", exampleKorean: "후쿄-데 케-자이니 오-키나 다게키오 우케마시타", exampleMeaning: "불황으로 경제에 큰 타격을 받았습니다.",
    breakdown: [
      { word: "不況", reading: "ふきょう", meaning: "불황" },
    ] },
  { level: "N1", kanji: "是非", reading: "ぜひ", korean: "제히", meaning: "꼭, 반드시",
    example: "是非一度お越しください。", exampleReading: "ぜひいちどおこしください。", exampleKorean: "제히 이치도 오코시쿠다사이", exampleMeaning: "꼭 한번 와 주세요.",
    breakdown: [
      { word: "お越しください", reading: "おこしください", meaning: "와 주세요" },
    ] },
  { level: "N1", kanji: "兆候", reading: "ちょうこう", korean: "쵸-코-", meaning: "징후",
    example: "景気回復の兆候が見えてきました。", exampleReading: "けいきかいふくのちょうこうがみえてきました。", exampleKorean: "케-키 카이후쿠노 쵸-코-가 미에테키마시타", exampleMeaning: "경기 회복의 징후가 보이기 시작했습니다.",
    breakdown: [
      { word: "景気回復", reading: "けいきかいふく", meaning: "경기 회복" },
    ] },
  { level: "N1", kanji: "際立つ", reading: "きわだつ", korean: "키와다츠", meaning: "두드러지다",
    example: "彼の才能は際立っています。", exampleReading: "かれのさいのうはきわだっています。", exampleKorean: "카레노 사이노-와 키와닷테이마스", exampleMeaning: "그의 재능은 두드러집니다.",
    breakdown: [
      { word: "才能", reading: "さいのう", meaning: "재능" },
    ] },
  { level: "N1", kanji: "目覚ましい", reading: "めざましい", korean: "메자마시-", meaning: "눈부신",
    example: "目覚ましい発展を遂げました。", exampleReading: "めざましいはってんをとげました。", exampleKorean: "메자마시- 핫텐오 토게마시타", exampleMeaning: "눈부신 발전을 이루었습니다.",
    breakdown: [
      { word: "遂げました", reading: "とげました", meaning: "이루었습니다" },
    ] },
  { level: "N1", kanji: "甚だしい", reading: "はなはだしい", korean: "하나하다시-", meaning: "심하다",
    example: "甚だしい誤解を招きました。", exampleReading: "はなはだしいごかいをまねきました。", exampleKorean: "하나하다시- 고카이오 마네키마시타", exampleMeaning: "심한 오해를 불러일으켰습니다.",
    breakdown: [
      { word: "招きました", reading: "まねきました", meaning: "불러일으켰습니다" },
    ] },
  { level: "N1", kanji: "著しい", reading: "いちじるしい", korean: "이치지루시-", meaning: "현저하다",
    example: "技術の進歩が著しいです。", exampleReading: "ぎじゅつのしんぽがいちじるしいです。", exampleKorean: "기쥬츠노 신포가 이치지루시-데스", exampleMeaning: "기술의 진보가 현저합니다.",
    breakdown: [
      { word: "進歩", reading: "しんぽ", meaning: "진보" },
    ] },
  { level: "N1", kanji: "煩わしい", reading: "わずらわしい", korean: "와즈라와시-", meaning: "번거롭다",
    example: "手続きが煩わしいです。", exampleReading: "てつづきがわずらわしいです。", exampleKorean: "테츠즈키가 와즈라와시-데스", exampleMeaning: "절차가 번거롭습니다.",
    breakdown: [
      { word: "手続き", reading: "てつづき", meaning: "절차" },
    ] },
  { level: "N1", kanji: "紛らわしい", reading: "まぎらわしい", korean: "마기라와시-", meaning: "헷갈리기 쉽다",
    example: "この二つの言葉は紛らわしいです。", exampleReading: "このふたつのことばはまぎらわしいです。", exampleKorean: "코노 후타츠노 코토바와 마기라와시-데스", exampleMeaning: "이 두 단어는 헷갈리기 쉽습니다.",
    breakdown: [
      { word: "二つの言葉", reading: "ふたつのことば", meaning: "두 단어" },
    ] },
  { level: "N1", kanji: "相応しい", reading: "ふさわしい", korean: "후사와시-", meaning: "어울리다",
    example: "彼はリーダーに相応しい人です。", exampleReading: "かれはリーダーにふさわしいひとです。", exampleKorean: "카레와 리-다-니 후사와시- 히토데스", exampleMeaning: "그는 리더에 어울리는 사람입니다.",
    breakdown: [
      { word: "リーダー", reading: "リーダー", meaning: "리더" },
    ] },
  { level: "N1", kanji: "甘やかす", reading: "あまやかす", korean: "아마야카스", meaning: "응석을 받아주다",
    example: "子供を甘やかしすぎないほうがいいです。", exampleReading: "こどもをあまやかしすぎないほうがいいです。", exampleKorean: "코도모오 아마야카시스기나이 호-가 이-데스", exampleMeaning: "아이를 너무 응석 받아주지 않는 게 좋습니다.",
    breakdown: [
      { word: "すぎない", reading: "すぎない", meaning: "너무 ~하지 않다" },
    ] },
  { level: "N1", kanji: "呆れる", reading: "あきれる", korean: "아키레루", meaning: "어이없다",
    example: "彼の無責任さに呆れました。", exampleReading: "かれのむせきにんさにあきれました。", exampleKorean: "카레노 무세키닌사니 아키레마시타", exampleMeaning: "그의 무책임함에 어이가 없었습니다.",
    breakdown: [
      { word: "無責任さ", reading: "むせきにんさ", meaning: "무책임함" },
    ] },
  { level: "N1", kanji: "悟る", reading: "さとる", korean: "사토루", meaning: "깨닫다",
    example: "自分の間違いを悟りました。", exampleReading: "じぶんのまちがいをさとりました。", exampleKorean: "지분노 마치가이오 사토리마시타", exampleMeaning: "자신의 잘못을 깨달았습니다.",
    breakdown: [
      { word: "間違い", reading: "まちがい", meaning: "잘못" },
    ] },
  { level: "N1", kanji: "諭す", reading: "さとす", korean: "사토스", meaning: "타이르다",
    example: "先生が生徒を諭しました。", exampleReading: "せんせいがせいとをさとしました。", exampleKorean: "센세-가 세-토오 사토시마시타", exampleMeaning: "선생님이 학생을 타일렀습니다.",
    breakdown: [
      { word: "生徒", reading: "せいと", meaning: "학생" },
    ] },
  { level: "N1", kanji: "施す", reading: "ほどこす", korean: "호도코스", meaning: "베풀다",
    example: "貧しい人々に援助を施しました。", exampleReading: "まずしいひとびとにえんじょをほどこしました。", exampleKorean: "마즈시- 히토비토니 엔죠오 호도코시마시타", exampleMeaning: "가난한 사람들에게 원조를 베풀었습니다.",
    breakdown: [
      { word: "貧しい人々", reading: "まずしいひとびと", meaning: "가난한 사람들" },
    ] },
  { level: "N1", kanji: "卓越", reading: "たくえつ", korean: "타쿠에츠", meaning: "탁월",
    example: "彼の卓越した技術に驚きました。", exampleReading: "かれのたくえつしたぎじゅつにおどろきました。", exampleKorean: "카레노 타쿠에츠시타 기쥬츠니 오도로키마시타", exampleMeaning: "그의 탁월한 기술에 놀랐습니다.",
    breakdown: [
      { word: "技術", reading: "ぎじゅつ", meaning: "기술" },
    ] },
  { level: "N1", kanji: "秀逸", reading: "しゅういつ", korean: "슈-이츠", meaning: "뛰어남",
    example: "この作品は秀逸な出来栄えです。", exampleReading: "このさくひんはしゅういつなできばえです。", exampleKorean: "코노 사쿠힝와 슈-이츠나 데키바에데스", exampleMeaning: "이 작품은 뛰어난 완성도입니다.",
    breakdown: [
      { word: "出来栄え", reading: "できばえ", meaning: "완성도" },
    ] },
  { level: "N1", kanji: "醸成", reading: "じょうせい", korean: "죠-세-", meaning: "조성",
    example: "信頼関係を醸成することが大切です。", exampleReading: "しんらいかんけいをじょうせいすることがたいせつです。", exampleKorean: "신라이 칸케-오 죠-세- 스루 코토가 타이세츠데스", exampleMeaning: "신뢰 관계를 조성하는 것이 중요합니다.",
    breakdown: [
      { word: "信頼関係", reading: "しんらいかんけい", meaning: "신뢰 관계" },
    ] },
  { level: "N1", kanji: "享受", reading: "きょうじゅ", korean: "쿄-쥬", meaning: "향유",
    example: "平和な生活を享受しています。", exampleReading: "へいわなせいかつをきょうじゅしています。", exampleKorean: "헤-와나 세-카츠오 쿄-쥬 시테이마스", exampleMeaning: "평화로운 생활을 누리고 있습니다.",
    breakdown: [
      { word: "平和な", reading: "へいわな", meaning: "평화로운" },
    ] },
  { level: "N1", kanji: "折衷", reading: "せっちゅう", korean: "셋츄-", meaning: "절충",
    example: "二つの案を折衷しました。", exampleReading: "ふたつのあんをせっちゅうしました。", exampleKorean: "후타츠노 안오 셋츄- 시마시타", exampleMeaning: "두 안을 절충했습니다.",
    breakdown: [
      { word: "二つの案", reading: "ふたつのあん", meaning: "두 안" },
    ] },
  { level: "N1", kanji: "呈する", reading: "ていする", korean: "테-스루", meaning: "드러내다, 나타내다",
    example: "問題が複雑な様相を呈しています。", exampleReading: "もんだいがふくざつなようそうをていしています。", exampleKorean: "몬다이가 후쿠자츠나 요-소-오 테-시테이마스", exampleMeaning: "문제가 복잡한 양상을 드러내고 있습니다.",
    breakdown: [
      { word: "複雑な様相", reading: "ふくざつなようそう", meaning: "복잡한 양상" },
    ] },
  { level: "N1", kanji: "携行", reading: "けいこう", korean: "케-코-", meaning: "휴대",
    example: "身分証明書を携行してください。", exampleReading: "みぶんしょうめいしょをけいこうしてください。", exampleKorean: "미분 쇼-메-쇼오 케-코- 시테쿠다사이", exampleMeaning: "신분증을 휴대해 주세요.",
    breakdown: [
      { word: "身分証明書", reading: "みぶんしょうめいしょ", meaning: "신분증명서" },
    ] },
  { level: "N1", kanji: "弊害", reading: "へいがい", korean: "헤-가이", meaning: "폐해",
    example: "過度な競争は弊害をもたらします。", exampleReading: "かどなきょうそうはへいがいをもたらします。", exampleKorean: "카도나 쿄-소-와 헤-가이오 모타라시마스", exampleMeaning: "과도한 경쟁은 폐해를 초래합니다.",
    breakdown: [
      { word: "過度な競争", reading: "かどなきょうそう", meaning: "과도한 경쟁" },
    ] },
  { level: "N1", kanji: "懸念", reading: "けねん", korean: "케넨", meaning: "우려, 걱정",
    example: "経済の先行きに懸念を抱いています。", exampleReading: "けいざいのさきゆきにけねんをいだいています。", exampleKorean: "케-자이노 사키유키니 케넨오 이다이테이마스", exampleMeaning: "경제의 앞날에 우려를 품고 있습니다.",
    breakdown: [
      { word: "先行き", reading: "さきゆき", meaning: "앞날" },
    ] },
  { level: "N1", kanji: "促す", reading: "うながす", korean: "우나가스", meaning: "촉구하다, 재촉하다",
    example: "早めの対応を促しました。", exampleReading: "はやめのたいおうをうながしました。", exampleKorean: "하야메노 타이오-오 우나가시마시타", exampleMeaning: "조속한 대응을 촉구했습니다.",
    breakdown: [
      { word: "早めの対応", reading: "はやめのたいおう", meaning: "조속한 대응" },
    ] },
  { level: "N1", kanji: "概して", reading: "がいして", korean: "가이시테", meaning: "대체로",
    example: "今年は概して天気がよかったです。", exampleReading: "ことしはがいしててんきがよかったです。", exampleKorean: "코토시와 가이시테 텡키가 요캇타데스", exampleMeaning: "올해는 대체로 날씨가 좋았습니다.",
    breakdown: [
      { word: "今年", reading: "ことし", meaning: "올해" },
    ] },
  { level: "N1", kanji: "一概に", reading: "いちがいに", korean: "이치가이니", meaning: "일률적으로",
    example: "一概にそうとは言えません。", exampleReading: "いちがいにそうとはいえません。", exampleKorean: "이치가이니 소-토와 이에마셍", exampleMeaning: "일률적으로 그렇다고는 할 수 없습니다.",
    breakdown: [
      { word: "言えません", reading: "いえません", meaning: "말할 수 없습니다" },
    ] },
  { level: "N1", kanji: "あくまで", reading: "あくまで", korean: "아쿠마데", meaning: "어디까지나",
    example: "これはあくまで私の意見です。", exampleReading: "これはあくまでわたしのいけんです。", exampleKorean: "코레와 아쿠마데 와타시노 이켄데스", exampleMeaning: "이것은 어디까지나 제 의견입니다.",
    breakdown: [
      { word: "私の意見", reading: "わたしのいけん", meaning: "제 의견" },
    ] },
  { level: "N1", kanji: "もはや", reading: "もはや", korean: "모하야", meaning: "이제는",
    example: "もはや後戻りはできません。", exampleReading: "もはやあともどりはできません。", exampleKorean: "모하야 아토모도리와 데키마셍", exampleMeaning: "이제는 되돌아갈 수 없습니다.",
    breakdown: [
      { word: "後戻り", reading: "あともどり", meaning: "되돌아감" },
    ] },
  { level: "N1", kanji: "いわば", reading: "いわば", korean: "이와바", meaning: "말하자면",
    example: "彼はいわば私の恩師です。", exampleReading: "かれはいわばわたしのおんしです。", exampleKorean: "카레와 이와바 와타시노 온시데스", exampleMeaning: "그는 말하자면 저의 은사입니다.",
    breakdown: [
      { word: "恩師", reading: "おんし", meaning: "은사" },
    ] },
  { level: "N1", kanji: "ひいては", reading: "ひいては", korean: "히이테와", meaning: "나아가서는",
    example: "個人の努力が、ひいては社会全体の利益になります。", exampleReading: "こじんのどりょくが、ひいてはしゃかいぜんたいのりえきになります。", exampleKorean: "코진노 도료쿠가 히이테와 샤카이 젠타이노 리에키니 나리마스", exampleMeaning: "개인의 노력이 나아가서는 사회 전체의 이익이 됩니다.",
    breakdown: [
      { word: "個人の努力", reading: "こじんのどりょく", meaning: "개인의 노력" },
    ] },
  { level: "N1", kanji: "なおさら", reading: "なおさら", korean: "나오사라", meaning: "더욱",
    example: "事情を聞いて、なおさら心配になりました。", exampleReading: "じじょうをきいて、なおさらしんぱいになりました。", exampleKorean: "지죠-오 키이테 나오사라 심파이니 나리마시타", exampleMeaning: "사정을 듣고 더욱 걱정이 되었습니다.",
    breakdown: [
      { word: "事情", reading: "じじょう", meaning: "사정" },
    ] },
  { level: "N1", kanji: "ことごとく", reading: "ことごとく", korean: "코토고토쿠", meaning: "모조리",
    example: "提案はことごとく却下されました。", exampleReading: "ていあんはことごとくきゃっかされました。", exampleKorean: "테-안와 코토고토쿠 캭카 사레마시타", exampleMeaning: "제안은 모조리 기각되었습니다.",
    breakdown: [
      { word: "却下されました", reading: "きゃっかされました", meaning: "기각되었습니다" },
    ] },
  { level: "N1", kanji: "あえて", reading: "あえて", korean: "아에테", meaning: "굳이",
    example: "あえて厳しいことを言います。", exampleReading: "あえてきびしいことをいいます。", exampleKorean: "아에테 키비시- 코토오 이이마스", exampleMeaning: "굳이 엄한 말을 하겠습니다.",
    breakdown: [
      { word: "厳しいこと", reading: "きびしいこと", meaning: "엄한 말" },
    ] },
  { level: "N1", kanji: "卑劣", reading: "ひれつ", korean: "히레츠", meaning: "비열",
    example: "卑劣なやり方に怒りを感じました。", exampleReading: "ひれつなやりかたにいかりをかんじました。", exampleKorean: "히레츠나 야리카타니 이카리오 칸지마시타", exampleMeaning: "비열한 방식에 분노를 느꼈습니다.",
    breakdown: [
      { word: "やり方", reading: "やりかた", meaning: "방식" },
    ] },
  { level: "N1", kanji: "露骨", reading: "ろこつ", korean: "로코츠", meaning: "노골적",
    example: "彼は露骨に嫌な顔をしました。", exampleReading: "かれはろこつにいやなかおをしました。", exampleKorean: "카레와 로코츠니 이야나 카오오 시마시타", exampleMeaning: "그는 노골적으로 싫은 표정을 지었습니다.",
    breakdown: [
      { word: "嫌な顔", reading: "いやなかお", meaning: "싫은 표정" },
    ] },
  { level: "N1", kanji: "陳腐", reading: "ちんぷ", korean: "친푸", meaning: "진부",
    example: "そのアイデアは陳腐だと言われました。", exampleReading: "そのアイデアはちんぷだといわれました。", exampleKorean: "소노 아이데아와 친푸다토 이와레마시타", exampleMeaning: "그 아이디어는 진부하다고 지적받았습니다.",
    breakdown: [
      { word: "言われました", reading: "いわれました", meaning: "지적받았습니다" },
    ] },
  { level: "N1", kanji: "稚拙", reading: "ちせつ", korean: "치세츠", meaning: "치졸, 미숙",
    example: "稚拙な文章を書いてしまいました。", exampleReading: "ちせつなぶんしょうをかいてしまいました。", exampleKorean: "치세츠나 분쇼-오 카이테시마이마시타", exampleMeaning: "미숙한 글을 쓰고 말았습니다.",
    breakdown: [
      { word: "文章", reading: "ぶんしょう", meaning: "글" },
    ] },
  { level: "N1", kanji: "老朽", reading: "ろうきゅう", korean: "로-큐-", meaning: "노후",
    example: "老朽化した建物を建て替えます。", exampleReading: "ろうきゅうかしたたてものをたてかえます。", exampleKorean: "로-큐-카시타 타테모노오 타테카에마스", exampleMeaning: "노후화된 건물을 재건축합니다.",
    breakdown: [
      { word: "建て替えます", reading: "たてかえます", meaning: "재건축합니다" },
    ] },
  { level: "N1", kanji: "陳謝", reading: "ちんしゃ", korean: "친샤", meaning: "사죄",
    example: "会社を代表して陳謝しました。", exampleReading: "かいしゃをだいひょうしてちんしゃしました。", exampleKorean: "카이샤오 다이효- 시테 친샤 시마시타", exampleMeaning: "회사를 대표해서 사죄했습니다.",
    breakdown: [
      { word: "代表して", reading: "だいひょうして", meaning: "대표해서" },
    ] },
  { level: "N1", kanji: "謝罪", reading: "しゃざい", korean: "샤자이", meaning: "사죄",
    example: "記者会見で謝罪しました。", exampleReading: "きしゃかいけんでしゃざいしました。", exampleKorean: "키샤카이켄데 샤자이 시마시타", exampleMeaning: "기자회견에서 사죄했습니다.",
    breakdown: [
      { word: "記者会見", reading: "きしゃかいけん", meaning: "기자회견" },
    ] },
  { level: "N1", kanji: "遺憾", reading: "いかん", korean: "이칸", meaning: "유감",
    example: "大変遺憾に思います。", exampleReading: "たいへんいかんにおもいます。", exampleKorean: "타이헨 이칸니 오모이마스", exampleMeaning: "대단히 유감스럽게 생각합니다.",
    breakdown: [
      { word: "大変", reading: "たいへん", meaning: "대단히" },
    ] },
  { level: "N1", kanji: "見計らう", reading: "みはからう", korean: "미하카라우", meaning: "가늠하다",
    example: "頃合いを見計らって声をかけました。", exampleReading: "ころあいをみはからってこえをかけました。", exampleKorean: "코로아이오 미하카랏테 코에오 카케마시타", exampleMeaning: "적당한 때를 가늠해서 말을 걸었습니다.",
    breakdown: [
      { word: "頃合い", reading: "ころあい", meaning: "적당한 때" },
    ] },
  { level: "N1", kanji: "見合わせる", reading: "みあわせる", korean: "미아와세루", meaning: "보류하다",
    example: "悪天候のため出発を見合わせました。", exampleReading: "あくてんこうのためしゅっぱつをみあわせました。", exampleKorean: "아쿠텡코-노 타메 슛파츠오 미아와세마시타", exampleMeaning: "악천후 때문에 출발을 보류했습니다.",
    breakdown: [
      { word: "悪天候", reading: "あくてんこう", meaning: "악천후" },
    ] },
  { level: "N1", kanji: "差し支える", reading: "さしつかえる", korean: "사시츠카에루", meaning: "지장이 있다",
    example: "睡眠不足は仕事に差し支えます。", exampleReading: "すいみんぶそくはしごとにさしつかえます。", exampleKorean: "스이밍 후소쿠와 시고토니 사시츠카에마스", exampleMeaning: "수면 부족은 일에 지장을 줍니다.",
    breakdown: [
      { word: "睡眠不足", reading: "すいみんぶそく", meaning: "수면 부족" },
    ] },
  { level: "N1", kanji: "手掛ける", reading: "てがける", korean: "테가케루", meaning: "직접 다루다",
    example: "多くのプロジェクトを手掛けてきました。", exampleReading: "おおくのプロジェクトをてがけてきました。", exampleKorean: "오-쿠노 프로제쿠토오 테가케테키마시타", exampleMeaning: "많은 프로젝트를 직접 다뤄왔습니다.",
    breakdown: [
      { word: "プロジェクト", reading: "プロジェクト", meaning: "프로젝트" },
    ] },
  { level: "N1", kanji: "心得る", reading: "こころえる", korean: "코코로에루", meaning: "터득하다",
    example: "礼儀作法を心得ています。", exampleReading: "れいぎさほうをこころえています。", exampleKorean: "레-기 사호-오 코코로에테이마스", exampleMeaning: "예의범절을 터득하고 있습니다.",
    breakdown: [
      { word: "礼儀作法", reading: "れいぎさほう", meaning: "예의범절" },
    ] },
  { level: "N1", kanji: "弁える", reading: "わきまえる", korean: "와키마에루", meaning: "분별하다",
    example: "立場を弁えて行動します。", exampleReading: "たちばをわきまえてこうどうします。", exampleKorean: "타치바오 와키마에테 코-도- 시마스", exampleMeaning: "입장을 분별해서 행동합니다.",
    breakdown: [
      { word: "立場", reading: "たちば", meaning: "입장" },
    ] },
  { level: "N1", kanji: "心掛ける", reading: "こころがける", korean: "코코로가케루", meaning: "유념하다",
    example: "健康に気を心掛けています。", exampleReading: "けんこうにきをこころがけています。", exampleKorean: "켕코-니 키오 코코로가케테이마스", exampleMeaning: "건강에 유념하고 있습니다.",
    breakdown: [
      { word: "健康", reading: "けんこう", meaning: "건강" },
    ] },
  { level: "N1", kanji: "見極める", reading: "みきわめる", korean: "미키와메루", meaning: "간파하다",
    example: "本質を見極めることが大切です。", exampleReading: "ほんしつをみきわめることがたいせつです。", exampleKorean: "혼시츠오 미키와메루 코토가 타이세츠데스", exampleMeaning: "본질을 간파하는 것이 중요합니다.",
    breakdown: [
      { word: "本質", reading: "ほんしつ", meaning: "본질" },
    ] },
  { level: "N1", kanji: "見据える", reading: "みすえる", korean: "미스에루", meaning: "직시하다",
    example: "将来を見据えて計画を立てます。", exampleReading: "しょうらいをみすえてけいかくをたてます。", exampleKorean: "쇼-라이오 미스에테 케-카쿠오 타테마스", exampleMeaning: "미래를 직시하며 계획을 세웁니다.",
    breakdown: [
      { word: "将来", reading: "しょうらい", meaning: "미래" },
    ] },
  { level: "N1", kanji: "見合う", reading: "みあう", korean: "미아우", meaning: "어울리다",
    example: "給料に見合った仕事です。", exampleReading: "きゅうりょうにみあったしごとです。", exampleKorean: "큐-료-니 미앗타 시고토데스", exampleMeaning: "급여에 걸맞은 일입니다.",
    breakdown: [
      { word: "給料", reading: "きゅうりょう", meaning: "급여" },
    ] },
  { level: "N1", kanji: "兼ね備える", reading: "かねそなえる", korean: "카네소나에루", meaning: "겸비하다",
    example: "実力と人柄を兼ね備えています。", exampleReading: "じつりょくとひとがらをかねそなえています。", exampleKorean: "지츠료쿠토 히토가라오 카네소나에테이마스", exampleMeaning: "실력과 인품을 겸비하고 있습니다.",
    breakdown: [
      { word: "人柄", reading: "ひとがら", meaning: "인품" },
    ] },
  { level: "N1", kanji: "至る", reading: "いたる", korean: "이타루", meaning: "이르다",
    example: "議論の末、合意に至りました。", exampleReading: "ぎろんのすえ、ごういにいたりました。", exampleKorean: "기론노 스에 고-이니 이타리마시타", exampleMeaning: "논의 끝에 합의에 이르렀습니다.",
    breakdown: [
      { word: "合意", reading: "ごうい", meaning: "합의" },
    ] },
  { level: "N1", kanji: "至って", reading: "いたって", korean: "이탓테", meaning: "지극히",
    example: "彼は至って冷静でした。", exampleReading: "かれはいたってれいせいでした。", exampleKorean: "카레와 이탓테 레-세-데시타", exampleMeaning: "그는 지극히 냉정했습니다.",
    breakdown: [
      { word: "冷静でした", reading: "れいせいでした", meaning: "냉정했습니다" },
    ] },
  { level: "N1", kanji: "極めて", reading: "きわめて", korean: "키와메테", meaning: "지극히, 매우",
    example: "極めて重要な問題です。", exampleReading: "きわめてじゅうようなもんだいです。", exampleKorean: "키와메테 쥬-요-나 몬다이데스", exampleMeaning: "지극히 중요한 문제입니다.",
    breakdown: [
      { word: "重要な問題", reading: "じゅうようなもんだい", meaning: "중요한 문제" },
    ] },
  { level: "N1", kanji: "あらゆる", reading: "あらゆる", korean: "아라유루", meaning: "모든",
    example: "あらゆる可能性を検討しました。", exampleReading: "あらゆるかのうせいをけんとうしました。", exampleKorean: "아라유루 카노-세-오 켄토- 시마시타", exampleMeaning: "모든 가능성을 검토했습니다.",
    breakdown: [
      { word: "可能性", reading: "かのうせい", meaning: "가능성" },
    ] },
  { level: "N1", kanji: "いかなる", reading: "いかなる", korean: "이카나루", meaning: "어떠한",
    example: "いかなる理由も許されません。", exampleReading: "いかなるりゆうもゆるされません。", exampleKorean: "이카나루 리유-모 유루사레마셍", exampleMeaning: "어떠한 이유도 용서되지 않습니다.",
    breakdown: [
      { word: "理由", reading: "りゆう", meaning: "이유" },
    ] },
  { level: "N1", kanji: "いっそう", reading: "いっそう", korean: "잇소-", meaning: "한층 더",
    example: "これからいっそう努力します。", exampleReading: "これからいっそうどりょくします。", exampleKorean: "코레카라 잇소- 도료쿠 시마스", exampleMeaning: "앞으로 한층 더 노력하겠습니다.",
    breakdown: [
      { word: "努力します", reading: "どりょくします", meaning: "노력하겠습니다" },
    ] },
  { level: "N1", kanji: "もっぱら", reading: "もっぱら", korean: "못파라", meaning: "오로지",
    example: "もっぱら研究に専念しています。", exampleReading: "もっぱらけんきゅうにせんねんしています。", exampleKorean: "못파라 켄큐-니 센넨 시테이마스", exampleMeaning: "오로지 연구에 전념하고 있습니다.",
    breakdown: [
      { word: "専念しています", reading: "せんねんしています", meaning: "전념하고 있습니다" },
    ] },
  { level: "N1", kanji: "とりわけ", reading: "とりわけ", korean: "토리와케", meaning: "특히",
    example: "今年はとりわけ寒いです。", exampleReading: "ことしはとりわけさむいです。", exampleKorean: "코토시와 토리와케 사무이데스", exampleMeaning: "올해는 특히 춥습니다.",
    breakdown: [
      { word: "寒いです", reading: "さむいです", meaning: "춥습니다" },
    ] },
  { level: "N1", kanji: "なんら", reading: "なんら", korean: "난라", meaning: "아무런",
    example: "なんら問題はありません。", exampleReading: "なんらもんだいはありません。", exampleKorean: "난라 몬다이와 아리마셍", exampleMeaning: "아무런 문제도 없습니다.",
    breakdown: [
      { word: "問題", reading: "もんだい", meaning: "문제" },
    ] },
  { level: "N1", kanji: "未曾有", reading: "みぞう", korean: "미조-", meaning: "미증유, 전례없음",
    example: "未曾有の危機に直面しています。", exampleReading: "みぞうのききにちょくめんしています。", exampleKorean: "미조-노 키키니 쵸쿠멘 시테이마스", exampleMeaning: "미증유의 위기에 직면하고 있습니다.",
    breakdown: [
      { word: "直面しています", reading: "ちょくめんしています", meaning: "직면하고 있습니다" },
    ] },
  { level: "N1", kanji: "破綻", reading: "はたん", korean: "하탄", meaning: "파탄",
    example: "会社の経営が破綻しました。", exampleReading: "かいしゃのけいえいがはたんしました。", exampleKorean: "카이샤노 케-에-가 하탄 시마시타", exampleMeaning: "회사의 경영이 파탄났습니다.",
    breakdown: [
      { word: "経営", reading: "けいえい", meaning: "경영" },
    ] },
  { level: "N1", kanji: "逼迫", reading: "ひっぱく", korean: "힙파쿠", meaning: "핍박, 긴박",
    example: "財政が逼迫しています。", exampleReading: "ざいせいがひっぱくしています。", exampleKorean: "자이세-가 힙파쿠 시테이마스", exampleMeaning: "재정이 핍박(긴박)한 상태입니다.",
    breakdown: [
      { word: "財政", reading: "ざいせい", meaning: "재정" },
    ] },
  { level: "N1", kanji: "潔い", reading: "いさぎよい", korean: "이사기요이", meaning: "떳떳하다, 깨끗하다",
    example: "潔く負けを認めました。", exampleReading: "いさぎよくまけをみとめました。", exampleKorean: "이사기요쿠 마케오 미토메마시타", exampleMeaning: "떳떳하게 패배를 인정했습니다.",
    breakdown: [
      { word: "負けを認めました", reading: "まけをみとめました", meaning: "패배를 인정했습니다" },
    ] },
  { level: "N1", kanji: "賢明", reading: "けんめい", korean: "켄메-", meaning: "현명",
    example: "それは賢明な判断でした。", exampleReading: "それはけんめいなはんだんでした。", exampleKorean: "소레와 켄메-나 한단데시타", exampleMeaning: "그것은 현명한 판단이었습니다.",
    breakdown: [
      { word: "判断", reading: "はんだん", meaning: "판단" },
    ] },
  { level: "N1", kanji: "愚か", reading: "おろか", korean: "오로카", meaning: "어리석음",
    example: "同じ失敗を繰り返すのは愚かです。", exampleReading: "おなじしっぱいをくりかえすのはおろかです。", exampleKorean: "오나지 십파이오 쿠리카에스노와 오로카데스", exampleMeaning: "같은 실수를 반복하는 것은 어리석습니다.",
    breakdown: [
      { word: "繰り返す", reading: "くりかえす", meaning: "반복하다" },
    ] },
  { level: "N1", kanji: "巧妙", reading: "こうみょう", korean: "코-묘-", meaning: "교묘",
    example: "巧妙な手口にだまされました。", exampleReading: "こうみょうなてぐちにだまされました。", exampleKorean: "코-묘-나 테구치니 다마사레마시타", exampleMeaning: "교묘한 수법에 속았습니다.",
    breakdown: [
      { word: "手口", reading: "てぐち", meaning: "수법" },
    ] },
  { level: "N1", kanji: "巧み", reading: "たくみ", korean: "타쿠미", meaning: "능숙함, 교묘함",
    example: "巧みな話術で説明しました。", exampleReading: "たくみなわじゅつでせつめいしました。", exampleKorean: "타쿠미나 와쥬츠데 세츠메- 시마시타", exampleMeaning: "능숙한 화술로 설명했습니다.",
    breakdown: [
      { word: "話術", reading: "わじゅつ", meaning: "화술" },
    ] },
  { level: "N1", kanji: "拙い", reading: "つたない", korean: "츠타나이", meaning: "서투르다",
    example: "拙い日本語ですみません。", exampleReading: "つたないにほんごですみません。", exampleKorean: "츠타나이 니홍고데 스미마셍", exampleMeaning: "서투른 일본어라 죄송합니다.",
    breakdown: [
      { word: "すみません", reading: "すみません", meaning: "죄송합니다" },
    ] },
  { level: "N1", kanji: "鮮やか", reading: "あざやか", korean: "아자야카", meaning: "선명함",
    example: "鮮やかな色のドレスを着ました。", exampleReading: "あざやかないろのドレスをきました。", exampleKorean: "아자야카나 이로노 도레스오 키마시타", exampleMeaning: "선명한 색의 드레스를 입었습니다.",
    breakdown: [
      { word: "ドレス", reading: "ドレス", meaning: "드레스" },
    ] },
  { level: "N1", kanji: "華やか", reading: "はなやか", korean: "하나야카", meaning: "화려함",
    example: "華やかなパーティーでした。", exampleReading: "はなやかなパーティーでした。", exampleKorean: "하나야카나 파-티-데시타", exampleMeaning: "화려한 파티였습니다.",
    breakdown: [
      { word: "パーティー", reading: "パーティー", meaning: "파티" },
    ] },
  { level: "N1", kanji: "地味", reading: "じみ", korean: "지미", meaning: "수수함",
    example: "今日は地味な服を着ています。", exampleReading: "きょうはじみなふくをきています。", exampleKorean: "쿄-와 지미나 후쿠오 키테이마스", exampleMeaning: "오늘은 수수한 옷을 입고 있습니다.",
    breakdown: [
      { word: "服", reading: "ふく", meaning: "옷" },
    ] },
  { level: "N1", kanji: "質素", reading: "しっそ", korean: "싯소", meaning: "검소함",
    example: "質素な生活を心がけています。", exampleReading: "しっそなせいかつをこころがけています。", exampleKorean: "싯소나 세-카츠오 코코로가케테이마스", exampleMeaning: "검소한 생활을 유념하고 있습니다.",
    breakdown: [
      { word: "心がけています", reading: "こころがけています", meaning: "유념하고 있습니다" },
    ] },
  { level: "N1", kanji: "贅沢", reading: "ぜいたく", korean: "제-타쿠", meaning: "사치",
    example: "たまには贅沢もいいと思います。", exampleReading: "たまにはぜいたくもいいとおもいます。", exampleKorean: "타마니와 제-타쿠모 이-토 오모이마스", exampleMeaning: "가끔은 사치도 좋다고 생각합니다.",
    breakdown: [
      { word: "たまには", reading: "たまには", meaning: "가끔은" },
    ] },
  { level: "N1", kanji: "豪華", reading: "ごうか", korean: "고-카", meaning: "호화",
    example: "豪華なホテルに泊まりました。", exampleReading: "ごうかなホテルにとまりました。", exampleKorean: "고-카나 호테루니 토마리마시타", exampleMeaning: "호화로운 호텔에 묵었습니다.",
    breakdown: [
      { word: "泊まりました", reading: "とまりました", meaning: "묵었습니다" },
    ] },
  { level: "N1", kanji: "粗末", reading: "そまつ", korean: "소마츠", meaning: "허술함, 조잡함",
    example: "食べ物を粗末にしてはいけません。", exampleReading: "たべものをそまつにしてはいけません。", exampleKorean: "타베모노오 소마츠니 시테와 이케마셍", exampleMeaning: "음식을 허투루 대해서는 안 됩니다.",
    breakdown: [
      { word: "食べ物", reading: "たべもの", meaning: "음식" },
    ] },
  { level: "N1", kanji: "精巧", reading: "せいこう", korean: "세-코-", meaning: "정교",
    example: "精巧な模型を作りました。", exampleReading: "せいこうなもけいをつくりました。", exampleKorean: "세-코-나 모케-오 츠쿠리마시타", exampleMeaning: "정교한 모형을 만들었습니다.",
    breakdown: [
      { word: "模型", reading: "もけい", meaning: "모형" },
    ] },
  { level: "N1", kanji: "緻密", reading: "ちみつ", korean: "치미츠", meaning: "치밀",
    example: "緻密な計画を立てました。", exampleReading: "ちみつなけいかくをたてました。", exampleKorean: "치미츠나 케-카쿠오 타테마시타", exampleMeaning: "치밀한 계획을 세웠습니다.",
    breakdown: [
      { word: "計画", reading: "けいかく", meaning: "계획" },
    ] },
  { level: "N1", kanji: "綿密", reading: "めんみつ", korean: "멘미츠", meaning: "면밀",
    example: "綿密に調査しました。", exampleReading: "めんみつにちょうさしました。", exampleKorean: "멘미츠니 쵸-사 시마시타", exampleMeaning: "면밀하게 조사했습니다.",
    breakdown: [
      { word: "調査しました", reading: "ちょうさしました", meaning: "조사했습니다" },
    ] },
  { level: "N1", kanji: "杜撰", reading: "ずさん", korean: "즈산", meaning: "엉성함, 날림",
    example: "杜撰な管理が問題になりました。", exampleReading: "ずさんなかんりがもんだいになりました。", exampleKorean: "즈산나 칸리가 몬다이니 나리마시타", exampleMeaning: "엉성한 관리가 문제가 되었습니다.",
    breakdown: [
      { word: "管理", reading: "かんり", meaning: "관리" },
    ] },
  { level: "N1", kanji: "几帳面", reading: "きちょうめん", korean: "키쵸-멘", meaning: "꼼꼼함",
    example: "彼は几帳面な性格です。", exampleReading: "かれはきちょうめんなせいかくです。", exampleKorean: "카레와 키쵸-멘나 세-카쿠데스", exampleMeaning: "그는 꼼꼼한 성격입니다.",
    breakdown: [
      { word: "性格", reading: "せいかく", meaning: "성격" },
    ] },
  { level: "N1", kanji: "大胆", reading: "だいたん", korean: "다이탄", meaning: "대담",
    example: "大胆な計画を発表しました。", exampleReading: "だいたんなけいかくをはっぴょうしました。", exampleKorean: "다이탄나 케-카쿠오 핫표- 시마시타", exampleMeaning: "대담한 계획을 발표했습니다.",
    breakdown: [
      { word: "発表しました", reading: "はっぴょうしました", meaning: "발표했습니다" },
    ] },
  { level: "N1", kanji: "臆病", reading: "おくびょう", korean: "오쿠뵤-", meaning: "겁이 많음",
    example: "犬に対して臆病です。", exampleReading: "いぬにたいしておくびょうです。", exampleKorean: "이누니 타이시테 오쿠뵤-데스", exampleMeaning: "개에 대해 겁이 많습니다.",
    breakdown: [
      { word: "犬に対して", reading: "いぬにたいして", meaning: "개에 대해" },
    ] },
  { level: "N1", kanji: "図々しい", reading: "ずうずうしい", korean: "즈-즈-시-", meaning: "뻔뻔하다",
    example: "図々しいお願いですみません。", exampleReading: "ずうずうしいおねがいですみません。", exampleKorean: "즈-즈-시- 오네가이데스 스미마셍", exampleMeaning: "뻔뻔한 부탁이라 죄송합니다.",
    breakdown: [
      { word: "お願い", reading: "おねがい", meaning: "부탁" },
    ] },
  { level: "N1", kanji: "生意気", reading: "なまいき", korean: "나마이키", meaning: "건방짐",
    example: "生意気な態度を取ってしまいました。", exampleReading: "なまいきなたいどをとってしまいました。", exampleKorean: "나마이키나 타이도오 톳테시마이마시타", exampleMeaning: "건방진 태도를 취하고 말았습니다.",
    breakdown: [
      { word: "態度を取って", reading: "たいどをとって", meaning: "태도를 취해" },
    ] },
  { level: "N1", kanji: "謙虚", reading: "けんきょ", korean: "켄쿄", meaning: "겸허",
    example: "謙虚な姿勢を忘れません。", exampleReading: "けんきょなしせいをわすれません。", exampleKorean: "켄쿄나 시세-오 와스레마셍", exampleMeaning: "겸허한 자세를 잊지 않겠습니다.",
    breakdown: [
      { word: "姿勢", reading: "しせい", meaning: "자세" },
    ] },
  { level: "N1", kanji: "傲慢", reading: "ごうまん", korean: "고-만", meaning: "오만",
    example: "傲慢な態度が嫌われました。", exampleReading: "ごうまんなたいどがきらわれました。", exampleKorean: "고-만나 타이도가 키라와레마시타", exampleMeaning: "오만한 태도가 미움을 샀습니다.",
    breakdown: [
      { word: "嫌われました", reading: "きらわれました", meaning: "미움을 샀습니다" },
    ] },
  { level: "N1", kanji: "頑固", reading: "がんこ", korean: "강코", meaning: "완고",
    example: "祖父はとても頑固です。", exampleReading: "そふはとてもがんこです。", exampleKorean: "소후와 도테모 강코데스", exampleMeaning: "할아버지는 아주 완고합니다.",
    breakdown: [
      { word: "祖父", reading: "そふ", meaning: "할아버지" },
    ] },
  { level: "N1", kanji: "融通", reading: "ゆうずう", korean: "유-즈-", meaning: "융통",
    example: "もう少し融通を利かせてください。", exampleReading: "もうすこしゆうずうをきかせてください。", exampleKorean: "모- 스코시 유-즈-오 키카세테쿠다사이", exampleMeaning: "조금 더 융통성을 발휘해 주세요.",
    breakdown: [
      { word: "利かせてください", reading: "きかせてください", meaning: "발휘해 주세요" },
    ] },
  { level: "N1", kanji: "執着", reading: "しゅうちゃく", korean: "슈-챠쿠", meaning: "집착",
    example: "過去に執着しないようにします。", exampleReading: "かこにしゅうちゃくしないようにします。", exampleKorean: "카코니 슈-챠쿠시나이 요-니 시마스", exampleMeaning: "과거에 집착하지 않도록 하겠습니다.",
    breakdown: [
      { word: "過去に", reading: "かこに", meaning: "과거에" },
    ] },
  { level: "N1", kanji: "未練", reading: "みれん", korean: "미렌", meaning: "미련",
    example: "過去の恋に未練はありません。", exampleReading: "かこのこいにみれんはありません。", exampleKorean: "카코노 코이니 미렌와 아리마셍", exampleMeaning: "과거의 사랑에 미련은 없습니다.",
    breakdown: [
      { word: "過去の恋", reading: "かこのこい", meaning: "과거의 사랑" },
    ] },
  { level: "N1", kanji: "諦める", reading: "あきらめる", korean: "아키라메루", meaning: "포기하다",
    example: "夢を諦めたくないです。", exampleReading: "ゆめをあきらめたくないです。", exampleKorean: "유메오 아키라메타쿠나이데스", exampleMeaning: "꿈을 포기하고 싶지 않습니다.",
    breakdown: [
      { word: "夢", reading: "ゆめ", meaning: "꿈" },
    ] },
  { level: "N1", kanji: "割り切る", reading: "わりきる", korean: "와리키루", meaning: "딱 잘라 정리하다",
    example: "仕事と割り切って考えます。", exampleReading: "しごとをわりきってかんがえます。", exampleKorean: "시고토오 와리킷테 캉가에마스", exampleMeaning: "일이라고 딱 잘라 생각합니다.",
    breakdown: [
      { word: "考えます", reading: "かんがえます", meaning: "생각합니다" },
    ] },
  { level: "N1", kanji: "由々しい", reading: "ゆゆしい", korean: "유유시-", meaning: "중대하다",
    example: "これは由々しい事態です。", exampleReading: "これはゆゆしいじたいです。", exampleKorean: "코레와 유유시- 지타이데스", exampleMeaning: "이것은 중대한 사태입니다.",
    breakdown: [
      { word: "事態", reading: "じたい", meaning: "사태" }
    ] },
  { level: "N1", kanji: "甚大", reading: "じんだい", korean: "진다이", meaning: "막대함",
    example: "台風により甚大な被害が出ました。", exampleReading: "たいふうによりじんだいなひがいがでました。", exampleKorean: "타이후-니 요리 진다이나 히가이가 데마시타", exampleMeaning: "태풍으로 인해 막대한 피해가 났습니다.",
    breakdown: [
      { word: "被害", reading: "ひがい", meaning: "피해" }
    ] },
  { level: "N1", kanji: "悪循環", reading: "あくじゅんかん", korean: "아쿠쥰칸", meaning: "악순환",
    example: "悪循環から抜け出せません。", exampleReading: "あくじゅんかんからぬけだせません。", exampleKorean: "아쿠쥰칸카라 누케다세마셍", exampleMeaning: "악순환에서 벗어날 수 없습니다.",
    breakdown: [
      { word: "抜け出せません", reading: "ぬけだせません", meaning: "벗어날 수 없습니다" }
    ] },
  { level: "N1", kanji: "破棄", reading: "はき", korean: "하키", meaning: "파기",
    example: "契約を破棄しました。", exampleReading: "けいやくをはきしました。", exampleKorean: "케-야쿠오 하키 시마시타", exampleMeaning: "계약을 파기했습니다.",
    breakdown: [
      { word: "契約", reading: "けいやく", meaning: "계약" }
    ] },
  { level: "N1", kanji: "撤去", reading: "てっきょ", korean: "텍쿄", meaning: "철거",
    example: "古い建物が撤去されました。", exampleReading: "ふるいたてものがてっきょされました。", exampleKorean: "후루이 타테모노가 텍쿄 사레마시타", exampleMeaning: "오래된 건물이 철거되었습니다.",
    breakdown: [
      { word: "建物", reading: "たてもの", meaning: "건물" }
    ] },
  { level: "N1", kanji: "撤収", reading: "てっしゅう", korean: "텟슈-", meaning: "철수",
    example: "部隊が撤収しました。", exampleReading: "ぶたいがてっしゅうしました。", exampleKorean: "부타이가 텟슈- 시마시타", exampleMeaning: "부대가 철수했습니다.",
    breakdown: [
      { word: "部隊", reading: "ぶたい", meaning: "부대" }
    ] },
  { level: "N1", kanji: "容認", reading: "ようにん", korean: "요-닌", meaning: "용인",
    example: "その行為は容認できません。", exampleReading: "そのこういはようにんできません。", exampleKorean: "소노 코-이와 요-닌 데키마셍", exampleMeaning: "그 행위는 용인할 수 없습니다.",
    breakdown: [
      { word: "行為", reading: "こうい", meaning: "행위" }
    ] },
  { level: "N1", kanji: "黙認", reading: "もくにん", korean: "모쿠닌", meaning: "묵인",
    example: "上司はミスを黙認しました。", exampleReading: "じょうしはミスをもくにんしました。", exampleKorean: "죠-시와 미스오 모쿠닌 시마시타", exampleMeaning: "상사는 실수를 묵인했습니다.",
    breakdown: [
      { word: "ミス", reading: "ミス", meaning: "실수" }
    ] },
  { level: "N1", kanji: "看過", reading: "かんか", korean: "칸카", meaning: "간과",
    example: "この問題を看過するわけにはいきません。", exampleReading: "このもんだいをかんかするわけにはいきません。", exampleKorean: "코노 몬다이오 칸카스루 와케니와 이키마셍", exampleMeaning: "이 문제를 간과할 수는 없습니다.",
    breakdown: [
      { word: "わけにはいきません", reading: "わけにはいきません", meaning: "~할 수는 없습니다" }
    ] },
  { level: "N1", kanji: "一任", reading: "いちにん", korean: "이치닌", meaning: "일임",
    example: "この件は彼に一任します。", exampleReading: "このけんはかれにいちにんします。", exampleKorean: "코노 켄와 카레니 이치닌 시마스", exampleMeaning: "이 건은 그에게 일임합니다.",
    breakdown: [
      { word: "この件", reading: "このけん", meaning: "이 건" }
    ] },
  { level: "N1", kanji: "委任", reading: "いにん", korean: "이닌", meaning: "위임",
    example: "権限を部下に委任しました。", exampleReading: "けんげんをぶかにいにんしました。", exampleKorean: "켄겡오 부카니 이닌 시마시타", exampleMeaning: "권한을 부하에게 위임했습니다.",
    breakdown: [
      { word: "権限", reading: "けんげん", meaning: "권한" }
    ] },
  { level: "N1", kanji: "委ねる", reading: "ゆだねる", korean: "유다네루", meaning: "맡기다",
    example: "判断を専門家に委ねます。", exampleReading: "はんだんをせんもんかにゆだねます。", exampleKorean: "한단오 센몬카니 유다네마스", exampleMeaning: "판단을 전문가에게 맡깁니다.",
    breakdown: [
      { word: "専門家", reading: "せんもんか", meaning: "전문가" }
    ] },
  { level: "N1", kanji: "賄う", reading: "まかなう", korean: "마카나우", meaning: "충당하다, 조달하다",
    example: "予算内で経費を賄います。", exampleReading: "よさんないでけいひをまかないます。", exampleKorean: "요산나이데 케-히오 마카나이마스", exampleMeaning: "예산 내에서 경비를 충당합니다.",
    breakdown: [
      { word: "予算内で", reading: "よさんないで", meaning: "예산 내에서" }
    ] },
  { level: "N1", kanji: "講じる", reading: "こうじる", korean: "코-지루", meaning: "강구하다",
    example: "対策を講じる必要があります。", exampleReading: "たいさくをこうじるひつようがあります。", exampleKorean: "타이사쿠오 코-지루 히츠요-가 아리마스", exampleMeaning: "대책을 강구할 필요가 있습니다.",
    breakdown: [
      { word: "対策", reading: "たいさく", meaning: "대책" }
    ] },
  { level: "N1", kanji: "図る", reading: "はかる", korean: "하카루", meaning: "도모하다, 꾀하다",
    example: "業務の効率化を図ります。", exampleReading: "ぎょうむのこうりつかをはかります。", exampleKorean: "교-무노 코-리츠카오 하카리마스", exampleMeaning: "업무의 효율화를 도모합니다.",
    breakdown: [
      { word: "効率化", reading: "こうりつか", meaning: "효율화" }
    ] },
  { level: "N1", kanji: "企てる", reading: "くわだてる", korean: "쿠와다테루", meaning: "꾀하다, 기도하다",
    example: "新規事業を企てています。", exampleReading: "しんきじぎょうをくわだてています。", exampleKorean: "신키 지교-오 쿠와다테테이마스", exampleMeaning: "신규 사업을 꾀하고 있습니다.",
    breakdown: [
      { word: "新規事業", reading: "しんきじぎょう", meaning: "신규 사업" }
    ] },
  { level: "N1", kanji: "目論む", reading: "もくろむ", korean: "모쿠로무", meaning: "꾀하다, 계획하다",
    example: "市場拡大を目論んでいます。", exampleReading: "しじょうかくだいをもくろんでいます。", exampleKorean: "시죠- 카쿠다이오 모쿠론데이마스", exampleMeaning: "시장 확대를 계획하고 있습니다.",
    breakdown: [
      { word: "市場拡大", reading: "しじょうかくだい", meaning: "시장 확대" }
    ] },
  { level: "N1", kanji: "遂げる", reading: "とげる", korean: "토게루", meaning: "이루다",
    example: "大きな発展を遂げました。", exampleReading: "おおきなはってんをとげました。", exampleKorean: "오-키나 핫텐오 토게마시타", exampleMeaning: "큰 발전을 이루었습니다.",
    breakdown: [
      { word: "発展", reading: "はってん", meaning: "발전" }
    ] },
  { level: "N1", kanji: "成し遂げる", reading: "なしとげる", korean: "나시토게루", meaning: "완수하다, 성취하다",
    example: "目標を成し遂げました。", exampleReading: "もくひょうをなしとげました。", exampleKorean: "모쿠효-오 나시토게마시타", exampleMeaning: "목표를 완수했습니다.",
    breakdown: [
      { word: "目標", reading: "もくひょう", meaning: "목표" }
    ] },
  { level: "N1", kanji: "見出す", reading: "みいだす", korean: "미이다스", meaning: "찾아내다",
    example: "新しい方法を見出しました。", exampleReading: "あたらしいほうほうをみいだしました。", exampleKorean: "아타라시- 호-호-오 미이다시마시타", exampleMeaning: "새로운 방법을 찾아냈습니다.",
    breakdown: [
      { word: "方法", reading: "ほうほう", meaning: "방법" }
    ] },
  { level: "N1", kanji: "突き止める", reading: "つきとめる", korean: "츠키토메루", meaning: "밝혀내다, 알아내다",
    example: "原因を突き止めました。", exampleReading: "げんいんをつきとめました。", exampleKorean: "겐잉오 츠키토메마시타", exampleMeaning: "원인을 밝혀냈습니다.",
    breakdown: [
      { word: "原因", reading: "げんいん", meaning: "원인" }
    ] },
  { level: "N1", kanji: "解明", reading: "かいめい", korean: "카이메-", meaning: "해명",
    example: "事故の原因を解明します。", exampleReading: "じこのげんいんをかいめいします。", exampleKorean: "지코노 겐잉오 카이메- 시마스", exampleMeaning: "사고의 원인을 해명합니다.",
    breakdown: [
      { word: "事故", reading: "じこ", meaning: "사고" }
    ] },
  { level: "N1", kanji: "究明", reading: "きゅうめい", korean: "큐-메-", meaning: "규명",
    example: "真相を究明します。", exampleReading: "しんそうをきゅうめいします。", exampleKorean: "신소-오 큐-메- 시마스", exampleMeaning: "진상을 규명합니다.",
    breakdown: [
      { word: "真相", reading: "しんそう", meaning: "진상" }
    ] },
  { level: "N1", kanji: "追及", reading: "ついきゅう", korean: "츠이큐-", meaning: "추궁",
    example: "責任を追及されました。", exampleReading: "せきにんをついきゅうされました。", exampleKorean: "세키닌오 츠이큐- 사레마시타", exampleMeaning: "책임을 추궁당했습니다.",
    breakdown: [
      { word: "責任", reading: "せきにん", meaning: "책임" }
    ] },
  { level: "N1", kanji: "追求", reading: "ついきゅう", korean: "츠이큐-", meaning: "추구",
    example: "利益を追求します。", exampleReading: "りえきをついきゅうします。", exampleKorean: "리에키오 츠이큐- 시마스", exampleMeaning: "이익을 추구합니다.",
    breakdown: [
      { word: "利益", reading: "りえき", meaning: "이익" }
    ] },
  { level: "N1", kanji: "追跡", reading: "ついせき", korean: "츠이세키", meaning: "추적",
    example: "犯人を追跡しています。", exampleReading: "はんにんをついせきしています。", exampleKorean: "한닌오 츠이세키 시테이마스", exampleMeaning: "범인을 추적하고 있습니다.",
    breakdown: [
      { word: "犯人", reading: "はんにん", meaning: "범인" }
    ] },
  { level: "N1", kanji: "阻止", reading: "そし", korean: "소시", meaning: "저지",
    example: "計画を阻止しようとしました。", exampleReading: "けいかくをそししようとしました。", exampleKorean: "케-카쿠오 소시시요-토 시마시타", exampleMeaning: "계획을 저지하려고 했습니다.",
    breakdown: [
      { word: "計画", reading: "けいかく", meaning: "계획" }
    ] },
  { level: "N1", kanji: "制止", reading: "せいし", korean: "세-시", meaning: "제지",
    example: "危険な行動を制止しました。", exampleReading: "きけんなこうどうをせいししました。", exampleKorean: "키켄나 코-도-오 세-시 시마시타", exampleMeaning: "위험한 행동을 제지했습니다.",
    breakdown: [
      { word: "危険な行動", reading: "きけんなこうどう", meaning: "위험한 행동" }
    ] },
  { level: "N1", kanji: "抑止", reading: "よくし", korean: "요쿠시", meaning: "억지",
    example: "犯罪を抑止する効果があります。", exampleReading: "はんざいをよくしするこうかがあります。", exampleKorean: "한자이오 요쿠시스루 코-카가 아리마스", exampleMeaning: "범죄를 억지하는 효과가 있습니다.",
    breakdown: [
      { word: "犯罪", reading: "はんざい", meaning: "범죄" }
    ] },
  { level: "N1", kanji: "牽制", reading: "けんせい", korean: "켄세-", meaning: "견제",
    example: "相手チームを牽制します。", exampleReading: "あいてチームをけんせいします。", exampleKorean: "아이테 치-무오 켄세- 시마스", exampleMeaning: "상대 팀을 견제합니다.",
    breakdown: [
      { word: "相手チーム", reading: "あいてチーム", meaning: "상대 팀" }
    ] },
  { level: "N1", kanji: "辛うじて", reading: "かろうじて", korean: "카로우지테", meaning: "간신히",
    example: "辛うじて試験に合格しました。", exampleReading: "かろうじてしけんにごうかくしました。", exampleKorean: "카로우지테 시켄니 고-카쿠 시마시타", exampleMeaning: "간신히 시험에 합격했습니다.",
    breakdown: [
      { word: "試験", reading: "しけん", meaning: "시험" }
    ] },
  { level: "N1", kanji: "危うい", reading: "あやうい", korean: "아야우이", meaning: "위태롭다",
    example: "会社の経営は危うい状態です。", exampleReading: "かいしゃのけいえいはあやういじょうたいです。", exampleKorean: "카이샤노 케-에-와 아야우이 죠-타이데스", exampleMeaning: "회사의 경영은 위태로운 상태입니다.",
    breakdown: [
      { word: "経営", reading: "けいえい", meaning: "경영" }
    ] },
  { level: "N1", kanji: "危うく", reading: "あやうく", korean: "아야우쿠", meaning: "하마터면",
    example: "危うく事故に遭うところでした。", exampleReading: "あやうくじこにあうところでした。", exampleKorean: "아야우쿠 지코니 아우 토코로데시타", exampleMeaning: "하마터면 사고를 당할 뻔했습니다.",
    breakdown: [
      { word: "事故に遭う", reading: "じこにあう", meaning: "사고를 당하다" }
    ] },
  { level: "N1", kanji: "際どい", reading: "きわどい", korean: "키와도이", meaning: "아슬아슬하다",
    example: "際どいところで間に合いました。", exampleReading: "きわどいところでまにあいました。", exampleKorean: "키와도이 토코로데 마니아이마시타", exampleMeaning: "아슬아슬하게 시간에 맞췄습니다.",
    breakdown: [
      { word: "間に合いました", reading: "まにあいました", meaning: "시간에 맞췄습니다" }
    ] },
  { level: "N1", kanji: "危惧", reading: "きぐ", korean: "키구", meaning: "우려, 걱정",
    example: "将来を危惧する声があります。", exampleReading: "しょうらいをきぐするこえがあります。", exampleKorean: "쇼-라이오 키구스루 코에가 아리마스", exampleMeaning: "장래를 우려하는 목소리가 있습니다.",
    breakdown: [
      { word: "将来", reading: "しょうらい", meaning: "장래" }
    ] },
  { level: "N1", kanji: "懸案", reading: "けんあん", korean: "켄안", meaning: "현안",
    example: "懸案の問題を解決します。", exampleReading: "けんあんのもんだいをかいけつします。", exampleKorean: "켄안노 몬다이오 카이케츠 시마스", exampleMeaning: "현안 문제를 해결합니다.",
    breakdown: [
      { word: "問題", reading: "もんだい", meaning: "문제" }
    ] },
  { level: "N1", kanji: "難航", reading: "なんこう", korean: "난코-", meaning: "난항",
    example: "交渉が難航しています。", exampleReading: "こうしょうがなんこうしています。", exampleKorean: "코-쇼-가 난코- 시테이마스", exampleMeaning: "교섭이 난항을 겪고 있습니다.",
    breakdown: [
      { word: "交渉", reading: "こうしょう", meaning: "교섭" }
    ] },
  { level: "N1", kanji: "頓挫", reading: "とんざ", korean: "톤자", meaning: "좌절, 차질",
    example: "計画が頓挫しました。", exampleReading: "けいかくがとんざしました。", exampleKorean: "케-카쿠가 톤자 시마시타", exampleMeaning: "계획이 좌절되었습니다.",
    breakdown: [
      { word: "計画", reading: "けいかく", meaning: "계획" }
    ] },
  { level: "N1", kanji: "挫折", reading: "ざせつ", korean: "자세츠", meaning: "좌절",
    example: "夢を挫折しそうになりました。", exampleReading: "ゆめをざせつしそうになりました。", exampleKorean: "유메오 자세츠시소-니 나리마시타", exampleMeaning: "꿈을 좌절할 뻔했습니다.",
    breakdown: [
      { word: "夢", reading: "ゆめ", meaning: "꿈" }
    ] },
  { level: "N1", kanji: "挫ける", reading: "くじける", korean: "쿠지케루", meaning: "꺾이다, 좌절하다",
    example: "何度失敗しても挫けません。", exampleReading: "なんどしっぱいしてもくじけません。", exampleKorean: "난도 십파이시테모 쿠지케마셍", exampleMeaning: "몇 번 실패해도 꺾이지 않습니다.",
    breakdown: [
      { word: "何度", reading: "なんど", meaning: "몇 번" }
    ] },
  { level: "N1", kanji: "痛手", reading: "いたで", korean: "이타데", meaning: "타격, 상처",
    example: "大きな痛手を受けました。", exampleReading: "おおきないたでをうけました。", exampleKorean: "오-키나 이타데오 우케마시타", exampleMeaning: "큰 타격을 받았습니다.",
    breakdown: [
      { word: "受けました", reading: "うけました", meaning: "받았습니다" }
    ] },
  { level: "N1", kanji: "傷つく", reading: "きずつく", korean: "키즈츠쿠", meaning: "상처받다",
    example: "彼の言葉に傷つきました。", exampleReading: "かれのことばにきずつきました。", exampleKorean: "카레노 코토바니 키즈츠키마시타", exampleMeaning: "그의 말에 상처받았습니다.",
    breakdown: [
      { word: "言葉", reading: "ことば", meaning: "말" }
    ] },
  { level: "N1", kanji: "傷つける", reading: "きずつける", korean: "키즈츠케루", meaning: "상처주다",
    example: "人を傷つける言葉に気をつけます。", exampleReading: "ひとをきずつけることばにきをつけます。", exampleKorean: "히토오 키즈츠케루 코토바니 키오 츠케마스", exampleMeaning: "사람에게 상처주는 말을 조심합니다.",
    breakdown: [
      { word: "気をつけます", reading: "きをつけます", meaning: "조심합니다" }
    ] },
  { level: "N1", kanji: "癒す", reading: "いやす", korean: "이야스", meaning: "치유하다",
    example: "音楽が心を癒します。", exampleReading: "おんがくがこころをいやします。", exampleKorean: "옹가쿠가 코코로오 이야시마스", exampleMeaning: "음악이 마음을 치유합니다.",
    breakdown: [
      { word: "心", reading: "こころ", meaning: "마음" }
    ] },
  { level: "N1", kanji: "和らげる", reading: "やわらげる", korean: "야와라게루", meaning: "완화하다",
    example: "痛みを和らげる薬です。", exampleReading: "いたみをやわらげるくすりです。", exampleKorean: "이타미오 야와라게루 쿠스리데스", exampleMeaning: "통증을 완화하는 약입니다.",
    breakdown: [
      { word: "痛み", reading: "いたみ", meaning: "통증" }
    ] },
  { level: "N1", kanji: "和らぐ", reading: "やわらぐ", korean: "야와라구", meaning: "누그러지다",
    example: "寒さが少し和らぎました。", exampleReading: "さむさがすこしやわらぎました。", exampleKorean: "사무사가 스코시 야와라기마시타", exampleMeaning: "추위가 조금 누그러졌습니다.",
    breakdown: [
      { word: "寒さ", reading: "さむさ", meaning: "추위" }
    ] },
  { level: "N1", kanji: "緩む", reading: "ゆるむ", korean: "유루무", meaning: "느슨해지다",
    example: "ネジが緩んでいます。", exampleReading: "ネジがゆるんでいます。", exampleKorean: "네지가 유룬데이마스", exampleMeaning: "나사가 느슨해져 있습니다.",
    breakdown: [
      { word: "ネジ", reading: "ネジ", meaning: "나사" }
    ] },
  { level: "N1", kanji: "緩める", reading: "ゆるめる", korean: "유루메루", meaning: "느슨하게 하다",
    example: "スピードを緩めてください。", exampleReading: "スピードをゆるめてください。", exampleKorean: "스피-도오 유루메테쿠다사이", exampleMeaning: "속도를 늦춰 주세요.",
    breakdown: [
      { word: "スピード", reading: "スピード", meaning: "속도" }
    ] },
  { level: "N1", kanji: "締結", reading: "ていけつ", korean: "테-케츠", meaning: "체결",
    example: "契約を締結しました。", exampleReading: "けいやくをていけつしました。", exampleKorean: "케-야쿠오 테-케츠 시마시타", exampleMeaning: "계약을 체결했습니다.",
    breakdown: [
      { word: "契約", reading: "けいやく", meaning: "계약" }
    ] },
  { level: "N1", kanji: "発端", reading: "ほったん", korean: "홋탄", meaning: "발단",
    example: "事件の発端を調べます。", exampleReading: "じけんのほったんをしらべます。", exampleKorean: "지켄노 홋탄오 시라베마스", exampleMeaning: "사건의 발단을 조사합니다.",
    breakdown: [
      { word: "事件", reading: "じけん", meaning: "사건" }
    ] },
  { level: "N1", kanji: "布石", reading: "ふせき", korean: "후세키", meaning: "포석",
    example: "将来のための布石を打ちます。", exampleReading: "しょうらいのためのふせきをうちます。", exampleKorean: "쇼-라이노 타메노 후세키오 우치마스", exampleMeaning: "미래를 위한 포석을 둡니다.",
    breakdown: [
      { word: "将来のための", reading: "しょうらいのための", meaning: "미래를 위한" }
    ] },
  { level: "N1", kanji: "伏線", reading: "ふくせん", korean: "후쿠센", meaning: "복선",
    example: "この物語には伏線があります。", exampleReading: "このものがたりにはふくせんがあります。", exampleKorean: "코노 모노가타리니와 후쿠센가 아리마스", exampleMeaning: "이 이야기에는 복선이 있습니다.",
    breakdown: [
      { word: "物語", reading: "ものがたり", meaning: "이야기" }
    ] },
  { level: "N1", kanji: "兆し", reading: "きざし", korean: "키자시", meaning: "조짐",
    example: "景気回復の兆しが見えます。", exampleReading: "けいきかいふくのきざしがみえます。", exampleKorean: "케-키 카이후쿠노 키자시가 미에마스", exampleMeaning: "경기 회복의 조짐이 보입니다.",
    breakdown: [
      { word: "景気回復", reading: "けいきかいふく", meaning: "경기 회복" }
    ] },
  { level: "N1", kanji: "予兆", reading: "よちょう", korean: "요쵸-", meaning: "예조, 전조",
    example: "地震の予兆かもしれません。", exampleReading: "じしんのよちょうかもしれません。", exampleKorean: "지신노 요쵸-카모 시레마셍", exampleMeaning: "지진의 전조일지도 모릅니다.",
    breakdown: [
      { word: "地震", reading: "じしん", meaning: "지진" }
    ] },
  { level: "N1", kanji: "前触れ", reading: "まえぶれ", korean: "마에부레", meaning: "전조, 예고",
    example: "何の前触れもなく起こりました。", exampleReading: "なんのまえぶれもなくおこりました。", exampleKorean: "난노 마에부레모 나쿠 오코리마시타", exampleMeaning: "아무런 예고도 없이 일어났습니다.",
    breakdown: [
      { word: "起こりました", reading: "おこりました", meaning: "일어났습니다" }
    ] },
  { level: "N1", kanji: "予感", reading: "よかん", korean: "요칸", meaning: "예감",
    example: "悪い予感がします。", exampleReading: "わるいよかんがします。", exampleKorean: "와루이 요칸가 시마스", exampleMeaning: "나쁜 예감이 듭니다.",
    breakdown: [
      { word: "悪い", reading: "わるい", meaning: "나쁘다" }
    ] },
  { level: "N1", kanji: "直感", reading: "ちょっかん", korean: "촉칸", meaning: "직감",
    example: "直感に従って決めました。", exampleReading: "ちょっかんにしたがってきめました。", exampleKorean: "촉칸니 시타갓테 키메마시타", exampleMeaning: "직감에 따라 결정했습니다.",
    breakdown: [
      { word: "従って", reading: "したがって", meaning: "따라" }
    ] },
  { level: "N1", kanji: "勘", reading: "かん", korean: "칸", meaning: "감, 직감",
    example: "彼は勘がいいです。", exampleReading: "かれはかんがいいです。", exampleKorean: "카레와 칸가 이-데스", exampleMeaning: "그는 감이 좋습니다.",
    breakdown: [
      { word: "いいです", reading: "いいです", meaning: "좋습니다" }
    ] },
  { level: "N1", kanji: "見当", reading: "けんとう", korean: "켄토-", meaning: "짐작, 예상",
    example: "見当がつきません。", exampleReading: "けんとうがつきません。", exampleKorean: "켄토-가 츠키마셍", exampleMeaning: "짐작이 가지 않습니다.",
    breakdown: [
      { word: "つきません", reading: "つきません", meaning: "가지 않습니다" }
    ] },
  { level: "N1", kanji: "目処", reading: "めど", korean: "메도", meaning: "전망, 목표시점",
    example: "完成の目処が立ちました。", exampleReading: "かんせいのめどがたちました。", exampleKorean: "칸세-노 메도가 타치마시타", exampleMeaning: "완성의 전망이 섰습니다.",
    breakdown: [
      { word: "完成", reading: "かんせい", meaning: "완성" }
    ] },
  { level: "N1", kanji: "潔白", reading: "けっぱく", korean: "켓파쿠", meaning: "결백",
    example: "彼は潔白を主張しています。", exampleReading: "かれはけっぱくをしゅちょうしています。", exampleKorean: "카레와 켓파쿠오 슈쵸- 시테 이마스", exampleMeaning: "그는 결백을 주장하고 있습니다.",
    breakdown: [
      { word: "主張", reading: "しゅちょう", meaning: "주장" }
    ] },
  { level: "N1", kanji: "疑惑", reading: "ぎわく", korean: "기와쿠", meaning: "의혹",
    example: "汚職の疑惑が浮上しました。", exampleReading: "おしょくのぎわくがふじょうしました。", exampleKorean: "오쇼쿠노 기와쿠가 후죠- 시마시타", exampleMeaning: "비리 의혹이 부상했습니다.",
    breakdown: [
      { word: "汚職", reading: "おしょく", meaning: "비리, 오직" }
    ] },
  { level: "N1", kanji: "嫌疑", reading: "けんぎ", korean: "켄기", meaning: "혐의",
    example: "嫌疑をかけられています。", exampleReading: "けんぎをかけられています。", exampleKorean: "켄기오 카케라레테 이마스", exampleMeaning: "혐의를 받고 있습니다.",
    breakdown: [
      { word: "かけられて", reading: "かけられて", meaning: "(혐의를) 받아서" }
    ] },
  { level: "N1", kanji: "供述", reading: "きょうじゅつ", korean: "쿄-쥬츠", meaning: "진술",
    example: "警察で供述しました。", exampleReading: "けいさつできょうじゅつしました。", exampleKorean: "케-사츠데 쿄-쥬츠 시마시타", exampleMeaning: "경찰에서 진술했습니다.",
    breakdown: [
      { word: "警察", reading: "けいさつ", meaning: "경찰" }
    ] },
  { level: "N1", kanji: "自白", reading: "じはく", korean: "지하쿠", meaning: "자백",
    example: "犯人がついに自白しました。", exampleReading: "はんにんがついにじはくしました。", exampleKorean: "한닌가 츠이니 지하쿠 시마시타", exampleMeaning: "범인이 마침내 자백했습니다.",
    breakdown: [
      { word: "犯人", reading: "はんにん", meaning: "범인" }
    ] },
  { level: "N1", kanji: "証言", reading: "しょうげん", korean: "쇼-겐", meaning: "증언",
    example: "目撃者が証言しました。", exampleReading: "もくげきしゃがしょうげんしました。", exampleKorean: "모쿠게키샤가 쇼-겐 시마시타", exampleMeaning: "목격자가 증언했습니다.",
    breakdown: [
      { word: "目撃者", reading: "もくげきしゃ", meaning: "목격자" }
    ] },
  { level: "N1", kanji: "尋問", reading: "じんもん", korean: "진몬", meaning: "심문",
    example: "容疑者を尋問しました。", exampleReading: "ようぎしゃをじんもんしました。", exampleKorean: "요-기샤오 진몬 시마시타", exampleMeaning: "용의자를 심문했습니다.",
    breakdown: [
      { word: "容疑者", reading: "ようぎしゃ", meaning: "용의자" }
    ] },
  { level: "N1", kanji: "拘束", reading: "こうそく", korean: "코-소쿠", meaning: "구속",
    example: "身柄を拘束されました。", exampleReading: "みがらをこうそくされました。", exampleKorean: "미가라오 코-소쿠사레마시타", exampleMeaning: "신병이 구속되었습니다.",
    breakdown: [
      { word: "身柄", reading: "みがら", meaning: "신병" }
    ] },
  { level: "N1", kanji: "釈放", reading: "しゃくほう", korean: "샤쿠호-", meaning: "석방",
    example: "容疑者が釈放されました。", exampleReading: "ようぎしゃがしゃくほうされました。", exampleKorean: "요-기샤가 샤쿠호- 사레마시타", exampleMeaning: "용의자가 석방되었습니다.",
    breakdown: [
      { word: "容疑者", reading: "ようぎしゃ", meaning: "용의자" }
    ] },
  { level: "N1", kanji: "起訴", reading: "きそ", korean: "키소", meaning: "기소",
    example: "検察が起訴しました。", exampleReading: "けんさつがきそしました。", exampleKorean: "켄사츠가 키소 시마시타", exampleMeaning: "검찰이 기소했습니다.",
    breakdown: [
      { word: "検察", reading: "けんさつ", meaning: "검찰" }
    ] },
  { level: "N1", kanji: "訴訟", reading: "そしょう", korean: "소쇼-", meaning: "소송",
    example: "損害賠償の訴訟を起こしました。", exampleReading: "そんがいばいしょうのそしょうをおこしました。", exampleKorean: "손가이바이쇼-노 소쇼-오 오코시마시타", exampleMeaning: "손해배상 소송을 제기했습니다.",
    breakdown: [
      { word: "起こしました", reading: "おこしました", meaning: "일으켰습니다, 제기했습니다" }
    ] },
  { level: "N1", kanji: "裁定", reading: "さいてい", korean: "사이테-", meaning: "재정, 판정",
    example: "委員会が裁定を下しました。", exampleReading: "いいんかいがさいていをくだしました。", exampleKorean: "이인카이가 사이테-오 쿠다시마시타", exampleMeaning: "위원회가 판정을 내렸습니다.",
    breakdown: [
      { word: "委員会", reading: "いいんかい", meaning: "위원회" }
    ] },
  { level: "N1", kanji: "断行", reading: "だんこう", korean: "단코-", meaning: "단행",
    example: "改革を断行しました。", exampleReading: "かいかくをだんこうしました。", exampleKorean: "카이카쿠오 단코- 시마시타", exampleMeaning: "개혁을 단행했습니다.",
    breakdown: [
      { word: "改革", reading: "かいかく", meaning: "개혁" }
    ] },
  { level: "N1", kanji: "敢行", reading: "かんこう", korean: "칸코-", meaning: "감행",
    example: "悪天候の中、決行を敢行しました。", exampleReading: "あくてんこうのなか、けっこうをかんこうしました。", exampleKorean: "아쿠텐코-노 나카, 켁코-오 칸코- 시마시타", exampleMeaning: "악천후 속에서 결행을 감행했습니다.",
    breakdown: [
      { word: "悪天候", reading: "あくてんこう", meaning: "악천후" }
    ] },
  { level: "N1", kanji: "決行", reading: "けっこう", korean: "켁코-", meaning: "결행",
    example: "計画通りに決行します。", exampleReading: "けいかくどおりにけっこうします。", exampleKorean: "케-카쿠도-리니 켁코- 시마스", exampleMeaning: "계획대로 결행합니다.",
    breakdown: [
      { word: "計画通り", reading: "けいかくどおり", meaning: "계획대로" }
    ] },
  { level: "N1", kanji: "精密", reading: "せいみつ", korean: "세-미츠", meaning: "정밀",
    example: "精密な検査を受けました。", exampleReading: "せいみつなけんさをうけました。", exampleKorean: "세-미츠나 켄사오 우케마시타", exampleMeaning: "정밀 검사를 받았습니다.",
    breakdown: [
      { word: "検査", reading: "けんさ", meaning: "검사" }
    ] },
  { level: "N1", kanji: "精査", reading: "せいさ", korean: "세-사", meaning: "정밀조사",
    example: "原因を精査しています。", exampleReading: "げんいんをせいさしています。", exampleKorean: "겡잉오 세-사 시테 이마스", exampleMeaning: "원인을 정밀 조사하고 있습니다.",
    breakdown: [
      { word: "原因", reading: "げんいん", meaning: "원인" }
    ] },
  { level: "N1", kanji: "吟味", reading: "ぎんみ", korean: "긴미", meaning: "음미, 검토",
    example: "材料をよく吟味して選びました。", exampleReading: "ざいりょうをよくぎんみしてえらびました。", exampleKorean: "자이료-오 요쿠 긴미시테 에라비마시타", exampleMeaning: "재료를 잘 검토해서 골랐습니다.",
    breakdown: [
      { word: "材料", reading: "ざいりょう", meaning: "재료" }
    ] },
  { level: "N1", kanji: "熟考", reading: "じゅっこう", korean: "쥭코-", meaning: "숙고",
    example: "熟考の末、決断しました。", exampleReading: "じゅっこうのすえ、けつだんしました。", exampleKorean: "쥭코-노 스에, 케츠단 시마시타", exampleMeaning: "숙고 끝에 결단했습니다.",
    breakdown: [
      { word: "末", reading: "すえ", meaning: "끝" }
    ] },
  { level: "N1", kanji: "熟慮", reading: "じゅくりょ", korean: "쥬쿠료", meaning: "숙려",
    example: "熟慮を重ねて決めました。", exampleReading: "じゅくりょをかさねてきめました。", exampleKorean: "쥬쿠료오 카사네테 키메마시타", exampleMeaning: "숙려를 거듭해서 정했습니다.",
    breakdown: [
      { word: "重ねて", reading: "かさねて", meaning: "거듭해서" }
    ] },
  { level: "N1", kanji: "再考", reading: "さいこう", korean: "사이코-", meaning: "재고",
    example: "計画を再考してください。", exampleReading: "けいかくをさいこうしてください。", exampleKorean: "케-카쿠오 사이코- 시테 쿠다사이", exampleMeaning: "계획을 재고해 주세요.",
    breakdown: [
      { word: "計画", reading: "けいかく", meaning: "계획" }
    ] },
  { level: "N1", kanji: "察知", reading: "さっち", korean: "삿치", meaning: "알아챔, 察知",
    example: "危険をいち早く察知しました。", exampleReading: "きけんをいちはやくさっちしました。", exampleKorean: "키켕오 이치하야쿠 삿치 시마시타", exampleMeaning: "위험을 재빨리 알아챘습니다.",
    breakdown: [
      { word: "いち早く", reading: "いちはやく", meaning: "재빨리" }
    ] },
  { level: "N1", kanji: "予知", reading: "よち", korean: "요치", meaning: "예지",
    example: "地震を予知するのは困難です。", exampleReading: "じしんをよちするのはこんなんです。", exampleKorean: "지싱오 요치스루노와 콘난데스", exampleMeaning: "지진을 예지하는 것은 곤란합니다.",
    breakdown: [
      { word: "困難", reading: "こんなん", meaning: "곤란" }
    ] },
  { level: "N1", kanji: "先見", reading: "せんけん", korean: "센켄", meaning: "선견",
    example: "彼には先見の目がありました。", exampleReading: "かれにはせんけんのめがありました。", exampleKorean: "카레니와 센켄노 메가 아리마시타", exampleMeaning: "그에게는 선견의 눈이 있었습니다.",
    breakdown: [
      { word: "目", reading: "め", meaning: "눈, 안목" }
    ] },
  { level: "N1", kanji: "明晰", reading: "めいせき", korean: "메-세키", meaning: "명석",
    example: "頭脳明晰な人です。", exampleReading: "ずのうめいせきなひとです。", exampleKorean: "즈노- 메-세키나 히토데스", exampleMeaning: "두뇌가 명석한 사람입니다.",
    breakdown: [
      { word: "頭脳", reading: "ずのう", meaning: "두뇌" }
    ] },
  { level: "N1", kanji: "秀でる", reading: "ひいでる", korean: "히이데루", meaning: "뛰어나다",
    example: "彼は語学に秀でています。", exampleReading: "かれはごがくにひいでています。", exampleKorean: "카레와 고가쿠니 히이데테 이마스", exampleMeaning: "그는 어학에 뛰어납니다.",
    breakdown: [
      { word: "語学", reading: "ごがく", meaning: "어학" }
    ] },
  { level: "N1", kanji: "抜きん出る", reading: "ぬきんでる", korean: "누킨데루", meaning: "두각을 나타내다",
    example: "彼女は実力で抜きん出ています。", exampleReading: "かのじょはじつりょくでぬきんでています。", exampleKorean: "카노죠와 지츠료쿠데 누킨데테 이마스", exampleMeaning: "그녀는 실력으로 두각을 나타내고 있습니다.",
    breakdown: [
      { word: "実力", reading: "じつりょく", meaning: "실력" }
    ] },
  { level: "N1", kanji: "突出", reading: "とっしゅつ", korean: "톳슈츠", meaning: "돌출, 두드러짐",
    example: "一人だけ突出した成績でした。", exampleReading: "ひとりだけとっしゅつしたせいせきでした。", exampleKorean: "히토리다케 톳슈츠시타 세-세키데시타", exampleMeaning: "혼자만 두드러진 성적이었습니다.",
    breakdown: [
      { word: "成績", reading: "せいせき", meaning: "성적" }
    ] },
  { level: "N1", kanji: "突飛", reading: "とっぴ", korean: "톳피", meaning: "엉뚱함",
    example: "突飛な考えだと言われました。", exampleReading: "とっぴなかんがえだといわれました。", exampleKorean: "톳피나 캉가에다토 이와레마시타", exampleMeaning: "엉뚱한 생각이라는 말을 들었습니다.",
    breakdown: [
      { word: "考え", reading: "かんがえ", meaning: "생각" }
    ] },
  { level: "N1", kanji: "奇抜", reading: "きばつ", korean: "키바츠", meaning: "기발함",
    example: "奇抜なアイデアが採用されました。", exampleReading: "きばつなアイデアがさいようされました。", exampleKorean: "키바츠나 아이데아가 사이요- 사레마시타", exampleMeaning: "기발한 아이디어가 채택되었습니다.",
    breakdown: [
      { word: "採用", reading: "さいよう", meaning: "채택, 채용" }
    ] },
];
