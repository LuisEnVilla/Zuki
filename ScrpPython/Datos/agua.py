# -*- coding: utf-8 -*-
import json
import pymongo

delega = [
  {'nombre':'Delegación Coyoacán', 		'numero':200},
  {'nombre':'Delegación Cuajimalpa de Morelos',		'numero':395},
  {'nombre':'Delegación Benito Juárez',		'numero':504},
  {'nombre':'Delegación Azcapotzalco',		'numero':133},
  {'nombre':'Delegación Álvaro Obregón',		'numero':281},
  {'nombre':'Delegación Xochimilco',		'numero':683},
  {'nombre':'Delegación Gustavo A. Madero',		'numero':666},
  {'nombre':'Delegación Cuauhtémoc',		'numero':10},
  {'nombre':'Delegación Iztacalco',		'numero':0},
  {'nombre':'Delegación Iztapalapa',		'numero':5703},
  {'nombre':'Delegación La Magadalena Contreras',		'numero':0},
  {'nombre':'Delegación Miguel Hidalgo',		'numero':0},
  {'nombre':'Delegación Milpa Alta',		'numero':567},
  {'nombre':'Delegación Tláhuac',		'numero':442},
  {'nombre':'Delegación Tlalpan',		'numero':3002},
  {'nombre':'Delegación Venustiano Carranza','numero':0}
  ]



client = pymongo.MongoClient()
db = client ['Zuki']
for x in delega:
	db.Delegaciones.insert({
		'nombre': x['nombre'],
		'reportesAgua': x['numero']
		})
client.close()


