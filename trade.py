import requests
# from config import *


API_KEY = "PK5XMN15UJ47VWHFWRRM"

SECRET_KEY = "iL88NatBdu8oZumuNwmGLzkPGkk9eAYayXt6ztkR"

BASE_URL = "https://paper-api.alpaca.markets"

ACCOUNT_URL= "{}/v2/account".format(BASE_URL)

r = requests.get(ACCOUNT_URL, headers={'APCA-API-KEY-ID': API_KEY, 'APCA-API-SECRET-KEY': SECRET_KEY})

print(r.content)