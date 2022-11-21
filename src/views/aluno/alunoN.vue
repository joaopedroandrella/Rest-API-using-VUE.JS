<template>
<body>
<div class="divPai">
    <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Cpf:</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Cpf" required v-model="aluno.cpf">
    </div>
    <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Nome:</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Nome do Aluno(a)" required v-model="aluno.nome">
    </div>
    <div class="mb-3">
        <label for="formGroupExampleInput" class="form-label">Telefone:</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Telefone" required v-model="aluno.telefone">
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
import AlunoService from "@/common/services/aluno/aluno.service"

export default {
    components: {

    },
    data() {
        return {
            aluno: {
                cpf: null,
                nome: null,
                telefone: null
            }
        }
    },
    methods: {
        adicionar() {
            AlunoService.adicionar(this.aluno)
            .then(result => {
                NotificacaoService.exibirNotificacaoSucessoApi(result)
                this.inicializarDados();
                this.$router.push({name: "AlunoListagem"})
            })
            .catch(err => {
                if (err.response.status == 400) {
                    NotificacaoService.exibirNotificacaoErroApi(err);
                }
            }); 
        },
        inicializarDados() {
            this.aluno = {
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