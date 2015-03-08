# -*- coding: utf-8 -*-
import json
import pymongo
import unicodedata

def elimina_tildes(s):
   return ''.join((c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn'))


client = pymongo.MongoClient()
db = client ['Zuki']
resul = db.Delegaciones.find({})
re = db.feliz.find({})
for x in resul:
	name = elimina_tildes(x['nombre']).strip().lower()
	for j in re:
		name2 = elimina_tildes(j['nombre']).strip().lower()
		print(name + "/" + name2)
		if name.split()[0] == name2.split()[0]:
			db.Delegaciones.update({"_id":x['_id']},
			{"$set":{
				"gentefeliz" : j['gentefeliz'],
    			"porcentajeFeliz" : j['porcentajeFeliz'],
    			"genteTriste" : j['genteTriste'],
    			"incidencia" : {
			        "nombre" : j['incidencia']['nombre'],
			        "cantidad" : j['incidencia']['cantidad']
   				}
			}})
client.close()