import { useState } from "preact/hooks";
import "./app.css";

export function App() {
  const [count, setCount] = useState(0);

  function handleOnChange(event: Event) {
    const target = event.target as HTMLInputElement;

    setCount(parseInt(target?.value));
  }

  function handleCreate() {
    parent.postMessage(
      { pluginMessage: { type: "create-rectangles", count } },
      "*",
    );
  }

  function handleCancel() {
    parent.postMessage({ pluginMessage: { type: "cancel" } }, "*");
  }

  return (
    <div className="flex flex-col gap-6 w-full h-full">
      <h1 className="text-3xl font-bold underline text-green-300 my-4">
        Hello world!
      </h1>

      <h2>Rectangle Creator</h2>
      <p>
        Count: <input id="count" value={count} onChange={handleOnChange} />
      </p>
      <button id="create" onClick={handleCreate}>
        Create
      </button>
      <button id="cancel" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}