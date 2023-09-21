import { useState, useEffect } from "preact/hooks";
export default function Timer() {
  const [time, setTime] = useState<number>(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [time]);

  return <b>{time}</b>;
}
