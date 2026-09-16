(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var form = document.getElementById("quote-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var name = (form.name.value || "").trim();
    var business = (form.business.value || "").trim();
    var phone = (form.phone.value || "").trim();
    var email = (form.email.value || "").trim();
    var town = (form.town.value || "").trim();
    var sector = (form.sector.value || "").trim();
    var item = (form.item.value || "").trim();
    var material = (form.material.value || "").trim();
    var contaminant = (form.contaminant.value || "").trim();
    var size = (form.size.value || "").trim();
    var site = (form.site.value || "").trim();
    var access = (form.access.value || "").trim();
    var timing = (form.timing.value || "").trim();
    var notes = (form.notes.value || "").trim();

    if (!name || !phone || !item) {
      alert("Please fill in your name, phone, and what needs cleaning.");
      return;
    }

    var subject = "Laser Restore NI quote — " + (item.slice(0, 60) || "enquiry");
    var body = [
      "Quote request via Laser Restore NI static website",
      "",
      "Name: " + name,
      "Business: " + (business || "(not given)"),
      "Phone: " + phone,
      "Email: " + (email || "(not given)"),
      "Location / town: " + (town || "(not given)"),
      "Item / sector type: " + (sector || "(not given)"),
      "",
      "What needs cleaning:",
      item,
      "",
      "Material: " + (material || "(not given)"),
      "What needs removed: " + (contaminant || "(not given)"),
      "Approximate size: " + (size || "(not given)"),
      "Workshop or mobile: " + (site || "(not given)"),
      "Access / power: " + (access || "(not given)"),
      "Preferred timing: " + (timing || "(not given)"),
      "",
      "Message:",
      notes || "(none)",
      "",
      "---",
      "PHOTOS: I will attach clear photos (and a short video if useful) to this email before sending.",
      "I understand quotes are based on photos + on-site confirmation, and that Class 4 laser work uses exclusion zones / PPE.",
      "Please do not auto-price — guide band only until confirmed."
    ].join("\n");

    var mailto =
      "mailto:jamie@laserrestoreni.co.uk" +
      "?subject=" + encodeURIComponent(subject) +
      "&body=" + encodeURIComponent(body);

    var note = document.getElementById("mailto-followup");
    if (note) note.hidden = false;

    window.location.href = mailto;
  });
})();
