const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'products.html'), 'utf8');

function extract() {
    const products = [];

    // Split by sections to get categories
    const parts = html.split('<div class="section-heading">');

    for (let i = 1; i < parts.length; i++) {
        let part = parts[i];

        let category = "General";
        // Extract category title: <div class="h2 section-title"><h2>Power unit&nbsp;&nbsp;
        const catMatch = part.match(/<div class="h2 section-title"><h2>(.*?)(&nbsp;|<)/);
        if (catMatch) {
            category = catMatch[1].trim();
        }

        // Extract products
        const articleRegex = /<article>([\s\S]*?)<\/article>/g;
        let match;

        while ((match = articleRegex.exec(part)) !== null) {
            const article = match[1];

            // Image
            const imgMatch = article.match(/src="(https:\/\/www\.moris\.it\/wp-content\/uploads\/[^"]+)"/);
            const image = imgMatch ? imgMatch[1] : "";

            // Title
            const titleMatch = article.match(/<div class="card-title">\s*<a[^>]*>(.*?)(<!--|<\/a>)/);
            let title = titleMatch ? titleMatch[1].trim() : "Unknown Product";

            // Description
            const descMatch = article.match(/<div class="card-text">\s*([\s\S]*?)\s*<\/div>/);
            let desc = descMatch ? descMatch[1].trim() : "";

            // Clean up description
            desc = desc.replace(/\s+/g, " ").trim();

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

    fs.writeFileSync('products_list.json', JSON.stringify(products, null, 2), 'utf8');
}

extract();
