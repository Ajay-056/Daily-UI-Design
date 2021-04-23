const tags_container = document.getElementById('tags-container');
const spans = document.querySelectorAll('span');

function removeSelected() {
  spans.forEach((span) => {
    span.classList.remove('selected');
  });
}

spans.forEach((span) => {
  span.addEventListener('click', () => {
    if (span.classList.contains('selected')) {
      span.classList.remove('selected');
    } else {
      removeSelected();
      span.classList.add('selected');
    }
  });
});
