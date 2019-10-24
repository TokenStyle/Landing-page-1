let article1 = document.querySelector('.article1');

if (article1 && window.innerWidth >= 800) {
  article1.style.height = (window.innerHeight - 50) + 'px';
}

// Get all animated elements, to animate when scroll upon them
{
  let checkPreset = 'data-animated';
  let allAnimatedElements = document.querySelectorAll(`[${checkPreset}]`);

  // Check to allAnimatedElements array isn't empty
  if (allAnimatedElements.length) {
    addEventListener('scroll', () => {
      for (var i = 0; i < allAnimatedElements.length; i++) {
        let animElem = allAnimatedElements[i];
        let animElemAttribute = animElem.getAttribute(checkPreset); // elementAttribute

        // check to elemAttribute isn't null or empty '' string
        if (!animElemAttribute || animElem.className.indexOf('animated') !== -1) {
          continue;
        }

        let clientRect = animElem.getBoundingClientRect();
        // absolute top position
        let clientRectTopAbs = clientRect.top + window.scrollY;

        if (window.scrollY + window.innerHeight > clientRectTopAbs) {
          animElem.className += ' ' + animElemAttribute;
        }
      }

    }, false)
  }
}
