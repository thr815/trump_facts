document.addEventListener("DOMContentLoaded", function () {
    fetch('data/facts.json')
        .then(response => response.json())
        .then(data => {
            const tableBody = document.querySelector("#facts-table tbody");
            data.forEach(fact => {
                const row = document.createElement("tr");
                row.innerHTML = `
                    <td>${fact.date}</td>
                    <td>${fact.fact}</td>
                    <td>${fact.sources.join(", ")}</td>
                    <td>${fact.media.join(", ")}</td>
                    <td>${fact.confidence}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error("Error loading facts:", error));
});