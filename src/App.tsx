
export function label(name: string) {
  return `Hello ${name}`;
}

function App() {
  return <div><h1>{label("React")}</h1></div>;
}

export default App;
