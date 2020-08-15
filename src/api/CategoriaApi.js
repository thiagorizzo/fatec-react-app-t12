import Axios from "axios";

class CategoriaApi {
  static baseUrl = "http://localhost:8888";

  static getAll() {
    return Axios.get(`${this.baseUrl}/categorias`);
  }

  static getByCodigo(codigo) {
    return Axios.get(`${this.baseUrl}/categoria/${codigo}`);
  }
}

export default CategoriaApi;
