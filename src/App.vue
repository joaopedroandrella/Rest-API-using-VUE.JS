<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Cadastros</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
          Aluno
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/jpcadastro/aluno/cadastro#/jpcadastro/aluno/cadastro">Adicionar</a>
          <a class="dropdown-item" href="/jpcadastro/aluno/cadastro#/jpcadastro/aluno/listagem">Listar/Editar/Remover</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
          Professor
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/jpcadastro/professor/cadastro#/jpcadastro/professor/cadastro">Adicionar</a>
          <a class="dropdown-item" href="/jpcadastro/professor/cadastro#/jpcadastro/professor/listagem">Listar/Editar/Remover</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
          Curso
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/jpcadastro/curso/cadastro#/jpcadastro/curso/cadastro">Adicionar</a>
          <a class="dropdown-item" href="/jpcadastro/curso/cadastro#/jpcadastro/curso/listagem">Listar/Editar/Remover</a>
        </div>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-expanded="false">
          Matricula
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="/jpcadastro/matricula/cadastro#/jpcadastro/matricula/cadastro">Adicionar</a>
          <a class="dropdown-item" href="/jpcadastro/matricula/cadastro#/jpcadastro/matricula/listagem">Listar/Editar/Remover</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

<router-view/>
</template>

<style>

</style>