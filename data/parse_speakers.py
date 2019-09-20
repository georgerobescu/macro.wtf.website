import json
import csv


collection = {}

with open("speakers.csv") as f:
    reader = csv.DictReader(f)
    for row in reader:
        _id = row.pop("id")
        row["featured"] = row["featured"] == "TRUE"
        order = row.pop("order")
        if order != '':
            row["order"] = float(order)
        collection[_id] = row


# print(json.dumps(collection, indent=2))
with open ("speakers.json", "w") as f:
    json.dump(collection, f, indent=2)
