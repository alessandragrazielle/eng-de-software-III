class RedeSocial {
    public postarMensagem(mensagem: string) {
        if(mensagem == null || mensagem.trim() == ("")){
            throw new Error("A mensagem não pode ser vazia!");
        }
        console.log("Mensagem postada: " + mensagem);
            
    }
}

let rs: RedeSocial = new RedeSocial
rs.postarMensagem('     ');