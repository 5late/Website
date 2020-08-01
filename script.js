// When the user scrolls the page, execute myFunction
window.onscroll = function() {scrollDown()};

// Get the header
var Entry = document.getElementsById("Entry");

// Get the offset position of the navbar
var sticky = Entry.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function scrollDown() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}