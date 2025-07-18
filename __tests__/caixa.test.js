const { salvarLembranca } = require('../js/caixa');

describe('salvarLembranca', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('appends new value to existing array', () => {
    localStorage.setItem('lembrancas', JSON.stringify(['a']));
    salvarLembranca('b');
    const result = JSON.parse(localStorage.getItem('lembrancas'));
    expect(result).toEqual(['a', 'b']);
  });
});
