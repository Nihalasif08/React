const parent = React.createElement("div", { className: "parent" }, [
    React.createElement("div", { className: "child1" }, [
      React.createElement("h1", {}, "we are great"),
      React.createElement("h2", {}, "great"),
    ]),
    React.createElement("div", { className: "child2" }, [
      React.createElement("h1", {}, "we are great"),
      React.createElement("h2", {}, "great"),
    ]),
  ]);
  
  const root = ReactDOM.createRoot(document.getElementsByClassName("root")[0]);
  
  root.render(parent);
  