import { RootState } from "./redux/store";
import { decrement, increment, incrementByAmount } from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <div className="flex items-center gap-6 my-4 mx-3">
        <button onClick={() => dispatch(increment())} className="btn btn-primary">
          increment
        </button>
        <button onClick={() => dispatch(incrementByAmount(5))} className="btn btn-primary">
          increment by amount
        </button>
        <h2>{count}</h2>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-secondary"
        >
          decrement
        </button>
      </div>
    </>
  );
}

export default App;
