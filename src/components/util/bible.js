const bibleData = () => {
    const bible =[
        {
            "id": 1,
            "chapter": "창세기",
            "sign": "창",
            "page": 50
        },
        {
            "id": 2,
            "chapter": "출애굽기",
            "sign": "출",
            "page": 40
        },
        {
            "id": 3,
            "chapter": "레위기",
            "sign": "레",
            "page": 27
        },
        {
            "id": 4,
            "chapter": "민수기",
            "sign": "민",
            "page": 36
        },
        {
            "id": 5,
            "chapter": "신명기",
            "sign": "신",
            "page": 34
        },
        {
            "id": 6,
            "chapter": "여호수아",
            "sign": "수",
            "page": 24
        },
        {
            "id": 7,
            "chapter": "사사기",
            "sign": "삿",
            "page": 21
        },
        {
            "id": 8,
            "chapter": "룻기",
            "sign": "룻",
            "page": 4
        },
        {
            "id": 9,
            "chapter": "사무엘상",
            "sign": "삼상",
            "page": 31
        },
        {
            "id": 10,
            "chapter": "사무엘하",
            "sign": "삼하",
            "page": 24
        },
        {
            "id": 11,
            "chapter": "열왕기상",
            "sign": "왕상",
            "page": 22
        },
        {
            "id": 12,
            "chapter": "열왕기하",
            "sign": "왕하",
            "page": 25
        },
        {
            "id": 13,
            "chapter": "역대상",
            "sign": "대상",
            "page": 29
        },
        {
            "id": 14,
            "chapter": "역대하",
            "sign": "대하",
            "page": 36
        },
        {
            "id": 15,
            "chapter": "에스라",
            "sign": "스",
            "page": 10
        },
        {
            "id": 16,
            "chapter": "느헤미야",
            "sign": "느",
            "page": 13
        },
        {
            "id": 17,
            "chapter": "에스더",
            "sign": "에",
            "page": 10
        },
        {
            "id": 18,
            "chapter": "욥기",
            "sign": "욥",
            "page": 42
        },
        {
            "id": 19,
            "chapter": "시편",
            "sign": "시",
            "page": 150
        },
        {
            "id": 20,
            "chapter": "잠언",
            "sign": "잠",
            "page": 31
        },
        {
            "id": 21,
            "chapter": "전도서",
            "sign": "전",
            "page": 12
        },
        {
            "id": 22,
            "chapter": "아가",
            "sign": "아",
            "page": 8
        },
        {
            "id": 23,
            "chapter": "이사야",
            "sign": "사",
            "page": 66
        },
        {
            "id": 24,
            "chapter": "예레미야",
            "sign": "렘",
            "page": 52
        },
        {
            "id": 25,
            "chapter": "예레미야애가",
            "sign": "애",
            "page": 5
        },
        {
            "id": 26,
            "chapter": "에스겔",
            "sign": "겔",
            "page": 48
        },
        {
            "id": 27,
            "chapter": "다니엘",
            "sign": "단",
            "page": 12
        },
        {
            "id": 28,
            "chapter": "호세아",
            "sign": "호",
            "page": 14
        },
        {
            "id": 29,
            "chapter": "요엘",
            "sign": "욜",
            "page": 3
        },
        {
            "id": 30,
            "chapter": "아모스",
            "sign": "암",
            "page": 9
        },
        {
            "id": 31,
            "chapter": "오바댜",
            "sign": "옵",
            "page": 1
        },
        {
            "id": 32,
            "chapter": "요나",
            "sign": "욘",
            "page": 4
        },
        {
            "id": 33,
            "chapter": "미가",
            "sign": "미",
            "page": 7
        },
        {
            "id": 34,
            "chapter": "나훔",
            "sign": "나",
            "page": 3
        },
        {
            "id": 35,
            "chapter": "하박국",
            "sign": "합",
            "page": 3
        },
        {
            "id": 36,
            "chapter": "스바냐",
            "sign": "습",
            "page": 3
        },
        {
            "id": 37,
            "chapter": "학개",
            "sign": "학",
            "page": 2
        },
        {
            "id": 38,
            "chapter": "스가랴",
            "sign": "슥",
            "page": 14
        },
        {
            "id": 39,
            "chapter": "말라기",
            "sign": "말",
            "page": 4
        },
        {
            "id": 40,
            "chapter": "마태복음",
            "sign": "마",
            "page": 28
        },
        {
            "id": 41,
            "chapter": "마가복음",
            "sign": "막",
            "page": 16
        },
        {
            "id": 42,
            "chapter": "누가복음",
            "sign": "눅",
            "page": 24
        },
        {
            "id": 43,
            "chapter": "요한복음",
            "sign": "요",
            "page": 21
        },
        {
            "id": 44,
            "chapter": "사도행전",
            "sign": "행",
            "page": 28
        },
        {
            "id": 45,
            "chapter": "로마서",
            "sign": "롬",
            "page": 16
        },
        {
            "id": 46,
            "chapter": "고린도전서",
            "sign": "고전",
            "page": 16
        },
        {
            "id": 47,
            "chapter": "고린도후서",
            "sign": "고후",
            "page": 13
        },
        {
            "id": 48,
            "chapter": "갈라디아서",
            "sign": "갈",
            "page": 6
        },
        {
            "id": 49,
            "chapter": "에베소서",
            "sign": "엡",
            "page": 6
        },
        {
            "id": 50,
            "chapter": "빌립보서",
            "sign": "빌",
            "page": 4
        },
        {
            "id": 51,
            "chapter": "골로새서",
            "sign": "골",
            "page": 4
        },
        {
            "id": 52,
            "chapter": "데살로니가전서",
            "sign": "살전",
            "page": 5
        },
        {
            "id": 53,
            "chapter": "데살로니가후서",
            "sign": "살후",
            "page": 3
        },
        {
            "id": 54,
            "chapter": "디모데전서",
            "sign": "딤전",
            "page": 6
        },
        {
            "id": 55,
            "chapter": "디모데후서",
            "sign": "딤후",
            "page": 4
        },
        {
            "id": 56,
            "chapter": "디도서",
            "sign": "딛",
            "page": 3
        },
        {
            "id": 57,
            "chapter": "벨레몬서",
            "sign": "몬",
            "page": 1
        },
        {
            "id": 58,
            "chapter": "히브리서",
            "sign": "히",
            "page": 13
        },
        {
            "id": 59,
            "chapter": "야고보서",
            "sign": "약",
            "page": 5
        },
        {
            "id": 60,
            "chapter": "베드로전서",
            "sign": "벧전",
            "page": 5
        },
        {
            "id": 61,
            "chapter": "베드로후서",
            "sign": "벧후",
            "page": 3
        },
        {
            "id": 62,
            "chapter": "요한일서",
            "sign": "요일",
            "page": 5
        },
        {
            "id": 63,
            "chapter": "요한이서",
            "sign": "요이",
            "page": 1
        },
        {
            "id": 64,
            "chapter": "요한삼서",
            "sign": "요삼",
            "page": 1
        },
        {
            "id": 65,
            "chapter": "유다서",
            "sign": "유",
            "page": 1
        },
        {
            "id": 66,
            "chapter": "요한계시록",
            "sign": "계",
            "page": 22
        }
    ]
    
    return bible;
}
export default bibleData;