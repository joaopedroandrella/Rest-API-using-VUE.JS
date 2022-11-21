<template>
<div class="container">
       <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Cpf</th>
                    <th>Nome do Aluno(a)</th>
                    <th>Telefone</th>
                    <th>Opçoes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="aluno in colecaoAluno" :key="aluno.id">
                    <td>{{aluno.cpf}}</td>
                    <td>{{aluno.nome}}</td>
                    <td>{{aluno.telefone}}</td>
                    <td ><button type="button" @click="editarAluno(aluno.id)"><i class="fa-solid fa-pen-to-square">Editar</i>
                    </button><button type="button" @click="removerAluno(aluno.id)"><i class="fa-solid fa-trash-can">Remover</i></button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import AlunoService from "@/common/services/aluno/aluno.service"
import NotificacaoService from "@/common/services/utils/notificacao.service"

export default {
    components: {

    },
    data() {
        return {
            colecaoAluno: [
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
        this.listarAluno();
    },

    methods: {
        listarAluno() {
            AlunoService.listar()
            .then(result => {
                this.colecaoAluno = result.data.dados;
            })
        },
        editarAluno(alunoId) {
            this.$router.push({name: "AlunoEditar", params: {id: alunoId}});
        },
        removerAluno(id){
            AlunoService.remover(id)
            .then(result => {
                NotificacaoService.exibirNotificacaoSucessoApi(result)
                .then(resultNotificacao => {
                    this.listarAluno()
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