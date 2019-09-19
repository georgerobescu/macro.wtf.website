import csv
import json


timeslots_day_1 = []
timeslots_day_2 = []

timeslots = timeslots_day_1

with open("schedule.csv") as f:
    f.readline()
    f.readline()
    reader = csv.DictReader(f)
    for row in reader:
        if row["shard 1"] == 'Day 2':
            timeslots = timeslots_day_2
            continue
        if row["startTime"] == '' or row["endTime"] in ('', "#N/A"):
            continue

        shard_1_items = [int(row["shard 1"])] if row["shard 1"] != '' else []
        shard_2_items = [int(row["shard 2"])] if row["shard 2"] != '' else []
        doc = {
            "startTime": row["startTime"],
            "endTime": row["endTime"],
            "sessions": [
                {"items": shard_1_items},
                {"items": shard_2_items},
            ]
        }
        timeslots.append(doc)

tracks = [{
    "title": "Shard 1"
}, {
    "title":  "Shard 2"
}]

collection = {
    "2019-10-19": {
        "dateReadable": "October 19",
        "timeslots": timeslots_day_1,
        "tracks": tracks,
    },
    "2019-10-20": {
        "dateReadable": "October 20",
        "timeslots": timeslots_day_2,
        "tracks": tracks,
    }
}

# print(json.dumps(collection, indent=2))
with open("schedule.json", "w") as f:
    json.dump(collection, f, indent=2)
