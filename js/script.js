// First set of accordions
const ravenclawAccordions = document.querySelectorAll('.ravenclaw-accordion');

ravenclawAccordions.forEach(accordion => {
  const accordionToggle = accordion.querySelector('.ravenclaw-accordion__toggle');
  const accordionContent = accordion.querySelector('.ravenclaw-accordion__content');

  accordionToggle.addEventListener('click', () => {
    accordionContent.classList.toggle('ravenclaw-accordion__content--visible');
  });
});

// Second set of accordions
const hufflepuffAccordions = document.querySelectorAll('.hufflepuff-accordion');

hufflepuffAccordions.forEach(accordion => {
  const accordionToggle = accordion.querySelector('.hufflepuff-accordion__toggle');
  const accordionContent = accordion.querySelector('.hufflepuff-accordion__content');

  accordionToggle.addEventListener('click', () => {
    accordionContent.classList.toggle('hufflepuff-accordion__content--visible');
  });
});

// Third set of accordions
const gryffindorAccordions = document.querySelectorAll('.gryffindor-accordion');

gryffindorAccordions.forEach(accordion => {
  const accordionToggle = accordion.querySelector('.gryffindor-accordion__toggle');
  const accordionContent = accordion.querySelector('.gryffindor-accordion__content');

  accordionToggle.addEventListener('click', () => {
    accordionContent.classList.toggle('gryffindor-accordion__content--visible');
  });
});

// Fourth set of accordions
const slytherinAccordions = document.querySelectorAll('.slytherin-accordion');

slytherinAccordions.forEach(accordion => {
  const accordionToggle = accordion.querySelector('.slytherin-accordion__toggle');
  const accordionContent = accordion.querySelector('.slytherin-accordion__content');

  accordionToggle.addEventListener('click', () => {
    accordionContent.classList.toggle('slytherin-accordion__content--visible');
  });
});



