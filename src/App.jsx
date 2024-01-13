import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import QuestionForm from "./components/QuestionForm";
import {
  getAnswer,
  BASE_URL,
  getAnswerAsync,
} from "./services/yesOrNotService";
import AnswerCard from "./components/AnswerCard";

function App() {
  const [answer, setAnswer] = useState(null);

  const getData = async () => {
    let data = await getAnswerAsync();
    setAnswer(data);
  };

  return (
    <>
      <QuestionForm getData={getData} />
      <AnswerCard {...answer} />
    </>
  );
}

export default App;
