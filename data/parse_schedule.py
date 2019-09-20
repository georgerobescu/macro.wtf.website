import csv
import json


timeslots_day_1 = []
timeslots_day_2 = []

timeslots = timeslots_day_1


def generate_session(row, items_key, extend_key):
    session = {"items": []}
    items = row[items_key]
    extend = row[extend_key]
    if items != '':
        session["items"] = [int(item) for item in items.split(",")]
    if extend != '':
        session["extend"] = int(extend)
    return session


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
        shard_1_session = generate_session(row, "shard 1", "shard1_extend")
        shard_2_session =  generate_session(row, "shard 2", "shard2_extend")
        
        doc = {
            "startTime": row["startTime"],
            "endTime": row["endTime"],
            "sessions": [shard_1_session, shard_2_session]
        }
        timeslots.append(doc)

tracks = [{
    "title": "Shard 1"
}, {
    "title":  "Shard 2"
}]

collection = {
    "2019-10-19": {
        "date":  "2019-10-19",
        "dateReadable": "October 19",
        "timeslots": timeslots_day_1,
        "tracks": tracks,
    },
    "2019-10-20": {
        "date":  "2019-10-20",
        "dateReadable": "October 20",
        "timeslots": timeslots_day_2,
        "tracks": tracks,
    }
}

# print(json.dumps(collection, indent=2))
with open("schedule.json", "w") as f:
    json.dump(collection, f, indent=2)
