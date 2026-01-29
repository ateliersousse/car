function sendWhatsApp() {
  const message =
    "Nouvelle réservation GS 4C\n" +
    "Nom:\nTéléphone:\nService:\nDate:\nDétails:";

  window.open(
    "https://wa.me/21655138035?text=" + encodeURIComponent(message),
    "_blank"
  );
}
