import Counter from "./Counter";

export default function Head({ count, setCount }) {
  return (
    <div >
      <h1>head</h1>
      <Counter count={count} setCount={setCount} />
    </div>
  );
}