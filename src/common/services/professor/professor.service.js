import ApiService from "@/common/api/api.service";

const ProfessorService = {
    listar() {
        return ApiService.get('Professor/listar');
    },
    adicionar(professor) {
      return ApiService.post('Professor/adicionar', professor);  
    },
    atualizar(professor){
      return ApiService.put('Professor/atualizar', professor);
    },
    obter(id) {
      return ApiService.get(`Professor/obter/${id}`);   
    },
    remover(id){
      return ApiService.delete(`Professor/remover/${id}`);
    },
}

export default ProfessorService