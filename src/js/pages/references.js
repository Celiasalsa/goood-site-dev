import Flickity from 'flickity';

let refCarousel1 = null;
let refCarousel2 = null;
let refCarousel3 = null;

export default {
  position: 2,
  id: 'references',
  path: '/references/',
  title: 'Clients heureux',
  onEnterCompleted,
  onLeaveCompleted,
};

function onEnterCompleted() {
  const carouselOptions = {
    accessibility: true,
    resize: true,
    pageDots: true,
    prevNextButtons: false,
    dragThreshold: 30,
    watchCSS: true,
  };

  refCarousel1 = new Flickity('.slide__carousel--operations', carouselOptions);
  refCarousel2 = new Flickity('.slide__carousel--organisation', carouselOptions);
  refCarousel3 = new Flickity('.slide__carousel--offre', carouselOptions);
}

function onLeaveCompleted() {
  refCarousel1.destroy();
  refCarousel2.destroy();
  refCarousel3.destroy();
}
