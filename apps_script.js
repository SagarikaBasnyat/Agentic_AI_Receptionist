function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Bookings");
    const body = JSON.parse(e.postData.contents);
    const params = body.queryResult.parameters;

    const serviceType = params.service_type || "";
    const rawDate = params.date || "";
    const rawTime = params.time || "";
    const petName = params.pet_name || "";
    const phoneNumber = params.phone_number || "";

    let formattedDate = "";
    let formattedTime = "";

    if (rawDate) {
      const dateObj = new Date(rawDate);
      formattedDate = Utilities.formatDate(
        dateObj,
        Session.getScriptTimeZone(),
        "MM/dd/yyyy"
      );
    }

    if (rawTime) {
      const timeObj = new Date(rawTime);
      formattedTime = Utilities.formatDate(
        timeObj,
        Session.getScriptTimeZone(),
        "hh:mm a"
      );
    }

    sheet.appendRow([
      new Date(),
      serviceType,
      formattedDate,
      formattedTime,
      petName,
      phoneNumber
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({
        fulfillmentText: `Thank you! Your booking request for ${petName} has been saved for ${serviceType} on ${formattedDate} at ${formattedTime}. We will contact you shortly at ${phoneNumber} to confirm.`
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        fulfillmentText: "Sorry, there was an error saving your booking. Please try again."
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
