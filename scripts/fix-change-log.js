const fs = require('fs');
const path = require('path');

// Define the path to the existing changelog
const changelogPath = path.join(process.cwd(), 'change-log.md');

// Function to extract unique years from the changelog entries
function extractYears(data) {
    const yearRegex = /### v(\d{4})\./g;
    const years = new Set();
    let match;

    while ((match = yearRegex.exec(data)) !== null) {
        years.add(match[1]);
    }

    return Array.from(years);
}

// Function to write a changelog file for a specific year
function writeChangelogForYear(data, year) {
    const newChangelogPath = path.join(process.cwd(), `change-log.${year}.md`);
    const yearRegex = new RegExp(`### v${year}\\.[\\d\\.]+\\n(?:(?!### v\\d{4}).)*`, 'gs');
    const matches = data.match(yearRegex);

    if (matches) {
        const newChangelogContent = matches.join('\n\n');
        fs.writeFile(newChangelogPath, newChangelogContent, 'utf8', (err) => {
            if (err) {
                console.error("Failed to write new changelog file:", err);
            } else {
                console.log(`New changelog file for ${year} created successfully.`);
            }
        });
    } else {
        console.log(`No entries found for the year ${year}.`);
    }
}

// Read the existing changelog
fs.readFile(changelogPath, 'utf8', (err, data) => {
    if (err) {
        console.error("Failed to read file:", err);
        return;
    }

    // Extract years and generate a changelog file for each year
    const years = extractYears(data);
    years.forEach(year => {
        writeChangelogForYear(data, year);
    });
});
