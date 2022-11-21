import ApiService from '@/common/api/api.service';

const EnumeratorService = {
    listarPeriodoCurso() {
        return ApiService.get('Enumerators/listar-periodo-curso');
    },
    listarStatusMatricula() {
        return ApiService.get('Enumerators/listar-status-matricula')
    }
}

export default EnumeratorService