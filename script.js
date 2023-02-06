var container = document.createElement("div");
container.className = "container-fluid";

var row = document.createElement("div");
row.className = "row";

var col1 = document.createElement("div");
col1.className = "col-3";
var col2 = document.createElement("div");
col2.className = "col-8";
// var col3 = document.createElement("div");
// col3.className = "col-md-2";

//===========================Form================================================================================================
var formSubmission = document.createElement("h1");
formSubmission.innerHTML = "Form Submission : ";
col1.append(formSubmission);

row.append(col1,col2);
container.append(row);
document.body.append(container);
var fName = createInput(
  "input",
  "type",
  "text",
  "name",
  "fName",
  "id",
  "fName",
  "placeholder",
  "First Name"
);
var lName = createInput(
  "input",
  "type",
  "text",
  "name",
  "lName",
  "id",
  "lName",
  "placeholder",
  "Last Name"
);
var add = createInput(
  "input",
  "type",
  "text",
  "name",
  "add",
  "id",
  "add",
  "placeholder",
  ""
);
var pin = createInput(
  "input",
  "type",
  "number",
  "name",
  "pin",
  "id",
  "pin",
  "placeholder",
  ""
);
var state = createInput(
  "input",
  "type",
  "text",
  "name",
  "state",
  "id",
  "state",
  "placeholder",
  ""
);
var country = createInput(
  "input",
  "type",
  "text",
  "name",
  "country",
  "id",
  "country",
  "placeholder",
  ""
);
var submit = document.createElement("button");
submit.setAttribute("type", "submit");
submit.setAttribute("id", "submit");
submit.setAttribute("class", "submit");
submit.innerHTML = "Submit";
submit.addEventListener("click", display);

//-----------------------creating food checkBox-------------------------------------------------------------------------------------------------------
var food = createLabel(
  "label",
  "for",
  "food",
  "Choice of food <span>(must select atleast 2 out of 5)</span>"
);

var sIndian = createInput(
  "input",
  "type",
  "checkbox",
  "name",
  "food",
  "class",
  "food",
  "value",
  "South-Indian"
);
var southLabel = document.createElement("span");
southLabel.innerHTML = " South Indian";
var br1 = document.createElement("br");

var nIndian = createInput(
  "input",
  "type",
  "checkbox",
  "name",
  "food",
  "class",
  "food",
  "value",
  "North-Indian"
);
var northLabel = document.createElement("span");
northLabel.innerHTML = " North Indian";
var br2 = document.createElement("br");

var chinese = createInput(
  "input",
  "type",
  "checkbox",
  "name",
  "food",
  "class",
  "food",
  "value",
  "Chinese"
);
var chineseLabel = document.createElement("span");
chineseLabel.innerHTML = " Chinese";
var br3 = document.createElement("br");

var thai = createInput(
  "input",
  "type",
  "checkbox",
  "name",
  "food",
  "class",
  "food",
  "value",
  "Thai"
);
var thaiLabel = document.createElement("span");
thaiLabel.innerHTML = " Thai";
var br4 = document.createElement("br");

var fastFood = createInput(
  "input",
  "type",
  "checkbox",
  "name",
  "food",
  "class",
  "food",
  "value",
  "Fast-Food"
);
var fastFoodLabel = document.createElement("span");
fastFoodLabel.innerHTML = " Fast Food";
//-----------------------------Gender Radio button-------------------------------------------------------------------------------------------------
//var gender = createLabel("label", "for", "gender", "Gender:");
var gender = document.createElement("p");
gender.innerHTML = "Gender: ";

var genderMale = createInput(
  "input",
  "type",
  "radio",
  "name",
  "gender",
  "id",
  "gender",
  "value",
  "Male"
);
var male = document.createElement("span");
male.innerHTML = " Male ";
//var maleLabel = createLabel("label", "for", "male", "Male");
//genderMale.className = "block";
//maleLabel.className = "block";
var genderFemale = createInput(
  "input",
  "type",
  "radio",
  "name",
  "gender",
  "id",
  "gender",
  "value",
  "Female"
);
var female = document.createElement("span");
female.innerHTML = " Female ";

//-----------------Labels-------------------------------------------------------------------------------------------------------
var fLabel = createLabel("label", "for", "fName", "First Name:");
var lLabel = createLabel("label", "for", "lName", "Last Name:");
var aLabel = createLabel("label", "for", "add", "Address:");
var pLabel = createLabel("label", "for", "pin", "PIN:");
var sLabel = createLabel("label", "for", "state", "State:");
var cLabel = createLabel("label", "for", "country", "Country:");

col1.append(fLabel, fName, lLabel, lName, aLabel, add, pLabel, pin);
col1.append(gender, genderMale, male, genderFemale, female);
col1.append(
  food,
  sIndian,
  southLabel,br1,
  nIndian,
  northLabel,br2,
  chinese,
  chineseLabel,br3,
  thai,
  thaiLabel,br4,
  fastFood,
  fastFoodLabel
);
col1.append(sLabel, state, cLabel, country);
col1.append(submit);

//===============Database=========================================================================================================
var database = document.createElement("h1");
database.innerHTML = "Database : ";

var table = document.createElement("table");
var thead = document.createElement("thead");
var tbody = document.createElement("tbody");
var tr1 = document.createElement("tr");
var th1 = createTable("th", "First Name");
var th2 = createTable("th", "Last Name");
var th3 = createTable("th", "Address");
var th4 = createTable("th", "PIN");
var th5 = createTable("th", "Gender");
var th6 = createTable("th", "Food");
var th7 = createTable("th", "State");
var th8 = createTable("th", "Country");

table.append(thead, tbody);
thead.append(tr1);
// tbody.append(tr2)
// tr2.append(td1)
tr1.append(th1, th2, th3, th4, th5, th6, th7, th8);

col2.append(database, table);

//================functions=======================================================================================================

//----------------form part------------------------------------------------------------------------------------------------------------
function createLabel(tag, aN, aV, field) {
  var e = document.createElement(tag);
  e.setAttribute(aN, aV);
  e.innerHTML = field;

  return e;
}

function createInput(tag, aN1, aV1, aN2, aV2, aN3, aV3, aN4, aV4) {
  var e = document.createElement(tag);
  e.setAttribute(aN1, aV1);
  e.setAttribute(aN2, aV2);
  e.setAttribute(aN3, aV3);
  e.setAttribute(aN4, aV4);

  return e;
}

function breakline() {
  var e = document.createElement("br");

  return e;
}

//------------------Database Part-----------------------------------------------------------------------------------------------------

function createTable(tag, value) {
  var e = document.createElement(tag);
  e.innerHTML = value;

  return e;
}

function display() {
  var row = document.createElement("tr");
  var td1 = document.createElement("td");
  td1.innerHTML = fName.value;
  var td2 = document.createElement("td");
  td2.innerHTML = lName.value;
  var td3 = document.createElement("td");
  td3.innerHTML = add.value;
  var td4 = document.createElement("td");
  td4.innerHTML = pin.value;
  var td5 = document.createElement("td");
  td5.innerHTML = document.querySelector("input[name=gender]:checked").value;

  var td6 = document.createElement("td");
  td6.innerHTML = foodValues();
  //console.log(foodValues())

  var td7 = document.createElement("td");
  td7.innerHTML = state.value;
  var td8 = document.createElement("td");
  td8.innerHTML = country.value;

  row.append(td1, td2, td3, td4, td5, td6, td7, td8);

  tbody.append(row);
}
function foodValues() {
  var foodList = document.querySelectorAll("input[name=food]:checked");
  var selected = "";
  //console.log(foodList.length);
  if (foodList.length >= 2) {
    for (var i = 0; i < foodList.length; i++) {
      selected += " " + foodList[i].value;
    }
    return selected;
  } else {
    return alert("Select atleast 2 Food options");
  }
}
