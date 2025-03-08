function createBubble() { 
    const footer = document.querySelector("footer");
    const bubble = document.createElement("div");
    bubble.classList.add("bubble");

    // Bigger Random Size (50px - 100px)
    let size = Math.random() * 50 + 50; 
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;

    // Random Position
    bubble.style.left = `${Math.random() * 100}%`;

    // Random Animation Speed
    bubble.style.animationDuration = `${Math.random() * 4 + 3}s`;

    footer.appendChild(bubble);

    // Remove Bubble After Animation Ends
    setTimeout(() => {
        bubble.remove();
    }, 5000);
}

// Generate Bubbles Continuously
setInterval(createBubble, 400);
function logout() {
    localStorage.removeItem("userRole"); // User ka role remove karna
    localStorage.removeItem("username"); // Agar username bhi store hai to remove karna
    window.location.href = "login.html"; // Redirect to login page
}
//.............reports.///
document.addEventListener("DOMContentLoaded", function () {
    const reportsTableBody = document.querySelector("#reports-table tbody");
    const searchInput = document.getElementById("search");
    const exportBtn = document.getElementById("export-btn");

    // Sample attendance data (Replace with database integration)
    const attendanceRecords = [
        { id: 1, name: "Maria", date: "2025-02-21", status: "Absent" },
        { id: 2, name: "Ali", date: "2025-02-21", status: "Present" },
        { id: 3, name: "Ayesha", date: "2025-02-21", status: "Present" },
        { id: 4, name: "Maria", date: "2025-02-22", status: "Present" }
    ];

    function loadReports(records) {
        reportsTableBody.innerHTML = "";
        records.forEach(record => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${record.id}</td>
                <td>${record.name}</td>
                <td>${record.date}</td>
                <td>${record.status}</td>
            `;
            reportsTableBody.appendChild(row);
        });
    }

    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase();
        const filteredRecords = attendanceRecords.filter(record => 
            record.name.toLowerCase().includes(searchValue)
        );
        loadReports(filteredRecords);
    });

    exportBtn.addEventListener("click", function () {
        let csvContent = "data:text/csv;charset=utf-8,Student ID,Student Name,Date,Status\n";
        attendanceRecords.forEach(record => {
            csvContent += `${record.id},${record.name},${record.date},${record.status}\n`;
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "attendance_reports.csv");
        document.body.appendChild(link);
        link.click();
    });

    loadReports(attendanceRecords);
});
