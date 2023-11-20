function openthis(content) {
    console.log("Helloo");
    var titles = document.getElementsByClassName("title1");
    var tabcontents = document.getElementsByClassName("tab-content");

    for (t of titles) {
        t.classList.remove("activate");
        console.log(t.classList);
    }

    for (tabcontent1 of tabcontents) {
        tabcontent1.classList.remove("active");
    }

    event.currentTarget.classList.add("activate"); // Corrected 'Event' to 'event'
    document.getElementById(content).classList.add("active");
}
