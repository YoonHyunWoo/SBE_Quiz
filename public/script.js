const StartScreen = (props) => {
    let classes = ["start-screen"];
  
    if (props.started) {
      classes.push("start-screen--started");
    }
    return (
      
      
      
      <div class={classes.join(" ")}>
{/*    <div class="logo-box">
          <img src = "https://sbe-ox.s3.ap-northeast-2.amazonaws.com/Logo_black-removebg-preview.png" id ="logo"/>
          <p>SBE</p>
        </div> */}
        <img className="icon" src="https://sbe-ox.s3.ap-northeast-2.amazonaws.com/Logo_black-removebg-preview.png"/> 
        <h1>세붕이 코드 페스티벌 퀴즈 게임! </h1> 
        <button onClick={props.startGame} class="start-screen__btn">
          시작하기
        </button>
      </div>
    );
  };
  
  const EndScreen = (props) => {
    const score = (props.score / props.total) * 100;
  
    let classes = ["end-screen"];
    let message = "";
    if(props.show){
      classes.push("end-screen--show");
    }
    
    classes.push("end-screen--loser");
    message = "점입니다! 👏 다른 참가자가 끝나기를 기다려주세요.";
    return (
      
      <div class={classes.join(" ")}>
  
        <h1>
          {score}{message}
        </h1>
      </div>
    );
  };
  
  const ProgressBar = (props) => {
    return (
      <div class="progress">
        <progress
          class="progress__bar"
          max={props.total}
          value={props.position}
        ></progress>
        
      </div>
    );
  };
  
  const PlayerScore = (props) => {
    return (
      <div class="player">
        <h3>
          맞춘 개수: {props.score}/{props.total}
        </h3>
      </div>
    );
  };
  
  const QuizActions = (props) => {
    if (props.position >= props.total) {
      return (
        <div class="actions">
          <button
            class="actions__btn"
            onClick={props.finish}
            disabled={props.actionDisabled}
          >
            제출하기!
          </button>
        </div>
      );
    } else {
      return (
        <div class="actions">
          <button
            class="actions__btn"
            onClick={props.action}
            disabled={props.actionDisabled}
          >
            다음 문제 
          </button>
        </div>
      );
    }
  };
  
  const Question = (props) => {
    return (
      
      <div class="quiz">
        
        <div class="quiz__question">
          <h1>{props.current.question}</h1>
        </div>
        <div class="quiz__answers">
          {props.current.answers.map((a, index) => (
            <button
              onClick={(event) => {
                props.answerAction(a);
              }}
              class={props.answerClasses.join(" ")}
              key={index}
              disabled={props.answered ? true : false}
            >
              {a.label}
            </button>
          ))}
        </div>
      </div>
    );
  };
  
  class App extends React.Component {
    state = {
      quiz: [
        {
          id: "1j3hkldj",
          question: "How many notes are there in a musical scale?",
          answers: [
            { label: "7", correct: true },
            { label: "8", correct: false },
            { label: "9", correct: false },
            { label: "10", correct: false }
          ]
        },
        {
          id: "aksldn834",
          question: "What temperature centigrade does water boil at?",
          answers: [
            { label: "212", correct: false },
            { label: "160", correct: false },
            { label: "100", correct: true },
            { label: "425", correct: false }
          ]
        },
        {
          id: "akjhvcpoiq",
          question:
            "What company is also the name of one of the longest rivers in the world?",
          answers: [
            { label: "Google", correct: false },
            { label: "Amazon", correct: true },
            { label: "Facebook", correct: false },
            { label: "Twitter", correct: false }
          ]
        },
        {
          id: "uq2ch049",
          question: "What in the animal kingdom is a doe?",
          answers: [
            { label: "Female Deer", correct: true },
            { label: "Male Goat", correct: false },
            { label: "Male Giraffe", correct: false },
            { label: "Female Penguin", correct: false }
          ]
        },
        {
          id: "19u04skd",
          question: "What is the tallest mountain in the world?",
          answers: [
            { label: "Mount Kilimanjaro", correct: false },
            { label: "Mount Rushmore", correct: false },
            { label: "Mount Saint Helens", correct: false },
            { label: "Mount Everest", correct: true }
          ]
        },
        {
          id: "587yshio",
          question: "How many centimetres in a metre",
          answers: [
            { label: "12", correct: false },
            { label: "100", correct: true },
            { label: "36", correct: false },
            { label: "5280", correct: false }
          ]
        },
        {
          id: "81y4nckzj",
          question: "What language is spoken in Norway?",
          answers: [
            { label: "Spanish", correct: false },
            { label: "Nordic", correct: false },
            { label: "Norwegian", correct: true },
            { label: "English", correct: false }
          ]
        },
        {
          id: "91438fhxk",
          question: "What is the busiest airport in Britain called?",
          answers: [
            { label: "London Heathrow", correct: true },
            { label: "London City Airport", correct: false },
            { label: "London Stansted Airport", correct: false },
            { label: "London Southend Airport ", correct: false }
          ]
        },
        {
          id: "8yshviua9",
          question:
            "Who is next in line to the British throne after Queen Elizabeth II?",
          answers: [
            { label: "Prince Philip", correct: false },
            { label: "Prince Harry", correct: false },
            { label: "Prince Charles", correct: true },
            { label: "Prince William", correct: false }
          ]
        },
        {
          id: "2fiuhs98",
          question: "What number is a baker’s dozen?",
          answers: [
            { label: "15", correct: false },
            { label: "14", correct: false },
            { label: "13", correct: true },
            { label: "12", correct: false }
          ]
        }
      ],
      currentQuestion: {
        id: "1j3hkldj",
        question: "How many notes are there in a musical scale?",
        answers: [
          { label: "7", correct: true },
          { label: "8", correct: false },
          { label: "9", correct: false },
          { label: "10", correct: false }
        ]
      },
      currentQuestionIndex: 0,
      currentPosition: 1,
      userpoints: 0,
      actionDisabled: true,
      answeredStatus: false,
      answerClasses: ["quiz__answer"],
      gameStarted: false,
      showEndScreen: false
    };
  
    startGame = () => {
      let started = this.state.gameStarted;
      started = true;
  
      this.setState({
        gameStarted: started
      });
    };
  
    increaseCurrentPosition = () => {
      let pos = this.state.currentPosition;
      if (pos > this.state.quiz.length) {
        return;
      }
      pos++;
      this.setState({
        currentPosition: pos
      });
    };
  
    increasePlayerScore = () => {
      let score = this.state.userpoints;
      score++;
      if (score > this.state.quiz.length) {
        return;
      }
      this.setState({
        userpoints: score
      });
    };
  
    toggleActionButton = () => {
      let status = this.state.actionDisabled;
  
      status = !status;
  
      this.setState({
        actionDisabled: status
      });
    };
  
    renderNextQuestion = () => {
      let answered = false;
      this.setState({
        answeredStatus: answered
      });
  
      let currentI = this.state.currentQuestionIndex;
  
      if (currentI > this.state.quiz.length) {
        currentI = this.state.currentQuestionIndex;
        return;
      }
  
      this.increaseCurrentPosition();
      currentI++;
  
      let currentQ = this.state.quiz[currentI];
  
      this.setState({
        currentQuestionIndex: currentI,
        currentQuestion: currentQ
      });
  
      this.toggleActionButton();
    };
  
    checkAnswer = (answer) => {
      let answered = true;
      this.setState({
        answeredStatus: answered
      });
  
      if (answer.correct) {
        this.increasePlayerScore();
      }
      this.toggleActionButton();
    };
  
    toggleEndScreen = () => {
      let status = this.state.showEndScreen;
      status = !status;
  
      this.setState({
        showEndScreen: status
      });
    };
  
    render() {
      return (
        <div class="quiz-app">
          <StartScreen
            started={this.state.gameStarted}
            startGame={this.startGame}
          />
          <ProgressBar
            position={this.state.currentPosition}
            total={this.state.quiz.length}
          />
  
          <Question
            current={this.state.currentQuestion}
            answerAction={this.checkAnswer}
            answered={this.state.answeredStatus}
            answerClasses={this.state.answerClasses}
          />
  
          <QuizActions
            position={this.state.currentPosition}
            total={this.state.quiz.length}
            action={this.renderNextQuestion}
            actionDisabled={this.state.actionDisabled}
            finish={this.toggleEndScreen}
          />
  
          <PlayerScore
            score={this.state.userpoints}
            total={this.state.quiz.length}
          />
  
          <EndScreen
            show={this.state.showEndScreen}
            score={this.state.userpoints}
            total={this.state.quiz.length}
          />
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("app"));
  