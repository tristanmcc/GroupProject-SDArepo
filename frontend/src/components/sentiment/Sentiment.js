import React from 'react';

const TrainingSet = require('../../resources/trainingdata.json');
const natural = require('natural');
const BrainJs = require('brain.js');

export default function Sentiment({ sentence }) {
  function buildWordDictionary(trainingData) {
    const tokenisedArray = trainingData.map((item) => {
      const tokens = item.phrase.split(' ');
      return tokens.map((token) => natural.PorterStemmer.stem(token));
    });

    const flattenedArray = [].concat.apply([], tokenisedArray);
    return flattenedArray.filter(
      (item, pos, self) => self.indexOf(item) == pos
    );
  }

  const dictionary = buildWordDictionary(TrainingSet);

  function encode(phrase) {
    const phraseTokens = phrase.split(' ');
    const encodedPhrase = dictionary.map((word) =>
      phraseTokens.includes(word) ? 1 : 0
    );

    return encodedPhrase;
  }

  const encodedTrainingSet = TrainingSet.map((dataSet) => {
    const encodedValue = encode(dataSet.phrase);
    return { input: encodedValue, output: dataSet.result };
  });

  const network = new BrainJs.NeuralNetwork();
  network.train(encodedTrainingSet);

  console.log('sentence: ' + sentence.textBody);

  //insert sentences here
  const encoded = encode(sentence.textBody);

  let { bad, good, b = +bad, g = +good } = network.run(encoded);

  console.log(network.run(encoded));
  console.log('good: ' + g);
  console.log('good: ' + good);
  console.log('bad: ' + b);

  // { good: 0.8156641125679016, bad: 0.17976993322372437 }

  return <></>;
}
