import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

function ChildComponent() {
  const navigate = useNavigate();

  const redirectToAnotherPage = (event) => {
    const buttonText = event.currentTarget.innerText;
    console.log(buttonText);// Wyświetli tekst przycisku w konsoli
  };

  return (
    <div className="wrapper">
      <h1>pick one</h1>
      <ul>
        <li className="pick-one">
          <button onClick={(event) => redirectToAnotherPage(event)}>
            <img src="/public/rock.png" alt="Rock" />
            rock
          </button>
        </li>
        <li className="pick-one">
          <button onClick={(event) => redirectToAnotherPage(event)}>
            <img src="./public/paper.png" alt="Paper" />
            paper
          </button>
        </li>
        <li className="pick-one">
          <button onClick={(event) => redirectToAnotherPage(event)}>
            <img src="./public/scissors.png" alt="Scissors" />
            scissors
          </button>
        </li>
      </ul>
    </div>
  );
}
export default ChildComponent;