const { salvarLembranca } = require('../js/caixa');

// Simples mock do localStorage para ambiente de testes
global.localStorage = {
  store: {},
  getItem(key) {
    return this.store[key] || null;
  },
  setItem(key, value) {
    this.store[key] = String(value);
  },
  clear() {
    this.store = {};
  }
};

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
