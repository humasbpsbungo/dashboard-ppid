// Your Google Sheets API key
const API_KEY = 'AIzaSyACFkF47rmr4Ob2LZepM-xU5QCIdLmN014';

// ID of the Google Spreadsheet
const SPREADSHEET_ID = '1d6yPYK89_mkh79MMEyGfAJV1FyT1LS-rEgne5UgqoMY';

// Range of data to fetch (e.g., Sheet1!A1:D10)
const RANGE = 'Kinerja!A1:F8';

// Fetch data from Google Spreadsheet
async function fetchData() {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.values;
}

// Display data on the dashboard
async function displayData() {
    const data = await fetchData();
    const container = document.getElementById('data-container');

    data.forEach(row => {
        const rowDiv = document.createElement('div');
        rowDiv.textContent = row.join(' | ');
        container.appendChild(rowDiv);
    });
}

// Call displayData to load the data on page load
displayData();
