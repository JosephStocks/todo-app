let form = document.querySelector("form");

form.addEventListener("click", (e) => {
    e.preventDefault();

    let svg = e.target.closest("svg"); // (1)

    if (!svg) return; // (2)

    if (!form.contains(svg)) return; // (3)

    console.log(svg.id);

    fetch("/", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: svg.id,
        }),
    })
        .then((data) => {
            console.log("this loads??..");
            window.location.reload();
        })
        .catch((error) => {
            console.error(error);
        });

    svg.closest(".group").remove();
    // fetch("/", {
    //     method: "DELETE",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //         id: document.querySelector("#name").value,
    //     }),
    // })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data);

    //         // let newChildDiv = $("<div>").text(response);
    //         // $("#comments").append(newChildDiv);
    //         let comments = document.querySelector("#comments");

    //         comments.innerHTML += `<b>${
    //             data.name
    //         }</b> <i>${Date.now()}</i> <br>${data.message}<br>`;
    //     });
});
