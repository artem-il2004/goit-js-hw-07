const counter = document.querySelectorAll(".item");
console.log(`Number of categories: ${counter.length}`);

const counterOfThemes = document.querySelectorAll("#categories .item");

counterOfThemes.forEach(element => {
    const title = element.querySelector("h2").textContent;
    const amount = element.querySelectorAll("ul li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${amount}`);
});
