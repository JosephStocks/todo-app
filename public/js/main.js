let form = document.querySelector("form");

form.addEventListener("click", async (e) => {
    // let svg = e.target.closest("svg"); // (1)

    // if (!svg) return; // (2)

    // if (!form.contains(svg)) return; // (3)
    let closestSVG = e.target.closest("svg");
    if (closestSVG) {
        // e.preventDefault();

        // console.log(svg.id);
        console.log(closestSVG.id);

        let response = await fetch("/", {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                id: closestSVG.id,
            }),
        });
        let data = await response.json();
        console.log(typeof data);
        let ejsTemplate = `
                <% todos.forEach( (todoObj, index) => { %>
                    <% id = todoObj.id; %>
                    <% let checked = '' %> 
                    <% if (todoObj.completed) { %>
                        <% checked = 'checked' %> 
                    <% } %>

                    <div class="group flex items-center ml-2">
                        <input type="checkbox" id="<%= id %>" name="<%= id %>" value="<%= id %>" class="text-gray-500 w-6 h-6 rounded-md self-start sm:mt-1.5" <%= checked %>>
                        <label for="<%= id %>" class="ml-2 sm:ml-3 checked-sibling:opacity-50 checked-sibling:line-through text-lg leading-snug sm:text-3xl"><%= todoObj.description %> </label>
                        <svg id="<%= id %>" class="mr-1 sm:mr-3 ml-1 sm:ml-auto sm:mt-1.5 opacity-0 group-hover:opacity-100 no-hover:opacity-100 hover:cursor-pointer w-4 h-4 sm:w-6 sm:h-6 fill-current text-gray-500 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                        </svg>
                    </div>
                <% }) %>`;
        let html = ejs.render(ejsTemplate, { todos: data.records });
        console.log(html);
        document.querySelector(".uncompleted-tasks").innerHTML = html;

        // svg.closest(".group").remove();
        return;
    }
});
