import { useState, useEffect } from "react";

// Instructions:
// Create a custom Hook to detect if the user scrolled to the bottom of the page

const usePageBottom = () => {
  /* logic goes here */
  const [res, setRes] = useState(false);
  const handleScroll = () => {
    const scrollPos =
      document.documentElement.offsetHeight -
        (window.innerHeight + window.scrollY) <=
      20;
    setRes(scrollPos);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return res;
};

export default function CheckPageBottom() {
  const reachedBottom = usePageBottom();
  console.log("reachedBottom", reachedBottom);
  let arr = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
  ];
  return (
    <div className="App">
      <h1>Welcome to React Challenges</h1>
      {arr.map((num, index) => (
        <h2 key={index + " " + num}>{num}</h2>
      ))}
      <footer>&copy; 2022 React challenges.live</footer>
    </div>
  );
}
