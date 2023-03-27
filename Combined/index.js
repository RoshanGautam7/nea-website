  // Get the navbar element
  const navbar = document.getElementById("navbarNav");

  // Get the initial offset position of the navbar
  const navbarOffset = navbar.offsetTop;

  // Listen for scroll events on the window
  window.addEventListener("scroll", () => {
    // Get the current scroll position
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    // If the current scroll position is greater than or equal to the offset position of the navbar,
    // add the "fixed" class to the navbar; otherwise, remove the "fixed" class from the navbar
    if (window.scrollY > 90) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
  });

  //Code to filter the news:
// get all the filter buttons
const filterButtons = document.querySelectorAll('.btn-group button');

// get all the news lists
const newsLists = document.querySelectorAll('.news-list');

// add a click event listener to each filter button
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // remove the 'active' class from all the filter buttons
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });

    // add the 'active' class to the clicked filter button
    button.classList.add('active');

    // hide all the news lists
    newsLists.forEach(list => {
      list.classList.add('hidden');
    });

    // get the data-category attribute value of the clicked filter button
    const category = button.getAttribute('data-category');

    // show the news list that corresponds to the clicked filter button's category
    const newsListToShow = document.querySelector(`.news-list-${category}`);
    newsListToShow.classList.remove('hidden');

    // hide all the news items that do not belong to the active category
    const newsItems = newsListToShow.querySelectorAll('li');
    newsItems.forEach(item => {
      if (!item.classList.contains(category)) {
        item.classList.add('hidden');
      } else {
        item.classList.remove('hidden');
      }
    });
  });
});

  // When the user clicks on the button, scroll to the top of the page
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
