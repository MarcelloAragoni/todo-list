import TodoList, { Todo } from "./components/TodoList/TodoList";

const itemsList: Todo[] = [
  { text: "Fazer contador" },
  { text: "Checar caixa de entrada do e-mail" },
  { text: "Ver animes" },
  { text: "Jogar fortnite" },
  { text: "ver seriado" },
];

function App() {
  return <TodoList ItemList={itemsList} />;
}

export default App;
