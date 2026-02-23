import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';

// Config
const SCOPES = [
    'https://www.googleapis.com/auth/spreadsheets',
    'https://www.googleapis.com/auth/drive.file',
];

const jwt = new JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'), // Handle newline in env vars
    scopes: SCOPES,
});

export const getDoc = async () => {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID!, jwt);
    await doc.loadInfo();
    return doc;
};
