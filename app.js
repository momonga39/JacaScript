const quiz = [
  {
    question: 'game',
    answers: [
      'superfm',
      'ps2',
      'nintendosw',
      'ds' 
    ],
    correct: 'ds'
  },{
    question: 'itoi',
    answers: [
      'mother2',
      'sm3',
      'd',
      'k'     
    ],
    correct: 'mother2'
  },{
    question: 'ff4',
    answers: [
      'f',
      'k',
      't',
      's'     
    ],
    correct:'s'
  }
];

const quizLength = quiz.length
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズ問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  let buttonLength = $button.length;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}

setupQuiz();

//問題文
//e = MouseEvent 
const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('correct');
    score++;
  } else {
    window.alert('NG');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題があればこちらを実行
    setupQuiz();
  }else{
    //問題がなければ
    window.alert('end' + score + '/' + quizLength);
  }
};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  }); 
  handlerIndex++;
}
