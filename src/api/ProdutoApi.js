import Axios from "axios";

class ProdutoApi {
  static baseUrl = "http://localhost:8888";

  static getAll() {
    return Axios.get(`${this.baseUrl}/produtos`);
  }

  static getByCodigo(codigo) {
    return Axios.get(`${this.baseUrl}/produto/${codigo}`);
  }

  static add(produto) {
    return Axios.post(`${this.baseUrl}/produto`, produto);
  }

  static edit(produto) {
    return Axios.put(`${this.baseUrl}/produto`, produto);
  }

  static delete(codigo) {
    return Axios.delete(`${this.baseUrl}/produto`);
  }
}

export default ProdutoApi;
