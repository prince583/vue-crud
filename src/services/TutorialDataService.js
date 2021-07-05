import http from "../http-common";

class TutorialDataService {
  getAll() {
    return http.get("/read.php");
  }

  get(id) {
    return http.get(`/single_read.php?id=${id}`);
  }

  create(params) {
    console.log(params);
    return http.post("/create.php", params);
  }

  update(params) {
    return http.put(`/update.php`, params);
  }

  delete(id) {
    //console.log(id); return;
    return http.delete(`/delete.php`,{data:{id}});
  }

  //deleteAll() {
  //  return http.delete(`/tutorials`);
  //}

  //findByTitle(title) {
   // return http.get(`/tutorials?title=${title}`);
 // }
}

export default new TutorialDataService();