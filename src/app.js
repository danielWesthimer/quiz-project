const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());

function shuffle(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      array[i][j].answer.sort(() => Math.random() - 0.5);
    }
  }
}

const data = {
  animals: [
    [
      {
        question:
          "How many soccer animals should each team have on the field at the start of each match",
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
        question: "איזה שחקן כדורגל זכה הכ הרבה פעמים עם נבחרתו בגביע עולם",
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
          "How many soccer tec should each team have on the field at the start of each match",
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
        question: "איזה שחקן כדורגל זכה הכ הרבה פעמים עם נבחרתו בגביע עולם",
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
};
app.get("/animals", (req, res) => {
  const url = req.url;
  shuffle(data.animals);
  res.send(data.animals);
});
app.get("/sport", (req, res) => {
  const url = req.url;
  shuffle(data.sport);
  res.send(data.sport);
});
app.get("/tecnology", (req, res) => {
  const url = req.url;
  shuffle(data.tecnology);
  res.send(data.tecnology);
});
app.get("/all%20category", (req, res) => {
  const url = req.url;
  shuffle(data.tecnology);

  res.send(data.tecnology);
});
app.listen(8000, () => console.log("listning to port 8000...."));
