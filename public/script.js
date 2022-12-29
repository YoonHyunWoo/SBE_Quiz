import React from 'react';
import ReactDOM from 'react-dom';



const StartScreen = (props) => {
    let classes = ["start-screen"];
  
    if (props.started) {
      classes.push("start-screen--started");
    }
    return (
      
      
      
      <div className={classes.join(" ")}>
{/*    <div className="logo-box">
          <img src = "https://sbe-ox.s3.ap-northeast-2.amazonaws.com/Logo_black-removebg-preview.png" id ="logo"/>
          <p>SBE</p>
        </div> */}
        <img className="icon" src="https://sbe-ox.s3.ap-northeast-2.amazonaws.com/Logo_black-removebg-preview.png"/> 
        <h1>세붕이 이벤트 퀴즈 게임! </h1> 
        <button onClick={props.startGame} className="start-screen__btn">
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
    message = "점입니다! 🎉"
    
    
    
    return (
      
      <div className={classes.join(" ")}>
  
        <h1>
         <score id='score'>{Math.round(score)}</score> {message}
          <br/> 아래 버튼을 눌러 제출해주세요 <br/>

           <div className="form__group field">

            {/* <input type="input" className="form__field" placeholder="Name" name="name" id='name' required /> */}
            <button id='submit' onClick={props.submit}>💌</button>
  
          </div>
        
        </h1>
      </div>
    );
  
  

  };
  
  const ProgressBar = (props) => {
    return (
      <div className="progress">
        <progress
          className="progress__bar"
          max={props.total}
          value={props.position}
        ></progress>
        
      </div>
    );
  };
  
  const PlayerScore = (props) => {
    return (
      <div className="player">
        <h3>
          맞춘 개수: {props.score}/{props.total}
        </h3>
      </div>
    );
  };
  
  const QuizActions = (props) => {
    if (props.position >= props.total) {
      return (
        <div className="actions">
          <button
            className="actions__btn"
            id='ActionBTN'
            onClick={props.finish}
            disabled={props.actionDisabled}
          >
            제출하기!
          </button>
        </div>
      );
    } else {
      return (
        <div className="actions">
          <button
            className="actions__btn"
            onClick={
              props.action
            
            }
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
      
      <div className="quiz">
        
        <div className="quiz__question">
          <h1>{props.current.question}</h1>
        </div>
        <div className="quiz__answers">
          {props.current.answers.map((a, index) => (
            
            <button 
            
              onClick={(event) => {
                props.answerAction(a);
                
                setTimeout(() => {
                  document.getElementsByClassName('actions__btn')[0].click()
                }, 100)

                
              }}
              className={props.answerClasses.join(" ")}
              
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
          question: "CRUD의 4개의 동작 중 틀린 것은?",
          answers: [
            { label: "C : Create", correct: false },
            { label: "R : Read", correct: false },
            { label: "U : Update", correct: false },
            { label: "D : Describe", correct: true }
          ]
        },
        {
          id: "aksldn834",
          question: "macOS의 기반이 되는 운영 체제는?",
          answers: [
            { label: "CentOS", correct: false },
            { label: "IBM AIX", correct: false },
            { label: "BSD", correct: true },
            { label: "Window", correct: false }
          ]
        },
        {
          id: "2fiuhs98",
          question: "데니스 리치의 C 교재 중 처음으로 등장한 헬로 월드의 정확한 철자는?",
          answers: [
            { label: "Hello, world!", correct: true },
            { label: "Hello World!", correct: false },
            { label: "hello world!", correct: false },
            { label: "Hello, World!", correct: false }
          ]
        },
        {
          id: "2fiuhawd",
          question: "지리적으로 분산된 캐싱 시스템인 CDN의 D는 무엇을 의미할까요?",
          answers: [
            { label: "Document", correct: false },
            { label: "Data", correct: false },
            { label: "Dirven", correct: false },
            { label: "Delivery", correct: true }
          ]
        },
        {
          id: "2fiuhddd",
          question: "Java에서 Overriding의 설명 중 틀린 것은?",
          answers: [
            { label: "부모클래스에서 상속받은 클래스를 자식 클래스가가 재정의 한다", correct: false },
            { label: "parameter 및 return type는 같아야 한다.", correct: false },
            { label: "Java 1.5 이상부터는 return type이 같은 클래스나 subclass가 될 수도 있다.", correct: false },
            { label: "동일한 이름을 가진 메소드들이 같은 클래스에 존재하고 파라미터에 따라서 호출이 된다", correct: true }
          ]
        },
        {
          id: "2fiuhwww",
          question: "다음 python code의 출력은?  number = input()  print(type(number))",
          answers: [
            { label: "<class 'float'>", correct: false },
            { label: "<class 'list'>", correct: false },
            { label: "<class 'int'>.", correct: false },
            { label: "<class 'str'>", correct: true }
          ]
        },
        {
          id: "6wiuhwww",
          question: "버전 관리 시스템중 하나인 Git의 창시자는?",
          answers: [
            { label: "Java의 아버지, 제임스 고슬링", correct: false },
            { label: "Linux의 아버지, 리누스 토르발스", correct: true },
            { label: "WWW(World Wide Web)의 아버지, 팀 버너스 리", correct: false },
            { label: "CS(Computer Science)의 아버지, 앨런 튜링.", correct: false }
          ]
        }
      ],
      currentQuestion: {
        
          id: "1j3hkldj",
          question: "CRUD의 4개의 동작 중 틀린 걸 고르시오",
          answers: [
            { label: "C : Create", correct: false },
            { label: "R : Read", correct: false },
            { label: "U : Update", correct: false },
            { label: "D : Describe", correct: true }
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

    uncreasePlayerScore = () => {
      console.log("hello");
      let score = this.state.userpoints;
      score--;
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
    }

    Submitput = () => {
      // var name2 = document.getElementById("name").value
      var name2 = prompt("당신의 이름은 무엇인가요?"+"");
      if(!name2){
        alert("닉네임을 입력해주세요!")
      }else{
        var score2 = document.getElementById("score").textContent
        var url =  "https://0wdl7sk3vj.execute-api.ap-northeast-2.amazonaws.com/default/putscore"
        fetch(url, {
          mode: "cors",
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            "name": name2,
            "score": score2,
          }),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
        alert("제출되셨습니다, 수고하셨습니다!")
        location.href = location.href
      }
      
     }
  
    render() {
      return (
        <div className="quiz-app">
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
            submit={this.Submitput}
          />
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("app"));
  