function capta_dados(){
    const data_pc = document.getElementById("data_pc").value
    const p_c = document.getElementById("p_c").value
    const cotacao = document.getElementById("cotacao").value
    const fornecedor = document.getElementById("fornecedor").value
    const partnumber = document.getElementById("partnumber").value
    const descricao = document.getElementById("descricao").value
    const qtd = Number(document.getElementById("qtd").value)
    const sn = document.getElementById("sn").value
    const finalidade = document.getElementById("finalidade").value
    const v_dolar = Number(document.getElementById("v_dolar").value)
    const v_real = Number(document.getElementById("v_real").value)
    const frete_interno = Number(document.getElementById("frete_interno").value)
    const frete_usa = Number(document.getElementById("frete_usa").value)
    const frete_br = Number(document.getElementById("frete_br").value) 
    const tot = qtd * v_real + (frete_br + frete_interno + frete_usa);
    document.getElementById('custo_final').value = tot;
    const estorno = Number(document.getElementById("estorno").value)
    const forma_pgto = document.getElementById("forma_pgto").value
    const forma_envio = document.getElementById("forma_pgto").value
    const recebido_em = document.getElementById("recebido_em").value

    tot_tempo_dias = data_pc - recebido_em
    document.getElementById('tempo_dias').value = tot_tempo_dias

    const observacoes = document.getElementById("observacoes").value
    const nfe = document.getElementById("nfe").value

};
function cadastra(){
    alert('Cadastrado!')
}