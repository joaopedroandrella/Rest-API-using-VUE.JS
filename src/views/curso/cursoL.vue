<template>
<div class="container">
       <table class="table table-bordered">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Periodo</th>
                    <th>Professor</th>
                    <th class="op">Opcoes</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="curso in colecaoCurso" :key="curso.id">
                    <td>{{curso.nome}}</td>
                    <td>{{curso.periodo}}</td>
                    <td>{{curso.professorNome}}</td>
                    <td><button type="button" @click="editarCurso(curso.id)"><i class="fa-solid fa-pen-to-square">Editar</i></button>
                        <button type="button" @click="removerCurso(curso.id)"><i class="fa-solid fa-trash-can">Remover</i></button>
                    </td>
                </tr>
            </tbody>
        </table>
</div>
</template>

<script>

import CursoService from '@/common/services/curso/curso.service'
import EnumatorService from "@/common/services/enumerators/enumerator.service"
import NotificacaoService from "@/common/services/utils/notificacao.service"

export default {
    components: {

    },
    data() {
        return {
            colecaoCurso: 
               [ {
                    id: null,
                    nome: null,
                    periodoName: null,
                    professorNome: null,
                    professorId: null,
            }],
            colecaoPeriodo: [],
        }
    },
    mounted() {
        this.listarCurso();
        this.listarPeriodo();
    },
    methods: {
        listarCurso() {
            CursoService.listar()
            .then(result => {
                this.colecaoCurso = result.data.dados;
            })
        },
        listarPeriodo(){
            EnumatorService.listarPeriodoCurso()
            .then(result => {
                this.colecaoPeriodo = result.data
            })
            .catch( err => {
                console.log(err.response)
            })
        },
        editarCurso(cursoId) {
            this.$router.push({name: "CursoEditar", params: {id: cursoId}});
        },
        removerCurso(id){
            CursoService.remover(id)
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