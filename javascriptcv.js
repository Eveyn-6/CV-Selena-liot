const captionsList = document.querySelectorAll(".caption-item");
const unitsList = document.querySelectorAll(".unit");

captionsList.forEach((item, index) => {
  item.addEventListener("mouseover", () =>
    unitsList[index].classList.add("hovered")
  );
  item.addEventListener("mouseout", () =>
    unitsList[index].classList.remove("hovered")
  );
});
 
$('#button-contact').click(function () {
  $(contact).toggle('');
 } )
 $('#contact').toggle('');

$('#button-expériences').click(function () {
  $(timeline).toggle('');
 } )

 $('#timeline').toggle('');
 
  