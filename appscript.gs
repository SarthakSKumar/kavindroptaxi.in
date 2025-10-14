// === CONFIGURATION ===
const TELEGRAM_BOT_TOKEN = '8428804827:AAG5AczjB6iZQ8EI77zJajdUq53AQ1q53kc';
const TELEGRAM_CHAT_ID = '-1003185607997'; // Group chat ID or your own user ID
// ======================

function doPost(e) {
  try {
    // ✅ SAFER: Always parse the event and ensure Sheet reference is correct
    const sheet = SpreadsheetApp
      .openById("1rkM_E_43v3akD2NuhRdn2qiIZNNHU43DesP2zvmhOgQ")
      .getSheetByName('Bookings');
    
    const data = JSON.parse(e.postData.contents);
    const timestamp = new Date();
    const { name, mobile, pickup, destination, date, time, selectedVehicle } = data;

    // ✅ Append to sheet
    sheet.appendRow([
      timestamp,
      name,
      mobile,
      pickup,
      destination,
      date,
      time,
      selectedVehicle?.name || ''
    ]);

    // ✅ Telegram message (Markdown-safe)
    const message = `
🚖 <b>New Booking Received!</b>\n
🕒 ${timestamp.toLocaleString()}\n
👤 <b>Name:</b> ${name}\n
📞 <b>Mobile:</b> +91${mobile}\n
📍 <b>From:</b> ${pickup}\n
🎯 <b>To:</b> ${destination}\n
📅 <b>Date:</b> ${date}\n
⏰ <b>Time:</b> ${time}\n
🚗 <b>Vehicle:</b> ${selectedVehicle?.name || ''}\n
`;

    sendTelegramMessage(message);

    return ContentService
      .createTextOutput(JSON.stringify({ result: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    Logger.log(err);
    return ContentService
      .createTextOutput(JSON.stringify({ result: 'error', error: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sendTelegramMessage(text) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
  const payload = {
    chat_id: TELEGRAM_CHAT_ID,
    text,
    parse_mode: 'HTML'
  };

  const response = UrlFetchApp.fetch(url, {
    method: 'POST',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
    followRedirects: true,
    muteHttpExceptions: true
  });

  Logger.log(response.getResponseCode());
  Logger.log(response.getContentText());
}

