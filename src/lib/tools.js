export function formatSum(sum) {
  return sum.toLocaleString('ru-RU') + ' руб.';
};

export function onImgError(event) {
  event.target.src = '/img/no_photo.jpg';
};  
 