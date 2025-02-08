/* eslint-disable */
import { assert } from 'chai';
import postSize from '../public/assets/post_size.js';

describe('Функция проверки расчета размера поста', function () {
  it('1 ссылка', function () {
    const expectedResult = 7;
    const result = postSize('Привет!<https://github.com>');
    assert.equal(expectedResult, result);
  });

  it('2 ссылки', function () {
    const expectedResult = 7;
    const result = postSize('При<https://github.com>вет!<https://github.com>');
    assert.equal(expectedResult, result);
  });

  it('без ссылок', function () {
    const expectedResult = 7;
    const result = postSize('Привет!');
    assert.equal(expectedResult, result);
  });

  it('нет ссылки, много текста', function () {
    const expectedResult = 29;
    const result = postSize('Солнышко светит, птички поют!');
    assert.equal(expectedResult, result);
  });

  it('1 ссылка, много текста', function () {
    const expectedResult = 29;
    const result = postSize('Солнышко светит, птички поют!<https://github.com>');
    assert.equal(expectedResult, result);
  });

  it('2 ссылки, много текста', function () {
    const expectedResult = 29;
    const result = postSize('Солнышко све<https://github.com>тит, птички поют!<https://github.com>');
    assert.equal(expectedResult, result);
  });

  it('Должен учитывать пробелы в тексте', function () {
    const expectedResult = 30;
    const result = postSize('Солнышко светит, птички поют! <https://github.com>');
    assert.equal(expectedResult, result);
  });

  it('Должен корректно работать с ссылкой в начале текста', function () {
    const expectedResult = 25;
    const result = postSize('<https://github.com> Текст с ссылкой в начале');
    assert.equal(expectedResult, result);
  });

  it('Должен корректно работать с ссылкой в конце текста', function () {
    const expectedResult = 24;
    const result = postSize('Текст с ссылкой в конце <https://github.com>');
    assert.equal(expectedResult, result);
  });

  it('Должен учитывать несколько ссылок внутри текста', function () {
    const expectedResult = 27;
    const result = postSize('Текст <https://github.com>и еще текст с <https://github.com>ссылкой');
    assert.equal(expectedResult, result);
  });

  it('Должен корректно учитывать пустой текст (без ссылок)', function () {
    const expectedResult = 0; // Пустой текст
    const result = postSize('');
    assert.equal(expectedResult, result);
  });
});