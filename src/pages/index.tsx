import { useState } from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Cliente from "../core/Cliente";

export default function Home() {

  const [cliente,setCliente] = useState<Cliente>(Cliente.vazio())

  const [visivel,setVisivel] = useState<'tabela' | 'form'>('tabela')

  const clientes = [
    new Cliente('Gui', 25 , '1'),
    new Cliente('leo', 25 , '2'),
    new Cliente('bia', 15 , '3'),
  ]
  
  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente)
    setVisivel('form')
  }
  function clienteExcluido(cliente: Cliente) {
    console.log(`excluir... ${cliente.nome}`)
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente)
    setVisivel('tabela')
  }

  function novoCliente() {
    setCliente(Cliente.vazio())
    setVisivel('form')
  }



 

  return (
    <div className={`
    flex justify-center items-center h-screen
    bg-gradient-to-l from-green-700 
    text-black
    `}>
      <Layout titulo="Cadastro Simples">
        {visivel === 'tabela' ? (
          <>
          <div className="flex justify-end">
          <Botao cor="green" className="mb-4"
           onClick={novoCliente}>
             Novo Cliente
             </Botao>
          </div>
          <Tabela clientes={clientes} 
          clienteSelecionado={clienteSelecionado} 
          clienteExcluido={clienteExcluido} 
       />
       </>
        ) : (
          <Formulario 
          cliente={cliente} 
          clienteMudou={salvarCliente}
          cancelado={() => setVisivel('tabela')}
          />
        )}
        
            
      </Layout>
    </div>
  )
}
