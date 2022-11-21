<template>
<div class="divPai">
    <div class="mb-3">
    <label for="formGroupExampleInput" class="form-label">Curso:</label>
        <select class="form-control" v-model="matricula.cursoId" :required="true">
            <option v-for="curso in colecaoCurso " :key="curso.id" :value="curso.id" >{{ curso.nome }}</option>
        </select>
    </div>
    <div class="mb-3">
    <label for="formGroupExampleInput" class="form-label">Nome Do Aluno(a):</label>
        <select class="form-control" v-model="matricula.alunoId" :required="true">
            <option v-for="aluno in colecaoAluno " :key="aluno.id" :value="aluno.id" >{{ aluno.nome }}</option>
        </select>
    </div>
    <div class="mb-3">
    <label for="formGroupExampleInput" class="form-label">Status:</label>
        <select class="form-control" v-model="matricula.status" :required="true">
            <option v-for="status in colecaoStatus " :key="status.id" :value="status.id" >{{ status.name }}</option>
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
import EnumatorService from "@/common/services/enumerators/enumerator.service"
import MatriculaService from "@/common/services/matricula/matricula.service"
import AlunoService from "@/common/services/aluno/aluno.service"
import CursoService from "@/common/services/curso/curso.service"

export default {
    components: {

    },
    data() {
        return {
            matricula:{
                id: null,
                cursoId: null,
                alunoId: null,
                status: null,
            },
            colecaoAluno: [],
            colecaoCurso: [],
            colecaoStatus: [],
        }
    },

    mounted(){
        this.listarStatus();
        this.listarAluno();
        this.ListarCurso();
    },

    methods: {
        adicionar() {
            MatriculaService.adicionar(this.matricula)
            .then(result => {
                NotificacaoService.exibirNotificacaoSucessoApi(result)
             this.$router.push({name: "MatriculaListagem"})    
            })
            .catch(err => {
                if (err.response.status == 400) {
                    NotificacaoService.exibirNotificacaoErroApi(err);
                }
            });
        },

        listarAluno(){
             AlunoService.listar()
            .then(result => {
                this.colecaoAluno = result.data.dados
            })
            .catch( err => {
                console.log(err.response)
            })
        },
        ListarCurso(){
            CursoService.listar()
            .then(result => {
                this.colecaoCurso = result.data.dados
            })
            .catch( err => {
                console.log(err.response)
            })
        },
        listarStatus(){
            EnumatorService.listarStatusMatricula()
            .then(result => {
                this.colecaoStatus = result.data
            })
            .catch( err => {
                console.log(err.response)
            })
        },
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