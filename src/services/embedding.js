export function generateEmbedding(text) {
  const words = text.toLowerCase().split(" ");

  const vector = [];

  for (let i = 0; i < 20; i++) {
    let value = 0;

    words.forEach((word) => {
      value += word.charCodeAt(0) || 0;
    });

    vector.push(((value + i) % 100) / 100);
  }

  return vector;
}
