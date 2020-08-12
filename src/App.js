import React from "react";
import "./styles.css";

// don't edit these
const drivers = {
  mario: { courses: ["a"] },
  peach: { courses: ["a", "b"] },
  luigi: { courses: ["a", "b", "c"] }
};
const courses = ["a", "b", "c"];

// edit these two
const owned = ["mario", "peach"];
const proposed = "luigi";

const covered = [
  // remove duplicates
  ...new Set(
    // get courses for all owned drivers
    owned.map((name) => drivers[name].courses).flat()
  )
];
const gained = courses.filter(
  (name) =>
    // find courses not already covered
    !covered.find((n) => n === name) &&
    // and that the proposed driver has
    drivers[proposed].courses.find((n) => n === name)
);

export default function App() {
  return (
    <div className="App">
      <h1>overlap finder</h1>
      <pre>drivers: {JSON.stringify(drivers, null, " ")}</pre>
      <pre>courses: {JSON.stringify(courses)}</pre>
      <pre>owned: {JSON.stringify(owned)}</pre>
      <pre>proposed: {proposed}</pre>
      <pre>already covered: {JSON.stringify(covered)}</pre>
      <pre>newly gained: {JSON.stringify(gained)}</pre>
    </div>
  );
}
