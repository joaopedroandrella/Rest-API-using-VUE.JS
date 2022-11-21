import Swal from 'sweetalert2';

const NotificacaoService = {
    exibirNotificacaoSucessoApi(sucessoApi) {
        return Swal.fire({
           icon: 'success',
           title: 'Sucesso',
           html: sucessoApi.data.dados.mensagem                  
        });
    },
    exibirNotificacaoErroApi(erroApi) {
        if (erroApi.response.status == 400) {
            let colecaoNotificacao = '';

            if (erroApi.response.data.notificacoes == undefined)
            {
                console.log('ERRO', err.response);

                for (let index = 0; index < erroApi.response.data.errors.length; index++) {
                    colecaoNotificacao += `${notificacao[index][0]} <br/>`
                }

                return Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    html: erroApi.response.data.errors                             
                });                
            }

            erroApi.response.data.notificacoes.forEach(notificacao => {
                colecaoNotificacao += `${notificacao.message} <br/>`
            });

            return Swal.fire({
                icon: 'error',
                title: 'Oops...',
                html: colecaoNotificacao                               
            });
        }

        return Swal.fire({            
            icon: 'error',
            title: 'Oops...',
            html: erroApi.response                               
        });
    },
    //Notificação Padrão sem validar no BackEnd
    exibirNotificacaoFront(icone, titulo, mensagem) {
        return Swal.fire({
            icon: icone,
            title: titulo,   
            html: mensagem         
        });
    },
}

export default NotificacaoService