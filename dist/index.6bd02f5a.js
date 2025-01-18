/**
 * <div id='parent'>
 *   <div id='child'>
 *     <h1>Hello World </h1>
 *    </div>
 * </div>
 */ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "Hello this is nested heading"),
        React.createElement("h2", {}, "Hello this is nested heading 2")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "Hello this is nested heading"),
        React.createElement("h2", {}, "Hello this is nested heading 2")
    ])
]);
//** JSX */
console.log(parent);
const heading = React.createElement("h1", {
    id: "heading",
    abc: 123
}, "Hello World !");
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
console.log(root.render(parent));

//# sourceMappingURL=index.6bd02f5a.js.map
