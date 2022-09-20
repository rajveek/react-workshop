import Counter from "./Counter";

export default function Body({ count, setCount }) {
  return (
    <div>
      <h1>body</h1>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}