<template>
<div class="container">
       <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Curso</th>
                    <th>Nome Do Aluno(a)</th>
                    <th>Status</th>
                    <th class="op">Opcoes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="matricula in colecaoMatricula" :key="matricula.id">
                    <td>{{matricula.cursoNome}}</td>
                    <td>{{matricula.alunoNome}}</td>
                    <td>{{matricula.status}}</td>
                    <td><button type="button" @click="editarMatricula(matricula.id)"><i class="fa-solid fa-pen-to-square">Editar</i></button>
                        <button type="button" @click="removerMatricula(matricula.id)"><i class="fa-solid fa-trash-can">Remover</i></button>
                    </td>
                </tr>
            </tbody>
        </table>
</div>
</template>

<script>

import EnumatorService from "@/common/services/enumerators/enumerator.service"
import NotificacaoService from "@/common/services/utils/notificacao.service"
import MatriculaService from '@/common/services/matricula/matricula.service'

export default {
    components: {

    },
    data() {
        return {
            colecaoMatricula: 
               [ {
                    id: null,
                    alunoId: null,
                    alunoNome: null,
                    cursoId: null,
                    cursoNome: null,
                    status: null,
            }],
        }
    },
    mounted() {
        this.listarMatricula();
        this.listarPeriodo();
    },
    methods: {
        listarMatricula() {
            MatriculaService.listar()
            .then(result => {
                this.colecaoMatricula = result.data.dados;
            })
        },
        listarPeriodo(){
            EnumatorService.listarStatusMatricula()
            .then(result => {
                this.colecaoMatricula = result.data
            })
            .catch( err => {
                console.log(err.response)
            })
        },
        editarMatricula(matriculaId) {
            this.$router.push({name: "MatriculaEditar", params: {id: matriculaId}});
        },
        removerMatricula(id){
            MatriculaService.remover(id)
            .then(result => {
                NotificacaoService.exibirNotificacaoSucessoApi(result)
                .then(resultNotificacao => {
                    this.listarCurso()
                })
                .catch(err =>{
                    NotificacaoService.exibirNotificacaoErroApi(err)
                })
            })
        },
    }
}    
</script>

<style scoped>

</style>