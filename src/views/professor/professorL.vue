<template>
<div class="container">
       <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Cpf</th>
                    <th>Nome do Professor(a)</th>
                    <th>Telefone</th>
                    <th>Opçoes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="professor in colecaoProfessor" :key="professor.id">
                    <td>{{professor.cpf}}</td>
                    <td>{{professor.nome}}</td>
                    <td>{{professor.telefone}}</td>
                    <td ><button type="button" @click="editarProfessor(professor.id)"><i class="fa-solid fa-pen-to-square">Editar</i>
                    </button><button type="button" @click="removerProfessor(professor.id)"><i class="fa-solid fa-trash-can">Remover</i></button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import ProfessorService from "@/common/services/professor/professor.service"
import NotificacaoService from "@/common/services/utils/notificacao.service"

export default {
    components: {

    },
    data() {
        return {
            colecaoProfessor: [
                {
                    id: null,
                    cpf: null,
                    nome: null,
                    telefone: null
                }],
            key: null,
        }
    },

    mounted() {
        this.listarProfessor();
    },

    methods: {
        listarProfessor() {
            ProfessorService.listar()
            .then(result => {
                this.colecaoProfessor = result.data.dados;
            })
        },
        editarProfessor(professorId) {
            this.$router.push({name: "ProfessorEditar", params: {id: professorId}});
        },
        removerProfessor(id){
            ProfessorService.remover(id)
            .then(result => {
                NotificacaoService.exibirNotificacaoSucessoApi(result)
                .then(resultNotificacao => {
                    this.listarProfessor()
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