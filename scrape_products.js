const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.join(__dirname, 'products.html'), 'utf8');

// Helper to extract content based on regex
function extractProducts(html) {
    const products = [];
    const categoryRegex = /<div class="h2 section-title"><h2>(.*?)&nbsp;/g;
    const productRegex = /<div id="product-.*?" class="col-sm-3 featured-card-wrapper">([\s\S]*?)<\/article>/g;

    // We need to split by sections first to assign categories
    const sections = html.split('<div class="section-heading">');

    // Skip first chunk (header stuff)
    for (let i = 1; i < sections.length; i++) {
        const sectionHTML = sections[i];

        // Find category name
        const catMatch = sectionHTML.match(/<div class="h2 section-title"><h2>(.*?)&nbsp;/);
        let category = "General";
        if (catMatch && catMatch[1]) {
            category = catMatch[1].trim();
        }

        // Find all products in this section
        let productMatch;
        while ((productMatch = productRegex.exec(sectionHTML)) !== null) {
            const pHTML = productMatch[1];

            // Name
            const nameMatch = pHTML.match(/<div class="card-title">\s*<a href=".*?" title=".*?">(.*?)<!--/);
            let name = nameMatch ? nameMatch[1].trim() : "Unknown Product";

            // Image
            const imgMatch = pHTML.match(/src="(https:\/\/www\.moris\.it\/wp-content\/uploads\/.*?)"/);
            let image = imgMatch ? imgMatch[1] : "";

            // Description
            const descMatch = pHTML.match(/<div class="card-text">\s*([\s\S]*?)\s*<\/div>/);
            let description = descMatch ? descMatch[1].trim() : "";

            if (name && image) {
                products.push({
                    category,
                    title: name,
                    image,
                    desc: description
                });
            }
        }
    }

    return products;
}

const products = extractProducts(html);
console.log(JSON.stringify(products, null, 2));
