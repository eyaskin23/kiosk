document.getElementById('loadData').addEventListener('click', function() {
    db.collection("checks").get().then((querySnapshot) => {
        var recordsHTML = "";
        querySnapshot.forEach((doc) => {
            let data = doc.data();
            recordsHTML += `<div>Name: ${data.name}, Date: ${data.date}, Time: ${data.time}</div>`;
            // Assuming locations are stored as an array
            if(data.locations && data.locations.length > 0) {
                recordsHTML += `<div>Locations: ${data.locations.join(", ")}</div>`;
            }
            recordsHTML += "<hr>"; // Add a divider between records
        });
        document.getElementById('records').innerHTML = recordsHTML;
    });
});
