from datetime import datetime
import pytz

fuso_horario = pytz.timezone('America/Sao_Paulo')
data_e_horario_atuais = datetime.now(fuso_horario)

print("\nData e Horário atual:")
print(data_e_horario_atuais.strftime("%d/%m/%Y %H:%M:%S"))