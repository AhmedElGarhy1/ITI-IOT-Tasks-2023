/**
 * Task 1
 */
// a- Find all images in page by two ways
const images1 = document.getElementsByTagName("img");
const images2 = document.images;


// b- find all options for city drop down list
const cities = document.querySelectorAll('select.bPink option');


// c- find all rows for second table in page
const secondTableRows = document.querySelectorAll(".bPink tr");

// d- find all elements that contain class with name fontBlue
const fontBlueClassElements = document.querySelectorAll('.fontBlue');


// e- find all paragraphs elements
const pElements = document.getElementsByTagName('p');

/**
 * Task 2
 */

// a- get all firist anchor inside the second table then change it's href to training.com and it's text to Training
const firistAnchorInSecondTable = document.querySelectorAll('table.bPink a')[0];
firistAnchorInSecondTable.href = "training.com";
firistAnchorInSecondTable.innerHTML = "Training";

// b- find all images and change it's border to solid pink 2px
[...images1].forEach((img) => {
    img.style.border = "1px solid pink"
});

// c- create javascript function to find all checkboxes (checked) in userData orm and alert the value of checkedboxes values

const alertChecked = () => {
    const checkedValues = [...document.querySelectorAll('input[type="checkbox"]:checked')].map((checkbox) => checkbox.value).join(", ")
    window.alert(checkedValues)
};
alertChecked();

// d- find element with id example then change it's background color to pink
document.getElementById('example').style.backgroundColor = 'pink';