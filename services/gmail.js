const fs = require("fs");
const { google } = require("googleapis");

const SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"];
const TOKEN_PATH = "token.json";

async function authorize() {
  const credentials = JSON.parse(fs.readFileSync("credentials.json"));
  const { client_secret, client_id, redirect_uris } =
    credentials.installed;

  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  if (fs.existsSync(TOKEN_PATH)) {
    oAuth2Client.setCredentials(
      JSON.parse(fs.readFileSync(TOKEN_PATH))
    );
  } else {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: "offline",
      scope: SCOPES,
    });

    console.log("Authorize this app:", authUrl);

    return;
  }

  return oAuth2Client;
}

async function getEmails() {
  const auth = await authorize();
  const gmail = google.gmail({ version: "v1", auth });

  const res = await gmail.users.messages.list({
    userId: "me",
    maxResults: 5,
  });

  const messages = res.data.messages || [];

  const emails = [];

  for (let msg of messages) {
    const email = await gmail.users.messages.get({
      userId: "me",
      id: msg.id,
    });

    const snippet = email.data.snippet;
    emails.push(snippet);
  }

  return emails;
}

module.exports = { getEmails };