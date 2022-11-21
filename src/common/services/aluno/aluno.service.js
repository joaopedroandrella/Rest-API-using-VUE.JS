import ApiService from "@/common/api/api.service";

const AlunoService = {
    listar() {
        return ApiService.get('Aluno/listar');
    },
    adicionar(aluno) {
      return ApiService.post('Aluno/adicionar', aluno);  
    },
    atualizar(aluno){
      return ApiService.put('Aluno/atualizar', aluno);
    },
    obter(id) {
      return ApiService.get(`Aluno/obter/${id}`);   
    },
    remover(id){
      return ApiService.delete(`Aluno/remover/${id}`);
    },
}

export default AlunoService