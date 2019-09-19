import csv
import json

collection = {}

def to_list(v):
    return v.replace(' ','').split(',')

SKIPPED_FIELDS = ["length", "type"]

with open("sessions.csv") as f:
    reader = csv.DictReader(f)
    for row in reader:
        _id = row.pop("item")
        doc = {}
        for  k, v in row.items():
            if v=='' or k in SKIPPED_FIELDS:
                continue
            if k in ['speakers', 'tags']:
                doc[k] = to_list(v)
            else:
                doc[k] = v
        collection[_id] = doc


# print(json.dumps(collection, indent=2))
with open ("sessions.json", "w") as f:
    json.dump(collection, f, indent=2)
