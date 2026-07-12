// 일본어 접속·연결 표현 정리. WHY: 단순 단어가 아니라 문법 패턴이라 VOCAB과 분리된 배열로 관리.
// 각 항목: category(분류), kanji(표현), reading, korean(발음), meaning(뜻/뉘앙스),
//          example, exampleReading, exampleKorean, exampleMeaning,
//          breakdown(예문 속 핵심 요소 설명 - 표현 자체 말고 다른 문법 요소도 짚어줌)
const CONNECTIVES = [
  // ---------- 1. 이유·원인 ----------
  { category: "이유·원인", kanji: "から", reading: "から", korean: "카라", meaning: "~니까, ~때문에 (주관적 이유, 캐주얼~격식체 모두 사용)",
    example: "疲れたから、早く寝ます。", exampleReading: "つかれたから、はやくねます。", exampleKorean: "츠카레타카라 하야쿠 네마스", exampleMeaning: "피곤하니까 일찍 잡니다.",
    breakdown: [
      { word: "疲れた", reading: "つかれた", meaning: "피곤했다 (疲れる의 과거형)" },
      { word: "から", reading: "から", meaning: "~니까 (주관적 이유)" },
      { word: "早く", reading: "はやく", meaning: "일찍, 빨리" },
    ] },
  { category: "이유·원인", kanji: "ので", reading: "ので", korean: "노데", meaning: "~해서 (부드럽고 정중한 어감, 객관적 이유)",
    example: "雨が降っているので、傘を持って行きます。", exampleReading: "あめがふっているので、かさをもっていきます。", exampleKorean: "아메가 훗테이루노데 카사오 못테 이키마스", exampleMeaning: "비가 오고 있어서 우산을 가지고 갑니다.",
    breakdown: [
      { word: "降っている", reading: "ふっている", meaning: "내리고 있다 (진행형)" },
      { word: "ので", reading: "ので", meaning: "~해서 (객관적·정중한 이유)" },
      { word: "持って行きます", reading: "もっていきます", meaning: "가지고 갑니다" },
    ] },
  { category: "이유·원인", kanji: "ため(に)", reading: "ため(に)", korean: "타메(니)", meaning: "~때문에 (격식체, 문어체)",
    example: "台風のため、電車が止まっています。", exampleReading: "たいふうのため、でんしゃがとまっています。", exampleKorean: "타이후-노 타메 덴샤가 토맛테이마스", exampleMeaning: "태풍 때문에 전철이 멈춰 있습니다.",
    breakdown: [
      { word: "台風", reading: "たいふう", meaning: "태풍" },
      { word: "のため", reading: "のため", meaning: "~때문에 (명사+の+ため)" },
      { word: "止まっています", reading: "とまっています", meaning: "멈춰 있습니다" },
    ] },
  { category: "이유·원인", kanji: "おかげで", reading: "おかげで", korean: "오카게데", meaning: "~덕분에 (긍정적 이유)",
    example: "先生のおかげで、試験に合格しました。", exampleReading: "せんせいのおかげで、しけんにごうかくしました。", exampleKorean: "센세-노 오카게데 시켄니 고-카쿠 시마시타", exampleMeaning: "선생님 덕분에 시험에 합격했습니다.",
    breakdown: [
      { word: "先生の", reading: "せんせいの", meaning: "선생님의" },
      { word: "おかげで", reading: "おかげで", meaning: "~덕분에 (긍정적 결과의 이유)" },
      { word: "合格しました", reading: "ごうかくしました", meaning: "합격했습니다" },
    ] },
  { category: "이유·원인", kanji: "せいで", reading: "せいで", korean: "세이데", meaning: "~탓에 (부정적 이유)",
    example: "寝坊したせいで、遅刻しました。", exampleReading: "ねぼうしたせいで、ちこくしました。", exampleKorean: "네보- 시타 세이데 치코쿠 시마시타", exampleMeaning: "늦잠 잔 탓에 지각했습니다.",
    breakdown: [
      { word: "寝坊した", reading: "ねぼうした", meaning: "늦잠 잤다" },
      { word: "せいで", reading: "せいで", meaning: "~탓에 (부정적 결과의 이유)" },
      { word: "遅刻しました", reading: "ちこくしました", meaning: "지각했습니다" },
    ] },
  { category: "이유·원인", kanji: "によって", reading: "によって", korean: "니욧테", meaning: "~에 의해, ~에 따라",
    example: "地震によって、多くの建物が壊れました。", exampleReading: "じしんによって、おおくのたてものがこわれました。", exampleKorean: "지신니욧테 오-쿠노 타테모노가 코와레마시타", exampleMeaning: "지진으로 인해 많은 건물이 무너졌습니다.",
    breakdown: [
      { word: "地震", reading: "じしん", meaning: "지진" },
      { word: "によって", reading: "によって", meaning: "~에 의해 (원인·수단)" },
      { word: "壊れました", reading: "こわれました", meaning: "무너졌습니다 (壊れる의 과거형)" },
    ] },
  { category: "이유·원인", kanji: "せいか", reading: "せいか", korean: "세이카", meaning: "~탓인지 (원인이 불확실할 때)",
    example: "年のせいか、最近疲れやすいです。", exampleReading: "としのせいか、さいきんつかれやすいです。", exampleKorean: "토시노 세이카 사이킨 츠카레야스이데스", exampleMeaning: "나이 탓인지 요즘 쉽게 피곤합니다.",
    breakdown: [
      { word: "年の", reading: "としの", meaning: "나이의" },
      { word: "せいか", reading: "せいか", meaning: "~탓인지 (원인 불확실)" },
      { word: "疲れやすい", reading: "つかれやすい", meaning: "쉽게 피곤해지다 (동사+やすい)" },
    ] },

  // ---------- 2. 역접 ----------
  { category: "역접", kanji: "が", reading: "が", korean: "가", meaning: "~지만 (담백, 격식체에도 사용)",
    example: "この店は安いが、おいしいです。", exampleReading: "このみせはやすいが、おいしいです。", exampleKorean: "코노 미세와 야스이가 오이시-데스", exampleMeaning: "이 가게는 싸지만 맛있습니다.",
    breakdown: [
      { word: "安い", reading: "やすい", meaning: "싸다" },
      { word: "が", reading: "が", meaning: "~지만 (역접, 담백한 어감)" },
    ] },
  { category: "역접", kanji: "けど / けれど(も)", reading: "けど / けれど(も)", korean: "케도 / 케레도(모)", meaning: "~지만 (캐주얼→격식 순으로 격식도가 높아짐)",
    example: "行きたいけど、時間がありません。", exampleReading: "いきたいけど、じかんがありません。", exampleKorean: "이키타이케도 지캉가 아리마셍", exampleMeaning: "가고 싶지만 시간이 없습니다.",
    breakdown: [
      { word: "行きたい", reading: "いきたい", meaning: "가고 싶다 (行く+たい)" },
      { word: "けど", reading: "けど", meaning: "~지만 (けれども의 캐주얼형)" },
    ] },
  { category: "역접", kanji: "のに", reading: "のに", korean: "노니", meaning: "~는데도 (의외성·불만 뉘앙스)",
    example: "頑張ったのに、失敗しました。", exampleReading: "がんばったのに、しっぱいしました。", exampleKorean: "감밧타노니 십파이 시마시타", exampleMeaning: "열심히 했는데도 실패했습니다.",
    breakdown: [
      { word: "頑張った", reading: "がんばった", meaning: "열심히 했다" },
      { word: "のに", reading: "のに", meaning: "~는데도 (기대에 어긋난 결과)" },
    ] },
  { category: "역접", kanji: "しかし", reading: "しかし", korean: "시카시", meaning: "그러나 (문어체, 격식체)",
    example: "頑張った。しかし、結果は出なかった。", exampleReading: "がんばった。しかし、けっかはでなかった。", exampleKorean: "감밧타. 시카시, 켁카와 데나캇타", exampleMeaning: "열심히 했다. 그러나 결과는 나오지 않았다.",
    breakdown: [
      { word: "しかし", reading: "しかし", meaning: "그러나 (문장 앞에 오는 접속사)" },
      { word: "結果", reading: "けっか", meaning: "결과" },
    ] },
  { category: "역접", kanji: "でも", reading: "でも", korean: "데모", meaning: "그런데 (문어·구어 모두, 캐주얼)",
    example: "疲れた。でも、まだ仕事が残っている。", exampleReading: "つかれた。でも、まだしごとがのこっている。", exampleKorean: "츠카레타. 데모, 마다 시고토가 노콧테이루", exampleMeaning: "피곤하다. 그런데 아직 일이 남아있다.",
    breakdown: [
      { word: "でも", reading: "でも", meaning: "그런데, 하지만 (캐주얼한 역접)" },
      { word: "残っている", reading: "のこっている", meaning: "남아있다" },
    ] },
  { category: "역접", kanji: "ところが", reading: "ところが", korean: "토코로가", meaning: "그런데 (예상 밖의 전개)",
    example: "晴れると思った。ところが、雨が降ってきた。", exampleReading: "はれるとおもった。ところが、あめがふってきた。", exampleKorean: "하레루토 오못타. 토코로가, 아메가 훗테키타", exampleMeaning: "맑을 거라 생각했다. 그런데 비가 내리기 시작했다.",
    breakdown: [
      { word: "晴れると思った", reading: "はれるとおもった", meaning: "맑을 거라 생각했다" },
      { word: "ところが", reading: "ところが", meaning: "그런데 (예상 밖의 반전)" },
    ] },
  { category: "역접", kanji: "にもかかわらず", reading: "にもかかわらず", korean: "니모카카와라즈", meaning: "~에도 불구하고 (매우 격식체)",
    example: "努力したにもかかわらず、結果は変わらなかった。", exampleReading: "どりょくしたにもかかわらず、けっかはかわらなかった。", exampleKorean: "도료쿠시타 니모카카와라즈 켁카와 카와라나캇타", exampleMeaning: "노력했음에도 불구하고 결과는 변하지 않았다.",
    breakdown: [
      { word: "努力した", reading: "どりょくした", meaning: "노력했다" },
      { word: "にもかかわらず", reading: "にもかかわらず", meaning: "~에도 불구하고 (강한 역접, 문어체)" },
    ] },
  { category: "역접", kanji: "くせに", reading: "くせに", korean: "쿠세니", meaning: "~인 주제에 (비꼬는 뉘앙스)",
    example: "知らないくせに、知ったふりをする。", exampleReading: "しらないくせに、しったふりをする。", exampleKorean: "시라나이 쿠세니 싯타 후리오 스루", exampleMeaning: "모르는 주제에 아는 척한다.",
    breakdown: [
      { word: "知らない", reading: "しらない", meaning: "모른다" },
      { word: "くせに", reading: "くせに", meaning: "~인 주제에 (비난·비꼼)" },
      { word: "ふりをする", reading: "ふりをする", meaning: "~인 척하다" },
    ] },
  { category: "역접", kanji: "とはいえ", reading: "とはいえ", korean: "토와이에", meaning: "그렇다고 해도",
    example: "便利だとはいえ、値段が高すぎます。", exampleReading: "べんりだとはいえ、ねだんがたかすぎます。", exampleKorean: "벤리다토와이에 네단가 타카스기마스", exampleMeaning: "편리하다고 해도 가격이 너무 비쌉니다.",
    breakdown: [
      { word: "便利だ", reading: "べんりだ", meaning: "편리하다" },
      { word: "とはいえ", reading: "とはいえ", meaning: "그렇다고 해도 (문어체 역접)" },
      { word: "高すぎます", reading: "たかすぎます", meaning: "너무 비쌉니다 (형용사+すぎる)" },
    ] },

  // ---------- 3. 가정 ----------
  { category: "가정", kanji: "ば", reading: "ば", korean: "바", meaning: "일반적/논리적 조건",
    example: "春になれば、桜が咲きます。", exampleReading: "はるになれば、さくらがさきます。", exampleKorean: "하루니 나레바 사쿠라가 사키마스", exampleMeaning: "봄이 되면 벚꽃이 핍니다.",
    breakdown: [
      { word: "春になれば", reading: "はるになれば", meaning: "봄이 되면 (なる의 ば형)" },
      { word: "咲きます", reading: "さきます", meaning: "핍니다 (咲く의 정중형)" },
    ] },
  { category: "가정", kanji: "なら", reading: "なら", korean: "나라", meaning: "상대의 말·상황을 전제로 조언할 때",
    example: "日本へ行くなら、京都がおすすめです。", exampleReading: "にほんへいくなら、きょうとがおすすめです。", exampleKorean: "니홍에 이쿠나라 쿄-토가 오스스메데스", exampleMeaning: "일본에 간다면 교토를 추천합니다.",
    breakdown: [
      { word: "行くなら", reading: "いくなら", meaning: "간다면 (상대 상황을 전제)" },
      { word: "おすすめです", reading: "おすすめです", meaning: "추천합니다" },
    ] },
  { category: "가정", kanji: "たら", reading: "たら", korean: "타라", meaning: "가장 범용적, 회화체에서 자주 사용",
    example: "お金があったら、旅行に行きたいです。", exampleReading: "おかねがあったら、りょこうにいきたいです。", exampleKorean: "오카네가 앗타라 료코-니 이키타이데스", exampleMeaning: "돈이 있으면 여행을 가고 싶습니다.",
    breakdown: [
      { word: "あったら", reading: "あったら", meaning: "있으면 (ある의 たら형)" },
      { word: "行きたいです", reading: "いきたいです", meaning: "가고 싶습니다" },
    ] },
  { category: "가정", kanji: "と", reading: "と", korean: "토", meaning: "자동적/필연적 결과 (항상 그렇게 됨)",
    example: "このボタンを押すと、電気がつきます。", exampleReading: "このボタンをおすと、でんきがつきます。", exampleKorean: "코노 보탄오 오스토 뎅키가 츠키마스", exampleMeaning: "이 버튼을 누르면 불이 켜집니다.",
    breakdown: [
      { word: "押すと", reading: "おすと", meaning: "누르면 (기본형+と, 필연적 결과)" },
      { word: "つきます", reading: "つきます", meaning: "켜집니다" },
    ] },
  { category: "가정", kanji: "さえ~ば", reading: "さえ~ば", korean: "사에~바", meaning: "~만 ~하면 (조건 강조)",
    example: "時間さえあれば、行きたいです。", exampleReading: "じかんさえあれば、いきたいです。", exampleKorean: "지캉사에 아레바 이키타이데스", exampleMeaning: "시간만 있으면 가고 싶습니다.",
    breakdown: [
      { word: "時間さえ", reading: "じかんさえ", meaning: "시간만 (강조)" },
      { word: "あれば", reading: "あれば", meaning: "있으면" },
    ] },
  { category: "가정", kanji: "次第で", reading: "しだいで", korean: "시다이데", meaning: "~에 따라서",
    example: "結果次第で、計画を変えます。", exampleReading: "けっかしだいで、けいかくをかえます。", exampleKorean: "켁카 시다이데 케-카쿠오 카에마스", exampleMeaning: "결과에 따라서 계획을 바꿉니다.",
    breakdown: [
      { word: "結果次第で", reading: "けっかしだいで", meaning: "결과에 따라서" },
      { word: "変えます", reading: "かえます", meaning: "바꿉니다" },
    ] },

  // ---------- 4-1. 의무 ----------
  { category: "의무", kanji: "なければならない", reading: "なければならない", korean: "나케레바나라나이", meaning: "~해야 한다 (가장 기본, 격식체에도 사용)",
    example: "韓国に住まなければならない。", exampleReading: "かんこくにすまなければならない。", exampleKorean: "캉코쿠니 스마나케레바나라나이", exampleMeaning: "한국에 살아야 한다.",
    breakdown: [
      { word: "住まなければならない", reading: "すまなければならない", meaning: "살아야 한다 (住む의 부정형+なければならない)" },
    ] },
  { category: "의무", kanji: "なければいけない", reading: "なければいけない", korean: "나케레바이케나이", meaning: "~해야 한다 (일상 대화에서 흔함)",
    example: "明日までに提出しなければいけません。", exampleReading: "あしたまでにていしゅつしなければいけません。", exampleKorean: "아시타마데니 테-슈츠 시나케레바 이케마셍", exampleMeaning: "내일까지 제출해야 합니다.",
    breakdown: [
      { word: "明日までに", reading: "あしたまでに", meaning: "내일까지" },
      { word: "しなければいけません", reading: "しなければいけません", meaning: "해야 합니다" },
    ] },
  { category: "의무", kanji: "ないと", reading: "ないと", korean: "나이토", meaning: "~해야 (캐주얼, 뒤의 ならない가 생략된 형태)",
    example: "もう行かないと。", exampleReading: "もういかないと。", exampleKorean: "모- 이카나이토", exampleMeaning: "이제 가야 해.",
    breakdown: [
      { word: "行かないと", reading: "いかないと", meaning: "가야 해 (行く의 부정형+と, 뒷부분 생략)" },
    ] },
  { category: "의무", kanji: "なきゃ", reading: "なきゃ", korean: "나캬", meaning: "~해야 (가장 축약된 캐주얼체, 친한 사이)",
    example: "そろそろ勉強しなきゃ。", exampleReading: "そろそろべんきょうしなきゃ。", exampleKorean: "소로소로 벵쿄- 시나캬", exampleMeaning: "슬슬 공부해야지.",
    breakdown: [
      { word: "そろそろ", reading: "そろそろ", meaning: "슬슬" },
      { word: "しなきゃ", reading: "しなきゃ", meaning: "해야지 (しなければ의 축약)" },
    ] },

  // ---------- 4. 병렬·추가 ----------
  { category: "병렬·추가", kanji: "そして", reading: "そして", korean: "소시테", meaning: "그리고",
    example: "朝ごはんを食べて、そして学校へ行きます。", exampleReading: "あさごはんをたべて、そしてがっこうへいきます。", exampleKorean: "아사고항오 타베테 소시테 각코-에 이키마스", exampleMeaning: "아침을 먹고 그리고 학교에 갑니다.",
    breakdown: [
      { word: "そして", reading: "そして", meaning: "그리고 (순차적 나열)" },
    ] },
  { category: "병렬·추가", kanji: "それから", reading: "それから", korean: "소레카라", meaning: "그러고 나서",
    example: "宿題をして、それから遊びます。", exampleReading: "しゅくだいをして、それからあそびます。", exampleKorean: "슈쿠다이오 시테 소레카라 아소비마스", exampleMeaning: "숙제를 하고 그러고 나서 놉니다.",
    breakdown: [
      { word: "それから", reading: "それから", meaning: "그러고 나서 (시간 순서 강조)" },
    ] },
  { category: "병렬·추가", kanji: "それに", reading: "それに", korean: "소레니", meaning: "게다가",
    example: "安いし、それにおいしいです。", exampleReading: "やすいし、それにおいしいです。", exampleKorean: "야스이시 소레니 오이시-데스", exampleMeaning: "싸고 게다가 맛있습니다.",
    breakdown: [
      { word: "安いし", reading: "やすいし", meaning: "싸고 (형용사+し, 나열)" },
      { word: "それに", reading: "それに", meaning: "게다가 (추가 설명)" },
    ] },
  { category: "병렬·추가", kanji: "また", reading: "また", korean: "마타", meaning: "또한",
    example: "彼は医者で、また作家でもあります。", exampleReading: "かれはいしゃで、またさっかでもあります。", exampleKorean: "카레와 이샤데 마타 삭카데모 아리마스", exampleMeaning: "그는 의사이며 또한 작가이기도 합니다.",
    breakdown: [
      { word: "また", reading: "また", meaning: "또한 (병렬 추가)" },
    ] },
  { category: "병렬·추가", kanji: "しかも", reading: "しかも", korean: "시카모", meaning: "게다가 (강조)",
    example: "この店は安い。しかも、味もいい。", exampleReading: "このみせはやすい。しかも、あじもいい。", exampleKorean: "코노 미세와 야스이. 시카모, 아지모 이-", exampleMeaning: "이 가게는 싸다. 게다가 맛도 좋다.",
    breakdown: [
      { word: "しかも", reading: "しかも", meaning: "게다가 (앞 내용에 강하게 추가)" },
    ] },

  // ---------- 5. 시간 관련 ----------
  { category: "시간", kanji: "とき", reading: "とき", korean: "토키", meaning: "~할 때",
    example: "日本に行ったとき、寺を見ました。", exampleReading: "にほんにいったとき、てらをみました。", exampleKorean: "니혼니 잇타토키 테라오 미마시타", exampleMeaning: "일본에 갔을 때 절을 봤습니다.",
    breakdown: [
      { word: "行ったとき", reading: "いったとき", meaning: "갔을 때" },
    ] },
  { category: "시간", kanji: "前に", reading: "まえに", korean: "마에니", meaning: "~하기 전에",
    example: "寝る前に、歯を磨きます。", exampleReading: "ねるまえに、はをみがきます。", exampleKorean: "네루 마에니 하오 미가키마스", exampleMeaning: "자기 전에 이를 닦습니다.",
    breakdown: [
      { word: "寝る前に", reading: "ねるまえに", meaning: "자기 전에 (동사 기본형+前に)" },
    ] },
  { category: "시간", kanji: "後で", reading: "あとで", korean: "아토데", meaning: "~한 후에",
    example: "食事の後で、薬を飲みます。", exampleReading: "しょくじのあとで、くすりをのみます。", exampleKorean: "쇼쿠지노 아토데 쿠스리오 노미마스", exampleMeaning: "식사 후에 약을 먹습니다.",
    breakdown: [
      { word: "食事の後で", reading: "しょくじのあとで", meaning: "식사 후에" },
    ] },
  { category: "시간", kanji: "ながら", reading: "ながら", korean: "나가라", meaning: "~하면서 (동시동작)",
    example: "音楽を聞きながら、勉強します。", exampleReading: "おんがくをききながら、べんきょうします。", exampleKorean: "옹가쿠오 키키나가라 벵쿄- 시마스", exampleMeaning: "음악을 들으면서 공부합니다.",
    breakdown: [
      { word: "聞きながら", reading: "ききながら", meaning: "들으면서 (동사 ます형+ながら)" },
    ] },
  { category: "시간", kanji: "まで", reading: "まで", korean: "마데", meaning: "~까지",
    example: "終わるまで、待ちます。", exampleReading: "おわるまで、まちます。", exampleKorean: "오와루마데 마치마스", exampleMeaning: "끝날 때까지 기다립니다.",
    breakdown: [
      { word: "終わるまで", reading: "おわるまで", meaning: "끝날 때까지" },
    ] },
  { category: "시간", kanji: "ているうちに", reading: "ているうちに", korean: "테이루우치니", meaning: "~하고 있는 동안에",
    example: "テレビを見ているうちに、寝てしまいました。", exampleReading: "テレビをみているうちに、ねてしまいました。", exampleKorean: "테레비오 미테이루우치니 네테시마이마시타", exampleMeaning: "텔레비전을 보고 있는 동안에 잠들어버렸습니다.",
    breakdown: [
      { word: "見ているうちに", reading: "みているうちに", meaning: "보고 있는 동안에" },
      { word: "寝てしまいました", reading: "ねてしまいました", meaning: "잠들어버렸습니다 (~てしまう, 아쉬움 뉘앙스)" },
    ] },
  { category: "시간", kanji: "際に", reading: "さいに", korean: "사이니", meaning: "~할 때 (격식체)",
    example: "ご利用の際に、こちらをご確認ください。", exampleReading: "ごりようのさいに、こちらをごかくにんください。", exampleKorean: "고리요-노 사이니 코치라오 고카쿠닌 쿠다사이", exampleMeaning: "이용하실 때 이쪽을 확인해 주세요.",
    breakdown: [
      { word: "ご利用の際に", reading: "ごりようのさいに", meaning: "이용하실 때 (격식체)" },
    ] },
  { category: "시간", kanji: "たびに", reading: "たびに", korean: "타비니", meaning: "~할 때마다",
    example: "この曲を聞くたびに、昔を思い出します。", exampleReading: "このきょくをきくたびに、むかしをおもいだします。", exampleKorean: "코노 쿄쿠오 키쿠타비니 무카시오 오모이다시마스", exampleMeaning: "이 곡을 들을 때마다 옛날이 생각납니다.",
    breakdown: [
      { word: "聞くたびに", reading: "きくたびに", meaning: "들을 때마다" },
      { word: "思い出します", reading: "おもいだします", meaning: "생각납니다" },
    ] },
  { category: "시간", kanji: "とたんに", reading: "とたんに", korean: "토탄니", meaning: "~하자마자 (뜻밖의 일이 이어짐)",
    example: "ドアを開けたとたんに、猫が飛び出しました。", exampleReading: "ドアをあけたとたんに、ねこがとびだしました。", exampleKorean: "도아오 아케타 토탄니 네코가 토비다시마시타", exampleMeaning: "문을 열자마자 고양이가 튀어나왔습니다.",
    breakdown: [
      { word: "開けたとたんに", reading: "あけたとたんに", meaning: "열자마자" },
      { word: "飛び出しました", reading: "とびだしました", meaning: "튀어나왔습니다" },
    ] },
  { category: "시간", kanji: "か~ないかのうちに", reading: "か~ないかのうちに", korean: "카~나이카노우치니", meaning: "~하자마자, 거의 동시에",
    example: "家を出るか出ないかのうちに、雨が降り始めた。", exampleReading: "いえをでるかでないかのうちに、あめがふりはじめた。", exampleKorean: "이에오 데루카 데나이카노우치니 아메가 후리하지메타", exampleMeaning: "집을 나서자마자 비가 내리기 시작했다.",
    breakdown: [
      { word: "出るか出ないかのうちに", reading: "でるかでないかのうちに", meaning: "나가는지 마는지 하는 사이에 (거의 동시)" },
      { word: "降り始めた", reading: "ふりはじめた", meaning: "내리기 시작했다" },
    ] },

  // ---------- 6. 목적·결과 ----------
  { category: "목적·결과", kanji: "ために", reading: "ために", korean: "타메니", meaning: "~하기 위해",
    example: "健康のために、毎日運動します。", exampleReading: "けんこうのために、まいにちうんどうします。", exampleKorean: "켕코-노 타메니 마이니치 운도- 시마스", exampleMeaning: "건강을 위해 매일 운동합니다.",
    breakdown: [
      { word: "健康のために", reading: "けんこうのために", meaning: "건강을 위해" },
    ] },
  { category: "목적·결과", kanji: "ように", reading: "ように", korean: "요-니", meaning: "~하도록",
    example: "忘れないように、メモします。", exampleReading: "わすれないように、メモします。", exampleKorean: "와스레나이 요-니 메모 시마스", exampleMeaning: "잊지 않도록 메모합니다.",
    breakdown: [
      { word: "忘れないように", reading: "わすれないように", meaning: "잊지 않도록 (부정형+ように)" },
    ] },
  { category: "목적·결과", kanji: "だから", reading: "だから", korean: "다카라", meaning: "그래서",
    example: "明日は休みだ。だから、今日は遅くまで起きていられる。", exampleReading: "あしたはやすみだ。だから、きょうはおそくまでおきていられる。", exampleKorean: "아시타와 야스미다. 다카라, 쿄-와 오소쿠마데 오키테이라레루", exampleMeaning: "내일은 쉬는 날이다. 그래서 오늘은 늦게까지 깨어있을 수 있다.",
    breakdown: [
      { word: "だから", reading: "だから", meaning: "그래서 (앞 문장이 이유)" },
    ] },
  { category: "목적·결과", kanji: "それで", reading: "それで", korean: "소레데", meaning: "그래서",
    example: "道が混んでいた。それで、遅刻した。", exampleReading: "みちがこんでいた。それで、ちこくした。", exampleKorean: "미치가 콘데이타. 소레데, 치코쿠시타", exampleMeaning: "길이 막혔다. 그래서 지각했다.",
    breakdown: [
      { word: "混んでいた", reading: "こんでいた", meaning: "막혀 있었다" },
      { word: "それで", reading: "それで", meaning: "그래서" },
    ] },
  { category: "목적·결과", kanji: "べく", reading: "べく", korean: "베쿠", meaning: "~하기 위해 (문어체)",
    example: "目標を達成すべく、努力しています。", exampleReading: "もくひょうをたっせいすべく、どりょくしています。", exampleKorean: "모쿠효-오 탓세-스베쿠 도료쿠 시테이마스", exampleMeaning: "목표를 달성하기 위해 노력하고 있습니다.",
    breakdown: [
      { word: "達成すべく", reading: "たっせいすべく", meaning: "달성하기 위해 (문어체 목적)" },
    ] },

  // ---------- 7. 한정·제한 ----------
  { category: "한정·제한", kanji: "だけ", reading: "だけ", korean: "다케", meaning: "~만, ~뿐",
    example: "これだけ食べます。", exampleReading: "これだけたべます。", exampleKorean: "코레다케 타베마스", exampleMeaning: "이것만 먹겠습니다.",
    breakdown: [
      { word: "これだけ", reading: "これだけ", meaning: "이것만" },
    ] },
  { category: "한정·제한", kanji: "しかない", reading: "しかない", korean: "시카나이", meaning: "~밖에 없다",
    example: "あきらめるしかない。", exampleReading: "あきらめるしかない。", exampleKorean: "아키라메루 시카나이", exampleMeaning: "포기할 수밖에 없다.",
    breakdown: [
      { word: "あきらめる", reading: "あきらめる", meaning: "포기하다" },
      { word: "しかない", reading: "しかない", meaning: "~밖에 없다 (다른 선택지 없음)" },
    ] },
  { category: "한정·제한", kanji: "さえ", reading: "さえ", korean: "사에", meaning: "~조차, ~만",
    example: "名前さえ知りません。", exampleReading: "なまえさえしりません。", exampleKorean: "나마에사에 시리마셍", exampleMeaning: "이름조차 모릅니다.",
    breakdown: [
      { word: "名前さえ", reading: "なまえさえ", meaning: "이름조차" },
    ] },
  { category: "한정·제한", kanji: "ばかり/ぐらい", reading: "ばかり/ぐらい", korean: "바카리/구라이", meaning: "~정도",
    example: "十分ぐらい待ちました。", exampleReading: "じゅっぷんぐらいまちました。", exampleKorean: "쥿푼구라이 마치마시타", exampleMeaning: "10분 정도 기다렸습니다.",
    breakdown: [
      { word: "十分ぐらい", reading: "じゅっぷんぐらい", meaning: "10분 정도" },
    ] },

  // ---------- 8. 전문 ----------
  { category: "전문", kanji: "ということだ", reading: "ということだ", korean: "토이우코토다", meaning: "~라고 한다 (전문, 들은 내용 전달)",
    example: "明日は雨だということだ。", exampleReading: "あしたはあめだということだ。", exampleKorean: "아시타와 아메다토 이우 코토다", exampleMeaning: "내일은 비가 온다고 한다.",
    breakdown: [
      { word: "ということだ", reading: "ということだ", meaning: "~라고 한다 (전해 들음)" },
    ] },
  { category: "전문", kanji: "とのことだ", reading: "とのことだ", korean: "토노코토다", meaning: "~라고 한다",
    example: "会議は中止だとのことです。", exampleReading: "かいぎはちゅうしだとのことです。", exampleKorean: "카이기와 츄-시다토노 코토데스", exampleMeaning: "회의는 중지라고 합니다.",
    breakdown: [
      { word: "とのことです", reading: "とのことです", meaning: "~라고 합니다 (정중한 전문)" },
    ] },

  // ---------- 9. 비교·대조 ----------
  { category: "비교·대조", kanji: "に対して", reading: "にたいして", korean: "니타이시테", meaning: "~에 비해 / ~에 대해 (대조)",
    example: "兄は静かなのに対して、弟は活発だ。", exampleReading: "あにはしずかなのにたいして、おとうとはかっぱつだ。", exampleKorean: "아니와 시즈카나노니 타이시테 오토-토와 캅파츠다", exampleMeaning: "형은 조용한데 비해 동생은 활발하다.",
    breakdown: [
      { word: "静かなのに対して", reading: "しずかなのにたいして", meaning: "조용한 것에 비해" },
    ] },
  { category: "비교·대조", kanji: "にくらべて", reading: "にくらべて", korean: "니쿠라베테", meaning: "~에 비해서",
    example: "去年にくらべて、今年は暑いです。", exampleReading: "きょねんにくらべて、ことしはあついです。", exampleKorean: "쿄넨니 쿠라베테 코토시와 아츠이데스", exampleMeaning: "작년에 비해 올해는 덥습니다.",
    breakdown: [
      { word: "去年にくらべて", reading: "きょねんにくらべて", meaning: "작년에 비해서" },
    ] },

  // ---------- 10. 결과 강조·부가 설명 ----------
  { category: "결과·부가설명", kanji: "結果", reading: "けっか", korean: "켁카", meaning: "결과",
    example: "話し合った結果、中止することにしました。", exampleReading: "はなしあったけっか、ちゅうしすることにしました。", exampleKorean: "하나시앗타 켁카 츄-시스루 코토니 시마시타", exampleMeaning: "논의한 결과 중지하기로 했습니다.",
    breakdown: [
      { word: "話し合った結果", reading: "はなしあったけっか", meaning: "논의한 결과" },
    ] },
  { category: "결과·부가설명", kanji: "結局", reading: "けっきょく", korean: "켁쿄쿠", meaning: "결국",
    example: "結局、みんな来ませんでした。", exampleReading: "けっきょく、みんなきませんでした。", exampleKorean: "켁쿄쿠 민나 키마센데시타", exampleMeaning: "결국 아무도 오지 않았습니다.",
    breakdown: [
      { word: "結局", reading: "けっきょく", meaning: "결국 (예상과 다르게 끝남)" },
    ] },
  { category: "결과·부가설명", kanji: "ついに", reading: "ついに", korean: "츠이니", meaning: "마침내",
    example: "ついに、夢が叶いました。", exampleReading: "ついに、ゆめがかないました。", exampleKorean: "츠이니 유메가 카나이마시타", exampleMeaning: "마침내 꿈이 이루어졌습니다.",
    breakdown: [
      { word: "叶いました", reading: "かないました", meaning: "이루어졌습니다" },
    ] },
  { category: "결과·부가설명", kanji: "つまり", reading: "つまり", korean: "츠마리", meaning: "즉, 결국 말하자면",
    example: "彼は母の弟、つまり私のおじです。", exampleReading: "かれははははのおとうと、つまりわたしのおじです。", exampleKorean: "카레와 하하노 오토-토 츠마리 와타시노 오지데스", exampleMeaning: "그는 어머니의 남동생, 즉 저의 삼촌입니다.",
    breakdown: [
      { word: "つまり", reading: "つまり", meaning: "즉 (앞말을 바꿔 말함)" },
    ] },
  { category: "결과·부가설명", kanji: "ちなみに", reading: "ちなみに", korean: "치나미니", meaning: "참고로",
    example: "ちなみに、この店は日曜日が休みです。", exampleReading: "ちなみに、このみせはにちようびがやすみです。", exampleKorean: "치나미니 코노 미세와 니치요-비가 야스미데스", exampleMeaning: "참고로 이 가게는 일요일이 휴무입니다.",
    breakdown: [
      { word: "ちなみに", reading: "ちなみに", meaning: "참고로 (부가 정보 도입)" },
    ] },
  { category: "결과·부가설명", kanji: "実は", reading: "じつは", korean: "지츠와", meaning: "사실은",
    example: "実は、来月引っ越します。", exampleReading: "じつは、らいげつひっこします。", exampleKorean: "지츠와 라이게츠 힉코시마스", exampleMeaning: "사실은 다음 달에 이사갑니다.",
    breakdown: [
      { word: "実は", reading: "じつは", meaning: "사실은 (숨겨둔 정보 공개)" },
    ] },

  // ---------- 11. 의문사 ----------
  { category: "의문사", kanji: "なぜ/どうして", reading: "なぜ/どうして", korean: "나제/도-시테", meaning: "왜 (이유를 물음)",
    example: "なぜ遅れたのですか。", exampleReading: "なぜおくれたのですか。", exampleKorean: "나제 오쿠레타노데스카", exampleMeaning: "왜 늦었습니까?",
    breakdown: [
      { word: "なぜ", reading: "なぜ", meaning: "왜 (이유)" },
      { word: "遅れた", reading: "おくれた", meaning: "늦었다" },
    ] },
  { category: "의문사", kanji: "どうやって", reading: "どうやって", korean: "도-얏테", meaning: "어떻게 (방법을 물음)",
    example: "どうやって作りますか。", exampleReading: "どうやってつくりますか。", exampleKorean: "도-얏테 츠쿠리마스카", exampleMeaning: "어떻게 만듭니까?",
    breakdown: [
      { word: "どうやって", reading: "どうやって", meaning: "어떻게 (구체적 방법)" },
    ] },
  { category: "의문사", kanji: "どのように", reading: "どのように", korean: "도노요-니", meaning: "어떤 식으로",
    example: "どのように使いますか。", exampleReading: "どのようにつかいますか。", exampleKorean: "도노요-니 츠카이마스카", exampleMeaning: "어떤 식으로 사용합니까?",
    breakdown: [
      { word: "どのように", reading: "どのように", meaning: "어떤 식으로 (どうやって보다 격식체)" },
    ] },
  { category: "의문사", kanji: "どんな", reading: "どんな", korean: "돈나", meaning: "어떤 (성질·종류를 물음)",
    example: "どんな音楽が好きですか。", exampleReading: "どんなおんがくがすきですか。", exampleKorean: "돈나 옹가쿠가 스키데스카", exampleMeaning: "어떤 음악을 좋아합니까?",
    breakdown: [
      { word: "どんな", reading: "どんな", meaning: "어떤 (명사 수식)" },
    ] },

  // ---------- 12. 화제 전환 ----------
  { category: "화제전환", kanji: "ところで", reading: "ところで", korean: "토코로데", meaning: "그런데 (화제 전환)",
    example: "ところで、来週の予定は決まりましたか。", exampleReading: "ところで、らいしゅうのよていはきまりましたか。", exampleKorean: "토코로데 라이슈-노 요테-와 키마리마시타카", exampleMeaning: "그런데 다음 주 일정은 정해졌습니까?",
    breakdown: [
      { word: "ところで", reading: "ところで", meaning: "그런데 (완전히 새 화제로 전환)" },
    ] },
  { category: "화제전환", kanji: "さて/では", reading: "さて/では", korean: "사테/데와", meaning: "그럼",
    example: "さて、次の議題に移りましょう。", exampleReading: "さて、つぎのぎだいにうつりましょう。", exampleKorean: "사테 츠기노 기다이니 우츠리마쇼-", exampleMeaning: "그럼 다음 안건으로 넘어갑시다.",
    breakdown: [
      { word: "さて", reading: "さて", meaning: "그럼 (다음 단계로 넘어감)" },
      { word: "移りましょう", reading: "うつりましょう", meaning: "넘어갑시다" },
    ] },
];
