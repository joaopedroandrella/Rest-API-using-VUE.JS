import ApiService from "@/common/api/api.service";

const CursoService = {
    listar() {
        return ApiService.get('Curso/listar');
    },
    adicionar(curso) {
      return ApiService.post('Curso/adicionar', curso);  
    },
    atualizar(curso){
      return ApiService.put('Curso/atualizar', curso);
    },
    obter(id) {
      return ApiService.get(`Curso/obter/${id}`);   
    },
    remover(id){
      return ApiService.delete(`Curso/remover/${id}`);
    },
}

export default CursoService