const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function sorting(array) {
  for (let i = 0; i < array.length; i++) {
    shuffle(array[i]);
    for (let j = 0; j < array[i].length; j++) {
      shuffle(array[i][j].answer);
    }
  }
}

const data = {
  politics: [
    [
      {
        question:
          "איך נקראת הגבעה עליה בנויה הכנסת",
        answer: [
          {
            number: 1,
            body: "גבעת הלאום",
          },
          {
            number: 2,
            body: "גבעת רם",
          },
          {
            number: 3,
            body: "גבעת המנורה",
          },
          {
            number: 4,
            body: "גבעת הוורדים",
          },
        ],
        correct: 2,
      },
      {
        question: "מי מהבאים כיהן כיושב-ראש הכנסת",
        answer: [
          {
            number: 1,
            body: "יצחק רבין",
          },
          {
            number: 2,
            body: "יצחק נבון",
          },
          {
            number: 3,
            body: "יצחק בן צבי",
          },
          {
            number: 4,
            body: "יצחק שמיר",
          },
        ],
        correct: 4,
      },
      {
        question: "באיזו שנה נחנך משכן הכנסת הנוכחי",
        answer: [
          {
            number: 1,
            body: "1948",
          },
          {
            number: 2,
            body: "1966",
          },
          {
            number: 3,
            body: "1949",
          },
          {
            number: 4,
            body: "1967",
          },
        ],
        correct: 2,
      },
      {
        question: "מי האישה היחידה שכיהנה עד כה כיושבת-ראש הכנסת",

        answer: [
          {
            number: 1,
            body: "גולדה מאיר",
          },
          {
            number: 2,
            body: "ציפי לבני",
          },
          {
            number: 3,
            body: "דליה איציק",
          },
          {
            number: 4,
            body: "לימור לבנת",
          },
        ],
        correct: 3,
      },
      {
        question: "איפה שכנה הכנסת לפני שעברה למשכנה הנוכחי",
        answer: [
          {
            number: 1,
            body: "מוזיאון ארץ ישראל",
          },
          {
            number: 2,
            body: "בית דיזנגוף",
          },
          {
            number: 3,
            body: "בניין הסוכנות היהודית",
          },
          {
            number: 4,
            body: "בית פרומין",
          },
        ],
        correct: 4,
      },
    ],
    [
      {
        question: "הכנסת היא:",
        answer: [
          {
            number: 1,
            body: "הרשות המחוקקת",
          },
          {
            number: 2,
            body: "הרשות המבצעת",
          },
          {
            number: 3,
            body: "הרשות השופטת",
          },
          {
            number: 4,
            body: "הרשות החוקרת",
          },
        ],
        correct: 1,
      },
      {
        question: "איזו מהוועדות הבאות אינה ועדה בכנסת",
        answer: [
          {
            number: 1,
            body: "ועדת החינוך, התרבות והספורט",
          },
          {
            number: 2,
            body: "ועדת החוקה, חוק ומשפט",
          },
          {
            number: 3,
            body: "ועדת השוויון, המגדר והגיל השלישי",
          },
          {
            number: 4,
            body: "ועדת העלייה, הקליטה והתפוצות",
          },
        ],
        correct: 3,
      },
      {
        question: "מי מזוגות החברי כנסת הבאים אינם אחים",
        answer: [
          {
            number: 1,
            body: "אהוד יתום ודני יתום",
          },
          {
            number: 2,
            body: "ז'קי לוי ואורלי לוי אבקסיס ",
          },
          {
            number: 3,
            body: "דוד לוי ומקסים לוי ",
          },
          {
            number: 4,
            body: " חיים לנדאו ועוזי לנדאו",
          },
        ],
        correct: 4,
      },
      {
        question: "כיצד נקרא הגוף האחראי על אבטחת הכנסת",
        answer: [
          {
            number: 1,
            body: "משטרת הכנסת",
          },
          {
            number: 2,
            body: "משמר הכנסת",
          },
          {
            number: 3,
            body: "פלוגות הכנסת",
          },
          {
            number: 4,
            body: "אבטחת הכנסת",
          },
        ],
        correct: 2,
      },
      {
        question: "מה מהמשפטים הבאים נכון",
        answer: [
          {
            number: 1,
            body: "שר חייב להיות חבר כנסת",
          },
          {
            number: 2,
            body: "ראש ממשלה חייב להיות חבר כנסת",
          },
          {
            number: 3,
            body: "יושב-ראש ועדה אינו חייב להיות חבר כנסת",
          },
          {
            number: 4,
            body: "סגן שר אינו יכול להיות חבר כנסת",
          },
        ],
        correct: 2,
      },
    ],
    [
      {
        question: "מה קרה ב-29 באוקטובר 1957",
        answer: [
          {
            number: 1,
            body: " נחנך משכן הכנסת בירושלים",
          },
          {
            number: 2,
            body: " נזרק רימון לאולם הכנסת",
          },
          {
            number: 3,
            body: "נשיא מצרים אנואר סאדאת נאם בכנסת ",
          },
          {
            number: 4,
            body: "ראש הממשלה דוד בן גוריון הודיע לכנסת על לכידתו של אדולף אייכמן",
          },
        ],
        correct: 2,
      },
      {
        question: "באילו שפות פועל אתר הכנסת",
        answer: [
          {
            number: 1,
            body: "עברית",
          },
          {
            number: 2,
            body: "עברית וערבית",
          },
          {
            number: 3,
            body: "עברית, ערבית ואנגלית",
          },
          {
            number: 4,
            body: "עברית, ערבית, אנגלית ורוסית",
          },
        ],
        correct: 4,
      },
      {
        question: "איזה תפקיד לא מילא ראובן ריבלין ",
        answer: [
          {
            number: 1,
            body: "יושב-ראש הכנסת ה-16",
          },
          {
            number: 2,
            body: "יושב-ראש הכנסת ה-18",
          },
          {
            number: 3,
            body: "שר התקשורת",
          },
          {
            number: 4,
            body: "שר המדע",
          },
        ],
        correct: 4,
      },
      {
        question: "איזה תפקיד לא מילא יולי אדלשטיין",
        answer: [
          {
            number: 1,
            body: "יושב-ראש הכנסת ה-19",
          },
          {
            number: 2,
            body: "יושב-ראש הכנסת ה-20",
          },
          {
            number: 3,
            body: " שר הבינוי והשיכון",
          },
          {
            number: 4,
            body: "שר ההסברה והתפוצות",
          },
        ],
        correct: 3,
      },
      {
        question: "מה לא נכון לגבי שמעון פרס ",
        answer: [
          {
            number: 1,
            body: "כיהן כשר הביטחון, החוץ והאוצר",
          },
          {
            number: 2,
            body: "כיהן כראש הממשלה וכנשיא המדינה",
          },
          {
            number: 3,
            body: "כיהן כיושב-ראש ועדת החוץ והביטחון",
          },
          {
            number: 4,
            body: "היה חבר הכנסת שכיהן הכי הרבה שנים בכנסת",
          },
        ],
        correct: 3,
      },
    ],
  ],
  sport: [
    [
      {
        question:
          "How many soccer players should each team have on the field at the start of each match",
        answer: [
          {
            number: 1,
            body: "9",
          },
          {
            number: 2,
            body: "10",
          },
          {
            number: 3,
            body: "11",
          },
          {
            number: 4,
            body: "22",
          },
        ],
        correct: 3,
      },
      {
        question: " כשמייקל ג'ורדן שיחק בשיקגו בולס, בכמה אליפויות הוא זכה ",
        answer: [
          {
            number: 1,
            body: "9",
          },
          {
            number: 2,
            body: "6",
          },
          {
            number: 3,
            body: "7",
          },
          {
            number: 4,
            body: "15",
          },
        ],
        correct: 2,
      },
      {
        question: "What country won the very first FIFA World Cup in 1930",
        answer: [
          {
            number: 1,
            body: "England",
          },
          {
            number: 2,
            body: "Uruguay",
          },
          {
            number: 3,
            body: "Germany",
          },
          {
            number: 4,
            body: "Italy",
          },
        ],
        correct: 2,
      },
      {
        question: "Which country has won the World Cup the most times",

        answer: [
          {
            number: 1,
            body: "Argentina",
          },
          {
            number: 2,
            body: "Italy",
          },
          {
            number: 3,
            body: "France",
          },
          {
            number: 4,
            body: "Brazil",
          },
        ],
        correct: 4,
      },
      {
        question: "איזו נבחרת השתתפה בטורניר גביע העולם הכי הרבה פעמים",
        answer: [
          {
            number: 1,
            body: "ברזיל",
          },
          {
            number: 2,
            body: "ארגנטינה",
          },
          {
            number: 3,
            body: "צרפת",
          },
          {
            number: 4,
            body: "אנגליה",
          },
        ],
        correct: 1,
      },
    ],
    [
      {
        question:
          "How many soccer players should each team have on the field at the start of each match",
        answer: [
          {
            number: 1,
            body: "9",
          },
          {
            number: 2,
            body: "10",
          },
          {
            number: 3,
            body: "11",
          },
          {
            number: 4,
            body: "22",
          },
        ],
        correct: 3,
      },
      {
        question: " כשמייקל ג'ורדן שיחק בשיקגו בולס, בכמה אליפויות הוא זכה ",
        answer: [
          {
            number: 1,
            body: "9",
          },
          {
            number: 2,
            body: "6",
          },
          {
            number: 3,
            body: "7",
          },
          {
            number: 4,
            body: "15",
          },
        ],
        correct: 2,
      },
      {
        question: "What country won the very first FIFA World Cup in 1930",
        answer: [
          {
            number: 1,
            body: "England",
          },
          {
            number: 2,
            body: "Uruguay",
          },
          {
            number: 3,
            body: "Germany",
          },
          {
            number: 4,
            body: "Italy",
          },
        ],
        correct: 2,
      },
      {
        question: "Which country has won the World Cup the most times",

        answer: [
          {
            number: 1,
            body: "Argentina",
          },
          {
            number: 2,
            body: "Italy",
          },
          {
            number: 3,
            body: "France",
          },
          {
            number: 4,
            body: "Brazil",
          },
        ],
        correct: 4,
      },
      {
        question: "איזו נבחרת השתתפה בטורניר גביע העולם הכי הרבה פעמים",
        answer: [
          {
            number: 1,
            body: "ברזיל",
          },
          {
            number: 2,
            body: "ארגנטינה",
          },
          {
            number: 3,
            body: "צרפת",
          },
          {
            number: 4,
            body: "אנגליה",
          },
        ],
        correct: 1,
      },
    ],
    [
      {
        question: "איזה שחקן כדורגל זכה הכי הרבה פעמים עם נבחרתו בגביע עולם",
        answer: [
          {
            number: 1,
            body: "פלה",
          },
          {
            number: 2,
            body: "מרדונה",
          },
          {
            number: 3,
            body: "זידאן",
          },
          {
            number: 4,
            body: "רונאלדו",
          },
        ],
        correct: 1,
      },
      {
        question:
          "Which football player received the Ballon d'Or the most times",
        answer: [
          {
            number: 1,
            body: "Ronaldinio",
          },
          {
            number: 2,
            body: "Messi",
          },
          {
            number: 3,
            body: "Benzema",
          },
          {
            number: 4,
            body: "Cristiano Ronaldo",
          },
        ],
        correct: 2,
      },
      {
        question: "איזה שחקן כדורגל לקח הכי הרבה תארים",
        answer: [
          {
            number: 1,
            body: "לאו מסי",
          },
          {
            number: 2,
            body: "דני אלבס",
          },
          {
            number: 3,
            body: "ווין רוני",
          },
          {
            number: 4,
            body: "כרים בנזמה",
          },
        ],
        correct: 2,
      },
      {
        question: "Once in how many years is the Euro tournament held",
        answer: [
          {
            number: 1,
            body: "2",
          },
          {
            number: 2,
            body: "6",
          },
          {
            number: 3,
            body: "3",
          },
          {
            number: 4,
            body: "4",
          },
        ],
        correct: 4,
      },
      {
        question: "Which team has won the Euro the most times",
        answer: [
          {
            number: 1,
            body: "Garmany",
          },
          {
            number: 2,
            body: "Spain",
          },
          {
            number: 3,
            body: "England",
          },
          {
            number: 4,
            body: "Answers 1 and 2 are correct",
          },
        ],
        correct: 4,
      },
    ],
  ],
  tecnology: [
    [
      {
        question:
          "באיזו שנה יצא הדגם הראשון של האייפון",
        answer: [
          {
            number: 1,
            body: "2005",
          },
          {
            number: 2,
            body: "2009",
          },
          {
            number: 3,
            body: "2001",
          },
          {
            number: 4,
            body: "2007",
          },
        ],
        correct: 4,
      },
      {
        question: " באיזו עיירה פיתח אלן טיורינג את המכונה שבאמצעותה פוצחה האניגמה",
        answer: [
          {
            number: 1,
            body: " בנצ'לי פארק",
          },
          {
            number: 2,
            body: "אניגמה טאון",
          },
          {
            number: 3,
            body: "בלצ'לי פארק",
          },
          {
            number: 4,
            body: "ווסט ברידג'פורד",
          },
        ],
        correct: 3,
      },
      {
        question: " ERP מהם ראשי התיבות ",
        answer: [
          {
            number: 1,
            body: "Enterprise Resource Platform",
          },
          {
            number: 2,
            body: "Enterprise Resource Planning",
          },
          {
            number: 3,
            body: "Enterprise Resource Program",
          },
          {
            number: 4,
            body: "Enterprise Resource Progressive",
          },
        ],
        correct: 2,
      },
      {
        question: "מי היה שותפו של סטיב ג'ובס להקמת אפל ומהו כינויו",

        answer: [
          {
            number: 1,
            body: "ביל גייטס , בילי דה קיד",
          },
          {
            number: 2,
            body: "מארק ג'ובס תאבי האפליקציות",
          },
          {
            number: 3,
            body: "לא היה לו שותף",
          },
          {
            number: 4,
            body: "סטיב ווזניאק , ווז",
          },
        ],
        correct: 4,
      },
      {
        question: "מה שמה של בכירת ההיי-טק שניסתה להתמודד בבחירות לנשיאות ארצות הברית",
        answer: [
          {
            number: 1,
            body: " אורסולה ברנס ",
          },
          {
            number: 2,
            body: " קרלי פיורינה",
          },
          {
            number: 3,
            body: " מג וויטמן",
          },
          {
            number: 4,
            body: " הילרי קלינטון",
          },
        ],
        correct: 2,
      },
    ],
    [
      {
        question: "איזה מהשמות הבאים לא מתקשר לאילון מאסק ",

        answer: [
          {
            number: 1,
            body: "טסלה",
          },
          {
            number: 2,
            body: "Space X",
          },
          {
            number: 3,
            body: " Space IL",
          },
          {
            number: 4,
            body: "טולסה",
          },
        ],
        correct: 3,
      },
      {
        question: "מיהי האישה הבכירה בפייסבוק",
        answer: [
          {
            number: 1,
            body: " שריל סנדברג ",
          },
          {
            number: 2,
            body: " שריל זנדברג",
          },
          {
            number: 3,
            body: " עדי סופר-תאני",
          },
          {
            number: 4,
            body: "סוזאן דלמונד ",
          },
        ],
        correct: 1,
      },
      {
        question: "באיזו שנה הוקם האינטרנט",
        answer: [
          {
            number: 1,
            body: " 1983",
          },
          {
            number: 2,
            body: "1978 ",
          },
          {
            number: 3,
            body: "1968 ",
          },
          {
            number: 4,
            body: "1985 ",
          },
        ],
        correct: 3,
      },
      {
        question: "איך נקרא הדפדפן הראשון ",
        answer: [
          {
            number: 1,
            body: " אקספלורר",
          },
          {
            number: 2,
            body: "מוזאיק",
          },
          {
            number: 3,
            body: "אינטרווקס",
          },
          {
            number: 4,
            body: "אף אחת מהתשובות",
          },
        ],
        correct: 4,
      },
      {
        question: "איזה שירות מייל נמצא בבעלות מיקרוסופט",
        answer: [
          {
            number: 1,
            body: "Hotmail",
          },
          {
            number: 2,
            body: "Bobmail",
          },
          {
            number: 3,
            body: "Xmail",
          },
          {
            number: 4,
            body: "Beemail",
          },
        ],
        correct: 1,
      },
    ],
  ],
};

app.get("/all%20categories", (req, res) => {
  const allCategoryArr = [];
  Object.values(data).forEach(val => allCategoryArr.push(val[Math.floor(Math.random() * val.length)]))
  sorting(allCategoryArr);
  res.send(allCategoryArr);
});

app.get("/:catrgoryId", (req, res) => {
  const { catrgoryId } = req.params;
  console.log(catrgoryId);
  sorting(data[catrgoryId]);
  res.send(data[catrgoryId]);
});

app.listen(8000, () => console.log("listning to port 8000...."));
