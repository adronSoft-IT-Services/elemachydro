const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'products.html'), 'utf8');

function extract() {
    const products = [];

    // Split by sections to get categories
    // Look for <div class="section-heading">...<h2>CATEGORY NAME...
    const sectionRegex = /<div class="section-heading">[\s\S]*?<h2>(.*?)(&nbsp;|<)/g;

    // We can't easily split by regex in JS like that to get content *after* the match in a loop
    // So let's split by the class and process

    const parts = html.split('<div class="section-heading">');
    // strict split might lose the first part (header) which is fine.

    // Skip part 0
    for (let i = 1; i < parts.length; i++) {
        let part = parts[i];

        // Extract category title
        // It should be near the top: <div class="h2 section-title"><h2>Power unit&nbsp;&nbsp;
        let category = "General";
        const catMatch = part.match(/<div class="h2 section-title"><h2>(.*?)(&nbsp;|<)/);
        if (catMatch) {
            category = catMatch[1].trim();
        }

        // Extract products in this part
        // Product block starts with <div id="product-..." ...> <article> ... </article>
        // We can match all occurences of <article> ... </article> inside this part

        const articleRegex = /<article>([\s\S]*?)<\/article>/g;
        let match;

        while ((match = articleRegex.exec(part)) !== null) {
            const article = match[1];

            // Image
            // fliters for wp-content/uploads/
            const imgMatch = article.match(/src="(https:\/\/www\.moris\.it\/wp-content\/uploads\/[^"]+)"/);
            const image = imgMatch ? imgMatch[1] : "";

            // Title
            // <div class="card-title">...<a ...>TITLE<!--...--></a>
            // Regex to capture text before <!--
            const titleMatch = article.match(/<div class="card-title">\s*<a[^>]*>(.*?)(<!--|<\/a>)/);
            let title = titleMatch ? titleMatch[1].trim() : "";

            // Description
            // <div class="card-text">...CONTENT...</div>
            const descMatch = article.match(/<div class="card-text">\s*([\s\S]*?)\s*<\/div>/);
            let desc = descMatch ? descMatch[1].trim() : "";

            // Clean up description (remove newlines, extra spaces)
            desc = desc.replace(/\s+/g, " ");

            if (title && image) {
                products.push({
                    category,
                    title,
                    image,
                    desc
                });
            }
        }
    }

    console.log(JSON.stringify(products, null, 2));
}

extract();
