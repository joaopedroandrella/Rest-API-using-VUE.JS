<template>
<div class="divPai">
    <div class="mb-3">
    <label for="formGroupExampleInput" class="form-label">Nome:</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nome do Curso" required v-model="curso.nome">
    <label for="formGroupExampleInput" class="form-label">Periodo:</label>
        <select class="form-control" v-model="curso.periodo" :required="true">
            <option v-for="periodo in colecaoPeriodoCurso" :key="periodo.id" :value="periodo.id" >{{ periodo.name }}</option>
        </select>
    <label for="formGroupExampleInput" class="form-label">Professor:</label>
        <select class="form-control" v-model="curso.professorId" :required="false">
            <option v-for="professor in colecaoProfessor" :key="professor.id" :value="professor.id" >{{ professor.nome }}</option>
        </select>
    </div>
        <p class="warning">*Campos obrigatórios</p>
    <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button" @click="adicionar">Cadastrar</button>
    </div>
</div>    
</template>

<script>

import NotificacaoService from "@/common/services/utils/notificacao.service"
import CursoService from "@/common/services/curso/curso.service"
import EnumatorService from "@/common/services/enumerators/enumerator.service"
import ProfessorService from '@/common/services/professor/professor.service'


export default {
    components: {

    },
    data() {
        return {
            curso: {
                nome: null,
                periodo: null,
                professorId: null,
                professorNome: null,
            },
            colecaoPeriodoCurso: [],
            colecaoProfessor: [],
        }
    },

    mounted(){
        this.listarPeriodo();
        this.listarProfessor();
    },

    methods: {
        adicionar() {
            CursoService.adicionar(this.curso)
            .then(result => {
                NotificacaoService.exibirNotificacaoSucessoApi(result)
             this.$router.push({name: "CursoListagem"})    
            })
            .catch(err => {
                if (err.response.status == 400) {
                    NotificacaoService.exibirNotificacaoErroApi(err);
                }
            });
        },
        listarPeriodo(){
            EnumatorService.listarPeriodoCurso()
            .then(result => {
                this.colecaoPeriodoCurso = result.data
            })
            .catch( err => {
                console.log(err.response)
            })
        },
        listarProfessor(){
             ProfessorService.listar()
            .then(result => {
                this.colecaoProfessor = result.data.dados
            })
            .catch( err => {
                console.log(err.response)
            })
        }
    }
}
</script>

<style scoped>
.mb-3{
    width: 400px;
    display: block;
    margin: 0 auto;
    margin-top: 10px;

}

.d-grid{
    width:110px;
}

.warning{
    text-align: center;
}

.form-label{
    padding-top: 10px;
}

</style>
