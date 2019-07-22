var distToBottom, loadingData
var count = 1;

var template = `
  <div class="container feed content-container">
      <div class="tile is-ancestor">
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-light-yellow cool-shadow">
              <p class="title">Lorem Ipsum</p>
              <p class="subtitle">Lorem Ipsum</p>
              <figure class="image is-4by3">
                <img src="./assets/images/fruits.jpg">
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-light-blue cool-shadow">
              <p class="title">Ipsum Dolor</p>
              <p class="subtitle">Lorem Ipsum</p>
              <figure class="image is-4by3">
                <img src="./assets/images/sky.jpg">
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-gray cool-shadow">
            <p class="title">Lorem Dolor</p>
            <p class="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, perferendis
            recusandae. Saepe sit nisi delectus, nostrum veritatis assumenda velit accusamus molestias facere nulla.
            Ducimus optio impedit corrupti repudiandae deserunt esse! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Temporibus, perferendis recusandae. Saepe sit nisi delectus, nostrum veritatis assumenda
            velit accusamus molestias facere nulla. Ducimus optio impedit corrupti repudiandae deserunt esse!</p>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
      <article class="tile is-child notification is-light-green cool-shadow">
        <div class="content">
          <p class="title">Dolor Sit</p>
          <p class="subtitle">Lorem Ipsum</p>
          <img src="./assets/images/waterfall.jpg" style="width: 100%; display: block;" />
        </div>
      </article>
    </div>
    </div>
  </div>
`

var secondaryTemplate = `
  <div class="container feed content-container">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
        <article class="tile is-child notification is-light-green cool-shadow">
          <div class="content">
            <p class="title">Dolor Sit</p>
            <p class="subtitle">Lorem Ipsum</p>
            <img src="./assets/images/waterfall.jpg" style="width: 100%; display: block;" />
          </div>
        </article>
      </div>
      <div class="tile is-vertical is-8">
        <div class="tile">
          <div class="tile is-parent is-vertical">
            <article class="tile is-child notification is-light-yellow cool-shadow">
              <p class="title">Lorem Ipsum</p>
              <p class="subtitle">Lorem Ipsum</p>
              <figure class="image is-4by3">
                <img src="./assets/images/fruits.jpg">
              </figure>
            </article>
          </div>
          <div class="tile is-parent">
            <article class="tile is-child notification is-light-blue cool-shadow">
              <p class="title">Ipsum Dolor</p>
              <p class="subtitle">Lorem Ipsum</p>
              <figure class="image is-4by3">
                <img src="./assets/images/sky.jpg">
              </figure>
            </article>
          </div>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child notification is-gray cool-shadow">
            <p class="title">Lorem Dolor</p>
            <p class="subtitle">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, perferendis
            recusandae. Saepe sit nisi delectus, nostrum veritatis assumenda velit accusamus molestias facere nulla.
            Ducimus optio impedit corrupti repudiandae deserunt esse! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Temporibus, perferendis recusandae. Saepe sit nisi delectus, nostrum veritatis assumenda
            velit accusamus molestias facere nulla. Ducimus optio impedit corrupti repudiandae deserunt esse!</p>
          </article>
        </div>
      </div>
    </div>
  </div>
`


function getDistFromBottom() {
  var scrollPosition = window.pageYOffset;
  var windowSize = window.innerHeight;
  var bodyHeight = document.body.offsetHeight;

  return Math.max(bodyHeight - (scrollPosition + windowSize), 0);
}

document.addEventListener('scroll', function () {
  distToBottom = getDistFromBottom();

  var loadingContainer = document.getElementsByClassName('loading-container')[0];
  var contentContainer = document.getElementsByClassName('content-container')[0];

  if (distToBottom <= 100 && !loadingData) {
    loadingData = true
    setTimeout(function() {
      loadingContainer.classList.add('no-content');
      var newElement = document.createElement('div')
      newElement.innerHTML = ((count % 2) === 0) ? template : secondaryTemplate
      contentContainer.appendChild(newElement)
      count++;
      loadingData = false
    }, 1500)
  }
});