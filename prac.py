actor = {"name": "John Cleese", "rank": "awesome"}

def get_last_name():
    try:
        return actor["last_name"]
    except:
        name = actor["name"]
        lastName = name.split(" ")[1]
        return lastName
  

get_last_name()
print("All exceptions caught! Good job!")
print("The actor's last name is %s" % get_last_name())