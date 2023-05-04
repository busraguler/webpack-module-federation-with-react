import React from "react";

const Sample = React.lazy(() => import("sample/App"));

function App() {
  return (
    <>
      <div>Layoutt</div>
      <React.Suspense fallback="Loading Button">
        <Sample />
      </React.Suspense>
    </>
  );
}

export default App;
