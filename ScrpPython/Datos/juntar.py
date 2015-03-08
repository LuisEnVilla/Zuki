# -*- coding: utf-8 -*-
import json
import pymongo
client = pymongo.MongoClient()
db = client ['Zuki']
resul = db.Delegaciones.find()
for x in resul:
	name = x['nombre']
	db.Delegaciones.update({"_id":x['_id']},
		{"$set":{"nombre": name[11:]}})