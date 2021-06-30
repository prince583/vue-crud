import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/read.php");
  }

  get(id) {
    return http.get(`/single_read.php?id=${id}`);
  }

  create(data) {
    return http.post("/create.php", data);
  }

  update(id, data) {
    return http.put(`/update.php?id=${id}`, data);
  }

  delete(id) {
    return http.delete(`/delete.php?id=${id}`);
  }

  deleteAll() {
    return http.delete(`/tutorials`);
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }
}

export default new TutorialDataService();