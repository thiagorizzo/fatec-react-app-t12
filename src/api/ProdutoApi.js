import Axios from "axios";

class ProdutoApi {
  static baseUrl = "http://localhost:8888";

  static getAll() {
    return Axios.get(`${this.baseUrl}/produtos`);
  }

  static getByCodigo(codigo) {
    return Axios.get(`${this.baseUrl}/produtos/${codigo}`);
  }

  static add(produto) {
    return Axios.post(`${this.baseUrl}/produto`, produto);
  }
}

export default ProdutoApi;
