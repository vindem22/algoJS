from collections import deque


graph = dict()
graph["you"] = ["John","Albert","Kristy"]
graph["Albert"] = ["Dima","Dennis", "Cassidy"]
graph["Cassidy"] = ["Lila"]
graph["Dennis"] = ["Gelbert"]
graph["Kristy"] = ["Marly","Voks", "Kendall"]
graph["Gelbert"] = []
graph["Marly"] = []
graph["Kendall"] = []
graph["Lila"] = []
graph["John"] = []
graph["Dima"] = []
graph["Voks"] = []

def search(name):
    search_queue = deque()
    search_queue += graph[name]
    searched = []
    while search_queue:
        person = search_queue.popleft()
        if not person in searched:
            if person_is_seller(person):
                print(path)
                return True
            else:
                search_queue += graph[person]
                searched.append(person)
    return False

def person_is_seller(name):
    sellers = {"Gelbert": True}
    if sellers.get(name):
       return True
    return False
search("you")
