<template>
<body>
<div class="divPai">
    <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Cpf:</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Cpf" required v-model="professor.cpf">
    </div>
    <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Nome:</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nome do Professor" required v-model="professor.nome">
    </div>
    <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Telefone:</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Telefone" required v-model="professor.telefone">
    </div>
        <p class="warning">*Campos obrigatórios</p>
    <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button" @click="atualizar">Editar</button>
    </div>
</div>    
</body>
</template>

<script>

import NotificacaoService from "@/common/services/utils/notificacao.service"
import ProfessorService from "@/common/services/professor/professor.service"

export default {
    components: {

    },
    data() {
        return {
            professor: {
                cpf: null,
                nome: null,
                telefone: null
            }
        }
    },
    mounted() {
        this.obterProfessorPorId();
    },

    methods: {
        obterProfessorPorId() {
            ProfessorService.obter(this.$route.params.id)
            .then(result => {
                this.professor = result.data.dados;
            })
            .catch(err => {
                console.log(err.response);
            })
        },

        atualizar() {
            ProfessorService.atualizar(this.professor)
            .then(result => {
                NotificacaoService.exibirNotificacaoSucessoApi(result)
                .then(resultNotificacao =>{
                    this.$router.push({name: "ProfessorListagem"})
                })
                 .catch(err => {
                    NotificacaoService.exibirNotificacaoErroApi(err);
                })
            })
            .catch(err => {
                if (err.response.status == 400) {
                    NotificacaoService.exibirNotificacaoErroApi(err);
                }
            }); 
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
</style>