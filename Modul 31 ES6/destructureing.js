

const company = {
    name: "GP",
    ceo: { id: 12, name: "kamal", food: "fucka" },
    web: {
        id: 13, name: "kawsar", food: "teheri",
        tech: {
            html: 'html',
            css: 'css',
            js:'js'
        }
    }
}

// const { name } = company;

const { name } = company.web;

console.log(company.web.tech.html.btit);