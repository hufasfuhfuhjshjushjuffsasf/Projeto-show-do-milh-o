var a = 0;
var b = 1;
var c = 2;
var d =3;
 

//Inicio função para desabilitar os botões de alternativa
function desabilitar(){
    for(i ; i < z.length; i++){
                       z[i].disabled = true;
                   }
        i = 0;
}
//Final função para desabilitar os botões de alternativa

//-----------------------------------------------------------------------------

//Inicio função das convidado

function convidado(g){
    if(g === a){
    document.querySelector('.dica').innerHTML = "75% dos convidados falaram A, 10% falaram B, 6.5% falou C e 3.5% falou D.";
    }else  if(g === b){
        document.querySelector('.dica').innerHTML = "15% dos convidados falaram A, 80% falaram B, 2.5% falou C e 2.5% falou D.";
    }else if(g === c){
        document.querySelector('.dica').innerHTML = "4.5% falaram B ,95% falaram C, 4% falou A e 1.5% falou D.";
    }else{
        document.querySelector('.dica').innerHTML = "10% dos convidados falaram B ,85.5% falaram D, 3% falou C e 1.5% falou D.";
    }
    document.querySelector('.convidado').disabled = true;
}


//Final função das convidado

//-----------------------------------------------------------------------------
//Inicio função de parar
function parar(){
    if(dinheiro === 1000 ){
        document.querySelector('.dica').innerHTML = "Você ganhou um bombom que eu vou ficar devendo, clique em voltar para tentar novamente.";
    } else{
     document.querySelector('.dica').innerHTML = "Parabéns, você ganhou R$"+(dinheiro)+" clique em voltar para tentar novamente.";
    }
    
    document.querySelector('.convidado').disabled = true;
    document.querySelector('.continuar').disabled = true;
    desabilitar();
}

//Final função de parar

//-----------------------------------------------------------------------------

//Inico função para ver ser a resposta esta certa

function trueorfalse(x,f){
    debugger;
    
//    Se acertar a questão
    
    if(f === x){
        dinheiro *= 8;
        document.querySelector('.dinheiro').innerHTML = "R$ " + dinheiro;
        document.querySelector('.dinheiro-ganhar').innerHTML = "R$ " +(dinheiro*8);
        document.querySelector('.parar').disabled = true;
        
//        questao semi-final
        
        if(dinheiro === 512000){
            
                document.querySelector('.dinheiro-perder').innerHTML = "Perde tudo.";
                document.querySelector('.dinheiro-ganhar').innerHTML = "1 milhão de reais";
                document.querySelector('.dica').innerHTML = "A próxima questão vale 1 milhão de reais. CUIDADO! Você pode parar com o valor de R$"+dinheiro;
            
                document.querySelector('.convidado').disabled = true;
                document.querySelector('.parar').disabled = false;
                document.querySelector('.continuar').disabled = false;
                document.getElementById('certo').play();
             }else 
                 
//                 Questao final
                 
             if(dinheiro >= 612000){
                 
                document.querySelector('.dica').innerHTML = "Aí a resposta tava fácil demais."
                document.querySelector('.dinheiro').innerHTML = "1 milhão de reais";
                document.querySelector('.dinheiro-ganhar').innerHTML = "Parabens!!!!";
                document.querySelector('.dinheiro-perder').innerHTML = "Essa não tem erro.";
                document.getElementById('champion').play();
                document.getElementById("champion").volume = 0.3;
                document.getElementById('suspense').pause();
             }
        
//               Todas as outras questões certas
        
        else{
                 
                 document.querySelector('.dinheiro-perder').innerHTML = "R$ " +(dinheiro)/2;
                 document.querySelector('.dica').innerHTML = "Boa! Clique em continuar ;)";
                 
                 document.getElementById('certo').play() 
                 
                 document.querySelector('.continuar').disabled = false;
             }
        } else 
//    Se errar e for a primeira questão e ele nem tentar responder
            if(dinheiro === 1000){
            
            document.querySelector('.dica').innerHTML = ("Voce errou e ganhou apenas um parabéns por tentar :( <br>Clique em voltar para tentar novamente!<br>");
            document.getElementById('errado').play()
            document.querySelector('.convidado').disabled = true;
            document.querySelector('.parar').disabled = true;
//            Se errar a questao recebe metade do dinheiro
        }else{
            document.querySelector('.dica').innerHTML = ("Voce errou e ganhou R$"+(dinheiro/2)+" clique em voltar.");
            document.getElementById('errado').play()
            document.querySelector('.convidado').disabled = true;
            document.querySelector('.parar').disabled = true;
        }
    desabilitar();
}


//Inico função para ver ser a resposta esta certa

//-----------------------------------------------------------------------------

//Inico função para escolher uma pergunta random

function pergunta(){
    debugger;
    var a = parseInt(Math.random()*6);
    var perg = document.querySelector('.pergunta-aleatoria');
    var resp = document.querySelectorAll('.button-resposta');
    
    
    var x= 0;
//                primeira leva de perguntas
        //        possibilidade numero 1
//        -----------------------------------------------------------------------------
    if(a === 0){
            
        perg.innerHTML = "Qual é o menor país do mundo?";
        resp[0].textContent = "A- Vaticano";
        resp[1].textContent = "B- Nauru";
        resp[2].textContent = "C- Mônaco";
        resp[3].textContent = "D- Malta";
        x = 0;
    } else
        //        possibilidade numero 2
//        -----------------------------------------------------------------------------
        if(a === 1){
                    
            perg.innerHTML = "Qual é o maior país do mundo?";
            resp[0].textContent = "A- Rússia";
            resp[1].textContent = "B- China";
            resp[2].textContent = "C- Canadá";
            resp[3].textContent = "D- Estados Unidos";
            x = 0;
   
    } else
        //        possibilidade numero 3
//        -----------------------------------------------------------------------------
        if(a === 3){
           perg.innerHTML = "O que a palavra legend significa em português?";
           resp[0].textContent = "A- Legenda";
           resp[1].textContent = "B- Conto";
           resp[2].textContent = "C- História";
           resp[3].textContent = "D- Lenda";
            x = 3;
    } else
        //        possibilidade numero 4
//        -----------------------------------------------------------------------------
        if(a === 4){
            perg.innerHTML = "Qual o número maximo de jogadores numa partida de futebol?";
            resp[0].textContent = "A- 7";
            resp[1].textContent = "B- 11";
            resp[2].textContent = "C- 14";
            resp[3].textContent = "D- 12";
            x = 1;
        }else
            //        possibilidade numero 5
//        -----------------------------------------------------------------------------
            if(a === 5){
                perg.innerHTML = "Qual a nacionalidade de Che Guevara?";
                resp[0].textContent = "A- Argentina";
                resp[1].textContent = "B- Boliviana";
                resp[2].textContent = "C- Cubana";
                resp[3].textContent = "D- Peruana";
                x = 0;
                //        possibilidade numero 6
//        -----------------------------------------------------------------------------
        } else{
            perg.innerHTML = "Qual personagem folclórico costuma ser agradado pelos caçadores com a oferta de fumo?";
            resp[0].textContent = "A- Lobisomem";
            resp[1].textContent = "B- Boitatá";
            resp[2].textContent = "C- Caipora";
            resp[3].textContent = "D- Negrinho do Pastoreio";
            x = 2;
        }
//            segunda leva de perguntas
            
            
            if(cont === 2){
                //        possibilidade numero 1
//        -----------------------------------------------------------------------------
                if(a === 0){
            
        perg.innerHTML = "Qual o nome do presidente do Brasil que ficou conhecido como Jango?";
        resp[0].textContent = "A- João Goulart";
        resp[1].textContent = "B- Getúlio Vargas";
        resp[2].textContent = "C- Jânio Quadros";
        resp[3].textContent = "D- Jacinto Anjos";
        x = 0;
    } else
//        possibilidade numero 2
//        -----------------------------------------------------------------------------
        if(a === 1){
                    
            perg.innerHTML = "Quantas casas decimais tem o número pi?";
            resp[0].textContent = "A- Infinitas";
            resp[1].textContent = "B- Duas";
            resp[2].textContent = "C- Centenas";
            resp[3].textContent = "D- Milhares";
            x = 0;
   
    } else
        //        possibilidade numero 3
//        -----------------------------------------------------------------------------
        if(a === 3){
           perg.innerHTML = "Em que período da pré-história o fogo foi descoberto?";
           resp[0].textContent = "A- Idade Média";
           resp[1].textContent = "B- Período da Pedra Polida";
           resp[2].textContent = "C- Idade dos Metais";
           resp[3].textContent = "D- Paleolítico";
            x = 3;
    } else
        //        possibilidade numero 4
//        -----------------------------------------------------------------------------
        if(a === 4){
            perg.innerHTML = "Qual a montanha mais alta do Brasil?";
            resp[0].textContent = "A- Pico da Neblina";
            resp[1].textContent = "B- Pico Paraná";
            resp[2].textContent = "C- Monte Roraima";
            resp[3].textContent = "D- Pico Maior de Friburgo";
            x = 1;
        }else
            //        possibilidade numero 5
//        -----------------------------------------------------------------------------
            if(a === 5){
                perg.innerHTML = "Que líder mundial ficou conhecida como “Dama de Ferro”?";
                resp[0].textContent = "A- Margaret Thatcher";
                resp[1].textContent = "B- Angela Merkel";
                resp[2].textContent = "C- Dilma Rousseff";
                resp[3].textContent = "D- Hillary Clinton";
                x = 0;
        } else{
            //        possibilidade numero 6
//        -----------------------------------------------------------------------------
            perg.innerHTML = "Em qual local da Ásia o português é língua oficial?";
            resp[0].textContent = "A- Moçambique";
            resp[1].textContent = "B- Filipinas";
            resp[2].textContent = "C- Macau";
            resp[3].textContent = "D- Portugal";
            x = 2;
        }
               
            } else 
                
//                terceira leva de perguntas
//        -----------------------------------------------------------------------------
                
                if(cont === 3){
                    
                    //        possibilidade numero 1
//        -----------------------------------------------------------------------------
    
     if(a === 0){
            
        perg.innerHTML = "“It is six twenty ou twenty past six”. Que horas são em inglês?";
        resp[0].textContent = "A- 6:20";
        resp[1].textContent = "B- 12:06";
        resp[2].textContent = "C- 2:20";
        resp[3].textContent = "D- 12:20";
        x = 0;
     } else
         //        possibilidade numero 2
//        -----------------------------------------------------------------------------
        if(a === 1){
                    
            perg.innerHTML = "Qual o maior animal terrestre?";
            resp[0].textContent = "A- Elefante africano";
            resp[1].textContent = "B- Dinossauro";
            resp[2].textContent = "C- Baleia Azul";
            resp[3].textContent = "D- Girafa";
            x = 0;
   
     } else
         //        possibilidade numero 3
//        -----------------------------------------------------------------------------
        if(a === 3){
           perg.innerHTML = "Quem é o autor de “O Príncipe”?";
           resp[0].textContent = "A- Antoine de Saint-Exupéry";
           resp[1].textContent = "B- Rousseau";
           resp[2].textContent = "C- Thomas Hobbes";
           resp[3].textContent = "D- Maquiavel";
            x = 3;
     } else
         //        possibilidade numero 4
//        -----------------------------------------------------------------------------
        if(a === 4){
            perg.innerHTML = "Júpiter e Plutão são os correlatos romanos de quais deuses gregos?";
            resp[0].textContent = "A- Ares e Hermes";
            resp[1].textContent = "B- Zeus e Hades";
            resp[2].textContent = "C- Dionísio e Deméter";
            resp[3].textContent = "D- Cronos e Apolo";
            x = 1;
        }else
            //        possibilidade numero 5
//        -----------------------------------------------------------------------------
            if(a === 5){
                perg.innerHTML = "Qual destes países é transcontinental?";
                resp[0].textContent = "A- Rússia";
                resp[1].textContent = "B- Boliviana";
                resp[2].textContent = "C- Filipinas";
                resp[3].textContent = "D- Peruana";
                x = 0;
        } else if(a === 2)
            //        possibilidade numero 6
//        -----------------------------------------------------------------------------
           {
            perg.innerHTML = "Qual foi o recurso utilizado inicialmente pelo homem para explicar a origem das coisas?";
            resp[0].textContent = "A- A Filosofia";
            resp[1].textContent = "B- A Biologia";
            resp[2].textContent = "C- A Mitologia";
            resp[3].textContent = "D- A Astronomia";
            x = 2;
        }
                }else if(cont >3){ 
                    perg.innerHTML = "Quem vai passar pro estagio da jovens genios ?";
                    resp[0].textContent = "Caio Abreu";
                    resp[1].textContent = "";
                    resp[2].textContent = "";
                    resp[3].textContent = "";
                    x = 0;
                    document.querySelector('.convidado').disabled = true; 
                    document.querySelector('.parar').disabled = true; 
                    document.querySelector('.continuar').disabled = true; 
                }
    return parseInt(x);  }
//Final função para escolher uma pergunta random