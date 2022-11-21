<template>
<body>
<div class="divPai">
    <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Cpf:</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Cpf" required v-model="professor.cpf">
    </div>
    <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Nome:</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nome do Professor(a)" required v-model="professor.nome">
    </div>
    <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Telefone:</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Telefone" required v-model="professor.telefone">
    </div>
        <p class="warning">*Campos obrigatórios</p>
    <div class="d-grid gap-2 col-6 mx-auto">
        <button class="btn btn-primary" type="button" @click="adicionar">Cadastrar</button>
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
    methods: {
        adicionar() {
            ProfessorService.adicionar(this.professor)
            .then(result => {
                NotificacaoService.exibirNotificacaoSucessoApi(result)
                this.$router.push({name: "ProfessorListagem"})
            })
            .catch(err => {
                if (err.response.status == 400) {
                    NotificacaoService.exibirNotificacaoErroApi(err);
                }
            });
        },
        inicializarDados() {
            this.professor = {
                cpf: "",
                nome: "",
                telefone: ""
            }
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
</style>