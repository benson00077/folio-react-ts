export default function getRandomStarAttribute(
  starsNumber: number
) {
  let boxShadowStr = ""; // 222px 946px #FFF
  for (let i = 0; i < starsNumber; i++) {
    const coordinate = {
      x: Math.floor(Math.random() * 100),
      y: Math.floor(Math.random() * 100),
    };

    if (i !== starsNumber - 1) {
      boxShadowStr += `${coordinate.x}vw ${coordinate.y}vh #FFF , `;
    } else {
      boxShadowStr += `${coordinate.x}vw ${coordinate.y}vh #FFF;`;
    }
  }

  return boxShadowStr;
}
