menu = 0
apostasRodadas = []
def exibicaoRodadas():
  valorTotal = 0
  contador = 0 
  valorRodada = valorInicial
  print("Rodada | Valor apostado | Valor total | Lucro | Chance de Derrota")
  while contador < quantidadeRodadas:
    contador = contador + 1
    valorTotal += valorRodada
    chanceDerrotanessaRodada = chanceDerrotaUmaRodada**contador
    print(f"{contador} | {valorRodada} | {valorTotal} | ", valorRodada*multiplicadorGanho-valorTotal, f" | {round(chanceDerrotanessaRodada * 100, 3)}%")
    valorRodada = int(valorRodada*Multiplicador)
def valorInicialfuncao(MultiplicadorFuncao):
  if MultiplicadorFuncao == 1 or MultiplicadorFuncao == 2 or MultiplicadorFuncao == 3 or MultiplicadorFuncao == 4 :
    Valorinicialf = 1
  elif MultiplicadorFuncao == 1.08:
    Valorinicialf = 13
  elif MultiplicadorFuncao == 1.1:
    Valorinicialf = 10
  elif MultiplicadorFuncao == 1.2:
    Valorinicialf = 5
  elif MultiplicadorFuncao == 1.3:
    Valorinicialf = 4
  elif MultiplicadorFuncao == 1.4:
    Valorinicialf = 3
  else:
    Valorinicialf = 2
  return Valorinicialf
def validacaoMultiplicador(MultiplicadorFuncao):
  if MultiplicadorFuncao == 1 or MultiplicadorFuncao == 1.08 or MultiplicadorFuncao == 1.1 or MultiplicadorFuncao == 1.2 or MultiplicadorFuncao == 1.3 or MultiplicadorFuncao == 1.4 or MultiplicadorFuncao == 1.5 or MultiplicadorFuncao == 2 or MultiplicadorFuncao == 3 or MultiplicadorFuncao == 4:
    return True
  else:
    return False
def VTotalVRodada(valorInicial):
  global quantidadeRodadas, valorTotal, valorRodada
  valorTotal = valorInicial
  contador = 1
  valorRodada = valorInicial
  while contador < quantidadeRodadas:
    valorRodada = int(valorRodada * Multiplicador)
    valorTotal += valorRodada
    contador += 1
while True:
  if menu == 0:
    print("|1- Indentificar quantidade de rodadas|")
    print("|2- Indentificar valor inicial de apostas|")
    print("|3- Estratégia secreta                          |")
    menu = int(input())
    while menu != 1 and menu != 2 and menu != 3:
      print("Número digitado é inválido!!!")
      menu = int(input("Digite um número valido"))
  elif menu == 1:
    valorInicial = int(input("Digite o valor inicial das apostas: "))
    Saldo = int(input("Digite o seu saldo: "))
    if Saldo < 1:
      print("Valor de rodadas inválido!!!")
      Saldo = int(input("Digite  um valor de saldo valido: "))
    Multiplicador = float(input("Digite o multiplicador: "))
    multiplicadorGanho = int(input("Digite o multiplicador do ganho: "))
    if multiplicadorGanho == 2:
      chanceDerrotaUmaRodada = 0.533333
    elif multiplicadorGanho== 14:
      chanceDerrotaUmaRodada = 0.933333
    valorTotal = valorInicial
    quantidadeRodadas = 1
    valorRodada = valorInicial
    while valorTotal + valorRodada * Multiplicador < Saldo:
      valorRodada = int(valorRodada*Multiplicador)
      valorTotal += valorRodada 
      quantidadeRodadas = quantidadeRodadas + 1
    chanceDerrotanessaRodada = chanceDerrotaUmaRodada**quantidadeRodadas
    print(f"com esse saldo você consegue apostar {quantidadeRodadas} rodadas sem ripar")
    print("O valor total apostado será : ",valorTotal)   
    print(f"O último valor apostado será: {valorRodada}")   
    print("O lucro na última rodada será: ",valorRodada*multiplicadorGanho-valorTotal)   
    print(f"Chance de derrota é de: {round(chanceDerrotanessaRodada * 100, 3)}%")
    print("0-Voltar ao menu")
    print("4-Ver tabela de todas as rodadas")
    print("Qualquer outro número para finalizar o programa")
    menu = int(input())
  elif menu == 2:
    Saldo = int(input("Digite seu saldo: "))
    if Saldo < 1:
      print("Valor de saldo inválido!!!")
      Saldo = int(input("Digite  um valor de saldo valido: "))
    Multiplicador = float(input("Digite o multiplicador: "))
    validador = validacaoMultiplicador(Multiplicador)
    while validador == False:
      print("Multiplicador inválido")
      Multiplicador = int(input("Digite um multiplicador válido: "))
      validador = validacaoMultiplicador(Multiplicador)
    valorInicial = valorInicialfuncao(Multiplicador)
    multiplicadorGanho = int(input("Digite o multiplicador do ganho: "))
    if multiplicadorGanho == 2:
      chanceDerrotaUmaRodada = 0.533333
    elif multiplicadorGanho== 14:
      chanceDerrotaUmaRodada = 0.933333
    else: 
      print("Multiplicador de ganho inválido")
    quantidadeRodadas = int(input("Digite a quantidade de rodadas máximas que você quer perder: "))
    VTotalVRodada(valorInicial)
    if valorTotal > Saldo:
      print(f"Saldo muito baixo para tankar {quantidadeRodadas} rodadas")
      break
    else:
      while valorTotal < Saldo:
        valorInicial += 1
        VTotalVRodada(valorInicial)
      valorInicial -= 1
      VTotalVRodada(valorInicial)
    chanceDerrotanessaRodada = chanceDerrotaUmaRodada**quantidadeRodadas
    print(f"Com um saldo de {Saldo} e com uma meta de {quantidadeRodadas} rodadas:")
    print(f"O valor inicial seria de {valorInicial}")
    print("O valor total apostado será : ",valorTotal)   
    print(f"O último valor apostado será: {valorRodada}")   
    print("O lucro na última rodada será: ",valorRodada*multiplicadorGanho-valorTotal)   
    print(f"Chance de derrota é de: {round(chanceDerrotanessaRodada * 100, 3)}%")
    print("0-Voltar ao menu")
    print("4-Ver tabela de todas as rodadas")
    print("Qualquer outro número para finalizar o programa")
    menu = int(input())
  elif menu == 3:
    Saldo = int(input("Digite seu saldo: "))
    if Saldo < 1:
      print("Valor de saldo inválido!!!")
      Saldo = int(input("Digite  um valor de saldo valido: "))
    valorInicial = int(input("Digite o valor inicial das apostas: "))
    Multiplicador = float(input("Digite o multiplicador inicial: "))
    validador = validacaoMultiplicador(Multiplicador)
    while validador == False:
      print("Multiplicador inválido")
      Multiplicador = int(input("Digite um multiplicador válido: "))
      validador = validacaoMultiplicador(Multiplicador)
    metaLucro = int(input("Digite o lucro desejado: "))
    chanceDerrotaUmaRodada = 0.933333
    quantidadeRodadas = 1
    if valorInicial * 13 < metaLucro:
      apostasRodadas.append(valorInicial)
      valorTotal = valorInicial
      while apostasRodadas[-1] * 14 - valorTotal < metaLucro and valorTotal < Saldo:
        apostasRodadas.append(int(apostasRodadas[-1] * Multiplicador))
        valorTotal += apostasRodadas[-1]
        quantidadeRodadas += 1
    valorRodada = apostasRodadas[-1]
    auxiliar = 0
    apostasRodadas[-1] -= 1
    while valorTotal < Saldo:
      if apostasRodadas[-1] * 14 - valorTotal > metaLucro and valorTotal < Saldo:
        apostasRodadas.append(int(apostasRodadas[-1] * 1.076923083) - 1) 
        valorTotal += apostasRodadas[-1]
        quantidadeRodadas += 1
      else:
        apostasRodadas.append(int(apostasRodadas[-1] * 1.076923083) + 1) 
        valorTotal += apostasRodadas[-1]
        quantidadeRodadas += 1
    chanceDerrotanessaRodada = chanceDerrotaUmaRodada**quantidadeRodadas
    valorTotal -= apostasRodadas[-1]
    print(f"Meta de lucro por acerto de {metaLucro}")
    print(f"Com um valor inicial de {valorInicial}")
    print(f"com esse saldo você consegue apostar {quantidadeRodadas} rodadas sem ripar")
    print("O valor total apostado será : ",valorTotal)   
    print(f"O último valor apostado será: ", apostasRodadas[-2])
    print("O lucro na última rodada será: ",apostasRodadas[-2] * 14 -valorTotal)   
    print(f"Chance de derrota é de: {round(chanceDerrotanessaRodada * 100, 3)}%")
    print("0-Voltar ao menu")
    print("4-Ver tabela de todas as rodadas")
    print("Qualquer outro número para finalizar o programa")
    menu = int(input())
    if menu == 4 :
      valorTotal = 0
      contador = 0 
      print("Rodada | Valor apostado | Valor total | Lucro | Chance de Derrota")
      while contador < quantidadeRodadas:
        valorTotal += apostasRodadas[contador]
        contador = contador + 1
        chanceDerrotanessaRodada = chanceDerrotaUmaRodada**contador
        print(f"{contador} | {apostasRodadas[contador - 1]} | {valorTotal} | ", apostasRodadas[contador - 1]*14-valorTotal, f" | {round(chanceDerrotanessaRodada * 100, 3)}%")
    print("0-Voltar ao menu")
    print("Qualquer outro número para finalizar o programa")
    menu = int(input())
  elif menu == 4: 
    exibicaoRodadas()
    print("0-Voltar ao menu")
    print("Qualquer outro número para finalizar o programa")
    menu = int(input())
  else: 
    print("Número digitado é invalido!! finalizando programa!!")
    break