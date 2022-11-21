import ApiService from "@/common/api/api.service";

const MatriculaService = {
    listar() {
        return ApiService.get('Matricula/listar');
    },
    adicionar(matricula) {
      return ApiService.post('Matricula/adicionar', matricula);  
    },
    atualizar(matricula){
      return ApiService.put('Matricula/atualizar', matricula);
    },
    obter(id) {
      return ApiService.get(`Matricula/obter/${id}`);   
    },
    remover(id){
      return ApiService.delete(`Matricula/remover/${id}`);
    },
}

export default MatriculaService