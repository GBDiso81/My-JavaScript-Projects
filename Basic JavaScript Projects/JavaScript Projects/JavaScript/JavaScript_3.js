function showDetails(parts) {
  let partsType = parts.getAttribute("data-parts-type");
  alert("The " + parts.innerHTML + " is a " + partsType + ".");
}